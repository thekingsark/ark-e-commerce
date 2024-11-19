'use server';

import { TAGS } from 'lib/prodigy/constants';
import { addToCart, getCart, removeFromCart, updateCart } from 'lib/prodigy';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function addItem(prevState: any, selectedVariantId: string | undefined) {
  let cartId = cookies().get('cartId')?.value;

  if (!selectedVariantId) {
    return 'Error adding item to cart';
  }

  try {
    const cart = await addToCart(cartId, [{ variantId: selectedVariantId, quantity: 1 }]);
    if (!cartId) {
      cookies().set('cartId', cart.id!);
    }

    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  let cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    const cart = await getCart(cartId);

    if (!cart) {
      return 'Error fetching cart';
    }

    const lineItem = cart.lines.find((line) => line.merchandise.id === merchandiseId);

    if (lineItem && lineItem.id) {
      await removeFromCart(cartId, lineItem.id);
      revalidateTag(TAGS.cart);
    } else {
      return 'Item not found in cart';
    }
  } catch (e) {
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  let cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart(cartId);

    if (!cart) {
      return 'Error fetching cart';
    }

    const lineItem = cart.lines.find((line) => line.merchandise.id === merchandiseId);

    if (lineItem && lineItem.id) {
      if (quantity === 0) {
        await removeFromCart(cartId, lineItem.id);
      } else {
        await updateCart(cartId, {
          id: lineItem.id,
          variantId: merchandiseId,
          quantity
        });
      }
    } else if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      await addToCart(cartId, [{ variantId: merchandiseId, quantity }]);
    }

    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return 'Error updating item quantity';
  }
}

export async function redirectToCheckout() {
  let cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  let cart = await getCart(cartId);

  if (!cart) {
    return 'Error fetching cart';
  }

  redirect(cart.checkoutUrl);
}

// Prodigy API doesn't support creation of empty cart
// export async function createCartAndSetCookie() {
//   let cart = await createCart();
//   cookies().set('cartId', cart.id!);
// }

import { revalidateProducts } from 'lib/prodigy';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidateProducts(req);
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  return revalidateProducts(req);
}

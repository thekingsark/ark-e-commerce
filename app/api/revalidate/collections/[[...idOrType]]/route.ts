import { revalidateCollections } from 'lib/prodigy';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidateCollections(req);
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  return revalidateCollections(req);
}

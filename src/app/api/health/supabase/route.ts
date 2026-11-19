import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!url || !publishableKey) {
    return NextResponse.json(
      { ok: false, service: 'supabase', error: 'configuration_missing' },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(`${url}/auth/v1/settings`, {
      headers: { apikey: publishableKey },
      cache: 'no-store',
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, service: 'supabase', status: response.status },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, service: 'supabase' });
  } catch {
    return NextResponse.json(
      { ok: false, service: 'supabase', error: 'unreachable' },
      { status: 502 },
    );
  }
}

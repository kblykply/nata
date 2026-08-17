import { NextResponse } from "next/server";

/**
 * Double opt-in doğrulama proxy'si.
 * Kullanıcıya SMS ile gelen kod, CRM üzerinden Mobildev IVT'ye iletilir.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { dataId, code, phone } = body || {};

    if (!dataId || !code) {
      return NextResponse.json(
        { ok: false, error: "Doğrulama kodu eksik." },
        { status: 400 }
      );
    }

    const upstream = await fetch(
      "https://api.configgo.com/nata_core/api/mobildev/ivt/webhook/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ dataId, code, phone }),
      }
    );

    const text = await upstream.text();
    let parsed: any = null;
    try {
      parsed = JSON.parse(text);
    } catch {}

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed?.message ?? "Doğrulama başarısız.",
        },
        { status: upstream.status }
      );
    }

    return NextResponse.json({ ok: true, data: parsed ?? text }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Bilinmeyen hata" },
      { status: 500 }
    );
  }
}

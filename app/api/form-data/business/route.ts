import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, message, email, project_name, business_info } = body || {};
    if (!name || !phone || !email || !business_info) {
      return NextResponse.json(
        { ok: false, error: "Eksik alanlar var." },
        { status: 400 }
      );
    }

    const upstream = await fetch("https://www.salihkaankoc.net/nata-core/form-data/business", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, phone, message, email, project_name, business_info }),
    });

    const text = await upstream.text();
    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, status: upstream.status, body: text },
        { status: upstream.status }
      );
    }

    let parsed: any = null;
    try { parsed = JSON.parse(text); } catch {}

    return NextResponse.json({ ok: true, data: parsed ?? text }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Bilinmeyen hata" },
      { status: 500 }
    );
  }
}


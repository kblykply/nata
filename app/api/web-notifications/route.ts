import { NextResponse } from "next/server";

const UPSTREAM = "https://api.configgo.com/nata-core/web-notifications";

export async function GET() {
  try {
    const res = await fetch(UPSTREAM, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      return NextResponse.json({ data: [] });
    }
    const json = await res.json();
    return NextResponse.json(json);
  } catch {
    return NextResponse.json({ data: [] });
  }
}

// /app/api/contact/route.ts

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      // If email is included, send to /second endpoint
      const endpoint = body.email
        ? "https://www.salihkaankoc.net/nata-core/form-data/second"
        : "https://www.salihkaankoc.net/nata-core/form-data";
  
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      const data = await res.json();
  
      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ success: false, error: "Proxy server error." }),
        { status: 500 }
      );
    }
  }
  
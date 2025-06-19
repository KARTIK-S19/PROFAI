let latestReply = null;

export async function POST(req) {
  try {
    const body = await req.json();
    const reply = body?.response?.message;

    if (reply) {
      latestReply = reply;
      console.log("📬 Agent's reply:", latestReply);
    } else {
      console.warn("❌ No response.message found:", body);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  const replyToSend = latestReply;
  latestReply = null; // ✅ clear reply after sending
  return Response.json({ reply: replyToSend });
}

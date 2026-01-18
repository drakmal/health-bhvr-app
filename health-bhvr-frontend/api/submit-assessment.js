export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = req.body; // Vercel parses JSON automatically
  return res.status(200).json({ ok: true, received: payload });
}

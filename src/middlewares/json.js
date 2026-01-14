export async function json(req, res) {
  const buffers = [];

  //percorrendo cada pedaço da stream da req e adicionando no array, enquanto n for percorrida por completo nada abaixo é executado
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("Content-type", "application/json");
}

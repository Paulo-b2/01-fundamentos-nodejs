import http from "node:http";

//compreendido a diferença entre uma aplicação Stateful(dados em memória) e uma aplicação Stateless

//JSON

// Cabeçalhos (Requisição/Resposta) => Metadados

//HTTP Status Code

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

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

  if (method === "GET" && url === "/users") {
    //Early return
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  let body = {};
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Cuerpo inválido' }), {
      status: 400,
      headers: { 'Content-Type':'application/json' },
    });
  }
  const { username, password } = body || {};
  // Leer de variables de entorno
  const { ADMIN_USERNAME, ADMIN_PASSWORD } = import.meta.env;

  // Comparar credenciales (en tiempo real, nunca exponer valores)
  if (
    typeof username === 'string' &&
    typeof password === 'string' &&
    username === ADMIN_USERNAME &&
    password === ADMIN_PASSWORD
  ) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type':'application/json' },
    });
  }

  // Si falla, retorna 401
  return new Response(JSON.stringify({ success: false, message: 'Credenciales inválidas' }), {
    status: 401,
    headers: { 'Content-Type':'application/json' },
  });
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({error: 'Método no permitido'}), {
    status: 405,
    headers: {'Content-Type': 'application/json'},
  });
};

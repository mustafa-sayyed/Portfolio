export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = `https://www.toptal.com/developers/feed2json/convert${url.search}`;
  
  const response = await fetch(targetUrl);
  const data = await response.text();
  
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
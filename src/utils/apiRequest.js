// utils/apiRequest.js
export async function sendRequest(apiContext, method, url, payload = null, headers = {}) {
  const options = {
    headers: {
      'x-api-key': process.env.API_KEY || 'reqres-free-v1',
      ...headers
    },
    ...(payload && { data: payload })
  };

  const response = await apiContext[method.toLowerCase()](url, options);

  let data = null;
  try {
    data = await response.json();
  } catch {
    // ignore if not JSON
  }

  return { response, data };
}

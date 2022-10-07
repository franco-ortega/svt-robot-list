const METHODS_WITHOUT_BODY = ['GET', 'DELETE'];

const request = async (method, path, data) => {
  const headers = METHODS_WITHOUT_BODY.includes(method)
    ? {}
    : { 'Content-Type': 'application/json' };

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${path}`, {
    method,
    headers,
    body: JSON.stringify(data)
  }).then((res) => res.json());

  return response;
};

export const getData = (path) => request('GET', path);

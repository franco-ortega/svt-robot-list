export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await fetch(
      'https://60c8ed887dafc90017ffbd56.mockapi.io/robots'
    ).then((res) => res.json());

    res.status(200).json(data);
  }
}

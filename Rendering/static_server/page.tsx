async function getData() {
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  const data = res.json();
  return data;
}

export default async function StaticServer() {
  const data = await getData();
  return <div>{data.content}</div>;
}

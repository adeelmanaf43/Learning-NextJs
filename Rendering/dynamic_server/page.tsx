async function getData() {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "no-store",
  });
  return res.json();
}

export default async function DynamicServer() {
  const data = await getData();
  return <div>{data.content}</div>;
}

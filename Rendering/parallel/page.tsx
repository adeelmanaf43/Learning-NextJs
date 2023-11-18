async function getFictionBooks() {
  const res = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction"
  );
  return res.json();
}

async function getNonFictionBooks() {
  const res = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction"
  );
  return res.json();
}

export default async function Parallel() {
  const fictionBooks = await getFictionBooks();
  const nonFictionBooks = await getNonFictionBooks();
  const [fiction, nonFiction] = await Promise.all([
    fictionBooks,
    nonFictionBooks,
  ]);

  return (
    <div>
      <h1 className="font-bold text-2xl">Fiction books</h1>
      {fiction.map((item: any) => (
        <ul>
          <li>
            {item.name} - {item.type}
          </li>
        </ul>
      ))}
      <h1 className="font-bold text-2xl">Non-Fiction books</h1>
      {nonFiction.map((item: any) => (
        <ul>
          <li>
            {item.name} - {item.type}
          </li>
        </ul>
      ))}
    </div>
  );
}

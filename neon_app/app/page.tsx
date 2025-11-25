export const dynamic = "force-dynamic"; // ⬅ important

export default async function Home() {
  const res = await fetch("https://neon-9n15pncuu-igneciarathnas-projects.vercel.app/api/users", {
    method: "GET",
    cache: "no-store", // ⬅ makes data always fresh
  });

  const data = await res.json();
 
  return (
     <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Users List</h1>
   {data.users.map((user: {id: number, name: string}) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </main>
  );
}

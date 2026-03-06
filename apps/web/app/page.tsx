import { client } from "@repo/db/client";

export default async function Home() {
  // const user = await client.user.findFirst();

  console.log(user); // check server logs

  return (
    <div>
          name:
          <p>{user?.username}</p>
          <p>{user?.password}</p>
          password:
    </div>
  );
}

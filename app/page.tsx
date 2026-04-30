import getUser from "@/utils/user-session";
import HomeComponent from "./components/home/HomeComponent";
import { User } from "./types/types";

export default async function Home() {
  const user: User = await getUser();

  return (
    <HomeComponent user={user}/>
  );
}

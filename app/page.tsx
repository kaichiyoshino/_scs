import { get } from "http";
import Image from "next/image";
import { User } from "./types/types";
import { auth } from "@/auth";
import MyPage from "./components/layouts/MyPage";
import FirstPage from "./components/layouts/FirstPage";

export default async function Home() {
  const session = await auth();

  return <main className="">{session ? <MyPage /> : <FirstPage />}</main>;
}

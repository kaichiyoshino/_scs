import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { SignIn, SignOut } from "./AuthParts";

const UserButton = async () => {
  const session = await auth();
  if (!session?.user) return <SignIn provider="github" />;

  return <SignOut />;
};

export default UserButton;

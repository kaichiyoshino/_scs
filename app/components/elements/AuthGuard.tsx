"use client";
import { cookies } from "next/headers";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);
  if (token) {
    return <div>{children}</div>;
  }
};

export default AuthGuard;

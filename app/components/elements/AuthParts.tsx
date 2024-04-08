import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button {...props} type="submit">
        Sign In
      </Button>
    </form>
  );
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button {...props} type="submit">
        Sign Out
      </Button>
    </form>
  );
}

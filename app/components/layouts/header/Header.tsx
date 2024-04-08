import Link from "next/link";
import React from "react";
import { SignIn } from "../../elements/AuthParts";
import { auth } from "@/auth";
import UserButton from "../../elements/UserButton";
import QuestionForm from "../../elements/QuestionForm";

const Header = async () => {
  return (
    <div className="divide-y border-gray-200 dark:border-gray-800 border-b">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
            Camera@Lab
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <UserButton />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

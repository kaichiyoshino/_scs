"use client";
import React, { useEffect, useState } from "react";
import QuestionForm from "../elements/QuestionForm";
import { supabase } from "@/lib/supabaseClient";

const FirstPage = () => {
  return (
    <div className="px-10 py-5">
      <div className="font-sans font-bold text-[8rem] xl:text-[12rem] mt-[10rem]  text-emerald-500">
        Hello, Everyone
      </div>
      <div className="mx-[22rem] xl:mx-[50rem] font-sans font-bold text-[4.5rem] text-blue-300 text-nowrap">
        @Katayama Laboratory
      </div>
    </div>
  );
};

export default FirstPage;

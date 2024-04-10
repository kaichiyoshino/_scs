import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { data, error } = await supabase.storage.from("pictures").list("", {
    limit: 10,
    offset: 0,
    sortBy: { column: "created_at", order: "desc" },
  });
  return NextResponse.json(data);
}

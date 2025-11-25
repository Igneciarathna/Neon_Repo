// app/api/users/route.ts
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const rows = await sql`SELECT * FROM users LIMIT 10`;
    return NextResponse.json({ users: rows });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

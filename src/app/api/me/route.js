import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Anawat Ratanakitsorn",
    studentId: "650610818",
  });
};

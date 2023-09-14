import { DB, readDB, writeDB } from "@/app/libs/DB";
import { headers } from "next/headers";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  console.log.headers
  readDB();
  return NextResponse.json(
    {
    ok: true,
    rooms:DB.rooms
    // totalRooms:
  });
}

  export const POST = async (request) => {
    const payload = checkToken();
    if(!payload){
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
    }
    readDB();
    const foundRoom = DB.rooms.find((x)=>x.roomId === roomId && x.roomName === roomName)
    if(foundRoom){
    return NextResponse.json(
      {
        ok: false,
        message: `Room ${"replace this with room name"} already exists`,
      },
      { status: 400 }
    );
    }
  
    DB.enrollments.push({
      studentId,
      courseNo,
    });
    if(!foundRoom)
    return NextResponse.json({
      ok: true,
      message: "You has enrolled a course successfully",
    });
  };
  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });

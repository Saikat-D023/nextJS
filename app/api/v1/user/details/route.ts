import { NextResponse } from "next/server";

export function GET() {

    return NextResponse.json({
        user: "harkirat",
        email: "harkirat@gmail.com"
    })
}

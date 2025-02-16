import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    console.log(code);

    if (!code) {
        return NextResponse.redirect("/error");
    }

    const body = new URLSearchParams({
        "grant_type": "authorization_code",
        "code": String(code),
        "redirect_uri": "http://localhost:3000/api/callback",
    }).toString();

    try {
        const response = await fetch(`https://discord.com/api/v10/oauth2/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + Buffer.from(`${process.env.AUTH_DISCORD_ID}:${process.env.AUTH_DISCORD_SECRET}`).toString('base64')
            },
            body: body
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            console.error("Error fetching token:", errorData);
            return NextResponse.redirect("http://localhost:3000/error");
        }

        const result = await response.json();
        console.log(result);

        return NextResponse.json(result);
    } catch (err) {
        console.error("Fetch error:", err);
        return NextResponse.redirect("http://localhost:3000/error");
    }
}

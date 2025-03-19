import { NextResponse } from "next/server";
export async function middleware(req) {
    const url = req.nextUrl.clone();
    // Make an API call (simulating SSR behavior)

    console.log('Generate new CSRF token....'); // every time page refresh/change, new CSRF token will be generated
    const response = await fetch("https://botestda.grameenphone.com/api/v1/csrf-token");
    // Access the CSRF token from the response headers
    const csrfToken = response.headers.get('X-CSRF-TOKEN'); // Adjust the header name if necessary
    // Set CSRF token in cookies if available
    const res = NextResponse.next();
    if (csrfToken) {
        // Set the CSRF token in a cookie with HttpOnly and Secure flags for safety
        res.cookies.set('csrf-token', csrfToken, {
            httpOnly: true,
            path: '/',
        });
    }
    return res;
}
// Apply middleware to all routes
export const config = {
    matcher: ['/','/about'], // Apply middleware only to the About page
};

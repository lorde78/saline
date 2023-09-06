import { createCookie } from '@remix-run/node'

export const salineJWTCookie = createCookie("SalineToken", {
    maxAge: 60*60*24*7,
});
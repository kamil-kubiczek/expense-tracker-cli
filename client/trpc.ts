import { createTRPCClient, httpBatchLink } from "@trpc/client"
import type { ResponseEsque } from "@trpc/client/dist/internals/types"
import type { AppRouter } from "expense-tracker-api"
import makeFetchCookie from "fetch-cookie"

export const fetchCookie = makeFetchCookie(fetch)

export const trpc = createTRPCClient<AppRouter>({
   links: [
      httpBatchLink({
         url: process.env["SERVER_URL"] as string,
         async fetch(url, options): Promise<ResponseEsque> {
            const response = await fetchCookie(url, {
               ...options,
               credentials: "include"
            })

            return response as unknown as ResponseEsque
         }
      })
   ]
})

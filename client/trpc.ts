import { createTRPCClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "expense-tracker-api"

export const trpc = createTRPCClient<AppRouter>({
   links: [
      httpBatchLink({
         url: process.env["SERVER_URL"] as string
      })
   ]
})

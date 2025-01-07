import type { LoginRouterOutput } from "expense-tracker-api"

export type Context = {
   user: {
      id: LoginRouterOutput | null
   }
}

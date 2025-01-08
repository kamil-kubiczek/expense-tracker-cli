import consola from "consola"
import { ErrorCause } from "../types/errors"
import { TRPCClientError } from "@trpc/client"
import type { AppRouter } from "expense-tracker-api"

export function handleError(error: any) {
   if (isTRPCClientError(error)) {
      consola.error(
         "Server responded with error:",
         JSON.stringify(
            {
               name: error.name,
               cause: error.cause,
               message: error.message[0] == "{" || error.message[0] == "[" ? JSON.parse(error.message) : error.message
            },
            null,
            2
         )
      )
      return
   }
   if (error && typeof error == "object" && "cause" in error && error.cause == ErrorCause.USER_NOT_LOGGED_IN) {
      consola.log("You are not logged in.")
      return
   }
   console.error(error)
   consola.error("Exited due to error or CTRL + C")
   process.exit(1)
}

export function isTRPCClientError(cause: unknown): cause is TRPCClientError<AppRouter> {
   return cause instanceof TRPCClientError
}

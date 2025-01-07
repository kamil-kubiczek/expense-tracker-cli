import consola from "consola"
import { ErrorCause } from "../types/errors"

export function handleError(error: any) {
   if (error && typeof error == "object" && "cause" in error && error.cause == ErrorCause.USER_NOT_LOGGED_IN) {
      consola.log("You are not logged in.")
      return
   }
   console.error(error)
   consola.error("Exited due to error or CTRL + C")
   process.exit(1)
}

import type { Context } from "../types/context"
import { ErrorCause } from "../types/errors"

export default function assertUserExistsInContext(context: Context) {
   if (!context.user.id) {
      throw new Error("Cannot continue. User is not logged in", {
         cause: ErrorCause.USER_NOT_LOGGED_IN
      })
   }
}

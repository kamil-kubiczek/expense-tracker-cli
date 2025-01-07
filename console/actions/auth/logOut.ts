import consola from "consola"
import { trpc } from "../../../client/trpc"
import type { Context } from "../../types/context"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import { handleError } from "../../utils/errors"

export default async function logOut(context: Context) {
   try {
      assertUserExistsInContext(context)

      consola.start(`Logging out...`)
      await trpc.logout.mutate()

      context.user.id = null
      consola.success(`Successfully logged out.`)
   } catch (error) {
      handleError(error)
   }
}

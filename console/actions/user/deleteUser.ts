import consola from "consola"
import type { Context } from "../../types/context"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import { handleError } from "../../utils/errors"
import { trpc } from "../../../client/trpc"

export default async function deleteAccount(context: Context) {
   try {
      assertUserExistsInContext(context)
      consola.start(`Deleting your account...`)
      await trpc.removeUser.mutate()
      context.user.id = null
      consola.error("Successfully deleted account. Register to create new one")
   } catch (error) {
      handleError(error)
   }
}

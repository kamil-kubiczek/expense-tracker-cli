import consola from "consola"
import { trpc } from "../../../client/trpc"
import type { Context } from "../../types/context"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import { handleError } from "../../utils/errors"

export default async function refreshToken(context: Context) {
   try {
      assertUserExistsInContext(context)

      consola.start(`Refreshing your access token...`)
      await trpc.refreshToken.mutate()
      consola.success(`Successfully refreshed your access token. Token saved in cookie.`)
   } catch (error) {
      handleError(error)
   }
}

import consola from "consola"
import type { Context } from "../../types/context"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import { handleError } from "../../utils/errors"
import { trpc } from "../../../client/trpc"

export default async function getAllExpenses(context: Context) {
   try {
      assertUserExistsInContext(context)
      consola.start("Getting your expenses...")
      const expenses = await trpc.getExpenses.query({})
      consola.success("Successfully retrieved your expenses.")
      consola.box(JSON.stringify(expenses, null, 2))
   } catch (error) {
      handleError(error)
   }
}

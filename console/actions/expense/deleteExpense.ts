import consola from "consola"
import type { Context } from "../../types/context"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import { handleError } from "../../utils/errors"
import { trpc } from "../../../client/trpc"

export default async function deleteExpense(context: Context) {
   try {
      assertUserExistsInContext(context)

      const id = await consola.prompt("Expense ID to delete:", {
         type: "text"
      })

      consola.start(`Deleting ${id} expense...`)
      await trpc.deleteExpense.mutate({ id })
      consola.success("Successfully deleted expense")
   } catch (error) {
      handleError(error)
   }
}

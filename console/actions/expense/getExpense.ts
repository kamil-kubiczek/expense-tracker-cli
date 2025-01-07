import consola from "consola"
import type { Context } from "../../types/context"
import { trpc } from "../../../client/trpc"
import { handleError } from "../../utils/errors"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"

export default async function getExpense(context: Context) {
   try {
      assertUserExistsInContext(context)
      const id = await consola.prompt("Expense ID to retrieve:", {
         type: "text"
      })

      consola.start(`Getting ${id} expense...`)
      const expense = await trpc.getExpense.query({ id })
      consola.success("Successfully retrieved expense")
      consola.box(JSON.stringify(expense, null, 2))
   } catch (error) {
      handleError(error)
   }
}

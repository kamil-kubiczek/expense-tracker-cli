import consola from "consola"
import type { Context } from "../../types/context"
import { handleError } from "../../utils/errors"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import assertCategoryIsString from "../../utils/expense/assertCategoryIsString"
import { trpc } from "../../../client/trpc"

export default async function updateExpense(context: Context) {
   try {
      assertUserExistsInContext(context)

      const id = await consola.prompt("Expense ID to update:", {
         type: "text"
      })

      const amount = await consola.prompt("New amount:", {
         type: "text"
      })

      let category = await consola.prompt("New category:", {
         type: "select",
         options: [
            "Groceries",
            "Leisure",
            "Electronics",
            "Utilities",
            "Clothing",
            "Health",
            {
               label: "Other",
               value: "Other",
               hint: "You can specify your own category"
            }
         ]
      })

      if (category === "Other") {
         const customCategory = await consola.prompt("New custom category:", {
            type: "text",
            initialValue: "Other"
         })
         category = customCategory
      }

      assertCategoryIsString(category)

      const collectedExpenseData = {
         id,
         amount: Number(amount),
         category
      }

      consola.start(`Updating ${id} expense...`)
      const updatedExpense = await trpc.updateExpense.mutate(collectedExpenseData)

      consola.success("Successfully updated expense")
      consola.box(JSON.stringify(updatedExpense, null, 2))
   } catch (error) {
      handleError(error)
   }
}

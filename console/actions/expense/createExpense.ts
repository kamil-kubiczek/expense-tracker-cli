import consola from "consola"
import type { Context } from "../../types/context"
import assertUserExistsInContext from "../../utils/assertUserExistsInContext"
import { handleError } from "../../utils/errors"
import { trpc } from "../../../client/trpc"
import assertCategoryIsString from "../../utils/expense/assertCategoryIsString"

export default async function createExpense(context: Context) {
   try {
      assertUserExistsInContext(context)

      const amount = await consola.prompt("Amount:", {
         type: "text"
      })

      let category = await consola.prompt("Category:", {
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
         const customCategory = await consola.prompt("Custom category:", {
            type: "text",
            initialValue: "Other"
         })

         category = customCategory
      }

      assertCategoryIsString(category)

      const collectedExpenseData = {
         amount: Number(amount),
         category
      }

      consola.start("Creating new expense...")
      const response = await trpc.createExpense.mutate(collectedExpenseData)
      consola.success(`Successfully created new expense. ID ${response.id}`)
   } catch (error) {
      handleError(error)
   }
}

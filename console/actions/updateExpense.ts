import consola from "consola"

export default async function updateExpense(context) {
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

   const collectedExpenseData = {
      amount,
      category
   }

   consola.start(`Updating ${id} expense...`)
   await Bun.sleep(1000)
   consola.error("TODO")
}

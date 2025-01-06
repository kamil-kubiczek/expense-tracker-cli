import consola from "consola"

export default async function createExpense(context) {
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

   const collectedExpenseData = {
      amount,
      category
   }

   consola.start("Creating new expense...")
   await Bun.sleep(1000)
   consola.error("TODO")
}

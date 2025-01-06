import consola from "consola"

export default async function deleteExpense(context) {
   const id = await consola.prompt("Expense ID to delete:", {
      type: "text"
   })

   consola.start(`Deleting ${id} expense...`)
   await Bun.sleep(1000)
   consola.error("TODO")

   consola.error("TODO")
}

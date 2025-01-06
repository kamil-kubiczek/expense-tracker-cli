import consola from "consola"

export default async function getExpense(context) {
   const id = await consola.prompt("Expense ID to retrieve:", {
      type: "text"
   })

   consola.start(`Getting ${id} expense...`)
   await Bun.sleep(1000)
   consola.error("TODO")
}

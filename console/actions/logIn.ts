import consola from "consola"

export default async function logIn(context) {
   try {
      const email = await consola.prompt("Email:", {
         type: "text",
         placeholder: "Your email here",
         cancel: "reject"
      })

      const username = await consola.prompt("Password:", {
         type: "text",
         placeholder: "Your password here"
      })

      const collectedUserData = {
         email,
         username
      }

      consola.start(`Logging in ${email}...`)
      await Bun.sleep(1000)
      consola.error("TODO")
   } catch (error) {
      console.error(error)
      consola.error("Exited due to error or CTRL + C")
      process.exit(1)
   }
}

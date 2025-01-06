import consola from "consola"

export default async function register(context) {
   const email = await consola.prompt("New account email:", {
      type: "text",
      placeholder: "Your email here"
   })

   const username = await consola.prompt("Password:", {
      type: "text",
      placeholder: "Your password here"
   })

   const collectedUserData = {
      email,
      username
   }

   consola.start(`Registering new user with ${email} email...`)
   await Bun.sleep(1000)
   consola.error("TODO")
}

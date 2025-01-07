import consola from "consola"
import { trpc } from "../../../client/trpc"
import type { Context } from "../../types/context"
import { handleError } from "../../utils/errors"

export default async function register(context: Context) {
   try {
      const email = await consola.prompt("New account email:", {
         type: "text",
         placeholder: "Your email here"
      })

      const password = await consola.prompt("Password:", {
         type: "text",
         placeholder: "Your password here"
      })

      const collectedUserData = {
         email,
         password
      }
      consola.start(`Registering new user with ${email} email...`)

      const id = await trpc.register.mutate(collectedUserData)

      consola.success(`Success! Account with ID ${id} created. Now you can log in.`)
   } catch (error) {
      handleError(error)
   }
}

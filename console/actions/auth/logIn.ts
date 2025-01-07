import consola from "consola"
import type { Context } from "../../types/context"
import { trpc } from "../../../client/trpc"
import { handleError } from "../../utils/errors"

export default async function logIn(context: Context) {
   try {
      const email = await consola.prompt("Email:", {
         type: "text",
         placeholder: "Your email here",
         cancel: "reject"
      })

      const password = await consola.prompt("Password:", {
         type: "text",
         placeholder: "Your password here (plain text, be carefull)"
      })

      const collectedUserData = {
         email,
         password
      }

      consola.start(`Logging in ${email}...`)

      const id = await trpc.login.mutate(collectedUserData)

      context.user.id = id

      consola.success(`Successfully logged in. Your ID: ${id}.`)
   } catch (error) {
      handleError(error)
   }
}

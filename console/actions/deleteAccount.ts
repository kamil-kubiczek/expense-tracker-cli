import consola from "consola"

export default async function deleteAccount(context) {
   consola.start(`Deleting your account...`)
   await Bun.sleep(1000)
   consola.error("TODO")
}

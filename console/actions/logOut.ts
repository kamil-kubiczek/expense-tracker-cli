import consola from "consola"

export default async function logOut(context) {
   consola.start(`Logging out...`)
   await Bun.sleep(1000)
   consola.error("TODO")
}

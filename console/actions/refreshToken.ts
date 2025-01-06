import consola from "consola"

export default async function refreshToken(context) {
   consola.start(`Refreshing your access token...`)
   await Bun.sleep(1000)
   consola.error("TODO")
}

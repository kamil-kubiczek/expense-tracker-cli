import consola from "consola"
import { Actions } from "./types/actions"
import createExpense from "./actions/createExpense"
import getAllExpenses from "./actions/getAllExpenses"
import getExpense from "./actions/getExpense"
import deleteAccount from "./actions/deleteAccount"
import deleteExpense from "./actions/deleteExpense"
import logIn from "./actions/logIn"
import refreshToken from "./actions/refreshToken"
import register from "./actions/register"
import updateExpense from "./actions/updateExpense"

async function initialize() {
   const context = { user: null }
   consola.success("Welcome to Expense Tracker CLI client!")
   consola.box("You will be asked to choose an action. If you want to exit the program, press CTRL + C few times")

   await startSession(context)
}

async function startSession(context) {
   const action = await consola.prompt("Choose an action: ", {
      options: [
         Actions.REGISTER,
         Actions.LOG_IN,
         Actions.REFRESH_TOKEN,
         Actions.DELETE_ACCOUNT,
         Actions.CREATE_EXPENSE,
         Actions.GET_ALL_EXPENSES,
         Actions.GET_EXPENSE,
         Actions.UPDATE_EXPENSE,
         Actions.DELETE_EXPENSE
      ],
      type: "select"
   })

   switch (action) {
      case Actions.CREATE_EXPENSE:
         await createExpense(context)
         startSession(context)
         break
      case Actions.GET_ALL_EXPENSES:
         await getAllExpenses(context)
         startSession(context)
         break
      case Actions.GET_EXPENSE:
         await getExpense(context)
         startSession(context)
         break
      case Actions.UPDATE_EXPENSE:
         await updateExpense(context)
         startSession(context)
         break
      case Actions.DELETE_EXPENSE:
         await deleteExpense(context)
         startSession(context)
         break
      case Actions.DELETE_ACCOUNT:
         await deleteAccount(context)
         startSession(context)
         break
      case Actions.REGISTER:
         await register(context)
         startSession(context)
         break
      case Actions.LOG_IN:
         await logIn(context)
         startSession(context)
         break
      case Actions.REFRESH_TOKEN:
         await refreshToken(context)
         startSession(context)
         break
   }
   return
}

await initialize()

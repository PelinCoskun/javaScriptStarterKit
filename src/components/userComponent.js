import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1=new MongoLogger()
let userService = new UserService(logger1)


let user1 = new User(1, "Pelin", "Coskun", "İstanbul","25")
let user2 = new User(2, "İzel", "Coskun", "İstanbul","19")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




let customer = { id: 1, firstName: "Pelin" }

customer.lastName = "Coskun"
console.log(customer.lastName)

console.log("-----------------------")
userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

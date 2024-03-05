import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let userService = new UserService


let user1 = new User(1, "Pelin", "Coskun", "İstanbul")
let user2 = new User(1, "İzel", "Coskun", "İstanbul")
userService.add(user1)
userService.add(user2)


userService.getById(1)
userService.list()



let customer = { id: 1, firstName: "Pelin" }

customer.lastName = "Coskun"
console.log(customer.lastName)
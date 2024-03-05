import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let userService =new UserService


let user1=new User()
userService.add()


userService.getById(1)
userService.list()



let customer ={id:1,firstName:"Pelin"}

customer.lastName="Coskun"
console.log(customer.lastName)
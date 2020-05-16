import { User } from "./models/User";

const user = new User({ name: "myname", age: 20 });

console.log(user.get("name"))
console.log(user.get("age"))

user.set({ name: "David" });
console.log(user.get("name"))
console.log(user.get("age"))

user.on("change", () => {
  console.log("something changed")
})
user.on("change", () => {
  console.log("changed #2")
})
user.on("save", () => {
  console.log("something saved")
})


user.trigger("change");

user.trigger("save");

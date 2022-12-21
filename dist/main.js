"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
// Example of how zod works
var UserSchema = zod_1.z.object({
    // which is string and it has to be longer than 3 characters
    username: zod_1.z.string().min(3),
    age: zod_1.z.number(),
    birthday: zod_1.z.date(),
    isPorgrammer: zod_1.z.boolean().optional(),
    test: zod_1.z.undefined(),
    // there are few other options such as 
    // z.unknown(), z.null(), z.any(), etc...
    never: zod_1.z.never()
});
var user = { user: "Calvin", age: 20, birthday: new Date(), isPorgrammer: true };
console.log(UserSchema.parse(user));
// using safePaser for return to us an object which  has a success
// field which will be true or false.
// It is important if you want to do this for a form validation.
// console.log(UserSchema.safeParse(user)) // false;
// console.log(UserSchema.safeParse(user.success)) // true
//console.log()

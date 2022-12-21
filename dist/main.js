"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
// Example of how zod works
var UserSchema = zod_1.z.object({
    // which is string
    username: zod_1.z.string()
});
var user = { user: 1 };
console.log(UserSchema.parse(user));
console.log("asdfasdf");

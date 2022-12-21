import {z} from "zod";


// Example of how zod works
const UserSchema = z.object({
    // which is string
    username: z.string(),
    age: z.number(),
    birthday: z.date(),
    isPorgrammer: z.boolean()
});

//automatically inferred the type. 
type User = z.infer<typeof UserSchema>

const user = {user: "Calvin"}

console.log(UserSchema.parse(user));
// using safePaser for return to us an object which  has a success
// field which will be true or false.
// It is important if you want to do this for a form validation.
console.log(UserSchema.safeParse(user))
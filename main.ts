import {z} from "zod";


// Example of how zod works
const UserSchema = z.object({
    // which is string and it has to be longer than 3 characters
    username: z.string().min(3).max(20),
    age: z.number().gt(0),
    birthday: z.date(),
    // nullable vs nullish
    // nullish allows you to use undefined and null
    // nullable only allows you to define null.
    isPorgrammer: z.boolean().nullable(),
    test: z.undefined(),
    // there are few other options such as 
    // z.unknown(), z.null(), z.any(), etc...
    never: z.never(),
    // this is a default value
    default: z.boolean().default(true)
});

//automatically inferred the type. 
type User = z.infer<typeof UserSchema>

const user = {
    user: "Calvin",
    age: 20, 
    birthday: new Date(), 
    isPorgrammer: null
}


//console.log(UserSchema.parse(user))

console.log(UserSchema.safeParse(user));
// using safePaser for return to us an object which  has a success
// field which will be true or false.
// It is important if you want to do this for a form validation.
// console.log(UserSchema.safeParse(user)) // false;
// console.log(UserSchema.safeParse(user.success)) // true


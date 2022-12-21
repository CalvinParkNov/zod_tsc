import { z } from "zod"

//notice this will be readonly
const hobbies = ["Programming", "Weight Lifting", "Guitar"] as const

const UserSchema = z.object({
    username: z.string(),
    age: z.number().default(Math.random),
    birthday: z.date(),
    isProgrammer: z.boolean(),
    hobby: z.enum(hobbies)
})

type User = z.infer<typeof UserSchema>

const user = {
    username: "Calvin",
    birtdhay: new Date(),
    isProgammer: false,
    hobby: "Programming"
}

console.log(UserSchema.parse(user))
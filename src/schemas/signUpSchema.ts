import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast of 2 characters.")
    .max(12,"Username must be no more than 12 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

    export const signUpSchema = z.object({
        username: usernameValidation,
        email: z.string().email({message: "Invalid Email Address."}),
        password: z.string().min(6,{message: "Password must be atleast 6 characters"})
    })
import { z } from 'zod'

export const OnboardingSchema = z.object({
  username: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(8).max(20),
  repeatPassword: z.string().min(8).max(20),
  terms: z.boolean().refine((data) => data),
})

export type OnboardingSchema = z.infer<typeof OnboardingSchema>

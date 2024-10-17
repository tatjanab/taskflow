import { z } from 'zod'

const taskSchema = z.object({
  _id: z.number(),
  type: z.string(),
  summary: z.string(),
  status: z.string(),
  details: z.object({
    assignee: z.string(),
    priority: z.string(),
    labels: z.array(z.string()),
    creationDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date format',
    }),
    completionDate: z
      .union([z.string().nullable(), z.null()])
      .refine((val) => val === null || !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      }),
  }),
  description: z.string(),
})

export default taskSchema

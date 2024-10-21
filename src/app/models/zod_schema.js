import { z } from 'zod'

const taskSchema = z.object({
  _id: z.number(),
  type: z.enum(['Feature', 'Improvement', 'Task', 'Bug']),
  summary: z.string(),
  status: z.string(),
  details: z.object({
    assignee: z.string(),
    priority: z.string().optional(),
    labels: z.array(z.string()).optional(),
    creationDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      })
      .optional(),
    completionDate: z
      .union([z.string().nullable(), z.null()])
      .refine((val) => val === null || !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      })
      .optional(),
  }),
  description: z.string(),
})

export default taskSchema

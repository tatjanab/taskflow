import { z } from 'zod'

const taskSchema = z.object({
  _id: z.string().min(1, { message: 'ID must contain at least 1 character' }),
  type: z.enum(['Feature', 'Improvement', 'Task', 'Bug']),
  summary: z
    .string()
    .min(1, { message: 'Summary must contain at least 1 character' }),
  status: z.enum(['Open', 'In Progress', 'Done']),
  details: z.object({
    assignee: z
      .string()
      .min(1, { message: 'Name must contain at least 1 character' }),
    priority: z.enum(['Low', 'Medium', 'High']),
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
  description: z.string().optional(),
})

export default taskSchema

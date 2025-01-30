import { z } from 'zod'

const taskSchema = z.object({
  _id: z.number().optional(),
  type: z.enum(['Feature', 'Improvement', 'Task', 'Bug']).optional(),
  summary: z
    .string()
    .min(1, { message: 'Summary must contain at least 1 character' }),
  status: z.enum(['Open', 'In Progress', 'Done']).optional(),
  details: z.object({
    assignee: z
      .string()
      .min(1, { message: 'Name must contain at least 1 character' }),
    priority: z.enum(['Low', 'Medium', 'High']).optional(),
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

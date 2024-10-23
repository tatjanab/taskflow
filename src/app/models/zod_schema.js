import { z } from 'zod'

const taskSchema = z.object({
  _id: z.string().min(1),
  type: z.enum(['Feature', 'Improvement', 'Task', 'Bug']),
  summary: z.string().min(1),
  status: z.enum(['Open', 'In Progress', 'Done']),
  details: z.object({
    assignee: z.string().min(1),
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

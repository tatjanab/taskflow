import { z } from 'zod'

const taskSchema = z.object({
  _id: z.number().optional(),
  taskId: z.string().optional(),
  projectId: z.string().optional(),
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

const projectSchema = z.object({
  _id: z.number().optional(),
  name: z
    .string()
    .min(1, { message: 'Name must contain at least 1 character' }),
  description: z.string().optional(),
  prefix: z
    .string()
    .min(3, { message: 'Prefix must contain 3 characters' })
    .max(3, { message: 'Prefix must contain 3 characters' }),
})

export { taskSchema, projectSchema }

export type TaskItem = {
  _id: number
  type: string
  summary: string
  status: string
  details: {
    assignee?: string
    priority: string
    labels?: string[]
    creationDate: string
    completionDate?: string
  }
  description?: string
}

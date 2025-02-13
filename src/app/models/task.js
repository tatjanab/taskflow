import mongoose from 'mongoose'

// Define the schema
const TaskSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Keep MongoDB's default unique ID
  taskId: {
    type: String,
    required: true,
    unique: true,
  }, // Store prefixed task ID (e.g., "WEB-1", "MKT-2")
  projectId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Task', 'Bug', 'Feature', 'Improvement'],
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Done'],
    required: true,
  },
  details: {
    assignee: String,
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
    },
    labels: [String],
    creationDate: {
      type: Date,
      default: Date.now,
    },
    completionDate: Date,
  },
  description: String,
})

// Use the existing `Task` model if it exists, otherwise create a new one
const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema)

export default Task

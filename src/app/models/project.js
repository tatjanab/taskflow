import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  prefix: { type: String, required: true, unique: true },
  counter: { type: Number, default: 0 },
})

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema)

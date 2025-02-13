import mongoose from 'mongoose'

const CounterSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
    unique: true,
  }, // each project has its own counter
  seq: { type: Number, default: 0 },
})

export default mongoose.models.Counter ||
  mongoose.model('Counter', CounterSchema)

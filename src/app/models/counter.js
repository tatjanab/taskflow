import mongoose from 'mongoose'

const CounterSchema = new mongoose.Schema({
  projectId: {
    type: String,
    ref: 'Project',
    required: true,
    unique: true,
  }, // each project has its own counter
  seq: { type: Number, default: 0 },
})

if (mongoose.models.Counter) {
  delete mongoose.models.Counter
}

export default mongoose.models.Counter ||
  mongoose.model('Counter', CounterSchema)

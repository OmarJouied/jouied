import mongoose, { InferSchemaType, models, Schema } from 'mongoose'

const ProjectSchema = new Schema({
  lang: String,
  title: {
    type: String,
    required: [true, 'Please provide a title for this job.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: [String],
    required: [true, 'Please provide the description name for this job.'],
  },
  image: String,
  sourceLink: String,
  liveLink: String,
});

const Project = models.Project || mongoose.model('Project', ProjectSchema);

export default Project;

export type ProjectType = InferSchemaType<typeof ProjectSchema> & { _id: string };
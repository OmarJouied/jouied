import mongoose, { models, Schema } from 'mongoose'

const JobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this job.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  company: {
    type: String,
    required: [true, 'Please provide the company name for this job.'],
    maxlength: [60, 'Company name cannot be more than 60 characters'],
  },
  period: {
    type: String,
    required: [true, 'Please provide the period for this job.'],
  },
  description: {
    type: [String],
    required: [true, 'Please provide a description for this job.'],
  },
});

const Job = models.Job || mongoose.model('Job', JobSchema);

export default Job;


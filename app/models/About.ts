import mongoose, { InferSchemaType, models, Schema } from 'mongoose'

const AboutSchema = new Schema({
  lang: String,
  description: {
    type: String,
    required: [true, 'Please provide a description for this about.'],
  },
});

const About = models.About || mongoose.model('About', AboutSchema);

export default About;

export type AboutType = InferSchemaType<typeof AboutSchema> & { _id: string };

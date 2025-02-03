import mongoose, { InferSchemaType, models, Schema } from 'mongoose'

const TestimonialSchema = new Schema({
  lang: String,
  name: {
    type: String,
    required: [true, 'Please provide a name for this testimonial.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  role: {
    type: String,
    required: [true, 'Please provide the role for this testimonial.'],
    maxlength: [25, 'Company name cannot be more than 60 characters'],
  },
  company: {
    type: String,
    required: [true, 'Please provide the company name for this testimonial.'],
    maxlength: [60, 'Company name cannot be more than 60 characters'],
  },
  image: {
    type: String,
  },
  text: {
    type: String,
    required: [true, 'Please provide the text name for this testimonial.'],
  },
});

const Testimonial = models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

export default Testimonial;

export type TestimonialType = InferSchemaType<typeof TestimonialSchema> & { _id: string };

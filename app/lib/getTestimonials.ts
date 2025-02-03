import Testimonial, { TestimonialType } from '../models/Testimonial';
import { connectDB } from './db';

export async function getTestimonials(lang: string): Promise<TestimonialType[]> {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({ lang }).sort({ period: -1 }).lean() as TestimonialType[];
    return testimonials.map(testimonial => ({
      ...testimonial,
      _id: testimonial._id.toString()
    }));
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch testimonials')
  }
}

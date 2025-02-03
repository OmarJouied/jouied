import About, { AboutType } from '../models/About'
import { connectDB } from './db';

export async function getAbout(lang: string): Promise<AboutType> {
  try {
    await connectDB();
    const about = await About.findOne({ lang }).lean() as AboutType;
    return { ...about, _id: about._id.toString() };
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch about')
  }
}

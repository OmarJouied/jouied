import Job from '../models/Job'
import { connectDB } from './db';

export interface Job {
  _id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export async function getJobs(): Promise<Job[]> {
  try {
    await connectDB();
    return await Job.find({}).sort({ period: -1 }).lean();
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch jobs')
  }
}

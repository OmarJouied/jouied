import Job, { JobType } from '../models/Job'
import { connectDB } from './db';

export async function getJobs(lang: string): Promise<JobType[]> {
  try {
    await connectDB();
    const jobs = await Job.find({ lang }).sort({ period: -1 }).lean() as unknown as JobType[];
    return jobs.map(job => ({
      ...job,
      _id: job._id.toString()
    }));
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch jobs')
  }
}

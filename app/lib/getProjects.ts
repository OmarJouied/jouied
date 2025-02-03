import Project, { ProjectType } from '../models/Project';
import { connectDB } from './db';

export async function getProjects(lang: string): Promise<ProjectType[]> {
  try {
    await connectDB();
    const projects = await Project.find({ lang }).lean() as ProjectType[];
    return projects.map(project => ({
      ...project,
      _id: project._id.toString()
    }));
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch projects')
  }
}

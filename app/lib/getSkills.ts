import Skill, { SkillType } from '../models/Skill';
import { connectDB } from './db';

export async function getSkills(): Promise<SkillType[]> {
  try {
    await connectDB();
    const skills = await Skill.find({}).lean() as unknown as SkillType[];
    return skills.map(skill => ({
      ...skill,
      _id: skill._id.toString()
    }));
  } catch (e) {
    console.error(e)
    throw new Error('Failed to fetch skills')
  }
}

import mongoose, { InferSchemaType, models, Schema } from 'mongoose'

const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this skill.'],
  },
});

const Skill = models.Skill || mongoose.model('Skill', SkillSchema);

export default Skill;

export type SkillType = InferSchemaType<typeof SkillSchema> & { _id: string };

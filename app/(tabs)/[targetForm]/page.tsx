import FormInfo from "@/app/components/FormInfo";
import { Textarea } from "@/components/ui/textarea";

const page = async ({ params }: { params: Promise<{ targetForm: string }> }) => {
  const { targetForm } = await params;

  return (
    <FormInfo target={targetForm}>
      <Textarea name="description" className="flex-1 ltr" rows={8} placeholder={`content...`} />
    </FormInfo>
  )
}

export default page
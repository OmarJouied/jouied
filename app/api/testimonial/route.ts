import Testimonial from "@/app/models/Testimonial";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    const testimonial = new Testimonial(data);
    await testimonial.save();

    return Response.json({
      message: "Testimonial created successfully"
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create testimonial", { status: 500 });
  }
}
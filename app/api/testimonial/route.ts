import Testimonial from "@/app/models/Testimonial";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    await Testimonial.create(data);
    return Response.json({
      message: "Testimonial created successfully"
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create testimonial", { status: 500 });
  }
}
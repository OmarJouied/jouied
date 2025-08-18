import Contact from "@/components/contact"

const page = () => {
  return (
    <Contact myEmail={process.env.MY_EMAIL!} />
  )
}

export default page
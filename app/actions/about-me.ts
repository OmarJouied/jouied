export default async function aboutMe(state: { error: string; errorTextarea: string }, formData: FormData) {
  console.log({ error: state.error, formData: Object.entries(formData) })
  return {}
}
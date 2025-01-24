'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'contact.errors.nameRequired'),
  email: z.string().email('contact.errors.invalidEmail'),
  message: z.string().min(10, 'contact.errors.messageLength'),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.issues.reduce((acc, issue) => {
        acc[issue.path[0]] = [issue.message];
        return acc;
      }, {} as Record<string, string[]>)
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    const response = await fetch(`${process.env.HOST_NAME}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    const result = await response.json()

    if (!result.success) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, errors: { server: ['contact.errors.serverError'] } }
  }
}

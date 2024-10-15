import { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { email, password } = req.body
    await signIn('credentials', { email, password })

    res.status(200).json({ success: true })
  } catch (error) {
    // Narrow down error type safely
    if (error instanceof Error) {
      if ((error as any).type === 'CredentialsSignin') {
        // If error type exists and is 'CredentialsSignin'
        res.status(401).json({ error: 'Invalid credentials' })
      } else {
        res.status(500).json({ error: error.message || 'Something went wrong' })
      }
    } else {
      res.status(500).json({ error: 'Unknown error occurred' })
    }
  }
}

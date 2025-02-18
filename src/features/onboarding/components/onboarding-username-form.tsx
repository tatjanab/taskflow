'use client'

import { z } from 'zod'
import { OnboardingSchema } from '../schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useOnboardingStore } from '../store'
import { useEffect } from 'react'
const onBoardingUsernameSchema = OnboardingSchema.pick({
  username: true,
  terms: true,
})

type OnBoardingUsernameSchema = z.infer<typeof onBoardingUsernameSchema>

export default function OnboardingUsernameForm() {
  // TODO: best to combine all the data into a single object, in a custom hook
  const firstName = useOnboardingStore((state) => state.firstName)
  const lastName = useOnboardingStore((state) => state.lastName)
  const password = useOnboardingStore((state) => state.password)
  const repeatPassword = useOnboardingStore((state) => state.repeatPassword)
  const router = useRouter()

  const form = useForm<OnBoardingUsernameSchema>({
    resolver: zodResolver(onBoardingUsernameSchema),
    defaultValues: {
      username: '',
      terms: false,
    },
  })

  const onSubmit = (data: OnBoardingUsernameSchema) => {
    console.log({
      ...data,
      firstName,
      lastName,
      password,
      repeatPassword,
    })
  }

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated()) return
    if (!firstName || !lastName || !password || !repeatPassword) {
      router.push('/onboarding/name')
    }
  }, [firstName, lastName, password, repeatPassword, router])

  return (
    <div className='mx-auto max-w-[400px] space-y-6 mt-8'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 rounded-lg border p-6 shadow-sm'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your username'
                      {...field}
                      className='w-full'
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='terms'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>
                    Terms and Conditions
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' className='w-full'>
            Continue
          </Button>
        </form>
      </Form>
    </div>
  )
}

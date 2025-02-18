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
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useOnboardingStore } from '../store'
import { useEffect } from 'react'
const onBoardingPasswordSchema = OnboardingSchema.pick({
  password: true,
  repeatPassword: true,
})

type OnBoardingPasswordSchema = z.infer<typeof onBoardingPasswordSchema>

export default function OnboardingPasswordForm() {
  const firstName = useOnboardingStore((state) => state.firstName)
  const lastName = useOnboardingStore((state) => state.lastName)
  const setData = useOnboardingStore((state) => state.setData)
  const router = useRouter()
  const form = useForm<OnBoardingPasswordSchema>({
    resolver: zodResolver(onBoardingPasswordSchema),
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  })

  const onSubmit = (data: OnBoardingPasswordSchema) => {
    setData(data)
    router.push('/onboarding/username')
  }

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated()) return
    if (!firstName || !lastName) {
      router.push('/onboarding/name')
    }
  }, [firstName, lastName, router])

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
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='********'
                      type='password'
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
              name='repeatPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='********'
                      type='password'
                      {...field}
                      className='w-full'
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

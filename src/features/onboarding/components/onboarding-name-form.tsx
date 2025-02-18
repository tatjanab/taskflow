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

const onBoardingNameSchema = OnboardingSchema.pick({
  firstName: true,
  lastName: true,
})

type OnBoardingNameSchema = z.infer<typeof onBoardingNameSchema>

export default function OnboardingNameForm() {
  const setData = useOnboardingStore((state) => state.setData)
  const router = useRouter()
  const form = useForm<OnBoardingNameSchema>({
    resolver: zodResolver(onBoardingNameSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  const onSubmit = (data: OnBoardingNameSchema) => {
    console.log(data)
    setData(data)
    router.push('/onboarding/password')
  }

  return (
    <div className='mx-auto max-w-[400px] space-y-6 mt-8'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Welcome! Let's get started
        </h1>
        <p className='text-sm text-muted-foreground'>
          Please enter your name to continue
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 rounded-lg border p-6 shadow-sm'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your first name'
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
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium'>
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your last name'
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

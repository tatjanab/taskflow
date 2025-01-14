import { Textarea, FormLabel, FormControl } from '@chakra-ui/react'

function TaskDescriptionSection({ errors, register }) {
  return (
    <>
      <FormControl className='flex flex-col mb-5'>
        <FormLabel
          htmlFor='description'
          mb='5px'
          fontSize='xs'
          fontWeight='bold'
        >
          Description
        </FormLabel>
        <Textarea
          id='description'
          {...register('description')}
          size='sm'
          resize='none'
        ></Textarea>
        {errors.description && (
          <p className='text-xs text-red-600'>{errors.description.message}</p>
        )}
      </FormControl>
    </>
  )
}

export default TaskDescriptionSection

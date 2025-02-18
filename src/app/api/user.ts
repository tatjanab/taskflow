import { User } from '../models/user'

export type GetUsersFilters = {
  limit: number
  page: number
}

export const getUsers = async (filters?: GetUsersFilters): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [{ id: 1, name: 'Iris' }] as User[]
}
1

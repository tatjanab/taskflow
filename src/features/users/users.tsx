'use client'

import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/api/user'
import { useUserStore } from './userStore'

function Users() {
  const { filters } = useUserStore()

  const { data } = useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })

  return (
    <div className='mt-8 ml-8 text-xl'>
      {data?.map((user) => <div key={user.id}>{user.name}</div>)}
      <UsersFilters />
    </div>
  )
}

function UsersFilters() {
  const { setFilters } = useUserStore()

  return (
    <div>
      <input
        type='number'
        onChange={(e) => setFilters({ limit: Number(e.target.value), page: 1 })}
      />
    </div>
  )
}

export default Users

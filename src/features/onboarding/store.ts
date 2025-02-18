import { create } from 'zustand'
import { OnboardingSchema } from './schema'
import { createJSONStorage, persist } from 'zustand/middleware'
type OnboardingStore = Partial<OnboardingSchema> & {
  setData: (data: Partial<OnboardingSchema>) => void
}

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),
    {
      name: 'onboarding-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

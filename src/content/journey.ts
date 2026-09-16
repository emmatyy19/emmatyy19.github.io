import type { JourneyEntry } from '../types/content.ts'

export const journeyEntries = [
  {
    id: 'shanghai',
    city: 'Shanghai',
    duration: '11 years',
    order: 1,
    supportingImages: [],
  },
  {
    id: 'cupertino',
    city: 'Cupertino',
    duration: '7 years',
    order: 2,
    supportingImages: [],
  },
  {
    id: 'new-york',
    city: 'New York City',
    duration: '9 years',
    order: 3,
    supportingImages: [],
  },
] satisfies readonly JourneyEntry[]

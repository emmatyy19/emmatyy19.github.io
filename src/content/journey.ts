import type { JourneyEntry } from '../types/content.ts'

export const journeyEntries = [
  {
    id: 'shanghai',
    city: 'Shanghai',
    duration: '11 years',
    order: 1,
    caption: '[SHANGHAI_CAPTION]',
    primaryPlaceholder: {
      id: 'shanghai-primary',
      label: '[SHANGHAI_PRIMARY]',
      orientation: 'landscape',
    },
    supportingPlaceholders: [
      {
        id: 'shanghai-detail-1',
        label: '[SHANGHAI_DETAIL_1]',
        orientation: 'portrait',
      },
      {
        id: 'shanghai-detail-2',
        label: '[SHANGHAI_DETAIL_2]',
        orientation: 'square',
      },
    ],
    supportingImages: [],
  },
  {
    id: 'cupertino',
    city: 'Cupertino',
    duration: '7 years',
    order: 2,
    caption: '[CUPERTINO_CAPTION]',
    primaryPlaceholder: {
      id: 'cupertino-primary',
      label: '[CUPERTINO_PRIMARY]',
      orientation: 'landscape',
    },
    supportingPlaceholders: [
      {
        id: 'cupertino-detail-1',
        label: '[CUPERTINO_DETAIL_1]',
        orientation: 'square',
      },
      {
        id: 'cupertino-detail-2',
        label: '[CUPERTINO_DETAIL_2]',
        orientation: 'portrait',
      },
    ],
    supportingImages: [],
  },
  {
    id: 'new-york',
    city: 'New York City',
    duration: '9 years',
    order: 3,
    caption: '[NYC_CAPTION]',
    primaryPlaceholder: {
      id: 'nyc-primary',
      label: '[NYC_PRIMARY]',
      orientation: 'landscape',
    },
    supportingPlaceholders: [
      {
        id: 'nyc-detail-1',
        label: '[NYC_DETAIL_1]',
        orientation: 'portrait',
      },
      {
        id: 'nyc-detail-2',
        label: '[NYC_DETAIL_2]',
        orientation: 'square',
      },
    ],
    supportingImages: [],
  },
] satisfies readonly JourneyEntry[]

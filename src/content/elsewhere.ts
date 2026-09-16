import type { HobbyGallery } from '../types/content.ts'

export const hobbyGalleries = [
  {
    id: 'golf',
    label: 'Golf',
    images: [],
    placeholders: [
      { id: 'golf-1', label: '[GOLF_IMAGE_1]', orientation: 'landscape' },
      { id: 'golf-2', label: '[GOLF_IMAGE_2]', orientation: 'landscape' },
      { id: 'golf-3', label: '[GOLF_IMAGE_3]', orientation: 'square' },
      { id: 'golf-4', label: '[GOLF_IMAGE_4]', orientation: 'landscape' },
      { id: 'golf-5', label: '[GOLF_IMAGE_5]', orientation: 'portrait' },
    ],
  },
  {
    id: 'crochet',
    label: 'Crochet',
    images: [],
    placeholders: [
      { id: 'crochet-1', label: '[CROCHET_IMAGE_1]', orientation: 'portrait' },
      { id: 'crochet-2', label: '[CROCHET_IMAGE_2]', orientation: 'landscape' },
      { id: 'crochet-3', label: '[CROCHET_IMAGE_3]', orientation: 'square' },
      { id: 'crochet-4', label: '[CROCHET_IMAGE_4]', orientation: 'landscape' },
      { id: 'crochet-5', label: '[CROCHET_IMAGE_5]', orientation: 'square' },
    ],
  },
] satisfies readonly HobbyGallery[]

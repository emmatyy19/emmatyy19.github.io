import type { HobbyGallery } from '../types/content.ts'
import oceanDriveUrl from '../assets/elsewhere/golf/ocean-drive.webp'
import practiceSwingUrl from '../assets/elsewhere/golf/practice-swing.webp'
import psyduckCaddieUrl from '../assets/elsewhere/golf/psyduck-caddie.webp'
import puttingGreenUrl from '../assets/elsewhere/golf/putting-green.webp'
import rainbowRoundUrl from '../assets/elsewhere/golf/rainbow-round.webp'

export const hobbyGalleries = [
  {
    id: 'golf',
    label: 'Golf',
    images: [
      {
        id: 'ocean-drive',
        src: oceanDriveUrl,
        alt: 'Emma finishing a golf swing on a coastal course',
        orientation: 'landscape',
      },
      {
        id: 'practice-swing',
        src: practiceSwingUrl,
        alt: 'Emma practicing her golf swing indoors',
        orientation: 'landscape',
      },
      {
        id: 'psyduck-caddie',
        src: psyduckCaddieUrl,
        alt: 'A Psyduck plush toy sitting on a golf bag beside a coastal fairway',
        orientation: 'square',
      },
      {
        id: 'rainbow-round',
        src: rainbowRoundUrl,
        alt: 'A rainbow arching over a golf green, with Emma near the flag',
        orientation: 'square',
      },
      {
        id: 'putting-green',
        src: puttingGreenUrl,
        alt: 'Emma lining up a putt beside a red flag',
        orientation: 'portrait',
      },
    ],
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

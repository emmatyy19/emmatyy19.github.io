import shanghaiSkylineUrl from '../assets/journey/shanghai/skyline.jpg'
import shanghaiResidenceUrl from '../assets/journey/shanghai/historic-residence.webp'
import shanghaiXiaolongbaoUrl from '../assets/journey/shanghai/xiaolongbao-cutout.webp'
import cupertinoAppleParkUrl from '../assets/journey/cupertino/apple-park.jpg'
import cupertinoDogUrl from '../assets/journey/cupertino/dog.webp'
import cupertinoMatadorUrl from '../assets/journey/cupertino/matador.jpg'
import newYorkAutumnAvenueUrl from '../assets/journey/new-york/autumn-avenue.jpg'
import newYorkSharedMealUrl from '../assets/journey/new-york/shared-meal-cutout.webp'
import newYorkWashingtonSquareUrl from '../assets/journey/new-york/washington-square.jpg'
import type { JourneyEntry } from '../types/content.ts'

export const journeyEntries = [
  {
    id: 'shanghai',
    city: 'Shanghai',
    duration: '11 years',
    order: 1,
    caption: 'where I grew up',
    primaryImage: {
      id: 'shanghai-skyline',
      src: shanghaiSkylineUrl,
      alt: 'Painted illustration of the Shanghai skyline across the river',
      orientation: 'landscape',
    },
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
    supportingImages: [
      {
        id: 'shanghai-historic-residence',
        src: shanghaiResidenceUrl,
        alt: 'Painted illustration of a historic Shanghai residence framed by trees',
        orientation: 'landscape',
      },
      {
        id: 'shanghai-xiaolongbao',
        src: shanghaiXiaolongbaoUrl,
        alt: 'Painted illustration of xiaolongbao in a bamboo steamer',
        orientation: 'landscape',
      },
    ],
  },
  {
    id: 'cupertino',
    city: 'Cupertino',
    duration: '7 years',
    order: 2,
    caption: 'teenage years and a fresh start',
    primaryImage: {
      id: 'cupertino-apple-park',
      src: cupertinoAppleParkUrl,
      alt: 'Painted aerial illustration of Apple Park in Cupertino',
      orientation: 'landscape',
    },
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
    supportingImages: [
      {
        id: 'cupertino-matador',
        src: cupertinoMatadorUrl,
        alt: 'Purple and gold painted matador mascot illustration',
        orientation: 'landscape',
      },
      {
        id: 'cupertino-dog',
        src: cupertinoDogUrl,
        alt: 'Hand-painted illustration of a small Yorkshire terrier resting with its paws forward',
        orientation: 'square',
      },
    ],
  },
  {
    id: 'new-york',
    city: 'New York City',
    duration: '9 years',
    order: 3,
    caption: 'college, the start of my career, and a life of my own',
    primaryImage: {
      id: 'new-york-autumn-avenue',
      src: newYorkAutumnAvenueUrl,
      alt: 'Painted illustration of a New York avenue in autumn',
      orientation: 'landscape',
    },
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
    supportingImages: [
      {
        id: 'new-york-washington-square',
        src: newYorkWashingtonSquareUrl,
        alt: 'Painted illustration of the Washington Square Arch',
        orientation: 'landscape',
      },
      {
        id: 'new-york-shared-meal',
        src: newYorkSharedMealUrl,
        alt: 'Painted illustration of a shared meal around a tabletop grill',
        orientation: 'landscape',
      },
    ],
  },
] satisfies readonly JourneyEntry[]

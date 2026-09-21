import type { HobbyGallery } from '../types/content.ts'
import bananaCatUrl from '../assets/elsewhere/crochet/banana-cat.webp'
import eggKeyCoverBackUrl from '../assets/elsewhere/crochet/egg-key-cover-back.webp'
import eggKeyCoverFrontUrl from '../assets/elsewhere/crochet/egg-key-cover-front.webp'
import lionPlushUrl from '../assets/elsewhere/crochet/lion-plush.webp'
import tulipBouquetUrl from '../assets/elsewhere/crochet/tulip-bouquet.webp'
import tulipMatUrl from '../assets/elsewhere/crochet/tulip-mat.webp'
import wreathOrnamentUrl from '../assets/elsewhere/crochet/wreath-ornament.webp'
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
    images: [
      {
        id: 'tulip-bouquet',
        src: tulipMatUrl,
        alt: 'A flat crocheted circle edged with purple tulips',
        secondary: {
          src: tulipBouquetUrl,
          alt: 'The same crochet piece gathered into a bouquet of purple tulips',
        },
        orientation: 'square',
      },
      {
        id: 'egg-key-cover',
        src: eggKeyCoverFrontUrl,
        alt: 'Front view of a crocheted fried-egg cover on a key',
        secondary: {
          src: eggKeyCoverBackUrl,
          alt: 'Reverse view of the same crocheted fried-egg key cover',
        },
        orientation: 'landscape',
      },
      {
        id: 'banana-cat',
        src: bananaCatUrl,
        alt: 'A small crocheted cat hugging a banana',
        orientation: 'landscape',
      },
      {
        id: 'wreath-ornament',
        src: wreathOrnamentUrl,
        alt: 'A crocheted red and green wreath ornament with a bow',
        orientation: 'portrait',
      },
      {
        id: 'lion-plush',
        src: lionPlushUrl,
        alt: 'A small golden crocheted lion plush',
        orientation: 'square',
      },
    ],
    placeholders: [
      { id: 'crochet-1', label: '[CROCHET_IMAGE_1]', orientation: 'portrait' },
      { id: 'crochet-2', label: '[CROCHET_IMAGE_2]', orientation: 'landscape' },
      { id: 'crochet-3', label: '[CROCHET_IMAGE_3]', orientation: 'square' },
      { id: 'crochet-4', label: '[CROCHET_IMAGE_4]', orientation: 'landscape' },
      { id: 'crochet-5', label: '[CROCHET_IMAGE_5]', orientation: 'square' },
    ],
  },
] satisfies readonly HobbyGallery[]

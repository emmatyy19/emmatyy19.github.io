import columbiaSketchUrl from '../assets/education/columbia-low-library.png'
import nyuSketchUrl from '../assets/education/nyu-stern.png'

export const educationEntries = [
  {
    id: 'nyu',
    institution: 'NYU Stern',
    degree: 'B.S. in Business',
    focus: 'Finance & Data Science',
    detail: 'Computer Science minor · 2021',
    image: {
      src: nyuSketchUrl,
      alt: 'Hand-drawn violet illustration of NYU Stern',
    },
  },
  {
    id: 'columbia',
    institution: 'Columbia University',
    degree: 'M.S. in Computer Science',
    focus: 'Machine Learning',
    detail: 'Expected 2027',
    image: {
      src: columbiaSketchUrl,
      alt: 'Hand-drawn blue illustration of Low Library and Alma Mater at Columbia University',
    },
  },
] as const

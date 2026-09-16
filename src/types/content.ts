export type ProfessionalLink = Readonly<{
  id: 'github' | 'linkedin' | 'resume'
  label: string
  href: string
  external: boolean
}>

export type ImageAsset = Readonly<{
  id: string
  src: string
  alt: string
  caption?: string
  orientation?: 'landscape' | 'portrait' | 'square'
}>

export type JourneyId = 'shanghai' | 'cupertino' | 'new-york'

export type JourneyEntry = Readonly<{
  id: JourneyId
  city: string
  duration: string
  order: 1 | 2 | 3
  caption?: string
  primaryImage?: ImageAsset
  supportingImages: readonly ImageAsset[]
  sketch?: string
}>

export type HobbyId = 'golf' | 'crochet'

export type HobbyGallery = Readonly<{
  id: HobbyId
  label: string
  images: readonly ImageAsset[]
}>

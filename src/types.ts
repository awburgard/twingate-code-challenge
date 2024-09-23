interface HeroImage {
  type: 'hero'
  imageURI: string
}

interface ImageText {
  type: 'image-text'
  imageURI: string
  text: string
  title?: string
  leftToRight?: boolean // default is true
}

interface Data {
  type: 'data'
  url: string
}

export type Content = HeroImage | ImageText | Data

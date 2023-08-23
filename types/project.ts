export interface Project {
  pictures?: {
    data: {
      ext: string
      url: string
      width: number
      height: number
      caption: string
      alternativeText: string
    }[]
  }
  description?: string
  title: string
  locale: string
}
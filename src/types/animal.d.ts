export interface Name {
  common: string
  scientific: string
}

export interface Animal extends Name {
  id: number
  name: Name
  image: string
  conservation_status: string
  link_to_adoption: string
}

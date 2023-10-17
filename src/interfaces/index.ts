export interface IUser {
  name: string
  phoneNumber: number
  password: string
}

export interface INews {
  title: string
  description: string
  createdDate: string
  profileImage: string
  newsImage: string
  comment?: number
  like?: number
}

export type user = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: hair
  domain: string
  ip: string
  address: adress
  macAddress: string
  university: string
  bank: bank
}

type adress = {
  adr: string
  city: string
  coordinates: coordinate
  postalCode: string
  state: string
}
//TYPE BANK IN USER
type bank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

type coordinate = {
  lat: number
  lng: number
}

type hair = {
  color: string
  type: string
}
const users: user = {
  id: 30,
  firstName: 'Maurine',
  lastName: 'Stracke',
  maidenName: 'Abshire',
  age: 31,
  gender: 'female',
  email: 'kdulyt@umich.edu',
  phone: '+48 143 590 6847',
  username: 'kdulyt',
  password: '5t6q4KC7O',
  birthDate: '1964-12-18',
  image: 'https://robohash.org/Maurine.png?set=set4',
  bloodGroup: 'O-',
  height: 170,
  weight: 107.2,
  eyeColor: 'Blue',
  hair: {
    color: 'Blond',
    type: 'Wavy'
  },
  domain: 'ow.ly',
  ip: '97.11.116.84',
  address: {
    adr: '81 Seaton Place Northwest',
    city: 'Washington',
    coordinates: {
      lat: 38.9149499,
      lng: -77.01170259999999
    },
    postalCode: '20001',
    state: 'DC'
  },
  macAddress: '42:87:72:A1:4D:9A',
  university: 'Poznan School of Banking',
  bank: {
    cardExpire: '02/24',
    cardNumber: '6331108070510590026',
    cardType: 'switch',
    currency: 'Zloty',
    iban: 'MT70 MKRC 8244 59Z4 9UG1 1HY7 TKM6 1YX'
  }
}

export default users

import { Subject } from 'rxjs/Subject'

export class GeoPosition {
  latitude: number
  longitude: number
  speed: number
  visible: boolean
}

export class SmsMessage {
  idRadio: string
  text: string
  date: any
  state: string
}

export class Radio {
  id: number
  radioId: string
  name: string
  geoPosition?: Subject<GeoPosition>
  arsState?: Subject<string>
  smsMessages?: Subject<SmsMessage>
  radioTypeId?: number

  constructor() {}
}

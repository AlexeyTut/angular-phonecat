export interface IPhoneDetail {
  id: string,
  name: string,
  images: string[],
  additionalFeatures: string,
  android: {
    os: string,
    ui: string
  },
  availability: string[],
  battery: {
    standbyTime: string,
    talkTime: string,
    type: string
  },
  camera: {
    features: string[],
    primary: string
  },
  connectivity: {
    bluetooth: string,
    cell: string,
    gps: boolean,
    infrared: boolean,
    wifi: string
  },
  description: string,
  display: {
    screenResolution: string,
    screenSize: string,
    touchScreen: boolean
  },
  hardware: {
    accelerometer: boolean,
    audioJack: string,
    cpu: string,
    fmRadio: boolean,
    physicalKeyboard: boolean,
    usb: string
  },
  sizeAndWeight: {
    dimensions: [string, string, string],
    weight: string
  },
  storage: {
    flash: string,
    ram: string
  }
}

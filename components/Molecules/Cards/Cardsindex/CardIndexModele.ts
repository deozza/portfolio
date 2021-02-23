export default class CardIndexModele {
  constructor(img: string, imgAlt: string, title: string, text: string, imgSize: string = '64px') {
    this.img = img
    this.imgAlt = imgAlt
    this.imgSize = imgSize
    this.title = title
    this.text = text
  }

  img: string
  imgAlt: string
  imgSize: string
  title: string
  text: string
}

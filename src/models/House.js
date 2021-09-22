export class House {
  constructor(houseData = {}) {
    this.id = houseData.id
    this.price = houseData.price
    this.year = houseData.year
    this.levels = houseData.levels
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.imgUrl = houseData.imgUrl
    this.description = houseData.description
    this.creatorId = houseData.creatorId
    this.creator = houseData.creator || {}
  }
}

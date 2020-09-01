export default class House {
  constructor({ _id, imgUrl, year, bedrooms, price, bathrooms, levels, description, __v }) {
    this.id = _id
    this.imgUrl = imgUrl
    this.year = year
    this.bedrooms = bedrooms
    this.price = price
    this.bathrooms = bathrooms
    this.levels = levels
    this.description = description
    this.__v = __v
  }

  get Template() {
    return `
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h3 class="card-title">${this.bedrooms} - ${this.bathrooms} - ${this.levels}</h3>
              <h4 class="card-text">${this.year}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }






  }





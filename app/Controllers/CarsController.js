import { ProxyState } from "../AppState.js";
import carsService from "../Services/CarsService.js";

// private
function _drawCars() {
  console.log(6)
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById('data').innerHTML = template
}

function _drawCarsForms() {
  document.getElementById('form-element').innerHTML = `
  <form onsubmit="app.carsController.createCar()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="make">Make</label>
                        <input type="text" name="make" id="make" class="form-control" placeholder="Make...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="model">Model</label>
                        <input type="text" name="model" id="model" class="form-control" placeholder="Model...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="year">Year</label>
                        <input type="number" name="year" id="year" class="form-control" placeholder="Year..." min="1900"
                            max="2021">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="number" name="price" id="price" class="form-control" placeholder="Price...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add Car</button>
                </form>`
}

//Public
export default class CarsController {
  constructor() {
    // NOTE Add all Listeners
    ProxyState.on('cars', _drawCars)

    // NOTE Get all appropriate data
    this.getCars();
  }

  // NOTE this allows to fetch manually if needed
  getCars() {
    try {
      carsService.getCars();
    } catch (error) {
      console.error(error)
    }
  }

  makeCarsActive() {
    _drawCarsForms()
    _drawCars()
  }


  createCar() {
    event.preventDefault();
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.img.value
    }
    try {
      carsService.createCar(rawCar)
    } catch (error) {
      console.error(error)
    }
  }

  removeCar(id) {
    try {
      carsService.removeCar(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    try {
      carsService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }


}

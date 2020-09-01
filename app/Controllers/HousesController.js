import { ProxyState } from "../AppState.js";
import housesService from "../Services/housesService.js";


// private
function _drawHouses() {
  console.log(6)
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('data').innerHTML = template
}

function _drawHousesForms() {
  document.getElementById('form-element').innerHTML = `
  <form onsubmit="app.housesController.createHouse()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="text" name="price" id="price" class="form-control" placeholder="Price">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bedrooms">Bedrooms</label>
                        <input type="text" name="bedrooms" id="bedrooms" class="form-control" placeholder="Bedrooms">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bathrooms">Bathrooms</label>
                        <input type="number" name="bathrooms" id="bathrooms" class="form-control"
                            placeholder="Bathrooms">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="number" name="price" id="price" class="form-control" placeholder="Price...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input type="url" name="img" id="img" class="form-control" placeholder="Image Url">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add House</button>
                </form>`
}

// public
export default class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  getHouses() {
    try {
      housesService.getHouses();
    } catch (error) {
      console.error(error)
    }
  }

  makeHousesActive() {
    this.getHouses()
    _drawHousesForms();
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      id: form.id.value,
      imgUrl: form.img.value,
      year: form.year.value,
      bedrooms: form.bedrooms.value,
      price: parseInt(form.price.value),
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      description: form.description.value,
      __v: form.__v.value
    }
    try {
      housesService.createHouse(rawHouse)
    } catch (error) {
      console.error(error)
    }
  }

  removeHouse(id) {
    try {
      housesService.removeHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    try {
      housesService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }


}




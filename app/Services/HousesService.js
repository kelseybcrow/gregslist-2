import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

// public
class HousesService {
  async getHouses() {
    let res = await api.get('houses')
    ProxyState.houses = res.data.data.map(h => new House(h))
  }

  async removeCar(id) {
    await api.delete(`houses/${id}`)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
  }

  async bid(id) {
    let house = ProxyState.houses.find(h => h.id === id)
    if (!car) {
      throw new Error("House not found")
    }
    house.price += 100
    let res = await api.put(`houses/${id}`, { price: house.price })
    ProxyState.houses = ProxyState.houses
  }

  async createHouse(rawHouse) {
    let res = await api.post('houses', rawHouse)
    let house = new House(res.data.data)
    ProxyState.houses = [...ProxyState.houses, house]
  }

}

const SERVICE = new HousesService();
export default SERVICE;
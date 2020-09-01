import { ProxyState } from "../AppState.js";
import House from "..Models/House.js";
import { api } from "./AxiosService.js";

// public
class HousesService {
  async get Houses() {
    let res = await api.get('houses')
    ProxyState.houses = res.data.data.map(h => new House(h))
  }

  async removeCar(id) {
    await api.delete(`houses/${id}`)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
  }








}
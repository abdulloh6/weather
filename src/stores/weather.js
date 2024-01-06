import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
export const useWeather = defineStore('weather', {
  state: () => ({
    weather: null
  }),
  actions: {
    async getWeather(city = 'Toshkent') {
      try {
        const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_APIKEY}`)
        const { lat, lon, name } = res.data[0]
        const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_APIKEY}`)
        const weatherInfo = { name, ...res2.data }
        this.weather = weatherInfo
      } catch (error) {
        console.log(error);
      }
    }
  }
})

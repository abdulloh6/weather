<template>
  <div>
    <Header @search="weatherStore.getWeather($event)"/>
    <Content 
    :current="weatherStore.weather.current" 
    v-if="weatherStore.weather" 
    :timezone="weatherStore.weather.timezone"
    :name="weatherStore.weather.name"
    />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import { useWeather } from "@/stores/weather";
const weatherStore = useWeather()
weatherStore.getWeather()
</script>

<style lang="scss" scoped>

</style>

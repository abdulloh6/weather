<template>
  <div class="content container">
    <div class="content__left">
      <div class="content__left-info">
        <img v-if="descr == 'clear sky'" src="../assets/images/animated/day.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'few clouds'" src="../assets/images/animated/cloudy-day-2.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'light rain'" src="../assets/images/animated/rainy-3.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'rain'" src="../assets/images/animated/rainy-1.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'moderate rain'" src="../assets/images/animated/rainy-4.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'snow'" src="../assets/images/animated/snowy-5.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'light snow'" src="../assets/images/animated/snowy-1.svg" alt="" class="content__left-img" />
        <img v-else-if="descr == 'thunderstorm'" src="../assets/images/animated/thunder.svg" alt="" class="content__left-img" />
        <img v-else src="../assets/images/animated/cloudy.svg" alt="" class="content__left-img" />
      </div>
      <h1 class="content__left-temp">{{ Math.round(current.temp) }}°</h1>
      <h2 class="content__left-today">Сегодня</h2>
      <p class="content__left-time">Время: {{ getTime }}</p>
      <p class="content__left-city">Город: {{ name }}</p>
    </div>
    <div class="content__right">
      <img src="@/assets/images/cloud.png" alt="" class="content__right-img" />
      <div class="content__right-item">
        <div class="content__right-icon">
          <img src="@/assets/images/temp.png" alt="" />
        </div>
        <span class="content__right-descr"> Температура </span>
        <span class="content__right-text"> 20° - ощущается как 17° </span>
      </div>
      <div class="content__right-item">
        <div class="content__right-icon">
          <img src="@/assets/images/pressure.png" alt="" />
        </div>
        <span class="content__right-descr"> Давление </span>
        <span class="content__right-text"> 765 мм ртутного столба - нормальное </span>
      </div>
      <div class="content__right-item">
        <div class="content__right-icon">
          <img src="@/assets/images/precipitation.png" alt="" />
        </div>
        <span class="content__right-descr"> Осадки </span>
        <span class="content__right-text"> Без осадков </span>
      </div>
      <div class="content__right-item">
        <div class="content__right-icon">
          <img src="@/assets/images/wind.png" alt="" />
        </div>
        <span class="content__right-descr"> Ветер </span>
        <span class="content__right-text"> 3 м/с юго-запад - легкий ветер </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  current: Object,
  timezone: String,
  name: String,
});
const getTime = computed(() => {
  return new Date().toLocaleString("ru-RU", {
    timeZone: props.timezone,
    hourCycle: "h24",
    timeStyle: "short",
  });
});
const descr = computed(() => {
  return props.current.weather[0].description;
});
</script>

<style lang="scss" scoped></style>

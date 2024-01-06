<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a href="" class="logo"
          ><img src="../assets/images/Header_logo.svg" alt="" />vue weather</a
        >
        <ul class="header__list">
          <li><img src="../assets/images/gulp.svg" alt="" /></li>
          <li>
            <input
              @keydown.enter="$emit('search', search), (search = '')"
              v-model="search"
              type="text"
              class="header__input"
              placeholder="Выбрать город"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const search = ref(null);
</script>

<style lang="scss" scoped></style>

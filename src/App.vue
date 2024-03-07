<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const urlLogo = "https://www.deceroacien.com.mx/u/fotografias/m/2022/8/23/f1280x720-8144_139819_5050.jpg"

</script>

<template>
  <header>
    <div class="p-5 py-8 bg-slate-600 text-white font-bold font-xl">
      <nav class="w-full flex">
        <img alt="Vue logo" class="logo" :src=urlLogo width="150" height="150" />
        <div class="flex justify-center">
          <RouterLink class="mx-5" to="/">Home</RouterLink>
          <RouterLink class="mx-5" to="/list">Personalizados</RouterLink>
          <RouterLink class="mx-5" to="/about">Top cars</RouterLink>
          <RouterLink class="mx-5" to="/test">Test</RouterLink>
        </div>
        <div class="flex justify-end">
          <button>Login</button>
        </div>
      </nav>
    </div>
  </header>
  <div class="m-5">
    <RouterView />
  </div>
</template>

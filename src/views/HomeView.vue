<script setup lang="ts">
import { computed } from "vue";
import { useCarsStore } from "../stores/cars";

const store = useCarsStore();

const formattedPrice = (price: number) => {
  const formatted = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return `$${formatted}`;
};

const urlLogo =
  "https://www.deceroacien.com.mx/u/fotografias/m/2022/8/23/f1280x720-8144_139819_5050.jpg";
</script>

<template>
  <main>
    <p class="my-7 text-center text-2xl font-bold">Top cars</p>
    <div class="flex mt-5 justify-center">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="car in store.data" :key="car._id" class="card">
          <div class="flex mb-4">
            <h3 class="uppercase">{{ car.brand }} {{ car.model }}</h3>
            <p class="ml-auto">{{ car.year }}</p>
          </div>
          
          <img :src="urlLogo" alt="auto" height="100%" />
          <p class="py-2">Descripcion</p>
          <p class="text-sm">
            Potencia: <span class="font-semibold">{{ car.details.hp }}</span>
          </p>
          <p class="text-sm">Mi: {{ car.mileage }}</p>
          <div class="flex pt-3">
            <button class="p-1 px-2 rounded-md text-xs bg-slate-500 text-white">
              Ver más
            </button>
            <p class="ml-auto">{{ formattedPrice(car.price) }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.card {
  width: 300px;
  border-radius: 7px;
  border-color: gainsboro;
  border-width: 1px;
  padding: 10px;
  margin-inline: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

import { ref, type Ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

interface Car {
  _id: string & number;
  brand: string;
  model: string;
  year: number;
  category: string;
  price: number;
  formattedPrice: number,
  mileage: number;
  details: {
    hp: number
  }
}

export const useCarsStore = defineStore("cars", () => {
  let data: Ref<Car[]> =  ref([]);

  onMounted(async () => {
    await axios
      .get("http://localhost:4000/cars/")
      .then((response) => {
        data.value = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  return { data };
});

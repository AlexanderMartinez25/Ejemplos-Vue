<template>
  <div class="mb-5">
    <ul class="list-group">
      <li
        v-for="(item, index) of frutas"
        :key="item.id"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ index }} - {{ item.nombre }}
        <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
      </li>
    </ul>
    <button class="btn btn-danger mt-3" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"])
    // arrayOrdenado() {
    //   return this.frutas.splice().sort((a, b) => a.cantidad - b.cantidad);
    // }
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"])
  }
};
</script>

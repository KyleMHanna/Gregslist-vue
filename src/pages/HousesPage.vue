<template>
  <div>
    hello from houzzez
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { housesService } from '../services/HousesService.js'
export default {
  setup() {
    onMounted(() => {
      housesService.getHouses()
    })
    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>

<style>

</style>

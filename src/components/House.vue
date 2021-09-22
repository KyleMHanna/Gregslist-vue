<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'House', params: { houseId: house.id }}">
      <div class="card selectable">
        <!-- REVIEW PROPS -->
        <img :src="house.img" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>Built in: {{ house.year }} {{ house.bedrooms }}  {{ house.bathrooms }}</span>
            <span>${{ house.price }}</span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js'
import { House } from '../models/House.js'

export default {

  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {
      deleteHouse() {
        logger.log('working? from house.vue')
      }
    }
  }
}
</script>

<style>

</style>

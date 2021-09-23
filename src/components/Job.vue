<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'Job', params: { jobId: job.id }}">
      <div class="card selectable">
        <img :src="job.jobTitle" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>$ {{ job.rate }}</span>
            <span> Company {{ job.company }}</span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js'
import { Job } from '../models/Job.js'

export default {

  props: {
    job: { type: Job, required: true }
  },
  setup(props) {
    return {
      deleteJob() {
        logger.log('working? from job.vue')
      }
    }
  }
}
</script>

<style>

</style>

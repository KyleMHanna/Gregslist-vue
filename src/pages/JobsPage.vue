<template>
  <div class="container-fluid px-0">
    <div class="row py-2 bg-dark mb-4 top-bar">
      <div class="col-12 text-end">
        <button class="btn text-success lighten-30 selectable" data-bs-toggle="modal" data-bs-target="#house-form">
          Add a Listing
        </button>
      </div>
    </div>
    <div class="row">
      <House v-for="job in jobs" :key="job.id" :job="job" class="col-lg-3" />
    </div>

    <Modal id="job-form">
      <template #modal-title>
        Add your ⚒
      </template>
      <template #modal-body>
        <JobForm />
      </template>
    </Modal>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { jobsService } from '../services/JobsService.js'
export default {
  setup() {
    onMounted(() => {
      jobsService.getJobs()
    })
    return {
      jobs: computed(() => AppState.jobs)
    }
  }
}
</script>

<style>

</style>

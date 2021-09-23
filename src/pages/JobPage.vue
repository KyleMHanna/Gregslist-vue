<template>
  <div v-if="job" class="py-4">
    <div class="d-flex flex-wrap w-100">
      <Job :job="job" class="job-details" />
      <div class="ms-4 flex-grow-1">
        <p>
          <b>Contact Seller</b>
        </p>
        <div class="d-flex clip-text align-items-center">
          <img :src="job.creator.picture" alt="" class="rounded-circle" height="64">
          <h4 class="ms-3">
            {{ job.creator.name }}
          </h4>
        </div>
        <div v-if="job.creatorId === account.id">
          <p class="my-3">
            <b>Listing Controls</b>
          </p>
          <div class="">
            <button class="btn text-dark lighten-20" @click="remove(job)">
              <b>
                Remove Listing
              </b>
            </button>
            <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#edit-modal">
              <b>
                Edit
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal id="edit-modal">
      <template #modal-title>
        {{ job.company }} {{ job.rate }}
      </template>
      <template #modal-body>
        <JobForm :job="job" />
      </template>
    </Modal>
  </div>
  <div v-else>
    loading.....
  </div>
</template>
<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { jobsService } from '../services/JobsService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { router } from '../router.js'
export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      jobsService.getJobById(route.params.jobId)
    })
    return {
      account: computed(() => AppState.account),
      job: computed(() => AppState.job),
      async remove(job) {
        try {
          const yes = await Pop.confirm('Are you really sure?')
          if (!yes) { return }
          await jobsService.removeJob(job.id)
          router.push({ name: 'jobs' })
        } catch (error) {
          Pop.toast(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.job-details{
  max-width: 50vw;
}
</style>>

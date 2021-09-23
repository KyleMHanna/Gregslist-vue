<template>
  <form @submit.prevent="handleSubmit"
        class="bg-white rounded p-3 shadow "
  >
    <div class="form-group">
      <label for="jobTitle" class="">jobTitle:</label>
      <input v-model="editable.jobTitle" name="jobTitle" id="jobTitle" class="form-control">
    </div>
    <div class="form-group">
      <label for="company" class="">company:</label>
      <input v-model="editable.company" type="text" class="form-control" name="company" id="company">
    </div>
    <div class="form-group">
      <label for="rate" class="">rate:</label>
      <input v-model="editable.rate" type="text" class="form-control" name="rate" id="rate">
    </div>

    <div class="form-group">
      <label for="hours" class="">hours:</label>
      <input v-model="editable.hours" type="number" class="form-control" name="hours" id="hours">

      <div class="form-group">
        <label for="description" class="">Description:</label>
        <textarea v-model="editable.description"
                  type="text"
                  class="form-control"
                  name="description"
                  id="description"
                  rows="5"
        ></textarea>
      </div>
      <div class="d-flex justify-content-between my-3">
        <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn text-dark lighten-20 text-uppercase selectable">
          <b>
            cancel
          </b>
        </button>
        <button type="submit" class="btn text-primary text-uppercase selectable">
          <b>
            submit
          </b>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { Job } from '../models/Job.js'
import { watchEffect } from '@vue/runtime-core'
import { jobsService } from '../services/JobsService.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    job: { type: Job, default: () => new Job() }
  },
  setup(props) {
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...props.job }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await jobsService.editJob(editable.value)
          } else {
            await jobsService.createJob(editable.value)
          }
          editable.value = {}
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }

    }
  }
}
</script>

<style>

</style>

import { AppState } from '../AppState.js'
import { Job } from '../models/Job.js'
import { api } from './AxiosService.js'

class JobsService {
  async getjobs() {
    AppState.jobs = []
    const res = await api.get('api/jobs')
    AppState.jobs = res.data.map(j => new Job(j))
  }

  async getJobById(jobId) {
    AppState.job = null
    const res = await api.get(`api/jobs/${jobId}`)
    AppState.job = new Job(res.data)
  }

  async createJob(job) {
    const res = await api.post('api/jobs', job)
    AppState.jobs.push(new Job(res.data))
  }

  async editJob(job) {
    const res = await api.put(`api/jobs/${job.id}`, job)
    AppState.job = new Job(res.data)
  }

  async removeJob(jobId) {
    await api.delete(`api/jobs/${jobId}`)
    AppState.job = null
    AppState.jobs.filter(j => j.id !== jobId)
  }
}

export const jobsService = new JobsService()

export class Job {
  constructor(jobData = {}) {
    this.id = jobData.id
    this.jobTitle = jobData.jobTitle
    this.company = jobData.company
    this.rate = jobData.rate
    this.hours = jobData.hours
    this.description = jobData.description
    this.creatorId = jobData.creatorId
    this.creator = jobData.creator || {}
  }
}

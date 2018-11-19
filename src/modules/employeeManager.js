const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  }
}
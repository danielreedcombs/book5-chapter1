const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  }
}
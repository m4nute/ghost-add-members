const GhostAdminAPI = require("@tryghost/admin-api")
const path = require("path")

const api = new GhostAdminAPI({
  url: "https://manus-trial-project.ghost.io",
  version: "v5.0",
  key: process.env.ADMIN_API_KEY,
})

api.members.add({ email: "testing@gmail.com" })

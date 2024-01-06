import { Elysia, t } from "elysia"

const GhostAdminAPI = require("@tryghost/admin-api")

const api = new GhostAdminAPI({
  url: "https://manus-trial-project.ghost.io",
  version: "v5.0",
  key: process.env.ADMIN_API_KEY,
})

// api.members.add({ email: "testing2@gmail.com" })

const app = new Elysia()

app.post(
  "/add/member",
  async ({ body: { email } }) => {
    try {
      const res = await api.members.add({ email })
      return "Member Added"
    } catch (e) {
      console.log(e)
    }
  },
  {
    body: t.Object({
      email: t.String({
        format: "email",
      }),
    }),
  }
)

app.listen(3000)

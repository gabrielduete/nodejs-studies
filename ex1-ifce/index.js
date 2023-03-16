const express = require("express")
const app = express()
const routes = require("./routes/index")
const PORT = 8081

app.use("/", routes)

app.listen(PORT, () => {
  console.log("[SERVER]: Listening on port http://localhost:8081")
})

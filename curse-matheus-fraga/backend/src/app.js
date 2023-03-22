import express from "express"
import mongoose from "mongoose"
import path from "path"
import routes from "./routes"
import cors from "cors"

class App {
  constructor() {
    this.server = express()

    mongoose.connect(
      "mongodb://devhouse:devhouse@ac-j1ybvix-shard-00-00.x4bkl0y.mongodb.net:27017,ac-j1ybvix-shard-00-01.x4bkl0y.mongodb.net:27017,ac-j1ybvix-shard-00-02.x4bkl0y.mongodb.net:27017/?ssl=true&replicaSet=atlas-697783-shard-0&authSource=admin&retryWrites=true&w=majority"
    )

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(cors())

    this.server.use(
      "/files",
      express.static(
        path.resolve(__dirname, "..", "assets", "uploads", "images")
      )
    )

    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server

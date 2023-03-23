import { Router } from "express"
import multer from "multer"

import uploadConfig from "./config/upload"

import SessionController from "./controller/SessionController"
import HouseController from "./controller/HouseController"
import DashboardController from "./controller/DashboardController"
import ReserveController from "./controller/ReserveController"

const routes = new Router()
const upload = multer(uploadConfig)

routes.post("/sessions", SessionController.store)

routes.post("/houses", upload.single("thumbnail"), HouseController.store)

routes.get("/houses", HouseController.index)

routes.put(
  "/houses/:house_id",
  upload.single("thumbnail"),
  HouseController.update
)

routes.delete("/houses", HouseController.destroy)

routes.get("/dashboard", DashboardController.show)

routes.post("/houses/:house_id/reserve", ReserveController.store)

routes.get("/reserves", ReserveController.index)

routes.delete("/reserves/cancel", ReserveController.destroy)

export default routes

const express = require("express");
const SpotController = require("./controllers/Spot");
const SessionController = require("./controllers/Session");
const BookingController = require("./controllers/Booking");
const RejectionController = require("./controllers/Rejection");

const ApprovalController = require("./controllers/Approval");
const DashboardController = require("./controllers/Dashboard");

const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index); 
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;

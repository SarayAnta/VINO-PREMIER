import express from 'express';
import { getAllLocations, deleteLocation, updateLocation, createLocation, getLocationById } from '../controllers/locationController.js';
import { authToken } from '../middlewares/authMiddleware.js';
import { locationValidator } from '../validators/locationsValidator.js';
import { handleValidationResults } from '../helpers/validateHelper.js';

const locationRouter = express.Router();

locationRouter.get("/", getAllLocations);
locationRouter.post("/", authToken, locationValidator, handleValidationResults, createLocation);
locationRouter.delete("/:id", authToken, deleteLocation);
locationRouter.put("/:id", authToken, updateLocation);
locationRouter.get("/:id", getLocationById);

export default locationRouter;

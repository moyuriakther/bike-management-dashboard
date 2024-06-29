import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { bikeValidations } from './bike.validation';
import { bikeControllers } from './bike.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/add-new-bike',
  validateRequest(bikeValidations.addBikeValidationSchema),
  bikeControllers.addNewBike,
);
router.get('/', auth(), bikeControllers.getAllBikes);
router.get('/:bikeId', auth(), bikeControllers.getSingleBike);
router.patch(
  '/:bikeId',
  auth(),
  validateRequest(bikeValidations.updateBikeValidationSchema),
  bikeControllers.updateBike,
);
router.delete('/:bikeId', auth(), bikeControllers.deleteBike);

// router.delete('/delete-all', bikeControllers.bulkDelete);
router.delete('/bulk-delete/:id', bikeControllers.bulkDelete);

export const BikeRoutes = router;

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bikeServices } from './bike.service';

const addNewBike = catchAsync(async (req, res) => {
  const result = await bikeServices.addNewBikeIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Bike is Created Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeServices.getAllBikeFromDB(req.query);
  sendResponse(res, {
    success: true,
    message: 'Get All Bikes Data Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const result = await bikeServices.getSingleBikeFromDB(req.params.bikeId);
  sendResponse(res, {
    success: true,
    message: 'Get Single Bike Data Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const result = await bikeServices.updateBikeIntoDB(
    req.params.bikeId,
    req.body,
  );
  sendResponse(res, {
    success: true,
    message: 'Update Bike data Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});
const deleteBike = catchAsync(async (req, res) => {
  const result = await bikeServices.deleteBikeFromDB(req.params.bikeId);
  sendResponse(res, {
    success: true,
    message: 'Bike data Deleted Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});
const bulkDelete = catchAsync(async (req, res) => {
  const result = await bikeServices.bulkDeleteFromDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Bikes are Deleted Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const bikeControllers = {
  addNewBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
  bulkDelete,
};

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { saleServices } from './sale.service';

const createSale = catchAsync(async (req, res) => {
  const result = await saleServices.createSaleIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Bike is Sale Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});
const getSalesHistory = catchAsync(async (req, res) => {
  const result = await saleServices.getSaleHistoryFromDB(req.query);
  sendResponse(res, {
    success: true,
    message: 'Get Sale History Data Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const saleControllers = {
  createSale,
  getSalesHistory,
};

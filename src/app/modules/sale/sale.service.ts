import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { BikeModel } from '../bike/bike.model';
import { SaleModel } from './sale.model';
// import { PipelineStage } from 'mongoose';
import {
  filterByDaily,
  filterByMonthly,
  filterByWeekly,
  filterByYearly,
} from '../../utils/filter';
// import { PipelineStage } from 'mongodb';

/* eslint-disable @typescript-eslint/no-explicit-any */
const createSaleIntoDB = async (payload: any) => {
  const { bike, quantity, buyerName, saleDate } = payload;
  const bikeData = await BikeModel.findById(bike);
  if (!bikeData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Bike not found');
  }
  if (quantity > bikeData.quantity) {
    throw new AppError(httpStatus.NOT_FOUND, 'Stoke Not Available');
  }
  // Update bike quantity
  bikeData.quantity -= quantity;
  await bikeData.save();
  //check product quantity if product quantity 0 remove the product
  if (bikeData.quantity === 0) {
    await BikeModel.findByIdAndDelete(bike, { new: true });
  }
  // Save sale history
  const result = new SaleModel({
    bike,
    quantity,
    buyerName,
    saleDate,
  });
  await result.save();

  return result;
};

const getSaleHistoryFromDB = async (query: any) => {
  const salesHistory = await SaleModel.find().populate('bike');
  if (!query.saleDate) {
    return salesHistory;
  }
  let filteredSalesHistory = [];

  switch (query.saleDate) {
    case 'Daily':
      filteredSalesHistory = filterByDaily(salesHistory);
      break;
    case 'Weekly':
      filteredSalesHistory = filterByWeekly(salesHistory);
      break;
    case 'Monthly':
      filteredSalesHistory = filterByMonthly(salesHistory);
      break;
    case 'Yearly':
      filteredSalesHistory = filterByYearly(salesHistory);
      break;
    default:
      break;
  }

  return filteredSalesHistory;
};

export const saleServices = {
  createSaleIntoDB,
  getSaleHistoryFromDB,
};

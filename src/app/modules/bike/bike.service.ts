/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import SearchOnQuery from '../../builder/SearchOnQuery';
import { bikeSearchableFields } from './bike.constant';
import { TBike } from './bike.interface';
import { BikeModel } from './bike.model';

const addNewBikeIntoDB = async (payload: TBike) => {
  const result = await BikeModel.create(payload);
  return result;
};

const getAllBikeFromDB = async (query: Record<string, unknown>) => {
  const bikeQuery = new SearchOnQuery(BikeModel.find(), query)
    .search(bikeSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await bikeQuery.modelQuery;
  const meta = await bikeQuery.countTotal();
  return { result, meta };
};

const getSingleBikeFromDB = async (bikeId: string) => {
  const result = await BikeModel.findById(bikeId);
  return result;
};

const updateBikeIntoDB = async (bikeId: string, payload: Partial<TBike>) => {
  console.log(payload);
  const result = await BikeModel.findByIdAndUpdate(bikeId, payload, {
    new: true,
  });
  return result;
};

const deleteBikeFromDB = async (bikeId: string) => {
  const result = await BikeModel.findByIdAndDelete(bikeId, { new: true });
  return result;
};

const bulkDeleteFrom = async (bikeIds: string[]) => {
  // const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);
  // const validBikeIds = bikeIds.filter(isValidObjectId);
  // const bikeIdsInfo = validBikeIds.map(
  //   (id: string) => new mongoose.Types.ObjectId(id),
  // );
  // if (bikeIdsInfo.length === 0) {
  //   return {
  //     success: false,
  //     message: 'No valid IDs provided for deletion.',
  //   };
  // }
  // const result = await BikeModel.deleteMany({});

  const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);
  console.log(bikeIds);
  console.log(isValidObjectId);
  const validBikeIds = bikeIds.filter(isValidObjectId);
  console.log(validBikeIds);

  // Check if there are any valid IDs for deletion
  if (validBikeIds.length === 0) {
    return {
      success: false,
      message: 'No valid IDs provided for deletion.',
    };
  }

  // Convert validBikeIds to ObjectIds
  const bikeIdsInfo = validBikeIds.map((id) => new mongoose.Types.ObjectId(id));
  console.log(bikeIdsInfo);
  // Perform deleteMany operation
  const result = await BikeModel.deleteMany({ _id: { $in: bikeIdsInfo } });

  // Check the result of the deleteMany operation
  if (!result || result.deletedCount === 0) {
    return {
      success: false,
      message: 'No bikes deleted.',
    };
  }

  return result;
};
const bulkDeleteFromDB = async (bikeIds: string[]) => {
  try {
    const validBikeIds = bikeIds.filter(mongoose.Types.ObjectId.isValid);

    if (validBikeIds.length === 0) {
      throw new Error('No valid bike IDs provided for deletion.');
    }

    let deletedCount = 0;

    for (const id of validBikeIds) {
      const result = await BikeModel.deleteOne({ _id: id });
      if (result && result.deletedCount === 1) {
        deletedCount++;
      }
    }

    if (deletedCount === 0) {
      return { success: true, message: 'No bikes deleted.' };
    }

    return {
      success: true,
      message: 'Bikes are Deleted Successfully',
      deletedCount,
    };
  } catch (error) {
    return { success: false, message: 'An error occurred during deletion.' };
  }
};
export const bikeServices = {
  addNewBikeIntoDB,
  getAllBikeFromDB,
  getSingleBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
  bulkDeleteFromDB,
  bulkDeleteFrom,
};

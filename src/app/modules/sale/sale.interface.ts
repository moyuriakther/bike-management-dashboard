import mongoose from 'mongoose';

export type TSale = {
  bike: mongoose.Types.ObjectId;
  quantity: number;
  buyerName: string;
  saleDate: Date;
};

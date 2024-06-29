import { Schema, model } from 'mongoose';
import { TSale } from './sale.interface';

const saleSchema = new Schema<TSale>(
  {
    bike: { type: Schema.Types.ObjectId, ref: 'Bike', required: true },
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
    saleDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

export const SaleModel = model<TSale>('Sale', saleSchema);

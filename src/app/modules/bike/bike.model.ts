import { Schema, model } from 'mongoose';
import { TBike } from './bike.interface';

const BikeSchema = new Schema<TBike>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    releaseDate: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    frameMaterial: { type: String, required: true },
    suspension: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export const BikeModel = model<TBike>('Bike', BikeSchema);

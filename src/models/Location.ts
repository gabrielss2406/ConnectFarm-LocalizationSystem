import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  farmId: string
  cowId: number;
  latitude: number;
  longitude: number;
  timestamp: Date;
}

const LocationSchema: Schema = new Schema({
  farmId: { type: String, required: true },
  cowId: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<ILocation>('Location', LocationSchema);

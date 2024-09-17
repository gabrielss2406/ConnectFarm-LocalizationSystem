import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  cowId: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
}

const LocationSchema: Schema = new Schema({
  cowId: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<ILocation>('Location', LocationSchema);

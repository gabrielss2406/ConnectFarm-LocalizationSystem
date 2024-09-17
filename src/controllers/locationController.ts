import { Request, Response } from 'express';
import Location from '../models/Location';

export const saveLocation = async (req: Request, res: Response) => {
    try {
        const { cowId, latitude, longitude, timestamp } = req.body;

        if (!cowId || latitude === undefined || longitude === undefined || !timestamp) {
            return res.status(400).json({ message: 'Invalid data' });
        }

        const newLocation = new Location({
            cowId,
            latitude,
            longitude,
            timestamp,
        });

        await newLocation.save();

        res.status(201).json({ message: 'Location saved successfully' });
    } catch (error) {
        console.error('Error saving location:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

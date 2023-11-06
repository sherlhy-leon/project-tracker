import { Request, Response } from 'express';
import { getData } from '../services/sample.service';

export const getSampleData = async (req: Request, res: Response): Promise<void> => {
    const data = await getData();
    res.status(200).json({ wizards: data });
};
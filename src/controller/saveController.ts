import { Request, Response } from 'express';
import { dataModel } from '../model/dataModel';

export const saveData = async (req: Request, res: Response) => {
    try {
        const data = new dataModel(req.body);
        await data.save();
        res.status(201).json({message: 'Success! Data saved!'});
    } catch (error) {
        res.status(500).json({ message: `Error to save data ${error}`});
    }
};
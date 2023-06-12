import { Request, Response } from 'express';
import Lodgings from '../models/Lodgings';

//Récupérer la totalité des chambres
export const getLodgings= async (req: Request, res: Response) => {
  try {
    const lodgings = await Lodgings.find();
    res.status(200).json(lodgings);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
};

//Récupération chambre par son Id
export const getOneLodging = async (req: Request, res: Response) => {
  try {
    const lodgingById = await Lodgings.findOne({ _id: req.params.id });
    res.status(200).json(lodgingById);
  } catch (error) {
    res.status(400).json({ error });
  }
};
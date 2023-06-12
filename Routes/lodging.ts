import express from 'express';
import {getLodgings, getOneLodging} from '../controllers/lodgings'
const router = express.Router();

router.get('/', getLodgings);
    //res.json({ message: 'A venir: liste des chambres disponibles'});

router.get('/:id', getOneLodging);
    //res.json({ message: 'A venir: chambre par son id'});

export default router;
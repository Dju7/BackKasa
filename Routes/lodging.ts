import express from 'express';
import {getLodgings, getOneLodging} from '../controllers/lodgings'
const router = express.Router();

router.get('/', getLodgings);

router.get('/:id', getOneLodging);

export default router;
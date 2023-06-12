"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lodgings_1 = require("../controllers/lodgings");
const router = express_1.default.Router();
router.get('/', lodgings_1.getLodgings);
//res.json({ message: 'A venir: liste des chambres disponibles'});
router.get('/:id', lodgings_1.getOneLodging);
//res.json({ message: 'A venir: chambre par son id'});
exports.default = router;

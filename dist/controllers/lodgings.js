"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneLodging = exports.getLodgings = void 0;
const Lodgings_1 = __importDefault(require("../models/Lodgings"));
//Récupérer la totalité des chambres
const getLodgings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lodgings = yield Lodgings_1.default.find();
        res.status(200).json(lodgings);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error });
    }
});
exports.getLodgings = getLodgings;
//Récupération chambre par son Id
const getOneLodging = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lodgingById = yield Lodgings_1.default.findOne({ _id: req.params.id });
        res.status(200).json(lodgingById);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.getOneLodging = getOneLodging;

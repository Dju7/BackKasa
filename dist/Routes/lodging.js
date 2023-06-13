"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lodgings_1 = require("../controllers/lodgings");
const router = express_1.default.Router();
router.get('/', lodgings_1.getLodgings);
router.get('/:id', lodgings_1.getOneLodging);
exports.default = router;

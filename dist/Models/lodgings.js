"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const lodgingsSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    pictures: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    host: {
        name: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        }
    },
    location: {
        type: String,
        required: true
    },
    equipments: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
});
const Lodgings = mongoose_1.default.model('Lodgings', lodgingsSchema);
exports.default = Lodgings;

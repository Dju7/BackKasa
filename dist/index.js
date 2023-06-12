"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const lodging_1 = __importDefault(require("./Routes/lodging"));
dotenv_1.default.config();
// Connection base de donnée
mongoose_1.default
    .connect(process.env.MONGO_URI, {
    dbName: 'kasa',
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log(`Connexion à MongoDB échouée ! erreur: ${error.message}`));
const app = (0, express_1.default)();
app.set('port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
const server = http_1.default.createServer(app);
// Cors
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Définition des chemins d'accès - routage
app.use('/api/lodging', lodging_1.default);
app.get('/', (req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});
server.listen(process.env.PORT || 3000);

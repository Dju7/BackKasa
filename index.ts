import http from 'http'
import cors from 'cors'
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import lodging from './Routes/lodging'


dotenv.config();

// Connection base de donnée
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: 'kasa',
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) =>
    console.log(`Connexion à MongoDB échouée ! erreur: ${error.message}`)
  );

const app = express();
app.set('port', process.env.PORT ?? 3000);
const server = http.createServer(app);

// Cors
app.use(cors())
app.use(express.json());

//Définition des chemins d'accès - routage
app.use('/api/lodging', lodging);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });



server.listen(process.env.PORT || 3000);
import mongoose from 'mongoose';

const lodgingsSchema = new mongoose.Schema({
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

const Lodgings = mongoose.model('Lodgings', lodgingsSchema);

export default Lodgings
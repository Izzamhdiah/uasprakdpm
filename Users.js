const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
      {
            nama: String,
            email: { type: String, unique: true },
            npm: String,
            password: String
      },
      {
            collection: "Users"
      }
);

mongoose.model("Users", UserSchema);


const ScheduleSchema = new mongoose.Schema(
      {
        
        tgl: { type: Date },
        hari: {
          type: String,
          enum: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        },
        genre: String,
        jam: String,
        judul: String,
      },
      {
        collection: "Schedules",
      }
    );

mongoose.model("Schedules", ScheduleSchema);
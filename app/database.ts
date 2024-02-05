import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://cyrinemerchaoui:KPHULmyijjo0Kg15@flexydb.aq9nicz.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connection successful');
});

export { db };

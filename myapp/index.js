const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://ewertonjunior776:ewertonjunior776@app.cd42pcx.mongodb.net/<databaseName>?retryWrites=true&w=majority')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log(err));

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
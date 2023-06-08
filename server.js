const express = require('express');
const cors = require('cors');
const routes = require('./modules');

const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(cors());
app.use('/api', routes); 
app.listen(process.eventNames.PORT || 3000, () =>
  console.log(`Server is running`));

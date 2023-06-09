const express = require('express');
const cors = require('cors');
const bioRoutes = require('./routes/bioRoutes');
const strengthRoutes = require('./routes/strengthRoutes')
const detailRoutes = require('./routes/detailRoutes')

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use('/api', bioRoutes); 
app.use('/api', strengthRoutes); 
app.use('/api', detailRoutes); 
app.listen(process.env.PORT || 8080, () =>
  console.log(`Server is running`));

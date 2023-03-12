const express = require('express');


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001



app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));




app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });


app.listen(PORT, () =>
console.log(`app listening at http://localhost:${PORT}`))
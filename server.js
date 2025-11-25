const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send(`Server del mio blog`);
});

app.get('/posts', (req, res) => {
    res.send(`Lista dei prodotti`);
});
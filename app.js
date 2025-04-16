const express = require('express');

// inizializziamo express in app
const app = express();

// definiamo la porta 
const port = 3000;

// definiamo la rotta base 
app.get('/', (req, res) =>{
    res.send('Server del mio blog')
})

// inseriamo il metodo che lascia in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
})
const http =require("http");

const medecins = [];
let compteur = 0;

const express = require("express");

const app = express()

app.use(express.json());

//Ajouter un middelware pour les cross origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Content-Type")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    next();
})

// route pour recuperer la totalité des médecins 
app.get('/medecins', (req,res) => {
    res.json({
        error : false,
        medecins : medecins
    })
})
// route pour récupérer un médecin 
app.get('/medecin/:id', (req,res) => {
    const id = req.params.id // on recupere l'id qui est placé dans l'url 
    const medecin = medecins.find(med => med.id == id) // on cherche dans le tableau de médecin qui a cet id et on le stocke dans la variable 
    if(medecin != undefined) { // si le médecin existe, on le récupère et on le stocke dans le tableau de médecins
        res.json({
            error : false,
            medecin : medecin
        })
    }
    else { // sinon on retourne une erreur et un message 
        res.json({
            error : true,
            message : "medecin not found"
        })
    }
})

// route pour ajouter un médecin 
app.post('/medecin', (req,res) => {
    let medecin = {...req.body}; // on recupere les éléments du tableau 
    medecin.id = ++compteur;    // on incrémente l'id 
    medecins.push(medecin)  // on push les nouvelles données dans le tableau 
    res.json({  
        error:false,        // ne retourne aucunes erreurs
        id : medecin.id     // stocke l'id 
    })
}) 


const webServer = http.createServer(app);

webServer.listen(3030)
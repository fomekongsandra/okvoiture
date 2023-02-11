
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Création d'une instance d'application Express
const app = express();

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'okvoiture'
});

// Connexion à la base de données MySQL
connection.connect(error => {
    if (error) throw error;
    console.log('Connecté à la base de données MySQL');
  });

// Configuration du parseur de corps
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Définition de la route principale de l'API
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API okvoiture!');
});

// Route pour ajouter une nouvelle voiture
app.post('/voiture', (req, res) => {
  const { id_voiture ,modele,marque,annee, description } = req.body;
  const sql = `INSERT INTO voiture (id_voiture,modele,marque,annee, description) VALUES ('${id_voiture}','${modele}','${marque}','${annee}' '${description}')`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return res.send(error);
    }
    res.send('Nouvelle voiture ajoutée avec succès!');
  });
});

// Route pour ajouter une nouvelle réservation
app.post('/reservation', (req, res) => {
  const { utilisateur, voiture, dateDebut, dateFin } = req.body;
  const sql = `INSERT INTO reservation (utilisateur, voiture, dateDebut, dateFin) VALUES ('${utilisateur}', '${voiture}', '${dateDebut}', '${dateFin}')`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return res.send(error);
    }
    res.send('Nouvelle réservation ajoutée avec succès!');
  });
});
//pour supprimer une voiture
app.delete('/api/car/:id', function(req, res) {
    var sql = "DELETE FROM car WHERE id = ?";
    var params = [req.params.id];
    connection.query(sql, params, function (error, result) {
      if (error) {
        res.status(400).send({ error: true, message: error.message });
      } else {
        res.send({ error: false, message: "Voiture supprimée avec succès." });
      }
    });
  });
  

// Route pour obtenir toutes les réservations
app.get('/reservations', (req, res) => {
  const sql = 'SELECT * FROM reservation';
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return res.send(error);
    }
    res.send(results);
  });
});

// route pour supprimer une reservation
app.delete('/api/reservation/:id', function(req, res) {
    var sql = "DELETE FROM reservation WHERE id = ?";
    var params = [req.params.id];
    connection.query(sql, params, function (error, result) {
      if (error) {
        res.status(400).send({ error: true, message: error.message });
      } else {
        res.send({ error: false, message: "Reservation supprimée avec succès." });
      }
    });
  });
//route pour  modifier une reservation
app.put('/api/reservation/:id', function(req, res) {
    var sql = "UPDATE reservation SET id_loueur = ?, id_voiture = ?, dateDebut = ?, dateFin = ? WHERE id = ?";
    var params = [req.body.user_id, req.body.car_id, req.body.start_date, req.body.end_date, req.params.id];
    connection.query(sql, params, function (error, result) {
      if (error) {
        res.status(400).send({ error: true, message: error.message });
      } else {
        res.send({ error: false, message: "Reservation mise à jour avec succès." });
      }
    });
  });
  
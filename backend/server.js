const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3001;

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'databaseencryption.cozjp76b6cgs.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',
  password: '3323494yjP',
  database: 'data',
});


connection.connect();

app.post('/saveData', (req, res) => {
  const { comment } = req.body;
  console.log(comment);

  const sql = 'INSERT INTO new_table (message) VALUES (?)';


  connection.query(sql, comment, (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to save data.' });
    } else {
      console.log('Data saved successfully!');
      res.status(200).json({ message: 'Data saved successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


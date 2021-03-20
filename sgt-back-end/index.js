const pg = require('pg');
const express = require('express');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const input = req.body;
  const [name, course, score] = [input.name, input.course, parseInt(input.score, 10)];
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Please include the name, course, and score'
    });
    return;
  }
  if (!Number.isInteger(score) || score < 1 || score > 100) {
    res.status(400).json({
      error: 'Score must be an integer between 1 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
      returning *
  `;
  const values = [name, course, score];
  db.query(sql, values)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const input = req.body;
  const [name, course, score] = [input.name, input.course, parseInt(input.score, 10)];
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: "'gradeId' must be a positive integer"
    });
    return;
  }
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Please include the name, course, and score'
    });
    return;
  }
  if (!Number.isInteger(score) || score < 1 || score > 100) {
    res.status(400).json({
      error: 'Score must be an integer between 1 and 100'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
 returning *
  `;
  const values = [name, course, score, gradeId];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Unable to find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: "'gradeId' must be a positive integer"
    });
    return;
  }
  const sql = `
    delete from "grades"
          where "gradeId" = $1
      returning *
  `;
  const value = [gradeId];
  db.query(sql, value)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Unable to find grade with 'gradeId' ${gradeId}`
        });
      } else {
        res.status(200).json({
          deleted: grade
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

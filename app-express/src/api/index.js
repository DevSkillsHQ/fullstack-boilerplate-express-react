const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const API_URL = "https://infra.devskills.app/api/transaction-management/transactions";
const API_URL_ACCOUNTS = "https://infra.devskills.app/api/transaction-management/accounts";

router.get("/ping", (req, res) => {
  res.send("pong")
})

router.get('/transactions', (req, res) => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error retrieving transactions:', error);
      res.status(500).json({ error: 'Error retrieving transactions' });
    });
});

router.get('/transactions/:transaction_id', (req, res) => {
  const transaction_id = req.params.transaction_id;
  fetch(`${API_URL}/${transaction_id}`)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error retrieving transaction:', error);
      res.status(500).json({ error: 'Error retrieving transaction' });
    });
});

router.post('/transactions', (req, res) => {
  const newTransaction = req.body;
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTransaction)
  })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error creating transaction:', error);
      res.status(500).json({ error: 'Error creating transaction' });
    });
});

router.get('/accounts', (req, res) => {
  fetch(API_URL)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => {
    console.error('Error retrieving transactions:', error);
    res.status(500).json({ error: 'Error retrieving transactions' });
  });
});

router.get('/accounts/:account_id', (req, res) => {
  const account_id = req.params.account_id;
  fetch(`${API_URL_ACCOUNTS}/${account_id}`)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error retrieving account:', error);
      res.status(500).json({ error: 'Error retrieving account' });
    });
});


module.exports = router;

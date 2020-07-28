const axios = require("axios");
const cors = require('micro-cors')()

const handler = (req, res) => {
  const email = req.body.email;

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': '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'
  };

  const requestConfig = {
    headers: headers,
  };

  const body = {
    updateEnabled: false,
    email: email,
    listIds: [5]
  };

  const data = JSON.stringify(body);

  axios.post('https://api.sendinblue.com/v3/contacts', data, requestConfig)
    .then(response => {
      res.json({
          status: 'success'
        })
    })
    .catch(err => {
      res.json(err)
    })

}

module.exports = cors(handler)
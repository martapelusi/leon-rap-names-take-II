const express = require('express')
const app = express()
PORT = 8000

// MAY NEED
// app.use(cors())

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Bennett',
    birthLocation: 'Chicago, Illinois',
  },
  unknown: {
    age: 0,
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//  QUESTION, Still not clear to me why we send JSON
// QUESTION, For some reason when I tried to change this to req and res, the code did not run? Why...
// QUESTION, also would not run if I did :rapperName instead of :name
app.get('/api/:rapperName', (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase()

  if (rappers[rappersName]) {
    response.json(rappers[rappersName])
  } else {
    response.json(rappers['unknown'])
  }
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}! Let's go get it!`)
})

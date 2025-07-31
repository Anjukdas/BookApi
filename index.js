const express = require('express')
const app = express()
const port = 3000

const bookRoutes =require("./routes/bookRouter")

app.use("/Books",bookRoutes)

app.use(express.json)

app.get('/', (req, res) => {
  res.send('Books API is running!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
})
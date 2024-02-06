const express = require("express");
const PORT = 8000 || process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
require("dotenv").config({ path: ".env" });

const PORT = 8000 || process.env.PORT;
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/address", async (req, res) => {
  try {
    const { query } = req;
    console.log(query.address);
    const chain = "0x1";
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      address: query.address,
      chain,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json();
  }
});

Moralis.start({
  apiKey: MORALIS_API_KEY,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Unable to connect to API ${error}`);
  });

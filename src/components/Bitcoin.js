import * as React from "react";
import {useState} from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

export default function Bitcoin () {
  const[price, setPrice] = useState(0.0)
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch('https://go-backend.tomgur.me:8080/bitcoin-price');
      const data = await response.json();
      console.info("price: " + data)
      setPrice("$" + data);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  }
    return (
        <Stack direction={"column"} flex={3}>
          <Box marginTop={12} marginBottom={2}>
            <Typography>
              1 BTC =
            </Typography>
          </Box>
          <Stack direction={"row"}>
            <TextField label={"Price"} placeholder={"Price"} value={price} onChange={handlePriceChange} sx={{width:'88%'}}/>
          </Stack>
          <Stack direction={"row"} marginTop={10}>
            <Button variant={"contained"} onClick={fetchBitcoinPrice}>Bitcoin Price</Button>
          </Stack>
        </Stack>
    )
}
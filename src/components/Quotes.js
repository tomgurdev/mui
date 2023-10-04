import * as React from 'react';
import {useState} from 'react';
import {Button, Stack, styled, Typography} from "@mui/material";
import {TextareaAutosize} from '@mui/base/TextareaAutosize';


export default function Quotes() {
  const [quote, setQuote] = useState(""); // State for the quote
  const [author, setAuthor] = useState(""); // State for the author
  const [category, setCategory] = useState(""); // State for the author
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };


  const handleQuoteChange = (event) => {
    setQuote(event.target.value); // Update the quote state
  };

  async function fetchRandomQuote() {
    try {
      const response = await fetch('https://go-backend.tomgur.me:8080/random-quote');
      const data = await response.json();
      console.info("quote: " + data.QUOTE)
      console.info("author: " + data.AUTHOR)
      console.info("category: " + data.CATEGORY)
      const fixedCategory = capitalizeFirstLetter(data.CATEGORY);
      setQuote(data.QUOTE); // Update the quote state
      setAuthor(data.AUTHOR); // Update the author state
      setCategory(fixedCategory); // Update the category state
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const StyledComponent = styled(TextareaAutosize)(
    ({ theme }) => `
  width: 320px;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
  );
  return (
    <Stack spacing={1} marginTop={10} direction="column" flex={3} display={"flex"}>
      <Stack direction="row" spacing={2} marginTop={2}>
        <Typography display={"flex"}  alignItems={"center"} sx={{width:'15%'}}>
          Quote:
        </Typography>
        <StyledComponent label={"Quote"} placeholder={"Quote"} value={quote} onChange={handleQuoteChange}  sx={{width:'85%'}} />
      </Stack>
      <Stack direction="row" spacing={2} marginTop={2}>
        <Typography display={"flex"}  alignItems={"center"}  width={"15%"}>
          Author:
        </Typography>
        <StyledComponent label={"Author"} placeholder={"Author"} value={author} onChange={handleQuoteChange}  sx={{width:'85%'}} />
      </Stack>
      <Stack direction="row" spacing={2} marginTop={2}>
        <Typography display={"flex"}  alignItems={"center"}  width={"15%"}>
          Category:
        </Typography>
        <StyledComponent label={"Category"} placeholder={"Category"} value={category} onChange={handleQuoteChange} sx={{width:'85%'}}/>
      </Stack>
      <Button
        variant="contained"
        sx={{ marginTop: 2 }}
        onClick={fetchRandomQuote}>
        Get Random Quote
      </Button>
    </Stack>
  );
}

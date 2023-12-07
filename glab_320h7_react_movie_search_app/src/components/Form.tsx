import React, { useState, ChangeEvent, FormEvent } from "react";
import { 
  Container,
  Box, 
  Button, 
  TextField 
} from "@mui/material";

interface FormProps {
  moviesearch: (searchTerm: string) => void;
}

interface FormData {
  searchterm: string;
}

const Form: React.FC<FormProps> = (props) => {
  // State to hold the data of our form
  const [formData, setFormData] = useState<FormData>({
    searchterm: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        mt: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="searchterm"
            label="Search"
            variant="filled"
            onChange={handleChange}
            value={formData.searchterm}
            sx={{ mr: 2 }}
          />
          <Button 
            size="large"
            type="submit" 
            variant="contained" 
            color="primary" 
            value="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;

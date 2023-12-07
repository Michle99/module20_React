import React, { useState, ChangeEvent, FormEvent } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;

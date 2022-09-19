import React, { useState } from "react";
import PropTypes from "prop-types";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <>
      <form aria-label="form" onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
      </form>
    </>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

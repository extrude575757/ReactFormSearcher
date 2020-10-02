
// import './index.css';

// import App from './App';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';

import "./styles.css";
// We create a mock list/array named Characters, from which
// display the list in our component.
const characters = [
  "Harry Potter",
  "Luna Lovegood",
  "Neville Longbottom",
  "Hermione Granger",
  "Ron Weasley",
  "Ginny Weasley",
  "Fred Weasley",
  "George Weasley",
  "Albus Dumbledore ",
  "Aberforth Dumbledore ",
  "Dudley Dursley ",
  "Petunia Dursley ",
  "Vernon Dursley",
  "Cornelius Fudge",
  "Rubeus Hagrid ",
  "Viktor Krum ",
  "Bellatrix Lestrange",
  "Narcissa Malfoy",
  "Draco Malfoy"
];
function App() {
  /* STEP 1: Create searchTerm and searchResults state
   - searchTerm will save the data from the search input on every occurance of the change event.
   - searchResults is used to set the search result.
  */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  /* STEP 4: Create useEffect that watches searchTerm and returns a new list
   of searchResults based on search box input value.
   */
  useEffect(() => {
    const results = characters.filter((character) => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  /* STEP 2: create handleChange function and add to input 
   The handleChange method takes the event object as the argument
   and sets the current value of the input to the searchTerm state
   using setSearchTerm
  */

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the state get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the state. */}
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search It"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="character-list">
        <ul>
          {/* STEP 3: Map over searchResults to see values in that array */}
          {searchResults.map((character) => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


serviceWorker.unregister();

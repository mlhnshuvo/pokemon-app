import React from "react";
import { connect } from "react-redux";
import { searchTerm } from "../store/actions/pokemonAction";
import Autosuggest from "react-autosuggest";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.props.searchTerm(newValue);
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  // =======================================

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return <span>{suggestion.name}</span>;
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === "") {
      return [];
    }
    const regex = new RegExp("^" + escapedValue, "i");
    return this.props.state.eachPokemon.filter((language) =>
      regex.test(language.name)
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search pokemon...",
      value,
      onChange: this.onChange,
      className: "searchPokemon__input",
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default connect((state) => ({ state: state.pokemonReducer }), {
  searchTerm,
})(App);

import React from 'react';

class SearchBar extends React.Component {
  // Initial state of SearchBar component (searchTerm empty because our search field is empty)
  state = {
    searchTerm: ''
  };

  // This function is called whenever the form is submitted
  onFormSubmit(event) {
    event.preventDefault();

    // We access the function passed by the parent component (App)
    // so that we can communicate the searchTerm back to App
    this.props.makaronia(this.state.searchTerm);

    // Remember: With this.props we can access any prop passed to this component by a parent
  }

  // We use onSubmit on the form to know when the form has been submitted
  // We use onChange on the input field to know when the text changes (and we update the state)
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
            onChange={event => this.setState({ searchTerm: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
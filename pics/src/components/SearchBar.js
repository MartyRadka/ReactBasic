import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  handleFormSubmit = event => {
    //this will prevent the default reloading
    event.preventDefault();
    //we reference props in class component with this!!! onSubmit is callback that is passed into App class component
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}


export default SearchBar;


// dont use the () on this.onInputChange in input. For that case this callback
// function will be called in the future - only if user type input.
// If we put them, the callback will be called every time when our
// component is rerendered.

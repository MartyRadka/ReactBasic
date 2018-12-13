import React, {Component} from 'react';


class SearchBar extends Component {
  state = { term: '' };

  // event handlerer
  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    //property onFormSubmit from parent passed with data from state which are the current term
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} // onChangeHandlerer
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

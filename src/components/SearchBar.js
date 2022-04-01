import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }
  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onSubmit}>
          <div className='field'>
            <label>Search Image</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              className='field'
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "all"
    };
  }


  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }


  onFilter = (type) => {
    this.setState({ type });
  }


  filterItem = (item) => {
    const { search, type } = this.state;
    if (type == "Fruit" || type == "Vegetable") {
	  return item.name.toLowerCase().search(search) !== -1 && item.type == type;
    } else {
      return item.name.toLowerCase().search(search) !== -1;
    }
  }

  render() {
    return (
      <div className="filter-list">

        <h1>Produce Search</h1>

 
        <input type="text" placeholder="Search" onChange={this.onSearch} />


        <DropdownButton title="Type">
          <Dropdown.Item onClick={() => this.onFilter("all")}>All</Dropdown.Item> &nbsp;
          <Dropdown.Item onClick={() => this.onFilter("Fruit")}>Fruits</Dropdown.Item> &nbsp;
          <Dropdown.Item onClick={() => this.onFilter("Vegetable")}>Vegetables</Dropdown.Item>
        </DropdownButton>

      
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;


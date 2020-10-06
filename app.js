var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Apple', 'Banana', 'Carrot']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'done': false
    }
  }
  onListItemHover() {
    this.setState({done: !this.state.done}); 
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold': 'normal'
    }
    return (
    <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);


ReactDOM.render(App(), document.getElementById("app"));
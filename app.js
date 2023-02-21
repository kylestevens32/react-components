const { useState } = React;

const GroceryListItem = ({item}) => {
  const [isAcquired, setIsAcquired] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onListItemHover = (event) => {

  }

  const style = {
    textDecoration: isAcquired ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 'normal'
  };

  return (
    <li style={style} onClick={() => setIsAcquired(!isAcquired)} onMouseOver={() => setIsHovered(!isHovered)} onMouseOut={() => setIsHovered(!isHovered)}>
      {item}
    </li>
  );
}

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
)

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Squid', 'Pork', 'Cucumber', 'Beer', 'Wine']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));


// const root = createRoot(document.getElementById("app"))

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
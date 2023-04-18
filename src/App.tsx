import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["a", "b", "c"];

  const handleOnSelect = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelect} />
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelect} />
      <Button />
    </div>
  );
}

export default App;

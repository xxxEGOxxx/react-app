import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["a", "b", "c"];

  const handleOnSelect = (item: String) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(!alertVisible)}> My alert</Alert>
      )}
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelect} />
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelect} />
      <Button onClick={() => setAlertVisible(!alertVisible)} color="secondary">
        My Button
      </Button>
    </div>
  );
}

export default App;

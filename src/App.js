import { Button, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import Short_polling from "./components/Short_polling";

function App() {
  return (
    <div className="App">
      <Flex direction="column" gap="2">
        <Short_polling />
      </Flex>
    </div>
  );
}

export default App;

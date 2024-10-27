import { Button, Flex, Text } from "@radix-ui/themes";
import "./App.css";
import Short_polling from "./components/Short_polling";
import Server_sent_events from "./components/Server_sent_events";
import Xss_validation from "./components/Xss_validation";

function App() {
  return (
    <div className="App">
      <Flex direction="column" gap="2">
        <Short_polling />
        <Server_sent_events />
        <Xss_validation />
      </Flex>
    </div>
  );
}

export default App;

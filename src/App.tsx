import { Link } from "react-router-dom";
import { Title, Anchor, List, Center } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <Title order={1} align="center">
        Hello! This is a site that contains all of James' totally helpful widgets
      </Title>
      <Center>
        <List className={"mt-5"}>
          <List.Item>
            <Anchor component={Link} to="/kvocab">
              KVocab
            </Anchor>
          </List.Item>
        </List>
      </Center>
    </div>
  );
}

export default App;

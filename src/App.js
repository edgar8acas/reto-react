import { DropArea } from "./features/dropArea/DropArea";
import "./App.css"
import { Layout } from "antd";
import { useState } from "react";
import { ActorDetails } from "./features/actorDetails/ActorDetails";
const { Content } = Layout;

function App() {

  const [currentDisplay, setCurrentDisplay] = useState({
    type: 'drop'
  })

  let content = currentDisplay.type === 'drop' ?
    <DropArea setCurrentDisplay={setCurrentDisplay}></DropArea> : <ActorDetails actorName={currentDisplay.actorName} setCurrentDisplay={setCurrentDisplay}></ActorDetails>

  return (
    <Layout className="App">
      <Content>
        {content}
      </Content>
    </Layout>
  );
}

export default App;

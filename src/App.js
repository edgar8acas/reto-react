import DropArea from "./features/DropArea";
import "./App.css"
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Content>
        <DropArea></DropArea>
      </Content>
    </Layout>
  );
}

export default App;

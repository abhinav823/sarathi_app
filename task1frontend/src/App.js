import Tree from "./components/Tree";
import treeData from "../src/data.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Tree data={treeData}/>
  );
}

export default App;
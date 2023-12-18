import BaseLayout from "./components/BaseLayout";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  

  return (
    <Router>
      <div>
        <BaseLayout />
      </div>
    </Router>
  )
}

export default App;

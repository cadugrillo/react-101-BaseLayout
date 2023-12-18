import BaseLayout from "./components/layout/BaseLayout";
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

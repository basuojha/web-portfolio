import Home from "components/Home";
import { GlobalProvider } from "contexts/GlobalContext";

function App() {
  console.log("App started");
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;

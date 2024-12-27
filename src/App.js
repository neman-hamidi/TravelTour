import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const routerr = useRoutes(routes);
  return (
    <>
      <div>{routerr}</div>
    </>
  );
}

export default App;

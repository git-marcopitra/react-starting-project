import { Switch, Route } from "react-router-dom";
import App from "../views/app";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/unk">
      <p>UNK</p>
    </Route>
  </Switch>
);

export default Routes;

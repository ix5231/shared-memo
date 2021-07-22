import { Box, Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "src/components/PrivateRoute";
import SharedMemoBar from "src/components/SharedMemoBar";
import CreateMemo from "src/pages/CreateMemo";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";

const App = () => {
  return (
    <Container className="App">
      <SharedMemoBar />
      <Box pt={10}>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/create-memo">
              <CreateMemo />
            </Route>
          </PrivateRoute>
        </Switch>
      </Box>
    </Container>
  );
};

export default App;

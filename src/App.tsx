import { Box, Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "src/components/PrivateRoute";
import SharedMemoBar from "src/components/SharedMemoBar";
import CreateMemo from "src/pages/CreateMemo";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import MemoProvider from "./components/MemoProvider";
import MemoViewPage from "./pages/MemoViewPage";

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
            <MemoProvider>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/create-memo">
                <CreateMemo />
              </Route>
              <Route
                path="/memos/:id"
                render={({ match }) => <MemoViewPage id={match.params.id} />}
              />
            </MemoProvider>
          </PrivateRoute>
        </Switch>
      </Box>
    </Container>
  );
};

export default App;

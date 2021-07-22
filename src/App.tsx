import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import SharedMemoBar from "src/components/SharedMemoBar";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import { authStateSelector } from "./features/firebase/selector";

const App = () => {
  const state = useSelector(authStateSelector);

  return (
    <Container className="App">
      <SharedMemoBar />
      <Box pt={10}>
        {state !== "loading" ? (
          state === "active" ? (
            <HomePage />
          ) : (
            <LoginPage />
          )
        ) : null}
      </Box>
    </Container>
  );
};

export default App;

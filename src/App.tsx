import { Box, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";

import SharedMemoBar from "src/components/SharedMemoBar";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import { authSelector } from "./features/firebase/selector";

const App = () => {
  const auth = useSelector(authSelector);

  return (
    <Container className="App">
      <SharedMemoBar />
      <Box pt={10}>
        {isLoaded(auth) ? !isEmpty(auth) ? <HomePage /> : <LoginPage /> : null}
      </Box>
    </Container>
  );
};

export default App;

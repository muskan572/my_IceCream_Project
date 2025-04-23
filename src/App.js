import { HashRouter } from "react-router-dom";
import { Router } from "./routes";

import ThemeProvider from "./theme";
import { Provider } from "react-redux";
import store from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="">
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  );
}

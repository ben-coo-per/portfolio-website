import "styles/global.css";
import { theme } from "styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "features/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

import "styles/global.css";
import { lightTheme } from "styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "features/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

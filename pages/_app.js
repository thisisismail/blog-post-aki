import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../store/redux/reducer/index.js";
import "../styles/globals.css";

const store = createStore(allReducers);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

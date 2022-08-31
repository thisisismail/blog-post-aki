import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../store/redux/reducer/index.js";
import "../styles/globals.css";

const store = createStore(allReducers);

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-green-100">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;

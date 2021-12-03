/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from "react-redux";
import Default from "../layouts/default";
import store from "../store";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="layouts-ctn">
      <Provider store={store}>
        <Default>
          <Component {...pageProps} />
        </Default>
      </Provider>
    </div>
  );
}

export default MyApp;

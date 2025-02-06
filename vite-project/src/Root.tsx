import App from "./App";
import { Provider } from "react-redux";
import store from "./features/store";
import configureStore from "./component/configureStore";

const Root: React.FC = () => {
  //const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;

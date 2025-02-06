import { legacy_createStore as createStore, Store} from 'redux';
import { initialState, rootReducer, ExampleState } from './reducers';
import { ExampleAction } from './types';

export const configureStore = (): Store<ExampleState, ExampleAction> => {
 const store = createStore(rootReducer, initialState);
 return store;
};
export default configureStore;
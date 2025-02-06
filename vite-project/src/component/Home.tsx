import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { ExampleState } from "./reducers";
import { ExampleAction, fetchNewTime } from "./types";
import { Dispatch } from "redux";
import { AppDispatch, RootState } from "../features/store";

// const mapStateToProps = (state: ExampleState) => ({
//   currentTime: state.currentTime,
// });
// // Se inieren los tipos de las props types de mapStateToProps
// type PropsFromRedux = ConnectedProps<typeof connector>;

// const mapDispatchToProps = (dispatch: Dispatch<ExampleAction>) => ({
//     updateTime: () => dispatch(fetchNewTime()),
//    });

// const connector = connect(mapStateToProps, mapDispatchToProps);
const Home: React.FC = () => {
  const { currentTime, loading, error } = useSelector(
    (state: RootState) => state.time
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="home">
      <h1>Ejemplo simple Redux Toolkit</h1>
      <p>Hora actual: {new Date(currentTime).toLocaleString()}</p>
      {loading ? (
        <p>⏳ Cargando ...</p>
      ) : (
        <button onClick={() => dispatch(fetchNewTime())} disabled={loading}>
          Update Time
        </button>
      )}
      {error && <p style={{ color: "red" }}>❌ Error: {error}</p>}
    </div>
  );
};
export default Home;

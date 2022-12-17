import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchGamesList } from "../../redux/actions/athletes";

const GamesList = () => <div>GamesList</div>;

const mapStateToProps = ({
  athletesState: { gamesList, isFetchingGamesList },
}: any) => ({
  gamesList,
  isFetchingGamesList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchGamesListProp: (): void => dispatch(fetchGamesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);

import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import BaseLayout from "./Layout/BaseLayout";
import { IAthlete } from "./models/athletes";
import AthleteDetails from "./pages/AthleteDetails";
import Home from "./pages/Home";

type Props = {
  selectedAthlete: IAthlete;
};

const App = ({ selectedAthlete }: Props) => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Roboto",
      },
    }}
  >
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route
        path="/home"
        element={
          <BaseLayout component={<Home />} pageTitle="Olympic Athletes" />
        }
      />
      <Route
        path="/athlete"
        element={
          <BaseLayout
            component={<AthleteDetails />}
            pageTitle={`${selectedAthlete?.name} ${selectedAthlete?.surname} Details`}
          />
        }
      />
    </Routes>
  </ConfigProvider>
);

const mapStateToProps = ({ athletesState: { selectedAthlete } }: any) => ({
  selectedAthlete,
});
export default connect(mapStateToProps)(App);

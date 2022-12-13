import { ConfigProvider } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import BaseLayout from "./Layout/BaseLayout";
import Home from "./pages/Home";

function App() {
  return (
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
          element={<BaseLayout component={Home} pageTitle="Olympic Athletes" />}
        />
      </Routes>
    </ConfigProvider>
  );
}

export default App;

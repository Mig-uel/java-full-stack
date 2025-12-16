import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      {navigation.state === "loading" ? <Spinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;

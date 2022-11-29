import "./App.css";
import MainAdmin from "./Component/Admin/MainAdmin";
import Footer from "./Component/Admin/Footer";
import Index from "./Component/User/Index";

function App() {
  const user = "admin";
  return (
    <div>
      {/* <MainAdmin /> */}
      <Index />
      <Footer />
    </div>
  );
}

export default App;

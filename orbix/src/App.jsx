import "./index.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Form from "./components/Form";
import DataGrid from "./components/DataGrid/DataGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-h-screen max-w-screen">
      <div className="flex-col w-screen">
        <NavBar />
        <Banner />
        <Form />
        <DataGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./index.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Form from "./components/Form";
import DataGrid from "./components/DataGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] w-screen">
      <NavBar />
      <Banner />
      <Form />
      <DataGrid />
      <Footer />
    </div>
  );
}

export default App;

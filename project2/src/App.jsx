import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NumberGame from "./components/NumerGame";
import GreetingCard from "./components/GreetingCard";
function App() {
  // const name_of_the_user = "murali";
  // const age_of_the_user = 15;
  // const branch_of_the_user = "CSE";
  const users = [
    "murali",
    "sai",
    "karthik",
    "suresh",
    "ravi",
    "rajesh",
    "priya",
    "anitha",
    "kavya",
  ];
  return (
    <>
      <NavBar />
      {/* <GreetingCard users = {users}/> */}
      <NumberGame />
      <Footer />
    </>
  );
}

export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {

  return (
    <>
      <div className="dark:bg-bgDark dark:text-white ">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Hero />
          <Project />
        </div>
      </div>
    </>
  )
}

export default App

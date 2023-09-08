import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <div className="dark:bg-bgDark dark:text-white ">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App

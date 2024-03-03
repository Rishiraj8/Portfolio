import "./App.css";
import Profile from "./assets/photome.jpg";
import bgimg from "./assets/circle.png";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex lg:justify-between lg:flex-row iphone:flex-col iphone:items-center">
            <div>
              <h1 className=" font-bold text-xl text-[#FCD0EA]">Rishi Port </h1>
            </div>
            <div>
              <ul className=" flex gap-4">
                <li>
                  <a className=" text-gray-400 hover:text-blue-200 cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className=" text-gray-400 hover:text-blue-200 cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className=" text-gray-400 hover:text-blue-200 cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
      <section>
        <div className="container flex m-auto px-4 py-10 justify-between lg:flex-row gap-10 flex-col-reverse">
          <div>
            <h1 className="font-bold text-4xl">Hello, I'm Rishi, </h1>
            <h1 className="font-bold text-4xl mt-1 gradient-text">Still Becoming Engineer</h1>
            <p className="text-gray-400 mt-4">
              Prentious Web-Developer who thinks he his HIM, but fr I am still processing to understand
              how to center a div
            </p>
          </div>
        <div className="relative flex lg:mr-16 justify-center items-center ">
            <img
              src={Profile}
              alt="Profile"
              width={200}
              className="relative z-10 rounded-full"
              style={{ boxShadow: '0 0 8px 2px #C1689D' }}
            />
          
            {/* For large screens */}
            <img src={bgimg} alt="bgimg" width={200} className="absolute lg:-top-1 lg:left-8 z-0 iphone:-top-1 left-24"/>
          </div>
        </div>
      </section>      
        <section>
          <div className="container m-auto ">
            <h2>Projects</h2>
            <div className="flex">
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

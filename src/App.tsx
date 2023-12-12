
import Header from "./components/Header";
import Footer from "./components/Footer";

import Top from "./components/Top";
import Degree from "./components/Degree";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {

  // Cursor animation

  const cursor: HTMLElement | null = document.querySelector("#cursor");
  const cursorBorder: HTMLElement | null = document.querySelector("#cursor-border");
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };
  
  document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
    if(cursor) cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
  });
  
  requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  
    if(cursorBorder) cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
  });


  return (
    <>
      <Header /> 

      <main>
        <Top />
        <Experiences />
        <Degree />
        <Contact />
      </main>

      <Footer />

      <div id="cursor"></div>
      <div id="cursor-border"></div>
      <script type="module" src="./js/main.js"></script>
    </>
  )
}

export default App

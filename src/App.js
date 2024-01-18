import "./App.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const main = useRef(null);
  const box = useRef(null);
  useEffect(() => {
    const boxImg = box.current;
    const pinBox = boxImg.offsetWidth;
    const mainComtainer = main.current;
    console.log(pinBox);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainComtainer, {
      scrollTrigger: {
        trigger: mainComtainer,
        start: "top center",
        end: "",
        markers: true,
        scrub: true,
        pin: true,
        pinSpacer: false,
      },
      x: 700,
      duration: 1,
    });
  }, []);

  return (
    <div className="App w-screen">
      <div className="w-screen h-screen bg-sky-500"></div>
      <div ref={main} className="flex relative w-screen overflow-hidden">
        <div className="left w-[40%]">
          <h1>This is left</h1>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Lorem Ipsum is fdgh simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div
          ref={box}
          className="right absolute top-0 overflow-hidden flex gap-4 left-[50%]"
        >
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
          <img src="./logo512.png" alt="hdf" />
        </div>
      </div>
      <div className="w-screen h-screen bg-rose-500"></div>
    </div>
  );
}

export default App;

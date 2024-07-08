import React from "react";
import Cards from "../components/Cards";
import grafica from "../assets/grafica.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="w-[96%] mx-auto  max-w-screen-xl mt-7 pb-5">
        <article className="w-full flex items-center justify-center mb-2">
          <img className="w-full" src={grafica} alt="" />
        </article>

        <div className="   grid grid-cols-2 gap-2">
          <Cards
            onClick={() => navigate("/Infrared")}
            event="Infrared Temperature"
            nota="24.5°c"
            last="5 minute ago"
          />

          <Cards
            onClick={() => navigate("/Heart")}
            event="Heart Rate"
            nota="72bpm"
            last="1 minute ago"
          />

          <Cards
            onClick={() => navigate("/Viriability")}
            event="Heart Rate variability"
            nota="58ms"
            last="9 minute ago"
          />
        </div>
      </section>
    </>
  );
}

export default Home;

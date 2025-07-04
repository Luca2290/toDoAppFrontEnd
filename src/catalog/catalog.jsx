import "./catalog.css";
import { useState } from "react";
import Mercedes1 from "./poze/mercedes1.jpg";
import Mercedes2 from "./poze/mercedes2.jpg";
import Mercedes3 from "./poze/mercedes3.webp";
import Bmw1 from "./poze/bmw1.avif";
import Bmw2 from "./poze/bmw2.jpeg";
import Bmw3 from "./poze/bmw3.jpg";
import Audi1 from "./poze/audi1.jpg";
import Audi2 from "./poze/audi2.jpg";
import Audi3 from "./poze/audi3.avif";

function Catalog() {
  const [text1, setText1] = useState("Bmw M4");
  const [text2, setText2] = useState("Bmw M3");
  const [text3, setText3] = useState("Bmw X7");
  const [span1, setSpan1] = useState("70000$");
  const [span2, setSpan2] = useState("50000$");
  const [span3, setSpan3] = useState("600000$");
  const [image1, setImage1] = useState(Bmw1);
  const [image2, setImage2] = useState(Bmw2);
  const [image3, setImage3] = useState(Bmw3);
  const [selectedBrand, setSelectedBrand] = useState("audi");
  function handleSubmit(event) {
    event.preventDefault();
    if (selectedBrand === "bmw") {
      setText1("Bmw M4");
      setText2("Bmw M3");
      setText3("Bmw X7");
      setSpan1("70000$");
      setSpan2("50000$");
      setSpan3("60000$");
      setImage1(Bmw1);
      setImage2(Bmw2);
      setImage3(Bmw3);
    } else if (selectedBrand === "audi") {
      setText1("Audi A7");
      setText2("Audi Q7");
      setText3("Audi R8");
      setSpan1("20000$");
      setSpan2("35000$");
      setSpan3("120000$");
      setImage1(Audi1);
      setImage2(Audi2);
      setImage3(Audi3);
    } else {
      setText1("Mercedes S Class");
      setText2("Mercedes GLE");
      setText3("Mercedes A Class");
      setSpan1("150000$");
      setSpan2("80000$");
      setSpan3("15000$");
      setImage1(Mercedes1);
      setImage2(Mercedes2);
      setImage3(Mercedes3);
    }
  }
  return (
    <>
      <div className="container">
        <h1>Catalog Masini</h1>
        <form onSubmit={handleSubmit}>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="audi">Audi</option>
            <option value="bmw">Bmw</option>
            <option value="mercedes">Mercedes</option>
          </select>
          <button type="submit">Vezi</button>
        </form>
      </div>
      <div className="masini">
        <h2>{text1}</h2>
        <h2>{text2}</h2>
        <h2>{text3}</h2>
      </div>
      <div className="preturi">
        <span>{span1}</span>
        <span>{span2}</span>
        <span>{span3}</span>
      </div>
      <div className="imagini">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </>
  );
}

export default Catalog;

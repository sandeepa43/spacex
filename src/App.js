import MainHeader from "./Component/MainHeader/MainHeader";
import Footer from "./Component/Footer/Footer";
import { useEffect, useState } from "react";
import Content from "./Component/Content";

function App() {
  const [coreData, setCoreData] = useState([]);
  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/cores`)
      .then((res) => res.json())
      .then((json) => {
        setCoreData(json);
      });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <MainHeader />
      <Content coreData={coreData} />
      <Footer />
    </div>
  );
}

export default App;

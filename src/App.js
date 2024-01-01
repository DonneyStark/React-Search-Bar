import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";
import { useState } from "react";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null);
  }

  const filteredTattoos = tattoos.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  });

  const tattooElements = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return (
        <TattooItem
          key={index}
          tattoo={tattoo}
          onTattooClick={onTattooOpenClick}
        />
      );
    });
  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
    );
  }

  // let tattooPost = null;
  // if(!!selectedTattoo){
  //   tattooPost = <TattooPost />
  // }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />

          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>
      {tattooPost}
      {/* {tattooPost} */}
    </div>
  );
}

export default App;

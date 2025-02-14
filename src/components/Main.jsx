import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Item List Artirts */}
      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      ></ItemList>

      {/* Item List Songs */}
      <ItemList
        title="Músicas"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      ></ItemList>
    </div>
  );
};

export default Main;

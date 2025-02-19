import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link to="/song/1" className="song-item">
      <div className="song-item__number-album">
        <p>1</p>

        <div className="song-item__album">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da Música X"
            className="song-item__image"
          ></img>

          <p className="song-item__name">Nome Música</p>
        </div>
      </div>

      <p>02:30</p>
    </Link>
  );
};

export default SongItem;

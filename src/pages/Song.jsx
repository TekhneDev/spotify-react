const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
            alt="Imagem da música X"
          ></img>
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          <img src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192" alt="Imagem do Artista Y"></img>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Song;

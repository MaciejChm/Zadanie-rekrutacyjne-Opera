import slidesData from "../Services/PrototypeDatabase";
import SlidesBody from "./SlidesBody";

const GenerateSlides = () => {
  return (
    <>
      {slidesData.map((tile, index) => (
        <div key={index}>
          <SlidesBody
            id={tile.id}
            text={tile.text}
            imageURL={tile.imageURL}
            audioURL={tile.audioURL}
          />
        </div>
      ))}
    </>
  );
};

export default GenerateSlides;

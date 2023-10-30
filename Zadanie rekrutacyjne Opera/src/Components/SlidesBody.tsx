interface SlidesProps {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
}

const SlidesBody = ({ imageURL, text, audioURL }: SlidesProps) => {
  return (
    <>
      <div>
        <img src={imageURL} alt="cos" />
        <p>{text}</p>
        <audio controls>
          <source src={audioURL} type="audio/mpeg"></source>
        </audio>
      </div>
    </>
  );
};

export default SlidesBody;

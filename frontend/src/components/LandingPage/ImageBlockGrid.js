import ImageBlock from "./ImageBlock";

function ImageBlockGrid({ blocks, classNames }) {
  // Image blocks need: image url, size, caption text, caption size & location,
  return (
    <div className="block-row">
      {blocks.map((block) => (
        <>
          <ImageBlock
            key={block.caption[0]}
            classNames={classNames}
            url={block.url}
            hauntId={block.hauntId}
            caption={block.caption}
            buttonText={block.buttonText}
            hauntId={block.hauntId}
            caption0Class={block.caption0Class}
            caption1Class={block.caption1Class}
          />
        </>
      ))}
    </div>
  );
}

export default ImageBlockGrid;

import ImageBlock from "./ImageBlock";

function ImageBlockGrid({ blocks, classNames }) {
  // Image blocks need: image url, size, caption text, caption size & location,
  return (
    <div className="block-row">
      {blocks.map((block, i) => (
          <ImageBlock
            key={"image-block" + i}
            classNames={classNames}
            url={block.url}
            hauntId={block.hauntId}
            caption={block.caption}
            buttonText={block.buttonText}
            caption0Class={block.caption0Class}
            caption1Class={block.caption1Class}
          />
      ))}
    </div>
  );
}

export default ImageBlockGrid;

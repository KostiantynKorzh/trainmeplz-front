const IMAGE_REGEX = /(?<=<i>)(.+)(?=\<\/i>)/g;

const findImagesInText = (text: string) => {
  console.log(text);
  const images = Array.from(text.matchAll(IMAGE_REGEX));
  const convertedTags = images.map((imageSource) =>
    convertCustomImageTagToHTMLTags(imageSource[0])
  );

  // console.log(images);
  // console.log(images[0]);
  // console.log(images[1]);
  // console.log(images[0][0]);
  // console.log(images[0][1]);
  // console.log(images[1][0]);
  // console.log(images[1][1]);

  console.log(convertedTags);
};

const convertCustomImageTagToHTMLTags = (customTagContent: string): string => {
  const tag = `
        <div>
        <img src=${customTagContent}/>
        </div>
`;

  console.log(tag);

  return tag;
};

export default {
  findImagesInText,
};

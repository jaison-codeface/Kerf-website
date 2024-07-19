const ItalicizeLastLetters = (
  text: string,
  wordsCount: number = 1,
  lineBrick?: boolean
) => {
  const italicizeLastLetters = (str: string) => {
    const words = str.split(" ");
    if (words.length < 2) return text;

    const regularPart = words.slice(0, -wordsCount).join(" ");
    const italicPart = words.slice(-wordsCount).join(" ");

    return (
      <>
        {regularPart} {lineBrick && <br />}
        <i className="font-italic">{italicPart}</i>
      </>
    );
  };

  return italicizeLastLetters(text);
};

export default ItalicizeLastLetters;

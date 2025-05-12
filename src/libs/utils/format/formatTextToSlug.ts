const removeDiacritics = (text: string = "") => {
  return text
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

function removeSpecialCharacters(text: string = "") {
  return text.replace(/[^\w\s]/gi, "");
}

const formatTextToSlug = (text: string = "") => {
  const noDiaStr = removeDiacritics(text);
  const noSpecialStr = removeSpecialCharacters(noDiaStr);
  return noSpecialStr
    .toLowerCase()
    .split(" ")
    .filter((s) => !!s)
    .join("-");
};

export default formatTextToSlug;

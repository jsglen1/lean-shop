export const capitalizeWord = (word: string | string[] | undefined): string | undefined => {
  if (!word) { return word }

  if (Array.isArray(word)) {
    return word.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase().trim()).join(' ');
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase().trim();
};

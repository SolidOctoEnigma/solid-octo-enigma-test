// We get a list of books and a list of people and we want to find if an author is in the list of the people and output it
//  Find an author.
//  Fix the code.

export const testFunction = (books, people) => {
  const matches = [];
  for (let book of books) {
    people.every((person) => {
      if (book.author === `${person.firstname} ${person.lastname}`) {
        matches = [
          ...matches,
          [book.author, `${person.firstname} ${person.lastname}`],
        ];
      }
    });
  }
  return matches;
};

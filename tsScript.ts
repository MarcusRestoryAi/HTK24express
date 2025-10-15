/**
 * Funktion som returnerar en persons fullständiga namn.
 * @param firstname Förnamnet på personen
 * @param lastname Efternamnet på personen
 * @returns Det fulla namnet på personen
 */
function fullname(firstname: String, lastname: String): String {
  return firstname + " " + lastname;
}

/**
 * Funktion som returnerar en persons ålder.
 * @param year Personens födelseår
 * @returns Hur gammal personen är
 */
function birthday(year: number): number {
  return new Date().getFullYear() - year;
}

console.log(fullname("Mats", "Mångata"));
console.log(birthday(1990));
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

/**
 * En klass som representerar en användare.
 */
class User {
  /**
   * Förnamn på användaren
   */
  firstname: String;

  /**
   * Efternamn på användaren
   */
  lastname: String;

  /**
   * Ålder på användaren
   */
  age: number;

  /**
   * Constructor för User-klassen.
   * @param firstname Förnamnet på användaren
   * @param lastname Efternamnet på användaren
   * @param age Åldern på användaren
   */
  constructor(firstname: String, lastname: String, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  /**
   * Metod för att fira användarens födelsedag.
   * Ökar användarens ålder med 1.
   */
  celebrateBirthday(): void {
    this.age += 1;
  }

}

/*
console.log(fullname("Mats", "Mångata"));
console.log(birthday(1990));
*/
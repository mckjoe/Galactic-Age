class Person {
  constructor() {
    this.todaysDate = new Date();
    this.birthDate = new Date('december 9, 1986');
    this.ageInYears = this.todaysDate.getYear() - this.birthDate.getYear();
    this.lifeExpectency = 77; //77 is the avg life expectency for people in the US
  }
}
export { Person };

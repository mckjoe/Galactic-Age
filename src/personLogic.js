class Person {
  constructor() {
    this.todaysDate = new Date();
    this.birthDate = new Date('december 9, 1986');
    this.ageInYears = this.todaysDate.getYear() - this.birthDate.getYear();
    this.lifeExpectency = 77; //77 is the avg life expectency for people in the US
  }

  ageInSeconds() {
    return this.ageInYears * 31536000;
  }

  differenceInSeconds() {
    let startDate = new Date('december 9, 1986').getYear();
    let endDate = new Date('december 9, 1996').getYear();
    let yearsDifference = endDate - startDate;
    return yearsDifference * 31536000;
  }

  mercuryAgeYears() {
    return Math.floor(this.ageInYears / .24);
  }

  venusAgeYears() {
    return Math.floor(this.ageInYears / .62);
  }

  marsAgeYears() {
    return Math.floor(this.ageInYears / 1.88);
  }

  jupiterAgeYears() {
    return Math.floor(this.ageInYears / 11.86);
  }

  earthLifeExpectency() {
    if(this.ageInYears > this.lifeExpectency) {
      return this.ageInYears - this.lifeExpectency;
    } else {
      return this.lifeExpectency - this.ageInYears;
    }
  }

  mercuryLifeExpectency() {
    let yearRemainder;
    if(this.ageInYears > this.lifeExpectency) {
      yearRemainder = this.ageInYears - this.lifeExpectency;
    } else {
      yearRemainder = this.lifeExpectency - this.ageInYears;
    }
    return Math.floor(yearRemainder / .24);
  }

  venusLifeExpectency() {
    let yearRemainder;
    if(this.ageInYears > this.lifeExpectency) {
      yearRemainder = this.ageInYears - this.lifeExpectency;
    } else {
      yearRemainder = this.lifeExpectency - this.ageInYears;
    }
    return Math.floor(yearRemainder / .62);
  }

  marsLifeExpectency() {
    let yearRemainder;
    if(this.ageInYears > this.lifeExpectency) {
      yearRemainder = this.ageInYears - this.lifeExpectency;
    } else {
      yearRemainder = this.lifeExpectency - this.ageInYears;
    }
    return Math.floor(yearRemainder / 1.88);
  }

  jupiterLifeExpectency() {
    let yearRemainder;
    if(this.ageInYears > this.lifeExpectency) {
      yearRemainder = this.ageInYears - this.lifeExpectency;
    } else {
      yearRemainder = this.lifeExpectency - this.ageInYears;
    }
    return Math.floor(yearRemainder / 11.86);
  }

}
export { Person };

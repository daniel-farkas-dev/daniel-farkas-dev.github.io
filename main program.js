var idCount = 0;
var $2021;
$2021.enrollList = [];
//var currentWeekNumber =1;
//var currentWeekString ="w"+currentWeekNumber;
var currentYear = $2021;


function Attendee(first, last, yob, id, registered, enroll, attend) {
  this.firstName = first; //atendee's first name
  this.lastName = last; //atendee's last name
  this.yob = yob; //atendee's year of birth
  this.id = null; //atendees's identification number needs to be enrolled at least once to get one (this.enroll function)
  this.registered = false; //needs to be registered to a year gets reset each year changes to true by running the enroll function (tis.enroll)
  this.enroll = function (yearNumber) { //year is the year you are trying to enroll in the registered attribute should get reset every year while the id is kept
    if (this.id = null) { //keeping the id year to year
      this.id = idCount; // keeping id values uniqe
      idCount++; // updating id counter
      console.log(this.id + " is the current id of the atendee. If it is positive number then continue, if it is null or negative the function failed"); // console logging information
    }
    currentYear.enrollList.push(this.id); //pushing the id to the end of the enrolled list currentYear gets updated every year to be the new array so the year array dousnt get cleared but rather stored
    console.log(currentYear.enrollList.length - 1 + " is the last index of the current year enroll list this should be equal to the id of the enrolled atendee"); // console logging information
    this.registered = true; // updating the enrolled value should get reset every season
  }
  this.attend = function () {}
}

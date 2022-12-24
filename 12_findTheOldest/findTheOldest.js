const findTheOldest = function (people) {
  const oldest = people.reduce((older, current) => {
    const olderAge = getAge(older);
    const youngerAge = getAge(current);
    return olderAge > youngerAge ? older : current;
  }, {});
  return oldest;
};

function getAge(person) {
  if (person == {} || person == undefined) {
    return 0;
  }
  const birth = person["yearOfBirth"];
  let death = 0;
  if (!("yearOfDeath" in person)) {
    death = new Date().getFullYear();
  } else {
    death = person["yearOfDeath"];
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

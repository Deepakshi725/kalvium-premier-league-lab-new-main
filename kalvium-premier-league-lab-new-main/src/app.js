//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formationArray) {
  if (formationArray.length === 0) {
      return null;
  } else {
      return {
          defender: formationArray[0],
          midfield: formationArray[1],
          forward: formationArray[2]
      };
  }
}


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  let filtered_year = [];
  filtered_year = players.filter(player => player.debut == year);
  return filtered_year;
}


//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter(player => player.position === position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  return players.filter(player => {
    // Iterate over the awards array for each player
    for (let award of player.awards) {
        // Check if the name of the award matches the specified awardName
        if (award.name === awardName) {
            return true; // Return true if the award is found
        }
    }
    return false; // Return false if the award is not found
});
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => {
    // Filter the awards of the player to get only those matching the specified awardName
    const matchingAwards = player.awards.filter(award => award.name === awardName);
    // Return true if the number of matching awards equals noOfTimes
    return matchingAwards.length === noOfTimes;
});
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  return players.filter(player => {
    // Filter the awards of the player to get only those matching the specified awardName
    const matchingAwards = player.awards.filter(award => award.name === awardName);
    // Check if the player belongs to the given country and has won the specified award
    return matchingAwards.length > 0 && player.country === country;
});
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => {
    // Check if the player has won at least the given number of awards
    if (player.awards && player.awards.length >= noOfAwards) {
        // Check if the player belongs to the specified team and is younger than the mentioned age
        if (player.team === team && player.age < age) {
            return true;
        }
    }
    return false;
});
}
//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  return players.slice().sort((a, b) => b.age - a.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(player => player.team === team);
  return filteredPlayers.sort((a, b) => b.awards.length - a.awards.length);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const filteredPlayers = players.filter(player => {
      // Filter players who belong to the specified country
      if (player.country !== country) {
          return false;
      }

      // Count the number of times the player has won the specified award
      const awardCount = player.awards.filter(award => award.name === awardName).length;

      // Return true if the player has won the specified award the given number of times
      return awardCount === noOfTimes;
  });

  // Sort the filtered players alphabetically by name
  filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));

  return filteredPlayers;
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  const filteredPlayers = players.filter(player => player.age > age);

  filteredPlayers.forEach(player => {
      // Sort the player's awards in reverse chronological order
      player.awards.sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  // Sort filtered players alphabetically by name
  filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));

  return filteredPlayers;
}
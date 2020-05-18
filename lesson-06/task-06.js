import users from "./users.js";

// =========================================
// Task-01
// =========================================

const getUserNames = (users) => {
  return users.map((item) => item.name);
};

console.log(getUserNames(users));

// =========================================
// Task-02
// =========================================

const getUserWithEyeColor = (users, eyeColor) => {
  return users.filter((item) => item.eyeColor === eyeColor);
};

console.log(getUserWithEyeColor(users, "blue"));

// =========================================
// Task-03
// =========================================

const getUserWithGender = (users, gender) => {
  return users
    .filter((item) => item.gender === gender)
    .map((item) => item.name);
};

console.log(getUserWithGender(users, "male"));

// =========================================
// Task-04
// =========================================

const getInactiveUsers = (users) => {
  return users.filter((item) => item.isActive === false);
};

console.log(getInactiveUsers(users));

// =========================================
// Task-05
// =========================================

const getUserWithEmail = (users, email) => {
  return users.find((item) => item.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// =========================================
// Task-06
// =========================================

const getUsersWithAge = (users, min, max) => {
  return users.filter((item) => item.age > min && item.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// =========================================
// Task-07
// =========================================

const calculateTotalBalance = (users) => {
  const totalBalance = users.reduce((acc, item) => {
    return acc + item.balance;
  }, 0);

  return totalBalance;
};

console.log(calculateTotalBalance(users));

// =========================================
// Task-08
// =========================================

const getUsersWithFriend = (users, friendName) => {
  return users.filter((item) => item.friends.includes(friendName));
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// =========================================
// Task-09
// =========================================

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((item) => item.name);
};

console.log(getNamesSortedByFriendsCount(users));

// =========================================
// Task-10
// =========================================

const getSortedUniqueSkills = (users) => {
  return users
    .map((item) => item.skills)
    .flat()
    .filter((item, index, users) => users.indexOf(item) == index)
    .sort();
};

console.log(getSortedUniqueSkills(users));

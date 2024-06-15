type TestUser = [string, number];
type TUserArr = TestUser[];

const testArr: TUserArr = [];
const testUser: TestUser = ["aug", 1];

testUser[1] = 20;
console.log(testUser);

function addUser(user: TestUser): TUserArr {
  testArr.push(user);
  console.log(`adding ${user}`);
  console.log(testArr);
  return testArr;
}

addUser(["lili", 10]);
addUser(testUser);

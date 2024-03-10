/*

Intro:

    Filtering requirements have grown. We need to be
    able to filter any kind of Persons.

Exercise:

    Fix typing for the filterPersons so that it can filter users
    and return User[] when personType='user' and return Admin[]
    when personType='admin'. Also filterPersons should accept
    partial User/Admin type according to the personType.
    `criteria` argument should behave according to the
    `personType` argument value. `type` field is not allowed in
    the `criteria` field.

Higher difficulty bonus exercise:

    Implement a function `getObjectKeys()` which returns more
    convenient result for any argument given, so that you don't
    need to cast it.

    let criteriaKeys = Object.keys(criteria) as (keyof User)[];
    -->
    let criteriaKeys = getObjectKeys(criteria);

*/

// interface User {
//   type: "user";
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   type: "admin";
//   name: string;
//   age: number;
//   role: string;
// }

// export type Person = User | Admin;

// export const persons: Person[] = [
//   {
//     type: "user",
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
//   { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
//   { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
//   { type: "user", name: "Wilson", age: 23, occupation: "Ball" },
//   { type: "admin", name: "Agent Smith", age: 23, role: "Anti-virus engineer" },
// ];

// export function logPerson(person: Person) {
//   console.log(
//     ` - ${person.name}, ${person.age}, ${
//       person.type === "admin" ? person.role : person.occupation
//     }`
//   );
// }

// export function filterPersons(
//   persons: Person[],
//   personType: string,
//   criteria: unknown
// ): unknown[] {
//   return persons
//     .filter((person) => person.type === personType)
//     .filter((person) => {
//       let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
//       return criteriaKeys.every((fieldName) => {
//         return person[fieldName] === criteria[fieldName];
//       });
//     });
// }

// export const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
// export const adminsOfAge23 = filterPersons(persons, "admin", { age: 23 });

// console.log("Users of age 23:");
// usersOfAge23.forEach(logPerson);

// console.log();

// console.log("Admins of age 23:");
// adminsOfAge23.forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

// My solve
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
  { type: "user", name: "Wilson", age: 23, occupation: "Ball" },
  { type: "admin", name: "Agent Smith", age: 23, role: "Anti-virus engineer" },
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${
      person.type === "admin" ? person.role : person.occupation
    }`
  );
}

// 매개변수로 들어오는 criteria의 타입이 User라면 User[], Admin이라면 Admin[]의 타입으로 리턴을 해야한다.
// 따라서, 각각의 매개변수 및 반환타입이 다른 함수들을 오버로딩한다.

// 각 상황에 따른 오버로딩 시그니처 선언
export function filterPersons(
  persons: Person[],
  personType: "user",
  criteria: Partial<User>
): User[];
export function filterPersons(
  persons: Person[],
  personType: "admin",
  criteria: Partial<Admin>
): Admin[];
// 실제 함수 오바로딩 구현부 선언
export function filterPersons(
  persons: Person[],
  personType: string,
  criteria: Partial<Person>
): Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
      let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
      return criteriaKeys.every((fieldName) => {
        return person[fieldName] === criteria[fieldName];
      });
    });
}

export const usersOfAge23 = filterPersons(persons, "user", { age: 23 });
export const adminsOfAge23 = filterPersons(persons, "admin", { age: 23 });

console.log("Users of age 23:");
usersOfAge23.forEach(logPerson);

console.log();

console.log("Admins of age 23:");
adminsOfAge23.forEach(logPerson);

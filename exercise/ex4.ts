/*

Intro:

    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.

Exercise:

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

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
// ];

// export function isAdmin(person: Person) {
//   return person.type === "admin";
// }

// export function isUser(person: Person) {
//   return person.type === "user";
// }

// export function logPerson(person: Person) {
//   let additionalInformation: string = "";
//   if (isAdmin(person)) {
//     additionalInformation = person.role;
//   }
//   if (isUser(person)) {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// console.log("Admins:");
// persons.filter(isAdmin).forEach(logPerson);

// console.log();

// console.log("Users:");
// persons.filter(isUser).forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

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
];

export function isAdmin(person: Person) {
  return person.type === "admin";
}

export function isUser(person: Person) {
  return person.type === "user";
}

// ex3과 유사하게 logPerson의 parameter 객체는 유니온 타입으로 User타입인지 Admin타입인지 컴파일단계에서 확인하여 연산을 수행할수 없다.
// isAdmin, isUser 함수가 person 객체의 타입을 확인해주므로, 해당 값에 따라 type assertion을 사용하여 person객체의 타입을 단언해 additionalInformation의 값을 할당해준다.
export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = (person as Admin).role;
  }
  if (isUser(person)) {
    additionalInformation = (person as User).occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);

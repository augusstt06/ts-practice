// 배열을 다룰때 사용하는 map 메서드를 타입에 적용

type Animals = "Dog" | "Cat" | "Bird";
type AnimalProfiles = { [K in Animals]: number };

const animalProfiles: AnimalProfiles = {
  Dog: 1,
  Cat: 2,
  Bird: 3,
};

// 객체를 정의하는 타입을 제네릭으로 받음
type SampleMapped<T> = {
  [K in keyof T]?: T[K];
};

type Person = {
  age: number;
  name: string;
};

const onlyAge: SampleMapped<Person> = { age: 20 };
const onlyName: SampleMapped<Person> = { name: "aug" };
const allPerson: SampleMapped<Person> = { age: 20, name: "aug" };
console.log(onlyAge, onlyName, allPerson);

// 동일한 타입선언 지양
type UserProfile = {
  username: string;
  email: string;
  photoUrl: string;
};
type UserProfileUpdateBefore = {
  username?: string;
  email?: string;
  photoUrl?: string;
};

type UserProfileUpdateAfter = {
  //   [K in "username" | "email" | "photoUrl"]?: UserProfile[K];
  [K in keyof UserProfile]?: UserProfile[K];
};

const testUserUpdate: UserProfileUpdateAfter = {};

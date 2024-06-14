function SampleFn(data: number | string): void {
  if (typeof data === "string") console.log(`${data}, 1`);
  else console.log(data + 1);
}

const v1 = typeof "first";
const v2 = typeof 2;
const v3 = typeof true;
const v4 = typeof { age: 10 };
// console.log(v1, v2, v3, v4);

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  introduction(): void {
    console.log(`Hi my name is ${this.name}`);
  }
}

class AdminUser extends User {
  constructor(name: string) {
    super(name);
  }
  introduction(): void {
    console.log(`Hi my name is ${this.name}, I am an administrator user.`);
  }
}

class GuestUser extends User {
  constructor(name: string) {
    super(name);
  }
  introduction(): void {
    console.log(`Hi my name is ${this.name}, I am an Guest User`);
  }
}

const user1 = new AdminUser("aug");
const user2 = new GuestUser("kuku");

console.log(user1 instanceof User);
console.log(user1 instanceof AdminUser);
console.log(user1 instanceof GuestUser);

console.log(user2 instanceof User);
console.log(user2 instanceof AdminUser);
console.log(user2 instanceof GuestUser);

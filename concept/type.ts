interface Sample {
  name: string;
}

interface Sample2 extends Sample {
  age: number;
}
function InterfaceSample(user: Sample, user2: Sample2) {
  console.log(`user1의 이름은 ${user.name}`);
  console.log(`user2의 이름은 ${user2.name}이고 나이는 ${user2.age}`);
}

const user1: Sample = {
  name: "인터페이스",
};
const user2: Sample2 = {
  name: "extends 확장",
  age: 20,
};
InterfaceSample(user1, user2);

type TSample = {
  name: string;
};

type PrimitiveType = string;
type PrimitiveType2 = string | number;

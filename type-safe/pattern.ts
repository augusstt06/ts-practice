import { match } from "ts-pattern";

interface Man {
  gender: "Man";
  name: string;
  age: number;
  military: boolean;
}
interface Woman {
  gender: "Woman";
  name: string;
  age: number;
}

type Human = Man | Woman;

const aug: Woman = {
  gender: "Woman",
  name: "aug",
  age: 20,
  //   military: true,
};

const checkHuman = (human: Human) => {
  match(human)
    .with({ gender: "Man" }, (human) => {
      console.log(
        `${human.name}은 ${human.military ? "군필" : "미필"} 남성입니다.`
      );
    })
    .with({ gender: "Woman" }, (human) => {
      console.log(`${human.name}은 ${human.age} 여성입니다.`);
    })
    .exhaustive();
};

checkHuman(aug);

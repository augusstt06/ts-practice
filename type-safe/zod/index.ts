import { z } from "zod";

const Man = z.object({
  name: z.string(),
  age: z.number(),
  military: z.boolean(),
});

// 유효성 검사
Man.parse({
  name: "aug",
  age: 20,
  military: true,
});

// throw Error
// Man.parse({
//   name: "aug",
//   age: 20,
//   military: "true",
// });
// console.log(1);

// 타입 추론
type TMan = z.infer<typeof Man>;
const sampleFn = (man: TMan) => {
  Man.parse(man);
  console.log("success");
};

const sampleVariable: TMan = {
  name: "aug",
  age: 20,
  military: true,
};
sampleFn(sampleVariable);

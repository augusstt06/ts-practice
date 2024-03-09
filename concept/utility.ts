type UserPromise = Promise<{
  id: number;
  name: string;
}>;
type AwaitedUser = Awaited<UserPromise>;
async function User(): UserPromise {
  return { id: 1, name: "Awaited type example" };
}

async function PrintUser() {
  const user: AwaitedUser = await User();
  console.log(user);
}

// PrintUser(); // { id: 1, name: 'Awaited type example' }

type User = {
  name: string;
};

const user: Readonly<User> = {
  name: "this is user",
};
// user.name = "Can I change property?";
console.log(user);

// type Score = Record<string, number>;
type Subject = "math" | "eng" | "korean";
type Score = Record<Subject, number>;
const ExamScore: Score = { math: 100, eng: 20, korean: 80 };

type Todo = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  isComplete: boolean;
};

const simpleTodo: Pick<Todo, "title" | "isComplete"> = {
  title: "Pick example!",
  isComplete: false,
};

//
function Example(age: number) {
  return age + 1;
}

const result: ReturnType<typeof Example> = Example(10);

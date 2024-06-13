import { z, ZodError } from "zod";

const pwdRegex: RegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

const passwordRegexSchema = z
  .string()
  .min(8, {
    message: "비밀번호는 영문/숫자/특수문자를 포함한 8~15자리 입니다.",
  })
  .max(15, {
    message: "비밀번호는 영문/숫자/특수문자를 포함한 8~15자리 입니다.",
  })
  .regex(pwdRegex, {
    message: "특수문자 중 ; & % = - + < > ＼ 는 사용할 수 없습니다.",
  });

type PasswordSchema = z.infer<typeof passwordRegexSchema>;

const verifyPassword = (password: PasswordSchema) => {
  try {
    const result = passwordRegexSchema.parse(password);
    console.log(`Successfully verified password: ${result}`);
  } catch (err) {
    if (err instanceof ZodError) {
      console.log(`Error Occurred: ${err.issues}`);
    }
  }
};

verifyPassword("rlacnddus06!");

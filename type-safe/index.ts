import { match } from "ts-pattern";
import { z } from "zod";

const GuestSchema = z.object({
  type: z.literal("Guest"),
  name: z.string(),
  age: z.number(),
});

const AdminSchema = z.object({
  type: z.literal("Admin"),
  name: z.string(),
  age: z.number(),
  role: z.union([z.literal("Top"), z.literal("Normal")]),
});

const UserSchema = z.union([GuestSchema, AdminSchema]);

type TAdmin = z.infer<typeof AdminSchema>;
type TGuest = z.infer<typeof GuestSchema>;
type TUser = z.infer<typeof UserSchema>;

const testUser: TUser = {
  type: "Admin",
  name: "aug",
  age: 20,
  role: "Top",
};

const parsedUser = UserSchema.parse(testUser);

const checkRole = (admin: TAdmin) => {
  match(admin.role)
    .with("Top", () => {
      console.log(`${admin.name} is Top level admin user`);
    })
    .with("Normal", () => {
      console.log(`${admin.name} is normal level admin user`);
    })
    .exhaustive();
};
const verifyUser = (user: TUser) => {
  match(user)
    .with({ type: "Admin" }, (admin: TAdmin) => {
      checkRole(admin);
    })
    .with({ type: "Guest" }, (guest: TGuest) => {
      console.log(`${guest.name} is guest user`);
    })
    .exhaustive();
};

verifyUser(parsedUser);

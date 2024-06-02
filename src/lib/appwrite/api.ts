import { INewUser } from "@/types";
import { ID, account } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newUser = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

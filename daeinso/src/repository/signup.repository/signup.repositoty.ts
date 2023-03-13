import customAxios from "../../lib/axios/customAxios";

import { Response } from "../response";
import { PostSignup } from "../../types/SignupType/Signup.type";
import { useMutation } from "react-query";

class SignupRepository {
  public async postSignup(data: PostSignup): Promise<void> {
    await customAxios.post("/user/register", data);
  }
}

// class SignupRepository {
//   public async postSignup({
//     email,
//     password,
//     name,
//     generation,
//     stack,
//   }: PostSignup): Promise<void> {
//     const { data } = await customAxios.post("/user/register", {
//       email: email,
//       password: password,
//       name: name,
//       generation: generation,
//       stack: stack,
//     });
//     return data;
//   }
// }

export default new SignupRepository();

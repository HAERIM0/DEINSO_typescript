import customAxios from "../../lib/axios/customAxios";
import { Response } from "../response";
class SignupRepository {
  public async signupPost(): Promise<Response> {
    const { data } = await customAxios.post("/user/register");
    return data;
  }
}

export default SignupRepository;

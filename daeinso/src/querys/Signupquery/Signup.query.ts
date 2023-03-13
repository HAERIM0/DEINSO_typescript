import { useMutation } from "react-query";
import SignupRepository from "../../repository/signup.repository/signup.repositoty";
import { PostSignup } from "../../types/SignupType/Signup.type";

export const useSignup = () => {
  // const useSignupmutation = useMutation("/user/register", (data: PostSignup) =>
  //   SignupRepository.postSignup(data)
  // );
  // return mutation;

  // const useSignupmutation = useMutation(
  //   ({ email, password, name, generation, stack }: PostSignup) =>
  //     SignupRepository.postSignup({ email, password, name, generation, stack })
  // );

  const mutation = useMutation("/user/register", (data: PostSignup) =>
    SignupRepository.postSignup(data)
  );
  return mutation;
};

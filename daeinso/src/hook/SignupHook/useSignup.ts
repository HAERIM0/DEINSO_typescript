import {
  signupEmailAtom,
  signupAgeAtom,
  signupNameAtom,
  signupPasswordAtom,
  signupStackAtom,
} from "../../recoil/signupAtom";
import { useRecoilState } from "recoil";
import { QueryClient, useMutation } from "react-query";
import { useCallback } from "react";
import { PostSignup } from "../../types/SignupType/Signup.type";
import customAxios from "../../lib/axios/customAxios";
import { useSignup } from "../../querys/Signupquery/Signup.query";

export const useSignUp = () => {
  const [signemail, setSignEmail] = useRecoilState<string>(signupEmailAtom);
  const [signpassword, setSignPassword] =
    useRecoilState<string>(signupPasswordAtom);
  const [signname, setSignName] = useRecoilState<string>(signupNameAtom);
  const [age, setAge] = useRecoilState<number>(signupAgeAtom);
  const [signstack, setSignStack] = useRecoilState<string>(signupStackAtom);

  const queryClient = new QueryClient();
  const SignupMutation = useSignup();

  const onSignup = useCallback(() => {
    const data: PostSignup = {
      email: signemail,
      password: signpassword,
      name: signname,
      generation: age,
      stack: signstack,
    };
    SignupMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("/user/register");
      },
      onError: (err: any) => {
        console.log(err);
      },
    });
  }, [signemail, signpassword, signemail, age, signstack]);

  return { onSignup };
};

// const data: PostSignup = {
//   email:signemail,
//   password:signpassword,
//   name:signname,
//   generation:age,
//   stack:signstack
// };
// SignupMutation.mutate(data,{
//   onSuccess:() => {
//     queryClient.invalidateQueries("/user/register");
//   },
//   onError:(err:any) => {
//     console.log(err)
//   }
// })
// [email,password,name,generation,stack]

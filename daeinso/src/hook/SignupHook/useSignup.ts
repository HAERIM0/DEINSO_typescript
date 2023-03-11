import { useRecoilState } from "recoil";
import {
  signupEmailAtom,
  signupNameAtom,
  signupPasswordAtom,
} from "../../recoil/signupAtom";

const useSignup = () => {
  const [signemail, setSignEmail] = useRecoilState<string>(signupEmailAtom);
  const [signpassword, setSignPassword] =
    useRecoilState<string>(signupPasswordAtom);
  const [signname, setSignName] = useRecoilState<string>(signupNameAtom);

  const signupEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignEmail(e.target.value);
  };

  const signupPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignPassword(e.target.value);
  };

  const signupName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignName(e.target.value);
  };

  return { signupEmail, signupPassword, signupName };
};

export default useSignup;

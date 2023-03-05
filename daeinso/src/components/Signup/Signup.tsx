import React from "react";
import * as S from "./Signup.style";
import { useRecoilState } from "recoil";
import {
  signupAgeAtom,
  signupEmailAtom,
  signupNameAtom,
  signupPasswordAtom,
  signupStackAtom,
} from "../../recoil/signupAtom";

export default function Signup() {
  const [signemail, setSignEmail] = useRecoilState(signupEmailAtom);
  const [signpassword, setSignPassword] = useRecoilState(signupPasswordAtom);
  const [signname, setSignName] = useRecoilState(signupNameAtom);
  const [age, setAge] = useRecoilState(signupAgeAtom);
  const [signstack, setSignStack] = useRecoilState(signupStackAtom);
  return (
    <S.SignupBox>
      <S.Signup>
        <h1></h1>
        <S.SignupInput>
          <p>이메일</p>
          <input></input>
          <p>비밀번호</p>
          <input></input>
          <p>이름</p>
          <input></input>
        </S.SignupInput>
        <S.SignupAge>
          <button></button>
        </S.SignupAge>
        <S.SignupStack>
          <button></button>
        </S.SignupStack>
      </S.Signup>
    </S.SignupBox>
  );
}

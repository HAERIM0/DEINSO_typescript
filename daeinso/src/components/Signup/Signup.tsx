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
import { STACK } from "../../constants/stack/STACK";
import { AGE } from "../../constants/age/AGE";

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
          {STACK.map((item) => (
            <button
              onClick={() => setSignStack(item.payload)}
              style={{
                width: "73px",
                height: "40px",
                borderRadius: "10px",
                border: `1px solid ${item.color}`,
                backgroundColor: signstack ? item.color : "null",
                fontSize: "11.5px",
              }}
            >
              {item.name}
            </button>
          ))}
        </S.SignupAge>
        <S.SignupStack>
          {AGE.map((item) => (
            <button
              onClick={() => setAge(item.payload)}
              style={{
                width: "73px",
                height: "40px",
                borderRadius: "10px",
                border: `1px solid ${item.color}`,
                backgroundColor: age ? item.color : "null",
                fontSize: "11.5px",
              }}
            >
              {item.name}
            </button>
          ))}
        </S.SignupStack>
      </S.Signup>
    </S.SignupBox>
  );
}

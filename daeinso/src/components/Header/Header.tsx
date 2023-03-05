import React from "react";
import * as H from "./Header.style";

export default function Header() {
  return (
    <H.HeaderBox>
      <H.Header>
        <H.HeaderLeft>
          <h2>DAEINSO</h2>
          <p>프로젝트</p>
        </H.HeaderLeft>
        <H.HeaderRight>
          <text className="logout">로그아웃</text>
        </H.HeaderRight>
      </H.Header>
    </H.HeaderBox>
  );
}

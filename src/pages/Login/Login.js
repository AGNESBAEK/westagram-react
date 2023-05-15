import React from "react";

const Login = () => {
  return (
    <div className="login">
      <p>westagram</p>
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        id="user_id"
      />
      <input type="password" placeholder="비밀번호" id="user_pw" />
      <button id="login_btn">로그인</button>
      <a href="/"> 비밀번호를 잊으셨나요?</a>
    </div>
  );
};

export default Login;

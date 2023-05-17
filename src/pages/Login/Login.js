import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <p className="title">westagram</p>
      <input
        className="idInput"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input type="password" placeholder="비밀번호" />
      <Link to="/main">
        <button
          onClick={() => {
            navigate('/main');
          }}
        >
          로그인
        </button>
      </Link>
      <a className="ask" href="/">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;

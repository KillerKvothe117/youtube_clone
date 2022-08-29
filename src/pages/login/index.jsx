import React from "react";
import {
  Logincontainer,
  Wrapper,
  Title,
  SubTitle,
  Input,
  Button,
  More,
  Links,
  Link,
} from "./login.style";

const Login = () => {
  return (
    <Logincontainer>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to KvotheHub</SubTitle>
        <Input placeholder="username..." />
        <Input type={"password"} placeholder="password..." />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="username..." />
        <Input placeholder="email..." />
        <Input type={"password"} placeholder="password..." />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Logincontainer>
  );
};

export default Login;

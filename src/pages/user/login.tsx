import React from "react";
import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { COLOR } from "src/styles/PALLETS";
import { UserLoginType } from "src/types/UserType";
import { UserLogin } from "src/api/UserAuthApi";
import { setCookie } from "cookies-next";

function Login() {
  const { register, handleSubmit } = useForm<UserLoginType>();
  const onSubmit: SubmitHandler<UserLoginType> = (data) => {
    UserLogin(data)
      .then((res) => {
        console.log(res)
        if (res?.data.success) {
          setCookie("token", res.data.data);
        }
      })
      .catch((err) => console.log);
  };
  return (
    <Container>
      <Welcome>
        로그인 정보를
        <br />
        입력해주세요
      </Welcome>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <p>아이디</p>
          <input
            type="text"
            autoFocus={true}
            placeholder=" "
            required={true}
            {...register("username")}
          />
        </Label>
        <Label>
          <p>비밀번호</p>
          <input
            type="password"
            placeholder=" "
            required={true}
            {...register("password")}
          />
        </Label>
        <Submit type="submit">로그인</Submit>
      </Form>
      <Link href="/user/join">
        <Join>회원가입</Join>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  margin: 20% 0 0;
`;
const Welcome = styled.h3`
  display: flex;
  flex-direction: column;
  display: block;
  margin: 0 0 16px;
  padding: 8px;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.3rem;
`;
const Form = styled.form``;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 16px;
  padding: 0 24px;
  height: 96px;
  background-color: #eeeeee;
  border-radius: 20px;
  color: #858585;
  transition: all 0.3s;
  p {
    transition: all 0.3s;
  }
  input {
    width: 0;
    height: 0;
    padding: 0;
    background-color: transparent;
    opacity: 0;
    font-size: 1px;
    transition: all 0.3s;
  }
  &:has(input:focus),
  &:has(input:not(:placeholder-shown)) {
    p {
      font-size: 0.85rem;
      transition: all 0.3s;
      line-height: 1rem;
    }
    input {
      width: 100%;
      height: auto;
      padding: 8px 0;
      opacity: 1;
      font-size: 1.1rem;
    }
  }
  &:has(input:focus) {
    background-color: #fff;
    border: 1px solid #000;
  }
`;

const Submit = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  background-color: ${COLOR.main};
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
`;
const Join = styled.button`
  cursor: pointer;
  width: 100%;
  margin: 12px 0 0;
  padding: 20px;
  background-color: #fff;
  border: 1px solid ${COLOR.main};
  border-radius: 8px;
  color: ${COLOR.main};
  font-size: 1.1rem;
  font-weight: 600;
`;
export default Login;

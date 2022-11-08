import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../styles/PALLETS";

function Join() {
  return (
    <Container>
      <Welcome>
        회원가입 정보를
        <br />
        입력해주세요
      </Welcome>
      <Form>
        <Label>
          <p>아이디</p>
          <input type="text" autoFocus={true} placeholder=" " required={true} />
        </Label>
        <Label>
          <p>비밀번호</p>
          <input
            type="password"
            placeholder="8자 이상의 특수문자를 포함"
            minLength={8}
            required={true}
          />
        </Label>
        <Label>
          <p>이름</p>
          <input type="text" placeholder=" " required={true} />
        </Label>
        <Label interest={true}>
          <p>관심사</p>
          <input type="text" placeholder="1관심사" required={true} />
          <input type="text" placeholder="2관심사" required={true} />
          <input type="text" placeholder="3관심사" required={true} />
        </Label>
        <Submit>완료</Submit>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  margin: 24px 0 0;
`;
const Welcome = styled.h3`
  display: block;
  margin: 0 0 16px;
  padding: 8px;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.3rem;
`;
const Form = styled.form``;
const Label = styled.label<{ interest?: boolean }>`
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

  &:has(input:focus) {
    height: ${(props) => (props.interest ? "176px" : "96px")};
    background-color: #fff;
    border: 1px solid #000;
    p {
      font-size: 0.85rem;
    }
    input {
      width: 100%;
      height: auto;
      margin: ${(props) => (props.interest ? "8px 0 -6px" : "0")};
      padding: 8px 0;
      opacity: 1;
      font-size: 1.1rem;
    }
  }
  &:has(input:not(:placeholder-shown)) {
    min-height: ${(props) => (props.interest ? "176px" : "96px")};
    p {
      font-size: 0.85rem;
      transition: all 0.3s;
      line-height: 1rem;
    }
    input {
      width: 100%;
      margin: ${(props) => (props.interest ? "8px 0 -6px" : "0")};
      height: auto;
      padding: 8px 0;
      opacity: 1;
      font-size: 1.1rem;
    }
  }
`;

const Submit = styled.button`
  width: 100%;
  padding: 20px;
  background-color: ${COLOR.main};
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
`;

export default Join;

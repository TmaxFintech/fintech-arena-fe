import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TopicArticleSocket from "src/socket/TopicArticleSocket";
import { SocketReqResTypes } from "src/types/SocketResponse";

function Create() {
  const [response, setResponse] = useState<SocketReqResTypes>();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    TopicArticleSocket({
      service: "InsertService",
      body: data,
      setResponse: setResponse,
    });
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <p>id</p>
          <input
            type="text"
            placeholder=" "
            {...register("id")}
            autoFocus={true}
          />
        </Label>
        <Label>
          <p>userAccountId</p>
          <input type="text" placeholder=" " {...register("userAccountId")} />
        </Label>
        <Label>
          <p>게시판ID</p>
          <input type="text" placeholder=" " {...register("boardId")} />
        </Label>
        <Label>
          <p>제목</p>
          <input type="text" placeholder=" " {...register("title")} />
        </Label>
        <Label>
          <p>내용</p>
          <input type="text" placeholder=" " {...register("content")} />
        </Label>
        <Label>
          <p>해시태그</p>
          <input type="text" placeholder=" " {...register("hashtag")} />
        </Label>
        <Label>
          <p>status</p>
          <input type="text" placeholder=" " {...register("status")} />
        </Label>
        <Label>
          <p>modifiedBy</p>
          <input type="text" placeholder=" " {...register("modifiedBy")} />
        </Label>
        <button type="submit">확인</button>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 16px;
  padding: 0 24px;
  height: 84px;
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
    background-color: #fff;
    border: 1px solid #000;
    p {
      font-size: 0.85rem;
    }
    input {
      width: 100%;
      height: auto;
      padding: 8px 0 0;
      opacity: 1;
      font-size: 1.1rem;
    }
  }
  &:has(input:not(:placeholder-shown)) {
    p {
      font-size: 0.85rem;
      transition: all 0.3s;
      line-height: 1rem;
    }
    input {
      width: 100%;
      height: auto;
      padding: 8px 0 0;
      opacity: 1;
      font-size: 1.1rem;
    }
  }
`;

export default Create;

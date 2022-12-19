import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";

import { COLOR } from "../../styles/PALLETS";
import { UserJoin } from "src/api/UserAuthApi";
import { PreferSelectedDataType, UserInfoType } from "src/types/UserType";
import PreferSelectModal from "src/components/User/PreferSelectModal";

interface JoinValidErrorsType {
  objectName: string;
  field: string;
  code: string;
  message: string;
}

function Join() {
  const [viewModal, setViewModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [getPreferCorp, setGetPreferCorp] = useState<PreferSelectedDataType[]>(
    []
  );
  const [errorData, setErrorData] = useState<JoinValidErrorsType[]>([]);
  const { register, handleSubmit, setValue } = useForm<UserInfoType>();
  const router = useRouter();

  const onSubmit: SubmitHandler<UserInfoType> = (data) => {
    UserJoin(data)
      .then((res) => {
        if (res?.data?.message === "회원가입 성공") {
          alert("회원가입 성공")
          router.push("/user/login");
        }
      })
      .catch((res) => {
        setErrorData(res?.response?.data?.data?.errors);
      });

    setTimeout(() => {
      setErrorData([]);
    }, 3500);
  };

  const validationCheck = (fieldname: string) => {
    return errorData?.filter((value) => value?.field === fieldname)?.[0]
      ?.message;
  };

  useEffect(() => {
    setValue("preferred1st", getPreferCorp[0]?.assetName.toString());
    setValue("preferred2nd", getPreferCorp[1]?.assetName.toString());
    setValue("preferred3rd", getPreferCorp[2]?.assetName.toString());
  }, [getPreferCorp]);

  return (
    <Container>
      <Welcome>
        회원가입 정보를
        <br />
        입력해주세요
      </Welcome>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <p>
            아이디
            {errorData?.length > 0 && (
              <span className="error-message">
                {validationCheck("username")}
              </span>
            )}
          </p>
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
            type={showPassword ? "text" : "password"}
            placeholder="8자 이상의 특수문자를 포함"
            minLength={8}
            required={true}
            {...register("password")}
          />
          <PasswordVisible
            showPassword={showPassword}
            onMouseOver={() => setShowPassword(!showPassword)}
            onMouseLeave={() => setShowPassword(!showPassword)}
          ></PasswordVisible>
        </Label>
        <Label>
          <p>
            이메일
            {errorData?.length > 0 && (
              <span className="error-message">{validationCheck("email")}</span>
            )}
          </p>
          <input
            type="email"
            placeholder=" "
            required={true}
            {...register("email")}
          />
        </Label>
        <Label onClick={() => setViewModal(true)}>
          <p>관심사</p>
          <input
            type="text"
            placeholder="관심사"
            defaultValue={getPreferCorp
              .map((value) => value.assetName)
              .join(", ")}
            required={true}
            disabled
          />
        </Label>
        {viewModal && (
          <PreferSelectModal
            setViewModal={setViewModal}
            getPreferCorp={getPreferCorp}
            setGetPreferCorp={setGetPreferCorp}
          />
        )}
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
const Label = styled.label`
  position: relative;
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
  button {
    display: none;
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
    button {
      display: block;
    }
  }
  &:has(input:focus) {
    background-color: #fff;
    border: 1px solid #000;
  }
  /* 에러 메시지 */
  .error-message {
    display: block;
    float: right;
    color: red;
  }
  .fade-out {
    opacity: 0;
    transition: all 0.3s;
  }
`;

const PasswordVisible = styled.i<{ showPassword: boolean }>`
  cursor: pointer;
  position: absolute;
  right: 12px;
  bottom: 0;
  width: 40px;
  height: 40px;
  background-image: ${(props) =>
    props.showPassword
      ? "url(/icon/visibility_off.svg)"
      : "url(/icon/visibility.svg)"};
  background-repeat: no-repeat;
  background-position: center;
  transform: translateY(-50%);
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

export default Join;

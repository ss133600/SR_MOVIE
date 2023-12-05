import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage } from "../../components/ErrorMessage";
import { ButtonUi } from "../../components/ButtonUi";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  border: 1px solid white;
  padding: 30px 50px;
  border-radius: 15px;
  margin-top: 5%;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    margin-top: 20%;
  }
`;
const Title = styled.h3`
  font-size: 45px;
  font-weight: 900px;
  color: white;
  margin-bottom: 40px;
`;
const Input = styled.div`
  all: unset;
  width: 100%;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
`;

const BottomInfo = styled.div`
  margin-top: 30px;
`;
export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>SIGN UP</Title>

        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="로그인"
        />
        <ErrorMessage text={errors?.username?.message} />

        <Input {...register("email")} type="text" placeholder="이메일" />

        <Input
          {...register("name", {
            required: "이름은 필수 입니다.",
          })}
          type="text"
          placeholder="이름"
        />
        <ErrorMessage text={errors?.name?.message} />

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상 입니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />

        <ButtonUi active={isValid} text={"회원가입"} />

        <BottomInfo>
          아이디가 있으신가요? <Link to="/login">로그인 &rarr;</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};

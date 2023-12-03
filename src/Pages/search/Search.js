import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom/dist";

const Title = styled.div`
  font-size: 35px;
  margin-left: 150px;
  margin-top: 150px;
  font-weight: 500;
`;
const Form = styled.form`
  margin-left: 150px;
  margin-top: 40px;
  position: relative;
  /* width: 100%; */
  /* color: white; */
`;
const Input = styled.input`
  /* color: #444444; */
  width: 70%;
  border: none;
  border-bottom: solid #ff597b 1px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 40px;
  position: relative;
  background: none;
  z-index: 5;
  outline: none;
  font-size: 25px;
  color: white;
`;
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;
const Con = styled.div`
  a {
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
  margin-bottom: 30px;
`;
const Bg = styled.div`
  height: 450px;
  background: url(${IMG_URL}/w500/${(prop) => prop.$bgUrl}) no-repeat center /
    cover;
  margin-bottom: 20px;
  border-radius: 15px;
`;
const MovieTitle = styled.div``;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    // console.log(data);
    const { search: keyword } = data;
    // console.log("검색결과: " + search);

    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);
  return (
    <div>
      <Title>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", { required: "검색 내용을 입력해주세요" })}
          type="text"
          placeholder="영화제목을 검색해보세요"
        />
      </Form>
      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <Bg $bgUrl={data.poster_path} />
                  <MovieTitle>{data.title}</MovieTitle>
                </Link>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </div>
  );
};

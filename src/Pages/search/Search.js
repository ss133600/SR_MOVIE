import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom/dist";

const Title = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
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
  }
`;
const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(prop) => prop.$bgUrl}) no-repeat center /
    cover;
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
      <Title style={{ marginTop: "200px" }}>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", { required: "검색 내용을 입력해주세요" })}
          type="text"
          placeholder="검색내용"
        />
      </Form>
      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <Bg $bgUrl={data.backdrop_path} />
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

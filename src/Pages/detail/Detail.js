import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";

const PosterPath = styled.div``;
const Title = styled.div``;
const OriginalTitle = styled.div``;
const VoteAverage = styled.div``;
const VoteCount = styled.div``;
const ReleaseData = styled.div``;
const OverView = styled.div``;

export const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        console.log(data);
      } catch (error) {
        console.log("Error:" + error);
      }
    })();
  }, []);

  return (
    <div>
      <PosterPath></PosterPath>
      <Title></Title>
      <OriginalTitle></OriginalTitle>
      <VoteAverage></VoteAverage>
      <VoteCount></VoteCount>
      <ReleaseData></ReleaseData>
      <OverView></OverView>
    </div>
  );
};

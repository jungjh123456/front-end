import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import CommonButton from '../../atoms/atoms-reservation/atoms-modal/CommonButton';
import CommonTitle from '../../atoms/atoms-reserveconfirm/CommonTitle';
import StarRatingReviewModa from '../../molecules/molecules-reserveConfirm/StarRatingReviewModa';
// import { useClickOutside } from '../../../../lib/useClickOutside';
import MovePageButton from '../../atoms/atoms-reservation/atoms-modal/MovePageButton';

const ani = keyframes`
0% {
  opacity: 0;
  transform: translateY(100%);
}

100% {
  opacity: 1;
}
`;

const Container = styled.div`
  position: relative;
  width: 30%;
  min-height: 70%;
  background-color: #fff;
  padding: 64px 24px 40px;
  border-radius: 12px;
  z-index: 2;

  ${(props) => {
    return (
      props.disappear &&
      css`
        animation: ${ani} 0.2s ease-in alternate forwards;
      `
    );
  }}
`;

const MainContainer = styled.div`
  margin: 30px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ReviewFirstpageOrganism({
  reviewName,
  reviewModalState,
  cancelModalButton,
  hostName,
  moveNextComponent,
  changeStarRating,
  rating,
}) {
  const {
    cleanliness,
    accuracy,
    communication,
    locationRate,
    checkIn,
    priceSatisfaction,
  } = rating;

  return (
    <Container disappear={reviewModalState}>
      {/* header */}
      <CommonButton reviewClose roomInfo cancelModalButton={cancelModalButton}>
        <BiArrowBack />
      </CommonButton>
      <CommonTitle>호스트 {hostName}님의 숙소를 평가해주세요.</CommonTitle>

      {/* main */}
      <MainContainer>
        <StarRatingReviewModa
          children={reviewName.cleanliness}
          name="cleanliness"
          changeStarRating={changeStarRating}
          rating={cleanliness}
        />
        <StarRatingReviewModa
          children={reviewName.accuracy}
          name="accuracy"
          changeStarRating={changeStarRating}
          rating={accuracy}
        />
        <StarRatingReviewModa
          children={reviewName.communication}
          name="communication"
          changeStarRating={changeStarRating}
          rating={communication}
        />
        <StarRatingReviewModa
          children={reviewName.locationRate}
          name="locationRate"
          changeStarRating={changeStarRating}
          rating={locationRate}
        />
        <StarRatingReviewModa
          children={reviewName.checkIn}
          name="checkIn"
          changeStarRating={changeStarRating}
          rating={checkIn}
        />
        <StarRatingReviewModa
          children={reviewName.priceSatisfaction}
          name="priceSatisfaction"
          changeStarRating={changeStarRating}
          rating={priceSatisfaction}
        />
      </MainContainer>

      {/* footer(next page) */}
      <FooterContainer>
        <MovePageButton
          name="star"
          reviewNext
          moveNextComponent={moveNextComponent}
          disabled={
            !(
              cleanliness &&
              accuracy &&
              communication &&
              locationRate &&
              checkIn &&
              priceSatisfaction
            )
          }
        >
          다음
        </MovePageButton>
      </FooterContainer>
    </Container>
  );
}

export default ReviewFirstpageOrganism;

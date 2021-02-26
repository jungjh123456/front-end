import React from 'react';
import styled from 'styled-components';
import Grade from '../../atoms/atoms-detail/Grade';
import WhiteBtn from '../../atoms/atoms-detail/WhiteBtn';
import ReviewItem from '../../molecules/molecules-detail/ReviewItem';
import ScoreAverage from '../../molecules/molecules-detail/ScoreAverage';
import { TypeTitle } from '../../molecules/molecules-detail/TypeInfo';
import '../../atoms/atoms-detail/DetailBasicStyle.css';

const ReveiwSectionWrapper = styled.div`
  /* padding: 0 80px; */
`;

const ReviewContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1128px;
`;

const ReviewTitle = styled(TypeTitle)`
  margin: 0;
  padding-bottom: 32px;
  font-size: 22px;
`;

const ReviewItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Review = ({
  reviewRef,
  showReviewModal,
  setShowReviewModal,
  infoRes,
  detailObj,
}) => {
  return (
    <ReveiwSectionWrapper ref={reviewRef}>
      <ReviewContainer className="basic-section-padding">
        <ReviewTitle>
          <Grade grade={infoRes.grade} reviewMain /> 점 (후기{' '}
          {infoRes.commentCount}
          개){' '}
        </ReviewTitle>
        <ScoreAverage infoRes={infoRes} detailObj={detailObj} />
        <ReviewItemBox>
          {infoRes.commentList.map((comment, index) => (
            <ReviewItem
              name={comment.userName}
              date={comment.date}
              content={comment.description}
              userImgUrl={comment.userImgUrl}
              key={index}
            />
          ))}
        </ReviewItemBox>
        <WhiteBtn
          isShowReviewButton={true}
          text="후기 모두 보기"
          setShowReviewModal={setShowReviewModal}
        />
      </ReviewContainer>
    </ReveiwSectionWrapper>
  );
};

export default Review;

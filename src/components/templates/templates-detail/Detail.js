import React from 'react';
import styled, { css } from 'styled-components';
import theme from './theme';
//import { useMediaQuery } from 'react-responsive';
import ImageFrame from '../../UI/organisms/organisms-detail/ImageFrame';
//import DetailInfoContainer from '../../UI/organisms/organisms-detail/DetailInfoContainer';
import { PageTitle } from '../../UI/molecules/molecules-detail/PageTitle';
// import { Slider } from '../../UI/organisms/organisms-detail/Carousel';
import ImportantNotice from '../../UI/organisms/organisms-detail/ImportantNotice';
import Review from '../../UI/organisms/organisms-detail/Review';
import WrappingContainer from '../../UI/organisms/organisms-detail/WrappingContainer';
import Modal from '../../../portal/Modal';
import { useSelector } from 'react-redux';
import LoadingModal from '../LoadingModal';
import ReviewContainer from '../../../containers/ReviewContainer';

const DetailContainer = styled.div`
  padding: 80px 80px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(34, 34, 34);
  margin: 0 auto;
  max-width: 1280px;
`;

const Detail = ({
  showModal,
  setShowModal,
  current,
  setCurrent,
  DetailHeaderRef,
  ImageContainerRef,
  reviewRef,
  facilityRef,
  moveToReserve,
  isLoading,
  detailObj,
  roomImgUrlList,
}) => {
  return (
    <>
      <DetailContainer theme={theme}>
        <PageTitle />
        <ImageFrame
          setShowModal={setShowModal}
          current={current}
          setCurrent={setCurrent}
          ImageContainerRef={ImageContainerRef}
          roomImgUrlList={roomImgUrlList}
        />
        <WrappingContainer
          DetailHeaderRef={DetailHeaderRef}
          facilityRef={facilityRef}
          moveToReserve={moveToReserve}
          detailObj={detailObj}
        />
        {isLoading && <LoadingModal />}
        {/* <SavedListsModal /> */}
      </DetailContainer>
      <ReviewContainer reviewRef={reviewRef} />
      <ImportantNotice />
      {/* <Slider /> */}
    </>
  );
};

export default Detail;

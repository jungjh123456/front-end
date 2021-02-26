import React from 'react';
import styled from 'styled-components';
import HostingData from '../../molecules/molecules-detail/HostingData';
import { TypeInfo } from '../../molecules/molecules-detail/TypeInfo';
import { TextSummary } from '../../molecules/molecules-detail/TextSummary';
import EmoticonNotice from './EmoticonNotice';
import BookingInfo from './BookingInfo';
import RoomDescription from '../../molecules/molecules-detail/RoomDescription';

const InfoContainer = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const DetailInfo = styled.div`
  position: relative;
  width: 58.3%;
  margin: 0 auto;
`;

const BookingSummaryBox = styled.div`
  position: relative;
  width: 33.3%;
  margin-left: 8.3%;
`;

const WrappingContainer = ({
  DetailHeaderRef,
  facilityRef,
  moveToReserve,
  infoRes,
  detailObj,
  CancellableDate,
  modal,
  setModal,
  setIsOpen,
  formState,
  setFormState,
  bookingInfoRef,
  GuestModalRef,
  isCalendarOpen,
  setIsCalendarOpen,
  isGuestOpen,
  setIsGuestOpen,
  peopleLimit,
}) => {
  return (
    <InfoContainer>
      <DetailInfo>
        <HostingData detailObj={detailObj} infoRes={infoRes} />
        <TextSummary detailObj={detailObj} CancellableDate={CancellableDate} />
        <RoomDescription infoRes={infoRes} />
        <TypeInfo infoRes={infoRes} />
        <EmoticonNotice facilityRef={facilityRef} />
      </DetailInfo>
      <BookingSummaryBox>
        <BookingInfo
          DetailHeaderRef={DetailHeaderRef}
          moveToReserve={moveToReserve}
          detailObj={detailObj}
          infoRes={infoRes}
          modal={modal}
          setModal={setModal}
          setIsOpen={setIsOpen}
          formState={formState}
          setFormState={setFormState}
          bookingInfoRef={bookingInfoRef}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          GuestModalRef={GuestModalRef}
          isGuestOpen={isGuestOpen}
          setIsGuestOpen={setIsGuestOpen}
          peopleLimit={peopleLimit}
        />
      </BookingSummaryBox>
    </InfoContainer>
  );
};

export default WrappingContainer;

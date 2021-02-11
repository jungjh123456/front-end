import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../components/templates/templates-reservation/Reservation';
import { clientMessageChange, reserving } from '../modules/reserve';
import { initialDate } from '../modules/reserve';
import { dateInput } from '../modules/search';

const ReservationContainer = () => {
  // store 에서 관리하는 state
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const {
    roomId,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    checkDateSearch: checkDate,
  } = useSelector((state) => state.reserve);
  const { checkDateSearch } = useSelector(({ search }) => search.searchReq);

  const { startDate: checkIn, endDate: checkOut } = checkDateSearch;

  const { startDate, endDate } = checkDate;

  // const [visible, setVisible] = useState({
  //   state: false,
  //   type: null,
  // }); // type에 따라 modal이 열리는 상태

  // const showModal = (type) => {
  //   setVisible({ ...visible, state: true, type });
  // };

  // const hiddleModal = ({ target }) => {
  //   if (target.dataset.name) {
  //     setVisible({ ...visible, state: false });
  //   }
  // };

  // console.log(visible);

  const [dateModal, setDateModal] = useState(false);
  const [guestModal, setGuestModal] = useState(false);

  const manageDateModal = () => {
    setDateModal(!dateModal);
  };

  const manageGuestModal = () => {
    setGuestModal(!guestModal);
  };

  // textArea state 관리하는 event function
  const change = (e) => {
    const value = e.target.value;

    dispatch(clientMessageChange(value));
  };

  // 확인 button 클릭해서 예약하기 event function
  const click = () => {
    dispatch(
      reserving(
        roomId,
        checkIn,
        checkOut,
        guestNumber,
        infantNumber,
        totalCost,
        message,
        token,
      ),
    );
  };

  const saveDate = () => {
    setDateModal(!dateModal);
    dispatch(dateInput('startDate', startDate)); // 시작일만 선택시 시작일 dispatch
    dispatch(dateInput('endDate', endDate)); // 시작일만 선택시 시작일 dispatch
  };

  // const deleteDate = () => {
  //   dispatch(initialDate());
  // };

  return (
    <Reservation
      change={change}
      click={click}
      value={message}
      dateModal={dateModal}
      manageDateModal={manageDateModal}
      guestModal={guestModal}
      manageGuestModal={manageGuestModal}
      setGuestModal={setGuestModal}
      checkDateSearch={checkDateSearch}
      checkDate={checkDate}
      saveDate={saveDate}
    />
  );
};

export default ReservationContainer;

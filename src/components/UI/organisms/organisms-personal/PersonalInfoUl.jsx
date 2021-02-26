import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PersonalInfoLi from '../../molecules/molecules-personalInfo/PersonalInfoLi';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import PersonalNameInput from '../../molecules/molecules-personalInfo/PersonalNameInput';
// import PersonalInfoGenderSelect from '../../molecules/molecules-personalInfo/PersonalInfoGenderSelect';
import PersonalInfoBirthinput from '../../molecules/molecules-personalInfo/PersonalInfoBirthinput';
import PersonalInfoEmailInput from '../../molecules/molecules-personalInfo/PersonalInfoEmailInput';
import PersonalInfoImg from '../../molecules/molecules-personalInfo/PersonalInfoImg';
import { extractMonthDate } from '../../../../lib/extractMonthDate';
import Modal from '../../../../portal/Modal';
import PersonInfoEmailModal from '../../molecules/molecules-personalInfo/PersonInfoEmailModal';
import NoEmailModal from '../../molecules/molecules-personalInfo/NoEmailModal';

const PersonalInfoUIStyle = styled.ul`
  display: flex;
  flex-grow: 2;
  /* max-width: 500px; */
  /* min-width: 500px; */
  flex-direction: column;
  padding: 0;
  margin: 10px 20px 0 20px;
  li {
    div {
      /* border: 1px solid; */
    }
    .imgPerson {
      width: 320px;
      /* height: 20%; */

      img {
        width: 100%;
      }
    }
    .btn {
      position: absolute;
      top: 0;
      right: 0;
      &:focus {
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      }
      &:disabled {
        background: none;
        color: rgba(0, 0, 0, 0.3);
        cursor: not-allowed;
      }
      &:disabled:hover {
        text-decoration: none;
      }
    }
  }
`;

const PersonalInfoUl = ({
  fix,
  fixInfoBtn,
  cancelclick,
  personInfoChange,
  name,
  email,
  birth,
  imageUrl,
  inputFocus,
  ChangeInputBtn,
  userInfo,
  setFix,
  loading,
  emailCheck,
  personInfoEmailSubmit,
  emailOk,
  personInfoEmailSubmitKeypress,
  cancelModalEmail,
  nameRef,
  KeyDown,
}) => {
  // const [emailOk, setEmailOk] = useState(false);

  const [imageImg, setImageImg] = useState();

  useEffect(() => {
    setImageImg(imageUrl);
  }, [imageImg, imageUrl]);
  console.log(imageImg);

  return (
    <PersonalInfoUIStyle onClick={fix.cancel ? cancelclick : fixInfoBtn}>
      <PersonalInfoLi>
        <div>
          <TextStyle>실명</TextStyle>
          {fix.name ? (
            <PersonalNameInput
              name={name}
              fix={fix}
              personInfoChange={personInfoChange}
              inputFocus={inputFocus}
              ChangeInputBtn={ChangeInputBtn}
              loading={loading}
              nameRef={nameRef}
              KeyDown={KeyDown}
            />
          ) : (
            <TextStyle>{name}</TextStyle>
          )}
        </div>
        <Button
          name="name"
          className="btn"
          greenText
          tabIndex="0"
          disabled={!!fix.img || !!fix.birth || !!fix.emailAddress}
        >
          {!fix.name ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div className="gender">
          <TextStyle>이미지</TextStyle>
          {fix.img ? (
            <PersonalInfoImg
              name={name}
              email={email}
              birth={birth}
              setFix={setFix}
              personInfoChange={personInfoChange}
              imageUrl={imageUrl}
              loading={loading}
              fix={fix}
            />
          ) : (
            <>
              {imageUrl ? (
                <div className="imgPerson">
                  <img src={imageImg} alt="hello" />
                </div>
              ) : (
                <TextStyle>지정되지 않음</TextStyle>
              )}
            </>
          )}
        </div>
        <Button
          name="imageUrl"
          className="btn"
          disabled={!!fix.name || !!fix.birth || !!fix.emailAddress}
          greenText
        >
          {!fix.img ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>생년월일</TextStyle>
          <TextStyle>
            {birth
              ? extractMonthDate(userInfo.birth)?.year &&
                extractMonthDate(userInfo.birth)?.month &&
                extractMonthDate(userInfo.birth)?.date
                ? `${
                    extractMonthDate(userInfo.birth)?.year &&
                    extractMonthDate(userInfo.birth)?.year
                  }년 ${
                    extractMonthDate(userInfo.birth)?.month &&
                    extractMonthDate(userInfo.birth)?.month
                  }월 ${
                    extractMonthDate(userInfo.birth)?.date &&
                    extractMonthDate(userInfo.birth)?.date
                  }일`
                : '지정되지 않음'
              : '지정되지 않음'}
          </TextStyle>
          {fix.birth && (
            <PersonalInfoBirthinput
              ChangeInputBtn={ChangeInputBtn}
              personInfoChange={personInfoChange}
              birth={birth}
              loading={loading}
              fix={fix}
            />
          )}
        </div>
        <Button
          name="birth"
          className="btn"
          disabled={!!fix.img || !!fix.name || !!fix.emailAddress}
          greenText
        >
          {!fix.birth ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>이메일 주소</TextStyle>
          {fix.emailAddress ? (
            <PersonalInfoEmailInput
              name={name}
              email={email}
              birth={birth}
              imageUrl={imageUrl}
              personInfoChange={personInfoChange}
              ChangeInputBtn={ChangeInputBtn}
              loading={loading}
              emailCheck={emailCheck}
              fix={fix}
            />
          ) : (
            <TextStyle>{email}</TextStyle>
          )}
          {(emailOk || loading['user/CHANGE_INPUT_USER_EMAIL_SUBMIT']) && (
            <Modal>
              <NoEmailModal
                emailCheck={emailCheck}
                loading={loading}
                email={email}
                ChangeInputBtn={ChangeInputBtn}
                personInfoChange={personInfoChange}
                personInfoEmailSubmit={personInfoEmailSubmit}
                emailOk={emailOk}
                personInfoEmailSubmitKeypress={personInfoEmailSubmitKeypress}
                cancelModalEmail={cancelModalEmail}
              ></NoEmailModal>
            </Modal>
          )}
        </div>
        <Button
          name="emailAddress"
          disabled={!!fix.img || !!fix.birth || !!fix.name}
          className="btn"
          greenText
        >
          {!fix.emailAddress ? '수정' : '취소'}
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>전화번호</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button
          className="btn"
          disabled={
            !!fix.img || !!fix.birth || !!fix.name || !!fix.emailAddress
          }
          greenText
        >
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>정부 발급 신분증</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button
          className="btn"
          disabled={
            !!fix.img || !!fix.birth || !!fix.name || !!fix.emailAddress
          }
          greenText
        >
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>주소</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button
          disabled={
            !!fix.img || !!fix.birth || !!fix.name || !!fix.emailAddress
          }
          className="btn"
          greenText
        >
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>비상 연락처</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button
          disabled={
            !!fix.img || !!fix.birth || !!fix.name || !!fix.emailAddress
          }
          className="btn"
          greenText
        >
          추가
        </Button>
      </PersonalInfoLi>
      <PersonalInfoLi>
        <div>
          <TextStyle>중국 여행에 필요한 여권 정보</TextStyle>
          <TextStyle>제공되지 않음</TextStyle>
        </div>
        <Button
          disabled={
            !!fix.img || !!fix.birth || !!fix.name || !!fix.emailAddress
          }
          className="btn"
          greenText
        >
          추가
        </Button>
      </PersonalInfoLi>
    </PersonalInfoUIStyle>
  );
};

export default PersonalInfoUl;

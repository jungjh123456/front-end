import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MIN_TEXTAREA_HEIGHT = 1;

const StyledTextarea = styled.textarea`
  resize: none;
  min-height: ${MIN_TEXTAREA_HEIGHT};
  width: 100%;
  outline: none;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #ddd;
  // IE and Edge
  -ms-overflow-style: none;

  // Firefox
  scrollbar-width: none;

  // Chrome, Safari, Opera
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AdjustHeightTeatarea = ({ wirteReview, description }) => {
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    textareaRef.current.style.height = 'inherit';
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT,
    )}px`;
  }, [description]);

  return (
    <StyledTextarea
      onChange={wirteReview}
      ref={textareaRef}
      value={description}
      rows="1"
      spellCheck="false"
    ></StyledTextarea>
  );
};

export default AdjustHeightTeatarea;

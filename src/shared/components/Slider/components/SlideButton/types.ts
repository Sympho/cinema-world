export type typeBtn = 'prev' | 'next';

export type SlideButtonProps = {
  onClick: () => void;
  type: typeBtn;
};

export type StyledBtnProps = {
  typeBtn?: typeBtn;
};

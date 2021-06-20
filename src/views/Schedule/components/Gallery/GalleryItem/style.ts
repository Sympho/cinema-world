import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  padding: 50px 30px;
  margin-bottom: 10px;
  min-height: 277px;
  background-color: #4b4b5d;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const Title = styled.span`
  color: #3cb4e7;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const RightSubContent = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Day = styled.span`
  margin: 10px 0;
  //color: #252525;
`;

export const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  max-width: 140px;
  min-width: 120px;
  text-transform: uppercase;
`;

export const Technology = styled.span`
  margin: 5px 12px;
  //color: #252525;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 30px;
  max-width: 340px;
  width: 100%;
`;

export const Time = styled.span`
  cursor: pointer;
  color: #000;
  background-color: #3cb4e7;
  border: 1px solid #3cb4e7;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 28px;
  margin: 5px 12px;
  border-radius: 2px;
  text-align: center;
  font-size: 14px;
  //color: #252525;
`;

export const Img = styled.div`
  max-width: 240px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #3cb4e7;
`;

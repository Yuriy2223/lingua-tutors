import styled from 'styled-components';
import { Container } from '../../components/Common/Container';

export const TeachersPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 20px 120px 96px;
  gap: 32px;
  /* background-color: ${({ theme }) => theme.primaryColorDark};  */
`;
export const FilterContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const FilterLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FilterLabel = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
  padding-left: 10px;
`;
export const FilterSelect = styled.select`
  padding: 10px;
  border-radius: 14px;
  border: none;
  outline: none;
  width: 220px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${({ theme }) => theme.primaryText};
  background: #f8f8f8;
`;
export const TeachersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TeacherItem = styled.li`
  border-radius: 24px;
  padding: 24px;
  width: 1184px;
  height: 328px;
  background: #fff;
`;
export const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const LoadMoreButton = styled.button`
  border-radius: 12px;
  padding: 10px 34px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.56;
  border: none;
  color: ${({ theme }) => theme.primaryBlack};
  background-color: ${({ theme }) => theme.primaryColorLight};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;

export const NoTeachersMessage = styled.p`
  max-width: 600px;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColorDark};
  text-align: center;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primaryColorLight};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 80px auto
`;

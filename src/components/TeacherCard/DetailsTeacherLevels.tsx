import React from 'react';
import styled from 'styled-components';

const TeacherLanguageLevel = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  li {
    white-space: nowrap;
    border-radius: 35px;
    padding: 8px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    border: 1px solid rgba(18, 20, 23, 0.2);
    color: ${({ theme }) => theme.primaryBlack};
    background-color: transparent;
    transition: all 300ms ease;

    &.active {
      background-color: ${({ theme }) => theme.primaryColorDark};
      border-color: ${({ theme }) => theme.primaryColorDark};
    }
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

interface TeacherLevelsProps {
  levels: string[];
  levelFilter: string;
}

export const DetailsTeacherLevels: React.FC<TeacherLevelsProps> = ({
  levels,
  levelFilter,
}) => {
  return (
    <TeacherLanguageLevel>
      {levels.map((level, index) => (
        <li
          key={index}
          className={
            level.toLowerCase() === levelFilter.toLowerCase() ? 'active' : ''
          }
        >
          # {level}
        </li>
      ))}
    </TeacherLanguageLevel>
  );
};

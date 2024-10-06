import React from 'react';
import styled from 'styled-components';

const DetailsTeacherInfo = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  width: 100%;
`;
const DetailsTeacherSpeaks = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;
const DetailsInfo = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;

  @media (max-width: 425px) {
    display: none;
  }
`;
const TeacherInfoSpeaks = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #121417;
  margin-left: 5px;
`;
const TeacherInfoSpan = styled.span`
  color: #121417;
  margin-left: 5px;
`;

interface TeacherDetailsInfoProps {
  languages: string[];
  lessonInfo: string;
  conditions: string[];
}

export const DetailsInfoTeacher: React.FC<TeacherDetailsInfoProps> = ({
  languages,
  lessonInfo,
  conditions,
}) => {
  return (
    <DetailsTeacherInfo>
      <DetailsTeacherSpeaks>
        Speaks:
        <TeacherInfoSpeaks>{languages.join(', ')}</TeacherInfoSpeaks>
      </DetailsTeacherSpeaks>
      <DetailsInfo>
        Lesson Info:<TeacherInfoSpan>{lessonInfo}</TeacherInfoSpan>
      </DetailsInfo>
      <DetailsInfo>
        Conditions:<TeacherInfoSpan>{conditions.join(', ')}</TeacherInfoSpan>
      </DetailsInfo>
    </DetailsTeacherInfo>
  );
};

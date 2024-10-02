import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase';
import { ref, get } from 'firebase/database';
import { useAuth } from '../../services/authContext';
import {
  FilterContainer,
  FilterLabel,
  FilterLi,
  FilterSelect,
  LoadMoreButton,
  LoadMoreButtonContainer,
  TeachersList,
  TeachersPageContainer,
  NoTeachersMessage,
} from './TeachersPage.styled';
const TeacherCard = React.lazy(() =>
  import('../../components/TeacherCard/TeacherCard').then(module => ({
    default: module.TeacherCard,
  }))
);

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

export const TeachersPage: React.FC = () => {
  const { user } = useAuth();
  const [languageFilter, setLanguageFilter] = useState<string>('');
  const [levelFilter, setLevelFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [teachersData, setTeachersData] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersRef = ref(db, 'teachers');
      const snapshot = await get(teachersRef);
      const data = snapshot.val();
      const teachersList: Teacher[] = data ? Object.values(data) : [];
      setTeachersData(teachersList);
    };

    const fetchFavorites = async () => {
      if (user) {
        const favoritesRef = ref(db, `users/${user.uid}/favorites`);
        const snapshot = await get(favoritesRef);
        const data = snapshot.val();
        setFavorites(data ? Object.keys(data) : []);
      }
    };

    fetchTeachers();
    fetchFavorites();
  }, [user]);

  const filteredTeachers = teachersData.filter(teacher => {
    const languageMatch =
      !languageFilter || teacher.languages.includes(languageFilter);
    const levelMatch = !levelFilter || teacher.levels.includes(levelFilter);
    const priceMatch =
      !priceFilter || teacher.price_per_hour === Number(priceFilter);

    return languageMatch && levelMatch && priceMatch;
  });

  const handleLoadMore = () => {
    setPageIndex(prevIndex => prevIndex + 1);
  };

  const startIndex = pageIndex * 4;
  const visibleTeachers = filteredTeachers.slice(startIndex, startIndex + 4);

  const handleToggleFavorite = (teacherId: string, isFavorite: boolean) => {
    if (isFavorite) {
      setFavorites(prev => prev.filter(id => id !== teacherId));
    } else {
      setFavorites(prev => [...prev, teacherId]);
    }
  };

  return (
    <TeachersPageContainer>
      <FilterContainer>
        <FilterLi>
          <FilterLabel>Languages</FilterLabel>
          <FilterSelect
            id="language"
            value={languageFilter}
            onChange={e => setLanguageFilter(e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Polish">Polish</option>
            <option value="Italian">Italian</option>
            <option value="Korean">Korean</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Mandarin Chinese">Mandarin Chinese</option>
          </FilterSelect>
        </FilterLi>
        <FilterLi>
          <FilterLabel>Level of knowledge</FilterLabel>
          <FilterSelect
            id="level"
            value={levelFilter}
            onChange={e => setLevelFilter(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="A1 Beginner">A1 Beginner</option>
            <option value="A2 Elementary">A2 Elementary</option>
            <option value="B1 Intermediate">B1 Intermediate</option>
            <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            <option value="C1 Advanced">C1 Advanced</option>
            <option value="C2 Proficient">C2 Proficient</option>
          </FilterSelect>
        </FilterLi>
        <FilterLi>
          <FilterLabel>Price</FilterLabel>
          <FilterSelect
            id="price"
            value={priceFilter}
            onChange={e => setPriceFilter(e.target.value)}
          >
            <option value="">Select Price</option>
            <option value="10">10 $</option>
            <option value="20">20 $</option>
            <option value="30">30 $</option>
            <option value="40">40 $</option>
            <option value="50">50 $</option>
            <option value="60">60 $</option>
            <option value="70">70 $</option>
          </FilterSelect>
        </FilterLi>
      </FilterContainer>

      <TeachersList>
        {visibleTeachers.length > 0 ? (
          visibleTeachers.map(teacher => {
            const isFavorite = favorites.includes(teacher.id);
            return (
              <li key={teacher.id}>
                <TeacherCard
                  teacher={teacher}
                  levelFilter={levelFilter}
                  onToggleFavorite={() =>
                    handleToggleFavorite(teacher.id, isFavorite)
                  }
                  isFavorite={isFavorite}
                />
              </li>
            );
          })
        ) : (
          <NoTeachersMessage>
            No teachers found matching your filters.
          </NoTeachersMessage>
        )}
      </TeachersList>

      {startIndex + 4 < filteredTeachers.length && (
        <LoadMoreButtonContainer>
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        </LoadMoreButtonContainer>
      )}
    </TeachersPageContainer>
  );
};

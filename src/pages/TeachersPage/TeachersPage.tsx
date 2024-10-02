import React, { useState, useEffect } from 'react';
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
// import { teachersData } from '../../components/TeacherCard/teachersData';
import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
import { toast } from 'react-toastify';
import { useAuth } from '../../services/authContext';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore'; //** */

export const TeachersPage: React.FC = () => {
  const { user } = useAuth();
  const [languageFilter, setLanguageFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [pageIndex, setPageIndex] = useState(0);

  interface Teacher {
    id: string;
    name: string;
    surname: string;
    languages: string[];
    levels: string[];
    rating: number;
    reviews: {
      reviewer_name: string;
      reviewer_rating: number;
      comment: string;
    }[];
    price_per_hour: number;
    lessons_done: number;
    avatar_url: string;
    lesson_info: string;
    conditions: string[];
    experience: string;
  }

  const [teachersData, setTeachersData] = useState<Teacher[]>([]);

  const [favoriteTeachers, setFavoriteTeachers] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favoriteTeachers');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersCollection = collection(db, 'teachers');
        const teacherSnapshot = await getDocs(teachersCollection);
        const teachersList = teacherSnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Teacher, 'id'>),
        })) as Teacher[];
        setTeachersData(teachersList);
      } catch (error) {
        console.error('Error fetching teachers: ', error);
        toast.error('Error fetching teachers.');
      }
    };

    fetchTeachers();
  }, []);

  const filteredTeachers = teachersData.filter(teacher => {
    const languageMatch =
      !languageFilter || teacher.languages.includes(languageFilter);
    const levelMatch = !levelFilter || teacher.levels.includes(levelFilter);
    const priceMatch =
      !priceFilter ||
      (teacher.price_per_hour >= Number(priceFilter) - 5 &&
        teacher.price_per_hour <= Number(priceFilter) + 5);

    return languageMatch && levelMatch && priceMatch;
  });

  const handleToggleFavorite = async (teacherName: string) => {
    if (!user) {
      toast.info('This functionality is only available to authorized users.');
      return;
    }

    setFavoriteTeachers(prev => {
      const isFavorite = prev.includes(teacherName);
      const updatedFavorites = isFavorite
        ? prev.filter(name => name !== teacherName)
        : [...prev, teacherName];

      if (user) {
        const favoritesRef = doc(db, 'users', user.uid);
        setDoc(favoritesRef, { favorites: updatedFavorites }, { merge: true })
          .then(() => {
            toast.success(
              `Успішно ${isFavorite ? 'вилучено' : 'додано'} з улюблених!`
            );
          })
          .catch(error => {
            console.error('Error updating favorites: ', error);
            toast.error('Виникла помилка при збереженні.');
          });
      }

      return updatedFavorites;
    });
  };

  const handleLoadMore = () => {
    setPageIndex(prevIndex => prevIndex + 1);
  };

  const startIndex = pageIndex * 4;
  const visibleTeachers = filteredTeachers.slice(startIndex, startIndex + 4);

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
          visibleTeachers.map(teacher => (
            <li key={`${teacher.name}-${teacher.surname}`}>
              <TeacherCard
                teacher={teacher}
                levelFilter={levelFilter}
                onToggleFavorite={() => handleToggleFavorite(teacher.name)}
                isFavorite={favoriteTeachers.includes(teacher.name)}
              />
            </li>
          ))
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

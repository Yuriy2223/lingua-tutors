LearnLingo - Online Language Learning Platform

Description of the project

LearnLingo is a web application that allows users to find and interact with teachers offering online language learning services. Users can view the list of teachers, filter them by language, level of knowledge and price, as well as add their favorite teachers to the list of favorites. The application also supports the authorization functionality, which allows you to save your favorite teachers, book trial lessons, and much more.

Main pages:

- Home: contains company information and a call to action to get started.
- Teachers: a list of teachers with the possibility of filtering by language, level of knowledge and price per lesson.
- Favorites: a private page that displays teachers added by the user to favorites.

Basic technologies

- React: for building the user interface.
- TypeScript: for typing code.
- Styled-components: for creating styled components in React.
- Firebase Authentication: for user authorization (registration, login, logout).
- Firebase Realtime Database: to save the data of teachers and selected users.
- React Router: for routing between pages.
- react-hook-form and yup: for creating and validating forms.
- localStorage: for temporary storage of data about selected teachers.

Model

The project was created according to the layout, which provides for an adaptive design from 320px to 1440px. The layout includes a main page with a list of company benefits, a faculty page with filters, and a featured faculty page.

Technical task

1. Authorization:

- User can register or login using Firebase Authentication.
- After authorization, the user can add teachers to the favorites, book trial classes.

2. List of teachers:

- Teacher data is stored in Firebase Realtime Database.
- Users can filter teachers by language of instruction, level of knowledge of students and price per lesson.

3. Chosen:

- Users can add teachers to favorites by clicking on the heart-shaped button.
- All selected teachers are stored in `localStorage` or Firebase and after refreshing the page the information is saved.

4. Modal windows:

- Modal windows for registering and booking classes have field validation using `react-hook-form` and `yup`.
- Modal windows are closed when clicking on the backdrop, the cross or the `Esc' key.

Performance criteria

-  design 1440px.
- No errors in the browser console.
- The project must be deployed on GitHub Pages, Netlify or other hosting.
- The code is clean, formatted, without unnecessary comments.
- The repository must contain the `README.md` file.

Deploy

The project is deployed at the link: [LearnLingo](https://???????.com)

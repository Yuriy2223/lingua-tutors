 LearnLingo - Online Language Learning Platform

 Project Description

LearnLingo is a web application that allows users to find and interact with teachers offering online language learning services. Users can browse a list of teachers, filter them by language, skill level, and price, and add their favorite teachers to a favorites list. The application also supports authentication functionality, enabling users to save their favorite teachers, book trial lessons, and much more.

 Main Pages

- Home: contains information about the company and a call to action to get started.
- Teachers: a list of teachers with filtering options by teaching language, skill level, and price per lesson.
- Favorites: a private page displaying teachers that the user has added to favorites.

 Main Technologies

- React: for building the user interface.
- TypeScript: for type checking the code.
- Styled-components: for creating styled components in React.
- Firebase Authentication: for user authentication (registration, login, logout).
- Firebase Realtime Database: for storing teacher data and user favorites.
- React Router: for routing between pages.
- react-hook-form and yup: for creating and validating forms.

 Design Mockup

[Link to the design mockup](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%Dє%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0)

The project was created according to the mockup, which does not include responsive design (1440px). The mockup features a homepage with a list of the company's advantages, a teacher page with filters, and a favorites page for selected teachers.

 Technical Requirements

1. Authentication:
   - Users can register or log into the system using Firebase Authentication.
   - After authentication, users can add teachers to their favorites and book trial lessons.

2. Teacher List:
   - Teacher data is stored in Firebase Realtime Database.
   - Users can filter teachers by the teaching language, student skill level, and price per lesson.

3. Favorites:
   - Users can add teachers to their favorites by clicking a heart-shaped button.
   - All selected teachers are stored in Firebase, and the information is retained after refreshing the page.

4. Modal Windows:
   - Modal windows for registration and lesson booking have field validation using `react-hook-form` and `yup`.
   - Modal windows can be closed by clicking on the backdrop, the close button, or pressing the `Esc` key.

 Completion Criteria

- The design is set for 1440px.
- No errors in the browser console.
- The project should be deployed on GitHub Pages, Netlify, or another hosting service.
- Code is clean, formatted, and free of unnecessary comments.
- The repository must include a `README.md` file.

 Deployment

The project is deployed at the following link: [LearnLingo] (https://lingua-tutors.vercel.app/)

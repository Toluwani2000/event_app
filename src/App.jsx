import styles from "./style";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Navbar } from "./components";
import Home from "../pages/Home";
import EventsPage from "../pages/Events";
// import { navLinks } from './constants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="events" element={<EventsPage />} />]
    </Route>
  )
);
// const App = () => (
// <div className="w-full overflow-hidden">
//   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//     <div className={`${styles.boxWidth}`}>
//       <Navbar />
//     </div>
//   </div>

//   <div className={`${styles.flexStart}`}>
//     <div className={`${styles.boxWidth}`}>
//       <Hero />
//     </div>
//   </div>

//   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//     <div className={`${styles.boxWidth}`}>
//       <Events />
//       <Footer />
//     </div>
//   </div>
// </div>
// );

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

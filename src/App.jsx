import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import CreateEvents from "./Pages/CreateEvents";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import EventDetails from "./Pages/EventDetails";
import Error from "./Components/Error";
import { UserProvider } from "./Context/userContext";
import ProtectedLayout from "./Layout/ProtectedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="event/:eventID" element={<EventDetails />} />
      <Route path="create" element={<ProtectedLayout />}>
        <Route index element={<CreateEvents />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="/*" element={<Error />} />
    </Route>
  )
);

const App = () => (
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

export default App;

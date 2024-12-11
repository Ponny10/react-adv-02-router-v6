import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyOne, LazyThree, LazyTwo } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      {/* TODO: Rutas hijas aquí */}
      <ul>
        <li>
            <NavLink to={'lazyOne'}>LazyOne</NavLink>
        </li>
        <li>
            <NavLink to={'lazyTwo'}>LazyTwo</NavLink>
        </li>
        <li>
            <NavLink to={'lazyThree'}>LazyThree</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazyOne" element={<LazyOne/>} />
        <Route path="lazyTwo" element={<LazyTwo/>} />
        <Route path="lazyThree" element={<LazyThree/>} />

        <Route path="*" element={<Navigate replace to={'lazyOne'} />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;

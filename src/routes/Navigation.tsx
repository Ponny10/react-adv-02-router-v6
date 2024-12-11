import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import logo from '../assets/react.svg';
import {LazyOne, LazyTwo, LazyThree} from '../lazy/pages/index';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/lazyOne"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								LazyOne
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazyTwo"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								LazyTwo
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazyThree"
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								LazyThree
							</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="lazyOne" element={<LazyOne />}/>
					<Route path="lazyTwo" element={<LazyTwo/>}/>
					<Route path="lazyThree" element={<LazyThree/>}/>

					<Route path="/*" element={<Navigate to={'/lazyOne'} replace />}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

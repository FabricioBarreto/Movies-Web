import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
    return (
        <Router>
            <header className={styles.header}>
                <Link to="/"> <h1 className={styles.title} >Movies</h1> </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </Router>
    );
}
import './home.scss'
import { useState, useEffect } from 'react'
import { useDataContext } from '../../context/dataContext'
import { Link } from 'react-router-dom'

export default function Home() {
    const { setEnv, userId, env } = useDataContext();
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        setEnv(isToggled ? "production" : "development");
    }, [isToggled, setEnv]);

    useEffect(() => {
        setIsToggled(env === "production");
    }, []);

    useEffect(() => {
        localStorage.setItem("env", JSON.stringify(env));
    }, [env]);

    return (
        <main className='home'>
            <div className="home_wrapper">
                <div className="home_wrapper--type">
                    <span>Développement</span>
                    <div className="checkbox">
                        <input type="checkbox" id='check' checked={isToggled} onChange={() => setIsToggled(!isToggled)} />
                        <label htmlFor="check" aria-label="Choisir l'environnement"></label>
                    </div>
                    <span>Production</span>
                </div>
                <div className="home_wrapper--link">
                    <Link to="/profile/12">Karl</Link>
                    <Link to="/profile/18">Cecilia</Link>
                </div>
                {!userId && <p className="home_wrapper_error">Veuillez choisir un utilisateur</p>}
            </div>
        </main>
    )
}

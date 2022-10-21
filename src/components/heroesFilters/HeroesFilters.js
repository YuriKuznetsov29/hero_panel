
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {heroesFilter, heroesFetched} from '../../actions';


const HeroesFilters = () => {
    const {heroes} = useSelector(state => state);
    const dispatch = useDispatch();
    const [memoryHeroes, setMemoryHeroes] = useState()


    const filterHeroes = (element) => {
        setMemoryHeroes(heroes);
        dispatch(heroesFilter(heroes, element));
    }

    const clearFilter = () => {
        console.log(memoryHeroes);
        dispatch(heroesFetched(memoryHeroes))
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active"
                         onClick={() => clearFilter()}
                    >
                        Все</button>
                    <button className="btn btn-danger"
                        onClick={() => filterHeroes('fire')}>
                    Огонь</button>
                    <button className="btn btn-primary"
                        onClick={() => filterHeroes('water')}>
                        Вода</button>
                    <button className="btn btn-success"
                        onClick={() => filterHeroes('wind')}>
                            Ветер</button>
                    <button className="btn btn-secondary"
                        onClick={() => filterHeroes('earth')}>
                        Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
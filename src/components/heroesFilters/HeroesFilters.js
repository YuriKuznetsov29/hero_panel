
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useDispatch, useSelector } from 'react-redux';
import {heroesFilter} from '../../actions';
import classNames from 'classnames/bind';
import { useHttp } from '../../hooks/http.hook';

const HeroesFilters = () => {
    const {filters} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const filterHeroes = (element) => {
        // request("http://localhost:3001/filters/", 'DELETE');
        request("http://localhost:3001/filters/", 'POST', JSON.stringify(element));
        dispatch(heroesFilter(element));
    }

    let btnActive = classNames('btn btn-outline-dark', {active: true});

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className={classNames('btn btn-outline-dark', {active: filters[0] === 'all'})}
                         onClick={() => filterHeroes(['all'])}>
                        Все</button>
                    <button className={classNames("btn btn-danger", {active: filters[0] === 'fire'})}
                        onClick={() => filterHeroes(['fire'])}>
                    Огонь</button>
                    <button className={classNames("btn btn-primary", {active: filters[0] === 'water'})}
                        onClick={() => filterHeroes(['water'])}>
                        Вода</button>
                    <button className={classNames("btn btn-success", {active: filters[0] === 'wind'})}
                        onClick={() => filterHeroes(['wind'])}>
                            Ветер</button>
                    <button className={classNames("btn btn-secondary", {active: filters[0] === 'earth'})}
                        onClick={() => filterHeroes(['earth'])}>
                        Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
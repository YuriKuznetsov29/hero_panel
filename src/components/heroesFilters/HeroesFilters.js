
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useDispatch, useSelector } from 'react-redux';
import {heroesFilter} from '../../actions';


const HeroesFilters = () => {
    const {heroes} = useSelector(state => state);
    const dispatch = useDispatch();

    const filterHeroes = (filterValue) => {
        // dispatch(heroesFilter(heroes, element))
        console.log(heroes.filter(({element}) => element === filterValue))
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active"
                        // onClick={filter()}
                    >
                        Все
                    </button>
                    <button className="btn btn-danger"
                        onClick={filterHeroes('fire')}
                    >Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroesFetching, heroesFetched, heroDeleting, heroAdding, heroesFetchingError } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const {heroes, heroesLoadingStatus, filters} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);

    const deleteHero = (id) => {
        request("http://localhost:3001/heroes/" + id, 'DELETE');
        dispatch(heroDeleting(heroes, id));
    };

    

    const addHero = (newHero) => {
        // dispatch(heroAdding(heroes, newHero));
        console.log(newHero)
    };

    

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr, filterValue) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }
        if (filterValue.length !== 0 && filterValue[0] !== 'all') {
            return arr.map(({id, element, ...props}) => {

                return filterValue[0] === element ? <HeroesListItem key={id} id={id} element={element} {...props} deleteHero={deleteHero}/> : null
                
            })
        }
        return arr.map(({id, ...props}) => {

            return <HeroesListItem key={id} id={id} {...props} deleteHero={deleteHero}/>
        })
    }


    const elements = renderHeroesList(heroes, filters);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;
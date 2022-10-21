export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroDeleting = (heroes, deleteId) => {
    
    return {
        type: 'HEROES_DELETING',
        payload: heroes.filter(({id}) => id !== deleteId)
        
    }
}

export const heroAdding = (heroes, newHero) => {
    
    return {
        type: 'HEROES_ADDING',
        payload: heroes.concat(newHero)
        
    }
}

export const heroesFilter = (filterValue) => {
    
    return {
        type: 'HEROES_FILTERING',
        payload: filterValue
        
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}
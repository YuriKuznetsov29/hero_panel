

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {heroAdding} from '../../actions';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const HeroesAddForm = () => {
    const {heroes} = useSelector(state => state);
    const dispatch = useDispatch();

    const createNewHero = (name, description, element) => {
        return (
            [{
                id: uuidv4(),
                name: name,
                description: description,
                element: element
            }]
        )
        
    }


    const addHero = (newHero) => {
        dispatch(heroAdding(heroes, newHero));
    };

    

    return (
        <div className="border p-4 shadow-lg rounded">
        <Formik
        initialValues = {{
            name: '',
            description: '',
            element: '',
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
            .required('This field is required')
        })}
        onSubmit = { ({name, description, element}) => {

            
            addHero(createNewHero(name, description, element))
            console.log(heroes)


        }}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field 
                        type="text"
                        id="name"
                        name="name" 
                        className="form-control" 
                        placeholder="Как меня зовут?"
                        />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label fs-4">Описание</label>
                    <Field
                        name="description"
                        id="description" 
                        type="textarea"
                        className="form-control" 
                        placeholder="Что я умею?"
                        style={{"height": '130px'}}
                        />
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field 
                        className="form-select" 
                        as="select" 
                        name="element"
                        id="element"
                        >
                        <option >Я владею элементом...</option>
                        <option value="fire">Огонь</option>
                        <option value="water">Вода</option>
                        <option value="wind">Ветер</option>
                        <option value="earth">Земля</option>
                    </Field>
                </div>

                <button type="submit" className="btn btn-primary">
                    Создать
                </button>
            </Form>
        </Formik>
        </div>
    )
}

export default HeroesAddForm;
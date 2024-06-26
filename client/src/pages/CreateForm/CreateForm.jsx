import React from 'react';
import './CreateForm.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postEvent } from '../../services/eventServices';
import { yupResolver } from '@hookform/resolvers/yup';
import { eventSchema } from '../../validations/eventValidation';



const CreateForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(eventSchema),
  });
    const navigate = useNavigate();
    
    
    const handleForm = async (data) =>{
      try{
        //Convertir campos númericos a números decimales
        data.price = parseFloat(data.price)
        data.private_tasting_supplement = parseFloat(data.private_tasting_supplement)
        data.iberian_supplement = parseFloat(data.iberian_supplement)

        
        const response = await postEvent(data)
        console.log(response)
        alert("Evento creado correctamente")
        navigate("/") 
      }
      catch(error){
        console.error("Error al crear el evento")
      }
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="createFormContainer">
      <h2 className="createFormTitle">FORMULARIO DE CREACIÓN DE CATAS</h2>
      <form className="formCreate" onSubmit={handleSubmit(handleForm)}>
          <div>
            <label htmlFor="id_location">Localización</label>
            <select id="id_location" name="id_location" {...register('id_location')}>
              <option value="">Selecciona la localización</option>
              <option value="1">Calle Silvela</option>
              <option value="2">Ríos Rosas</option>
              <option value="3">Boadilla</option>
              <option value="4">Zaragoza</option>
              <option value="5">Palma</option>
            </select>
            <p className="error-message">{errors.id_location && <span>{errors.id_location.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="name">Nombre de la cata</label>
            <input type="text" id="name" name="name" {...register('name')}/>
            <p className="error-message">{errors.name && <span>{errors.name.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="image">Añadir imagen de la cata</label>
            <input type="url" id="image" name="image" {...register('image')}/>
            <p className="error-message">{errors.image && <span>{errors.image.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" name="description" {...register('description')}/>
            <p className="error-message">{errors.description && <span>{errors.description.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="cata_type">Tipo de cata</label>
            <select id="cata_type" name="cata_type" {...register('cata_type')}>
              <option value="">Selecciona un tipo de cata</option>
              <option value="vino">Vino</option>
              <option value="cerveza">Cerveza</option>
              <option value="cava">Cava</option>
              <option value="gin">Gin</option>
              <option value="whisky">Whisky</option>
              <option value="ron">Ron</option>
              <option value="tequila">Tequila</option>
              <option value="brandy">Brandy</option>
              <option value="cognac">Cognac</option>
              </select>
            <p className="error-message">{errors.cata_type && <span>{errors.cata_type.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="products">Productos a catar</label>
            <input type="text" id="products" name="products" {...register('products')}/>
            <p className="error-message">{errors.products && <span>{errors.products.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="price">Precio por persona</label>
            <input type="number" id="price" name="price" {...register('price')}/>
            <p className="error-message">{errors.price && <span>{errors.price.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="private_tasting_supplement">Precio por suplemento de cata privada</label>
            <input type="number" id="private_tasting_supplement" name="private_tasting_supplement" {...register('private_tasting_supplement')}/>
            <p className="error-message">{errors.private_tasting_supplement && <span>{errors.private_tasting_supplement.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="iberian_supplement">Precio por suplemento de ibéricos</label>
            <input type="number" id="iberian_supplement" name="iberian_supplement" {...register('iberian_supplement')}/>
            <p className="error-message">{errors.iberian_supplement && <span>{errors.iberian_supplement.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="date">Fecha (YYYY-MM-DD) </label>
            <input type="text" id="date" name="date" {...register('date')}/>
            <p className="error-message">{errors.date && <span>{errors.date.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="time">Hora (HH:mm:ss)</label>
            <input type="text" id="time" name="time" {...register('time')}/>
            <p className="error-message">{errors.time && <span>{errors.time.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="duration">Duración</label>
            <input type="text" id="duration" name="duration" {...register('duration')}/>
            <p className="error-message">{errors.duration && <span>{errors.duration.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="capacity">Aforo máximo</label>
            <input type="number" id="capacity" name="capacity" {...register('capacity')}/>
            <p className="error-message">{errors.capacity && <span>{errors.capacity.message}</span>}</p>
          </div>
          <div>
            <label htmlFor="parking">Parking</label>
            <input type="text" id="parking" name="parking" {...register('parking')}/>
            <p className="error-message">{errors.parking && <span>{errors.parking.message}</span>}</p>
          </div>
          <div>
            <input type="checkbox" id="extra_people" name="extra_people" {...register('extra_people')} />
            <label htmlFor='extra_people'>Pueden asistir más personas a la cata de las que compraron las entradas</label>
          </div>
          <div>
            <input type="checkbox" id="possibility_dinner" name="posibility_dinner" {...register('possibility_dinner')}/>
            <label htmlFor='possibility_dinner'>Es posible cenar en el establecimiento</label>
          </div>
          <div>
            <input type="checkbox" id="kids" name="kids" {...register('kids')}/>
            <label htmlFor='kids'>Se puede asistir con niños</label>
          </div>
          <div>
            <input type="checkbox" id="pets" name="pets" {...register('pets')}/>
            <label htmlFor='pets'>Se puede asistir con mascotas</label>
          </div>
          <div>
            <input type="checkbox" id="accesibility" name="accesibility" {...register('accesibility')}/>
            <label htmlFor='accesibility'>Accesibilidad</label>
          </div>
          <div>
            <input type="checkbox" id="vegan_version" name="vegan_version" {...register('vegan_version')}/>
            <label htmlFor='vegan_version'>Opción vegana</label>
          </div>
          <div>
            <input type="checkbox" id="english" name="english" {...register('english')}/>
            <label htmlFor="english">Disponibilidad en inglés</label>
          </div>
        <input className="buttonCreate" type="submit" value="PUBLICAR"/> 
    </form>
  </div>
  )
}

export default CreateForm;
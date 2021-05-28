import React, {Fragment} from 'react';

const Cancion = ({letra}) => {

    if(letra.lenght === 0)return null;

    return ( 
        <Fragment>
            <h2>Letra de la canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
     );
}
 
export default Cancion;
import React, { Fragment }  from 'react';
import './AppFooter.css';
export default function AppFooterFunctionnalComponent(props){
    const currentYear = new Date().getFullYear();
    return (
        <Fragment>
        <hr />
        <p className='footer'>Copyright &copy; { currentYear } Optu Ltd  {props.myProperty}</p>
        </Fragment>
    );
}

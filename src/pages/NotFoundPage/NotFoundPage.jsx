import React from 'react';
import notFound from '../../images/icons/browser-error-404-icon.svg';

import { useLocation, useNavigate } from 'react-router-dom';

import style from './NotFoundPage.module.css';
import { HiBackward } from 'react-icons/hi2';

export default function NotFoundPage({ initPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const backLink = location.state?.from ?? `/${initPage}`;
  console.log(backLink);

  function handleRedirect() {
    navigate(`${backLink}`, { replace: true });
  }

  return (
    <div className={style.notFoundContainer}>
      <img className={style.notFoundImg} src={notFound} alt="Not Found" />
      <p className={style.notFoundText}>Ruta nu exista</p>
      <button className={style.button} onClick={handleRedirect}>
        <span>
          <HiBackward />
        </span>{' '}
        Inapoi la pagina principala !
      </button>
    </div>
  );
}

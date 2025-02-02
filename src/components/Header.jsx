// src/components/Header.js
import { Link } from 'react-router-dom';
import { useTranslation } from "../TranslationContext";


import indexHeaderImage from '../assets/images/index-header-image.png';
import btnIcon from '../assets/images/btn-icon.svg';

import { APP_CONSTANTS } from '../constants/site.config';



function Header() {
  const { translations } = useTranslation();
  const { indexHeaderTextItemCaption1 } = translations || {};


  return (
    <header className='page-header'>
      <div className="wrapper">

        <div className="page-header__inner flex">

          <div className="page-header__image">
            <img src={indexHeaderImage} />
          </div>

          <div className="page-header__info">

            <p className="page-header__caption">{indexHeaderTextItemCaption1}</p>
            <h1 className='h1-title page-header__title'>Инвестируйте успешно!</h1>

            <div className="page-header__texts flex">
              <p className="page-header__text text">Инвестируйте вместе с нами и рассчитывайте на лучший результат в мире финансов</p>
              <p className="page-header__text text">Вместе мы сможем создать надежное будущее для Вас и Ваших инвестиций</p>
            </div>

            <div className="page-header__buttons">
              <Link to="/register" className='btn btn-main btn-main-arrow'>
                <img src={btnIcon} className='btn-arrow left' />
                <span>Тест</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;

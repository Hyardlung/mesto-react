import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Card({owner, name, link, likes, onCardClick}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = owner._id === currentUser._id;    // определение владельца карточки
  const cardDeleteButtonClassName = (   // переменная для кнопки удаления
      `card__remove-button ${isOwn && 'card__remove-button_active'}`
  );
  const isLiked = likes.some(i => i._id === currentUser._id);   // проверка наличия лайка текущего юзера
  const cardLikeButtonClassName = '...';

  const cardClickHandler = () => {
    onCardClick({name, link});
  };

  return (
      <li className="card">
        <div className="card__image-wrapper">
          <img
              className="card__image"
              src={link}
              alt={name}
              onClick={cardClickHandler}
          />
        </div>
        <button
            className="card__remove-button"
            type="button"
        > </button>
        <div className="card__footer">
          <h2 className="card__heading">{name}</h2>
          <div className="card__like-wrapper">
            <button
                className="card__like-button"
                type="button"
            > </button>
            <span className="card__like-counter">{likes.length}</span>
          </div>
        </div>
      </li>
  )
}
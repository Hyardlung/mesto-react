import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Card({name, link, owner, _id, likes, onCardClick, onCardLike}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = owner._id === currentUser._id;    // определение владельца карточки
  const cardDeleteButtonClassName = (   // переменная для кнопки удаления
      `card__remove-button ${isOwn && 'card__remove-button_active'}`
  );
  const isLiked = likes.some(like => like._id === currentUser._id);   // проверка наличия лайка текущего юзера
  const cardLikeButtonClassName = (   // переменная для кнопки лайка
      `card__like-button ${isLiked && 'card__like-button_active'}`
  );

  const cardClickHandler = () => {
    onCardClick({name, link});
  };

  const cardLikeHandler = () => {
    onCardLike({likes, _id});
  }

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
            className={cardDeleteButtonClassName}
            type="button"
        > </button>
        <div className="card__footer">
          <h2 className="card__heading">{name}</h2>
          <div className="card__like-wrapper">
            <button
                className={cardLikeButtonClassName}
                type="button"
                onClick={cardLikeHandler}
            > </button>
            <span className="card__like-counter">{likes.length}</span>
          </div>
        </div>
      </li>
  )
}
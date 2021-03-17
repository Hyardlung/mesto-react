import {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {api} from '../utils/api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const userData = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  // хук, подтягивающий данные о пользователе и массив карточек с сервера
  useEffect(() => {
    Promise.all([
        api.getRemoteCards()
    ])
        .then(([remoteCards]) => {

            setCards(remoteCards.reverse());
        })
        .catch(err => console.log(err));
  }, []);

  return (
      <main className="main">
        <section className="profile page__profile">
          <div className="avatar profile__avatar">
            <img src={userData.avatar} alt="Аватар пользователя" className="avatar__image" />
            <button className="avatar__button" onClick={onEditAvatar}> </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userData.name}</h1>
            <p className="profile__about">{userData.about}</p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}> </button>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}> </button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            {cards.map(
                item => <Card
                    {...item}
                    key={item._id}
                    onCardClick={onCardClick}
                />)
            }
          </ul>
        </section>
      </main>
  )
}
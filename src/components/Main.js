import {useState, useEffect} from 'react';
import {api} from '../utils/api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('#');
  const [cards, setCards] = useState([]);

  // хук, подтягивающий данные о пользователе и массив карточек с сервера
  useEffect(() => {
    Promise.all([
        api.getUserData(),
        api.getRemoteCards()
    ])
        .then(values => {
            const userData = values[0];
            const remoteCards = values[1];

            const items = remoteCards.map(item => ({
              name: item.name,
              link: item.link,
              likes: item.likes,
              id: item._id,
              ownerId: item.owner._id,
            }));

            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);

            setCards(items.reverse());
        })
        .catch(err => console.log(err));
  }, []);

  return (
      <main className="main">
        <section className="profile page__profile">
          <div className="avatar profile__avatar">
            <img src={userAvatar} alt="Аватар пользователя" className="avatar__image" />
            <button className="avatar__button" onClick={onEditAvatar}> </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}> </button>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}> </button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            {cards.map(
                item => <Card
                    {...item}
                    key={item.id}
                    onCardClick={onCardClick}
                />)
            };
          </ul>
        </section>
      </main>
  )
}
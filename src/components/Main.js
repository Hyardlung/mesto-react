import {useState, useEffect} from 'react';


export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = useState('');
  const [userAbout, serUserAbout] = useState('');
  const [userAvatar, setUserAvatar] = useState('#');

  return (
      <main className="main">
        <section className="profile page__profile">
          <div className="avatar profile__avatar">
            <img src={userAvatar} alt="Аватар пользователя" className="avatar__image" />
            <button className="avatar__button" onClick={onEditAvatar}> </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userAbout}</p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}> </button>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}> </button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            <template className="elements__template">
              <li className="card">
                <div className="card__image-wrapper">
                  <img src="#" alt="#" className="card__image" />
                </div>
                <button type="button" className="card__remove-button"> </button>
                <div className="card__footer">
                  <h2 className="card__heading"> </h2>
                  <div className="card__like-wrapper">
                    <button type="button" className="card__like-button"> </button>
                    <span className="card__like-counter">0</span>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>
  )
}
import {useState, useEffect} from 'react';

function Main(props) {

  function handleEditAvatarClick() {
    const avatarButton = document
        .querySelector('.avatar__button')
        .addEventListener('click', () => {
      const popupUpdateAvatar = document
          .querySelector('.popup_update-avatar')
          .classList.add('popup_opened');
    })
  }

  function handleEditProfileClick() {
    const profileEditButton = document
        .querySelector('.profile__edit-button')
        .addEventListener('click', () => {
          const popupEditProfile = document
              .querySelector('.popup_edit-profile')
              .classList.add('popup_opened');
        })
  }

  function handleAddPlaceClick() {
    const addPlaceButton = document
        .querySelector('.profile__add-button')
        .addEventListener('click', () => {
          const popupAddPlace = document
              .querySelector('.popup_add-card')
              .classList.add('popup_opened');
        })
  }

  return (
      <main className="main">
        <section className="profile page__profile">
          <div className="avatar profile__avatar">
            <img src="#" alt="Avatar" className="avatar__image" />
            <button onClick={handleEditAvatarClick} className="avatar__button"> </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"> </h1>
            <p className="profile__about"> </p>
            <button onClick={handleEditProfileClick} type="button" className="profile__edit-button"> </button>
          </div>
          <button onClick={handleAddPlaceClick} type="button" className="profile__add-button"> </button>
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

export default Main;
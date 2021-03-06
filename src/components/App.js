import {useState, useEffect} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
      <div className="page root__page">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="popup popup_edit-profile">
        <div className="popup__container">
          <button type="button" className="popup__close-button"> </button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form action="submit" name="profileForm" className="popup__form popup__form_edit-profile" noValidate>
            <fieldset className="popup__form-fieldset">
              <input
                  type="text"
                  name="profileName"
                  className="popup__input"
                  id="profile-name-input"
                  minLength="2"
                  maxLength="40"
                  autoComplete="off"
                  placeholder="Ваше имя"
                  required
              />
              <span className="popup__input-error" id="profile-name-input-error"> </span>
              <input
                  type="text"
                  name="profileAbout"
                  className="popup__input"
                  id="profile-about-input"
                  minLength="2"
                  maxLength="200"
                  autoComplete="off"
                  placeholder="О себе"
                  required
              />
              <span className="popup__input-error" id="profile-about-input-error"> </span>
              <button type="submit" className="popup__save-button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_add-card">
        <div className="popup__container">
          <button type="button" className="popup__close-button popup__close-button_add-card">
          </button>
          <h2 className="popup__title">Новое место</h2>
          <form action="submit" name="addForm" className="popup__form popup__form_add-card" noValidate>
            <fieldset className="popup__form-fieldset">
              <input
                  type="text"
                  name="cardName"
                  className="popup__input"
                  id="card-name-input"
                  minLength="2"
                  maxLength="30"
                  autoComplete="off"
                  placeholder="Название"
                  required
              />
              <span className="popup__input-error" id="card-name-input-error"> </span>
              <input
                  type="url"
                  name="cardImage"
                  className="popup__input"
                  id="card-link-input"
                  autoComplete="off"
                  placeholder="Ссылка на картинку"
                  required
              />
              <span className="popup__input-error" id="card-link-input-error"> </span>
              <button type="submit" className="popup__save-button">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_preview">
        <div className="popup__container popup__container_preview">
          <button type="button" className="popup__close-button popup__close-button_preview">
          </button>
          <figure className="preview">
            <img src="#" alt="#" className="preview__image" />
            <figcaption className="preview__caption"> </figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_confirm-delete">
        <div className="popup__container">
          <button type="button" className="popup__close-button"> </button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" className="popup__save-button popup__save-button_confirmation">Да</button>
        </div>
      </div>

      <div className="popup popup_update-avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-button"> </button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form action="submit" name="updateAvatarForm" className="popup__form popup__form_update-avatar" noValidate>
            <fieldset className="popup__form-fieldset">
              <input
                  type="url"
                  name="avatarLink"
                  className="popup__input"
                  id="avatar-input"
                  autoComplete="off"
                  placeholder="Ссылка на картинку"
                  required
              />
              <span className="popup__input-error" id="avatar-input-error"> </span>
              <button type="submit" className="popup__save-button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <script type="module" src="pages/index.js"> </script>
    </div>
  );
}

export default App;

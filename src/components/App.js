import {useState} from 'react';

import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


export default function App() {
  // ХУКИ СОСТОЯНИЯ
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  // ОБРАБОТЧИКИ СОБЫТИЙ
  // открытие попапа редактирования профиля
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  // открытие попапа добавления новой карточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  // открытие попапа обновления аватара пользователя
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  // открытие попапа предпросмотра карточки
  const handleCardClick = ({name, link}) => {
    setSelectedCard({name, link});
    setIsImagePopupOpen(true);
  }
  // закрытие любого из попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsImagePopupOpen(false);
  }

  return (
    <>
      <div className="page root__page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      {/*попап редактирования профиля*/}
      <PopupWithForm
          name="editProfileForm"
          formTitle="Редактировать профиль"
          submitButtonTitle="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
      >
        <fieldset className="popup__form-fieldset">
          <input
              className="popup__input"
              name="profileName"
              type="text"
              id="profile-name-input"
              minLength="2"
              maxLength="40"
              autoComplete="off"
              placeholder="Ваше имя"
              required
          />
          <span className="popup__input-error" id="profile-name-input-error"> </span>
          <input
              className="popup__input"
              name="profileAbout"
              type="text"
              id="profile-about-input"
              minLength="2"
              maxLength="200"
              autoComplete="off"
              placeholder="О себе"
              required
          />
          <span className="popup__input-error" id="profile-about-input-error"> </span>
        </fieldset>
      </PopupWithForm>

      {/*попап добавления новой карточки*/}
      <PopupWithForm
          name="addPlaceForm"
          formTitle="Новое место"
          submitButtonTitle="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
      >
        <fieldset className="popup__form-fieldset">
          <input
              className="popup__input"
              name="cardName"
              type="text"
              id="card-name-input"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              placeholder="Название"
              required
          />
          <span className="popup__input-error" id="card-name-input-error"> </span>
          <input
              className="popup__input"
              name="cardImage"
              type="url"
              id="card-link-input"
              autoComplete="off"
              placeholder="Ссылка на картинку"
              required
          />
          <span className="popup__input-error" id="card-link-input-error"> </span>
        </fieldset>
      </PopupWithForm>

      {/*попап редактирования аватара пользователя*/}
      <PopupWithForm
          name="updateAvatarForm"
          formTitle="Обновить аватар"
          submitButtonTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
      >
        <fieldset className="popup__form-fieldset">
          <input
              className="popup__input"
              name="avatarLink"
              type="url"
              id="avatar-input"
              autoComplete="off"
              placeholder="Ссылка на картинку"
              required
          />
          <span className="popup__input-error" id="avatar-input-error"> </span>
        </fieldset>
      </PopupWithForm>

      {/*попап предпросмотра изображения карточки*/}
      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} {...selectedCard} />

      {/*попап подтверждения удаления карточки*/}
      <PopupWithForm
          name="confirmationDeleteCard"
          formTitle="Вы уверены?"
          submitButtonTitle="Да"
      >
      </PopupWithForm>
    </>
  )
}
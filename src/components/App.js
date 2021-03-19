import {useState, useEffect} from 'react';

import '../index.css';
import {api} from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


export default function App() {
  // ХУКИ СОСТОЯНИЯ
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  // эффект при монтировании: обновляет стейт текущего юзера из полученных с сервера данных
  useEffect(() => {
    api.getUserData()
        .then(res => {
          setCurrentUser(res);
        })
        .catch(err => console.log(err));
  }, []);

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
  // лайк карточки
  const handleCardLike = (cardLikes, cardId) => {
    const isLiked = cardLikes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(cardId, isLiked)
        .then(res => {
          setCards(state => state.map(item => item._id === cardId ? res : c))
        })
        .catch(err => console.log(err));
  }
  // закрытие любого из попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsImagePopupOpen(false);
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page root__page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
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
    </CurrentUserContext.Provider>
  )
}
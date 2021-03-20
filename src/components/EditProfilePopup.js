import {CurrentUserContext} from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
        name="editProfileForm"
        formTitle="Редактировать профиль"
        submitButtonTitle="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
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
  )
}
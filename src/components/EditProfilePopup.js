import {useState} from 'react';
import PopupWithForm from './PopupWithForm';
// import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function EditProfilePopup({isOpen, onClose}) {
  const [nameValue, setNameValue] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeName = evt => {
    setNameValue(evt.target.value);
  }
  const handleChangeDescription = evt => {
    setDescription(evt.target.value);
  }

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
          value={nameValue}
          onChange={handleChangeName}
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
          value={description}
          onChange={handleChangeDescription}
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
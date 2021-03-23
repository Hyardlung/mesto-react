import {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarInputRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    })
  }

  return (
      <PopupWithForm
          name="updateAvatarForm"
          formTitle="Обновить аватар"
          submitButtonTitle="Сохранить"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
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
              ref={avatarInputRef}
          />
          <span className="popup__input-error" id="avatar-input-error"> </span>
        </fieldset>
      </PopupWithForm>
  )
}
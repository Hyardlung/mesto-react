export default function ImagePopup({name, link, isOpen, onClose}) {
  return (
      <div className={`popup popup_preview ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container popup__container_preview">
          <button
              type="button"
              className="popup__close-button popup__close-button_preview"
              onClick={onClose}
          >
          </button>
          <figure className="preview">
            <img src={link} alt={name} className="preview__image" />
            <figcaption className="preview__caption">{name}</figcaption>
          </figure>
        </div>
      </div>
  )
}
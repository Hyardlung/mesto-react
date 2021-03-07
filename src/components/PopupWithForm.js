export default function PopupWithForm({
  name,
  formTitle,
  submitButtonTitle,
  children,
  isOpen,
  onClose,
}) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <h2 className="popup__title">{formTitle}</h2>
          <form
            className="popup__form popup__form_edit-profile"
            name="{name}"
            action="#"
            noValidate
          >
            {children}
            <button
              className="popup__save-button"
              type="submit"
            >
              {submitButtonTitle}
            </button>
          </form>
          <button
              className="popup__close-button"
              type="button"
              onClick={onClose}
          > </button>
        </div>
      </div>
    </>
  )
}
export default function Card({name, link, likes}) {
  return (
      <li className="card">
        <div className="card__image-wrapper">
          <img src={link} alt={name} className="card__image" />
        </div>
        <button
            className="card__remove-button"
            type="button"
        > </button>
        <div className="card__footer">
          <h2 className="card__heading">{name}</h2>
          <div className="card__like-wrapper">
            <button
                type="button"
                className="card__like-button"
            > </button>
            <span className="card__like-counter">{likes.length}</span>
          </div>
        </div>
      </li>
  )
}
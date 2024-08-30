import './card.scss';

export default function Card({ value, title, img, unit }) {

  const bgColor = title === 'Calories' ? 'bg_energy' : title === 'Proteines' ? 'bg_chicken' : title === 'Glucides' ? 'bg_apple' : 'bg_cheeseburger';

  return (
    <article className='card'>
      <img src={img} alt={`${title} - logo`} className={bgColor}/>
      <div className='card_infos'>
        <h3>{value}{unit}</h3>
        <p>{title}</p>
      </div>
    </article>
  )
}

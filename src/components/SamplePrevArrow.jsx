import prev from '../assets/Icons/Prev.svg'
export default function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        width: '12rem',
      }}
      onClick={onClick}
    >
      <img src={prev} alt='previous icon' height='30' />
    </div>
  )
}

import next from '../assets/Icons/Next.svg'
export default function SampleNextArrow(props) {
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
      <img src={next} alt='previous icon' height='30' />
    </div>
  )
}

import '@/styles/utils/Card.css';

export default function Card({ text, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {text}
    </div>
  )
}

export default function Footer() {
  const CURRENT_DATE = new Date().getFullYear();
  return (
    <footer className="footer">
      &copy; {CURRENT_DATE} Quizapp. All rights reserved.
    </footer>
  )
}

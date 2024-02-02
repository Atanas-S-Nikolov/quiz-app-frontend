import '@/styles/utils/FormWrapperLayout.css';

export default function FormWrapperLayout({ children }) {
  return (
    <section className="form_wrapper">
     {children}
    </section>
  )
}

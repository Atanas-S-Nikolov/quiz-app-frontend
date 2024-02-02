import '@/styles/pages/HomePage.css';

import Card from "@/components/utils/Card";

export default function HomePage() {
  return (
    <>
      <h1 id='title'>Quiz App</h1>
      <section className="cards">
        <Card text='Start quiz' />
        <Card text='Ranking' />
      </section>
    </>
  )
}

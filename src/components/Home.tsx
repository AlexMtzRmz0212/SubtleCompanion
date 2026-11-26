import { ChapterNav } from './ChapterNav';

export function Home() {
  return (
    <div className="wrap">
      <section className="hero">
        <h1>The book, in pictures.</h1>
        <div className="hero-foot">
          <p className="lede">
            A visual companion to <cite>The Subtle Art of Not Giving a F*ck</cite>. One drawing per idea, so a quick
            scroll brings the whole book back.
          </p>
        </div>
      </section>
      <section aria-labelledby="chapters-heading">
        <h2 id="chapters-heading" className="section-title">
          Chapters
        </h2>
        <ChapterNav />
      </section>
    </div>
  );
}

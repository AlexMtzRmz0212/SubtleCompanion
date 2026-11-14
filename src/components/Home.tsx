import { chapters } from '../data/chapters';
import { useReadIds } from '../lib/useProgress';
import { ChapterNav } from './ChapterNav';
import { ProgressBar } from './ProgressBar';

function NextStep() {
  const readIds = useReadIds();
  const next = chapters.find((c) => !readIds.includes(c.id));

  if (!next) {
    return (
      <a className="button button-accent" href="#saved">
        See your saved visuals
      </a>
    );
  }
  return (
    <a className="button button-accent" href={`#${next.id}`}>
      {readIds.length === 0 ? 'Start with' : 'Continue with'} chapter {next.n}
    </a>
  );
}

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
          <div className="hero-progress">
            <ProgressBar />
            <NextStep />
          </div>
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

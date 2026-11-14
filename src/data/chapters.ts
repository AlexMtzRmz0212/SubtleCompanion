import { BackwardsLaw } from '../visuals/ch01/BackwardsLaw';
import { BiggerThing } from '../visuals/ch01/BiggerThing';
import { CareBudget } from '../visuals/ch01/CareBudget';
import { CareNarrows } from '../visuals/ch01/CareNarrows';
import { FeedbackLoop } from '../visuals/ch01/FeedbackLoop';
import { NotIndifferent } from '../visuals/ch01/NotIndifferent';
import type { Chapter, Visual } from './types';

/*
 * Every caption and description here is written in our own words. Captions stay at 20 words or
 * fewer: if an idea needs more, the drawing is wrong.
 */
export const chapters: Chapter[] = [
  {
    id: 'ch01',
    n: 1,
    title: "Don't Try",
    oneLiner: 'Chasing a better life all the time is a reminder that you think yours is not enough.',
    visuals: [
      {
        id: 'ch01-budget',
        name: 'Care budget',
        caption: 'Care is a small budget. Every block that goes to small stuff is gone from what matters.',
        alt: 'Ten blocks of care to hand out between six small annoyances and two things that matter.',
        Component: CareBudget,
      },
      {
        id: 'ch01-loop',
        name: 'Feedback loop',
        caption: 'Feeling bad about feeling bad feeds itself. The exit is a shrug: I feel bad, so what?',
        alt: 'Three boxes in a cycle: feel bad, judge it, feel worse, and back to feel bad. One orange arrow leaves the cycle from feel bad to a box that says so what.',
        Component: FeedbackLoop,
      },
      {
        id: 'ch01-backwards',
        name: 'Chasing pushes it away',
        caption: 'Chase a good feeling and it backs away. Stop grabbing and it tends to show up.',
        alt: 'Two rows. In the first a square lunges at an orange dot that moves out of reach. In the second the square stays still and the dot comes to rest beside it.',
        Component: BackwardsLaw,
      },
      {
        id: 'ch01-different',
        name: 'Different, not indifferent',
        caption: 'Not caring is not going numb. It is being fine with standing out for what you chose.',
        alt: 'Two rows of squares. The first row is all grey and level. In the second row one orange square stands above the line.',
        Component: NotIndifferent,
      },
      {
        id: 'ch01-bigger',
        name: 'Something bigger',
        caption: 'A wall only looks huge when nothing behind it matters more to you.',
        alt: 'The same wall drawn twice beside a small figure. Alone it towers. Next to a much taller orange block labelled what matters, it looks small.',
        Component: BiggerThing,
      },
      {
        id: 'ch01-narrows',
        name: 'Fewer, bigger cares',
        caption: 'With age you run out of energy for most things, and care about a few that count.',
        alt: 'Many small dots on the left pass through a funnel and come out on the right as three large orange dots.',
        Component: CareNarrows,
      },
    ],
  },
  {
    id: 'ch02',
    n: 2,
    title: 'Happiness Is a Problem',
    oneLiner: 'Problems never stop. A good life is one with problems you like solving.',
    visuals: [],
  },
  {
    id: 'ch03',
    n: 3,
    title: 'You Are Not Special',
    oneLiner: 'Feeling entitled, whether as the best or as the worst off, keeps you from growing.',
    visuals: [],
  },
  {
    id: 'ch04',
    n: 4,
    title: 'The Value of Suffering',
    oneLiner: 'Your values decide what your suffering is for, so choose them on purpose.',
    visuals: [],
  },
  {
    id: 'ch05',
    n: 5,
    title: 'You Are Always Choosing',
    oneLiner: 'You may not be to blame for what happens to you, but how you respond is yours.',
    visuals: [],
  },
  {
    id: 'ch06',
    n: 6,
    title: "You're Wrong About Everything (Maybe)",
    oneLiner: 'Growth is going from wrong to a bit less wrong, and that needs doubt.',
    visuals: [],
  },
  {
    id: 'ch07',
    n: 7,
    title: 'Failure Is the Way Forward',
    oneLiner: 'You get good by failing many times, and you start by doing something small.',
    visuals: [],
  },
  {
    id: 'ch08',
    n: 8,
    title: 'The Importance of Saying No',
    oneLiner: 'Commitment means turning other options down, and that is where meaning comes from.',
    visuals: [],
  },
  {
    id: 'ch09',
    n: 9,
    title: '...And Then You Die',
    oneLiner: 'Remembering that you will die makes it easier to see what is worth your care.',
    visuals: [],
  },
];

export const chapterById = new Map<string, Chapter>(chapters.map((c) => [c.id, c]));

/** Every visual in book order, with the chapter it belongs to. */
export const allVisuals: { visual: Visual; chapter: Chapter }[] = chapters.flatMap((chapter) =>
  chapter.visuals.map((visual) => ({ visual, chapter })),
);

import { BackwardsLaw } from '../visuals/ch01/BackwardsLaw';
import { BiggerThing } from '../visuals/ch01/BiggerThing';
import { CareBudget } from '../visuals/ch01/CareBudget';
import { CareNarrows } from '../visuals/ch01/CareNarrows';
import { FeedbackLoop } from '../visuals/ch01/FeedbackLoop';
import { NotIndifferent } from '../visuals/ch01/NotIndifferent';
import { DenyBlame } from '../visuals/ch02/DenyBlame';
import { NeverZero } from '../visuals/ch02/NeverZero';
import { PainSignal } from '../visuals/ch02/PainSignal';
import { ProblemsNeverEnd } from '../visuals/ch02/ProblemsNeverEnd';
import { StrongNotRight } from '../visuals/ch02/StrongNotRight';
import { WillingToStruggle } from '../visuals/ch02/WillingToStruggle';
import { EarnedEsteem } from '../visuals/ch03/EarnedEsteem';
import { ExtremesOnly } from '../visuals/ch03/ExtremesOnly';
import { NotGoodYet } from '../visuals/ch03/NotGoodYet';
import { OrdinaryDays } from '../visuals/ch03/OrdinaryDays';
import { TwoEntitlements } from '../visuals/ch03/TwoEntitlements';
import { WeakPoints } from '../visuals/ch03/WeakPoints';
import { AwarenessLayers } from '../visuals/ch04/AwarenessLayers';
import { NeedsOthers } from '../visuals/ch04/NeedsOthers';
import { ShakyStack } from '../visuals/ch04/ShakyStack';
import { StillFighting } from '../visuals/ch04/StillFighting';
import { SufferingMeaning } from '../visuals/ch04/SufferingMeaning';
import { Yardstick } from '../visuals/ch04/Yardstick';
import { EveryAlarm } from '../visuals/ch05/EveryAlarm';
import { FaultResponse } from '../visuals/ch05/FaultResponse';
import { HandDealt } from '../visuals/ch05/HandDealt';
import { ResponsibilityPower } from '../visuals/ch05/ResponsibilityPower';
import { SameClimb } from '../visuals/ch05/SameClimb';
import { WhyMeWhatNow } from '../visuals/ch05/WhyMeWhatNow';
import { CertaintyWall } from '../visuals/ch06/CertaintyWall';
import { LessWrong } from '../visuals/ch06/LessWrong';
import { MemoryEdited } from '../visuals/ch06/MemoryEdited';
import { PatternInNoise } from '../visuals/ch06/PatternInNoise';
import { PlainIdentity } from '../visuals/ch06/PlainIdentity';
import { ThreatAvoidance } from '../visuals/ch06/ThreatAvoidance';
import { ActionLoop } from '../visuals/ch07/ActionLoop';
import { FailurePile } from '../visuals/ch07/FailurePile';
import { GoalVsValue } from '../visuals/ch07/GoalVsValue';
import { LearnedThroughPain } from '../visuals/ch07/LearnedThroughPain';
import { LittleToLose } from '../visuals/ch07/LittleToLose';
import { SmallestStep } from '../visuals/ch07/SmallestStep';
import { Boundaries } from '../visuals/ch08/Boundaries';
import { EmptyYes } from '../visuals/ch08/EmptyYes';
import { FreedomNeedsDirection } from '../visuals/ch08/FreedomNeedsDirection';
import { GoDeep } from '../visuals/ch08/GoDeep';
import { TrustBroken } from '../visuals/ch08/TrustBroken';
import { YesNeedsNo } from '../visuals/ch08/YesNeedsNo';
import { BiggerThanYou } from '../visuals/ch09/BiggerThanYou';
import { CliffEdge } from '../visuals/ch09/CliffEdge';
import { FearsShrink } from '../visuals/ch09/FearsShrink';
import { LifeInYears } from '../visuals/ch09/LifeInYears';
import { WhatStays } from '../visuals/ch09/WhatStays';
import { WorldAfterYou } from '../visuals/ch09/WorldAfterYou';
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
    visuals: [
      {
        id: 'ch02-problems',
        name: 'Problems never end',
        caption: 'Solving one problem does not end the list. It hands you the next. Happiness is in the solving.',
        alt: 'A row of five squares. The first two are solid and labelled solved. The third is orange and labelled now. The last two are grey and labelled next. An arrow runs beneath all of them.',
        Component: ProblemsNeverEnd,
      },
      {
        id: 'ch02-signal',
        name: 'Pain is a signal',
        caption: 'Pain is not the enemy. It is the signal that something needs attention.',
        alt: 'A box labelled pain, an orange arrow marked signal, and an orange box labelled look here.',
        Component: PainSignal,
      },
      {
        id: 'ch02-deny-blame',
        name: 'Deny and blame',
        caption: 'Denying a problem or blaming someone else both feel better for a while. Neither moves the problem.',
        alt: 'Two rows. In the first a square turns its arrow away from the problem. In the second a square points its arrow at a grey circle. In both rows the orange problem square on the right stays exactly where it was.',
        Component: DenyBlame,
      },
      {
        id: 'ch02-strong',
        name: 'Strong is not right',
        caption: 'A feeling is information, not an order. Strong does not mean right.',
        alt: 'Two bars. A tall orange bar labelled how strong it feels and a short bar labelled how right it is.',
        Component: StrongNotRight,
      },
      {
        id: 'ch02-willing',
        name: 'Willing to struggle',
        caption: 'Everyone wants the reward. The question is which daily struggle you are willing to take on to get it.',
        alt: 'A figure on a line. Three grey blocks labelled the grind sit between the figure and an orange circle labelled reward.',
        Component: WillingToStruggle,
      },
      {
        id: 'ch02-zero',
        name: 'Never at zero',
        caption: 'Rich or poor, dissatisfaction never drops to zero. It is what pushes us to act.',
        alt: 'Two orange bars standing on a zero line, one labelled poor and one labelled rich. The rich bar is shorter, but neither reaches zero.',
        Component: NeverZero,
      },
    ],
  },
  {
    id: 'ch03',
    n: 3,
    title: 'You Are Not Special',
    oneLiner: 'Feeling entitled, whether as the best or as the worst off, keeps you from growing.',
    visuals: [
      {
        id: 'ch03-two',
        name: 'Two entitlements',
        caption: 'Thinking you are the best and thinking you have it worst are the same move: I am the exception.',
        alt: 'A row of grey squares labelled most people. One orange square far above labelled best and one far below labelled worst off. Both sit equally far from the row.',
        Component: TwoEntitlements,
      },
      {
        id: 'ch03-earned',
        name: 'Earned or not',
        caption: 'Feeling good about yourself only holds up when something you did sits underneath it.',
        alt: 'Two identical blocks. The first, labelled unearned, floats above the ground. The second, labelled earned, rests on a stack of three orange blocks.',
        Component: EarnedEsteem,
      },
      {
        id: 'ch03-extremes',
        name: 'Feed of extremes',
        caption: 'You mostly see the rare ends online, so an ordinary life feels like falling behind. It is not.',
        alt: 'A bell-shaped set of bars. The tall middle is labelled real life. The thin orange bars at both ends are labelled seen online.',
        Component: ExtremesOnly,
      },
      {
        id: 'ch03-weak',
        name: 'Judge by weak points',
        caption: 'Strengths are easy to feel good about. How you treat your weak points is the real test.',
        alt: 'Two rows of squares. The first row, strengths, is grey. The second row, weak points, is orange and marked the real test.',
        Component: WeakPoints,
      },
      {
        id: 'ch03-not-good-yet',
        name: 'Not good yet',
        caption: 'People get good at things because they accept they are not good yet.',
        alt: 'Four steps rising to the right. An orange square stands on the lowest step, labelled not good yet. An arrow climbs above the steps toward the top, labelled good.',
        Component: NotGoodYet,
      },
      {
        id: 'ch03-ordinary',
        name: 'Ordinary days',
        caption: 'Most days are ordinary. Skill is built on ordinary days, not on the rare big one.',
        alt: 'A grid of fifty squares. All are solid except one orange square at the top, labelled the big day. The grid is labelled ordinary days.',
        Component: OrdinaryDays,
      },
    ],
  },
  {
    id: 'ch04',
    n: 4,
    title: 'The Value of Suffering',
    oneLiner: 'Your values decide what your suffering is for, so choose them on purpose.',
    visuals: [
      {
        id: 'ch04-meaning',
        name: 'Pain with a reason',
        caption: 'Pain weighs less when it is for something. The reason is the counterweight.',
        alt: 'A balance in level. A grey block labelled pain sits on one side and an orange block of equal size labelled why sits on the other.',
        Component: SufferingMeaning,
      },
      {
        id: 'ch04-fighting',
        name: 'Still fighting',
        caption: 'A soldier fought on for almost thirty years after the war ended, because it still meant something to him.',
        alt: 'A short block labelled war, a line marking where the war ends, then a long orange block labelled still fighting that runs on for almost thirty years.',
        Component: StillFighting,
      },
      {
        id: 'ch04-layers',
        name: 'Three layers',
        caption: 'Notice what you feel. Ask why. Then ask what standard you are judging yourself by.',
        alt: 'Three bars stacked downward with an arrow pointing deeper beside them: what I feel, why I feel it, and in orange, what I judge by.',
        Component: AwarenessLayers,
      },
      {
        id: 'ch04-yardstick',
        name: 'Borrowed or chosen',
        caption: 'The same result feels like failure against a borrowed bar, and success against one you chose.',
        alt: 'Two identical bars. On the left the goal line is far above, labelled borrowed bar. On the right an orange goal line sits right at the top of the bar, labelled chosen bar.',
        Component: Yardstick,
      },
      {
        id: 'ch04-shaky',
        name: 'Shaky foundations',
        caption: 'Pleasure, money, being right and staying upbeat are shaky ground for a whole life.',
        alt: 'A wobbly stack of four blocks labelled pleasure, money, being right and positivity, with an orange block labelled your life balanced on top.',
        Component: ShakyStack,
      },
      {
        id: 'ch04-needs-others',
        name: 'Needs other people',
        caption: 'A value that needs other people to cooperate can be taken from you. Pick ones you can act on.',
        alt: 'Two rows. In the first a square is joined by a dotted line to a far grey circle, labelled needs other people. In the second a square points straight at an orange square beside it, labelled needs only you.',
        Component: NeedsOthers,
      },
    ],
  },
  {
    id: 'ch05',
    n: 5,
    title: 'You Are Always Choosing',
    oneLiner: 'You may not be to blame for what happens to you, but how you respond is yours.',
    visuals: [
      {
        id: 'ch05-fault-response',
        name: 'Fault and response',
        caption: 'Fault is about the past and who caused it. Response is about now and what you do.',
        alt: 'A vertical line labelled now. A grey block on the left labelled fault, who caused it. An orange block on the right labelled response, what you do.',
        Component: FaultResponse,
      },
      {
        id: 'ch05-climb',
        name: 'Same climb',
        caption: 'The same climb feels different when you picked it than when it was forced on you.',
        alt: 'Two identical hills with a small square on the slope of each. The first has an orange dot on its peak, labelled chose it. The second has none, labelled forced.',
        Component: SameClimb,
      },
      {
        id: 'ch05-hand',
        name: 'The hand you got',
        caption: 'You do not pick the hand you are dealt. You do pick which card to play.',
        alt: 'Five grey cards in a row. One in the middle is orange and raised above the rest, labelled your play. The row is labelled the hand you got.',
        Component: HandDealt,
      },
      {
        id: 'ch05-alarm',
        name: 'Everything is an injury',
        caption: 'When every slight counts as an injury, it gets harder to notice the people who are truly hurt.',
        alt: 'Two grids of twelve circles. In the first, every slight, all are orange. In the second, real harm, all are grey except one orange circle that stands out.',
        Component: EveryAlarm,
      },
      {
        id: 'ch05-power',
        name: 'Responsibility and power',
        caption: 'Take on more responsibility for your life and you get more power over it.',
        alt: 'A chart with power on the vertical axis and responsibility on the horizontal axis. An orange line rises steadily to an orange dot at the top right.',
        Component: ResponsibilityPower,
      },
      {
        id: 'ch05-why-me',
        name: 'Why me, what now',
        caption: 'One event, two replies. Why me? leaves you stuck. What now? gives you something to do.',
        alt: 'A grey block labelled event with two arrows leaving it. The upper arrow leads to a box that says why me. The lower orange arrow leads to an orange box that says what now.',
        Component: WhyMeWhatNow,
      },
    ],
  },
  {
    id: 'ch06',
    n: 6,
    title: "You're Wrong About Everything (Maybe)",
    oneLiner: 'Growth is going from wrong to a bit less wrong, and that needs doubt.',
    visuals: [
      {
        id: 'ch06-less-wrong',
        name: 'Less wrong',
        caption: 'Nobody goes from wrong to right. You go from wrong to a little less wrong, and keep going.',
        alt: 'Six bars shrinking from left to right, from wrong to less wrong. The last bar is orange and small but never reaches zero, labelled never zero.',
        Component: LessWrong,
      },
      {
        id: 'ch06-pattern',
        name: 'Patterns in noise',
        caption: 'The brain finds patterns in random events, then defends them as if they were facts.',
        alt: 'Scattered grey dots. Five of them are orange and joined by a line, as if they made a shape, labelled a pattern with a question mark.',
        Component: PatternInNoise,
      },
      {
        id: 'ch06-memory',
        name: 'Edited memory',
        caption: 'Memory is not a recording. Each recall edits it to fit what you already believe.',
        alt: 'A row of seven squares labelled what happened. An arrow points down to a second row labelled what you recall, where two of the squares have turned orange.',
        Component: MemoryEdited,
      },
      {
        id: 'ch06-wall',
        name: 'Certainty is a wall',
        caption: 'Total certainty is a wall: it stops you testing what you believe. A little doubt leaves a gap.',
        alt: 'Two rows. In the first, certain, an arrow stops at a solid wall. In the second, doubt, a wall has a gap and an orange arrow passes through it.',
        Component: CertaintyWall,
      },
      {
        id: 'ch06-avoid',
        name: 'Threat and avoidance',
        caption: 'The more something threatens who you think you are, the further you stand from it.',
        alt: 'Three rows with a square on the left and an orange circle on the right. As the circle gets bigger, labelled threat, the square sits further away.',
        Component: ThreatAvoidance,
      },
      {
        id: 'ch06-plain',
        name: 'Plain identity',
        caption: 'The bigger the story you tell about yourself, the more of it there is to defend.',
        alt: 'A large grey square, labelled grand story, with eight orange dots around its edge. A small square, labelled plain story, with only two orange dots.',
        Component: PlainIdentity,
      },
    ],
  },
  {
    id: 'ch07',
    n: 7,
    title: 'Failure Is the Way Forward',
    oneLiner: 'You get good by failing many times, and you start by doing something small.',
    visuals: [
      {
        id: 'ch07-pile',
        name: 'Pile of failures',
        caption: 'Every skill sits on top of a pile of failures. Skip the pile and there is no skill.',
        alt: 'A triangle of grey squares labelled failures, narrowing to a single orange square at the top, labelled skill.',
        Component: FailurePile,
      },
      {
        id: 'ch07-goal-value',
        name: 'Goal or value',
        caption: 'A goal you can finish leaves you empty when it ends. An ongoing value keeps giving you a direction.',
        alt: 'Two rows. In the first, goal, an arrow reaches a finish block and the words now what appear after it. In the second, ongoing value, an orange arrow runs on across the whole width.',
        Component: GoalVsValue,
      },
      {
        id: 'ch07-action',
        name: 'Action first',
        caption: 'Waiting to feel motivated is backwards. Do something, and inspiration and motivation follow.',
        alt: 'Three boxes in a cycle: action in orange, then inspired, then motivated, with arrows leading back to action. A label marks action as the place to start.',
        Component: ActionLoop,
      },
      {
        id: 'ch07-smallest',
        name: 'Smallest first step',
        caption: 'Dread the whole project and you freeze. Pick the smallest first step and the bar is just starting.',
        alt: 'A huge grey block labelled the whole thing. Below it a tiny orange square labelled start here.',
        Component: SmallestStep,
      },
      {
        id: 'ch07-little-to-lose',
        name: 'Little to lose',
        caption: 'When you are already near the bottom, a fall costs little, so risks get cheap to take.',
        alt: 'Two pillars with a square on top of each. The tall one, high up, has a long orange arrow showing the fall. The short one, rock bottom, has a short orange arrow.',
        Component: LittleToLose,
      },
      {
        id: 'ch07-pain-teaches',
        name: 'Learned through pain',
        caption: 'The things that matter most are learned through discomfort, not around it.',
        alt: 'Three bars rising from left to right, labelled easy, hard and painful, under the heading what you learn. The painful bar is the tallest and is orange.',
        Component: LearnedThroughPain,
      },
    ],
  },
  {
    id: 'ch08',
    n: 8,
    title: 'The Importance of Saying No',
    oneLiner: 'Commitment means turning other options down, and that is where meaning comes from.',
    visuals: [
      {
        id: 'ch08-yes-no',
        name: 'Yes needs no',
        caption: 'Choosing one thing means turning the rest down. That refusal is what gives the choice weight.',
        alt: 'A square labelled you with an orange arrow labelled yes reaching one orange square in the middle of a column of five. The other four grey squares are each marked no.',
        Component: YesNeedsNo,
      },
      {
        id: 'ch08-direction',
        name: 'Freedom needs direction',
        caption: 'Freedom to go any way means nothing until you pick one. A direction gives it a point.',
        alt: 'On the left a dot with eight grey lines pointing every way, labelled any way. On the right a dot with one orange arrow, labelled one way.',
        Component: FreedomNeedsDirection,
      },
      {
        id: 'ch08-boundaries',
        name: 'Whose problem',
        caption: 'In a healthy relationship each person carries their own problems. In an unhealthy one, one carries both.',
        alt: 'Two rows with a square for you and one for them. In the healthy row each has one orange problem square. In the unhealthy row you hold both orange squares and they hold none.',
        Component: Boundaries,
      },
      {
        id: 'ch08-empty-yes',
        name: 'Empty yes',
        caption: 'A yes only means something when a no was possible. If you can never refuse, your yes is empty.',
        alt: 'Two rows. In the first, can say no, a no box and an orange yes box mean a real yes. In the second, cannot say no, two orange yes boxes mean an empty yes.',
        Component: EmptyYes,
      },
      {
        id: 'ch08-deep',
        name: 'Go deep',
        caption: 'Sampling many things stays on the surface. Staying with a few lets you reach the deep end.',
        alt: 'Eight short grey bars labelled sample many, beside one tall orange bar labelled go deep.',
        Component: GoDeep,
      },
      {
        id: 'ch08-trust',
        name: 'Trust takes time',
        caption: 'Trust takes time to build, a moment to break, and a long, honest record to win back.',
        alt: 'A line that climbs slowly, then drops straight down along an orange line labelled broken, then climbs again more slowly, labelled slow to rebuild.',
        Component: TrustBroken,
      },
    ],
  },
  {
    id: 'ch09',
    n: 9,
    title: '...And Then You Die',
    oneLiner: 'Remembering that you will die makes it easier to see what is worth your care.',
    visuals: [
      {
        id: 'ch09-years',
        name: 'Life in years',
        caption: 'Your time is a limited grid of years. Seeing the edge shows what deserves the next square.',
        alt: 'A grid of eighty squares, one for each year. The first thirty-two are solid and labelled lived, one is orange and labelled now, and the rest are grey and labelled left.',
        Component: LifeInYears,
      },
      {
        id: 'ch09-fears',
        name: 'Fears shrink',
        caption: 'Next to a whole life, the thing you fear today is a speck. Zoom out and it shrinks.',
        alt: 'Three grey panels labelled today, a year and a life. An orange square sits inside each and gets smaller from one panel to the next.',
        Component: FearsShrink,
      },
      {
        id: 'ch09-stays',
        name: 'What stays',
        caption: 'Knowing life ends, people reach for something that will outlast them. Choose what that is on purpose.',
        alt: 'A square and a line labelled your life stop at a grey bar labelled the end. Past the bar an orange arrow labelled what stays keeps going.',
        Component: WhatStays,
      },
      {
        id: 'ch09-cliff',
        name: 'Edge of the cliff',
        caption: 'Stand at the edge and shallow worries fall away. What is left is what you care about.',
        alt: 'A square stands on a cliff beside an orange dot labelled still here. Three small grey squares tumble off the edge, labelled falls away.',
        Component: CliffEdge,
      },
      {
        id: 'ch09-world',
        name: 'The world after you',
        caption: 'A useful test: how is the world different because you were in it?',
        alt: 'Two grids of nine squares. The first, without you, is missing the last square. The second, with you, has an orange square filling the gap.',
        Component: WorldAfterYou,
      },
      {
        id: 'ch09-bigger',
        name: 'Bigger than you',
        caption: 'A life feels like enough when you give your care to something bigger than yourself.',
        alt: 'A small dot labelled you with an orange arrow pointing to a much larger orange circle labelled bigger than you.',
        Component: BiggerThanYou,
      },
    ],
  },
];

export const chapterById = new Map<string, Chapter>(chapters.map((c) => [c.id, c]));

/** Every visual by id, with the chapter it belongs to. */
export const visualById = new Map<string, { visual: Visual; chapter: Chapter }>(
  chapters.flatMap((chapter) => chapter.visuals.map((visual) => [visual.id, { visual, chapter }] as const)),
);

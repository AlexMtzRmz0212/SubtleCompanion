import type { ComponentType } from 'react';

/** Chapter id in the form `ch01`. Also the deep-link hash. Ids sort correctly as strings. */
export type ChapterId = `ch${string}`;

/** What every drawing receives, for its text alternative. */
export interface VisualProps {
  name: string;
  alt: string;
}

export interface Visual {
  /** Stable id such as `ch01-loop`. */
  id: string;
  /** Two to four words. The drawing's accessible title. */
  name: string;
  /** The only text shown with the drawing. 20 words at most, in our own words. */
  caption: string;
  /** What the drawing shows, for people who cannot see it. */
  alt: string;
  Component: ComponentType<VisualProps>;
}

export interface Chapter {
  id: ChapterId;
  /** Chapter number as printed in the book. */
  n: number;
  title: string;
  /** The chapter in one sentence. */
  oneLiner: string;
  /** The first visual is the chapter's main one. Empty until the chapter is drawn. */
  visuals: Visual[];
}

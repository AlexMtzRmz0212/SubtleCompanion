/** Chapter id in the form `ch01`. Also the deep-link hash. Ids sort correctly as strings. */
export type ChapterId = `ch${string}`;

export interface Chapter {
  id: ChapterId;
  /** Chapter number as printed in the book. */
  n: number;
  title: string;
  /** The chapter in one sentence. */
  oneLiner: string;
  /** Two or three short paragraphs, in our own words. */
  summary: string[];
  /** Paraphrased ideas. Each one can be saved as a highlight. */
  keyIdeas: string[];
  /** Questions for the reader to answer in writing. */
  reflection: string[];
}

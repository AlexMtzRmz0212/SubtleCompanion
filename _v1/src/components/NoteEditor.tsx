import { useId, type ReactNode } from 'react';
import { useSaveStatus } from '../lib/store';
import { notesStore, useAnswer, useNote } from '../lib/useNotes';

const STATUS_TEXT = {
  saved: 'Saved in this browser',
  pending: 'Saving…',
  failed: 'Not saved. This browser is blocking storage, so copy your text before you leave.',
};

function SaveStatus() {
  const status = useSaveStatus(notesStore);
  return (
    <p className="save-status" data-status={status} role="status">
      {STATUS_TEXT[status]}
    </p>
  );
}

/** A labelled writing box. Where the text is stored is up to the caller. */
function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: ReactNode;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
}) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
      {value ? <SaveStatus /> : null}
    </div>
  );
}

export function NoteEditor({ chapterId }: { chapterId: string }) {
  const [text, setText] = useNote(chapterId);
  return (
    <Field
      label="Your notes on this chapter"
      value={text}
      onChange={setText}
      placeholder="What stuck with you? What do you disagree with?…"
    />
  );
}

export function ReflectionPrompt({ itemKey, question }: { itemKey: string; question: string }) {
  const [text, setText] = useAnswer(itemKey);
  return <Field label={question} value={text} onChange={setText} placeholder="Answer honestly. Nobody else reads this…" />;
}

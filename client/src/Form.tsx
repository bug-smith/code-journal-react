/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from 'react';
import { addEntry, Entry} from './data.ts';
import placeholder from './assets/;placeholder-image-square.jpg';

type FormProps = {
  entries: Entry[]
}

export function Form({entries}:FormProps) {

  const [titleInput, setTitleInput] = useState<string>('');
  const [srcInput, setSrcInput] = useState<string>('');
  const [textArea, setTextArea] = useState<string>('');
  const [showEntries, setShowEntries] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formValues = {
      title: titleInput,
      photoUrl: srcInput,
      notes: textArea,
    };
    console.log(formValues.title, titleInput)
    if (formValues.title !== entries[0].title){
    addEntry(formValues);
    }

  }

  return (
    <div className={showEntries ? 'hidden' : ''} id="entryForm">
      <form onSubmit={handleSubmit}>
        <div className="row margin-bottom-1">

        <ShowImage srcInput={srcInput}/>
        <EntryInputs titleInput={titleInput} srcInput={srcInput} onTitleChange={(e) => setTitleInput(e.target.value)} onSrcChange={(e) => setSrcInput(e.target.value)} />
        </div>
        <NoteInput textArea={textArea} setTextArea={(e) => setTextArea(e.target.value)}/>
        <Button />
      </form>

    </div>
  );
}

type ShowImageProps = {
  srcInput: string;
}

function ShowImage({ srcInput }: ShowImageProps) {
  return (
      <div className="column-half">
        <img src={srcInput} className="form-image input-b-radius" />
      </div>
  );
}

type EntryInputsProps = {
  titleInput: string;
  srcInput: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSrcChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function EntryInputs({titleInput, srcInput, onTitleChange, onSrcChange }: EntryInputsProps) {
  return (
    <div className="column-half">
      <label className="margin-bottom-1 d-block">
        Title
        <input value={titleInput} onChange={onTitleChange} className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100" />
      </label>
      <label className="margin-bottom-1 d-block">
        Photo URL
        <input value={srcInput} onChange={onSrcChange} className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100" />
      </label>
    </div>
  );
}

function NoteInput({textArea, setTextArea}) {
  return (
    <div className="row margin-bottom-1">
      <div className="column-full">
        <label className="margin-bottom-1 d-block" >
          Notes
        </label>
        <textarea
          required
          className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
          name="formNotes"
          id="formNotes"
          cols={30}
          rows={10} value={textArea} onChange={setTextArea}></textarea>
      </div>
    </div>
  );
}


function Button() {
  return <button type="submit">Save</button>
}

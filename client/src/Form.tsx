import placeholder from './assets/placeholder-image-square.jpg';

export function Form() {
  return (
    <div id="entryForm">
      <div className="row margin-bottom-1">
        <ShowImage />
        <EntryInputs />
      </div>
      <NoteInput />
    </div>
  );
}

function ShowImage() {
  return (
      <div className="column-half">
        <img src={placeholder} className="form-image input-b-radius" />
      </div>
  );
}

function EntryInputs() {
  return (
    <div className="column-half">
      <label className="margin-bottom-1 d-block">
        Title
        <input className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100" />
      </label>
      <label className="margin-bottom-1 d-block">
        Photo URL
        <input className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100" />
      </label>
    </div>
  );
}

function NoteInput() {
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
          rows={10}></textarea>
      </div>
    </div>
  );
}

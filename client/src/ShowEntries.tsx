import { readEntries } from './data.ts';

export function ShowEntries() {
  return (
    <div className="row">
      <div className="column-full"></div>
      <ul className="entry-ul" id="entryUl">
        {}
      </ul>
    </div>
  );
}

function Entry() {
  const entries = readEntries();
  const ReadEntries = entries.map((entry) => {
    return <li key={entry.entryId}>

    </li>;
  });
  return (
    <li key={entry.entryId}>
      <div className="row">
        <div className="column-half">
          <img className="input-b-radius form-image" src="" alt="" />
        </div>
          <div className="column-half">
            <div className="row">
              <div className="column-full d-flex justify-between">
                <h3>This is test Title</h3>
                <i className='fa-solid fa-pencil'></i>
              </div>
            </div>
          <p></p>
        </div>
      </div>
    </li>;
  )

}

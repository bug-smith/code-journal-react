import { Entry } from './data.ts';

type ShowEntriesProps = {
  entries: Entry[]
}
export function ShowEntries({entries}: ShowEntriesProps) {


  return (
    <div className="row">
      <div className="column-full"></div>
      <ul className="entry-ul" id="entryUl">
      {entries.map((entry)=> {
        return(
        <SingleEntry
        entry={entry} />
      )})}
      </ul>
    </div>
  );
}

type EntryProps = {
  entry: Entry;
}

function SingleEntry({entry}: EntryProps) {
    return (
      <li key={entry.entryId}>
        <div className="row">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              src={entry.photoUrl}
              alt={entry.title}
            />
          </div>
          <div className="column-half">
            <div className="row">
              <div className="column-full d-flex justify-between">
                <h3>{entry.title}</h3>
                <i className="fa-solid fa-pencil"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }

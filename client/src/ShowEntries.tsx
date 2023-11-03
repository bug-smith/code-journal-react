import { readEntries, Entry } from './data.ts';

export function ShowEntries() {
  const entries = readEntries();

  return (
    <div className="row">
      <div className="column-full"></div>
      <ul className="entry-ul" id="entryUl">
      {entries.map((entry: any)=> {
        return(
        <Entry
        entry={entry} />
      )})}
      </ul>
    </div>
  );
}

type EntryProps = {
  entry: Entry[];
}

function Entry({entry}: EntryProps) {
    return (
        <li key={entry.enrtyId}>
          <div className="row">
            <div className="column-half">
              <img className="input-b-radius form-image" src={entry.name} alt={entry.name} />
            </div>
            <div className="column-half">
              <div className="row">
                <div className="column-full d-flex justify-between">
                  <h3>This is test Title</h3>
                </div>
              </div>
            </div>
          </div>
        </li>
    );
  }

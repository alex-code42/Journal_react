import './Entry_Form.css'

export function EntryForm(){
    return(
    <div className="entryForm">
        <p>NEW ENTRY</p>
        <div className="entryForm_Motto">
            <label htmlFor="entryMotto">Motto</label>
            <input type="text" id="entryMotto" name="entryMotto" />
        </div>
        <div className="entryForm_Form">
            <label htmlFor="entryForm">Notes</label>
            <textarea id='entryForm' name='entryForm'></textarea>
        </div>
        <button>Create</button>
    </div>
        )
}
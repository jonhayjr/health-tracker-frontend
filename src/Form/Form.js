import {useState} from 'react';
import './Form.css';

const Form = ({addNote}) => {

    const [date, setDate] = useState('');
    const [diet, setDiet] = useState('');
    const [mood, setMood] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
         if (name === 'date') {
             setDate(value);
         } else if (name === 'diet') {
             setDiet(value);
         } else if (name === 'mood') {
             setMood(value);
         } else if (name === 'symptoms') {
             setSymptoms(value);
         }
    }

    const handleSubmit = (e) => {
        //Prevent Default Form Behavior
        e.preventDefault();

        //Create object with form values
        const note = {
            date,
            diet,
            mood,
            symptoms
        }
        
        //Add Note to notes array 
        addNote(note);

        //Clear state for all form fields
        setDate('');
        setDiet('');
        setMood('');
        setSymptoms('');
        
        
    }

    return (
        <div className="form">
            <h2>Add Note</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" name="date" value={date} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="diet" className="form-label">Diet</label>
                    <textarea className="form-control" id="diet" name="diet" rows="3" onChange={handleChange} value={diet} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="mood" className="form-label">Mood</label>
                    <textarea className="form-control" id="mood" name="mood" rows="3" onChange={handleChange} value={mood} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="symptoms" className="form-label">Symptoms</label>
                    <textarea className="form-control" id="symptoms" name="symptoms" rows="3" onChange={handleChange} value={symptoms}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-75">Submit</button>
            </form>
        </div>
    )
}

export default Form;

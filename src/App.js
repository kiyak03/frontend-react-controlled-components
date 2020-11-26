import React from 'react';
import './App.css';

function App() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
    const [formState, setFormState] = React.useState({
        name: '',
        age: 0,
        referrer: 'anders',
        comments: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });

        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        name="name"
                        id="details-name"
                        value={formState.name}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                        value={formState.age}
                        onChange={handleFormChange}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                <label htmlFor="referrer">
                    Hoe heb je dit recept gevonden?
                    <select
                        name="found-through"
                        id="referrer"
                        value={formState.referrer}
                        onChange={handleFormChange}
                    >
                        <option value="google">Google</option>
                        <option value="vriend">Vriend</option>
                        <option value="advertentie">Advertentie</option>
                        <option value="anders">Anders</option>
                    </select>
                </label>

                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        name="comments"
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                        value={formState.comments}
                        onChange={handleFormChange}
                    >
          </textarea>
                </label>

                <button type="submit">
                    Versturen
                </button>
            </fieldset>
        </form>
    );
}


// function App() {
//     const [formState, setFormState] = React.useState({
//       name: "",
//       age: "0",
//       list: "Anders",
//       comments: "",
//       })
//
//
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(formState);
//     }
//
//     function handleFormChange(e){
//         setFormState({
//             ...formState,
//             [e.target.value]: e.target.value,
//         });
//
//         console.log(`The value ${e.target.name} is set to ${e.target.value}`);
//     }
//
//   return (
//         <form onSubmit={handleSubmit}>
//         <fieldset>
//             <legend>Gegevens</legend>
//             <label htmlFor="details-name">Naam:
//             <input
//                 type="tekst"
//                 placeholder="Vul hier uw naam in"
//                 name="name"
//                 id="details-name"
//                 value={formState.name}
//                 onChange={handleFormChange}
//             /><br/><br/>
//             </label>
//
//             <label htmlFor="details-age">Leeftijd:
//             <input
//                 type="number"
//                 name="age"
//                 id="details-age"
//                 value={formState.age}
//                 onChange={handleFormChange}
//             />
//             </label>
//         </fieldset>
//
//         <fieldset>
//             <legend>Jouw review</legend>
//             <label htmlFor="list">Hoe heb je dit recept gevonden?
//             <select
//                 name="url-list"
//                 id="list"
//                 value={formState.list}
//                 onChange={handleFormChange}
//             >
//             <br/>
//                 <option label="Google" value="http://www.google.com"></option>
//                 <option value="Vriend"></option>
//                 <option value="Advertentie"></option>
//                 <option value="Anders"></option>
//             </select>
//             </label>
//
//             <br/><br/>
//
//             <label htmlFor="comments">Opmerkingen:
//             <br/>
//             <textarea
//                 name="message"
//                 id="comments"
//                 placeholder="Wat vond je van het recept?"
//                 rows="5"
//                 cols="40"
//                 value={formState.comments}
//                 onChange={handleFormChange}
//             />
//             </label>
//             <br/><br/>
//             <button
//                 type="submit"
//                 >
//                 Versturen
//             </button>
//         </fieldset>
//         </form>
//
//   );
// }

export default App;

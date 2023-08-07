import "./UseStatePage.css";
import { NavLink } from "react-router-dom";
import UseStateDemo from "../components/UseStateDemo";
import { Helmet } from "react-helmet";
import titles from "./titles";

export default function useStatePage() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>{titles.UseStatePage}</title>
            </Helmet>

            <NavLink to="/" className="home-link">
                Home
            </NavLink>
            <br />
            <div className="content">
                <div className="main-content">
                    <h2 className="heading">UseState Hook</h2>
                    <ul className="description">
                        <li className="list-item">
                            This hook is used for state management at the most
                            basic level, in a react app.
                        </li>
                        <li className="list-item">
                            Importing useState hook :-
                            <p className="command">{`import { useState } from 'react';`}</p>
                        </li>

                        <li className="list-item">
                            Calling the hook :-
                            <p className="command">
                                {`const [ count, setCount ] = useState( initialCount
                                );`}
                            </p>
                            <ul className="sub-list">
                                <li>
                                    The initialCount can be both, a value or an
                                    object.
                                </li>
                                <li>
                                    Used "const" keyword, as count & setCount
                                    are reference to the variable & function,
                                    which kind of getting declared globally
                                    across the app.
                                </li>
                                <li>
                                    As count is reference of the actual
                                    variable, change in it will be reflected
                                    across the app, in different components
                                    simultaneously, as it's values are getting
                                    rendered everywhere.
                                </li>
                            </ul>
                        </li>

                        <li className="list-item">
                            Updating the State :-
                            <p className="command">
                                setCount ( updatedCount );
                            </p>
                            <ul className="sub-list">
                                <li>
                                    If initialCount is an object :-
                                    <p className="sub-command">
                                        const [ student, setStudent ] ={" "}
                                        {`useState (
                                            { id: "", name: "" } );`}
                                    </p>
                                    State-updation in this case (updating a
                                    key's value, requires object-destructuring)
                                    :
                                    <p className="sub-command">
                                        {`setStudent (
                                            prevState => ( { ...prevState , id : prevState.id+1 } )
                                        );`}
                                    </p>
                                    State-updating (on assigning a new value to
                                    a key) :
                                    <p className="sub-command">
                                        {`setStudent (
                                            prevState => ( { ...prevState , name : newValue } )
                                        );`}
                                    </p>
                                    ( where ... = JavaScript spread-operator )
                                </li>

                                <li>
                                    These updations are generally done inside
                                    event-handler functions.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <UseStateDemo />

                <div>
                    For implementation, refer{" "}
                    <NavLink
                        to="https://rb.gy/q3qet"
                        target="_blank"
                        className="link"
                    >
                        link
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

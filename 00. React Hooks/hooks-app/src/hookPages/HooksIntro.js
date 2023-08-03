import { Helmet } from "react-helmet";
import titles from "./titles";
import "./HooksIntro.css";
import { NavLink } from "react-router-dom";

export default function HooksIntro() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>{titles.HooksIntro}</title>
            </Helmet>

            <NavLink to="/" className="home-link">
                Home
            </NavLink>
            <br />

            <div className="hooks-container">
                <h2 className="heading w-fit">Introduction to Hooks</h2>
                <ul className="list">
                    <li className="list-item">
                        Hooks are utility-functions, which are used to work with
                        different React features like states, location,
                        side-effects, etc. The name of all built-in hooks starts
                        with "use".
                    </li>
                    <li className="list-item">
                        State is snapshot of data at an instance, across a react
                        app. States are used to render updates on UI, i.e. if a
                        general JS variable is changed, no re-render happeens &
                        we can't see the changes in UI. For this purpose,
                        state-variables are used in place of those variables.
                    </li>
                    <li className="list-item">
                        Rules to use a hook :-
                        <ul className="sub-list">
                            <li>Written inside function-component.</li>
                            <li>
                                Must be imported, and called at the top of
                                component's code
                            </li>
                            <li>
                                Can't be called inside conditional statements.
                            </li>
                        </ul>
                    </li>

                    <li className="list-item">
                        Hooks can be categorized based on their use cases. Some
                        common categories are :-
                        <ul className="sub-list">
                            <li>
                                <h3 className="li-heading">
                                    State Hooks (useState, useReducer)
                                </h3>
                                <p>
                                    These hooks are used to manage the states in
                                    a react app.
                                </p>
                            </li>

                            <li>
                                <h3 className="li-heading">
                                    Context Hooks (useContext)
                                </h3>
                                <p>
                                    These hooks are used to consume the
                                    contexts. Context lets the components to
                                    access a centralised data. The
                                    context-creation & context-provider are
                                    written in a context (.js file).
                                </p>
                            </li>

                            <li>
                                <h3 className="li-heading">
                                    Effect Hooks (useEffect)
                                </h3>
                                <p>
                                    These hooks are used to manage side-effects.
                                    Side effect are changes, that happens
                                    outside a component, due to a change inside
                                    it. For example : webpage title update, API
                                    calls, external DOM update, etc.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

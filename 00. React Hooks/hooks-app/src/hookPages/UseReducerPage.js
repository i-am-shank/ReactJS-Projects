import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import titles from "./titles";
import UseReducerDemo from "../components/UseReducerDemo";

export default function useReducerPage() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>{titles.UseReducerPage}</title>
            </Helmet>

            <NavLink to="/" className="home-link">
                Home
            </NavLink>
            <br />
            <div className="content">
                <div className="main-content">
                    <h2 className="heading">UseReducer Hook</h2>
                    <ul className="description">
                        <li className="list-item">
                            This hook is used for complex state management, for
                            cases where using useState hook make us to write
                            repeated code for different functionalities, i.e.
                            different implementations in update-state function.
                        </li>
                        <li className="list-item">
                            Importing useReducer hook :-
                            <p className="command">{`import { useReducer } from 'react';`}</p>
                        </li>

                        <li className="list-item">
                            Calling useReducer hook :-
                            <p className="command">
                                {`const [ state, dispatch ] = useReducer( reducer , initialState
                                );`}
                            </p>
                            <ul className="sub-list">
                                <li>
                                    updatedState = reducer(currentState, action)
                                    -- is a function, which contains all
                                    different case functionalities, listed
                                    case-wise, making the function-codes also
                                    reusable.
                                </li>
                                <li>
                                    dispatch -- is used for giving the commands,
                                    for different cases. And, task will be
                                    handled according to reducer-function logic.
                                </li>
                            </ul>
                        </li>

                        <li className="list-item">
                            Updating the State :-
                            <p className="command">
                                dispatch ( "action-name" );
                            </p>
                            <p>
                                Update operation works according to reducer
                                function, whose syntax is something like :
                            </p>
                            <p className="sub-command">
                                <p>{`function reducer(state, action) {`}</p>
                                <p className="ml-6">{`if(action == action1) { .... }`}</p>
                                <p className="ml-6">{`if(action == action2) { .... }`}</p>
                                <p className="ml-6">{`else { .... }`}</p>
                                <p>{`}`}</p>
                            </p>
                            <p>
                                Just don't forget to return the updated value in
                                each case of reducer-function.
                            </p>
                        </li>
                    </ul>
                </div>

                <UseReducerDemo />

                <div>
                    For implementation, refer
                    <NavLink to=""> link</NavLink>
                </div>
            </div>
        </div>
    );
}

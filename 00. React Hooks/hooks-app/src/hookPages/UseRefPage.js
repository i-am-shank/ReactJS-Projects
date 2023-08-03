import "./UseRefPage.css";

import UseRefDemo from "../components/UseRefDemo";

import { Helmet } from "react-helmet";
import titles from "./titles";
import { NavLink } from "react-router-dom";

export default function UseRefPage() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>{titles.UseRefPage}</title>
            </Helmet>

            <NavLink to="/" className="home-link">
                Home
            </NavLink>
            <br />
            <div className="content">
                <div className="main-content">
                    <h2 className="heading">UseRef Hook</h2>
                    <ul className="description">
                        <li className="list-item">
                            This hook is used for manipulating the DOM directly,
                            which can't be done using props & other hooks.
                        </li>
                        <li className="list-item">
                            Importing useRef hook :-
                            <p className="command">{`import { useRef } from 'react';`}</p>
                        </li>

                        <li className="list-item">
                            Calling the hook :-
                            <p className="command">
                                {`const refElement = useRef( initialValue
                                );`}
                            </p>
                            <ul className="sub-list">
                                <li>
                                    The initialValue mostly used are "" or null.
                                </li>
                                <li>
                                    Here, refElement is used to get the
                                    reference of a React DOM element, which can
                                    be used to edit that element's HTML & CSS
                                    properties directly.
                                </li>
                                <li>
                                    refElement is actually an object :
                                    <p className="sub-command">
                                        {`refElement = { current : "initialValue" } ;`}
                                    </p>
                                </li>
                            </ul>
                        </li>

                        <li className="list-item">
                            We can manipulate the element's properties like
                            value, styling, etc using
                            <p className="command">
                                refElement.current.
                                {`<property_name> = value ;`}
                            </p>
                            <ul className="sub-list">
                                <li>
                                    To manipulate the element's value :
                                    <p className="sub-command">
                                        {`refElement.current.value = "newValue" ;`}
                                    </p>
                                </li>
                                <li>
                                    To manipulate some CSS property of the
                                    element :
                                    <p className="sub-command">
                                        {`refElement.current.styling.<property-name> = "newValue" ;`}
                                    </p>
                                </li>
                                <li>
                                    To shift focus on our referenced element :
                                    <p className="sub-command">
                                        {`refElement.current.focus() ;`}
                                    </p>
                                </li>
                            </ul>
                        </li>

                        <li className="list-item">
                            useRef hook gives us a superpower to manipulate DOM
                            directly, & also render changes on UI. If the task
                            can be performed using other hooks or
                            React-properties, using this hook is not considered
                            a good practice.
                        </li>
                    </ul>
                </div>

                <UseRefDemo />

                <div>
                    For implementation, refer
                    <NavLink to=""> link</NavLink>
                </div>
            </div>
        </div>
    );
}

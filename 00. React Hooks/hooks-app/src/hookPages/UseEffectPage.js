import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import titles from "./titles";
import "./UseEffectPage.css";
import UseEffectDemo from "../components/UseEffectDemo";

export default function useEffectPage() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>{titles.UseEffectPage}</title>
            </Helmet>

            <NavLink to="/" className="home-link">
                Home
            </NavLink>
            <br />
            <div className="content">
                <div className="main-content">
                    <h2 className="heading">UseEffect Hook</h2>
                    <ul className="description">
                        <li className="list-item">
                            This hook is used for performing side-effect tasks
                            like, using setInterval & setTimeout functions, or
                            updating DOM directly, or fetching data using API,
                            etc.
                        </li>
                        <li className="list-item">
                            In older React versions, for class based components,
                            life cycle methods like componentDidMount,
                            componentDidUpdate, & componentDidUnmount are used.
                            Now all these lifecycle methods can be replaced by
                            the useEffect hook in functional cumponents. This
                            simplifies the logic to code conversion task.
                        </li>
                        <li className="list-item">
                            Importing useEffect hook :- (same code for all
                            hooks)
                            <p className="command">{`import { useEffect } from 'react';`}</p>
                        </li>

                        <li className="list-item">
                            Calling useEffect hook :-
                            <p className="command">
                                {`useEffect ( sideEffect-function , [dependencies] );`}
                            </p>
                            <ul className="sub-list">
                                <li>
                                    The sideEffect-function is just a callback
                                    function, performing a side-effect task.
                                </li>
                                <li>
                                    [dependencies] is an array. There are 3
                                    use-cases of this :
                                    <ul className="sub-sub-list">
                                        <li>
                                            If 2nd argument is not provided,
                                            sideEffect-function executes on
                                            every re-render of that component.
                                        </li>
                                        <li>
                                            If 2nd argument left blank like [ ],
                                            sideEffect-function executes only on
                                            1st render.
                                        </li>
                                        <li>
                                            If 2nd argument is [dep1, dep2],
                                            sideEffect-function executes on 1st
                                            render, and then whenever atleast 1
                                            of dependencies, i.e. dep1 or dep2
                                            changes.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <UseEffectDemo />

                <div>
                    For implementation, refer{" "}
                    <NavLink
                        to="https://rb.gy/hoi06"
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

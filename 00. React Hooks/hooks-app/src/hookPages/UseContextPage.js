import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";
import titles from "./titles";
import "./UseContextPage.css";

import UseContextDemo from "../components/UseContextDemo";

export default function useContextPage() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>{titles.UseContextPage}</title>
            </Helmet>

            <NavLink to="/" className="home-link">
                Home
            </NavLink>
            <br />
            <div className="content">
                <div className="main-content">
                    <h2 className="heading">UseContext Hook</h2>
                    <ul className="description">
                        <li className="list-item">
                            <span className="topic">Context API</span> is used,
                            to overcome the performance issue caused by{" "}
                            <span className="sub-topic">prop-drilling</span>{" "}
                            while distant components communicating. Through
                            Context API, components can access data, without
                            passing props through mediator components. Context
                            API is implemented in 3-steps :
                            <ul className="sub-list">
                                <li>
                                    <span className="sub-topic">
                                        Creating Context
                                    </span>{" "}
                                    (at "src/context/context1.js", also the
                                    provider code in same file) :
                                    <p className="command">
                                        {`export const context1 = createContext( ) ;`}
                                    </p>
                                </li>
                                <li>
                                    <span className="sub-topic">Provider</span>{" "}
                                    This function is the main deal, where all
                                    data & functions which are needed to be
                                    communicated are written here, & returned
                                    wrapping the children, who can access the
                                    context :
                                    <p className="command">
                                        <p>
                                            {`
                                        export default function context1Provider({ children }) {`}
                                        </p>
                                        <p className="comment">{`\\\\ all state-datas, API-call functions, event-handler-functions, .. created here & stored in an object`}</p>
                                        <p className="code">
                                            {`const value = {data1, data2, setData2, function1, handlerFunct1, .. } ;`}
                                        </p>
                                        <p className="comment">
                                            {`\\\\ provide the value-object to {children} , so that it can be consumed.`}
                                        </p>
                                        <p className="ml-6">
                                            {`return <context1.Provider value = {value} >`}
                                        </p>
                                        <p className="code2 ">{`{children}`}</p>
                                        <p className="ml-6">{`</context1.Provider>`}</p>
                                        <p>{`}`}</p>
                                    </p>
                                    <p>
                                        Also, to make the provider function
                                        work, wrap the {`<App />`} component in
                                        "index.js" file as :
                                        <p className="command">
                                            <p>{`<context1Provider>`}</p>
                                            <p className="ml-6">{`<App />`}</p>
                                            <p>{`</context1Provider>`}</p>
                                        </p>
                                        This is needed because only the children
                                        of provider-tags can consume the
                                        value-object, as they are passed in the
                                        argument of provider-function as{" "}
                                        {`{children}`}, & then the function
                                        provided the value-object to them, in
                                        return-statement.
                                    </p>
                                </li>
                                <li>
                                    <span className="sub-topic">Consumer</span>
                                    {" : "}
                                    This is done at the destination component's
                                    code, inside return statement. But in using
                                    Context-API, i.e. {`<context1.provider>`}{" "}
                                    tags, we can write only 1-function between
                                    the tags. So, multiple context makes it a
                                    clumsy nested consumer code. Therefore,
                                    useContext( ) hook eases our task at
                                    consumer-level.
                                </li>
                            </ul>
                        </li>
                        <li className="list-item">
                            Importing useContext hook :-
                            <p className="command">{`import { useContext } from 'react';`}</p>
                            <ul className="sub-list">
                                <li>
                                    also import the required context, which
                                    we've created :
                                    <p className="sub-command">
                                        {`import { context1 } from "src/context/context1.js" ;`}
                                    </p>
                                </li>
                            </ul>
                        </li>

                        <li className="list-item">
                            Calling useContext hook :- (can access as many data
                            required, out of all created in the
                            provider-function.)
                            <p className="command">
                                {`const [ data1, function1, handler1 ] = useContext( context1
                                );`}
                            </p>
                            Now, can use all these data & functions, thinking
                            like they are written in this file only (all are
                            stored at a centralised place, i.e. became re-usable
                            piece of code).
                        </li>
                    </ul>
                </div>

                <UseContextDemo />

                <div>
                    For implementation, refer
                    <NavLink to=""> link</NavLink>
                </div>
            </div>
        </div>
    );
}

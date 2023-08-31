import { Helmet } from "react-helmet";
import "./ServerCreation.css";
import titles from "./titles";
import { ArrowRightAltSharp } from "@mui/icons-material";

export default function ServerCreation() {
    return (
        <div className="server-creation">
            <Helmet>
                <title>{titles.ServerCreation}</title>
            </Helmet>

            <div className="server-creation-content">
                <ul>
                    <li>
                        Server is actually a JS file, created using Express JS.
                    </li>
                    <li>
                        Express JS <ArrowRightAltSharp /> a JS framework used to
                        create server-side application.
                    </li>
                    <li>
                        Initialisation steps before creating a server :-{" "}
                        {`(in server.js file)`}
                        <ul>
                            <li>
                                Run following commands in terminal{" "}
                                {`(in folder)`} :-
                                <div className="command">{`npm init -y`}</div>
                                This actually creates the "Package.json" file.
                            </li>
                            <li>
                                Installing Express :-
                                <div className="command">{`npm i express`}</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Steps to created a server :-{" "}
                        {`(write following codes in server.js file)`}
                        <ul>
                            <li>
                                Creating an instance of express :-
                                <div className="command">
                                    {`const express = require("express") ;`}
                                </div>
                            </li>
                            <li>
                                Instantiate an instance of express{" "}
                                {`(this instance will be our server)`} :-
                                <div className="command">
                                    {`const app = express( ) ;`}
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Activating the server :-
                        <div className="command">
                            <p>{`app.listen ( port_num , () => {`}</p>
                            <p className="ml-6">
                                {`console.log("Printing a confirmation message") ;`}
                            </p>
                            <p>{`}) ;`}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

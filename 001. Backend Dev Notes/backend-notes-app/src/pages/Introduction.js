import "./Introduction.css";
import { Helmet } from "react-helmet";
import titles from "./titles";

import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Introduction() {
    return (
        <div>
            <Helmet>
                <title>{titles.Introduction}</title>
            </Helmet>

            <div className="introduction-content">
                <ul>
                    <li>
                        User <SyncAltIcon /> Frontend <SyncAltIcon /> Backend
                        <p>
                            User interacts with Frontend only, & Frontend
                            interacts with Backend, where all the business
                            logics are written.
                        </p>
                    </li>

                    <li>
                        The working of a software can be understood in the form
                        of OSI model :-
                        <p>
                            P <ArrowRightAltIcon /> Physical layer
                        </p>
                        <p>
                            D <ArrowRightAltIcon /> Data layer
                        </p>
                        <p>
                            N <ArrowRightAltIcon /> Network layer
                        </p>
                        <p>
                            T <ArrowRightAltIcon /> Transport layer
                        </p>
                        <p>
                            S <ArrowRightAltIcon /> Session layer
                        </p>
                        <p>
                            P <ArrowRightAltIcon /> Physical layer
                        </p>
                        <p>
                            A <ArrowRightAltIcon /> Application layer
                        </p>
                    </li>

                    <li>
                        4-types of requests are there for HTTP protocol :-
                        <p>
                            GET <ArrowRightAltIcon /> retrieve/fetch data
                        </p>
                        <p>
                            PUT <ArrowRightAltIcon /> update data
                        </p>
                        <p>
                            POST <ArrowRightAltIcon /> submit data
                        </p>
                        <p>
                            DELETE <ArrowRightAltIcon /> remove data
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

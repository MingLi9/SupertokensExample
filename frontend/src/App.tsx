import "./App.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingTimeProvider } from './LoadingTimeContext';
import Home from "./Home";
import Sub1 from "./Testing/sub1";
import Sub2 from "./Testing/sub2";
import Sub3 from "./Testing/sub3";
import AppHub from "./Testing/AppHub";
import { PreBuiltUIList, SuperTokensConfig, ComponentWrapper } from "./config";

SuperTokens.init(SuperTokensConfig);

function App() {
    return (
        <SuperTokensWrapper>
            <ComponentWrapper>
                <div className="App app-container">
                    <LoadingTimeProvider>
                        <Router>
                            <div className="fill">
                                <Routes>
                                    {/* This shows the login UI on "/auth" route */}
                                    {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"), PreBuiltUIList)}

                                    <Route
                                        path="/"
                                        element={
                                            /* This protects the "/" route so that it shows
                                        <Home /> only if the user is logged in.
                                        Else it redirects the user to "/auth" */
                                            <SessionAuth>
                                                <Home />
                                            </SessionAuth>
                                        }
                                    />
                                    <Route path="/sub1" element={<Sub1 />} />
                                    <Route path="/sub2" element={<Sub2 />} />
                                    <Route path="/sub3" element={<Sub3 />} />
                                    <Route path="/apphub" element={<AppHub />} />
                                </Routes>
                            </div>
                        </Router>
                    </LoadingTimeProvider>
                </div>
            </ComponentWrapper>
        </SuperTokensWrapper>
    );
}

export default App;

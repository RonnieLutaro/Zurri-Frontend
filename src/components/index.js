import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../store";
import { Jumbotron, Container } from "react-bootstrap";
import AppHeader from "./static/NavBar";
import AppNavBar from "./static/NavBar/appNavBar";
import Footer from "./static/Footer";
const HomePage = lazy(() => import("./views/homepage"));
const Facilities = lazy(() => import("./views/facilities"));
const Aboutpage = lazy(() => import("./views/aboutpage"));
const ContactUs = lazy(() => import("./views/contactus"));
const Rooms = lazy(() => import ("./views/rooms&rates"));
const NotFound = lazy(() => import("./views/notFound"));

class MainApp extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <AppNavBar />
                <Suspense fallback={
                    <Jumbotron fluid className="mt-4 mb-4 mr-auto ml-auto">
                        <Container>
                            <h1>Loading......</h1>
                            <p>Please wait</p>
                        </Container>
                    </Jumbotron>
                }>
                    <Switch>
                        <Router history={history}>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/facilities" component={Facilities} />
                            <Route exact path="/Rooms&Rates" component={Rooms} />
                            <Route exact path="/contactUs" component={ContactUs} />
                            <Route exact path="/aboutpage" component={Aboutpage} />
                            {/* <Route exact path="*" component={NotFound} /> */}
                            
                        </Router>
                    </Switch>
                </Suspense>
                <Footer />
            </>
        )
    }
}
export default MainApp;
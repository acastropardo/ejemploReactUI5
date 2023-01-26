import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { ShellBar, Label, Link } from "@ui5/webcomponents-react";
import { Page } from "./objectPage";

export const Layout = () => {
  const navigate = useHistory();
  const goToObjectPage = () => navigate.push("/objectPage");

  return (
    <>
      <ShellBar primaryTitle="UI5 Web Components for React Issue Template" />
      <Switch>
        <Route exact path="/">
          <Label>Start Page</Label>
          <Link onClick={goToObjectPage}>go to ObjectPage</Link>
        </Route>
        <Route path="/objectPage" component={Page} />
      </Switch>
    </>
  );
};

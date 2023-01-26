import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  ShellBar,
  Label,
  Link,
  Form,
  FormItem,
  Text,
  Input,
  Button,
  VBox
} from "@ui5/webcomponents-react";

import { Page } from "./objectPage";

export const Layout = () => {
  const navigate = useHistory();
  const goToObjectPage = () => navigate.push("/objectPage");
  const logon = () => navigate.push("/objectPage");


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

      <Form
        style={{
          alignItems: 'center'
        }}
        titleText="Login Form"
      >
        <FormItem label="Email">
          <Input
            id="email"
            enabled="true"
            type="String"
            value="acastro@magenta-it-com"
            placeholder="email"
          />
        </FormItem>

        <FormItem label="Password">
          <Input
            id="password"
            enabled="true"
            type="Password"
            value="inicio01"
            placeholder="password"
          />
        </FormItem>
        <FormItem>
          <Button
            style={{
              alignItems: 'center'
            }}
            icon="employee"
            onClick={logon}
          >
            Login
          </Button>
        </FormItem>
      </Form>

    </>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";
import {
  ObjectPage,
  ObjectPageSection,
  Form,
  FormItem,
  Link,
  Text
} from "@ui5/webcomponents-react";

export const Page = () => {
  const navigate = useHistory();
  const navBack = () => navigate.go(-1);

  return (
    <>
      <Link onClick={navBack}>go back</Link>
      <ObjectPage title="Small Object Page">
        <ObjectPageSection title="Test1" id="test-1">
          <Form>
            <FormItem label="NavBack">
              <Text>
                <Link onClick={navBack}>go back</Link>
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
        <ObjectPageSection title="Test2" id="test-2">
          <Form>
            <FormItem label="NavBack">
              <Text>
                <Link onClick={navBack}>go back</Link>
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
      </ObjectPage>
    </>
  );
};

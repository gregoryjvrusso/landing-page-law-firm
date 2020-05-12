import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../Text";

storiesOf("Elements/Text", module)
  .add("default", () => (
    <div>
      <Text textAlign="left" color="green">
        Hello Left
      </Text>
      <Text textAlign="center" color="blue">
        Hello Center
      </Text>
      <Text textAlign="right">Hello Right</Text>
    </div>
  ))
  .add("Font Weight", () => (
    <div>
      <Text fontWeight="bold">Hello bold</Text>
      <Text fontWeight="normal">Hello normal</Text>
      <Text fontWeight="900">Hello 900</Text>
      <Text fontStyle="italic">Hello italic</Text>
    </div>
  ))
  .add("Color", () => (
    <div>
      <Text color="blue">Hello Blue</Text>
      <Text color="green">Hello Green</Text>
    </div>
  ));

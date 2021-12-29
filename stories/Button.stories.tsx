import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../src";

storiesOf("Button", module)
  .add("Default", () => <Button disabled={false}>Default</Button>)
  .add("Normal", () => (
    <Button
      disabled={false}
      width="300px"
      height="45px"
      bgColor="#FFB200"
      borderRadius="5px"
      color="#ffffff"
    >
      Normal
    </Button>
  ))
  .add("Disabled", () => (
    <Button
      disabled={true}
      width="300px"
      height="45px"
      bgColor="#FFB200"
      borderRadius="5px"
      color="#ffffff"
    >
      Disabled
    </Button>
  ));

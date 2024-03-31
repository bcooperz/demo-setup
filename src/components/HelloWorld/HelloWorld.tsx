import { useState } from "react";

import styles from "./HelloWorld.module.css";

interface HelloWorldProps {
  msg: string;
}

export default function HelloWorld({ msg }: HelloWorldProps) {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

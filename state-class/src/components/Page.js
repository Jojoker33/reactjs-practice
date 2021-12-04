import React from "react";
import CountingParent from "./CountingParent";
/**
 * Component used to prove that each component will have an independent context
 */
export const Page = () => (
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
  </div>
);

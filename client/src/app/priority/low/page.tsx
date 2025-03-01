import { Priority } from "@/state/api";
import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Urgent;

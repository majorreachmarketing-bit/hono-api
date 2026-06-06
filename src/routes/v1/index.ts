import { Hono } from "hono";
import states from "./states.js";

const v1 = new Hono();

v1.route("/states", states);

export default v1;

import { Hono } from "hono";
import { STATES } from "../../data/states.js";
import { DEADLINES } from "../../data/deadlines.js";
import { DOE_URLS } from "../../data/doe-urls.js";

const states = new Hono();

states.get("/", (c) => {
  const tier = c.req.query("tier");
  const base = tier ? STATES.filter((s) => s.complianceTier === tier) : STATES;
  const data = base.map((s) => ({ ...s, doeUrl: DOE_URLS[s.abbreviation] ?? null }));
  return c.json({ count: data.length, states: data });
});

// Must be before /:code to avoid route collision
states.get("/:code/deadlines", (c) => {
  const code = c.req.param("code").toUpperCase();
  const state = STATES.find((s) => s.abbreviation === code);
  if (!state) return c.json({ error: "State not found" }, 404);
  const entry = DEADLINES.find((d) => d.abbreviation === code);
  return c.json({
    abbreviation: code,
    name: state.name,
    complianceTier: state.complianceTier,
    deadlines: entry?.deadlines ?? [],
  });
});

states.get("/:code", (c) => {
  const code = c.req.param("code").toUpperCase();
  const state = STATES.find((s) => s.abbreviation === code);
  if (!state) return c.json({ error: "State not found" }, 404);
  return c.json({ ...state, doeUrl: DOE_URLS[code] ?? null });
});

export default states;

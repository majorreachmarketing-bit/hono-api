export type DeadlineType = "notice" | "assessment" | "portfolio" | "renewal";

export interface Deadline {
  type: DeadlineType;
  label: string;
  /** Fixed calendar due date as MM-DD, null when deadline is relative or there is none */
  dueMD: string | null;
  /** Days after the trigger event (e.g. 30 days from withdrawal), null when fixed or none */
  relativeDays: number | null;
  /** What the relative count is measured from */
  relativeTo: string | null;
  recurring: boolean;
  notes: string | null;
}

export interface StateDeadlines {
  abbreviation: string;
  deadlines: Deadline[];
}

export const DEADLINES: StateDeadlines[] = [
  {
    abbreviation: "AL",
    deadlines: [
      { type: "notice", label: "Annual notice to local school board", dueMD: "10-01", relativeDays: null, relativeTo: null, recurring: true, notes: "Must also notify within 10 days of beginning instruction if mid-year." },
      { type: "assessment", label: "Annual student assessment results submitted", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "AK",
    deadlines: [],
  },
  {
    abbreviation: "AZ",
    deadlines: [
      { type: "notice", label: "One-time affidavit filed with county superintendent", dueMD: null, relativeDays: 30, relativeTo: "beginning of home instruction", recurring: false, notes: "One-time filing only; no annual renewal required." },
    ],
  },
  {
    abbreviation: "AR",
    deadlines: [
      { type: "notice", label: "Annual notice to local school district", dueMD: null, relativeDays: null, relativeTo: null, recurring: true, notes: "Must be filed before instruction begins each school year." },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "05-31", relativeDays: null, relativeTo: null, recurring: true, notes: "Results kept by parent; not submitted to district." },
    ],
  },
  {
    abbreviation: "CA",
    deadlines: [
      { type: "notice", label: "Private school affidavit (PSA) filed with state", dueMD: "10-15", relativeDays: null, relativeTo: null, recurring: true, notes: "Filed each year between October 1–15." },
    ],
  },
  {
    abbreviation: "CO",
    deadlines: [
      { type: "notice", label: "Annual notice to school district", dueMD: null, relativeDays: 14, relativeTo: "start of instruction", recurring: true, notes: null },
      { type: "assessment", label: "Biennial standardized test or evaluation", dueMD: null, relativeDays: null, relativeTo: null, recurring: true, notes: "Required every other year. Results submitted to district within 12 months of assessment." },
    ],
  },
  {
    abbreviation: "CT",
    deadlines: [
      { type: "notice", label: "Annual notice and proposed study plan to local board", dueMD: null, relativeDays: null, relativeTo: "start of school year", recurring: true, notes: "Board has 10 days to approve or deny." },
      { type: "portfolio", label: "Annual portfolio review by board", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "DE",
    deadlines: [
      { type: "notice", label: "Annual enrollment exemption filed with district", dueMD: null, relativeDays: null, relativeTo: "start of school year", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "FL",
    deadlines: [
      { type: "notice", label: "Annual notice to county superintendent", dueMD: null, relativeDays: 30, relativeTo: "beginning of home instruction", recurring: true, notes: "Must re-notify within 30 days of each school year start." },
      { type: "assessment", label: "Annual portfolio review or standardized test", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Portfolio must be kept and made available; evaluator must submit annual statement." },
    ],
  },
  {
    abbreviation: "GA",
    deadlines: [
      { type: "notice", label: "Annual declaration of intent to superintendent", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: "Must also notify within 30 days of withdrawing from public school." },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Results retained by parent; available to superintendent on request." },
    ],
  },
  {
    abbreviation: "HI",
    deadlines: [
      { type: "notice", label: "Annual intent notice to Hawaii DOE", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "renewal", label: "Quarterly progress reports to DOE", dueMD: null, relativeDays: null, relativeTo: "end of each quarter", recurring: true, notes: "Four reports per year required." },
    ],
  },
  {
    abbreviation: "ID",
    deadlines: [],
  },
  {
    abbreviation: "IL",
    deadlines: [],
  },
  {
    abbreviation: "IN",
    deadlines: [],
  },
  {
    abbreviation: "IA",
    deadlines: [
      { type: "notice", label: "Annual CPI form filed with local school district", dueMD: "10-01", relativeDays: null, relativeTo: null, recurring: true, notes: "Window is September 1 – October 1." },
    ],
  },
  {
    abbreviation: "KS",
    deadlines: [
      { type: "notice", label: "One-time non-accredited private school registration", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: false, notes: "One-time filing; no annual renewal." },
    ],
  },
  {
    abbreviation: "KY",
    deadlines: [
      { type: "notice", label: "Annual notice to local school district", dueMD: null, relativeDays: null, relativeTo: "start of school year", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "LA",
    deadlines: [
      { type: "notice", label: "Annual approval application to BESE", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Results submitted to the approving body." },
    ],
  },
  {
    abbreviation: "ME",
    deadlines: [
      { type: "notice", label: "Annual notice to local superintendent", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Annual assessment results submitted", dueMD: "07-01", relativeDays: null, relativeTo: null, recurring: true, notes: "Must be submitted by July 1 following the school year." },
    ],
  },
  {
    abbreviation: "MD",
    deadlines: [
      { type: "notice", label: "Annual notice to local school superintendent", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "portfolio", label: "Annual portfolio review by local school official", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: "Portfolio must demonstrate satisfactory progress in required subjects." },
    ],
  },
  {
    abbreviation: "MA",
    deadlines: [
      { type: "notice", label: "Annual approval application to local school committee", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: "Committee must approve curriculum and qualifications before each year begins." },
      { type: "assessment", label: "Annual progress assessment submitted to committee", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: "Format varies by district." },
    ],
  },
  {
    abbreviation: "MI",
    deadlines: [],
  },
  {
    abbreviation: "MN",
    deadlines: [
      { type: "notice", label: "Annual notice to local school district", dueMD: "10-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "MS",
    deadlines: [
      { type: "notice", label: "Annual enrollment in home education program", dueMD: "09-15", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "MO",
    deadlines: [],
  },
  {
    abbreviation: "MT",
    deadlines: [
      { type: "notice", label: "Annual notice to county school superintendent", dueMD: "10-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "NE",
    deadlines: [
      { type: "notice", label: "Annual exempt school filing with Nebraska DOE", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "NV",
    deadlines: [
      { type: "notice", label: "Annual notice of intent to school district", dueMD: null, relativeDays: 10, relativeTo: "beginning of home instruction or school year", recurring: true, notes: null },
      { type: "assessment", label: "Annual assessment results submitted", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "NH",
    deadlines: [
      { type: "notice", label: "Annual notice to school district or commissioner", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: null },
      { type: "assessment", label: "Annual assessment results submitted", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: "Results submitted to the notified official." },
    ],
  },
  {
    abbreviation: "NJ",
    deadlines: [],
  },
  {
    abbreviation: "NM",
    deadlines: [
      { type: "notice", label: "Annual notice to New Mexico PED", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "NY",
    deadlines: [
      { type: "notice", label: "Annual Individualized Home Instruction Plan (IHIP) submitted", dueMD: "07-01", relativeDays: null, relativeTo: null, recurring: true, notes: "IHIP must list objectives, materials, and schedule for each subject." },
      { type: "renewal", label: "Quarterly reports submitted to school district", dueMD: null, relativeDays: null, relativeTo: "end of each quarter", recurring: true, notes: "Four quarterly reports required per school year." },
      { type: "assessment", label: "Annual assessment results submitted", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: "Results submitted with the final quarterly report." },
    ],
  },
  {
    abbreviation: "NC",
    deadlines: [
      { type: "notice", label: "Annual notice to NC Division of Non-Public Education", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Results retained by parent; not submitted to state." },
    ],
  },
  {
    abbreviation: "ND",
    deadlines: [
      { type: "notice", label: "Annual notice to local school board", dueMD: null, relativeDays: 14, relativeTo: "start of instruction", recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Required if parent is not certified." },
    ],
  },
  {
    abbreviation: "OH",
    deadlines: [
      { type: "notice", label: "Annual notification to local superintendent", dueMD: null, relativeDays: null, relativeTo: "by the first day of public school", recurring: true, notes: null },
      { type: "assessment", label: "Annual assessment submitted to superintendent", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "OK",
    deadlines: [],
  },
  {
    abbreviation: "OR",
    deadlines: [
      { type: "notice", label: "Annual notice to local ESD", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Triennial standardized test or evaluation (grades 3, 5, 8, 10)", dueMD: null, relativeDays: null, relativeTo: "end of applicable school year", recurring: true, notes: "Required in grades 3, 5, 8, and 10." },
    ],
  },
  {
    abbreviation: "PA",
    deadlines: [
      { type: "notice", label: "Annual affidavit filed with local superintendent", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "portfolio", label: "Annual portfolio evaluation submitted", dueMD: null, relativeDays: null, relativeTo: "within 30 days of the end of the school year", recurring: true, notes: "Evaluation must be conducted by a certified teacher or licensed psychologist." },
    ],
  },
  {
    abbreviation: "RI",
    deadlines: [
      { type: "notice", label: "Annual approval application to local school committee", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: null },
      { type: "portfolio", label: "Annual portfolio and progress reports submitted", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "SC",
    deadlines: [
      { type: "notice", label: "Annual enrollment with accountability organization or district", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Results kept by parent or accountability organization." },
    ],
  },
  {
    abbreviation: "SD",
    deadlines: [
      { type: "notice", label: "Annual notice to local school district", dueMD: "09-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Standardized test in grades 2, 4, 8, and 11", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Required only in grades 2, 4, 8, and 11." },
    ],
  },
  {
    abbreviation: "TN",
    deadlines: [
      { type: "notice", label: "Annual notice to local school director", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test (grades 5 and above)", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: "Required beginning in grade 5." },
    ],
  },
  {
    abbreviation: "TX",
    deadlines: [],
  },
  {
    abbreviation: "UT",
    deadlines: [
      { type: "notice", label: "Annual notice to local school board", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "VT",
    deadlines: [
      { type: "notice", label: "Annual enrollment notice to local school board", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: null },
      { type: "assessment", label: "Annual assessment submitted", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "portfolio", label: "Annual portfolio or evaluation submitted", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "VA",
    deadlines: [
      { type: "notice", label: "Annual notice to school division superintendent", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Annual evidence of progress submitted", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: "Evidence options include test results, portfolio, or evaluation letter." },
    ],
  },
  {
    abbreviation: "WA",
    deadlines: [
      { type: "notice", label: "Annual notice to local school district", dueMD: "09-15", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test or evaluation", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: "Results submitted to the district." },
    ],
  },
  {
    abbreviation: "WV",
    deadlines: [
      { type: "notice", label: "Annual notice to county superintendent", dueMD: "08-01", relativeDays: null, relativeTo: null, recurring: true, notes: null },
      { type: "portfolio", label: "Annual portfolio review", dueMD: null, relativeDays: null, relativeTo: "end of school year", recurring: true, notes: null },
      { type: "assessment", label: "Annual standardized test administered", dueMD: "06-30", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "WI",
    deadlines: [
      { type: "notice", label: "Annual PIE form submitted to Wisconsin DPI", dueMD: "10-15", relativeDays: null, relativeTo: null, recurring: true, notes: null },
    ],
  },
  {
    abbreviation: "WY",
    deadlines: [
      { type: "notice", label: "Annual notice to county school district", dueMD: null, relativeDays: null, relativeTo: "before instruction begins", recurring: true, notes: null },
    ],
  },
];

// Blog content — the single source of truth for blog posts.
// A post becomes PUBLIC only when it is manually `published` AND its scheduled
// `publishedTime` has arrived (publishedTime <= now). A future-dated post stays
// hidden everywhere — hub, route, related links, navigation, sitemap, metadata,
// and schema — and its route returns 404 until the scheduled time passes.
//
// The five articles below are faithful reproductions of the supplied source
// drafts (one per tab), converted into the reusable BlogBlocks presentation.
// Only the HTML shell, inline CSS, scripts, source JSON-LD, duplicated site
// chrome, and base64 images were removed; wording, section order, tables,
// pricing ranges, checklists, comparisons, safety steps, FAQs, and internal
// links are preserved from the source. Each post is self-canonical.
import type { BlogBlock, Faq } from "@/lib/types";

export type BlogPost = {
  slug: string;
  /** Short card / list label. */
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary for cards, related-link lists, and OG description. */
  excerpt: string;
  /** Longer hero standfirst rendered under the H1. */
  heroIntro?: string;
  /** Answer-first paragraph, rendered above the body. */
  quickAnswer: string;
  /**
   * ISO 8601 publish datetime and the SCHEDULE time. The post is hidden until
   * this moment passes. Also used for article OG, byline, and sitemap.
   */
  publishedTime: string;
  /** ISO 8601 last-updated datetime, optional. */
  updatedTime?: string;
  /** Byline author name. */
  author?: string;
  /**
   * Manual publish switch. Must be `true` AND `publishedTime` must have passed
   * for the post to be public.
   */
  published: boolean;
  /**
   * Primary search URL when a post deliberately defers to another page. Leave
   * undefined for a self-canonical post (the default for all posts here).
   */
  canonicalPath?: string;
  /** Structured article body: prose, tables, stats, comparisons, callouts. */
  blocks: BlogBlock[];
  /** Optional FAQ block appended below the body. */
  faqs?: Faq[];
  /** Internal links rendered by the shared RelatedLinks card list. */
  relatedLinks?: { label: string; href: string; description?: string }[];
  /** Slugs of related posts to cross-link (each still gated by the public rule). */
  relatedPosts?: string[];
};

export const blogPosts: BlogPost[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // POST 1 — Tab 1: How Much Does Stove Repair Cost in San Mateo, CA?
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "stove-repair-cost-san-mateo-2026-guide",
    title: "How Much Does Stove Repair Cost in San Mateo, CA? 2026 Local Price Guide",
    h1: "How Much Does Stove Repair Cost in San Mateo, CA?",
    metaTitle: "How Much Does Stove Repair Cost in San Mateo, CA? 2026 Guide",
    metaDescription:
      "Most stove repairs in San Mateo, CA cost $150 to $500+, depending on the stove type, failed part, labor time, appliance brand, and whether the repair is urgent.",
    excerpt:
      "A 2026 local price guide: what stove repair costs in San Mateo, what affects pricing, gas vs electric, repair-vs-replace, and when a repair is an emergency.",
    heroIntro:
      "Most stove repairs in San Mateo, CA cost $150 to $500+, depending on the stove type, failed part, labor time, appliance brand, and whether the repair is urgent.",
    quickAnswer:
      "Most stove repairs in San Mateo, CA cost $150 to $500+, depending on the stove type, failed part, labor time, appliance brand, and how urgent the repair is. Simple issues like a loose knob, burner problem, igniter replacement, or heating element repair are usually more affordable. Gas valve problems, control board failure, electrical issues, or emergency repairs can cost more.",
    publishedTime: "2026-07-23T13:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    blocks: [
      {
        kind: "prose",
        heading: "Quick Answer: Stove Repair Cost in San Mateo, CA",
        anchor: "quick-answer",
        body: [
          "For San Mateo homeowners, the best first step is to schedule a local diagnostic visit. A technician can inspect the stove, explain the exact problem, provide a clear estimate, and help you decide whether repair or replacement makes more sense.",
          "If your stove smells like gas, sparks, smokes, trips the breaker, or has a burner that will not shut off, treat it as urgent and request emergency stove repair right away.",
        ],
      },
      {
        kind: "stats",
        heading: "Quick Stove Repair Pricing Summary in San Mateo",
        anchor: "pricing-summary",
        items: [
          { value: "$75–$150+", label: "Basic diagnostic visit" },
          { value: "$150–$350", label: "Common stove repair" },
          { value: "$250–$500", label: "Moderate repair" },
          { value: "$400–$700+", label: "Complex repair" },
          { value: "$250–$650+", label: "Emergency repair" },
        ],
        footnote:
          "These ranges are planning estimates. Your final price depends on diagnosis, parts, labor, urgency, and the condition of the appliance.",
      },
      {
        kind: "prose",
        body: [
          "If your stove is not heating, clicking without ignition, giving off a gas smell, or tripping the breaker, request a Stove Repair Estimate San Mateo before the problem gets worse.",
        ],
        links: [{ label: "Request a local estimate", href: "/contact/" }],
      },
      {
        kind: "prose",
        heading: "What Stove Repair Usually Costs in San Mateo",
        anchor: "usual-costs",
        body: [
          "The Average Stove Repair Cost in San Mateo is usually in the low-to-mid hundreds for common problems. Many local homeowners call for stove service because one burner stops working, the stove will not ignite, the electric element is not heating, or the cooktop is acting unpredictably.",
          "Simple repairs usually cost less because they involve common parts and shorter labor time. More complex repairs cost more when the technician has to access internal components, test electrical systems, check gas flow, replace a board, or order a brand-specific part.",
          "Common Local Cost Ranges:",
        ],
        bullets: [
          "$75–$150+ for diagnosis",
          "$150–$350 for common part replacement",
          "$250–$500 for moderate repairs",
          "$400–$700+ for complex electronic or control problems",
          "$250–$650+ for urgent or emergency stove repair",
        ],
        footnote:
          "For general local service, start with Stove Repair San Mateo if you need help with a burner, igniter, stove top, range, or cooktop issue.",
        links: [{ label: "Stove Repair San Mateo", href: "/services/stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "What Affects Stove Repair Pricing?",
        anchor: "pricing-factors",
        body: [
          "1. The Type of Stove. Gas and electric stoves have different repair needs. A gas stove may involve burners, igniters, spark modules, gas valves, flame adjustment, or gas safety checks. An electric stove may involve heating elements, burner switches, sockets, wiring, thermostats, or control boards.",
          "For gas-related symptoms, use Gas Stove Repair San Mateo. For heating, power, breaker, or element problems, use Electric Stove Repair San Mateo.",
          "2. The Failed Part. A knob or burner cap is usually less expensive than a control board or gas valve. A small part can still cause a big problem, so diagnosis matters.",
        ],
        links: [
          { label: "Gas Stove Repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/" },
          { label: "Electric Stove Repair San Mateo", href: "/services/electric-stove-repair-san-mateo-ca/" },
        ],
      },
      {
        kind: "compare",
        left: {
          title: "Common Lower-Cost Parts",
          items: ["Knobs and control parts", "Burner caps", "Burner sockets", "Some igniters", "Basic switches"],
        },
        right: {
          title: "Parts That Can Cost More",
          items: ["Gas valves", "Control boards", "Spark modules", "Wiring harnesses", "Brand-specific components"],
        },
      },
      {
        kind: "prose",
        body: [
          "3. Labor, Brand, Urgency, and Appliance Age. Some repairs are quick. Others require taking apart the stove, testing circuits, checking gas flow, or confirming that the appliance is safe to use after repair. Standard parts are usually easier to price than high-end, imported, discontinued, or older appliance parts. Emergency or same-day service may also cost more, especially if there is gas smell, smoke, sparks, or a stove that will not shut off.",
        ],
      },
      {
        kind: "table",
        heading: "Detailed Stove Repair Cost Table",
        anchor: "pricing-table",
        caption: "Typical stove repair ranges in San Mateo by problem, with the factors that affect price",
        columns: ["Problem or Issue", "Typical Repair Range", "What Affects the Price", "Urgent?", "Usually Worth Repairing?"],
        rows: [
          ["Igniter repair or replacement", "$175–$350", "Igniter type, gas model, burner access, labor time", "Sometimes", "Yes, usually"],
          ["Burner not working", "$150–$325", "Clogged burner, failed switch, wiring, socket, burner element", "Usually not", "Yes"],
          ["Gas valve issue", "$250–$600+", "Valve type, gas testing, leak risk, part availability", "Yes", "Often"],
          ["Heating element replacement", "$175–$375", "Element type, wiring condition, electric stove model", "Sometimes", "Yes"],
          ["Control board issue", "$350–$700+", "Board cost, model, programming, part availability", "Sometimes", "Depends on age"],
          ["Thermostat or sensor issue", "$175–$400", "Sensor type, calibration, oven access, part cost", "Usually not", "Yes"],
          ["Clicking but no flame", "$150–$350", "Moisture, dirty burner, weak igniter, spark module", "Sometimes", "Yes"],
          ["Emergency repair", "$250–$650+", "Urgency, gas smell, smoke, sparks, after-hours needs", "Yes", "Yes for safety"],
        ],
        footnote:
          "A table can help you plan, but it cannot replace diagnosis. The same symptom can have different causes. For example, a burner that will not light may be caused by food buildup, a weak igniter, a loose connection, or a gas flow issue.",
      },
      {
        kind: "table",
        heading: "Gas vs Electric Stove Repair Cost Differences",
        anchor: "gas-vs-electric",
        caption: "How gas, electric, range, and cooktop repairs compare",
        columns: ["Service Type", "Common Problems", "Typical Price Tendency", "Urgency Level", "Best Next Step"],
        rows: [
          ["Gas stove repair", "Clicking, no ignition, uneven flame, gas smell, burner won't light", "Medium to high if valves or safety testing are involved", "High if gas smell is present", "Stop using the burner and schedule gas stove service"],
          ["Electric stove repair", "Burner not heating, bad element, switch failure, breaker tripping", "Low to high depending on part", "High if sparks or burning smell occur", "Schedule electrical diagnosis"],
          ["Range repair", "Oven and cooktop problems in one appliance", "Medium", "Depends on symptom", "Identify whether oven, cooktop, or controls failed"],
          ["Cooktop repair", "Glass top issue, built-in burner failure, touchpad problem", "Medium to high", "High if glass is cracked or wiring is exposed", "Compare repair cost with replacement"],
        ],
      },
      {
        kind: "prose",
        body: [
          "If your appliance includes both an oven and stovetop, schedule Range Repair San Mateo. If your issue is with a built-in cooktop, glass top, or surface burner system, schedule Cooktop Repair San Mateo.",
        ],
        links: [
          { label: "Range Repair San Mateo", href: "/services/range-repair-san-mateo-ca/" },
          { label: "Cooktop Repair San Mateo", href: "/services/cooktop-repair-san-mateo-ca/" },
        ],
      },
      {
        kind: "cta",
        heading: "Need a price for your stove repair?",
        subheading: "Get a local estimate before replacing your stove, range, or cooktop.",
      },
      {
        kind: "prose",
        heading: "Should You Repair or Replace Your Stove?",
        anchor: "repair-vs-replace",
        body: [
          "Repair usually makes sense when the stove still has useful life left and the problem is isolated. Replacement may make more sense when the appliance is older, unsafe, or has repeated major failures.",
        ],
      },
      {
        kind: "compare",
        left: {
          title: "Repair Is Usually Better When",
          items: [
            "The stove is less than 10 years old",
            "The repair costs less than 50% of replacement",
            "Only one part has failed",
            "Parts are available",
            "The appliance has been reliable",
            "The problem is clear and fixable",
            "The issue is common, like an igniter, burner, switch, sensor, or heating element",
          ],
        },
        right: {
          title: "Replacement May Be Better When",
          items: [
            "The stove is very old",
            "The same problem keeps returning",
            "Multiple parts are failing",
            "Parts are discontinued or expensive",
            "The control board repair is close to replacement cost",
            "The glass cooktop is badly cracked",
            "There is repeated gas or electrical safety risk",
          ],
        },
      },
      {
        kind: "table",
        heading: "Fast Decision Guide",
        anchor: "decision-guide",
        caption: "Common stove situations and the choice they usually point to",
        columns: ["Situation", "Best Choice"],
        rows: [
          ["One burner stopped working", "Repair"],
          ["Igniter failed on a working gas stove", "Repair"],
          ["Electric element burned out", "Repair"],
          ["Stove is old and needs a costly control board", "Compare replacement"],
          ["Multiple recent repairs", "Consider replacement"],
          ["Repeated gas smell or electrical hazard", "Safety inspection first"],
          ["Repair is under half the cost of replacement", "Usually repair"],
        ],
        footnote:
          "The safest next step is to get a local diagnosis before buying a new appliance. A repair may be much cheaper than replacement, especially when the issue is limited to one part.",
      },
      {
        kind: "checklist",
        heading: "Common Stove Problems in San Mateo Homes",
        anchor: "common-problems",
        intro: ["San Mateo homeowners often request stove repair for problems like:"],
        items: [
          "Stove not heating",
          "Burner not igniting",
          "Clicking but no flame",
          "Gas smell near the stove",
          "Uneven flame",
          "Yellow or orange flame",
          "Broken knobs",
          "Loose controls",
          "Electrical failure",
          "Breaker tripping",
          "Temperature inconsistency",
          "Control panel not responding",
          "Burner turning on and off",
          "Cooktop surface damage",
          "Stove heating too slowly",
          "Power or display failure",
        ],
        footnote:
          "Some of these issues are simple. Others need fast attention. For example, an electric burner that will not heat may be a failed element, switch, socket, or wiring issue. A gas burner that keeps clicking may be caused by moisture, food debris, a misaligned burner cap, a weak igniter, or spark module failure.",
      },
      {
        kind: "prose",
        body: [
          "If you have more than one stove, range, or cooktop issue in the kitchen, Stove Repair San Mateo may be the better service option.",
        ],
        links: [{ label: "Stove Repair San Mateo", href: "/services/stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "When Is Stove Repair an Emergency?",
        anchor: "emergency-repair",
        body: [
          "A stove problem becomes urgent when there is a safety risk, gas risk, electrical risk, or loss of control over the appliance.",
          "Call for Emergency Stove Repair San Mateo if you notice gas smell, rotten egg odor, hissing near the stove, sparks, smoke, burning electrical smell, a burner that will not shut off, exposed wiring, repeated breaker trips, unstable flame, overheating, or controls that do not respond.",
        ],
        links: [{ label: "Emergency Stove Repair San Mateo", href: "/services/emergency-stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "callout",
        tone: "safety",
        heading: "If You Suspect a Gas Leak",
        body: [
          "If you suspect a gas leak, do not keep testing the burner. Leave the area, avoid flames and electrical switches, and contact the proper utility or emergency service from a safe location. Consumer safety guidance warns that gas leaks can create fire and explosion risks, so suspected leaks should be handled immediately by trained professionals.",
        ],
        links: [{ label: "PG&E gas safety guidance", href: "https://www.pge.com/en/outages-and-safety/safety/gas-safety.html" }],
      },
      {
        kind: "prose",
        heading: "Why Local San Mateo Stove Repair Matters",
        anchor: "local-service",
        body: [
          "Local service matters because stove problems are time-sensitive. When a cooking appliance fails, most homeowners do not want a long delay, vague estimate, or technician who is unfamiliar with the area.",
          "Choosing local San Mateo service can help with:",
        ],
        bullets: [
          "Faster response when scheduling allows",
          "Better familiarity with local homes, condos, apartments, and rental properties",
          "More practical estimate guidance",
          "Easier follow-up service if a part needs to be ordered",
          "Better understanding of Peninsula and Bay Area scheduling needs",
          "Clearer communication for urgent stove problems",
        ],
      },
      {
        kind: "prose",
        body: [
          "Whether you are near Downtown San Mateo, Hillsdale, Bay Meadows, Beresford, Hayward Park, Shoreview, or nearby Peninsula neighborhoods, local repair support can make the process easier.",
          "People searching Stove Repair Near Me San Mateo usually want three things: fast help, a fair estimate, and confidence that the stove can be fixed safely. That is why a local estimate is often the best next step.",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        heading: "Illustrative Example: Gas Burner Clicking but Not Lighting in San Mateo",
        body: [
          "This example describes a common repair scenario and is not a claim about a specific customer job.",
          "Problem: A San Mateo homeowner had a front gas burner that kept clicking but would not ignite consistently. The burner occasionally lit after several attempts, but the flame looked weak and uneven.",
          "Diagnosis: The technician inspected the burner cap, igniter, spark connection, burner ports, and gas flow. The issue was a weak igniter combined with buildup around the burner area.",
          "Repair Approach: The technician cleaned the burner assembly, adjusted the burner cap, tested the spark, and replaced the weak igniter.",
          "Estimated Cost Range: The estimated repair range was $200–$350, depending on the igniter part, labor time, and stove model.",
          "Result: The burner started lighting normally. The clicking stopped after ignition, and the flame returned to a steady blue pattern.",
          "This type of repair is common because the symptom seems simple, but the cause can be cleaning, alignment, ignition failure, wiring, or a part issue. A diagnostic visit prevents guesswork and helps avoid unnecessary replacement.",
        ],
      },
      {
        kind: "prose",
        heading: "Request a Stove Repair Estimate in San Mateo, CA",
        anchor: "estimate",
        body: [
          "If your stove is not heating, your burner will not ignite, your electric cooktop is failing, or you smell gas near the appliance, do not wait for the issue to get worse.",
          "A local diagnostic visit can help you find out what failed, whether the stove is safe to use, what the repair may cost, whether repair or replacement makes more sense, and how soon the repair can be completed.",
          "Contact Stove Repair San Mateo CA today for stove repair, gas stove repair, electric stove repair, range repair, cooktop repair, emergency stove repair, and local appliance repair help in San Mateo and nearby Peninsula areas.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does stove repair cost in San Mateo, CA?",
        answer:
          "Stove repair cost in San Mateo, CA usually ranges from $150 to $500+, depending on the stove problem, parts, labor, brand, and urgency. Simple burner, knob, igniter, or heating element repairs may cost less, while gas valve, control board, or emergency repairs may cost more.",
      },
      {
        question: "What is the average stove repair cost?",
        answer:
          "The Average Stove Repair Cost is usually in the low-to-mid hundreds for common problems. In San Mateo, the final cost depends on the failed part, stove type, local labor, parts availability, and whether you need standard or urgent service.",
      },
      {
        question: "How much is a stove diagnostic fee?",
        answer:
          "A stove diagnostic fee commonly ranges from $75 to $150+, depending on the service provider, location, and urgency. The diagnostic visit confirms the problem before you approve parts and labor.",
      },
      {
        question: "Is it cheaper to repair or replace a stove?",
        answer:
          "It is usually cheaper to repair a stove if the appliance is under 10 years old, the repair cost is less than half the cost of replacement, and only one part has failed. Replacement may make more sense for older stoves with repeated failures or expensive control board problems.",
      },
      {
        question: "Do you repair both gas and electric stoves?",
        answer:
          "Yes. Local stove repair service can cover gas stoves, electric stoves, ranges, and cooktops. Common repairs include igniters, burners, elements, switches, thermostats, sensors, knobs, control panels, and wiring.",
      },
      {
        question: "Do you offer emergency stove repair in San Mateo?",
        answer:
          "Emergency stove repair is recommended for gas smell, sparks, smoke, burning odors, exposed wiring, repeated breaker trips, or a burner that will not shut off. These issues should be handled quickly because they can create safety risks.",
      },
      {
        question: "What affects Stove Repair Cost San Mateo CA the most?",
        answer:
          "The biggest factors are the failed part, stove type, appliance age, brand, labor time, part availability, and urgency. Gas-related repairs may also require safety testing, which can affect the estimate.",
      },
      {
        question: "Do you service ranges and cooktops too?",
        answer:
          "Yes. If your appliance combines an oven and stovetop, request Range Repair San Mateo. If the issue is with a built-in or glass-top cooking surface, request Cooktop Repair San Mateo.",
      },
    ],
    relatedLinks: [
      { label: "Gas Stove Repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Igniters, valves, and gas-flow faults." },
      { label: "Electric Stove Repair San Mateo", href: "/services/electric-stove-repair-san-mateo-ca/", description: "Elements, sockets, switches, and controls." },
      { label: "Range Repair San Mateo", href: "/services/range-repair-san-mateo-ca/", description: "Appliances combining an oven and cooktop." },
      { label: "Cooktop Repair San Mateo", href: "/services/cooktop-repair-san-mateo-ca/", description: "Built-in, glass-top, and surface burner systems." },
      { label: "Emergency Stove Repair San Mateo", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Gas odor, sparking, smoke, or a burner that will not stop." },
      { label: "Request a Stove Repair Estimate", href: "/contact/", description: "Get a local estimate for your stove." },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POST 2 — Tab 2: Gas Stove Clicking But Not Lighting?
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "gas-stove-clicking-after-cleaning-spill",
    title: "Gas Stove Clicking But Not Lighting? Gas Stove Repair San Mateo",
    h1: "Gas Stove Clicking But Not Lighting? Gas Stove Repair San Mateo",
    metaTitle: "Gas Stove Clicking But Not Lighting? Gas Stove Repair San Mateo",
    metaDescription:
      "Learn why your gas stove clicks but does not light, what safety steps to take right now, and when a local technician should inspect the burner, igniter, or controls.",
    excerpt:
      "Why a gas stove clicks but does not light, the immediate gas-safety steps, DIY limits, and when to call a local San Mateo stove repair technician.",
    heroIntro:
      "Learn why your gas stove clicks but does not light, what safety steps to take right now, and when a local technician should inspect the burner, igniter, gas flow, or controls.",
    quickAnswer:
      "Gas Stove Clicking But Not Lighting usually means the igniter is trying to spark, but the burner is not catching flame. If you need Gas Stove Repair San Mateo, the issue often comes from moisture, grease buildup, burner cap misalignment, weak ignition parts, or a gas flow problem. If you smell gas, turn the stove off immediately and stop trying to relight the burner.",
    publishedTime: "2026-07-24T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    blocks: [
      {
        kind: "prose",
        heading: "About This Blog",
        anchor: "about",
        body: [
          "This local guide explains why a gas stove may keep clicking without lighting and what San Mateo homeowners should do next.",
        ],
        bullets: [
          "Common burner and igniter causes",
          "Immediate gas-safety steps",
          "DIY limits and professional repair options",
          "When to call a local stove repair technician",
        ],
      },
      {
        kind: "prose",
        body: [
          "Repeated clicking with no flame can allow unburned gas to build up around the cooktop, which makes this a safety issue instead of a simple cooking inconvenience. In San Mateo, CA, this problem may be solved with careful cleaning, drying wet burner parts, igniter repair, burner service, or stove igniter replacement. A local stove repair technician can inspect the burner, confirm whether the igniter is sparking correctly, and restore safe ignition.",
          "For direct service support, visit Gas Stove Repair San Mateo or call (650) 525-2329.",
        ],
        links: [{ label: "Gas Stove Repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "Why a gas stove clicks but does not light",
        anchor: "why-clicks",
        body: [
          "A gas stove clicks because the ignition system is creating a spark. That spark is supposed to light the gas coming through the burner ports. When the stove clicks but no flame appears, the ignition system is trying to work, but one part of the process is failing.",
          "The clicking sound is normal for a few seconds when a burner lights. It becomes a problem when the Gas Stove Keeps Clicking, the burner does not ignite, or the flame starts and goes out. If one burner fails but the others work, the problem is often local to that burner. If multiple burners fail, the issue may involve gas supply, controls, wiring, or a larger appliance problem.",
        ],
      },
      {
        kind: "table",
        heading: "Main causes of the problem",
        anchor: "causes",
        caption: "Common clicking symptoms, likely causes, and the best action for each",
        columns: ["Symptom", "Likely Cause", "What It Means", "Best Action"],
        rows: [
          ["Burner clicks after cleaning", "Wet burner cap", "Moisture is interrupting ignition", "Turn off stove and dry parts"],
          ["Burner clicks but flame is weak", "Dirty burner ports", "Gas is not flowing evenly", "Clean visible debris or request burner service"],
          ["Spark appears but burner will not light", "Burner cap misalignment", "Gas is not reaching the spark correctly", "Reseat cap when cool"],
          ["No visible spark", "Igniter not sparking", "Electrical ignition issue", "Schedule professional diagnosis"],
          ["Weak spark or delayed flame", "Faulty igniter", "Igniter may be worn or damaged", "Igniter repair or replacement"],
          ["Burner lights then dies", "Gas supply issue", "Flame cannot stay stable", "Stop use and request repair"],
          ["All burners click oddly", "Control or wiring issue", "Ignition circuit may be failing", "Call a local technician"],
        ],
      },
      {
        kind: "prose",
        heading: "Wet burner cap",
        body: [
          "A wet burner cap is one of the most common reasons a gas stove will not light. This often happens after cleaning the cooktop, washing removable burner parts, wiping around the burner with too much water, or after a pot boils over. This is often minor if there is no gas smell and only one burner is affected. If the stove still clicks after drying, the issue is likely deeper than moisture.",
        ],
      },
      {
        kind: "prose",
        heading: "Dirty burner ports",
        body: [
          "Burner ports are the small openings where gas exits before ignition. Grease, crumbs, sauce, and cooked-on debris can block those openings and stop gas from spreading evenly. Dirty ports can cause Gas Burner Not Igniting, weak flame, delayed ignition, or a burner that lights only on one side. Professional gas stove burner repair is safer when the blockage is not visible or the burner still fails after cleaning.",
        ],
      },
      {
        kind: "prose",
        heading: "Burner cap misalignment",
        body: [
          "The burner cap must sit flat and centered on the burner head. If it is tilted, loose, upside down, or slightly off-center, gas may not flow toward the spark correctly. This is usually minor if the cap is simply out of place, but repeated failure after reseating points to an igniter, burner head, or gas flow issue.",
        ],
      },
      {
        kind: "prose",
        heading: "Faulty igniter",
        body: [
          "A faulty igniter is a common reason a Gas Stove Won't Light. The igniter creates the spark that lights the gas. Over time, it can become weak, cracked, dirty, loose, or worn. When the igniter is damaged, cleaning the burner will not restore reliable ignition. For this issue, use Stove Igniter Repair San Mateo.",
        ],
        links: [{ label: "Stove Igniter Repair San Mateo", href: "/services/igniter-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "Igniter not sparking",
        body: [
          "If the Gas Stove Igniter Not Sparking, the burner cannot light normally. The problem may involve the igniter electrode, spark wire, spark switch, ignition module, or electrical connection. This is a serious repair issue because gas may still be released even when the ignition system is not working.",
        ],
      },
      {
        kind: "prose",
        heading: "Gas supply issue",
        body: [
          "A gas supply issue can affect one burner, several burners, or the full appliance. Signs include weak flame, no flame, flame that starts and dies, or a Gas Burner Won't Stay Lit. If gas odor is present, stop using the stove and follow safety steps. For broader emergency and home fire-safety guidance, see Ready.gov Home Fire Safety.",
        ],
        links: [{ label: "Ready.gov Home Fire Safety", href: "https://www.ready.gov/home-fires" }],
      },
      {
        kind: "prose",
        heading: "Electrical or control issue",
        body: [
          "Modern gas ranges and cooktops use electrical ignition parts. If a switch, wire, spark module, or control board fails, the burner may click incorrectly or fail to spark. This usually needs professional diagnosis by a local technician.",
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        heading: "Is it safe to keep trying?",
        body: [
          "No. It is not safe to keep trying if the stove repeatedly clicks but does not light, especially if there is gas odor, hissing, or repeated failed ignition.",
          "Repeated clicking with no ignition can release unburned gas. If the burner knob is open and the flame does not start, gas may collect around the stove. A spark, flame, or electrical source can create danger.",
        ],
        bullets: [
          "Rotten egg or sulfur-like smell",
          "Hissing near the appliance",
          "Clicking with no flame",
          "Burner knob left on accidentally",
          "Flame that lights and goes out",
          "Gas burner that will not stay lit",
        ],
      },
      {
        kind: "checklist",
        heading: "What to do right now",
        anchor: "checklist",
        ordered: true,
        items: [
          "Turn the stove off. Make sure the burner knob is fully in the OFF position.",
          "Stop trying to ignite the burner repeatedly. Repeated attempts can release more gas if ignition is failing.",
          "Open windows or improve ventilation. If gas smell is strong, leave the area instead of staying inside.",
          "Check for visible moisture or debris. Look for spills, wet burner parts, grease, or food around the burner.",
          "If gas smell is present, stop using the stove. Do not test the burner again. Do not use matches, lighters, or open flames.",
          "Shut off gas only if it is safe to do so. Do not move the appliance or force valves if the odor is strong.",
          "Call a local stove repair technician in San Mateo. For Stove Repair San Mateo, call (650) 525-2329.",
        ],
      },
      {
        kind: "cta",
        heading: "Need fast stove repair in San Mateo?",
        subheading: "Call (650) 525-2329 for local service.",
      },
      {
        kind: "prose",
        heading: "Gas Stove Repair San Mateo: Repair options",
        anchor: "repair-options",
        body: [
          "Repair depends on whether the failure is moisture, debris, cap alignment, ignition weakness, a gas flow issue, or an electrical control problem. The right fix starts with diagnosis, not guessing.",
        ],
        bullets: [
          "Drying wet parts — if the problem started after cleaning or a boil-over, the burner parts may need full drying. The cap, burner head, igniter tip, and surrounding area must be dry before the spark can work correctly.",
          "Burner cap reseating — A misaligned burner cap can stop gas from reaching the spark. A technician checks the cap position, burner head fit, and flame pattern after reseating.",
          "Professional diagnosis — Professional diagnosis is needed when cleaning and drying do not solve the issue. The technician checks spark strength, wiring, gas flow, ignition components, and burner condition before replacing parts.",
        ],
      },
      {
        kind: "table",
        heading: "Repair vs DIY vs replacement",
        anchor: "diy-table",
        caption: "Which clicking problems are safe to handle yourself and which need a technician",
        columns: ["Problem", "DIY possible?", "Safety risk", "Best action", "Professional help needed?"],
        rows: [
          ["Wet burner cap after cleaning", "Yes, if no gas smell", "Low", "Turn off stove and dry parts fully", "No, unless clicking continues"],
          ["Burner cap misalignment", "Yes, if burner is cool", "Low to medium", "Reseat the cap correctly", "No, unless burner still fails"],
          ["Light food debris", "Limited", "Medium", "Clean visible debris only", "Yes, if ports remain clogged"],
          ["Faulty igniter", "No", "Medium to high", "Schedule igniter repair", "Yes"],
          ["Igniter not sparking", "No", "High", "Stop testing and request diagnosis", "Yes"],
          ["Gas burner will not stay lit", "No", "High", "Stop using burner", "Yes"],
          ["Gas smell while clicking", "No", "High", "Stop use and leave if odor is strong", "Yes, emergency help may be needed"],
          ["Multiple burners not lighting", "No", "Medium to high", "Request appliance diagnosis", "Yes"],
        ],
      },
      {
        kind: "checklist",
        heading: "How a technician diagnoses the issue",
        anchor: "diagnosis",
        ordered: true,
        items: [
          "Confirms the symptom: The technician checks whether one burner, several burners, or the entire stove is affected.",
          "Checks the burner cap and ports: The cap must sit flat, and the burner ports must allow gas to flow evenly.",
          "Tests spark strength: A strong spark should appear at the correct point near the burner.",
          "Inspects the igniter: The igniter is checked for cracks, grease, moisture, weak spark, loose mounting, or wear.",
          "Checks wiring and gas flow: The technician checks the spark wire, switch, ignition module, and burner gas flow.",
          "Verifies flame behavior: The flame should light quickly, burn evenly, and stay on without sputtering.",
          "Completes the repair: The fix may include cleaning, adjustment, igniter repair, burner service, or replacement of a failed ignition part.",
          "Tests the burner again: The technician confirms the burner lights properly, stops clicking after ignition, and shuts off safely.",
        ],
      },
      {
        kind: "prose",
        body: [
          "For freestanding ranges, visit Gas Range Repair San Mateo. For built-in cooktops, visit Gas Cooktop Repair San Mateo.",
        ],
      },
      {
        kind: "prose",
        heading: "Why local San Mateo stove repair matters",
        anchor: "local",
        body: [
          "Local response matters when a gas stove will not light. San Mateo homeowners rely on their stove for daily cooking, and a clicking burner can quickly become stressful when there is gas odor or repeated ignition failure.",
        ],
        bullets: [
          "Same-day service: Faster scheduling when the stove is needed today.",
          "Local technician access: A nearby technician can diagnose the issue without long delays.",
          "Neighborhood convenience: Local service supports homes, apartments, condos, and rentals across San Mateo, CA.",
          "Focused appliance repair: Gas stove clicking, gas burner not igniting, igniter failure, and cooktop problems require specific appliance knowledge.",
          "Clear repair path: Homeowners searching for Gas Stove Repair Near Me need a direct call option and practical repair guidance.",
        ],
      },
      {
        kind: "prose",
        body: [
          "Stove Repair San Mateo CA provides Gas Stove Repair San Mateo, local stove repair support, igniter service, burner repair, gas cooktop repair, and gas range repair for local homeowners who need fast help.",
        ],
      },
      {
        kind: "prose",
        body: [
          "If your gas stove is clicking but not lighting, do not keep forcing the burner to ignite. Stove Repair San Mateo CA provides Gas Stove Repair San Mateo, igniter repair, gas burner repair, gas range repair, gas cooktop repair, and emergency stove repair in San Mateo, CA.",
          "For fast local service, call now and explain whether the burner is clicking, not sparking, not lighting, or producing a gas smell. Call: (650) 525-2329.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my gas stove keep clicking?",
        answer:
          "Your gas stove keeps clicking because the ignition system is still trying to spark. This can happen when the burner is wet, dirty, misaligned, or not sensing a proper flame. If clicking continues after cleaning and drying, the switch, igniter, or spark module may need service.",
      },
      {
        question: "Why won't my gas stove light?",
        answer:
          "A gas stove will not light when spark, gas flow, or burner alignment is not working correctly. Common causes include wet burner parts, clogged burner ports, a weak igniter, burner cap misalignment, or a gas supply issue.",
      },
      {
        question: "Why is my gas burner not igniting?",
        answer:
          "A gas burner is not igniting because the spark is not lighting the gas at the burner. The ports may be blocked, the cap may be misaligned, or the igniter may be weak or not sparking.",
      },
      {
        question: "Why is my gas stove igniter not sparking?",
        answer:
          "A gas stove igniter may stop sparking because of a damaged igniter, loose wire, failed switch, bad spark module, moisture, or an electrical connection issue. Professional testing confirms the failed part.",
      },
      {
        question: "Can I clean the igniter myself?",
        answer:
          "You can gently clean visible food or grease around the burner when the stove is off and cool. Do not bend, scrape, soak, or force the igniter. If cleaning does not restore ignition, call for Stove Igniter Repair San Mateo.",
      },
      {
        question: "When do I need stove igniter replacement?",
        answer:
          "You need stove igniter replacement when the igniter is cracked, worn, not sparking, sparking weakly, or failing professional testing. Replacement restores reliable lighting when cleaning or adjustment is not enough.",
      },
      {
        question: "Do I need emergency stove repair in San Mateo?",
        answer:
          "You need emergency stove repair in San Mateo if you smell gas, hear hissing, have repeated clicking with no flame, cannot shut the burner off, or the gas burner will not stay lit. Stop using the stove and call for urgent help.",
      },
    ],
    relatedLinks: [
      { label: "Gas Stove Repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Burner, ignition, and gas-flow faults." },
      { label: "Stove Igniter Repair San Mateo", href: "/services/igniter-repair-san-mateo-ca/", description: "Weak, worn, or non-sparking igniters." },
      { label: "Emergency Stove Repair San Mateo", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Gas smell, hissing, or unsafe flame behavior." },
      { label: "Contact Us", href: "/contact/", description: "Request local gas stove service." },
    ],
    relatedPosts: ["brief-gas-smell-vs-possible-leak", "one-stove-burner-not-heating"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POST 3 — Tab 3: Stove Not Heating in San Mateo? 7 Common Causes
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "one-stove-burner-not-heating",
    title: "Stove Not Heating in San Mateo? 7 Common Causes",
    h1: "Stove Not Heating in San Mateo? 7 Common Causes",
    metaTitle: "Stove Not Heating in San Mateo? 7 Common Causes & Repair Help",
    metaDescription:
      "Learn why your gas or electric stove stopped heating, what you can safely check, and when to call a local stove repair technician in San Mateo, CA.",
    excerpt:
      "Why a gas or electric stove stops heating, the 7 common causes, what you can safely check, and when to call a local San Mateo technician.",
    heroIntro:
      "Learn why your gas or electric stove stopped heating, what you can safely check, and when to call a local stove repair technician in San Mateo, CA.",
    quickAnswer:
      "If your stove is not heating in San Mateo, the cause may be a faulty igniter, broken heating element, bad burner connection, gas supply issue, thermostat problem, wiring fault, or control board malfunction. Homeowners can safely check the plug, breaker, burner alignment, and light debris, but gas odors, sparks, burning smells, repeated breaker trips, or control failures need a professional stove repair technician.",
    publishedTime: "2026-07-25T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    blocks: [
      {
        kind: "prose",
        body: [
          "For homeowners in San Mateo, CA, a stove heating problem can quickly interrupt daily cooking. Whether you have a gas stove not heating, an electric stove not heating, or only one stove burner not heating, the key is to identify whether the issue is simple, urgent, or unsafe.",
          "SanMateo FixHub provides stove repair San Mateo support for gas stoves, electric stoves, ranges, cooktops, burners, igniters, and control problems across San Mateo and nearby Peninsula areas.",
        ],
        links: [{ label: "Stove Repair San Mateo", href: "/services/stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "Why Your Stove May Stop Heating",
        anchor: "why-stop-heating",
        body: [
          "A stove heats by using either gas ignition or electric resistance. A gas stove needs gas flow, a working burner, and a functioning igniter or pilot system. An electric stove needs steady power, a working element, a good burner connection, and a switch or control board that sends power correctly.",
          "When one part fails, the stove may still look like it is on, but the burner may stay cold, heat weakly, click without lighting, or shut off during use.",
        ],
        bullets: [
          "Gas stoves often have ignition, burner, gas valve, or flame issues.",
          "Electric coil stoves often have coil, socket, or switch problems.",
          "Smooth-top electric stoves may have radiant element, wiring, or control issues.",
          "Modern ranges may develop control board, display, sensor, or switch faults.",
        ],
      },
      {
        kind: "prose",
        heading: "7 Common Causes of a Stove Not Heating",
        anchor: "causes",
        body: [
          "1. Faulty Igniter. A faulty igniter is one of the most common reasons a gas stove burner clicks but does not light. The igniter creates the spark that lights the gas. If it is weak, dirty, cracked, wet, or failing, the burner may click repeatedly without producing a flame.",
          "Common symptoms: clicking but no flame, weak spark, one burner failing while others work, or clicking that continues after the knob is turned.",
          "Safe homeowner check: confirm the burner cap is seated correctly and remove light food debris around the burner after the stove is cool. Do not remove sealed gas parts or keep testing if you smell gas.",
          "When to call: if the clicking continues or the burner will not light after basic cleaning, stove igniter repair may be needed. Urgency is medium to high if gas odor is present.",
        ],
        links: [{ label: "Stove igniter repair", href: "/services/igniter-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "2. Broken Heating Element",
        body: [
          "A broken heating element is a common reason for an electric stove not heating. On a coil stove, the coil may burn out. On a glass-top stove, the radiant element below the surface may fail.",
          "Common symptoms: burner stays cold, element glows unevenly, food takes longer to cook, or one burner fails while others work.",
          "Safe homeowner check: visually inspect a cooled coil for obvious damage, blistering, or loose seating. Do not open the cooktop or touch internal wiring.",
          "When to call: if the element is cracked, the socket looks burned, or the burner remains cold, request electric stove repair San Mateo. Urgency is medium, but higher if there is a burning smell or breaker issue.",
        ],
        links: [{ label: "Electric stove repair San Mateo", href: "/services/electric-stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "3. Bad Burner Connection",
        body: [
          "A bad burner connection can stop power or gas flow from reaching the burner properly. On an electric coil stove, the burner plugs into a receptacle. If the receptacle is loose or burned, the burner may not heat consistently.",
          "Common symptoms: burner works only sometimes, heats when moved, flame is weak or uneven, or one burner is weaker than the rest.",
          "Safe homeowner check: make sure removable burner parts are seated correctly after the stove is completely cool. Light cleaning around the burner is also safe.",
          "When to call: if the connection looks burned, the receptacle is loose, or the same burner keeps failing, burner repair is usually the right service. Urgency is medium.",
        ],
        links: [{ label: "Burner repair", href: "/services/burner-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "4. Gas Supply Issue",
        body: [
          "A gas stove not heating may have a gas supply problem. The gas valve may be partly closed, burner ports may be blocked, the pilot system may be out, or gas flow may be restricted.",
          "Common symptoms: no flame, weak flame, yellow or uneven flame, burner lights then goes out, multiple burners have low heat, or rotten-egg gas odor near the stove.",
          "Safe homeowner check: check whether the burner cap is aligned and whether the appliance gas shutoff valve is open if it is safely accessible. Do not keep turning the burner on if you smell gas.",
          "When to call: if flame is weak, gas flow seems inconsistent, or the burner will not ignite, request gas stove repair San Mateo. If there is a gas smell, treat it as urgent and use emergency stove repair San Mateo only after the immediate safety steps are handled.",
        ],
        links: [
          { label: "Gas stove repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/" },
          { label: "Emergency stove repair San Mateo", href: "/services/emergency-stove-repair-san-mateo-ca/" },
        ],
      },
      {
        kind: "prose",
        heading: "5. Thermostat Problem",
        body: [
          "A thermostat or temperature sensor helps control how much heat the stove or range produces. If it fails, the appliance may not reach the selected temperature or may heat inconsistently.",
          "Common symptoms: wrong temperature, heat too low or too high, burner cycling strangely, uneven cooking, or settings that do not match actual heat.",
          "Safe homeowner check: note whether the problem affects one burner, all burners, or the oven section of a range. Avoid opening control panels or bypassing sensors.",
          "When to call: if temperature control is unreliable or a range is not heating correctly, range repair San Mateo may be needed. Urgency is usually medium.",
        ],
        links: [{ label: "Range repair San Mateo", href: "/services/range-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "6. Wiring or Electrical Fault",
        body: [
          "A wiring or electrical fault can cause a stove to stop heating, trip the breaker, shut off, or become completely unresponsive. Electric stoves use high electrical loads, so damaged wires, terminals, switches, or outlets should be handled carefully.",
          "Common symptoms: repeated breaker trips, burner heats briefly then stops, flickering display, burning plastic smell, sparks, buzzing, or the stove not working properly at all.",
          "Safe homeowner check: check whether the breaker has tripped once. If it trips again, stop resetting it.",
          "When to call: sparks, burning smells, repeated breaker trips, or melted parts make this urgent. Request same-day stove repair San Mateo availability.",
        ],
        links: [{ label: "Same-day stove repair San Mateo", href: "/services/emergency-stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "7. Control Board or Switch Malfunction",
        body: [
          "Modern stoves often use switches, relays, touch panels, and control boards to manage heat. If one of these parts fails, the burner may not turn on, may stay stuck on one setting, or may stop responding.",
          "Common symptoms: burner will not turn on, burner stuck on high or low, unresponsive touch controls, error codes, or multiple functions failing at once.",
          "Safe homeowner check: try a basic power reset only if there is no gas smell, smoke, spark, or burning odor.",
          "When to call: if the problem returns, the display shows errors, or controls behave unpredictably, control board repair may be needed. Urgency is medium to high.",
        ],
        links: [{ label: "Control board repair", href: "/services/stove-control-board-repair-san-mateo-ca/" }],
      },
      {
        kind: "table",
        heading: "Stove Not Heating Troubleshooting Table",
        anchor: "troubleshooting",
        caption: "Cause, symptoms, DIY safety, technician need, and urgency",
        columns: ["Cause", "Common Symptoms", "DIY Safe?", "Technician Needed?", "Urgency"],
        rows: [
          ["Faulty igniter", "Clicking but no flame, weak spark", "Limited cleaning only", "Yes, if clicking continues", "Medium to high"],
          ["Broken heating element", "Electric burner cold or uneven", "Visual check only", "Yes, if damaged or dead", "Medium"],
          ["Bad burner connection", "Burner works sometimes, loose or weak heat", "Basic reseating when cool", "Yes, if burned or loose", "Medium"],
          ["Gas supply issue", "Weak flame, no flame, gas smell", "Only basic valve/cap check", "Yes, urgent if gas odor", "High"],
          ["Thermostat problem", "Wrong temperature, uneven heating", "Observe symptoms only", "Yes, for testing", "Medium"],
          ["Wiring or electrical fault", "Breaker trips, sparks, burning smell", "Breaker check only", "Yes", "High"],
          ["Control board or switch malfunction", "Error codes, unresponsive controls", "Basic reset only if safe", "Yes", "Medium to high"],
        ],
      },
      {
        kind: "checklist",
        heading: "What You Can Safely Check Yourself",
        anchor: "safe-checks",
        intro: ["Before calling a stove repair company San Mateo homeowners trust, you can do a few safe checks:"],
        items: [
          "Confirm the stove is plugged in.",
          "Check whether the breaker has tripped once.",
          "Make sure the burner knob is fully turned off, then try again.",
          "Check whether the appliance gas shutoff valve is open, if safely accessible.",
          "Let the stove cool, then clean light debris around burner parts.",
          "Reseat a removable coil-style burner if it is cool and designed to be removable.",
          "Check whether the problem affects one burner or the entire stove.",
          "Try a basic power reset only if there are no safety warning signs.",
        ],
      },
      {
        kind: "prose",
        heading: "When to Call a Professional Stove Repair Technician",
        anchor: "when-call",
        body: [
          "Call a professional technician when the issue is unsafe, technical, or recurring. A local stove repair expert can test parts safely and confirm whether the issue is with the igniter, element, wiring, switch, gas flow, or control board.",
          "You should schedule stove repair service San Mateo CA if your stove is on but not heating, a burner is not working, multiple burners are weak or cold, your gas stove clicks but will not ignite, your electric burner stays cold, or the stove trips the breaker.",
          "Searching for stove repair near me usually means you need help soon, not a long technical explanation. If the stove heating problem is interrupting cooking or creating safety concerns, professional diagnosis is the fastest path to a clear answer.",
        ],
      },
      {
        kind: "cta",
        heading: "Need fast stove repair in San Mateo?",
        subheading: "If your burner is cold, your gas stove keeps clicking, or your electric stove will not heat, call SanMateo FixHub for local stove repair help.",
      },
      {
        kind: "prose",
        heading: "Repair or Replace?",
        anchor: "repair-replace",
        body: [
          "A stove that is not heating does not always need replacement. Many heating problems are caused by one failed part, such as an igniter, burner, heating element, socket, switch, or control board.",
          "Repair is often the better choice when only one burner is affected, the stove is otherwise in good condition, parts are available, the repair cost is reasonable, and the appliance still fits your kitchen needs.",
          "Replacement may be smarter when the stove is very old, multiple major parts are failing, parts are unavailable, repair costs approach replacement cost, or the stove has repeated safety issues.",
          "For many San Mateo homeowners, a diagnosis is the best first step. A technician can explain whether the problem is minor, urgent, or not worth repairing. If you are comparing options, review the site's stove repair pricing guidance to understand what affects cost.",
        ],
        links: [{ label: "Stove repair pricing guidance", href: "/stove-repair-cost-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        heading: "Why San Mateo Homeowners Choose Local Repair",
        anchor: "local-repair",
        body: [
          "Choosing local stove repair in San Mateo can make the process easier and faster. A nearby repair team understands the local service area, common appliance problems, and the urgency of restoring a working kitchen.",
        ],
        bullets: [
          "Faster response when availability allows.",
          "Easier scheduling in San Mateo, CA.",
          "Service coverage across San Mateo County and nearby Peninsula areas.",
          "Familiarity with local homes, condos, rentals, and small kitchens.",
          "Clear communication before repair.",
          "Convenient support for gas and electric stove issues.",
        ],
      },
      {
        kind: "prose",
        body: [
          "SanMateo FixHub serves San Mateo and nearby Peninsula communities. Check the service areas page to confirm coverage around San Mateo County, Burlingame, Foster City, Belmont, San Carlos, Millbrae, Redwood City, and nearby areas.",
          "For broader appliance repair San Mateo and San Mateo appliance repair searches, this website is especially focused on stove, range, cooktop, burner, igniter, and control issues. You can also learn more about our team before requesting service.",
        ],
        links: [
          { label: "Service areas", href: "/locations/" },
          { label: "About our team", href: "/about/" },
        ],
      },
      {
        kind: "prose",
        heading: "Call to Action",
        anchor: "cta",
        body: [
          "Is your stove not heating in San Mateo or is one burner not working properly? Call SanMateo FixHub at (650) 525-2329 for local stove repair help in San Mateo, CA. We help with gas stoves, electric stoves, burners, igniters, ranges, cooktops, and control issues.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is my stove on but not heating?",
        answer:
          "Your stove may be on but not heating because the burner, igniter, heating element, switch, wiring, gas flow, or control board is failing. If lights or the display work but the burner stays cold, the issue is usually inside the heating or control system.",
      },
      {
        question: "Can I still use a stove if one burner is not heating?",
        answer:
          "You may be able to use the other burners if there is no gas smell, sparking, smoke, burning odor, or breaker problem. However, one failed burner should still be checked because a bad connection, igniter, element, or switch can get worse.",
      },
      {
        question: "Why does my gas stove click but not ignite?",
        answer:
          "A gas stove may click but not ignite because the igniter is dirty, wet, misaligned, weak, or failing. It can also happen when the burner cap is not seated correctly or the burner ports are blocked. If basic cleaning does not help, schedule gas stove repair.",
      },
      {
        question: "How much does stove repair cost in San Mateo?",
        answer:
          "Stove repair cost in San Mateo depends on the stove type, failed part, brand, access difficulty, and whether parts are available. Igniter, burner, and element repairs are often more straightforward than wiring or control board repairs. A diagnosis gives the most accurate estimate.",
      },
      {
        question: "How long does stove repair usually take?",
        answer:
          "Many stove heating problems can be diagnosed during the first visit. Some repairs can be completed the same day if the issue is simple and the part is available. More complex repairs may require ordering a specific part.",
      },
      {
        question: "Is it safe to repair a stove myself?",
        answer:
          "Basic cleaning, checking the breaker once, confirming the plug, and reseating removable burner parts may be safe when the stove is cool. Gas work, wiring, control board repair, repeated breaker trips, sparks, smoke, or burning smells should be handled by a technician.",
      },
      {
        question: "When should I replace instead of repair?",
        answer:
          "Consider replacement if the stove is very old, has repeated safety problems, needs several expensive parts, or the repair cost is close to replacement cost. If only one part has failed, repair may still be the better option.",
      },
    ],
    relatedLinks: [
      { label: "Stove Repair San Mateo", href: "/services/stove-repair-san-mateo-ca/", description: "Core gas and electric stove repair." },
      { label: "Gas Stove Repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Ignition, burner, and gas-flow faults." },
      { label: "Electric Stove Repair San Mateo", href: "/services/electric-stove-repair-san-mateo-ca/", description: "Elements, sockets, switches, and controls." },
      { label: "Emergency Stove Repair San Mateo", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Urgent gas or electrical safety issues." },
      { label: "Burner Repair", href: "/services/burner-repair-san-mateo-ca/", description: "Burner, socket, and switch repair." },
      { label: "Stove Igniter Repair", href: "/services/igniter-repair-san-mateo-ca/", description: "Weak or non-sparking igniters." },
      { label: "Control Board Repair", href: "/services/stove-control-board-repair-san-mateo-ca/", description: "Switches, relays, and control boards." },
      { label: "Contact Us / Schedule Service", href: "/contact/", description: "Book a local stove diagnosis." },
    ],
    relatedPosts: ["gas-stove-clicking-after-cleaning-spill", "repair-or-replace-stove-factors"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POST 4 — Tab 4: Gas Smell From Stove? What to Do Immediately
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "brief-gas-smell-vs-possible-leak",
    title: "Gas Smell From Stove? What to Do Immediately",
    h1: "Gas Smell From Stove? What to Do Immediately in San Mateo, CA",
    metaTitle: "Gas Smell From Stove? What to Do Immediately in San Mateo, CA",
    metaDescription:
      "If your stove smells like gas, treat it as a safety issue first. A local San Mateo guide to acting fast, understanding the risk, and when to call for stove repair.",
    excerpt:
      "If your stove smells like gas, act on safety first. Immediate steps, common causes, a mild-smell-vs-serious-leak guide, and when to call a professional.",
    heroIntro:
      "If your stove smells like gas, treat it as a safety issue first. Use this local San Mateo guide to act fast, understand the risk, and know when to call for stove repair.",
    quickAnswer:
      "If you notice a gas smell from stove San Mateo CA, turn the stove off if it is safe, avoid flames or electrical switches, ventilate only if safe, and leave the area immediately if the odor is strong or spreading. A stove that smells like gas can sometimes be caused by brief residual gas or delayed ignition, but it can also point to a serious gas leak from stove parts, a faulty valve, a loose connection, poor combustion, or a damaged gas line.",
    publishedTime: "2026-07-26T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    blocks: [
      {
        kind: "callout",
        tone: "safety",
        body: [
          "Strong gas smell, hissing, or symptoms like dizziness mean leave first and call emergency help. After the space is safe, request local stove diagnosis.",
        ],
      },
      {
        kind: "prose",
        anchor: "intro",
        body: [
          "Do not keep using the stove to “see if it goes away.” In San Mateo homes, apartments, rentals, and small kitchens, a gas smell from stove should be treated as a safety issue first and a repair issue second. Once the immediate danger is handled, call a local stove repair professional before using the appliance again.",
        ],
      },
      {
        kind: "checklist",
        heading: "What Should You Do Right Now If Your Stove Smells Like Gas?",
        anchor: "safety-steps",
        ordered: true,
        intro: ["If your gas stove smells like gas, follow these steps in order."],
        items: [
          "Turn off the stove if it is safe. If a burner knob was accidentally left on, turn it fully off only if you can do it without moving toward a strong gas odor.",
          "Avoid flames immediately. Do not use matches, candles, cigarettes, lighters, or another burner.",
          "Avoid electrical switches and devices. Do not turn lights on or off. Do not use outlets, fans, appliance switches, garbage disposals, or anything that could create a spark near the suspected gas leak.",
          "Ventilate only if safe. If the smell is mild and you can safely open a nearby door or window, do so. If the smell is strong, leave first.",
          "Leave immediately if the smell is strong or spreading. Get people and pets out of the home. Do not stay inside trying to find the source.",
          "Call emergency help or the gas utility if needed.",
          "After the area is safe, call a local professional. Once the emergency risk is handled, schedule gas stove repair or contact our team for stove diagnosis in San Mateo, CA.",
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        body: [
          "For gas-safety guidance, the U.S. Department of Transportation's Pipeline and Hazardous Materials Safety Administration advises people who suspect or detect a gas leak to leave the area immediately, call 9-1-1 from a safe location, and avoid flames, electrical switches, or other ignition sources.",
        ],
        links: [
          {
            label: "U.S. DOT PHMSA gas leak safety guidance",
            href: "https://www.phmsa.dot.gov/safety-awareness/pipeline/pipeline-leak-recognition-and-what-do",
          },
          { label: "Schedule gas stove repair", href: "/services/gas-stove-repair-san-mateo-ca/" },
          { label: "Contact our team", href: "/contact/" },
        ],
      },
      {
        kind: "prose",
        heading: "What Causes a Gas Smell From a Stove?",
        anchor: "causes",
        body: [
          "A stove smells like gas for different reasons. Some causes are minor and related to normal ignition. Others are serious and should be handled quickly.",
          "Residual Gas After Burner Use. A very brief gas odor can happen when a small amount of gas is released before the burner fully lights. This smell should fade quickly. It should not be strong, constant, or present when the stove is off. If the smell keeps coming back, stop using the burner and schedule stove repair in San Mateo.",
          "Delayed Ignition. Delayed ignition happens when gas flows but the flame does not light right away. You may hear clicking for several seconds before the burner lights. This can leave a noticeable stove gas smell around the burner. Common reasons include moisture, food debris, blocked burner ports, a weak igniter, or a burner cap that is not seated correctly.",
          "Faulty Igniter. A weak or failing igniter may click without lighting the gas properly. If the burner keeps clicking, smells like gas, and does not catch a flame, the stove should not be repeatedly tested. This is a common reason people request gas stove repair San Mateo service, especially when one burner has the same problem again and again.",
          "Dirty Burner Cap or Blocked Burner Ports. Grease, food spills, and debris can block burner ports or stop the burner cap from sitting evenly. This can cause slow lighting, uneven flame, weak flame, or a smell of gas from stove during ignition. A simple visible cleaning may help if the stove is fully off, cool, and there is no active gas smell. However, do not disassemble gas components yourself.",
          "Loose Burner Connection. A loose or misaligned burner assembly can affect how gas moves and ignites. If the smell happens near one burner only, the burner may need professional inspection.",
          "Gas Valve Issue. A worn, stuck, or faulty gas valve can allow gas to pass when it should not. This is more serious than a dirty burner or delayed ignition. If you smell gas when the stove is off, stop using the stove and get emergency guidance first. After the space is safe, call for professional repair.",
          "Damaged Gas Line or Connector. A damaged connector, loose fitting, or gas line issue can create a dangerous gas leak from stove or near the stove connection. If the odor is strong, constant, or near the back of the appliance, leave the area and call emergency help first.",
          "Poor Combustion. A healthy gas flame is usually steady and mostly blue. A weak, yellow, orange, lifting, or uneven flame may mean the gas is not burning properly. Poor combustion can come from blocked ports, dirty burners, air mixture issues, or other gas flow problems. This should be checked before the stove is used heavily again.",
        ],
        links: [{ label: "Stove repair in San Mateo", href: "/services/stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "table",
        heading: "Gas Smell From Stove San Mateo CA: Mild Smell vs Serious Leak",
        anchor: "risk-table",
        intro: [
          "Use this table to understand risk levels, but do not use it as a replacement for emergency help. If you are unsure, treat the smell as serious.",
        ],
        caption: "Gas smell situations, their likely meaning, and what to do",
        columns: ["Situation", "Likely Meaning", "What to Do"],
        rows: [
          ["Mild smell for one second when burner lights", "Brief residual gas or slightly delayed ignition", "Turn the burner off if needed, ventilate safely, and watch for repeat issues"],
          ["Smell happens every time one burner is used", "Igniter, burner cap, blocked port, or gas flow issue", "Stop using that burner and schedule repair"],
          ["Burner clicks but does not light", "Possible faulty igniter or delayed ignition", "Avoid repeated ignition attempts and call for stove diagnosis"],
          ["Smell near the back of the stove", "Possible connector, valve, or line issue", "Stop using the stove and get professional help"],
          ["Strong constant gas smell", "Possible active gas leak", "Leave immediately and call emergency help"],
          ["Gas smell throughout the kitchen or home", "Higher-risk leak situation", "Evacuate people and pets immediately"],
          ["Gas smell with hissing sound", "Possible active leak from appliance or line", "Leave the area right away"],
          ["Gas smell with headache, dizziness, or nausea", "Possible unsafe exposure", "Leave immediately and seek emergency help"],
        ],
      },
      {
        kind: "prose",
        heading: "Why This Matters in San Mateo, CA",
        anchor: "san-mateo",
        body: [
          "In San Mateo, CA, many households rely on their stove every day. A gas smell can affect single-family homes, apartments, condos, rental properties, and small kitchens across San Mateo County, the Bay Area, and the Peninsula.",
          "Speed matters because a stove gas smell can move from “minor ignition issue” to “unsafe appliance” quickly if the stove keeps being used. For renters and property managers, fast action also helps document the issue and reduce tenant risk. For homeowners, it protects the kitchen, the household, and the appliance.",
          "Local service also matters. A nearby technician can inspect the stove, explain whether the issue is related to the burner, igniter, gas valve, connection, or combustion, and help you decide whether urgent repair is needed. If the immediate safety risk has already been handled, SanMateo FixHub can help with same-day stove repair availability near San Mateo.",
        ],
        links: [{ label: "Same-day stove repair", href: "/services/emergency-stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "cta",
        heading: "Need Help After the Safety Steps?",
        subheading: "If the gas smell is strong, leave first and call emergency help. If the area is safe but the stove still needs inspection, call SanMateo FixHub at (650) 525-2329.",
      },
      {
        kind: "prose",
        heading: "DIY vs Professional Help",
        anchor: "diy-professional",
        body: [
          "There are a few safe things you can check, but gas-related repair work should be left to a professional.",
        ],
      },
      {
        kind: "checklist",
        heading: "What You Can Safely Check",
        intro: ["Only check these if the smell is mild, the stove is off, and the area feels safe:"],
        items: [
          "Are all knobs fully off?",
          "Did the smell start after cleaning or a spill?",
          "Is the burner cap visibly crooked?",
          "Does one burner smell worse than the others?",
          "Does the burner click but fail to light?",
          "Is the flame weak, yellow, orange, or uneven?",
          "Does the smell stop after the burner lights?",
          "Is the odor present even when the stove is off?",
        ],
        footnote: "These details can help a technician understand the problem faster.",
      },
      {
        kind: "callout",
        tone: "safety",
        heading: "What You Should Never Attempt Yourself",
        bullets: [
          "Gas line repair.",
          "Gas valve adjustment.",
          "Connector replacement.",
          "Leak testing with flame.",
          "Internal gas component disassembly.",
          "Repeated ignition attempts.",
          "Moving the stove to inspect the gas line while odor is present.",
          "Repairing a burner while you still smell gas.",
        ],
      },
      {
        kind: "prose",
        body: [
          "A gas smell from stove may seem simple, but guessing can be risky. Professional diagnosis helps separate a dirty burner or weak igniter from a serious gas leak.",
        ],
      },
      {
        kind: "checklist",
        heading: "When Should You Call a Professional?",
        anchor: "call-professional",
        intro: ["Call a professional after emergency safety steps are handled if:"],
        items: [
          "The smell keeps returning.",
          "The stove smells like gas when it is off.",
          "A burner will not light.",
          "A burner clicks but does not ignite.",
          "The flame is weak, yellow, orange, or uneven.",
          "You hear a hissing sound near the stove.",
          "The smell is near the back of the stove.",
          "The smell is spreading through the kitchen.",
          "Someone feels headache, dizziness, nausea, or unusual symptoms near the stove.",
          "A tenant reports repeated gas odor.",
          "The issue started after cleaning, moving, or reinstalling the appliance.",
        ],
        footnote:
          "If the smell is strong or spreading, emergency services come first. After the space is safe, schedule emergency stove repair San Mateo service before using the stove again.",
      },
      {
        kind: "prose",
        heading: "Why Professional Stove Repair Is the Safer Choice",
        anchor: "why-professional",
        body: [
          "A local stove repair professional can inspect the appliance, identify the likely source, and explain the next step clearly. That matters because the same symptom can have different causes.",
          "A gas smell may come from:",
        ],
        bullets: [
          "A weak igniter.",
          "A dirty burner.",
          "A blocked burner port.",
          "A misaligned burner cap.",
          "A loose connection.",
          "A worn gas valve.",
          "A damaged connector.",
          "Poor combustion.",
        ],
        links: [{ label: "Appliance repair in San Mateo, CA", href: "/services/" }],
      },
      {
        kind: "prose",
        body: [
          "SanMateo FixHub focuses on gas and electric stoves, ranges, and cooktops. That stove-specific focus keeps the repair aligned with burners, igniters, valves, elements, controls, and cooking-surface problems instead of broad, unrelated appliance work.",
          "For broader cooking-appliance support, you can review the site's appliance repair in San Mateo, CA service options and choose the closest stove, range, cooktop, burner, igniter, or emergency repair category.",
        ],
      },
      {
        kind: "callout",
        tone: "info",
        heading: "Illustrative Example: A Typical San Mateo Gas Stove Smell Scenario",
        body: [
          "This example describes a common repair scenario and is not a claim about a specific customer job.",
          "A San Mateo renter notices a gas smell whenever the front burner is turned on. The burner clicks several times before lighting, and the smell fades after the flame appears.",
          "The renter stops using that burner, opens a nearby window safely, reports the issue to the property manager, and schedules a stove inspection.",
          "During a situation like this, a technician may find a dirty burner port, a misaligned burner cap, or a weak igniter causing delayed ignition. After the burner and ignition system are corrected, the burner should light more reliably and the repeated gas smell should stop.",
          "This is a typical example, not a guaranteed diagnosis. The key point is that repeated gas smell should be inspected before the stove is used normally again.",
        ],
      },
      {
        kind: "callout",
        tone: "safety",
        heading: "What Not to Do If You Smell Gas From Your Stove",
        body: ["Use this checklist if your stove smells like gas."],
        bullets: [
          "Do not ignore repeated gas odor.",
          "Do not keep trying to light the burner.",
          "Do not use matches, lighters, candles, or cigarettes.",
          "Do not turn electrical switches on or off.",
          "Do not use a fan if a gas leak is suspected.",
          "Do not move the stove to inspect the gas line yourself.",
          "Do not attempt DIY gas line work.",
          "Do not adjust the gas valve yourself.",
          "Do not test for leaks with a flame.",
          "Do not assume the smell is safe just because it happened before.",
          "Do not delay emergency help if the smell is strong, spreading, or paired with symptoms.",
        ],
      },
      {
        kind: "prose",
        heading: "Get the Stove Checked Before Using It Again",
        anchor: "conclusion",
        body: [
          "A gas smell from your stove in San Mateo, CA should never be brushed off. It may be something simple like delayed ignition or a dirty burner, but it can also be a serious gas leak from stove components, a valve, a connector, or a line.",
          "If the smell is strong, constant, or spreading, leave immediately and call emergency help first. Once the area is safe, do not keep using the stove until it has been inspected.",
          "For safety-aware stove repair San Mateo CA, call SanMateo FixHub at (650) 525-2329 or request service. We help San Mateo homeowners, renters, landlords, and property managers with gas stove repair, burner problems, ignition issues, and urgent stove repair needs across San Mateo County and the Peninsula.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my stove smell like gas when I turn it on?",
        answer:
          "Your stove may smell like gas when gas flows before the burner fully lights. A very brief smell can happen during ignition, but repeated odor, slow lighting, or clicking without flame can point to an igniter, burner, or gas flow problem.",
      },
      {
        question: "Is a slight gas smell from stove normal?",
        answer:
          "A slight gas smell for a moment during ignition can happen, but it should not linger or return repeatedly. If the smell is strong, constant, or present when the stove is off, leave the area and call emergency help.",
      },
      {
        question: "Can I use my stove if I smell gas?",
        answer:
          "No. Stop using the stove until the cause is clear. If the smell is strong or spreading, leave immediately and call emergency help. If the smell is mild but keeps returning during use, schedule professional inspection.",
      },
      {
        question: "How do I know if my stove has a gas leak?",
        answer:
          "Possible warning signs include gas smell when the stove is off, odor near the back of the appliance, hissing sounds, repeated burner ignition problems, or symptoms like headache, dizziness, or nausea. If you suspect a leak, leave first and get emergency guidance.",
      },
      {
        question: "How fast should a gas smell from stove be repaired?",
        answer:
          "A strong gas smell should be treated immediately as a safety concern. After emergency steps are complete, recurring stove gas smell should be inspected as soon as possible before the appliance is used again.",
      },
      {
        question: "Do I need emergency stove repair in San Mateo?",
        answer:
          "You may need same-day stove repair if the stove has repeated gas odor, ignition failure, hissing sounds, burner problems, or a smell that returns after basic safety steps. If the smell is strong or spreading, emergency services come first.",
      },
      {
        question: "Who should I call for stove repair San Mateo CA?",
        answer:
          "After the immediate safety risk is handled, call SanMateo FixHub at (650) 525-2329 for local stove repair help. You can also contact our team to request service for gas stove repair, burner issues, ignition problems, and stove diagnosis in San Mateo, CA.",
      },
    ],
    relatedLinks: [
      { label: "Stove Repair", href: "/services/stove-repair-san-mateo-ca/", description: "Core gas and electric stove repair." },
      { label: "Gas Stove Repair", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Burner, ignition, valve, and combustion faults." },
      { label: "Emergency Stove Repair", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Urgent stove issues once the area is safe." },
      { label: "Igniter Repair", href: "/services/igniter-repair-san-mateo-ca/", description: "Weak or failing igniters." },
      { label: "Burner Repair", href: "/services/burner-repair-san-mateo-ca/", description: "Burner, cap, and connection faults." },
      { label: "All Services", href: "/services/", description: "Every stove, range, and cooktop service." },
      { label: "Request Service", href: "/contact/", description: "Book an inspection after the safety steps." },
    ],
    relatedPosts: ["gas-stove-clicking-after-cleaning-spill"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POST 5 — Tab 5: Should You Repair or Replace Your Stove in San Mateo?
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "repair-or-replace-stove-factors",
    title: "Repair or Replace Your Stove in San Mateo?",
    h1: "Should You Repair or Replace Your Stove in San Mateo? Cost, Age, and Warning Signs",
    metaTitle: "Repair or Replace Your Stove in San Mateo? Cost, Age & Signs",
    metaDescription:
      "A practical, diagnosis-first guide for comparing repair cost, appliance age, recent breakdowns, safety concerns, and the full cost of replacement.",
    excerpt:
      "A diagnosis-first guide to repairing or replacing a stove: cost, age, repair history, parts availability, safety, and warning signs.",
    heroIntro:
      "A practical, diagnosis-first guide for comparing repair cost, appliance age, recent breakdowns, safety concerns, and the full cost of replacement.",
    quickAnswer:
      "Repair your stove when it still has useful life, only one part has failed, and the repair is substantially less expensive than replacing and installing a comparable unit. Replacement usually makes more sense when the stove is old, breakdowns keep returning, parts are unavailable, or a gas or electrical problem makes another repair a poor long-term value.",
    publishedTime: "2026-07-27T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    blocks: [
      {
        kind: "prose",
        anchor: "intro",
        body: [
          "When the choice is not obvious, diagnose the stove before buying a new one. A burner that will not ignite may need one replaceable part—or it may reveal a larger control, wiring, or gas-flow problem.",
          "Deciding should you repair or replace your stove in San Mateo comes down to age, repair history, total cost, parts availability, and safety. A proper diagnosis helps avoid replacing a repairable stove or continuing to spend on an appliance that has become unreliable.",
        ],
      },
      {
        kind: "prose",
        heading: "What Really Decides Repair vs. Replace?",
        anchor: "deciding-factors",
        body: [
          "Consider the appliance as a complete system, not only the part that stopped working.",
          "Age and repair history. A younger stove with its first isolated failure is usually easier to justify repairing. Several repairs in one or two years—especially involving different burners or controls—suggest that multiple parts may be aging together.",
          "Repair cost versus full replacement cost. Compare the estimate with the complete stove replacement cost, including tax, delivery, removal, installation, and any gas, electrical, countertop, or cabinetry adjustments.",
        ],
      },
      {
        kind: "prose",
        body: [
          "Safety and parts availability. Gas odor, sparking, damaged wiring, overheating, or repeated breaker trips come before cost. Repair may also be impractical when a critical model-specific part has been discontinued.",
          "What a technician checks before recommending repair. A technician should test the connected system rather than automatically replacing the part most closely associated with the symptom. For a burner that will not ignite, that means:",
        ],
        bullets: [
          "Confirming whether one burner or the whole stove is affected",
          "Checking the power or gas supply",
          "Testing the igniter, switch, valve, or control",
          "Inspecting nearby wiring and connections for heat damage",
          "Confirming parts availability and whether the fix addresses the cause",
        ],
      },
      {
        kind: "prose",
        body: [
          "This diagnosis-first process is the value of professional stove repair San Mateo service.",
        ],
        links: [{ label: "Stove repair San Mateo", href: "/services/stove-repair-san-mateo-ca/" }],
      },
      {
        kind: "table",
        heading: "Repair vs. replacement at a glance",
        anchor: "at-a-glance",
        caption: "How repair and replacement compare across cost, age, safety, reliability, convenience, and value",
        columns: ["Factor", "Repair", "Replacement", "Best choice when"],
        rows: [
          ["Cost", "Lower initial expense", "Higher purchase and installation expense", "Repair is well below the complete replacement cost"],
          ["Age", "Usually stronger for younger and mid-life stoves", "More attractive for older appliances", "Age is considered with condition and repair history"],
          ["Safety", "Appropriate when the fault can be corrected fully", "Better when safe operation cannot be restored", "Gas or electrical concerns affect the decision"],
          ["Reliability", "Strong for one isolated failure", "Stronger after repeated breakdowns", "Recent service history reveals a pattern"],
          ["Convenience", "May restore cooking quickly when parts are available", "Requires shopping, delivery, and installation", "The option minimizes total kitchen disruption"],
          ["Long-term value", "Better when the repair should last", "Better when more failures are likely", "Future reliability justifies the money spent"],
        ],
      },
      {
        kind: "prose",
        heading: "How Much Stove Repair Usually Costs in San Mateo",
        anchor: "repair-cost",
        body: [
          "A reasonable planning range for many routine stove and cooktop repairs is approximately $150 to $500. Control boards, gas valves, specialty components, difficult access, and multi-part failures can cost more. This is general guidance, not a quote; the exact stove repair cost San Mateo homeowners receive depends on the diagnosis.",
        ],
        bullets: [
          "Part type: Igniters and elements differ from valves and electronic controls.",
          "Gas versus electric: Each system requires different testing and safety steps.",
          "Labor complexity: Access and disassembly time affect labor.",
          "Brand and parts availability: Specialty or discontinued parts can increase cost and delay.",
          "Safety checks: Gas flow, overheating, wiring, and grounding require careful testing.",
        ],
        links: [{ label: "Stove repair cost San Mateo", href: "/stove-repair-cost-san-mateo-ca/" }],
      },
      {
        kind: "prose",
        body: [
          "SanMateo FixHub diagnoses the actual fault before providing an estimate rather than quoting one flat number for every stove.",
        ],
      },
      {
        kind: "prose",
        heading: "How Age Changes the Decision",
        anchor: "age-guide",
        body: [
          "Use age as a guide—not as an automatic expiration date.",
          "A well-maintained 12-year-old stove with its first failed switch may be a better repair candidate than an 8-year-old appliance with damaged wiring and repeated ignition failures.",
        ],
      },
      {
        kind: "checklist",
        heading: "Warning Signs That Replacement May Be Smarter",
        anchor: "warning-signs",
        intro: ["One warning sign may be repairable; several appearing together are more significant."],
        items: [
          "Repeated repairs: Different parts keep failing within a year or two.",
          "Gas smell: Stop using the appliance and treat the situation as urgent.",
          "Yellow or uneven flames: There may be combustion, burner, or gas-flow trouble.",
          "Repeated ignition failure: Cleaning or prior service does not keep the problem away.",
          "Breaker trips: The stove repeatedly faults or overloads the circuit.",
          "Electrical odor or sparking: Wiring, controls, or terminals may be overheating.",
          "Discontinued parts: The correct component cannot be sourced reliably.",
          "Rising repair costs: Each new failure makes the investment harder to justify.",
        ],
      },
      {
        kind: "prose",
        heading: "When Repair Is the Better Choice",
        anchor: "repair-choice",
        body: ["Repair normally makes sense when:"],
        bullets: [
          "The stove is relatively young.",
          "Only one identifiable part has failed.",
          "The appliance performed reliably before this problem.",
          "The correct replacement part is readily available.",
          "The repair is much less expensive than full replacement.",
          "Related components remain in good condition.",
          "The work can restore safe, dependable operation.",
        ],
      },
      {
        kind: "prose",
        body: [
          "Examples include one failed igniter, burner switch, element, coil, or connection. See gas stove repair San Mateo for ignition and burner faults or electric stove repair San Mateo for elements and controls.",
          "Before you buy a new stove, confirm what failed. A focused diagnosis can show whether you need one replaceable part or whether broader wear makes replacement the better value.",
        ],
        links: [
          { label: "Gas stove repair San Mateo", href: "/services/gas-stove-repair-san-mateo-ca/" },
          { label: "Electric stove repair San Mateo", href: "/services/electric-stove-repair-san-mateo-ca/" },
        ],
      },
      {
        kind: "cta",
        heading: "Get the stove diagnosed before replacing it",
        subheading: "Call for the fastest response or send the model, symptom, and preferred contact method.",
      },
      {
        kind: "prose",
        heading: "When Replacement Is the Better Choice",
        anchor: "replacement-choice",
        body: ["Replacement normally makes more sense when:"],
        bullets: [
          "The stove is near or beyond 15 years old.",
          "Different components are failing close together.",
          "The same problem returns after previous service.",
          "A critical part is unavailable or discontinued.",
          "The repair is expensive relative to replacement.",
          "Damage affects multiple connections.",
          "The work is likely to be a short-term fix.",
          "Safe operation cannot be restored confidently.",
        ],
        footnote:
          "Continuing to repair an unreliable stove can create more expense and disruption than replacing it once.",
      },
      {
        kind: "prose",
        heading: "Illustrative Example: A Real-Style Example From a San Mateo Home",
        anchor: "local-example",
        body: [
          "This example describes a common repair scenario and is not a claim about a specific customer job.",
          "A five-year-old gas stove with one failed igniter. A five-year-old gas stove in Hillsdale clicks, but one burner will not ignite. The other burners work normally, there is no repair history, and testing identifies one failed igniter.",
          "The practical choice is repair. The stove is young, the fault is isolated, and the repair is a small portion of full replacement cost.",
          "If the stove were 14 years old with two recent burner repairs and heat-damaged switches, replacement could offer better long-term value.",
          "This is an illustrative scenario, not a claim about a specific customer or fixed local price.",
        ],
      },
      {
        kind: "checklist",
        heading: "Quick Decision Checklist",
        anchor: "decision-checklist",
        intro: ["Use this before spending money."],
        items: [
          "Is the stove under about 12 years old?",
          "Is only one part or burner affected?",
          "Is this the first major repair in one or two years?",
          "Is the repair far below full replacement cost?",
          "Are the correct parts still available?",
          "Has the stove otherwise operated reliably?",
          "Is there no unresolved gas or electrical hazard?",
          "Does the technician expect the repair to last?",
        ],
        footnote:
          "Mostly “yes” answers favor repair. Several “no” answers—especially about safety, repeat failures, and parts—favor comparing replacement.",
      },
      {
        kind: "prose",
        heading: "Final Recommendation: Repair the Fault, Replace the Pattern",
        anchor: "conclusion",
        body: [
          "Repair when the fault is isolated, useful life remains, parts are available, and the work should restore reliable operation for much less than replacement. Replace when age, repeated failures, cost, missing parts, or safety make another repair poor value.",
          "Before buying a new appliance, request a local diagnosis. SanMateo FixHub supports gas and electric stoves, ranges, and cooktops across San Mateo and nearby Peninsula communities.",
          "Searching for stove repair near me or need a second opinion before replacing your appliance?",
        ],
      },
    ],
    faqs: [
      {
        question: "How old is too old to repair a stove?",
        answer:
          "There is no exact cutoff, but after about 13–15 years, compare every major repair with replacement. A small repair may still be worthwhile.",
      },
      {
        question: "Is it cheaper to repair or replace a stove?",
        answer:
          "Repair is usually cheaper for one contained fault. Replacement can be better value when failures repeat or the repair approaches full replacement cost.",
      },
      {
        question: "What stove problems are not worth repairing?",
        answer:
          "Multiple major failures, extensive heat damage, discontinued critical parts, or recurring gas and electrical faults may not justify another repair.",
      },
      {
        question: "How much does stove repair cost in San Mateo?",
        answer:
          "Many routine jobs fall around $150–$500, while controls, valves, specialty parts, and multi-part faults can cost more. Diagnosis is required for a quote.",
      },
      {
        question: "Can a stove be repaired the same day?",
        answer:
          "Common single-part faults may qualify for same-day stove repair San Mateo service when a technician and the correct part are available. Ask when booking.",
      },
      {
        question: "Should I repair a gas stove or replace it?",
        answer:
          "Repair often suits a younger gas stove with one failed igniter, switch, or burner part. Replace when faults recur or safe operation cannot be restored.",
      },
      {
        question: "Is electric stove repair worth it?",
        answer:
          "Yes, when one element, coil, switch, or connection has failed. Repeated breaker trips or extensive wiring damage require a broader evaluation.",
      },
    ],
    relatedLinks: [
      { label: "Stove repair in San Mateo", href: "/services/stove-repair-san-mateo-ca/", description: "Gas and electric stove, range, and cooktop repair." },
      { label: "Gas stove repair", href: "/services/gas-stove-repair-san-mateo-ca/", description: "Ignition and burner faults." },
      { label: "Electric stove repair", href: "/services/electric-stove-repair-san-mateo-ca/", description: "Elements and controls." },
      { label: "Emergency stove repair", href: "/services/emergency-stove-repair-san-mateo-ca/", description: "Urgent gas or electrical safety issues." },
      { label: "Pricing guidance", href: "/stove-repair-cost-san-mateo-ca/", description: "What affects stove repair cost." },
      { label: "Request Service", href: "/contact/", description: "Get a diagnosis before you replace." },
    ],
    relatedPosts: ["stove-repair-cost-san-mateo-2026-guide", "one-stove-burner-not-heating"],
  },
];

// ── Public-visibility gate ───────────────────────────────────────────────────
/**
 * A post is public only when it is manually `published` AND its scheduled
 * `publishedTime` is at or before `now`. This single predicate backs every
 * surface (hub, route, related links, nav, sitemap, metadata, schema).
 */
export const isPublic = (post: BlogPost, now: Date = new Date()): boolean =>
  post.published && new Date(post.publishedTime).getTime() <= now.getTime();

// ── Access helpers (only public posts are ever exposed) ──────────────────────
/** Public posts (published + scheduled time reached), newest first. */
export const publicBlogPosts = (now: Date = new Date()): BlogPost[] =>
  blogPosts
    .filter((p) => isPublic(p, now))
    .sort((a, b) => b.publishedTime.localeCompare(a.publishedTime));

/** A single public post by slug, or undefined (unpublished/scheduled/invalid). */
export const getPublicBlogPost = (
  slug: string,
  now: Date = new Date(),
): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug && isPublic(p, now));

/** Public posts referenced by another post's `relatedPosts`, gated + in order. */
export const relatedPublicPosts = (
  post: BlogPost,
  now: Date = new Date(),
): BlogPost[] =>
  (post.relatedPosts ?? [])
    .map((slug) => getPublicBlogPost(slug, now))
    .filter((p): p is BlogPost => p !== undefined);

/** Slugs of currently public posts. */
export const publicBlogPostSlugs = (now: Date = new Date()): string[] =>
  publicBlogPosts(now).map((p) => p.slug);

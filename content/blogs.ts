// Blog content — the single source of truth for blog posts.
// Foundation only: `blogPosts` is intentionally empty. A post becomes PUBLIC
// only when it is manually `published` AND its scheduled `publishedTime` has
// arrived (publishedTime <= now). A future-dated post stays hidden everywhere
// — hub, route, related links, navigation, sitemap, metadata, and schema — and
// its route returns 404 until the scheduled time passes.
import type { ContentSection, Faq } from "@/lib/types";

export type BlogPost = {
  slug: string; // e.g. "how-to-tell-if-a-stove-igniter-is-failing"
  /** Short card / list label. */
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary for cards, related-link lists, and OG description. */
  excerpt: string;
  /** 40–70 word answer-first paragraph, rendered above the body. */
  quickAnswer: string;
  /**
   * ISO 8601 publish datetime and the SCHEDULE time, e.g. "2026-01-15" or
   * "2026-01-15T09:00:00-08:00". The post is hidden until this moment passes.
   * Also used for article OG, byline, and sitemap lastModified.
   */
  publishedTime: string;
  /** ISO 8601 last-updated datetime, optional. */
  updatedTime?: string;
  /** Byline author name. */
  author?: string;
  /**
   * Manual publish switch. Must be `true` AND `publishedTime` must have passed
   * for the post to be public. Setting this `false` hides the post regardless
   * of its scheduled time.
   */
  published: boolean;
  /** Body sections rendered in order. */
  content: ContentSection[];
  /** Optional FAQ block appended below the body. */
  faqs?: Faq[];
  /**
   * Internal links to existing site pages, rendered by the shared RelatedLinks
   * card list. Keeps supporting articles pointing at the pages that own the
   * commercial and problem intent instead of competing with them.
   */
  relatedLinks?: { label: string; href: string; description?: string }[];
  /** Slugs of related posts to cross-link (each still gated by the public rule). */
  relatedPosts?: string[];
};

// Supporting articles. Each one deliberately takes a narrower angle than the
// service, problem, and pricing pages so those pages stay the primary owners of
// their commercial and problem intent.
export const blogPosts: BlogPost[] = [
  // ── 1. Repair-or-replace decision guide ────────────────────────────────────
  {
    slug: "repair-or-replace-stove-factors",
    title: "Repair or Replace Your Stove? 7 Factors to Check",
    h1: "Should You Repair or Replace Your Stove? 7 Factors to Check",
    metaTitle: "Repair or Replace Your Stove? 7 Factors to Check",
    metaDescription:
      "Deciding whether to repair or replace a stove? Weigh age, repeat breakdowns, part availability, safety, and how big the repair is before you buy a new one.",
    excerpt:
      "A practical way to weigh age, repair history, part availability, and safety before you decide to fix a stove or replace it.",
    quickAnswer:
      "Repair usually makes sense when the stove still has useful life, one identifiable part has failed, and the fix is small next to replacing the appliance. Replacement becomes the stronger option when breakdowns keep returning, parts are no longer available, or a safety fault cannot be fully corrected. Diagnose the stove before you decide.",
    publishedTime: "2026-07-23T13:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    content: [
      {
        heading: "Start with the fault, not the appliance",
        body: [
          "When a burner stops working, the first question most people ask is whether the stove is worth keeping. That is hard to answer before anyone knows what actually failed. A burner that will not ignite might need one replaceable part, or it might be the visible symptom of a control, wiring, or gas-flow problem that affects the whole appliance.",
          "The seven factors below are the ones worth checking before you spend money either way. None of them decides the question alone — they matter as a pattern. A stove that scores well on most of them is usually worth repairing; one that fails several, especially on safety or parts, is where replacement starts to make sense.",
        ],
      },
      {
        heading: "Factor 1: How old the stove is",
        body: [
          "Age is a guide, not an expiration date. A newer stove with its first isolated failure is usually straightforward to justify repairing. As appliances get older, more of their components have shared the same heat, moisture, and use, so a single failure is more likely to be followed by others.",
          "There is no fixed cutoff at which a stove stops being repairable. A well-maintained older stove with one failed switch can be a better repair candidate than a much newer appliance with heat-damaged wiring and a history of ignition faults. Treat age as context for the other six factors rather than a rule on its own.",
        ],
      },
      {
        heading: "Factor 2: How often it has needed repair",
        body: [
          "Repair history tells you more than age does. One fault in an otherwise reliable appliance is a normal event. Several repairs within a year or two — particularly involving different burners or different controls — suggest a number of parts are wearing out at a similar rate.",
          "Write down what has been fixed and when. If the same fault has come back after previous service, that is a different situation from a new and unrelated failure, and it is worth raising during diagnosis.",
        ],
      },
      {
        heading: "Factor 3: How big the repair is next to replacing",
        body: [
          "Compare the repair estimate against the full cost of replacing, not just the sticker price of a new stove. Replacement also involves delivery, removal of the old appliance, installation, and sometimes gas, electrical, countertop, or cabinetry work.",
          "Many homeowners use a rough screening idea: the closer a repair gets to a large share of that all-in replacement cost, the more carefully replacement deserves a look — especially on an older appliance. Treat that as a way to frame the comparison, not a threshold that decides it. Condition, safety, and how long the repair should last still matter.",
        ],
      },
      {
        heading: "Factor 4: Whether the right parts are still available",
        body: [
          "A repair is only practical if the correct component can still be sourced. Model-specific parts — control boards, valves, and some ignition assemblies — are discontinued eventually, and a stove can become impractical to repair well before it stops working.",
          "This is worth confirming early. If a critical part is unavailable or subject to a long wait, that changes the decision even when everything else points toward repair.",
        ],
      },
      {
        heading: "Factor 5: Safety signs that outrank cost",
        body: [
          "Some symptoms come before any cost comparison. A gas smell, sparking, an electrical burning odor, visibly damaged wiring, or repeated breaker trips all need to be resolved before the appliance is used normally again, whatever you decide about repair or replacement.",
          "If you smell gas, stop using the stove, avoid flames and electrical switches, leave the area if the odor is strong, and call PG&E at 1-800-743-5000 or 911 from a safe location. Only once the area is confirmed safe does the repair-or-replace conversation make sense.",
        ],
      },
      {
        heading: "Factor 6: One fault, or a pattern",
        body: [
          "There is a real difference between an appliance that broke and an appliance that keeps breaking. A single failed igniter, element, switch, or connection on a stove that has otherwise been dependable is a contained problem with a contained fix.",
          "Different components failing close together points at general wear rather than one bad part. That pattern tends to continue, and each new repair gets harder to justify.",
        ],
        bullets: [
          "One part failed, first fault in years — repair is usually the sensible route",
          "Same fault returning after previous service — ask what the underlying cause is",
          "Different parts failing within a short period — compare replacement seriously",
          "Damage affecting several connections or the wiring — needs assessment before either choice",
        ],
      },
      {
        heading: "Factor 7: What you need from the kitchen",
        body: [
          "The practical side matters too. A repair can often restore cooking sooner when the part is available, while replacing means shopping, delivery scheduling, and installation. If the stove is the only cooking appliance in the home, that difference is worth weighing.",
          "Set against that, replacing once can be less disruptive overall than a series of repairs on an appliance that has become unpredictable. The question is which option gives you a working kitchen you can rely on for the longest.",
        ],
      },
      {
        heading: "A checklist before you spend money",
        body: [
          "Run through these before committing either way. Mostly positive answers point toward repair. Several negatives — especially around safety, repeat failures, and parts — mean replacement deserves a proper comparison.",
        ],
        bullets: [
          "Is only one burner or one part affected?",
          "Is this the first significant repair in the last year or two?",
          "Is the repair small relative to the full cost of replacing and installing?",
          "Are the correct parts still available without a long wait?",
          "Has the stove otherwise worked reliably?",
          "Is there no unresolved gas or electrical safety concern?",
          "Does the diagnosis explain the cause, not just the symptom?",
        ],
      },
      {
        heading: "Repair the fault, replace the pattern",
        body: [
          "The short version: repair when the fault is isolated, the parts exist, useful life remains, and the work should restore dependable operation. Replace when age, repeated failures, missing parts, or a safety problem that cannot be fully corrected make another repair poor value.",
          "If you are unsure which side of that line your stove falls on, get it diagnosed before buying a new one. SanMateo FixHub works on gas and electric stoves, ranges, and cooktops across San Mateo and the nearby Peninsula, and a diagnosis is what turns this from guesswork into a decision.",
        ],
      },
    ],
    faqs: [
      {
        question: "How old is too old to repair a stove?",
        answer:
          "There is no exact cutoff. As a stove gets older it becomes more worthwhile to compare each significant repair against replacement, because more components have aged together. A small repair on an otherwise reliable older stove can still be sensible.",
      },
      {
        question: "Is it cheaper to repair or replace a stove?",
        answer:
          "Repair is usually the lower-cost option for a single contained fault. Replacement can be better value when failures keep repeating or when the repair is large relative to the full cost of replacing and installing a comparable appliance.",
      },
      {
        question: "What stove problems are usually not worth repairing?",
        answer:
          "Several major failures at once, extensive heat damage, a discontinued critical part, or a recurring gas or electrical fault that cannot be fully corrected are the situations where another repair is hardest to justify.",
      },
      {
        question: "Should I repair a gas stove or replace it?",
        answer:
          "Repair often suits a gas stove with one failed igniter, switch, or burner component and no history of related faults. Replacement becomes the better option when problems recur or safe operation cannot be restored with confidence.",
      },
      {
        question: "Is repairing an electric stove worth it?",
        answer:
          "Often yes, when a single element, coil, socket, switch, or connection has failed. Repeated breaker trips or damage across the wiring point to something broader that needs assessment before deciding.",
      },
      {
        question: "Do I need a diagnosis before deciding?",
        answer:
          "It is the step that makes the decision informed. Without knowing which part failed and why, it is impossible to compare the repair against replacement or to know whether the fix will last.",
      },
    ],
    relatedLinks: [
      {
        label: "What affects stove repair cost",
        href: "/stove-repair-cost-san-mateo-ca/",
        description: "How diagnosis, parts, and access shape an estimate.",
      },
      {
        label: "Stove repair in San Mateo",
        href: "/services/stove-repair-san-mateo-ca/",
        description: "Gas and electric stove, range, and cooktop repair.",
      },
      {
        label: "How the repair process works",
        href: "/repair-process/",
        description: "What happens from first call to completed repair.",
      },
      {
        label: "Request a diagnosis",
        href: "/contact/",
        description: "Send the model, symptom, and how to reach you.",
      },
    ],
  },

  // ── 2. Clicking after cleaning or a spill ──────────────────────────────────
  {
    slug: "gas-stove-clicking-after-cleaning-spill",
    title: "Gas Stove Clicking After Cleaning or a Spill?",
    h1: "Why Is My Gas Stove Clicking After Cleaning or a Spill?",
    metaTitle: "Gas Stove Clicking After Cleaning or a Spill?",
    metaDescription:
      "Clicking that starts right after you clean the cooktop or a pot boils over usually points to moisture or a burner cap that has shifted. What is safe to check.",
    excerpt:
      "Clicking that begins right after cleaning or a boil-over usually has a different cause than clicking that has been building for weeks.",
    quickAnswer:
      "Clicking that starts straight after cleaning or a spill is most often moisture around the burner, a burner cap knocked out of position, or debris across the burner ports. Let everything dry fully, check the cooled cap sits flat, and clear loose debris. If clicking continues once it is dry and seated, the ignition system needs inspection.",
    publishedTime: "2026-07-24T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    content: [
      {
        heading: "Why timing points to the cause",
        body: [
          "A gas burner clicks because the ignition system is producing a spark. That spark is meant to light gas arriving at the burner ports. When clicking continues without a flame, something is interrupting that sequence.",
          "When the clicking starts immediately after you cleaned the cooktop, washed removable burner parts, or a pot boiled over, the timing itself is a clue. The most likely causes are the ones cleaning and spills create: water where the spark needs to jump, a cap that was lifted and not put back flat, or debris pushed into the burner ports. Clicking that has been getting worse over weeks is a different situation, covered on our page about a stove that clicks but will not light.",
        ],
      },
      {
        heading: "Moisture around the burner",
        body: [
          "Water is the single most common reason a burner clicks after cleaning. It does not take much — a damp burner cap, water sitting in the burner head, or moisture around the igniter tip is enough to stop the spark doing its job.",
          "The fix is patience rather than tools. Turn the burner off, leave the area to dry completely, and give removable parts time to air-dry fully before putting them back. Warm rooms and airflow help. If the burner lights normally once everything is properly dry, moisture was the problem.",
        ],
      },
      {
        heading: "A burner cap that has shifted",
        body: [
          "The burner cap needs to sit flat and centered on the burner head. Cleaning is exactly when caps get lifted, rotated, put back at a slight angle, or occasionally set down upside down. When the cap is not seated properly, gas does not reach the spark the way it should.",
          "Once the stove is completely cool, look at the cap and confirm it sits level and central, with no visible gap or tilt. Reseating a cool cap that is simply out of place is a normal homeowner check. If the burner still fails after the cap is properly seated and dry, stop there — the cause is something else.",
        ],
      },
      {
        heading: "Debris across the burner ports",
        body: [
          "Burner ports are the small openings gas passes through before it ignites. A boil-over can leave sauce, sugar, or food residue across them, which stops gas spreading evenly around the burner. That can show up as slow lighting, a flame on one side only, or a weak flame.",
          "Clearing loose, visible debris from a cool burner surface is reasonable. What is not reasonable is going further: do not scrape or dig into the ports, do not soak or bend the igniter, and do not take gas components apart. If the ports still look blocked after light cleaning, that is a job for a technician rather than a screwdriver.",
        ],
      },
      {
        heading: "Safe checks, and where they stop",
        body: [
          "Everything below assumes the stove is off, fully cool, and there is no gas smell. If there is any gas odor, none of it applies — skip to the safety section.",
        ],
        bullets: [
          "Let the burner area and any washed parts dry completely before trying again",
          "Confirm the cooled burner cap sits flat, level, and centered",
          "Clear loose, visible debris from around the burner without disassembling anything",
          "Check whether one burner is affected or several — it changes what is likely",
          "Stop and call for inspection if clicking continues once everything is dry and seated",
        ],
      },
      {
        heading: "When clicking is no longer about moisture",
        body: [
          "If the burner is dry, the cap is seated, the ports are clear, and it still clicks without lighting, the cause has moved beyond anything cleaning caused. At that point the ignition system itself is the likely candidate — a worn or cracked igniter, a weak spark, a failing switch, or a problem in the spark module or its wiring.",
          "That is also the point to stop testing. Repeated clicking with no flame can release unburned gas around the cooktop, so continuing to try the burner adds risk without adding information. Igniter and spark components need testing rather than guesswork, which is what igniter repair covers.",
        ],
      },
      {
        heading: "If you smell gas, stop",
        body: [
          "A gas smell changes the situation entirely. Do not keep trying to light the burner, do not use matches or lighters, and do not operate electrical switches near the stove.",
          "Turn the knob fully off if you can do so safely, leave the area if the odor is strong or spreading, and call PG&E at 1-800-743-5000 or 911 from a safe location. Arrange for the stove to be looked at only after the area has been confirmed safe.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why did my gas stove start clicking right after I cleaned it?",
        answer:
          "Cleaning introduces the two most common causes at once: moisture around the burner and igniter, and a burner cap that was lifted and not reseated flat. Both interrupt the spark or the gas reaching it.",
      },
      {
        question: "How long should I let a wet burner dry?",
        answer:
          "Long enough that the cap, burner head, igniter area, and surrounding surface are completely dry to the touch, with washed parts fully air-dried before they go back. Rushing this is the usual reason the clicking seems to persist.",
      },
      {
        question: "Is it safe to keep trying the burner while it clicks?",
        answer:
          "No. Repeated attempts with no flame can release unburned gas around the cooktop. Turn the knob fully off and let the burner area dry, then try once. If it still clicks without lighting, stop and arrange an inspection.",
      },
      {
        question: "Can I clean the igniter myself?",
        answer:
          "You can gently clear visible food or grease from around the burner when the stove is off and cool. Do not bend, scrape, soak, or force the igniter itself — it is fragile and it is part of the ignition system.",
      },
      {
        question: "What if the clicking continues after everything is dry?",
        answer:
          "That points away from moisture and toward the ignition components — the igniter, spark wire, switch, or module. These need proper testing to identify which part has failed, so the burner should be inspected rather than tested repeatedly.",
      },
      {
        question: "All my burners started clicking oddly — is that different?",
        answer:
          "Yes. When several burners behave strangely at once, the cause is more likely to sit in the shared ignition circuit or controls than in one burner's cap or ports, and it needs appliance-level diagnosis.",
      },
    ],
    relatedLinks: [
      {
        label: "Stove clicking but not lighting",
        href: "/problems/stove-clicking-but-not-lighting/",
        description: "The full problem guide when clicking is not cleaning-related.",
      },
      {
        label: "Gas stove repair in San Mateo",
        href: "/services/gas-stove-repair-san-mateo-ca/",
        description: "Burner, ignition, and gas-flow faults on gas stoves.",
      },
      {
        label: "Igniter repair",
        href: "/services/igniter-repair-san-mateo-ca/",
        description: "When the spark is weak, intermittent, or absent.",
      },
      {
        label: "Gas smell from a stove",
        href: "/problems/gas-smell-from-stove/",
        description: "Safety steps if you can smell gas at any point.",
      },
      {
        label: "Request an inspection",
        href: "/contact/",
        description: "Tell us which burner, and what you have already checked.",
      },
    ],
  },

  // ── 3. One burner cold while the others work ───────────────────────────────
  {
    slug: "one-stove-burner-not-heating",
    title: "One Stove Burner Not Heating? What It Usually Means",
    h1: "One Stove Burner Not Heating While the Others Work?",
    metaTitle: "One Stove Burner Not Heating? What It Usually Means",
    metaDescription:
      "When a single burner stays cold and the rest of the stove works, the fault is usually local to that burner. What that means on gas and electric stoves.",
    excerpt:
      "A single cold burner narrows the search considerably — here is what it points to on gas and on electric, and when it means something broader.",
    quickAnswer:
      "When one burner stays cold and the others work normally, the fault is usually local to that burner rather than the appliance. On electric stoves that most often means the element, its socket, or the switch behind it. On gas stoves it points to the burner cap, ports, or igniter. Several failed burners suggest something shared.",
    publishedTime: "2026-07-25T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    content: [
      {
        heading: "Why one cold burner is useful information",
        body: [
          "A stove that has stopped heating altogether and a stove with one dead burner are different problems, even though they feel similar in the kitchen. If the other burners light and heat normally, the gas supply, the power supply, and most of the shared controls are demonstrably working.",
          "That narrows things considerably. It means the fault is most likely in the parts belonging to that one burner — and which parts those are depends on whether the stove is electric or gas. Our broader guide to a stove not heating covers the case where nothing works at all.",
        ],
      },
      {
        heading: "One electric element staying cold",
        body: [
          "On an electric stove, each burner has its own element and its own path for power. When a single element stays cold while the others glow normally, the element itself, the socket it plugs into, or the switch controlling it are the usual candidates.",
          "Typical signs are a burner that stays completely cold, one that glows unevenly or only in patches, or one that takes noticeably longer than the others to do the same job. On a coil stove you may also see visible blistering or damage on the coil itself.",
        ],
      },
      {
        heading: "Burner socket and switch symptoms",
        body: [
          "A coil burner plugs into a receptacle, and that connection is a common failure point because it carries a high load and gets moved. A burner that works intermittently, heats only when the coil is nudged, or has a socket that looks darkened or burned is showing connection symptoms rather than element symptoms.",
          "The switch behind the burner is the other candidate: a burner stuck on one heat level, or one that ignores the knob entirely, points there. Reseating a cool, removable coil that is designed to come out is a reasonable check. Anything involving a burned socket, the wiring behind it, or opening the cooktop is not — those carry high current and need a technician.",
        ],
      },
      {
        heading: "One gas burner not lighting",
        body: [
          "On a gas stove, a single burner that will not light while the others do points at that burner's own hardware. The cap may be sitting badly, the ports may be blocked, or the igniter serving it may be weak or failing.",
          "The pattern helps identify which. A burner that clicks but never catches suggests the spark is happening but gas is not reaching it properly, or the igniter is too weak to light it. A burner that lights and then goes out, or burns with a weak or uneven flame, points more toward gas flow through blocked ports.",
        ],
      },
      {
        heading: "Burner cap, port, and igniter symptoms",
        body: [
          "These three are worth separating because only one of them is a homeowner check.",
        ],
        bullets: [
          "Cap out of position: gas does not reach the spark correctly — reseating a cool cap is safe to check",
          "Blocked ports: uneven flame, one-sided lighting, or slow ignition — clear only loose, visible debris",
          "Weak or failing igniter: clicking with no flame, or a spark that looks faint — needs testing, not cleaning",
          "No spark at all: the igniter, wiring, switch, or module needs professional diagnosis",
        ],
      },
      {
        heading: "When more than one burner fails",
        body: [
          "The picture changes as soon as a second burner is involved. Multiple burners failing together points away from individual components and toward something they share — the gas supply, the ignition circuit, the wiring, or the control board.",
          "The same applies if the stove also trips the breaker, shows error codes, or has unresponsive controls. Those are appliance-level symptoms and need appliance-level diagnosis rather than burner-by-burner troubleshooting.",
        ],
      },
      {
        heading: "What you can safely check",
        body: [
          "With the stove off and completely cool, and only if there is no gas smell, sparking, smoke, or burning odor:",
        ],
        bullets: [
          "Confirm whether it really is one burner or more — try each one deliberately",
          "Reseat a cool, removable coil burner that is designed to be removable",
          "Check that a cool gas burner cap sits flat and centered",
          "Clear light, visible debris from around the burner",
          "Note whether the burner fails every time or only sometimes",
        ],
      },
      {
        heading: "Where troubleshooting should stop",
        body: [
          "Stop and call for service if you notice a gas smell, sparks, smoke, a burning smell, repeated breaker trips, melted or discolored parts, or a burner that will not switch off. Do not open the cooktop, work on wiring, test at the electrical panel, or take gas components apart.",
          "One dead burner is rarely an emergency, but it is worth having looked at rather than working around. A burned socket or a failing connection tends to get worse, and the diagnosis is usually quick once someone can test the burner properly. SanMateo FixHub covers burner faults on gas and electric stoves across San Mateo and the nearby Peninsula.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I keep using the stove if one burner does not work?",
        answer:
          "Usually yes, provided there is no gas smell, sparking, smoke, burning odor, or breaker problem. The failed burner should still be checked, because a bad connection or a failing switch tends to get worse rather than settle.",
      },
      {
        question: "Why would one electric burner stay cold when the others work?",
        answer:
          "The element itself may have failed, the socket it plugs into may be loose or burned, or the switch controlling that burner may not be sending power. All three affect only that burner, which is why the rest of the cooktop is unaffected.",
      },
      {
        question: "Why does one gas burner click but never light?",
        answer:
          "The spark is being produced but gas is not reaching it properly, or the igniter is too weak to ignite it. A misaligned cap, blocked ports, or a worn igniter are the common explanations for a single burner behaving this way.",
      },
      {
        question: "Does one failed burner mean the stove is failing?",
        answer:
          "Not usually. A single burner fault is normally contained to that burner's own components. It is when several burners fail together, or the appliance trips the breaker or shows errors, that something broader is more likely.",
      },
      {
        question: "Is it safe to swap a coil burner to another socket to test it?",
        answer:
          "Reseating a cool, removable coil in its own socket is a normal check. Beyond that, leave testing to a technician — a burned or loose receptacle carries a high electrical load and is not a place to experiment.",
      },
      {
        question: "How is a single burner fault diagnosed?",
        answer:
          "By testing that burner's own components in sequence — element, socket, and switch on an electric stove, or cap, ports, spark, and gas flow on a gas stove — and confirming afterwards that the burner heats and shuts off correctly.",
      },
    ],
    relatedLinks: [
      {
        label: "Stove not heating",
        href: "/problems/stove-not-heating/",
        description: "When the whole stove has stopped producing heat.",
      },
      {
        label: "Electric stove not heating",
        href: "/problems/electric-stove-not-heating/",
        description: "Elements, sockets, switches, and power faults.",
      },
      {
        label: "Burner not working",
        href: "/problems/burner-not-working/",
        description: "The full problem guide for an unresponsive burner.",
      },
      {
        label: "Burner repair",
        href: "/services/burner-repair-san-mateo-ca/",
        description: "Burner, socket, and switch repair on gas and electric stoves.",
      },
      {
        label: "Book a burner diagnosis",
        href: "/contact/",
        description: "Tell us which burner and what it does when you try it.",
      },
    ],
  },

  // ── 4. Brief ignition odor vs a possible leak ─────────────────────────────
  {
    slug: "brief-gas-smell-vs-possible-leak",
    title: "Brief Gas Smell or Possible Leak? Know the Difference",
    h1: "Brief Gas Smell During Ignition or a Possible Gas Leak?",
    metaTitle: "Brief Gas Smell or Possible Leak? Know the Difference",
    metaDescription:
      "A one-second gas smell as a burner lights is not the same as an odor that lingers, spreads, or appears with the stove off. How to tell, and what to do first.",
    excerpt:
      "A momentary odor as a burner catches is not the same as gas you can smell with the stove off. The difference decides what you do next.",
    quickAnswer:
      "A faint odor for a second as a burner lights can be normal. Gas you can smell when the stove is off, an odor that lingers, strengthens, or spreads, or any smell with hissing means stop. Do not test the burner again, avoid flames and switches, leave if it is strong, and call PG&E at 1-800-743-5000 or 911 from a safe location.",
    publishedTime: "2026-07-26T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    content: [
      {
        heading: "The difference that matters",
        body: [
          "Gas has an added rotten-egg odor precisely so people notice it. That means a brief trace as a burner lights is not unusual — a small amount of gas leaves the burner in the moment before the flame catches, and you may smell it for a second.",
          "What matters is what happens next. A normal ignition odor is faint, tied to the moment of lighting, and gone almost immediately. An odor that lingers after the flame is established, gets stronger, spreads beyond the stove, or is present when nothing is switched on is a different thing entirely, and it should be treated as a possible leak until someone qualified says otherwise.",
        ],
      },
      {
        heading: "What a brief ignition odor looks like",
        body: [
          "The pattern is specific: you turn the knob, there is a faint smell for roughly a second, the burner lights, and the smell disappears. The flame then burns steadily and mostly blue.",
          "Even this is worth watching. If the same burner starts taking several clicks to catch, or the smell becomes noticeable every time you use it, the ignition is getting slower — often from moisture, debris in the burner ports, a cap that is not seated, or a weakening igniter. That is a repair conversation rather than an emergency, but it should not be left indefinitely.",
        ],
      },
      {
        heading: "Signs that point to a possible leak",
        body: [
          "Any of the following moves the situation from maintenance to safety. If you are unsure which category you are in, treat it as the more serious one.",
        ],
        bullets: [
          "You can smell gas when the stove is completely off",
          "The odor lingers after the burner has lit, or keeps returning",
          "It is getting stronger, or spreading beyond the kitchen",
          "There is a hissing sound near the appliance or behind it",
          "The smell is strongest at the back of the stove or near the connection",
          "A burner clicks repeatedly without lighting while you can smell gas",
          "Anyone in the home has a headache, dizziness, or nausea near the stove",
        ],
      },
      {
        heading: "What to do right now",
        body: [
          "If you suspect a leak, act in this order. The aim is to remove ignition sources and get people away from the gas — not to find the source yourself.",
        ],
        bullets: [
          "Stop using the appliance and turn the knob fully off, if you can do that without moving toward a strong odor",
          "Do not try the ignition again — repeated attempts release more gas",
          "Avoid flames of any kind: matches, lighters, candles, cigarettes, another burner",
          "Do not operate electrical switches, outlets, fans, or appliances near the stove",
          "Ventilate only if the odor is faint and it is safe to open a nearby door or window",
          "If the odor is strong, spreading, or anyone feels unwell, leave immediately with everyone in the home, pets included",
          "From outside or another safe location, call PG&E at 1-800-743-5000, or 911",
        ],
      },
      {
        heading: "What not to attempt",
        body: [
          "Some of the most dangerous responses to a gas smell look like sensible troubleshooting. They are not.",
        ],
        bullets: [
          "Never test for a leak with a flame",
          "Do not adjust or attempt to repair a gas valve, connector, or line",
          "Do not move the stove to look behind it while you can smell gas",
          "Do not take gas components apart",
          "Do not use a fan to clear the air if a leak is suspected",
          "Do not assume it is fine because the same smell happened before",
        ],
      },
      {
        heading: "After the area is confirmed safe",
        body: [
          "Repair comes after the safety question is settled, not alongside it. Once PG&E or emergency services have assessed the situation and confirmed the area is safe, the appliance itself still needs looking at before it goes back into normal use — particularly if the odor was tied to one burner or to ignition.",
          "At that stage, a stove-focused technician can inspect the burner, ignition components, and connections to establish why the odor was occurring. SanMateo FixHub handles that appliance-side inspection for gas stoves, ranges, and cooktops across San Mateo and the nearby Peninsula, once the utility or emergency services have confirmed it is safe to work on the appliance.",
        ],
      },
      {
        heading: "Recurring odor deserves an answer",
        body: [
          "A smell that keeps coming back during ignition is telling you something is drifting out of adjustment, even when each individual occurrence seems minor. Delayed ignition, blocked ports, a cap that no longer seats properly, or an igniter losing strength all tend to get worse rather than better.",
          "Getting it inspected while it is still an ignition-quality issue is considerably better than waiting until the appliance is behaving unpredictably. If in doubt at any point, treat the odor as serious first and sort the repair out afterwards.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my stove smell like gas when I turn it on?",
        answer:
          "A small amount of gas leaves the burner before the flame catches, so a faint odor for about a second during ignition can be normal. Repeated odor, slow lighting, or clicking without a flame points to an igniter, burner, or gas-flow problem instead.",
      },
      {
        question: "Is a slight gas smell from a stove normal?",
        answer:
          "A momentary trace as a burner lights can be. It should not linger, strengthen, spread, or keep returning. If the smell is strong, constant, or present with the stove off, leave the area and call PG&E at 1-800-743-5000 or 911 from a safe location.",
      },
      {
        question: "Can I use my stove if I can smell gas?",
        answer:
          "No. Stop using it until the cause is established. If the odor is strong or spreading, leave immediately and call for emergency help. If it is faint but keeps returning during use, stop using that burner and arrange an inspection.",
      },
      {
        question: "How do I know whether my stove has a gas leak?",
        answer:
          "Warning signs include gas you can smell with the stove off, odor near the back of the appliance, hissing, repeated failed ignition alongside a smell, or headaches, dizziness, or nausea near the stove. Only the utility or a qualified professional can confirm a leak.",
      },
      {
        question: "Should I open windows if I smell gas?",
        answer:
          "Only if the odor is faint and you can open a nearby door or window without moving toward the smell. If it is strong or spreading, leave first — ventilating is not worth the delay, and do not use a fan.",
      },
      {
        question: "Who should I call first?",
        answer:
          "The gas utility or emergency services come first: PG&E at 1-800-743-5000, or 911. Appliance repair is the step after the area has been confirmed safe, not a substitute for that call.",
      },
    ],
    relatedLinks: [
      {
        label: "Gas smell from a stove",
        href: "/problems/gas-smell-from-stove/",
        description: "The full safety guide, including what to do first.",
      },
      {
        label: "Emergency stove repair",
        href: "/services/emergency-stove-repair-san-mateo-ca/",
        description: "Urgent appliance help once the area is confirmed safe.",
      },
      {
        label: "Gas stove repair in San Mateo",
        href: "/services/gas-stove-repair-san-mateo-ca/",
        description: "Burner, ignition, and gas-flow inspection and repair.",
      },
      {
        label: "Contact SanMateo FixHub",
        href: "/contact/",
        description: "Arrange an inspection after the safety steps are complete.",
      },
    ],
  },

  // ── 5. What shapes a repair estimate ───────────────────────────────────────
  {
    slug: "what-affects-stove-repair-cost-san-mateo",
    title: "What Affects Stove Repair Cost in San Mateo?",
    h1: "What Affects Stove Repair Cost in San Mateo?",
    metaTitle: "What Affects Stove Repair Cost in San Mateo?",
    metaDescription:
      "Why two stoves with the same symptom can produce different estimates: the failed part, gas or electric construction, access, parts availability, and urgency.",
    excerpt:
      "Why two stoves with the same symptom can lead to very different estimates — the factors that actually move the number.",
    quickAnswer:
      "Stove repair estimates vary because the same symptom can have different causes. What moves the number is which part actually failed, whether the stove is gas or electric, how easy the appliance is to access, whether the part is readily available for that brand and model, how urgent the visit is, and whether more than one fault is involved.",
    publishedTime: "2026-07-27T14:00:00.000Z",
    author: "SanMateo FixHub",
    published: true,
    content: [
      {
        heading: "Why there is no single price",
        body: [
          "The most common question about stove repair is what it costs, and the honest answer is that it depends on what is wrong — which nobody knows before the appliance has been looked at. A burner that will not light might need a small part, or it might turn out to be a control or gas-flow problem that takes considerably more work.",
          "That is why this article explains the factors rather than quoting numbers. For guidance on what to expect and how to request an estimate, our stove repair pricing page is the place to start. What follows is what actually moves the figure up or down.",
        ],
      },
      {
        heading: "Diagnosis comes first",
        body: [
          "Every other factor depends on this one. Diagnosis establishes which component failed and why, and it is the only way to give an estimate that means anything. The same symptom regularly has several possible causes, and they are not equivalent in either parts or labor.",
          "A useful diagnosis also tests the connected system rather than replacing the part most obviously associated with the symptom. Confirming whether one burner or the whole appliance is affected, checking the supply, testing the ignition or element, and inspecting nearby connections for heat damage is what prevents a repair that fixes the symptom and leaves the cause.",
        ],
      },
      {
        heading: "Which part actually failed",
        body: [
          "This is usually the largest single factor. Components differ substantially in what they cost and in how long they take to reach and replace.",
          "Simpler components — knobs, caps, sockets, some switches and igniters — generally sit at the more affordable end. Electronic controls, gas valves, spark modules, and wiring harnesses sit higher, both because the parts themselves cost more and because they take longer to access, test, and verify.",
        ],
      },
      {
        heading: "Gas and electric are built differently",
        body: [
          "The two types fail in different ways and need different work. A gas stove involves burners, igniters, spark modules, valves, and gas-flow checks, and gas work carries safety verification that has to be done properly rather than quickly.",
          "An electric stove involves elements, sockets, switches, thermostats, and control boards, with high-current connections that need careful testing. Neither is universally more expensive — it depends entirely on which component failed. Gas stove repair and electric stove repair cover what each involves.",
        ],
      },
      {
        heading: "How easy the appliance is to reach",
        body: [
          "Access affects labor time, and labor time affects the estimate. A freestanding range that can be pulled out is quicker to work on than a built-in cooktop set into a countertop, or a unit in a tight galley kitchen where the appliance cannot easily be moved.",
          "How much has to come apart to reach the failed component matters just as much. Replacing something behind the control panel or under the cooktop surface is a different job from replacing something reachable from the top, even when the part itself is inexpensive.",
        ],
      },
      {
        heading: "Brand, model, and parts availability",
        body: [
          "Widely used mainstream brands generally have components that are straightforward to source. High-end, imported, or older appliances can need model-specific parts that cost more, take longer to arrive, or are no longer made at all.",
          "Availability affects timing as well as cost. If a part has to be ordered, the repair may need a second visit, and if a critical component has been discontinued it may change the conversation entirely — which is where the repair-or-replace comparison starts.",
        ],
      },
      {
        heading: "How urgent the visit is",
        body: [
          "A repair that can be scheduled normally is not the same as one that cannot wait. Safety situations — a gas smell, sparking, smoke, a burning electrical odor, or a burner that will not switch off — need attention promptly, and urgency is a legitimate factor in what a visit involves.",
          "If you have any of those symptoms, deal with the safety side first rather than the cost side. For a gas smell in particular, stop using the stove and call PG&E at 1-800-743-5000 or 911 from a safe location before arranging any repair.",
        ],
      },
      {
        heading: "Whether it is one fault or several",
        body: [
          "A single contained failure is the simplest case to price. Several faults found during the same visit — a failed element alongside a damaged socket, or an ignition problem alongside heat-damaged wiring — change both the parts and the labor involved.",
          "Multiple faults are also a signal in their own right. When a technician finds several components failing together, the sensible next step is often to compare the total against what replacing the appliance would involve, rather than repairing everything by default.",
        ],
      },
      {
        heading: "When replacement enters the conversation",
        body: [
          "Cost is only one side of the decision. If the appliance is older, the same fault has returned repeatedly, or a critical part is unavailable, the value of a repair changes regardless of what it costs on paper.",
          "A diagnosis is what makes that comparison possible, because it tells you what is actually wrong and whether the fix should last. Our guide to repairing or replacing a stove covers how to weigh those factors together.",
        ],
      },
      {
        heading: "What to expect when you ask",
        body: [
          "A straightforward sequence: the appliance is inspected, the fault is identified and explained, and an estimate follows from that diagnosis rather than preceding it. That way the figure reflects your stove rather than an average of everyone else's.",
          "SanMateo FixHub works on gas and electric stoves, ranges, and cooktops across San Mateo and the nearby Peninsula. If you would like an estimate, the most useful things to have ready are the brand and model, what the appliance is doing, and when it started.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why can't I get a price before the visit?",
        answer:
          "Because the same symptom can have several different causes, and they differ in both parts and labor. A burner that will not light might need a small component or reveal a control or gas-flow problem. The estimate follows the diagnosis for that reason.",
      },
      {
        question: "What has the biggest effect on the estimate?",
        answer:
          "Usually which component failed, followed by how much work it takes to reach and test it. Brand and parts availability, whether the stove is gas or electric, urgency, and the number of faults found all contribute as well.",
      },
      {
        question: "Is gas stove repair different from electric stove repair?",
        answer:
          "They involve different components and different checks. Gas work centres on burners, ignition, valves, and gas-flow safety verification; electric work centres on elements, sockets, switches, and controls. Which is more involved depends on the fault, not the fuel.",
      },
      {
        question: "Does the brand of stove matter?",
        answer:
          "Mainly through parts. Mainstream brands generally have components that are easy to source, while high-end, imported, or older appliances may need model-specific parts that cost more, take longer to arrive, or are no longer produced.",
      },
      {
        question: "Why does a built-in cooktop cost more to work on?",
        answer:
          "Access. A built-in unit set into a countertop, or an appliance in a tight kitchen, takes longer to reach safely than a freestanding range that can be pulled out, and labor time is part of any estimate.",
      },
      {
        question: "Should I repair or replace instead?",
        answer:
          "That depends on the appliance's age, its repair history, whether parts are still available, and whether the fault is isolated. A diagnosis gives you the information to compare properly rather than guessing.",
      },
    ],
    relatedLinks: [
      {
        label: "Stove repair pricing guidance",
        href: "/stove-repair-cost-san-mateo-ca/",
        description: "The main pricing page and how to request an estimate.",
      },
      {
        label: "Gas stove repair in San Mateo",
        href: "/services/gas-stove-repair-san-mateo-ca/",
        description: "Burners, ignition, valves, and gas-flow faults.",
      },
      {
        label: "Electric stove repair in San Mateo",
        href: "/services/electric-stove-repair-san-mateo-ca/",
        description: "Elements, sockets, switches, and controls.",
      },
      {
        label: "How the repair process works",
        href: "/repair-process/",
        description: "From first call through diagnosis to completed repair.",
      },
      {
        label: "Request an estimate",
        href: "/contact/",
        description: "Send the brand, model, and what the stove is doing.",
      },
    ],
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

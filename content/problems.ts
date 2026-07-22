import type { Problem } from "@/lib/types";

export const problems: Problem[] = [
  {
    slug: "stove-not-heating",
    name: "Stove Not Heating",
    primaryKeyword: "stove not heating",
    h1: "Why Is My Stove Not Heating?",
    metaTitle: "Stove Not Heating? Common Causes & What to Check",
    metaDescription:
      "Your stove turns on but won't get hot? Learn the common reasons a stove stops heating and the safe checks to try before booking a repair in San Mateo.",
    summary: "Your stove powers on but the burners or elements stay cold or barely warm.",
    quickAnswer:
      "A stove that won't heat usually points to a specific failed part: a worn igniter on a gas burner, a burned-out heating element or bad connection on an electric unit, or a control fault interrupting power. Simple checks include confirming the gas or power supply and knob position. If those are fine, a technician can pinpoint the cause.",
    intro: [
      "When a stove won't heat, the burner may click or glow faintly but never reach cooking temperature, or it may stay completely cold. It is one of the most common stove complaints, and the cause depends on whether you have a gas or electric unit. SanMateo FixHub focuses on stoves and cooktops, so we can help diagnose why yours isn't heating at homes across San Mateo and the Peninsula.",
      "Before assuming the worst, it helps to rule out the simple things: the gas supply valve, the power connection, and whether a knob is fully engaged. If the basics check out and the burner still won't warm, the issue is usually a worn or failed component that needs a closer look.",
    ],
    likelyCauses: [
      {
        title: "Worn or failed igniter (gas)",
        detail:
          "On a gas stove, a weak or failed igniter may spark but not light the burner, or fail to reach the temperature needed to ignite gas, leaving the burner cold.",
      },
      {
        title: "Burned-out heating element (electric)",
        detail:
          "An electric coil or radiant element that has burned through or blistered can lose continuity, so it no longer heats even though power reaches the surface unit.",
      },
      {
        title: "Loose or corroded connection",
        detail:
          "A poor connection at the terminal block, element socket, or wiring can interrupt the current or gas flow a burner needs to heat properly.",
      },
      {
        title: "Faulty burner switch or valve",
        detail:
          "A failing infinite switch on an electric stove or a stuck gas valve can prevent the burner from receiving the energy it needs to get hot.",
      },
      {
        title: "Control board fault",
        detail:
          "On models with electronic controls, a fault on the board can stop it from sending the signal that powers a burner or opens a valve.",
      },
      {
        title: "Clogged burner ports (gas)",
        detail:
          "Food debris or grease blocking the burner ports can restrict gas flow, producing a weak flame or no flame at all on that burner.",
      },
    ],
    nextSteps: [
      "Confirm the stove has power and, for gas units, that the gas supply valve is open.",
      "Check that the knob is turned fully to a heat setting and not stuck between positions.",
      "For electric coils, let the element cool, then make sure it is seated firmly in its socket.",
      "When a gas burner is cool, gently clean any debris from the burner cap and ports.",
      "If the burner still won't heat, request service from SanMateo FixHub for a hands-on diagnosis.",
    ],
    faqs: [
      {
        question: "Why does one burner not heat while the others work?",
        answer:
          "A single cold burner usually points to that burner's own part: a failed element or igniter, a bad connection, or clogged ports. The shared power or gas supply is likely fine since the other burners work.",
      },
      {
        question: "Can a tripped breaker stop my stove from heating?",
        answer:
          "Yes. A tripped breaker or a stove not fully plugged in can cut power. If resetting a clearly tripped breaker doesn't help, or it trips again, stop and have the stove looked at rather than repeatedly resetting.",
      },
      {
        question: "Is a stove that won't heat worth repairing?",
        answer:
          "Often, yes. Many no-heat problems come down to a single part like an element, igniter, or switch. A technician can confirm the cause and explain the options before you decide.",
      },
    ],
    serviceSlug: "stove-repair-san-mateo-ca",
    relatedProblems: ["burner-not-working", "electric-stove-not-heating"],
    icon: "thermometer",
  },
  {
    slug: "stove-clicking-but-not-lighting",
    name: "Stove Clicking But Not Lighting",
    primaryKeyword: "stove clicking but not lighting",
    h1: "Stove Clicking But Not Lighting: Causes & Fixes",
    metaTitle: "Stove Clicking But Not Lighting? Here's Why",
    metaDescription:
      "A gas stove that clicks but won't light often points to a dirty or worn igniter. See the common causes and safe checks before booking a San Mateo repair.",
    summary: "You hear the igniter clicking, but the gas burner won't catch a flame.",
    quickAnswer:
      "Persistent clicking without a flame usually means the spark isn't igniting the gas. Common reasons include a wet or dirty igniter, a burner cap that's out of position, clogged burner ports, or a worn igniter that sparks weakly. Cleaning around a cool burner and reseating the cap can help; if clicking continues, a technician can check the igniter and wiring.",
    intro: [
      "When a gas stove keeps clicking but the burner never lights, the spark igniter is firing but the gas isn't catching. Sometimes the burner eventually lights with a small delay; other times it clicks continuously and never ignites. SanMateo FixHub specializes in stoves, so we can help identify why the burner on your San Mateo range isn't lighting.",
      "Many clicking issues trace back to moisture, food debris, or a misaligned burner cap, all of which can interfere with the spark. If cleaning and reseating the parts doesn't stop the clicking, the igniter or its wiring may be worn and need attention.",
    ],
    likelyCauses: [
      {
        title: "Moisture around the igniter",
        detail:
          "After cleaning or a boil-over, trapped moisture can keep the igniter clicking until it dries. Water on or around the burner is a frequent cause of nonstop clicking.",
      },
      {
        title: "Misaligned burner cap",
        detail:
          "If the burner cap sits crooked or off-center, the spark may not reach the gas properly, so the burner clicks without lighting.",
      },
      {
        title: "Food debris or grease in the ports",
        detail:
          "Spilled food and grease can block the burner ports and the igniter gap, preventing the spark from reaching the gas.",
      },
      {
        title: "Worn spark igniter",
        detail:
          "An aging igniter can produce a weak or inconsistent spark that struggles to light the gas, especially on a single burner.",
      },
      {
        title: "Damaged igniter wiring or module",
        detail:
          "A cracked igniter, frayed wire, or failing spark module can cause clicking that never results in a flame, and can sometimes make several burners click at once.",
      },
    ],
    safety: [
      "If a burner clicks for a while and you smell gas that doesn't clear, turn the knob off and stop using that burner.",
      "Do not lean over the burner with your face or hair close while it is clicking.",
      "If a strong gas odor persists, treat it as a gas leak and follow gas-safety steps rather than continuing to try to light the burner.",
    ],
    nextSteps: [
      "Turn all knobs off, then let the burner cool completely.",
      "Dry the burner area and reseat the burner cap so it sits level and centered.",
      "Gently clean debris from the burner ports and around the igniter when cool.",
      "Test the burner once; if it still only clicks, stop and avoid repeated attempts.",
      "Request service from SanMateo FixHub to check the igniter and wiring.",
    ],
    faqs: [
      {
        question: "Why does my stove keep clicking even when it's off?",
        answer:
          "Clicking with the knobs off is often caused by trapped moisture or a burner cap out of position keeping the spark circuit active. Drying the area and reseating the cap usually helps; if it continues, the igniter switch may be at fault.",
      },
      {
        question: "Is it safe to use the stove while it's clicking?",
        answer:
          "If the burner isn't releasing much gas and no odor lingers, brief clicking is usually not dangerous. But if you smell gas that doesn't clear, turn it off and stop using that burner.",
      },
      {
        question: "Can I fix a clicking burner myself?",
        answer:
          "You can safely dry the area, reseat the burner cap, and clean debris when the burner is cool. Anything involving the igniter, wiring, or gas components is best left to a technician.",
      },
    ],
    serviceSlug: "igniter-repair-san-mateo-ca",
    relatedProblems: ["burner-not-working", "gas-smell-from-stove"],
    icon: "spark",
  },
  {
    slug: "gas-smell-from-stove",
    name: "Gas Smell From Stove",
    primaryKeyword: "gas smell from stove",
    h1: "Gas Smell From Your Stove? Safety Steps to Take First",
    metaTitle: "Gas Smell From Stove? Safety Steps for a Possible Leak",
    metaDescription:
      "Stove smells like gas? Safety comes first. What to do immediately, when a gas leak needs PG&E or 911, and how to get the stove checked in San Mateo.",
    summary: "You notice a gas odor near the stove, whether or not a burner is in use.",
    quickAnswer:
      "If your stove smells like gas, take it seriously. Stop using the stove, avoid anything that could create a spark or flame, and if the odor is strong, leave the area and call PG&E's emergency line at 1-800-743-5000 or 911. A faint smell only while lighting a burner can be normal, but a lingering or strong gas odor, or gas you smell when no burner is on, needs immediate attention.",
    intro: [
      "If your stove smells like gas, natural gas may be escaping, and it should never be ignored. That rotten-egg or sulfur odor is a scent deliberately added to natural gas so a possible leak is easy to notice. If you smell gas near your stove in San Mateo, your safety comes first; SanMateo FixHub can help diagnose the stove itself only after the gas utility has confirmed the situation is safe.",
      "A brief, faint whiff of gas as a burner lights is common and usually clears within seconds. What warrants concern is an odor that lingers, grows stronger, appears when no burner is on, or comes with a burner that clicks but will not light. In those cases, follow the safety steps below before anything else.",
    ],
    likelyCauses: [
      {
        title: "A burner left slightly open",
        detail:
          "A knob turned partway on, or bumped without igniting, can release unburned gas. This is one of the most common and easily overlooked sources of odor.",
      },
      {
        title: "Slow-lighting burner",
        detail:
          "A burner that takes several seconds to catch releases a small amount of gas before ignition, which can produce a brief smell each time.",
      },
      {
        title: "Worn burner valve or seal",
        detail:
          "A valve or seal that no longer closes fully can allow a small, steady release of gas even when the burner is off.",
      },
      {
        title: "Loose gas connection",
        detail:
          "A fitting or connection behind or beneath the stove that has loosened over time can let gas escape and needs professional inspection.",
      },
      {
        title: "Incomplete combustion",
        detail:
          "A burner producing a weak or yellow flame may not be burning gas fully, which can create odor and warrants a closer look at the burner.",
      },
    ],
    safety: [
      "Stop using the stove immediately and turn off all burner knobs if you can do so safely.",
      "Do NOT operate light switches, appliances, or anything electrical, and do not use any flame, lighter, or match.",
      "If the smell is faint, open a nearby window or door to ventilate the area; if it is strong, do not stop to do this and leave right away.",
      "Do not use your phone while inside the area where you smell gas.",
      "If the smell is strong, leave the area right away and take others with you, leaving a door open as you go.",
      "From a safe location away from the odor, call PG&E's gas emergency line at 1-800-743-5000, or call 911.",
      "Do not turn the gas or appliances back on yourself; wait for the utility or a qualified professional to confirm it is safe.",
      "Once the leak source is confirmed and the area is safe, contact a qualified stove technician such as SanMateo FixHub for any needed stove repair.",
    ],
    nextSteps: [
      "Treat safety first: follow the steps above before troubleshooting anything.",
      "Check that all knobs are fully in the off position once it is safe to do so.",
      "Note when the smell occurs, such as only while lighting a burner, when a burner will not light, or constantly.",
      "After the utility confirms the area is safe, contact SanMateo FixHub to inspect the stove.",
    ],
    faqs: [
      {
        question: "Is a slight gas smell when lighting the burner normal?",
        answer:
          "A faint, brief odor as the burner ignites is common and should clear within seconds. An odor that lingers, strengthens, or appears when no burner is on should be treated as a possible leak.",
      },
      {
        question: "Who do I call if I smell gas in San Mateo?",
        answer:
          "From a safe location away from the smell, call PG&E's gas emergency line at 1-800-743-5000, or 911 if the odor is strong or you feel unwell. Have the stove looked at only after the area is confirmed safe.",
      },
      {
        question: "Can I keep using my stove if I smell gas sometimes?",
        answer:
          "No. Stop using the stove until the source is identified. A recurring gas smell can indicate a valve, seal, or connection issue that needs professional inspection.",
      },
      {
        question: "My gas stove won't light but I smell gas. What should I do?",
        answer:
          "Stop trying to light it. A burner that clicks but will not light can release unburned gas, and repeated attempts risk igniting it. Turn the knob fully off, avoid flames and sparks, ventilate or leave if the smell is strong, and call PG&E at 1-800-743-5000 or 911. Once the area is confirmed safe, have the burner's igniter and valve inspected.",
      },
      {
        question: "How do I know if my stove has a gas leak?",
        answer:
          "A gas leak from a stove often shows up as a rotten-egg or sulfur smell that lingers or appears when no burner is on, sometimes with a hissing sound or a burner that smells of gas without lighting. Any of these means you should stop using the stove and follow the safety steps above; only PG&E or a qualified professional can confirm and locate a leak.",
      },
    ],
    serviceSlug: "gas-stove-repair-san-mateo-ca",
    emergencyRelevant: true,
    relatedProblems: ["stove-clicking-but-not-lighting", "burner-not-working", "uneven-burner-flame"],
    icon: "alert",
  },
  {
    slug: "burner-not-working",
    name: "Burner Not Working",
    primaryKeyword: "burner not working",
    h1: "Why Is One Stove Burner Not Working?",
    metaTitle: "Stove Burner Not Working? Common Causes Explained",
    metaDescription:
      "One burner won't light or heat while the others work fine? See the likely causes and safe checks before booking a stove burner repair in San Mateo.",
    summary: "A single burner won't light or heat, while the rest of the stove works normally.",
    quickAnswer:
      "When one burner fails but the others work, the problem is usually specific to that burner: a worn igniter, a burned-out element, clogged ports, a bad connection, or a failing switch or valve. Reseating an electric coil or cleaning a cool gas burner sometimes helps. If it still won't work, a technician can isolate the faulty part.",
    intro: [
      "A single burner that won't light or heat, while the others work fine, is a common and usually fixable stove problem. Because the rest of the stove works, the shared power or gas supply is likely fine, and the issue is isolated to that one burner. SanMateo FixHub specializes in stoves and can help identify which part on your San Mateo range is at fault.",
      "The cause differs between gas and electric burners, but in both cases it often comes down to a single component or an easy-to-miss issue like a misaligned cap or an unseated coil. A few safe checks can rule those out before a technician takes a closer look.",
    ],
    likelyCauses: [
      {
        title: "Worn igniter on that burner (gas)",
        detail:
          "A single gas burner that clicks but won't light, or won't spark at all, often has a worn or dirty igniter specific to that position.",
      },
      {
        title: "Burned-out element (electric)",
        detail:
          "An electric coil or radiant element that has failed will stay cold even though the rest of the cooktop heats normally.",
      },
      {
        title: "Unseated or corroded coil connection",
        detail:
          "A plug-in coil that isn't fully seated, or a corroded socket, can break the circuit so that one burner won't heat.",
      },
      {
        title: "Clogged burner ports (gas)",
        detail:
          "Food debris or grease blocking the ports on one burner can prevent it from lighting or produce only a partial flame.",
      },
      {
        title: "Failing burner switch or valve",
        detail:
          "A worn infinite switch on an electric stove or a stuck valve on a gas burner can stop that single burner from receiving power or gas.",
      },
    ],
    nextSteps: [
      "Confirm the issue affects only one burner, which points to that burner's parts.",
      "For an electric coil, let it cool, then unplug and firmly reseat it in the socket.",
      "For a gas burner, let it cool and clean debris from the cap and ports, then reseat the cap level.",
      "Try the burner once more; if it still won't work, avoid repeated attempts.",
      "Request service from SanMateo FixHub to test and replace the faulty part.",
    ],
    faqs: [
      {
        question: "Why does only one burner not work?",
        answer:
          "A single dead burner almost always means a part unique to that burner has failed, such as an element, igniter, switch, or connection. The other burners keep working because they don't share that part.",
      },
      {
        question: "Can I swap an electric coil from a working burner?",
        answer:
          "On many electric stoves you can carefully swap a cool, unplugged coil to a working socket to test it. If the coil heats elsewhere, the original socket or switch may be the issue and should be checked by a technician.",
      },
      {
        question: "Is a single dead burner an emergency?",
        answer:
          "Usually not, as long as there's no gas odor. You can keep using the other burners while you arrange a repair, but stop using a gas burner that releases gas without lighting.",
      },
    ],
    serviceSlug: "burner-repair-san-mateo-ca",
    relatedProblems: ["stove-clicking-but-not-lighting", "uneven-burner-flame"],
    icon: "burner",
  },
  {
    slug: "stove-wont-turn-on",
    name: "Stove Won't Turn On",
    primaryKeyword: "stove won't turn on",
    h1: "Why Won't My Stove Turn On?",
    metaTitle: "Stove Won't Turn On? Causes and Safe Checks",
    metaDescription:
      "A stove that's completely dead often has a power or control issue. Learn the common causes and safe checks before booking a stove repair in San Mateo.",
    summary: "The stove is completely unresponsive, with no lights, display, or burner activity.",
    quickAnswer:
      "A stove that won't turn on at all usually has a power-supply or control problem: a tripped breaker, an unplugged or loose cord, a failed control board, or a control lock engaged. Check the breaker and that the stove is plugged in. If power is present but the stove stays dead, the control board or wiring likely needs a technician.",
    intro: [
      "When a stove won't turn on at all, with no display, indicator lights, or burner response, the problem is usually electrical rather than a single burner part. Even gas stoves rely on electricity for igniters and controls, so a power loss can leave the whole unit dead. SanMateo FixHub specializes in stoves and can help diagnose why yours won't power up in San Mateo.",
      "The first things to rule out are the power supply and any control lock. If the breaker is fine, the stove is plugged in, and the controls are unlocked but it still won't respond, the issue often lies in the control board or internal wiring and needs professional attention.",
    ],
    likelyCauses: [
      {
        title: "Tripped breaker or blown fuse",
        detail:
          "A stove that gets no power will be completely dead. A tripped circuit breaker or blown fuse is a common and simple cause worth checking first.",
      },
      {
        title: "Loose or unplugged power cord",
        detail:
          "A cord that has worked loose from the outlet, or a damaged connection, can cut all power to the stove.",
      },
      {
        title: "Control lock engaged",
        detail:
          "Many stoves have a control lock or child lock that disables the panel. If it's engaged, the stove may appear unresponsive until it's released.",
      },
      {
        title: "Failed control board",
        detail:
          "A fault on the electronic control board can leave the stove with no display or response even when power is reaching it.",
      },
      {
        title: "Faulty wiring or connection",
        detail:
          "A broken internal connection or damaged wiring harness can interrupt power to the controls, keeping the stove from turning on.",
      },
    ],
    safety: [
      "If the stove's cord, plug, or outlet looks scorched, melted, or smells burnt, do not use it and keep it unplugged.",
      "Do not attempt repairs inside the electrical panel or the stove's wiring yourself.",
      "If a breaker trips again right after you reset it, stop and have the stove and circuit inspected by a professional.",
    ],
    nextSteps: [
      "Check your electrical panel and reset the breaker if it is clearly tripped.",
      "Make sure the stove is firmly plugged in and the outlet has power.",
      "Look for a control lock or child lock indicator and release it if engaged.",
      "Check the owner's guidance for any reset step specific to your model.",
      "If the stove still won't turn on, request service from SanMateo FixHub.",
    ],
    faqs: [
      {
        question: "Why is my stove completely dead with no lights?",
        answer:
          "A totally unresponsive stove usually isn't receiving power, or its control board has failed. Start by checking the breaker and the plug; if power is present and it's still dead, the board or wiring likely needs service.",
      },
      {
        question: "Can a control lock make my stove seem broken?",
        answer:
          "Yes. An engaged control lock or child lock can disable the panel so the stove appears dead. Check for a lock indicator and follow your model's steps to release it before assuming a bigger problem.",
      },
      {
        question: "Should I keep resetting a breaker that trips?",
        answer:
          "No. If a breaker trips again right after resetting, that repeated tripping can signal a fault. Stop resetting it and have the stove and circuit checked by a professional.",
      },
    ],
    serviceSlug: "stove-control-board-repair-san-mateo-ca",
    emergencyRelevant: true,
    relatedProblems: ["stove-keeps-shutting-off", "stove-not-heating"],
    icon: "power",
  },
  {
    slug: "electric-stove-not-heating",
    name: "Electric Stove Not Heating",
    primaryKeyword: "electric stove not heating",
    h1: "Electric Stove Not Heating or Burner Sparked and Stopped Working",
    metaTitle: "Electric Stove Not Heating or Burner Sparked & Stopped",
    metaDescription:
      "Electric stove not heating or sparked and stopped working? Learn likely causes, safe next steps, and when to request stove inspection in San Mateo, CA.",
    summary: "An electric burner or element stays cold, won't reach temperature, or sparked and then stopped working.",
    quickAnswer:
      "An electric stove that won't heat often has a burned-out heating element, a worn or arced burner receptacle, a loose wiring connection, a failed control switch, or a breaker/power-supply issue. If a burner sparked and then stopped working, switch it off, stop using it, and arrange a professional inspection rather than reusing it. A stove specialist can test the element, receptacle, and switch.",
    intro: [
      "When an electric stove won't heat, the surface element may stay completely cold or warm only slightly. Because electric burners rely on continuous heating elements and their switches, the cause is usually a specific electrical part rather than the whole supply — especially if the oven or other burners still work. SanMateo FixHub specializes in stoves and can help diagnose an electric burner that isn't heating in San Mateo.",
      "It helps to notice whether one burner or all of them are affected. A single cold burner points to that element or its receptacle, while every element failing together points more toward the power supply or the control. A few safe checks can narrow it down before a technician steps in.",
      "If an electric burner sparked, arced, or flashed and then stopped working, treat it as an electrical fault rather than a quirk. Switch the burner off, avoid using it again, and have it inspected before returning it to service — a burner that has sparked once can have a damaged element, receptacle, or wiring connection that is unsafe to keep using.",
    ],
    likelyCauses: [
      {
        title: "Burned-out heating element",
        detail:
          "A coil or radiant element that has burned through or blistered loses continuity and won't heat, even though power reaches the cooktop.",
      },
      {
        title: "Worn or arced burner receptacle",
        detail:
          "On plug-in cooktops the coil connects into a receptacle. Loose, corroded, or scorched contacts break the circuit and can spark or arc, after which the burner often stops heating entirely.",
      },
      {
        title: "Loose or damaged wiring connection",
        detail:
          "Wiring behind the cooktop or at the terminal block can work loose or overheat over time, interrupting the power that should reach the element.",
      },
      {
        title: "Failed control switch",
        detail:
          "The infinite (control) switch meters how much power the element receives. When it fails, the burner may not heat at all or won't hold a setting.",
      },
      {
        title: "Breaker or power-supply issue",
        detail:
          "Electric stoves use a 240-volt supply. A tripped breaker or a lost leg of power can leave the elements cold while the clock and lights still work.",
      },
    ],
    safety: [
      "If an electric burner sparks, arcs, or flashes, switch it off at the knob right away and stop using that burner.",
      "Don't keep cooking on a burner that sparked and then went dead — a single spark can signal a damaged element, receptacle, or wiring connection.",
      "If you smell burning, see scorch marks, or notice melted contacts, turn the stove off at the breaker and leave it off.",
      "Arrange a professional inspection before returning the burner to service so the element, receptacle, and wiring can be checked.",
      "Never force contact with tape, foil, or a wedged coil — that risks arcing and further damage.",
    ],
    nextSteps: [
      "If a burner sparked, arced, or scorched, switch it off and leave it off until it has been inspected.",
      "Check that the breaker for the stove is fully on, resetting it once if it's clearly tripped.",
      "Note whether one burner or all of them fail to heat.",
      "For a burner that simply won't heat (no sparking), let a plug-in coil cool, then unplug and reseat it firmly in its receptacle.",
      "Try that element in a different working receptacle to see whether it heats there.",
      "If it still won't heat — or if it sparked — request service from SanMateo FixHub to test the element, receptacle, and switch.",
    ],
    faqs: [
      {
        question: "What does it mean when an electric stove burner sparks and then stops working?",
        answer:
          "A spark or arc usually points to a damaged heating element or a worn burner receptacle where the coil plugs in. Once a burner has sparked and gone dead, switch it off and avoid using it — the element, receptacle, or wiring may be unsafe. Have it inspected before returning it to service.",
      },
      {
        question: "Why won't any of my electric burners heat, but the clock works?",
        answer:
          "The clock and lights can run on part of the supply while the elements need the full 240 volts. If one leg of power is lost at the breaker, elements may stay cold. Have the circuit and stove checked if resetting the breaker doesn't restore heat.",
      },
      {
        question: "How do I know if a heating element or receptacle is bad?",
        answer:
          "A bad element often looks blistered or broken, or won't heat when others do. Moving a cool coil to a working receptacle is a common test: if it heats there, the original receptacle, wiring, or switch is the likely fault. Scorching or loose contacts in the receptacle also point to it.",
      },
      {
        question: "Can I replace an electric stove element myself?",
        answer:
          "Reseating a cool plug-in coil is simple, but a receptacle that has arced, hardwired radiant elements, and control switches involve stove wiring. If reseating doesn't help — or if the burner sparked — have a technician confirm and replace the faulty part rather than working on live wiring.",
      },
    ],
    serviceSlug: "electric-stove-repair-san-mateo-ca",
    emergencyRelevant: true,
    relatedProblems: ["stove-not-heating", "burner-not-working"],
    icon: "bolt",
  },
  {
    slug: "stove-keeps-shutting-off",
    name: "Stove Keeps Shutting Off",
    primaryKeyword: "stove keeps shutting off",
    h1: "Why Does My Stove Keep Shutting Off?",
    metaTitle: "Stove Keeps Shutting Off? Common Causes",
    metaDescription:
      "A stove that turns off on its own can point to overheating, a control fault, or power issues. See likely causes and safe checks before a San Mateo repair.",
    summary: "The stove powers on but shuts off on its own during use.",
    quickAnswer:
      "A stove that keeps shutting off may be overheating and protecting itself, losing power from a loose connection or failing breaker, or reacting to a control-board or sensor fault. Keeping vents clear and confirming a solid power connection are safe checks. Because self-shutoff can involve heat and electrical faults, a technician should inspect it.",
    intro: [
      "A stove that shuts off by itself during cooking is both frustrating and a sign that something needs attention. Sometimes it's a built-in safety response to overheating; other times it points to an intermittent power or control problem. SanMateo FixHub specializes in stoves and can help diagnose why yours keeps cutting out in San Mateo.",
      "It helps to notice the pattern: whether it shuts off after a set time, only at high heat, or randomly. That timing gives useful clues about whether the cause is heat-related, a loose connection, or an electronic fault, which a technician can confirm.",
    ],
    likelyCauses: [
      {
        title: "Overheating protection",
        detail:
          "Many stoves shut down to protect themselves when internal temperatures climb too high, often due to blocked vents or a cooling problem.",
      },
      {
        title: "Loose or failing power connection",
        detail:
          "An intermittent connection at the cord, outlet, or terminal block can cut power briefly, causing the stove to shut off unexpectedly.",
      },
      {
        title: "Weak or failing breaker",
        detail:
          "A breaker that is weak or slightly undersized for the load can trip under heat, shutting the stove down during use.",
      },
      {
        title: "Faulty temperature sensor",
        detail:
          "A sensor giving false high-temperature readings can trigger the stove to shut off even when it isn't actually overheating.",
      },
      {
        title: "Control board fault",
        detail:
          "An intermittent fault on the control board can interrupt operation, cutting power to burners or the whole unit at random.",
      },
    ],
    safety: [
      "If the stove shuts off along with a burning smell, scorched cord, or hot outlet, stop using it and keep it unplugged.",
      "Do not defeat or bypass any safety shutoff; it is protecting the appliance and your home.",
      "If a breaker trips each time the stove shuts off, leave it off and have the stove and circuit inspected rather than repeatedly resetting.",
    ],
    nextSteps: [
      "Note the pattern: how long it runs before shutting off and at what heat level.",
      "Make sure any vents or the area around the stove are clear for airflow.",
      "Confirm the power cord is firmly connected and the outlet isn't loose or warm.",
      "Avoid repeatedly resetting a breaker that trips when the stove shuts off.",
      "Request service from SanMateo FixHub to check the sensor, board, and connections.",
    ],
    faqs: [
      {
        question: "Why does my stove shut off after a certain time?",
        answer:
          "Shutting off after a consistent period often points to overheating protection or a sensor issue. Blocked airflow or a faulty temperature sensor can cause the stove to cut out to protect itself.",
      },
      {
        question: "Could a bad outlet make my stove turn off?",
        answer:
          "Yes. A loose or worn outlet or connection can interrupt power intermittently, causing the stove to shut off. A warm or discolored outlet should be checked by a professional right away.",
      },
      {
        question: "Is it safe to keep using a stove that shuts off?",
        answer:
          "It's best not to rely on it. Repeated self-shutoff can signal an overheating or electrical fault. Stop using it if you notice any burning smell or hot cord, and arrange an inspection.",
      },
    ],
    serviceSlug: "stove-control-board-repair-san-mateo-ca",
    emergencyRelevant: true,
    relatedProblems: ["stove-wont-turn-on", "stove-temperature-issue"],
    icon: "power",
  },
  {
    slug: "uneven-burner-flame",
    name: "Uneven Burner Flame",
    primaryKeyword: "uneven burner flame",
    h1: "Why Is My Burner Flame Uneven?",
    metaTitle: "Uneven Burner Flame? Causes and Safe Fixes",
    metaDescription:
      "A weak, yellow, or lopsided gas flame usually means clogged ports or a misaligned cap. See the common causes and safe checks before a San Mateo repair.",
    summary: "A gas burner produces a weak, lopsided, or yellow flame instead of an even blue ring.",
    quickAnswer:
      "An uneven gas flame usually comes from clogged burner ports, a misaligned burner cap, or an air-gas mixture that's off. A healthy flame is steady and blue; yellow, weak, or partial flames point to blockage or airflow issues. Cleaning a cool burner and reseating the cap often helps. If the flame stays uneven, a technician should inspect the burner.",
    intro: [
      "A gas burner should produce a steady, mostly blue ring of flame. When the flame looks lopsided, weak, yellow, or only lights on part of the ring, the burner isn't getting a clean, even mix of gas and air. SanMateo FixHub specializes in stoves and can help pinpoint why a burner on your San Mateo range is burning unevenly.",
      "Most uneven-flame problems come down to clogged ports or a cap that's out of position, both of which are common after spills and cleaning. If cleaning and reseating the burner doesn't restore an even blue flame, the cause may be an airflow or gas-supply issue that needs professional attention.",
    ],
    likelyCauses: [
      {
        title: "Clogged burner ports",
        detail:
          "Food debris, grease, or cleaning residue blocking some of the small ports leaves part of the flame ring weak or missing.",
      },
      {
        title: "Misaligned burner cap",
        detail:
          "A cap that sits crooked or off-center can distort the flame pattern, producing an uneven or lopsided flame.",
      },
      {
        title: "Incorrect air-to-gas mixture",
        detail:
          "If the air shutter or mixture is off, the flame can burn yellow or lift away from the burner instead of a clean blue.",
      },
      {
        title: "Moisture in the burner",
        detail:
          "Water trapped in the burner after cleaning or a boil-over can cause sputtering and an uneven flame until it dries out.",
      },
      {
        title: "Low or inconsistent gas supply",
        detail:
          "A partially closed valve or a supply issue can starve the burner of gas, leaving a small or weak flame across the ring.",
      },
    ],
    safety: [
      "A persistently yellow or sooty flame can produce more carbon monoxide, so don't ignore it; ensure the kitchen is ventilated.",
      "If you smell gas along with an uneven flame, turn the burner off and follow gas-safety steps before using it again.",
      "Do not adjust the burner's air shutter or gas components yourself; leave those to a technician.",
    ],
    nextSteps: [
      "Turn the burner off and let it cool completely.",
      "Remove the cool burner cap and clean debris from the ports with a soft brush or pin.",
      "Dry the burner fully and reseat the cap so it sits level and centered.",
      "Relight the burner and check for a steady blue flame.",
      "If the flame stays uneven or yellow, request service from SanMateo FixHub.",
    ],
    faqs: [
      {
        question: "What should a healthy gas flame look like?",
        answer:
          "A healthy burner flame is steady, mostly blue, and even all the way around the ring. Yellow, orange, weak, or lopsided flames indicate a blockage, airflow, or mixture problem worth addressing.",
      },
      {
        question: "Why is my burner flame yellow instead of blue?",
        answer:
          "A yellow flame usually means the gas isn't mixing with enough air or the ports are dirty. Cleaning a cool burner can help; if it stays yellow, the air-gas mixture may need professional adjustment.",
      },
      {
        question: "Is an uneven flame dangerous?",
        answer:
          "A persistently yellow or sooty flame can produce more carbon monoxide and cooks unevenly, so it's worth fixing. Ventilate the kitchen and have the burner checked if cleaning doesn't restore an even blue flame.",
      },
    ],
    serviceSlug: "burner-repair-san-mateo-ca",
    relatedProblems: ["burner-not-working", "stove-clicking-but-not-lighting"],
    icon: "flame",
  },
  {
    slug: "stove-temperature-issue",
    name: "Stove Temperature Problems",
    primaryKeyword: "stove temperature problem",
    h1: "Stove Temperature Problems: Too Hot or Too Cool?",
    metaTitle: "Stove Temperature Problems? Common Causes",
    metaDescription:
      "Burners running too hot, too cool, or not holding a setting? See the likely causes of stove temperature problems and safe checks before a San Mateo repair.",
    summary: "Burners run too hot, too cool, or won't hold a steady, adjustable heat level.",
    quickAnswer:
      "Stove temperature problems often trace to a failing infinite switch or valve that won't regulate heat, a worn burner, or a control or sensor fault. If a burner only runs on high or won't get hot enough, the switch or valve is a common cause. A technician can test the regulating parts to find why the heat won't hold.",
    intro: [
      "Stove temperature problems show up in a few ways: a burner that only runs on high, one that never gets hot enough, or heat that won't stay steady at the setting you choose. These are usually about how the burner regulates heat rather than a total failure. SanMateo FixHub specializes in stoves and can help diagnose temperature issues on your San Mateo range.",
      "It helps to notice whether the burner is stuck too hot, too cool, or simply cycling oddly. Each pattern points toward a different part, from the switch or valve that meters heat to a sensor or control that manages it. A few observations make the diagnosis faster for a technician.",
    ],
    likelyCauses: [
      {
        title: "Failing infinite switch (electric)",
        detail:
          "The infinite switch cycles an electric element on and off to hold a setting. When it fails, the burner may stay on high, stay low, or not hold temperature.",
      },
      {
        title: "Worn gas valve",
        detail:
          "A gas burner valve that no longer meters flow correctly can leave the flame too high or too low regardless of the knob position.",
      },
      {
        title: "Weak or damaged burner element",
        detail:
          "A partially failed electric element can heat but not reach full temperature, so the burner runs cooler than expected.",
      },
      {
        title: "Faulty temperature sensor",
        detail:
          "On stoves that use sensors to manage surface heat, a faulty sensor can cause the burner to run hotter or cooler than the setting.",
      },
      {
        title: "Control board fault",
        detail:
          "A control-board issue can misread or mismanage heat settings, producing temperatures that don't match the selected level.",
      },
    ],
    nextSteps: [
      "Note whether the burner runs too hot, too cool, or won't hold a steady setting.",
      "Check that the knob turns smoothly and clicks into its settings rather than slipping.",
      "For an electric coil, let it cool and reseat it to rule out a poor connection.",
      "Compare the affected burner to the others to see if the issue is isolated.",
      "Request service from SanMateo FixHub to test the switch, valve, or sensor.",
    ],
    faqs: [
      {
        question: "Why does my burner only run on high?",
        answer:
          "A burner stuck on high often has a failed infinite switch (electric) or a worn valve (gas) that no longer regulates the heat. These parts meter how much energy the burner gets, so they're a common cause of stuck temperatures.",
      },
      {
        question: "Why won't my burner get hot enough?",
        answer:
          "A burner that heats but stays weak may have a partially failed element, a worn valve, or a poor connection. Reseating a cool coil can help; if it still runs cool, the regulating part likely needs service.",
      },
      {
        question: "Can a temperature problem damage my cooking?",
        answer:
          "Yes. A burner that won't hold a setting makes it hard to cook evenly and can scorch or undercook food. Having the regulating part checked restores predictable, adjustable heat.",
      },
    ],
    serviceSlug: "stove-repair-san-mateo-ca",
    relatedProblems: ["stove-not-heating", "stove-keeps-shutting-off"],
    icon: "thermometer",
  },
  {
    slug: "oven-works-but-stove-does-not",
    name: "Oven Works But Stove Doesn't",
    primaryKeyword: "oven works but stove doesn't",
    h1: "Oven Works But the Stovetop Doesn't: Why?",
    metaTitle: "Oven Works But Stove Doesn't? Common Causes",
    metaDescription:
      "When the oven heats but the cooktop won't, the surface burners or their controls are usually at fault. See likely causes before a stove repair in San Mateo.",
    summary: "The oven heats normally, but the surface burners on the cooktop won't work.",
    quickAnswer:
      "When the oven works but the stovetop doesn't, the shared power supply is fine, so the issue is with the surface burners or their controls: failed switches, worn igniters, bad connections, or a cooktop control fault. Checking knob positions and a control lock are safe first steps. A technician can isolate why the burners aren't getting power or gas.",
    intro: [
      "It's a telling symptom when the oven bakes normally but none of the surface burners work. Because the oven runs, the stove is clearly getting power and, on a gas unit, gas. That means the problem is on the cooktop side: the surface burners, their switches, or the wiring that feeds them. SanMateo FixHub specializes in stoves and can help diagnose this on your San Mateo range.",
      "This pattern actually helps narrow things down, since it points away from the main power or supply and toward the surface-burner circuit. A couple of safe checks can rule out simple causes before a technician looks at the connections and controls that serve the cooktop.",
    ],
    likelyCauses: [
      {
        title: "Cooktop control or switch failure",
        detail:
          "The surface burners are controlled separately from the oven. A failed switch or cooktop control can stop all the burners while the oven keeps working.",
      },
      {
        title: "Loose surface-burner connection",
        detail:
          "A loose or damaged connection or wiring harness that feeds the cooktop can cut power or gas to the surface burners specifically.",
      },
      {
        title: "Spark module fault (gas)",
        detail:
          "On a gas stove, a failed spark module that serves the surface igniters can leave the burners unable to light while the oven's separate system works.",
      },
      {
        title: "Engaged control lock",
        detail:
          "Some ranges have a lock that disables the cooktop controls. If it's engaged, the burners may seem dead even though the oven responds.",
      },
      {
        title: "Cooktop wiring or board fault",
        detail:
          "A fault in the wiring or the control board section that serves the surface burners can disable the cooktop while leaving the oven unaffected.",
      },
    ],
    nextSteps: [
      "Confirm the oven truly works, which shows the stove is receiving power and gas.",
      "Check that the surface-burner knobs are turning fully to their settings.",
      "Look for a control lock or child lock that might disable the cooktop, and release it if engaged.",
      "For a gas cooktop, make sure no burner caps were left off or misaligned after cleaning.",
      "If the burners still won't work, request service from SanMateo FixHub.",
    ],
    faqs: [
      {
        question: "Why does my oven work but the burners don't?",
        answer:
          "The oven and cooktop use separate controls and, often, separate circuits within the stove. When only the burners fail, the issue is usually a cooktop switch, spark module, connection, or control rather than the main power supply.",
      },
      {
        question: "Does this mean I need a whole new stove?",
        answer:
          "Not necessarily. Because the oven still works, the fault is often an isolated part on the cooktop side, such as a switch, module, or connection, which a technician can test and replace.",
      },
      {
        question: "Could a control lock be disabling my burners?",
        answer:
          "Yes. Some ranges have a lock that disables the cooktop controls. Check for a lock indicator and follow your model's steps to release it before assuming a larger fault.",
      },
    ],
    serviceSlug: "stove-repair-san-mateo-ca",
    relatedProblems: ["burner-not-working", "stove-wont-turn-on"],
    icon: "stove",
  },
];

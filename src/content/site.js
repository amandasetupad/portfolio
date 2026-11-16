/**
 * THE INBOX EDIT — edit this file.
 *
 * Text, links, career dates, and image paths live here.
 * Replace profile.email and profile.linkedin before you publish.
 * To use your own photos, drop files in public/images/
 * and point the src fields at them, for example "/images/portrait.jpg".
 * Leave a src empty to fall back to the abstract plate.
 */

export const profile = {
  brand: "The Inbox Edit",
  email: "pipare.amanda97@gmail.com",
  linkedin: "https://www.linkedin.com/in/amanda-pipare-b69016130/",
  linkedinLabel: "LinkedIn",
  portrait: "/placeholders/portrait.svg",
  portraitAlt: "Abstract portrait plate, standing in for a photograph",
};

export const seo = {
  title: "The Inbox Edit",
  description: "Before-and-after email examples, with a short note on what changed.",
};

export const demonstrationNote =
  "Constructed examples. Not published campaigns.";

export const navigation = [
  { href: "/#examples", id: "examples", label: "Examples" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export const hero = {
  lines: ["Your inbox", "deserves"],
  accent: "better.",
  lead: "Two emails. A short note on what changed.",
  primary: { label: "See the examples", href: "/#examples" },
};

export const tagline = {
  kicker: "The premise",
  quote: "Making the inbox a place people actually want to be.",
  support:
    "I turn customer insights into emails, journeys and experiences that make people click, connect and come back.",
};

export const about = {
  index: "02",
  label: "About",
  title: ["Part strategist.", "Part creative.", "Always curious."],
  paragraphs: [
    "I'm a marketing professional with experience across CRM, lifecycle marketing, email campaigns and advertising technology. I enjoy combining creative communication with customer insights and data to build meaningful marketing experiences.",
    "My background spans email and SMS campaigns, marketing automation, segmentation, A/B testing, content creation and digital advertising technology.",
    "I believe great marketing happens when the right message reaches the right person at the right moment.",
  ],
  strengthsTitle: "Where I do the work",
  strengths: [
    "Email marketing and copywriting.",
    "Lifecycle and retention marketing.",
    "Marketing automation.",
    "CRM and customer segmentation.",
    "Customer journey optimisation.",
    "A/B testing and campaign analysis.",
    "Marketing technology and monetisation.",
  ],
  timelineTitle: "The path so far",
  timeline: [
    { role: "Ad Operations Manager", dates: "August 2024–Present" },
    { role: "Ad Operations Manager", dates: "May 2020–July 2024" },
    { role: "Marketing & CRM Specialist", dates: "October 2019–May 2020" },
    { role: "Digital Project Manager", dates: "September 2018–January 2019" },
    { role: "Project Assistant", dates: "January–July 2018" },
  ],
};

export const workIntro = {
  index: "01",
  label: "Examples",
  title: "Before and after.",
};

export const journeysIntro = {
  index: "04",
  label: "Behind the automation",
  title: "Behind every great email is a smart journey.",
  support: "An action, a rule, a segment, an email, a next step.",
};

export const journeys = [
  {
    id: "welcome",
    number: "01",
    title: "Welcome and onboarding",
    summary: "Teach the relationship before you ask it for anything.",
    steps: [
      {
        key: "action",
        label: "Customer action",
        title: "They opt in",
        text: "A footer signup, a checkout tick, or a first order with consent attached.",
      },
      {
        key: "trigger",
        label: "Trigger",
        title: "Consent is true",
        text: "signup_completed or first_order. If it is after 21:00 local, wait until morning.",
      },
      {
        key: "segment",
        label: "Audience segment",
        title: "New, and only new",
        text: "Not already in this journey. Split the first line by source: checkout, footer, or a story.",
      },
      {
        key: "email",
        label: "Email",
        title: "Note 01 — orientation",
        text: "What this is, how often it comes, and a preference ask. No offer.",
      },
      {
        key: "next",
        label: "Next action",
        title: "Branch, then stop",
        text: "No preference by day 3: one useful nudge. Day 7: a cadence choice. Then exit.",
      },
    ],
    note: "Cap the journey at three emails. Never send one on the same day as another marketing message. A receipt always goes first; the welcome waits.",
  },
  {
    id: "browse",
    number: "02",
    title: "Abandoned browse",
    summary: "Remember what they looked at. Know when to leave it alone.",
    steps: [
      {
        key: "action",
        label: "Customer action",
        title: "They linger, then leave",
        text: "A product is viewed. No add to bag. No purchase. The session ends.",
      },
      {
        key: "trigger",
        label: "Trigger",
        title: "Four quiet hours",
        text: "product_viewed, and no purchase of that item within four hours.",
      },
      {
        key: "segment",
        label: "Audience segment",
        title: "Known, and not in welcome",
        text: "Identified browsers with prior consent. Exclude anyone in their first two welcome days, and recent purchasers.",
      },
      {
        key: "email",
        label: "Email",
        title: "The object, plainly",
        text: "The item they viewed, one reason it exists, and an easy way back. No countdown.",
      },
      {
        key: "next",
        label: "Next action",
        title: "One follow-up, then silence",
        text: "If they buy, exit. If not, one related idea at 40 hours. Then suppress that product for 14 days.",
      },
    ],
    note: "A third email about the same object is how a brand starts to feel like it is following someone around the room.",
  },
  {
    id: "occasion",
    number: "03",
    title: "Birthday and special occasions",
    summary: "A date is a privilege. Spend it once, and spend it well.",
    steps: [
      {
        key: "action",
        label: "Customer action",
        title: "A date is trusted to us",
        text: "A birthday, or the anniversary of a first order, sits on the profile because they chose to share it.",
      },
      {
        key: "trigger",
        label: "Trigger",
        title: "Seven days out",
        text: "Fire a week before the date so the note can be useful, not a morning-of shout.",
      },
      {
        key: "segment",
        label: "Audience segment",
        title: "Opted in, date known",
        text: "Only profiles with a real date and a live consent flag. No guessed birthdays from a quiz nobody remembers.",
      },
      {
        key: "email",
        label: "Email",
        title: "One gesture",
        text: "A short note in their voice-range. A single offer only if it suits the brand. Never a stack of codes.",
      },
      {
        key: "next",
        label: "Next action",
        title: "Then get out of the way",
        text: "A day-of line only if the first note was never opened. If they opened it, send nothing else.",
      },
    ],
    note: "Occasion flows fail when they are disguised promotions. The date is the reason to be human, not the reason to liquidate a category.",
  },
  {
    id: "reactivation",
    number: "04",
    title: "Customer reactivation",
    summary: "Three silences. Three different conversations.",
    steps: [
      {
        key: "action",
        label: "Customer action",
        title: "They go quiet",
        text: "No purchase and no click across a defined window. The quiet is the behaviour.",
      },
      {
        key: "trigger",
        label: "Trigger",
        title: "90, 180, 365 days",
        text: "Three separate entries. A person only sits in one of them at a time.",
      },
      {
        key: "segment",
        label: "Audience segment",
        title: "Split by history",
        text: "Bought before versus never bought. Last category they actually opened. Not one blob called lapsed.",
      },
      {
        key: "email",
        label: "Email",
        title: "Tone follows the gap",
        text: "Three months: curious. Six months: an honest reset. Twelve months: permission to leave.",
      },
      {
        key: "next",
        label: "Next action",
        title: "Return, or release",
        text: "A click puts them back on the ordinary cadence. No action at twelve months suppresses the address.",
      },
    ],
    note: "Holding a silent address for another year feels like an asset on a spreadsheet and a stranger in the inbox.",
  },
  {
    id: "repeat",
    number: "05",
    title: "Repeat-purchase engagement",
    summary: "The second purchase is a timing problem, not a louder problem.",
    steps: [
      {
        key: "action",
        label: "Customer action",
        title: "They buy something that runs out",
        text: "A replenishable product is delivered, or they cross into a second category.",
      },
      {
        key: "trigger",
        label: "Trigger",
        title: "The likely moment",
        text: "A replenishment window from the product type, or 21 days after delivery for a complementary edit.",
      },
      {
        key: "segment",
        label: "Audience segment",
        title: "Repeat buyers, by category",
        text: "People with at least one fulfilled order. Split by what they bought, not by a generic VIP flag.",
      },
      {
        key: "email",
        label: "Email",
        title: "Useful timing",
        text: "A practical note — the thing is probably low — or one complementary idea. Not a full catalogue.",
      },
      {
        key: "next",
        label: "Next action",
        title: "Suppress on purchase",
        text: "If they buy, this track ends. If they don't, one alternative, then back to the editorial cadence.",
      },
    ],
    note: "Repeat purchase emails work when they respect the object. A candle does not need a weekly reminder. A refill might.",
  },
];

export const dataIntro = {
  index: "05",
  label: "The data room",
  title: "Creativity gets attention. Data makes it better.",
  support: "How I read a send. The charts are samples, not results.",
};

export const dataRoom = {
  stamp: "Sample. Not a real campaign.",
  methods: [
    { title: "A/B testing", text: "One change at a time." },
    { title: "Engagement", text: "Clicks and replies, not vanity opens." },
    { title: "Segmentation", text: "A reason you can say in one sentence." },
    { title: "Retention", text: "Who is still glad to hear from you." },
    { title: "Performance", text: "Did the email do the job it was given." },
    { title: "Optimisation", text: "Change what the last test pointed at. Then wait." },
  ],
  lifecycle: [
    { stage: "Arrive", watch: "Consent, source, expectation set by the page they came from." },
    { stage: "Orient", watch: "Did the welcome teach the cadence, or just announce a discount." },
    { stage: "First value", watch: "A click that matches the promise. A reply. A preference saved." },
    { stage: "Return", watch: "Second purchase or second open that was not begged for." },
    { stage: "Quiet", watch: "How long the silence is, and which category it followed." },
    { stage: "Release", watch: "A clean goodbye beats a year of mail nobody opens." },
  ],
  bars: [
    { label: "Variant A — plain statement", value: 48 },
    { label: "Variant B — specific object", value: 67 },
  ],
  barsCaption:
    "A sample shape. Not a real result.",
  segments: [
    { name: "New, no preference yet", rule: "Joined in 14 days. Preference empty.", model: 22 },
    { name: "Engaged readers", rule: "Clicked in the last 45 days.", model: 31 },
    { name: "Browsed, did not buy", rule: "Product view, no order in 7 days.", model: 18 },
    { name: "Quiet for 90 days or more", rule: "No click and no order.", model: 29 },
  ],
  segmentsCaption:
    "A sample split. Not a real list.",
};

export const opinionsIntro = {
  index: "06",
  label: "Unpopular opinions",
  title: "Some email marketing takes I stand by.",
};

export const opinions = [
  {
    number: "01",
    title: "More emails don't mean better results.",
    body: "I'd rather send fewer, more relevant emails than overwhelm subscribers with generic messages.",
  },
  {
    number: "02",
    title: "Personalisation is more than someone's first name.",
    body: "Real personalisation means understanding behaviour, interests and timing.",
  },
  {
    number: "03",
    title: "Not every email needs to sell something.",
    body: "Sometimes building trust and delivering something useful creates more long-term value.",
  },
  {
    number: "04",
    title: "Open rates aren't the whole story.",
    body: "Engagement, conversions, retention and customer experience matter too.",
  },
  {
    number: "05",
    title: "Attention is earned, not owned.",
    body: "Being in someone's inbox is a privilege. Give them a reason to stay.",
  },
];

export const beyondIntro = {
  index: "07",
  label: "Beyond the inbox",
  title: "Because there's more to life than campaign reports.",
  support:
    "Curious by nature, inspired by new experiences and always looking for interesting ideas. I believe the best creative thinking often happens outside the office.",
};

export const beyond = [
  {
    key: "travel",
    src: "/placeholders/travel.svg",
    alt: "Illustrated stand-in for a travel photograph",
    caption: "Travel and discovering new places",
  },
  {
    key: "music",
    src: "/placeholders/music.svg",
    alt: "Illustrated stand-in for a music photograph",
    caption: "Favourite music",
  },
  {
    key: "hobbies",
    src: "/placeholders/hobbies.svg",
    alt: "Illustrated stand-in for a hobbies photograph",
    caption: "Personal interests and hobbies",
  },
  {
    key: "everyday",
    src: "/placeholders/everyday.svg",
    alt: "Illustrated stand-in for an everyday photograph",
    caption: "Everyday moments",
  },
  {
    key: "creative",
    src: "/placeholders/creative.svg",
    alt: "Illustrated stand-in for a creative photograph",
    caption: "Creativity and inspiration",
  },
];

export const contact = {
  index: "02",
  label: "Contact",
  title: "Say hello.",
  support: "Happy to hear from you.",
  cta: "Send a note",
};

export const footer = {
  line: "Made with curiosity, strategy and probably too many browser tabs open.",
};

const welcomeEmails = [
  {
    id: "w1",
    visual: "welcome",
    tone: "orientation",
    label: "Email 01",
    timing: "Immediately, or next local morning if they join after 21:00.",
    purpose: "Orient. Set the cadence. Ask for a preference. Sell nothing.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "You're in. We'll keep this useful.",
    preheader: "Orientation first. The offers can wait.",
    alternates: [
      "A short hello, and what happens next",
      "Welcome — no obstacle course",
      "[[Alex]], start here. It's one good thing.",
    ],
    kicker: "Note 01",
    headline: "You're in.",
    intro: [
      "Hello [[Alex]],",
      "You joined for a reason, and it probably wasn't a week of emails before anyone says anything useful.",
      "This note does one job. It tells you what this is, how often it arrives, and how to make it more like you.",
    ],
    points: [
      {
        n: "01",
        title: "What we send",
        text: "A weekly edit of objects, rooms, and the thinking behind them. Occasional notes when something is actually worth the interruption.",
      },
      {
        n: "02",
        title: "How often",
        text: "Once a week, plus the rare timely note. Not a daily drip, and not seven welcomes before Friday.",
      },
      {
        n: "03",
        title: "Make it yours",
        text: "Tell us what you're here for. It takes a minute, and it is the difference between mail you tolerate and mail you open.",
      },
    ],
    cta: "Set your preferences",
    secondary: "I'd rather hear less",
    signoff: "The editors",
    footnote:
      "You can leave whenever you like. One click, and we will not ask you to confirm the decision five times. [[Alex]] is a sample name for this preview.",
  },
  {
    id: "w2",
    visual: "welcome",
    tone: "guide",
    label: "Email 02",
    timing: "Day 3, and only if a preference was never saved.",
    purpose: "Be useful. Give the preference ask a second, better reason.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "A 60-second way into the house",
    preheader: "One idea. Not a catalogue.",
    alternates: [
      "Start with the room you actually live in",
      "The short tour, if you have a minute",
    ],
    kicker: "Note 02",
    headline: "A quieter way in.",
    intro: [
      "Hello [[Alex]],",
      "You don't owe us a preference. If you'd like the edit to feel less like a guess, this is the useful version of that ask.",
    ],
    panel: {
      kicker: "The useful bit",
      title: "Start with the corner you actually use.",
      text: "Not a lookbook. One idea for finishing a corner, and the single piece we'd put there.",
    },
    cta: "Read the short guide",
    secondary: "Set preferences instead",
    signoff: "The editors",
    footnote: "If you'd rather we stopped the welcome notes, the link is in the footer. We mean it.",
  },
  {
    id: "w3",
    visual: "welcome",
    tone: "cadence",
    label: "Email 03",
    timing: "Day 7, if they have not purchased and have not exited.",
    purpose: "Let them choose a cadence before the relationship hardens into a default.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "Before we write again",
    preheader: "Three honest options. Pick one.",
    alternates: ["How often should we show up?", "Your call on the cadence"],
    kicker: "Note 03",
    headline: "How much of us do you want?",
    intro: [
      "Hello [[Alex]],",
      "We'd rather you chose the relationship than inherited one. Three options. Whichever you pick, we'll follow it.",
    ],
    choices: [
      "The weekly edit — one considered note, most Sundays.",
      "Only the occasional thing — when there is a real reason.",
      "Something else. Reply and tell us. A person reads it.",
    ],
    cta: "Choose a cadence",
    signoff: "The editors",
    footnote: "After this, the welcome ends. You land on the cadence you picked, or on the quieter default if you picked nothing.",
  },
];

const browseEmails = [
  {
    id: "b1",
    visual: "browse",
    tone: "object",
    label: "Email 01",
    timing: "Four hours after the view, inside waking hours, and not if a marketing email already went today.",
    purpose: "Return them to the exact object, without pretending the room is on fire.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "You left mid-thought.",
    preheader: "The linen shade is where you left it.",
    alternates: [
      "The one you lingered on",
      "[[Alex]], about the linen shade",
      "Still with you — no countdown",
    ],
    kicker: "A note, not a nudge",
    headline: "You left mid-thought.",
    product: {
      name: "The linen shade",
      detail: "Object 04 — the one you viewed",
      note: "Sample product, inserted the way a real browse event would insert the SKU.",
    },
    intro: [
      "Hello [[Alex]],",
      "The [[linen shade]] is still where you left it. No timer, and no story about other people watching it. Just the object, and the reason it was made: a corner that needed less glare and more cloth.",
      "If it was a passing look, ignore this. We will not bring it up again after one more, different note.",
    ],
    cta: "Return to it",
    secondary: "This isn't the one",
    signoff: "The editors",
    footnote: "Replying “stop” works as well as the footer link. A person, or a rule that behaves like one, will close the track.",
  },
  {
    id: "b2",
    visual: "browse",
    tone: "neighbour",
    label: "Email 02",
    timing: "About 40 hours later, and only if email 01 did not become an order.",
    purpose: "One adjacent idea for people who were interested in the problem, not the exact object. Then stop.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "One related idea. Then we'll leave it.",
    preheader: "If the shade was wrong, this solves the same corner.",
    alternates: ["A near neighbour to the shade", "Last note on this"],
    kicker: "Last note",
    headline: "A near neighbour.",
    product: {
      name: "The paper pendant",
      detail: "Same corner, different material",
      note: "Shown only if the first object did not convert.",
    },
    intro: [
      "Hello [[Alex]],",
      "If the [[linen shade]] wasn't right, the [[paper pendant]] answers the same corner with less fabric and more air.",
      "This is the last email about it. If neither object is yours, nothing else in this track will follow you.",
    ],
    cta: "See the pendant",
    secondary: "Stop these reminders",
    signoff: "The editors",
    footnote: "After this send, the viewed product is suppressed for 14 days, whatever they click.",
  },
];

const winbackEmails = [
  {
    id: "c3",
    visual: "winback",
    tone: "quiet",
    label: "3 months",
    timing: "Day 90 with no click and no order. One email. No same-week reminder.",
    purpose: "Assume life got busy. Offer one relevant thing, not a reunion tour.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "It's been a quiet few months.",
    preheader: "One thing. Then we'll match your pace.",
    alternates: [
      "A small reason to come back",
      "We kept a seat, not a speech",
      "[[Alex]], only if you still want this",
    ],
    kicker: "Three months",
    headline: "It's been a quiet few months.",
    intro: [
      "Hello [[Alex]],",
      "Life gets loud, and a shop's email should not try to shout over it. If you still want the edit, there is one piece from the kind of things you used to open.",
      "If you don't, you can say so at the bottom. We'd rather know.",
    ],
    cta: "Show me one good thing",
    secondary: "I'm done for now",
    signoff: "The editors",
    footnote: "People who bought before see a line about care and replenishment. People who never bought see a line about the edit itself. Same skeleton, different first proof.",
  },
  {
    id: "c6",
    visual: "winback",
    tone: "reset",
    label: "6 months",
    timing: "Day 180. They are not also inside the 90-day track.",
    purpose: "Change the relationship instead of repeating the pitch at a higher volume.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "Should we write differently?",
    preheader: "Fewer notes, different notes, or a pause.",
    alternates: ["A reset, if you want one", "We can be quieter than this"],
    kicker: "Six months",
    headline: "Should we write differently?",
    intro: [
      "Hello [[Alex]],",
      "Six months is long enough to admit the current arrangement isn't working. Before we decide for you, here are three ways to stay that aren't the weekly edit.",
    ],
    choices: [
      "Fewer emails — the rare note, when something is genuinely worth it.",
      "Different pieces — tell us the category and we will drop the rest.",
      "Pause me — three months of silence, then a single check-in.",
    ],
    cta: "Reset my preferences",
    signoff: "The editors",
    footnote: "Doing nothing keeps you on the quieter default, not the full cadence. Silence is an answer. It is just not the loudest one.",
  },
  {
    id: "c12",
    visual: "winback",
    tone: "goodbye",
    label: "12 months",
    timing: "Day 365. Final marketing email unless they explicitly stay.",
    purpose: "Offer a clean ending. The people worth keeping usually answer. The rest are released.",
    from: "The Inbox Edit",
    fromEmail: "hello@lumenandco.example",
    subject: "Should we stop writing?",
    preheader: "We'd rather leave well than linger.",
    alternates: ["A last note, and an easy door", "Stay, or we'll go quietly"],
    kicker: "Twelve months",
    headline: "Should we stop writing?",
    intro: [
      "Hello [[Alex]],",
      "It's been a year. We would rather leave your inbox than keep a place in it we have not earned.",
      "If you want to stay, tell us. If you don't, this is the last marketing email, and there is no second guilt-trip hidden behind it.",
    ],
    cta: "Keep me on the list",
    secondary: "Unsubscribe",
    signoff: "The editors",
    footnote: "No click and no reply: suppress the address from marketing. Transactional mail, if they are a customer, is a separate promise and stays intact.",
  },
];

const newsletterEmails = [
  {
    id: "n1",
    visual: "newsletter",
    tone: "issue",
    label: "Issue 18",
    timing: "The regular Sunday send, to people who chose the weekly edit or have not asked for less.",
    purpose: "Give the week one argument, one object, and one reason to open the next issue.",
    from: "The Inbox Edit",
    fromEmail: "notes@lumenandco.example",
    subject: "Three things worth your Sunday",
    preheader: "A room, a shade, and a small argument about clutter.",
    alternates: [
      "The edit: rooms that know when to stop",
      "A lamp, a letter, and a small argument",
      "What we'd actually put in the room",
    ],
    kicker: "Sunday",
    issue: "No. 18",
    dateLabel: "Sunday edit",
    headline: "Rooms that know when to stop.",
    quote: "Clutter is rarely a moral failure. It is usually a room in which nobody made a decision.",
    intro: [
      "Hello [[Alex]],",
      "This issue has one argument, one object, and one thing worth your time that is not ours. That is the whole shape. We are trying to be a magazine you can finish.",
    ],
    stories: [
      {
        kicker: "The argument",
        title: "Finish the corner. Leave the rest.",
        text: "Most rooms fail because everything is trying to be the point. Pick the corner you use after dark. Decide what it is for. Let the rest of the room be quieter than your instinct wants.",
        cta: "Read the piece",
      },
      {
        kicker: "The object",
        title: "The linen shade, and when not to use it.",
        text: "Beautiful in a low room with one lamp. Wrong in a hallway that needs a fact, not a mood. We would rather talk you out of it than ship the wrong one.",
        cta: "See the shade",
      },
      {
        kicker: "Worth your time",
        title: "One essay, one record, one walk.",
        text: "A short essay on attention, a record that sounds like a room with the window open, and a walk with no destination. None of these are for sale here.",
        cta: "Take the list",
      },
    ],
    cta: "Read the full piece",
    signoff: "The editors",
    footnote:
      "One primary door per issue. The other two stories are text links on purpose, so they don't compete. Preferences, the browser version, and unsubscribe live together in the footer, in that order.",
  },
];

function story(heading, paragraphs, items) {
  return { heading, paragraphs: paragraphs ?? [], items: items ?? [] };
}

export const projects = [
  {
    slug: "the-welcome-effect",
    number: "01",
    title: "The Welcome Effect",
    category: "Lifecycle",
    summary:
      "A three-note welcome that teaches a new subscriber the relationship before it asks them for a sale.",
    concept: "An automated welcome journey for new customers.",
    lead: "w1",
    emails: welcomeEmails,
    story: [
      story(
        "Campaign objective",
        [
          "Give a new subscriber a reason to stay before asking them for anything commercial. The job of the journey is to teach the cadence, collect a preference, and only then let them into the ordinary programme.",
          "A welcome that opens with a discount trains people to wait for a discount. This one opens with orientation.",
        ]
      ),
      story(
        "Target audience",
        [
          "People who opted in on a footer, at checkout, or from a story, with consent stored against the profile. They are curious, newly arrived, and one generic blast away from learning to ignore the from-name.",
          "Excluded on entry: anyone already inside this journey, anyone without a lawful consent flag, and hard bounces.",
        ]
      ),
      story(
        "Customer journey",
        [],
        [
          { title: "Arrive", text: "They subscribe or complete a first order with the box ticked. The source is saved: checkout, footer, or story." },
          { title: "Orient", text: "Email 01 explains what this mail is, how often it comes, and how to shape it. The only ask is a preference." },
          { title: "Branch", text: "If the preference is saved, email 02 is skipped. If it is not, day 3 brings one useful guide and a second ask." },
          { title: "Choose", text: "Day 7 offers a cadence: weekly, occasional, or a reply. Then the journey closes." },
          { title: "Land", text: "They join the ongoing editorial cadence at the setting they chose. If they bought during the week, they exit into post-purchase instead." },
        ]
      ),
      story(
        "Automation triggers",
        [],
        [
          { title: "Entry", text: "signup_completed or first_order, and consent is true." },
          { title: "Quiet hours", text: "Sends only between 08:00 and 21:00 in the recipient's time zone. A late signup waits for morning." },
          { title: "Day 3", text: "Fires only when preference_completed is false." },
          { title: "Day 7", text: "Fires when there has been no order, and the person has not unsubscribed or complained." },
          { title: "Collision", text: "A transactional receipt always sends. The marketing note waits twelve hours rather than arriving in the same hour." },
          { title: "Exit", text: "Unsubscribe, complaint, hard bounce, purchase routing to post-purchase, or the third email sent." },
        ]
      ),
      story(
        "Personalisation strategy",
        [
          "The name is a courtesy, not the idea. [[Alex]] in the preview is a sample token. In production the fallback is “there”, and a name that looks like a handle or a single letter is suppressed.",
          "The first line changes with source. Checkout hears a line about the order they just trusted us with. A story signup hears a line about the piece they just read. The rest of the email stays stable so the journey can be read as a system.",
          "Preferences decide what email 03 is allowed to mention. Send time follows the local morning. Nobody receives the welcome at 03:00 because the flow was set to “immediately” in a single office time zone.",
        ]
      ),
    ],
  },
  {
    slug: "the-ghosting-customer",
    number: "02",
    title: "The Ghosting Customer",
    category: "Behaviour",
    summary:
      "A two-step browse recovery that remembers the object someone studied, then knows when to stop talking about it.",
    concept:
      "An abandoned-browse campaign for users who viewed products but left without purchasing.",
    lead: "b1",
    emails: browseEmails,
    story: [
      story(
        "Customer behaviour",
        [
          "Someone opens a product, stays long enough for it to count as attention, and leaves without adding it to a bag or buying it. That is interest with a hesitation attached. It is not a forgotten checkout, and it should not be written like one.",
          "The hesitation might be price, scale, taste, or a doorbell. The email does not pretend to know which. It remembers the object and leaves the decision with them.",
        ]
      ),
      story(
        "Behavioural trigger",
        [
          "product_viewed, with a dwell that clears a minimum so a mis-click never qualifies, and no add-to-bag or purchase of that item in the following four hours.",
          "The clock pauses overnight. A browse at 23:30 does not become an email at 03:30. It becomes an email in the next late morning, if they still have not bought.",
        ]
      ),
      story(
        "Segmentation logic",
        [],
        [
          { title: "Known and consented", text: "Anonymous sessions are not emailed. The track needs an identified profile with marketing consent." },
          { title: "Not in welcome", text: "The first two days of the welcome journey suppress this track. Two programmes should not introduce themselves at once." },
          { title: "Not a recent buyer", text: "An order in the last seven days exits them. They are in a different emotional moment." },
          { title: "One object", text: "If they viewed three products, the email uses the one with the longest dwell, not a grid of everything they brushed past." },
        ]
      ),
      story(
        "Timing strategy",
        [],
        [
          { title: "Four hours", text: "Long enough that they may simply be on a tram. Short enough that the object is still a mental tab." },
          { title: "Forty hours", text: "The follow-up is a different angle, not a louder repeat, and only if the first note did not become an order." },
          { title: "Frequency cap", text: "If any marketing email has already been sent in the last twenty hours, this one waits or is dropped. Browse recovery does not get to jump the queue." },
          { title: "Fourteen-day suppress", text: "After the second note, that product is not allowed back into a browse email for two weeks." },
        ]
      ),
      story(
        "Follow-up strategy",
        [
          "Email 01 is the object itself. Email 02 is a near neighbour: same job in the room, different material. If they clicked the first and still did not buy, the second one answers a possible objection — scale, cloth, light — instead of repeating the photograph.",
          "There is no third email. A follow-up strategy includes the decision to end. People who click “this isn't the one” are suppressed on that product immediately and are not shown its cousin either.",
        ]
      ),
      story(
        "Personalised email examples",
        [
          "The preview renders a sample viewer, [[Alex]], and a sample product, the [[linen shade]], then a sample alternative, the [[paper pendant]]. In the live logic those slots are the profile's first name and the SKU from the browse event.",
          "The supporting line changes with the category they have clicked before. Lighting hears a line about glare. Textiles hear a line about cloth. The layout does not change, so the programme stays recognisable.",
        ]
      ),
    ],
  },
  {
    slug: "the-comeback-campaign",
    number: "03",
    title: "The Comeback Campaign",
    category: "Retention",
    summary:
      "Three reactivation letters for three kinds of silence — three months, six months, and a year — each with a different thing to say.",
    concept:
      "A reactivation campaign targeting inactive customers after 3, 6 and 12 months.",
    lead: "c3",
    emails: winbackEmails,
    story: [
      story(
        "Audience segmentation",
        [
          "Inactive is not one audience. This programme cuts the quiet list by how long the silence has lasted, whether they have ever ordered, and the last category they actually engaged with.",
          "A person can only be in one window at a time. Ninety days, one hundred and eighty, or three hundred and sixty-five. They do not receive the three-month letter and the six-month letter in the same season.",
        ]
      ),
      story(
        "A different conversation for each silence",
        [],
        [
          {
            title: "Three months",
            text: "Assume busyness. One relevant piece from the category they used to open. A door out, with no sulk attached. Buyers hear a practical line. Non-buyers hear an editorial one.",
          },
          {
            title: "Six months",
            text: "Stop pitching and renegotiate. Fewer emails, a different category, or a pause. The commercial offer, if one is tested at all, is not the spine of this note.",
          },
          {
            title: "Twelve months",
            text: "Ask whether to stop. Staying is a clear button. Leaving is an equally clear link. No click means suppress. Transactional mail for real customers is a separate duty and is not used as a loophole.",
          },
        ]
      ),
      story(
        "Re-engagement strategy",
        [
          "The aim is not to drag every address back. It is to recover the people who still want the relationship, and to release the ones who do not, before a complaint does it for us.",
          "A click or a preference save returns them to the ordinary cadence at the setting they chose. A purchase returns them to post-purchase. A year of nothing returns them to silence, on our side as well as theirs.",
        ]
      ),
      story(
        "Customer journey",
        [],
        [
          { title: "Detect", text: "Nightly, the profile is scored on days since the last click and the last order. The older of those two is not the rule — both must be quiet." },
          { title: "Route", text: "90, 180, or 365. Prior buyers and never-buyers share a skeleton and swap the proof in the first paragraph." },
          { title: "Speak", text: "One email per window. The twelve-month note is marked as the last marketing send in the template, and the suppression is real." },
          { title: "Resolve", text: "Engage: back to the edit. Decline or ignore at month twelve: marketing suppress. Complaint at any point: suppress the same day." },
        ]
      ),
      story(
        "Testing and optimisation ideas",
        [
          "These are tests I would design. They are not results. I would not ship a winner off a single send, and I would keep a held-out group that receives nothing, so the journey has something to be compared with.",
        ],
        [
          { title: "Subject", text: "A plain statement against a direct question, same body, same audience split. Read clicks and unsubscribes together, not opens alone." },
          { title: "Three-month body", text: "Useful content against a soft commercial gesture. The hypothesis: content brings back the readers, the gesture brings back a purchase and a few more unsubscribes. Both outcomes are allowed to be true." },
          { title: "Twelve-month honesty", text: "“Should we stop writing?” against a conventional we-miss-you note. The hypothesis: the honest version keeps fewer, better addresses and cleans the rest without a complaint spike." },
          { title: "From-name", text: "The brand against the editors. Measured on replies and complaints as much as on clicks, because a human from-name can help or can feel like a costume." },
        ]
      ),
    ],
  },
  {
    slug: "the-newsletter-edit",
    number: "04",
    title: "The Newsletter Edit",
    category: "Newsletter",
    feature: true,
    summary:
      "An editorial issue with one argument, one object, and one reason to come back next Sunday.",
    concept:
      "An editorial newsletter demonstrating an approach to storytelling, useful content, engaging subject lines and calls to action.",
    lead: "n1",
    emails: newsletterEmails,
    story: [
      story(
        "Newsletter concept",
        [
          "A Sunday letter, built to be finished. One argument, one object, one recommendation that is not for sale.",
          "The commercial door is there. It is not the architecture. People who feel respected by a newsletter buy later, and they complain less when you do have something to sell.",
        ]
      ),
      story(
        "Target audience",
        [
          "Subscribers who chose the weekly edit, plus engaged readers who have not yet set a preference and have not gone quiet. The six-month and twelve-month win-back audiences are excluded. They are in a different conversation.",
          "The tone assumes a reader with taste and a limited Sunday. It does not assume they want a catalogue, a meme, or a sermon.",
        ]
      ),
      story(
        "Editorial angle",
        [
          "The issue takes a position: most rooms are trying to say too much. That point of view is specific enough to disagree with, which is what makes it worth opening. A newsletter without a point of view is a brochure that learned to use a serif.",
          "The product is handled with the same honesty as the essay. The shade is recommended for one kind of room and talked out of another. Expertise is more persuasive than enthusiasm.",
        ]
      ),
      story(
        "Newsletter layout",
        [],
        [
          { title: "Masthead", text: "A name, an issue number, and a date. The reader should know where they are in two seconds, including on a phone." },
          { title: "The argument", text: "The only module with a solid button. It is the piece the subject line is allowed to promise." },
          { title: "The object", text: "A colour plate, a short verdict, a text link. It must be able to say “not this” as well as “this”." },
          { title: "Worth your time", text: "Recommendations that are not products. This is the module that makes the next issue feel anticipated rather than expected." },
          { title: "Footer", text: "Preferences, view in browser, unsubscribe. Visible, adjacent, and unembarrassed. On desktop the lower modules can sit in a second column. On a phone they stack in the same order." },
        ]
      ),
      story(
        "Subject line alternatives",
        [
          "Each alternative is a different bet about why someone opens. I would test one pair at a time, not all four at once.",
        ],
        [
          { title: "Three things worth your Sunday", text: "Utility and a number. Tells them the effort is bounded. This is the subject on the preview." },
          { title: "The edit: rooms that know when to stop", text: "Point of view. Attracts the reader who wants an argument, and warns off the reader who wants a sale." },
          { title: "A lamp, a letter, and a small argument", text: "Specificity and voice. The risk is cuteness. Worth testing against the plainer utility line." },
          { title: "What we'd actually put in the room", text: "Authority and concreteness. Promises a decision, which the object module then has to keep." },
        ]
      ),
      story(
        "CTA strategy",
        [
          "One solid button in the issue, leading to the argument. The object and the reading list use text links so the eye has a hierarchy and the finger has a single obvious door.",
          "The button repeats once at the end for people who read in order. It does not change its job. A second button for the product would ask the reader to choose between the brand's two intentions, and most of them would choose neither.",
          "A reply prompt can live under the sign-off. Replies are a relationship signal and a deliverability one. They are not a trick, so the prompt has to be a real question a person might answer.",
        ]
      ),
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function projectNeighbors(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

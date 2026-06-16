export type WorkflowDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  outcomes: readonly string[];
  inputs: readonly string[];
  tools: readonly string[];
  steps: readonly {
    title: string;
    description: string;
  }[];
  handoff: readonly string[];
  metrics: readonly string[];
};

export const workflows = [
  {
    slug: "customer-support-agent",
    title: "AI Customer Support Agent",
    eyebrow: "Support workflow",
    summary: "Resolve common customer questions instantly and escalate nuanced cases with context.",
    description:
      "This workflow receives support questions from your website or chat channel, classifies intent, searches approved knowledge, drafts a response, and creates a human handoff when confidence is low.",
    outcomes: ["Instant FAQ replies", "Escalation with context", "Tagged conversations", "Knowledge gaps surfaced"],
    inputs: ["Customer message", "Customer profile", "Order or account ID", "Knowledge base articles"],
    tools: ["Website chat", "Helpdesk", "Knowledge base", "Slack or email"],
    steps: [
      {
        title: "Capture the question",
        description: "Receive a support message from chat, form, WhatsApp, or email.",
      },
      {
        title: "Classify and enrich",
        description: "Detect intent, urgency, customer status, and related order/account details.",
      },
      {
        title: "Draft the answer",
        description: "Use approved knowledge and guardrails to generate a concise support response.",
      },
      {
        title: "Escalate when needed",
        description: "Send complex, sensitive, or low-confidence conversations to the right human queue.",
      },
    ],
    handoff: ["Low confidence answer", "Refund or billing dispute", "Angry customer", "Policy exception"],
    metrics: ["First response time", "Resolution rate", "Escalation rate", "Top unanswered topics"],
  },
  {
    slug: "lead-qualification-agent",
    title: "AI Lead Qualification Agent",
    eyebrow: "Lead workflow",
    summary: "Score, enrich, and route leads based on fit, urgency, budget, and buying intent.",
    description:
      "This workflow turns raw inbound leads into prioritized opportunities by enriching data, asking qualifying questions, scoring intent, and routing the lead to the right owner.",
    outcomes: ["Lead score", "Buyer intent summary", "CRM owner assignment", "Fast follow-up task"],
    inputs: ["Lead form", "Chat transcript", "Company domain", "Campaign source"],
    tools: ["Website forms", "CRM", "Enrichment API", "Sales inbox"],
    steps: [
      {
        title: "Collect lead data",
        description: "Capture contact details, message, source, and any campaign context.",
      },
      {
        title: "Enrich the account",
        description: "Attach company size, industry, location, and CRM history when available.",
      },
      {
        title: "Score intent",
        description: "Evaluate fit, urgency, budget signals, pain, and decision timeline.",
      },
      {
        title: "Route and notify",
        description: "Create CRM tasks, assign owner, and send a clear lead summary.",
      },
    ],
    handoff: ["High-value lead", "Enterprise account", "Missing required fields", "Unclear buying intent"],
    metrics: ["Qualified rate", "Speed to lead", "Booked demo rate", "Lead source quality"],
  },
  {
    slug: "sales-assistant",
    title: "AI Sales Assistant",
    eyebrow: "Sales workflow",
    summary: "Answer product questions, recommend next steps, and keep prospects moving toward a decision.",
    description:
      "This workflow supports sales conversations by answering approved questions, identifying objections, recommending follow-up actions, and logging next steps in your CRM.",
    outcomes: ["Objection summary", "Recommended next step", "Follow-up draft", "CRM activity log"],
    inputs: ["Prospect message", "Product catalog", "Pricing rules", "CRM deal context"],
    tools: ["CRM", "Email", "Sales enablement docs", "Chat or WhatsApp"],
    steps: [
      {
        title: "Understand the request",
        description: "Identify product interest, objections, timeline, and decision criteria.",
      },
      {
        title: "Generate approved guidance",
        description: "Answer with product-safe messaging and suggest the most relevant offer or resource.",
      },
      {
        title: "Draft follow-up",
        description: "Prepare a concise email or chat reply with next-step options.",
      },
      {
        title: "Update the deal",
        description: "Log notes, update deal stage, and create a task for the owner.",
      },
    ],
    handoff: ["Pricing negotiation", "Legal or procurement request", "Custom enterprise scope", "Competitor comparison"],
    metrics: ["Reply speed", "Deal stage movement", "Follow-up completion", "Objection frequency"],
  },
  {
    slug: "appointment-booking",
    title: "AI Appointment Booking",
    eyebrow: "Booking workflow",
    summary: "Book, reschedule, remind, and confirm meetings without manual back-and-forth.",
    description:
      "This workflow qualifies appointment intent, checks availability, books the best time, sends reminders, and updates your CRM or calendar records.",
    outcomes: ["Booked appointment", "Calendar invite", "Reminder sequence", "No-show reduction"],
    inputs: ["Requested date/time", "Contact details", "Meeting type", "Owner availability"],
    tools: ["Calendar", "CRM", "Email", "WhatsApp or SMS"],
    steps: [
      {
        title: "Detect booking intent",
        description: "Confirm the requested service, meeting type, timezone, and preferred windows.",
      },
      {
        title: "Check availability",
        description: "Find open slots from the right team member or calendar pool.",
      },
      {
        title: "Create the booking",
        description: "Send calendar invite, confirmation message, and meeting details.",
      },
      {
        title: "Remind and reschedule",
        description: "Send reminders and handle reschedule requests without manual coordination.",
      },
    ],
    handoff: ["VIP client", "No matching availability", "Custom meeting type", "Repeated reschedules"],
    metrics: ["Booked meetings", "No-show rate", "Reschedule rate", "Time saved"],
  },
  {
    slug: "email-whatsapp-automation",
    title: "AI Email & WhatsApp Automation",
    eyebrow: "Messaging workflow",
    summary: "Trigger personalized follow-ups across the channels your customers already use.",
    description:
      "This workflow sends timely, personalized messages across email and WhatsApp based on customer behavior, lead status, and CRM events.",
    outcomes: ["Personalized follow-up", "Channel-aware messaging", "Reply classification", "CRM note sync"],
    inputs: ["CRM stage", "Customer segment", "Last interaction", "Message template rules"],
    tools: ["Email provider", "WhatsApp API", "CRM", "Automation triggers"],
    steps: [
      {
        title: "Watch for trigger events",
        description: "Start from form submission, missed reply, abandoned cart, deal movement, or support status.",
      },
      {
        title: "Choose the channel",
        description: "Select email, WhatsApp, or both based on customer preference and urgency.",
      },
      {
        title: "Personalize the message",
        description: "Generate copy using segment, history, intent, and approved brand tone.",
      },
      {
        title: "Classify replies",
        description: "Detect positive replies, objections, support needs, and unsubscribe requests.",
      },
    ],
    handoff: ["Opt-out request", "Sensitive topic", "High-value response", "Repeated no reply"],
    metrics: ["Open rate", "Reply rate", "Conversion rate", "Opt-out rate"],
  },
  {
    slug: "workflow-automation",
    title: "AI Workflow Automation",
    eyebrow: "Operations workflow",
    summary: "Turn repetitive operations into intelligent workflows with approvals, checks, and alerts.",
    description:
      "This workflow coordinates multi-step operations by validating inputs, routing approvals, updating systems, and notifying teams when exceptions happen.",
    outcomes: ["Validated request", "Approval trail", "System updates", "Exception alerts"],
    inputs: ["Request payload", "Approval rules", "Business policy", "Operational status"],
    tools: ["Forms", "Sheets or database", "Slack", "Project management"],
    steps: [
      {
        title: "Receive the request",
        description: "Capture structured data from forms, internal tools, or customer channels.",
      },
      {
        title: "Validate and decide",
        description: "Check required data, policy fit, duplicate records, and risk level.",
      },
      {
        title: "Route approvals",
        description: "Send approvals to the right owner and pause automation until a decision is recorded.",
      },
      {
        title: "Update and alert",
        description: "Write changes to the system of record and notify the team of progress or exceptions.",
      },
    ],
    handoff: ["Policy exception", "Missing approval", "Duplicate record", "High-risk action"],
    metrics: ["Cycle time", "Approval time", "Exception rate", "Manual touches removed"],
  },
  {
    slug: "crm-integration",
    title: "CRM Integration",
    eyebrow: "CRM workflow",
    summary: "Sync conversations, lead status, tags, notes, and tasks with your existing customer system.",
    description:
      "This workflow keeps your CRM clean by turning conversations and events into structured updates, tasks, tags, and owner notifications.",
    outcomes: ["Clean CRM record", "Updated lifecycle stage", "Owner task", "Conversation summary"],
    inputs: ["Customer event", "Conversation transcript", "CRM contact ID", "Owner rules"],
    tools: ["CRM", "Email", "Chat", "Internal notifications"],
    steps: [
      {
        title: "Match the record",
        description: "Find or create the right contact, company, deal, or ticket.",
      },
      {
        title: "Summarize activity",
        description: "Condense conversation context, intent, objections, and next action.",
      },
      {
        title: "Update fields",
        description: "Sync tags, stage, notes, source, lead score, and owner assignment.",
      },
      {
        title: "Notify the team",
        description: "Send task or channel alerts when a human should act.",
      },
    ],
    handoff: ["Record conflict", "Missing contact ID", "Duplicate account", "Owner assignment conflict"],
    metrics: ["CRM completion rate", "Duplicate rate", "Task completion", "Data freshness"],
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    eyebrow: "Reporting workflow",
    summary: "Track automation volume, lead outcomes, response speed, and opportunities for improvement.",
    description:
      "This workflow collects automation events, normalizes them into reporting rows, calculates key metrics, and sends scheduled summaries to your team.",
    outcomes: ["Daily summary", "KPI table", "Improvement opportunities", "Channel performance view"],
    inputs: ["Automation events", "Conversation outcome", "CRM stage changes", "Revenue or booking data"],
    tools: ["Sheets or warehouse", "CRM", "Slack or email", "Dashboard tool"],
    steps: [
      {
        title: "Collect events",
        description: "Receive workflow activity from agents, CRM, messaging, and booking tools.",
      },
      {
        title: "Normalize metrics",
        description: "Standardize labels, timestamps, channels, and outcomes for reporting.",
      },
      {
        title: "Calculate KPIs",
        description: "Compute conversion, response speed, escalation rate, and workflow volume.",
      },
      {
        title: "Send insights",
        description: "Deliver scheduled reports with highlights, risks, and recommended improvements.",
      },
    ],
    handoff: ["Data gap", "Metric anomaly", "Failed sync", "Unusual drop in conversion"],
    metrics: ["Automation volume", "Conversion rate", "Response time", "Escalation trend"],
  },
] as const satisfies readonly WorkflowDetail[];

export const workflowHrefs = workflows.map((workflow) => `/workflows/${workflow.slug}`);

export function getWorkflowBySlug(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug);
}

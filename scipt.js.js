/* ---- Edit this block to fill in the portfolio. Anything left empty shows a dashed "add" prompt. ---- */
const P = {
  name: "Journey A. Lemorinas",
  school: "Datamex College of Saint Adeline",
  location: "Parañaque City",
  specialization: "Cybersecurity",
  targetPosition: "Cybersecurity Analyst (entry level)",
  fields: ["Cybersecurity"],
  statementSkills: ["troubleshooting and desktop support", "networking fundamentals", "security awareness"],
  statementCareer: "Cybersecurity Analyst",
  about: "I am a BSIT student at Datamex College of Saint Adeline and a desktop support specialist. Daily support work taught me how real users run into real problems, and how careful diagnosis saves time.\n\nThat experience pushed me toward cybersecurity. I want to protect systems and people by finding weaknesses early, explaining risks in plain language, and applying defensive practices.\n\nI value accuracy, honesty about what I can prove, and steady learning. I am looking for an entry-level role where I can grow in security operations, vulnerability assessment, or IT security support.",
  email: "journeylemorinas@gmail.com", linkedin: "https://www.linkedin.com/in/journ-lemorinas", github: "https://github.com/journeylemorinas-creator", portfolioUrl: "https://journeylemorinas-creator.github.io/lemorinas/",
  resumeUrl: "resume.html",
  photo: "images/journ.jpg",
  skills: {
    "HTML / CSS": { level: 1, evidence: "This portfolio website" },
    "JavaScript / Bootstrap": { level: 1, evidence: "Interactive sections of this portfolio (js/script.js)" },
    "Git / GitHub": { level: 1, evidence: "Public repository Journ-Lemorinas-" },
    "TCP/IP / DNS / Troubleshooting": { level: 2, evidence: "Desktop support work; Wi-Fi troubleshooting case" },
    "Security Fundamentals": { level: 1, evidence: "SQL injection case study; BrightTALK Cybersecurity Fundamentals and Ethical Hacking 101" },
    "Deployment / Hosting": { level: 1, evidence: "BrightTALK Azure cloud computing webinar" },
    "AI Tools / Responsible AI Use": { level: 1, evidence: "AI usage log with my verification notes" }
  },
  projects: [
    { title: "AI-Assisted IT Help Desk and Service Ticket System", summary: "Users submit support tickets; the system suggests a category and first troubleshooting steps for the technician.", tech: "HTML, CSS, JavaScript, Bootstrap, MySQL, rule-based AI suggestion", repo: "https://github.com/journeylemorinas-creator/helpdesk-ai-main", docs: "", demo: "https://helpdesk-ai-gyrc.onrender.com/", db: { name: "helpdesk_ai (MySQL)", file: "database/helpdesk_ai.sql", tables: ["users: accounts with hashed passwords and roles", "categories: ticket categories with first troubleshooting steps", "tickets: requests with priority and status", "ticket_updates: technician notes per ticket"] } },
    { title: "Campus Cafe Sales Database", summary: "A database of cafe products and sales used to find best sellers, busy days and low stock, with charts and interpretation.", tech: "MySQL (SQL), Excel or Google Sheets", repo: "https://github.com/journeylemorinas-creator/Camous-cafe-sales-database", docs: "", demo: "https://angelodalezamora-boop.github.io/Campus-Caf-Sales-Database/", db: { name: "campus_cafe (MySQL)", file: "database/campus_cafe.sql", tables: ["categories: product groups", "products: price, stock and reorder level", "sales: one row per sale with date and total", "sale_items: products and quantities in each sale"] } },
    { title: "Web Application Security Assessment (defensive)", summary: "A defensive review of my own Help Desk project to find common weaknesses, document the risk and apply fixes.", tech: "OWASP Top 10 reference, browser developer tools, Node.js, MySQL", repo: "https://github.com/journeylemorinas-creator/student-early-warnings", docs: "", demo: "https://student-early-warnings-2.onrender.com/login" }
  ],
  cases: [
    { example: true, problem: "Computer cannot connect to Wi-Fi", causes: ["Disabled adapter", "Driver problem", "Incorrect IP configuration", "Router problem", "DNS problem"], diagnostic: "Checked that Wi-Fi was on, ran ipconfig, pinged the gateway and then 8.8.8.8, and tested DNS with nslookup.", solution: "Re-enabled the adapter, renewed the IP address, flushed DNS or updated the driver.", lesson: "Test layer by layer instead of guessing." },
    { problem: "Suspected phishing email", causes: ["Spoofed sender", "Malicious link", "Malicious attachment"], diagnostic: "Inspected the sender and headers, hovered over links without clicking, and did not open attachments.", solution: "Reported and deleted the email, reset the password if a link was clicked, and notified IT.", lesson: "Verify the source before acting." },
    { problem: "Computer running very slowly", causes: ["Too many startup programs", "Low disk space", "Malware", "Failing drive"], diagnostic: "Checked Task Manager and disk usage, then ran a security scan.", solution: "Disabled startup items, freed disk space and removed threats.", lesson: "Check resources first, then security." },
    { problem: "User locked out of their account", causes: ["Repeated wrong passwords", "Expired password", "Account lockout policy"], diagnostic: "Verified the user's identity and checked the lockout status.", solution: "Unlocked the account after verification, reset the password and advised using a password manager.", lesson: "Always verify identity before resetting access." },
    { problem: "Printer not printing", causes: ["Printer offline", "Stuck print queue", "Driver problem", "Network path problem"], diagnostic: "Checked the connection, cleared the queue and sent a test page.", solution: "Restarted the print spooler and reinstalled the driver.", lesson: "Start with the simplest cause." }
  ],
  aiLog: [
    { date: "2026-08-12", task: "Plan the portfolio from the BSIT guide", assist: "AI turned the guide's 10 sections into a page layout", verify: "Checked every section against the guide's checklist and my own details." },
    { date: "2026-08-26", task: "Draft troubleshooting cases", assist: "AI suggested five common IT cases with causes, diagnosis and fixes", verify: "Compared each with how I handle tickets at work and corrected the steps." },
    { date: "2026-09-09", task: "Write the SQL injection case study", assist: "AI helped word the vulnerability, risks and prevention practices", verify: "Checked the unsafe and safe query examples against what I studied in the BrightTALK webinars." },
    { date: "2026-09-23", task: "Design the Campus Cafe Sales database", assist: "AI suggested tables and sample queries", verify: "Reviewed the tables for duplicates and tested the queries on sample data." },
    { date: "2026-09-30", task: "Draft resume and interview answers", assist: "AI generated a printable resume layout and first-draft answers", verify: "Checked contact details, links and facts, and rewrote answers in my own voice." }
  ],
  aiAnswers: [
    "AI helped me plan the portfolio structure, build the page, and draft cases, interview answers, my career plan and my reflection much faster than starting from a blank page.",
    "I verified my name, email, school, certificates and dates, my skill levels, and the troubleshooting steps against my real desktop support work.",
    "Clear, specific prompts give better results, AI is best for drafts, and I must supply the evidence and judgment. It reinforced the rule: no evidence, no skill claim.",
    "AI used generic placeholders, could not know my real experience, and sometimes guessed details such as links, which I had to confirm."
  ],
  interviews: { mock: false, technical: false },
  mockVideo: "",
  mockVideoNote: "",
  plan: {
    skillsNow: "Desktop support, hardware, OS and network troubleshooting, security awareness, HTML / CSS, Git / GitHub",
    improve: "Advanced networking, Python scripting for security tasks, log analysis, web application security testing",
    learn: "Wireshark, Nmap, Linux command line, a virtual security lab (VirtualBox, Kali Linux), SIEM basics such as Wazuh or Splunk",
    certs: "CompTIA A+, CompTIA Security+, Google Cybersecurity Certificate, Cisco CCNA",
    g6: "Finish Projects 1 to 3 with GitHub READMEs, build a home security lab, and start studying for CompTIA A+ and Security+.",
    g12: "Pass CompTIA Security+, complete a documented vulnerability assessment project, and move into an IT security support or junior security role.",
    g36: "Work as a cybersecurity or SOC analyst, hold Security+ plus one advanced certification, and grow toward incident response or vulnerability management."
  },
  achievements: [
    { title: "Certificate of Attendance: Cybersecurity Fundamentals: Building a Safer Digital World", issuer: "BrightTALK by Informa TechTarget", year: "October 12, 2026", hours: "47 of 49 min", img: "images/certificates/cybersecurity-fundamentals.jpg" },
    { title: "Certificate of Attendance: Ethical Hacking 101: Think like a hacker, defend like a pro", issuer: "BrightTALK by Informa TechTarget", year: "October 12, 2026", hours: "47 of 49 min", img: "images/certificates/ethical-hacking-101.jpg" },
    { title: "Certificate of Attendance: Azure unlocked your gateway to cloud computing", issuer: "BrightTALK by Informa TechTarget", year: "October 12, 2026", hours: "47 of 49 min", img: "images/certificates/azure-cloud-computing.jpg" }
  ],
  reflection: "Before BSIT, I saw IT mostly as fixing computers. I understood hardware and basic troubleshooting, but I thought security meant an antivirus and a strong password. I did not yet see how networks, software, databases and people's habits connect, or how many ways a system can fail.\n\nThe most important lesson was that security is a habit, not a product. Networking, databases and web development showed me where weaknesses come from: weak input validation, poor passwords, misconfigured systems and untrained users. My BrightTALK sessions on Cybersecurity Fundamentals and Ethical Hacking 101 taught me to think like an attacker in order to defend like a professional. I also learned to document my work and explain technical ideas in plain language.\n\nThis portfolio taught me the most. It made me gather evidence for every skill I claim, organize my certificates and write my own cases, plans and reflections. The rule NO EVIDENCE = NO SKILL CLAIM changed how I describe myself: I now rate my skills honestly and show proof.\n\nThe hardest part was understanding vulnerabilities such as SQL injection well enough to explain how they happen and how to prevent them, instead of just memorizing definitions. I broke each topic into cause, risk and prevention, then tested myself by explaining it out loud.\n\nI used to fix problems by trial and error. Now I diagnose step by step, check settings and logs, and think about the security impact of a fix. In my support work I handle tickets more systematically, document what I do, and communicate more clearly with users.\n\nI still need more depth in advanced networking and programming, especially Python scripting for security tasks. I also need more hands-on practice with security tools in a lab, and certifications such as CompTIA A+ and Security+ to validate what I know.\n\nI want to become a cybersecurity analyst who builds on strong IT support fundamentals: reliable, ethical, patient with users and focused on prevention. I want to explain risks to non-technical people so they can protect themselves and their work.\n\nI am ready to begin because I combine real desktop support experience, a growing cybersecurity foundation, security training certificates and a documented portfolio. I know what I can prove, what I still need to learn, and I have a clear plan to keep growing responsibly."
};
/* ---- End of the editable block ---- */

const FIELDS = ["Web Development", "Software Development", "Mobile Development", "Database Administration", "Data Analytics", "IT Support", "Networking", "Cybersecurity", "Cloud Computing", "AI / Machine Learning"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const SKILLS = [
  ["Programming", ["Python", "Java / C++ / C#"]],
  ["Web", ["HTML / CSS", "JavaScript / Bootstrap"]],
  ["Database", ["SQL / MySQL", "ERD / Database Design"]],
  ["Tools", ["Git / GitHub"]],
  ["Networking", ["TCP/IP / DNS / Troubleshooting"]],
  ["Cybersecurity", ["Security Fundamentals"]],
  ["Data", ["Excel / Sheets / Data Analysis"]],
  ["Cloud", ["Deployment / Hosting"]],
  ["AI", ["AI Tools / Responsible AI Use"]]
];
const AREA_ICON = { Programming: "i-code", Web: "i-globe", Database: "i-db", Tools: "i-branch", Networking: "i-network", Cybersecurity: "i-shield", Data: "i-chart", Cloud: "i-cloud", AI: "i-cpu" };
const PROJECT_SPEC = [
  { tag: "Project 1 · Web Development", icon: "i-code", def: "AI-Assisted IT Help Desk", reqs: ["Login (authentication)", "Create, view, update and close tickets (CRUD)", "Search and form validation", "AI-assisted category and first-step suggestion", "Passwords stored hashed; clear error messages"] },
  { tag: "Project 2 · Data / Database", icon: "i-db", def: "Campus Cafe Sales Database", reqs: ["Categories, products, sales and sale items tables", "Queries: daily sales, best sellers, low stock", "Charts in Excel or Google Sheets", "Data interpretation", "Totals that match the receipts"] },
  { tag: "Project 3 · Specialization", icon: "i-star", def: "Web Application Security Assessment", reqs: ["Review login, forms and database queries", "Confirm prepared statements, input validation and password hashing", "Findings report with severity and fix", "Test only my own application in a local environment"] }
];

const TECHPREP = [
  { area: "Programming", icon: "i-code",
    concepts: ["Variables, loops and functions", "Lists and dictionaries", "Reading an error message or traceback", "Validating user input"],
    task: "Write a function that checks that a password has at least 8 characters and one digit.",
    code: "def strong_enough(pw):\n    return len(pw) >= 8 and any(c.isdigit() for c in pw)",
    answer: "The function returns True only when both rules pass. Checking input like this is the first defense against weak passwords and bad data.",
    proof: "Project 3: secure login sample" },
  { area: "Database", icon: "i-db",
    concepts: ["Primary and foreign keys", "Normalization", "JOIN and GROUP BY", "Constraints such as NOT NULL and CHECK"],
    task: "Find the five best-selling products in the Campus Cafe database.",
    code: "SELECT p.name, SUM(si.quantity) AS units_sold\nFROM sale_items si JOIN products p ON p.id = si.product_id\nGROUP BY p.id ORDER BY units_sold DESC LIMIT 5;",
    answer: "The query joins sales to products, adds up the quantities per product and keeps the top five.",
    proof: "Project 2: Campus Cafe Sales Database (in progress)" },
  { area: "Web development", icon: "i-globe",
    concepts: ["HTML structure", "CSS layout and responsive design", "JavaScript events and the DOM", "Form validation"],
    task: "Reject a contact form when the name is empty or the message is under 10 characters.",
    code: "if (!name.trim() || msg.trim().length < 10) {\n  showError(\"Please complete the form.\");\n  return;\n}",
    answer: "The check runs before sending, so bad input is stopped early and the visitor sees a clear message.",
    proof: "This portfolio's contact form" },
  { area: "Networking", icon: "i-network",
    concepts: ["IP address, gateway and DHCP", "DNS", "ping, ipconfig and nslookup", "Troubleshooting layer by layer"],
    task: "A PC shows Wi-Fi connected but cannot open websites. What do you check?",
    code: "ipconfig /all\nping 192.168.1.1\nping 8.8.8.8\nnslookup example.com",
    answer: "If the gateway and 8.8.8.8 respond but nslookup fails, the problem is DNS. If the gateway fails, check the adapter, cable or router.",
    proof: "Troubleshooting case: cannot connect to Wi-Fi" },
  { area: "Cybersecurity", icon: "i-shield",
    concepts: ["Confidentiality, integrity, availability", "Phishing and social engineering", "SQL injection", "Password hashing and least privilege"],
    task: "Rewrite an unsafe login query so it resists SQL injection.",
    code: "// unsafe\n\"SELECT * FROM users WHERE email='\" + email + \"'\"\n\n// safe: prepared statement\n\"SELECT * FROM users WHERE email = ?\"",
    answer: "The safe version sends the value separately, so the database treats it as data and never as part of the command.",
    proof: "SQL injection case study; BrightTALK security webinars" },
  { area: "Software engineering", icon: "i-branch",
    concepts: ["Requirements and design", "Version control with Git", "Testing", "Documentation"],
    task: "Show the Git steps to add a README to a repository.",
    code: "git add README.md\ngit commit -m \"Add README\"\ngit push origin main",
    answer: "Stage the file, commit it with a clear message, then push it so it appears on GitHub.",
    proof: "Repository Journ-Lemorinas-" }
];
const PROMPTS = ["What I knew about IT before entering BSIT", "The most important things I learned", "The project that taught me the most, and why", "The technical difficulty that challenged me most", "How my IT skills have changed", "The skills I still need to improve", "The kind of IT professional I want to become", "Why I am ready to begin my career in IT"];

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ph = t => `<span class="ph">${esc(t)}</span>`;
const val = (v, t) => v ? esc(v) : ph(t);
const ic = (id, cls = "") => `<svg class="ico ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const a = (url, label, t) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label || url)}</a>` : ph(t);
const $ = id => document.getElementById(id);

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}
async function copyText(text, okMsg) {
  try {
    await navigator.clipboard.writeText(text);
    toast(okMsg || "Copied to clipboard");
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) { /* ignore */ }
    ta.remove();
    toast(ok ? (okMsg || "Copied to clipboard") : "Press Ctrl+C to copy");
  }
}

/* ---------- hero ---------- */
$("h-name").innerHTML = val(P.name, "Your full name");
$("c-name").innerHTML = val(P.name, "Your full name");
$("c-school").textContent = P.school;
$("h-role").innerHTML = P.targetPosition ? esc(P.targetPosition) : ph("Add your target IT position");
const sk = P.statementSkills;
const statement = `I am a BSIT student with skills in <b>${val(sk[0], "skill")}</b>, <b>${val(sk[1], "skill")}</b>, and <b>${val(sk[2], "skill")}</b>. I am interested in pursuing a career as a <b>${val(P.statementCareer, "career")}</b>.`;
$("h-statement").innerHTML = statement;
$("statement2").innerHTML = statement;
$("c-facts").innerHTML = `
  <div><dt>Specialization</dt><dd>${val(P.specialization, "Add specialization")}</dd></div>
  <div><dt>Target field</dt><dd>${P.fields.length ? P.fields.map(esc).join(", ") : ph("Add preferred IT field")}</dd></div>`;
if (P.resumeUrl) {
  const b = $("btn-resume");
  b.href = P.resumeUrl;
  if (/^https?:/i.test(P.resumeUrl)) { b.target = "_blank"; b.rel = "noopener"; } else { b.setAttribute("download", ""); }
}

/* ---------- profile ---------- */
$("about").innerHTML = P.about
  ? P.about.split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("")
  : `<p>${ph("Write 150 to 250 words about your BSIT background, interests, technical strengths, career goals, professional values and the IT work that interests you.")}</p>`;
$("identity").innerHTML = `
  <div><dt>Full name</dt><dd>${val(P.name, "Add your full name")}</dd></div>
  <div><dt>Program</dt><dd>Bachelor of Science in Information Technology</dd></div>
  <div><dt>School</dt><dd>${esc(P.school)}, ${esc(P.location)}</dd></div>
  <div><dt>BSIT specialization</dt><dd>${val(P.specialization, "Add your specialization")}</dd></div>
  <div><dt>Target IT position</dt><dd>${val(P.targetPosition, "Add your target position")}</dd></div>
  <div><dt>Preferred IT field</dt><dd>${P.fields.length ? P.fields.map(f => `<span class="chip">${esc(f)}</span>`).join("") : ph("Choose from: " + FIELDS.join(", "))}</dd></div>`;

/* ---------- skills ---------- */
$("skillgroups").innerHTML = SKILLS.map(([area, list]) => `
  <div class="skillgroup" data-area="${area}"><h3>${ic(AREA_ICON[area])}${area}</h3><div>${list.map(name => {
    const s = P.skills[name] || {};
    const lv = s.level && s.evidence ? s.level : 0;
    return `<div class="skill"><span>${esc(name)}</span>
      <span><span class="meter" role="img" aria-label="${lv ? LEVELS[lv - 1] : "Not yet rated"}">${[1, 2, 3].map(i => `<i class="${i <= lv ? "on" : ""}"></i>`).join("")}</span><span class="lvl">${lv ? LEVELS[lv - 1] : "Not rated"}</span></span>
      <span class="ev">${s.evidence ? esc(s.evidence) : ph("Evidence needed")}</span></div>`;
  }).join("")}</div></div>`).join("");

const filterEl = $("skillfilter");
filterEl.innerHTML = ["All", ...SKILLS.map(s => s[0])].map((n, i) =>
  `<button type="button" class="chipf" aria-pressed="${i === 0}" data-area="${n}">${i ? ic(AREA_ICON[n]) : ""}${n}</button>`).join("");
filterEl.addEventListener("click", e => {
  const b = e.target.closest(".chipf");
  if (!b) return;
  filterEl.querySelectorAll(".chipf").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  document.querySelectorAll(".skillgroup").forEach(g => { g.hidden = b.dataset.area !== "All" && g.dataset.area !== b.dataset.area; });
});

/* ---------- projects ---------- */
const plink = (url, label, icon) => url
  ? `<a class="pl" href="${esc(url)}" target="_blank" rel="noopener">${ic(icon)}${label}</a>`
  : `<span class="pl off" title="Add this link in js/script.js">${ic(icon)}${label}</span>`;
$("projectcards").innerHTML = PROJECT_SPEC.map((spec, i) => {
  const p = P.projects[i] || {};
  const demoBtn = p.demo
    ? `<a class="btn primary sm live-demo" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer" aria-label="Live demo of ${esc(p.title || spec.def)}">${ic("i-globe")} Live demo ${ic("i-ext")}</a>`
    : `<span class="btn line sm is-disabled" aria-disabled="true" title="Add the demo link in js/script.js">${ic("i-globe")} Live demo</span>`;
  const dbBlock = p.db
    ? `<details class="req"><summary>Database <span>${p.db.tables.length} tables</span></summary><ul>${p.db.tables.map(t => `<li>${esc(t)}</li>`).join("")}</ul><p class="dbfile">${esc(p.db.name)} · ${plink(p.db.file, "View / download SQL file", "i-db")}</p></details>`
    : "";
  return `<article class="card">
    <div class="ctop"><span class="cico">${ic(spec.icon)}</span><span class="tag">${spec.tag}</span></div>
    <h3>${p.title ? esc(p.title) : ph(spec.def)}</h3>
    <p>${p.summary ? esc(p.summary) : ph("Add a one-sentence summary of the problem this solves")}</p>
    <details class="req"><summary>Requirements <span>${spec.reqs.length}</span></summary><ul>${spec.reqs.map(r => `<li>${r}</li>`).join("")}</ul></details>
    ${dbBlock}
    <div class="tech"><b>Technologies</b>${val(p.tech, "Add technologies used")}</div>
    ${demoBtn}
    <div class="proj-links">${plink(p.repo, "Source code", "i-github")}${plink(p.docs, "Documentation", "i-file")}</div></article>`;
}).join("");

/* ---------- troubleshooting cases ---------- */
$("cases").innerHTML = P.cases.map((c, i) => {
  const list = c.causes && c.causes.length ? `<ul>${c.causes.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ph("Add possible causes");
  return `<details class="case"${i === 0 ? " open" : ""}><summary><span class="n">CASE ${i + 1}</span><span>${c.problem ? esc(c.problem) : ph("Add the problem you solved")}</span>${c.example ? '<span class="ex">Guide example</span>' : ""}</summary>
  <div class="case-body">
    <div><span class="lbl">Possible causes</span>${list}</div>
    <div><span class="lbl">Diagnostic procedure</span>${val(c.diagnostic, "Add the steps you took to find the cause")}</div>
    <div><span class="lbl">Solution</span>${val(c.solution, "Add the fix")}</div>
    <div><span class="lbl">Lesson learned</span>${val(c.lesson, "Add what you learned")}</div>
  </div></details>`;
}).join("");
$("openall").addEventListener("click", () => document.querySelectorAll("details.case").forEach(d => { d.open = true; }));
$("closeall").addEventListener("click", () => document.querySelectorAll("details.case").forEach(d => { d.open = false; }));

/* ---------- AI log ---------- */
$("ailog").innerHTML = P.aiLog.length
  ? P.aiLog.map(r => `<tr><td>${esc(r.date)}</td><td>${esc(r.task)}</td><td>${esc(r.assist)}</td><td>${esc(r.verify)}</td></tr>`).join("")
  : `<tr><td>${ph("Date")}</td><td>${ph("Task")}</td><td>${ph("What AI did")}</td><td>${ph("How I checked it")}</td></tr>`;
const AIQ = ["What did AI help me accomplish?", "What did I personally verify?", "What did I learn from using AI?", "What limitations or errors did I find?"];
$("aiqa").innerHTML = AIQ.map((q, i) => `<div><h4>${q}</h4><p>${val(P.aiAnswers[i], "Add your answer")}</p></div>`).join("");

/* ---------- employability ---------- */
const IV = [["mock", "Mock job interview"], ["technical", "Technical interview"]];
$("interviews").innerHTML = IV.map(([k, n]) => `<div class="row"><strong>${n}</strong><span class="status ${P.interviews[k] ? "done" : ""}">${P.interviews[k] ? "Completed" : "Not yet completed"}</span></div>`).join("");

/* mock interview video: local file, YouTube or Google Drive */
function videoEmbed(url) {
  if (!url) return "";
  let m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (m) return `<iframe src="https://www.youtube.com/embed/${m[1]}" title="Mock interview video" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
  m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (m) return `<iframe src="https://drive.google.com/file/d/${m[1]}/preview" title="Mock interview video" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>`;
  return `<video controls preload="metadata" playsinline src="${esc(url)}">Your browser does not support video playback.</video>`;
}
$("mockvideo").innerHTML = P.mockVideo
  ? `<div class="vidbox">${videoEmbed(P.mockVideo)}</div>${P.mockVideoNote ? `<p class="note" style="margin-top:12px">${esc(P.mockVideoNote)}</p>` : ""}`
  : `<div class="vidbox empty"><span>${ph("Add your mock interview video link in js/script.js (mockVideo)")}</span></div>`;

/* technical interview preparation (Step 20) */
$("techprep").innerHTML = TECHPREP.map(t => `
  <article class="tp">
    <h4>${ic(t.icon)}${esc(t.area)}</h4>
    <span class="lbl">Concepts I can explain</span>
    <ul>${t.concepts.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
    <span class="lbl">Practice problem</span>
    <p>${esc(t.task)}</p>
    ${t.code || t.answer ? `<span class="lbl">My answer</span>` : ""}
    ${t.code ? `<pre class="code"><code>${esc(t.code)}</code></pre>` : ""}
    ${t.answer ? `<p class="ans">${esc(t.answer)}</p>` : ""}
    <span class="lbl">Evidence</span>
    <p class="ev">${esc(t.proof)}</p>
  </article>`).join("");
const PL = P.plan;
$("plan").innerHTML = [["Target position", P.targetPosition, "Add target position"], ["Target IT field", P.fields.join(", "), "Add target field"], ["Current skills", PL.skillsNow, "Add current skills"], ["Skills to improve", PL.improve, "Add skills to improve"], ["Technologies to learn", PL.learn, "Add technologies"], ["Certifications to consider", PL.certs, "Add certifications"], ["6-month goal", PL.g6, "Add goal"], ["1-year goal", PL.g12, "Add goal"], ["3-year goal", PL.g36, "Add goal"]]
  .map(([l, v, t]) => `<div><span class="lbl">${l}</span>${val(v, t)}</div>`).join("");

/* ---------- resume ---------- */
const skillNames = Object.keys(P.skills).filter(k => P.skills[k].evidence);
const ul = items => `<ul style="margin:0;padding-left:1.1rem">${items.join("")}</ul>`;
$("paper").innerHTML = `
  <header><div class="rhead"><img class="rphoto" src="${esc(P.photo || "images/journ.jpg")}" alt="Photo of ${esc(P.name)}" onerror="this.remove()"><div><h3>${val(P.name, "Your full name")}</h3><div class="t">${P.targetPosition ? esc(P.targetPosition) : "BSIT Student"}</div></div></div>
    <div class="c">${P.email ? esc(P.email) : ph("email")}<br>${esc(P.location)}${P.linkedin ? "<br>" + esc(P.linkedin) : ""}${P.github ? "<br>" + esc(P.github) : ""}</div></header>
  <div><h4>Professional summary</h4><p>${statement}</p></div>
  <div class="two">
    <div><h4>Education</h4><p><strong>Bachelor of Science in Information Technology</strong><br>${esc(P.school)}, ${esc(P.location)}</p></div>
    <div><h4>Technical skills</h4><p>${skillNames.length ? skillNames.map(esc).join(", ") : ph("Skills with evidence appear here")}</p></div>
  </div>
  <div class="two">
    <div><h4>Projects</h4>${P.projects.some(p => p.title) ? ul(P.projects.filter(p => p.title).map(p => `<li>${esc(p.title)}</li>`)) : ph("Project titles appear here")}</div>
    <div><h4>Certifications and achievements</h4>${P.achievements.length ? `<ul class="certlist">${P.achievements.map((x, i) => `<li>${esc(x.title)}${x.img ? `<button type="button" class="linkbtn" data-cert="${i}">View full certificate ${ic("i-ext")}</button>` : ""}</li>`).join("")}</ul>` : ph("Certificates appear here")}</div>
  </div>`;
$("printresume").addEventListener("click", () => {
  document.body.classList.add("printing");
  window.print();
});
window.addEventListener("afterprint", () => document.body.classList.remove("printing"));

/* ---------- achievements ---------- */
if (P.achievements.length) $("achlist").className = "certgrid";
$("achlist").innerHTML = P.achievements.length
  ? P.achievements.map((x, i) => {
      const meta = [x.issuer, x.year, x.hours].filter(Boolean).map(esc).join(" · ");
      const thumb = x.img ? `<button type="button" class="cthumb" data-cert="${i}" aria-label="View certificate: ${esc(x.title)}"><img src="${esc(x.img)}" alt="Certificate: ${esc(x.title)}" loading="lazy" onerror="this.closest('.cert').classList.add('noimg')"></button>` : "";
      const btn = x.img ? `<button type="button" class="go" data-cert="${i}">View full certificate ${ic("i-ext")}</button>` : "";
      return `<div class="cert${x.img ? "" : " noimg"}">${thumb}<span class="cbody"><strong>${ic("i-award")}<span>${esc(x.title)}</span></strong><span class="cmeta">${meta}</span>${btn}</span></div>`;
    }).join("")
  : `<div class="row"><span>${ph("Add a certificate or achievement: title, issuer, year")}</span></div>`;

/* certificate viewer: opens the full certificate on the page */
const lb = document.createElement("div");
lb.className = "lightbox"; lb.hidden = true;
lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Certificate viewer");
lb.innerHTML = '<div class="lb-box"><button type="button" class="lb-close" aria-label="Close certificate">&times;</button><div class="lb-slot"></div><div class="lb-cap"></div></div>';
document.body.appendChild(lb);
let lbReturn = null;
function openCert(i) {
  const x = P.achievements[i];
  if (!x || !x.img) return;
  const slot = lb.querySelector(".lb-slot");
  slot.innerHTML = `<img src="${esc(x.img)}" alt="Certificate: ${esc(x.title)}">`;
  slot.querySelector("img").onerror = () => { slot.innerHTML = `<div class="lb-missing">The certificate image was not found. Add the file at <b>${esc(x.img)}</b>.</div>`; };
  lb.querySelector(".lb-cap").textContent = x.title;
  lbReturn = document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  lb.querySelector(".lb-close").focus();
}
function closeCert() {
  lb.hidden = true;
  document.body.style.overflow = "";
  if (lbReturn && lbReturn.focus) lbReturn.focus();
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-cert]");
  if (t) { openCert(+t.dataset.cert); return; }
  if (e.target === lb || e.target.closest(".lb-close")) closeCert();
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeCert(); });

/* ---------- GitHub ---------- */
$("ghprofile").innerHTML = P.github
  ? `<a class="btn primary" href="${esc(P.github)}" target="_blank" rel="noopener">${ic("i-github")} Open my GitHub</a><span class="mono" style="overflow-wrap:anywhere">${esc(P.github)}</span>`
  : `<span>${ph("Add your GitHub profile link")}</span>`;
$("repos").innerHTML = PROJECT_SPEC.map((s, i) => {
  const p = P.projects[i] || {};
  const name = p.title ? esc(p.title) : s.tag;
  return p.repo
    ? `<a class="row" href="${esc(p.repo)}" target="_blank" rel="noopener"><strong>${ic("i-folder")}${name}</strong><span class="go">View repository ${ic("i-ext")}</span></a>`
    : `<div class="row"><strong>${ic("i-folder")}${name}</strong><span>${ph("Repository link")}</span></div>`;
}).join("");

/* ---------- contact: select a method, then act ---------- */
const CONTACT = {
  email:     { label: "Email",     icon: "i-mail",     value: P.email,        href: P.email ? `mailto:${P.email}` : "", open: "Send email",     empty: "Add your email in js/script.js" },
  linkedin:  { label: "LinkedIn",  icon: "i-linkedin", value: P.linkedin,     href: P.linkedin,                         open: "Open LinkedIn",  empty: "Add your LinkedIn link in js/script.js" },
  github:    { label: "GitHub",    icon: "i-github",   value: P.github,       href: P.github,                           open: "Open GitHub",    empty: "Add your GitHub link in js/script.js" },
  portfolio: { label: "Portfolio", icon: "i-globe",    value: P.portfolioUrl, href: P.portfolioUrl,                     open: "Open website",   empty: "Add your portfolio URL in js/script.js" }
};
$("tiles").innerHTML = Object.entries(CONTACT).map(([k, m]) => `
  <button type="button" class="tile" data-key="${k}" aria-pressed="false">
    <span class="tico">${ic(m.icon)}</span>
    <span class="tt"><b>${m.label}</b><span>${m.value ? esc(m.value) : "Not added yet"}</span></span>
    <span class="arrow">${ic("i-arrow")}</span>
  </button>`).join("");

function selectContact(key) {
  const m = CONTACT[key];
  document.querySelectorAll(".tile").forEach(t => t.setAttribute("aria-pressed", String(t.dataset.key === key)));
  const ext = key === "email" ? "" : ' target="_blank" rel="noopener"';
  $("cp-info").innerHTML = `
    <div class="cp-top"><span class="cp-ico">${ic(m.icon)}</span>
      <div style="min-width:0"><span class="lbl">${m.label}</span><div class="cp-val">${m.value ? esc(m.value) : ph(m.empty)}</div></div></div>
    <div class="cp-actions">
      <button type="button" class="btn primary" data-act="copy"${m.value ? "" : " disabled"}>${ic("i-copy")} Copy</button>
      ${m.value ? `<a class="btn line" href="${esc(m.href)}"${ext}>${ic("i-ext")} ${m.open}</a>` : `<span class="btn line is-disabled" aria-disabled="true">${ic("i-ext")} ${m.open}</span>`}
    </div>`;
  $("cp-info").dataset.key = key;
  $("cform").hidden = key !== "email";
}
$("tiles").addEventListener("click", e => {
  const t = e.target.closest(".tile");
  if (t) selectContact(t.dataset.key);
});
$("cp-info").addEventListener("click", e => {
  const b = e.target.closest('[data-act="copy"]');
  if (!b) return;
  const m = CONTACT[$("cp-info").dataset.key];
  copyText(m.value, m.label + " copied");
});
document.querySelectorAll(".soc").forEach(b => b.addEventListener("click", () => {
  selectContact(b.dataset.contact);
  $("contact").scrollIntoView({ behavior: "smooth" });
}));
selectContact("email");

/* message form */
const fName = $("f-name"), fMsg = $("f-msg");
fMsg.addEventListener("input", () => { $("count").textContent = `${fMsg.value.length} / 600`; });
function composeMessage() {
  const topic = document.querySelector('input[name="topic"]:checked').value;
  const name = fName.value.trim();
  const msg = fMsg.value.trim();
  return { subject: `${topic} from ${name || "a visitor"}`, body: `${msg}\n\n${name}`, plain: `Subject: ${topic}\n\n${msg}\n\n${name}` };
}
function validate() {
  let ok = true;
  const nameOk = fName.value.trim().length >= 2;
  const msgOk = fMsg.value.trim().length >= 10;
  $("e-name").textContent = nameOk ? "" : "Enter your name.";
  $("e-msg").textContent = msgOk ? "" : "Write at least 10 characters.";
  fName.setAttribute("aria-invalid", String(!nameOk));
  fMsg.setAttribute("aria-invalid", String(!msgOk));
  if (!nameOk) { fName.focus(); ok = false; } else if (!msgOk) { fMsg.focus(); ok = false; }
  return ok;
}
$("cform").addEventListener("submit", e => {
  e.preventDefault();
  if (!validate()) return;
  if (!P.email) { toast("Add your email in js/script.js to enable sending"); return; }
  const m = composeMessage();
  window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(m.body)}`;
  $("cnote").textContent = "Your email app should open with the message ready. If it does not, use Copy message.";
  toast("Opening your email app");
});
$("copymsg").addEventListener("click", () => {
  if (fMsg.value.trim().length < 1) { validate(); return; }
  copyText(composeMessage().plain, "Message copied");
});
[fName, fMsg].forEach(el => el.addEventListener("input", () => { el.setAttribute("aria-invalid", "false"); $(el === fName ? "e-name" : "e-msg").textContent = ""; }));

/* ---------- reflection ---------- */
$("reflect").innerHTML = P.reflection
  ? P.reflection.split(/\n\s*\n/).map(p => `<p style="margin-bottom:14px">${esc(p)}</p>`).join("")
  : `<p class="note">${ph("Write 500 to 800 words covering:")}</p><ol class="prompts">${PROMPTS.map(x => `<li>${x}</li>`).join("")}</ol>`;

/* ---------- theme toggle ---------- */
const root = document.documentElement;
const darkMq = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : darkMq.matches;
function syncThemeLabel() { $("theme").setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme"); }
try { const saved = localStorage.getItem("theme"); if (saved === "light" || saved === "dark") root.dataset.theme = saved; } catch (e) { /* ignore */ }
$("theme").addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  syncThemeLabel();
  toast(next === "dark" ? "Dark theme on" : "Light theme on");
});
darkMq.addEventListener("change", syncThemeLabel);
syncThemeLabel();

/* ---------- color palette picker ---------- */
(function () {
  const sel = $("palette");
  const apply = v => { if (v && v !== "navy") root.dataset.palette = v; else delete root.dataset.palette; };
  let saved = "";
  try { saved = localStorage.getItem("palette") || ""; } catch (e) { /* ignore */ }
  if ([...sel.options].some(o => o.value === saved)) apply(saved);
  sel.value = root.dataset.palette || "navy";
  sel.addEventListener("change", () => {
    apply(sel.value);
    try { localStorage.setItem("palette", sel.value); } catch (e) { /* ignore */ }
    toast(sel.options[sel.selectedIndex].text + " color on");
  });
})();

/* ---------- button press ripple ---------- */
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn, .tile, .copy, .soc, .icon-btn, .chipf, .totop");
  if (!b || b.disabled || b.classList.contains("is-disabled")) return;
  const r = b.getBoundingClientRect();
  const size = Math.max(r.width, r.height) * 2;
  const s = document.createElement("span");
  s.className = "rip";
  s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  b.appendChild(s);
  setTimeout(() => s.remove(), 600);
});

/* ---------- scroll: progress bar, back to top, active nav link ---------- */
const progress = $("progress"), totop = $("totop");
let ticking = false;
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0) + "%";
  totop.classList.toggle("show", window.scrollY > 600);
  ticking = false;
}
window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
totop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const navLinks = [...document.querySelectorAll("#navlinks a")];
function setActive(id) {
  navLinks.forEach(l => {
    const on = l.getAttribute("href") === "#" + id;
    l.classList.toggle("active", on);
    if (on) {
      l.setAttribute("aria-current", "true");
      const c = $("navlinks");
      c.scrollTo({ left: l.offsetLeft - c.clientWidth / 2 + l.clientWidth / 2, behavior: "smooth" });
    } else { l.removeAttribute("aria-current"); }
  });
}
navLinks.forEach(link => link.addEventListener("click", () => setActive(link.hash.slice(1))));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("header#home, main > section").forEach(s => io.observe(s));
}

/* ---------- scroll reveal ---------- */
(function () {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = document.querySelectorAll(".head, .about, .facts, .skillgroup, .card, details.case, .sec-case, .tablewrap, .plan > div, .paper, .row, .cert, .tile, .cpanel, #reflect");
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("in");
      io.unobserve(el);
      // drop the reveal class afterwards so hover effects work normally
      setTimeout(() => el.classList.remove("rv", "in"), 900);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  targets.forEach((el, i) => {
    el.classList.add("rv");
    el.style.setProperty("--d", (i % 4) * 70 + "ms");
    io.observe(el);
  });
})();

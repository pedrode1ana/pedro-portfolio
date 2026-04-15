FIGMA PROTOTYPE PROMPT v3 — Pedro De Lana Portfolio
Final version — all changes consolidated

CONCEPT
A one-page portfolio that operates like a tactical board meets a product deck. The hero is a dark football pitch. Five clickable player pins arranged in a 2-3-1-4-1 formation invite exploration. The design language is Apple-clean with jogo bonito flair, disciplined structure with expressive details. Every word answers one question without asking it: this is someone who will lead products, teams, and companies.

FONTS

Display / Headings: DM Serif Display, Regular 400, Italic 400
Body / UI: DM Sans, Light 300, Regular 400, Medium 500


COLOR TOKENS
--green-pitch:      #4CAF50
--green-light:      #66BB6A
--green-stripe:     #81C784
--green-dark:       #2E7D32
--green-deep:       #1B5E20
--white:            #FFFFFF
--off-white:        #F7FBF7
--gray-soft:        #E8F5E9
--text-dark:        #0A1A0B
--text-muted:       #4A6741
--brazil-yellow:    #FFD700
--brazil-blue:      #1565C0
--hero-bg:          #1a2e1a
--hero-stripe-a:    #1a2e1a
--hero-stripe-b:    #1f351f
--overlay-bg:       rgba(10,26,11,0.96)
--contact-bg:       #0A1A0B

NAV
Height 60px. Background rgba(10,26,11,0.82), backdrop blur 20px. Border-bottom 1px rgba(76,175,80,0.15).

Left: P.DeLana, DM Serif Display 18px, rgba(255,255,255,0.85), the . in #4CAF50
Center: Work, Skills, Leadership, About. DM Sans 13px 400, rgba(255,255,255,0.55), gap 36px. Hover #81C784
Right: "Contact" pill, bg #4CAF50, text #FFFFFF, DM Sans 13px 500, padding 8px 20px, border-radius 100px. Hover bg #2E7D32


HERO
Full viewport height. Background #1a2e1a. Repeating vertical stripes #1a2e1a / #1f351f, 80px each, 100% opacity.
Pitch markings in rgba(255,255,255,0.18), 2px stroke: full boundary rectangle inset 48px, center circle 120px diameter, center dot 6px, halfway line, both penalty boxes 200x280px, goal boxes 80x140px, penalty spots, penalty arcs radius 80px, corner arcs radius 20px.
Hero text, upper half centered:
Eyebrow pill: bg #4CAF50, text #FFFFFF, DM Sans 11px 500, uppercase, letter-spacing 1.5px, border-radius 100px, padding 6px 16px. Text: BUILDER · LEADER · COMMUNITY
H1 line 1: "Pedro De Lana", DM Serif Display 72px, #FFFFFF, letter-spacing -2px
H1 line 2: "I build expressive products", DM Serif Display 72px italic, #4CAF50, letter-spacing -2px
H1 line 3: "and lead with purposeful freedom.", same spec as line 2
Closing line: "on and off the pitch.", DM Serif Display 18px italic, rgba(255,255,255,0.45), letter-spacing 0.5px, no pill, no background, just floating type centered beneath H1
Subheading: DM Sans 18px 300, rgba(255,255,255,0.6). Text: "CS student. Product builder. People leader. FSU, wherever the game takes me."
CTAs:

Primary: bg #4CAF50, text #FFFFFF, "See my work", padding 14px 32px, border-radius 100px
Secondary: transparent, border 1.5px rgba(129,199,132,0.4), text rgba(255,255,255,0.75), "My story"

Formation subheading, centered just above pitch boundary:
"Select your position", DM Serif Display italic 16px, rgba(255,255,255,0.45), letter-spacing 0.5px
Formation pins, 2-3-1-4-1 layout:
Mapped sections:

Row 1, 2 pins: WORK (left), CONTACT (right)
Row 2, 3 pins: SKILLS (left), LEADERSHIP (center), EXPERIENCE (right)
Row 3, 1 pin: HOME, center spot
Row 4, 4 pins: PROJECTS (left), ABOUT (center-left), COMMUNITY (center-right), CONTACT (right)
Row 5, 1 pin: ABOUT

Simplified to 5 clickable sections for MVP: WORK, SKILLS, LEADERSHIP, ABOUT, CONTACT
Pin design:
Outer pulse ring: 48px diameter, border 1.5px rgba(76,175,80,0.35), no fill. Animation: scale 1 to 1.6, opacity 0.35 to 0, 2s ease-out infinite. Second ring delayed 1s.
Inner circle: 36px diameter, bg #4CAF50, border 2px rgba(255,255,255,0.25), border-radius 50%, box-shadow 0 4px 16px rgba(76,175,80,0.4). Center: jersey number, DM Serif Display 16px #FFFFFF.
Hover state: inner circle bg #FFD700, border rgba(255,215,0,0.4), box-shadow 0 4px 24px rgba(255,215,0,0.35), scale 1 to 1.1, transition 0.2s. Label pill slides up: bg #FFFFFF, text #0A1A0B, DM Sans 11px 500, uppercase, letter-spacing 1.5px, border-radius 100px, padding 5px 14px.
Click state: pin scales to 0.9 then back to 1. Overlay fades in, pitch fades to 30% opacity behind it.

STATS BAR
Background #4CAF50, padding 28px 48px, four stats centered, gap 80px.
Each stat: number in DM Serif Display 36px #FFFFFF, label in DM Sans 11px 400 uppercase letter-spacing 1px rgba(255,255,255,0.8).
Stats: 3.5 GPA at FSU, 5 Products built, 1 Chapter co-founded, ∞ Drive

OVERLAY 1 — WORK
H2: "What I've built."
Intro: "Products that started as problems worth solving. Each one defined, designed, and shipped with intention."
Five project cards, 3-column grid, gap 20px. NoleQuest featured spanning 2 columns.
Card spec: bg rgba(255,255,255,0.04), border 1px rgba(76,175,80,0.15), border-radius 20px. Visual header gradient, repeating stripe overlay at 6% white opacity, icon box 52x52px rgba(255,255,255,0.15) bg border-radius 14px. Tag pill bg rgba(76,175,80,0.15), text #81C784, DM Sans 10px 500, uppercase, letter-spacing 1.5px. Title DM Serif Display 20px #FFFFFF. Description DM Sans 13px 300 rgba(255,255,255,0.55). Hover translateY(-6px), box-shadow 0 20px 60px rgba(76,175,80,0.15).
Card 1 — Featured, 2 columns
Gradient: linear-gradient(135deg, #4CAF50, #2E7D32)
Tag: AI · PRODUCT STRATEGY · AWS
Title: "NoleQuest, AI Internship Marketplace"
Body: "Defined product strategy and led development of a serverless AI marketplace using Amazon Bedrock (Claude Sonnet), Textract, Lambda, and DynamoDB. Authored a full PR/FAQ using Amazon's Working Backwards methodology before a single screen was designed. Targeting a 15% application-to-interview conversion rate, 6x the industry average of 2 to 3%."
Sub-detail in 11px rgba(255,255,255,0.4): "13+ prototype screens, AWS Design Sprint, Feb 2026"
Card 2
Gradient: linear-gradient(135deg, #1B5E20, #388E3C)
Tag: AI-ASSISTED · PRODUCT DESIGN
Title: "Personal Portfolio, pedrodelana.com"
Body: "Designed and built through intentional AI collaboration, directing every design token, interaction, and content decision through structured prompting and creative direction. Spec'd in natural language, prototyped in Figma, built in VS Code with Claude Code. This site is a demonstration of how I work: using AI as a creative partner, not a shortcut."
Sub-detail: "DM Serif Display · #4CAF50 · Formation pins · 2026"
Card 3
Gradient: linear-gradient(135deg, #66BB6A, #43A047)
Tag: PRODUCT DESIGN · AGILE
Title: "Small Business Growth Platform"
Body: "Translated user research and stakeholder analysis into a prioritized MVP roadmap with measurable adoption metrics. Defined feature scope, user stories, and technical documentation across iterative agile sprint cycles. FSU Innovation by Design, Aug to Dec 2025."
Card 4
Gradient: linear-gradient(135deg, #81C784, #4CAF50)
Tag: FULL STACK · C#
Title: "Medical Practice Management System"
Body: "Developed a cross-platform healthcare application in C# / .NET MAUI, translating real clinical workflows into scalable product features. Modular CRUD architecture designed for maintainability and iterative expansion. FSU Full Stack Development, Aug to Dec 2025."
Card 5
Gradient: linear-gradient(135deg, #388E3C, #1B5E20)
Tag: HTML · CSS · JAVASCRIPT · ORIGIN
Title: "Breaking into Tech, where it started"
Body: "My first self-built website. Raw HTML, CSS, and JavaScript, no frameworks, no tutorials, just figuring it out. Built as an online journal navigating who I wanted to become in tech. The gap between this and everything above it is the story."
Sub-detail with link: "pedrode1ana.github.io"

OVERLAY 2 — SKILLS
H2: "My formation."
Intro: "The toolkit I bring to every product, team, and problem."
AI row first, labeled with divider line and text "AI & Emerging Tools", DM Sans 11px 500 #81C784, letter-spacing 2px, uppercase. Bar fills use #FFD700 instead of #4CAF50 for this row only.
AI skills:

AI-Assisted Development, Advanced, 88%
Prompt Engineering, Advanced, 85%
Claude / Amazon Bedrock, Intermediate, 75%
ChatGPT / Copilot / Gemini, Intermediate, 70%

Core skills row, labeled "Engineering & Craft", same divider style. Bar fills #4CAF50.

C++ / C# / Python, Advanced, 85%
HTML / CSS / JavaScript, Advanced, 82%
AWS (Lambda, DynamoDB, Textract), Intermediate, 70%
Figma / Product Design, Intermediate, 75%
.NET MAUI, Intermediate, 68%
SQL / Data Analysis, Intermediate, 65%
Git / GitHub, Advanced, 80%
Jira / Agile Workflows, Intermediate, 70%

Skill pill spec: bg rgba(255,255,255,0.04), border 1px rgba(76,175,80,0.15), border-radius 14px, padding 20px. Icon 20px. Name DM Sans 14px 500 #FFFFFF. Level DM Sans 11px 300 rgba(255,255,255,0.45). Bar track rgba(255,255,255,0.08), 3px height, border-radius 100px. Hover: border #4CAF50, translateY(-2px), box-shadow 0 8px 24px rgba(76,175,80,0.15).

OVERLAY 3 — LEADERSHIP
H2: "How I lead."
Opening line, DM Serif Display italic 18px rgba(255,255,255,0.7), centered, max-width 600px:
"Leadership is structured freedom, a formation that gives each player room to express themselves."
Three cards, equal width, horizontal row, bg rgba(255,255,255,0.04), border 1px rgba(76,175,80,0.15), border-radius 20px, padding 28px.
Card 1 — ColorStack at FSU
Tag: bg #1565C0, text #FFFFFF, "CO-FOUNDER · VP"
Title: DM Serif Display 22px #FFFFFF, "Bridging the gap."
Body: "Built FSU's ColorStack chapter from zero, creating infrastructure to connect underrepresented CS students to real careers in tech. Leading cross-functional operations, budgeting, event strategy, and university partnerships. The national mission made local and personal."
Card 2 — Brazilian Student Association
Tag: bg #FFD700, text #0A1A0B, "HEAD OF OUTREACH"
Title: "Building community."
Body: "Designed outreach campaigns that grew membership by 40+ students. Managed 5+ concurrent initiatives using impact vs. feasibility prioritization frameworks. Representing a community I'm proud to be part of."
Card 3 — The Pitch
Tag: bg #4CAF50, text #FFFFFF, "U10 COACH · VOLUNTEER"
Title: "Guiding the next generation."
Body: "Volunteer coach for boys U10 soccer. At the end of the day, we are all children at heart. Leadership is creating a structure that lets people be expressive and free within it."

OVERLAY 4 — ABOUT
H2: "Off the pitch."
Two column layout, gap 80px, vertically centered.
Left column, visual card:
bg #4CAF50, border-radius 24px, padding 40px. Two decorative circles in rgba(255,255,255,0.12), no fill, one 160x160px top-right, one 200x200px bottom-right.
Headshot photo: circle crop, 120x120px, centered upper portion of card, border 3px rgba(255,255,255,0.6). Upload photo directly in Figma to this layer.
Name: "Pedro De Lana", DM Serif Display 24px #FFFFFF
Sub: "Builder. Leader. Brazilian.", DM Sans 14px 300 rgba(255,255,255,0.85)
Floating badge below card: bg #FFFFFF, border-radius 12px, padding 12px 20px, box-shadow 0 8px 32px rgba(0,0,0,0.2). Pulsing green dot #4CAF50 8px + text "FSU · Class of 2027", DM Sans 12px 500 #0A1A0B. Pulse animation: scale 1 to 1.4, opacity 1 to 0.5, 2s infinite.
Right column, text:
Section label: "ABOUT ME", DM Sans 11px 500 #4CAF50, letter-spacing 2px, uppercase
Para 1:
"I'm a Computer Science student at FSU with minors in Business and Innovation. I've always lived at the intersection of how things work and why they matter."
Para 2:
"I define what gets built, why it matters, and how it ships. I've led product strategy on AI-powered platforms, designed full product case studies, and written working code across multiple languages and frameworks. The technology is the vehicle; the problem is what drives me."
Para 3:
"I co-founded ColorStack at FSU because the tech industry is better when more voices are at the table. Building that chapter is the most meaningful thing on this page."
Para 4 — keep exactly as written, no changes:
"On weekends you'll find me on a grass pitch coaching U10 boys, or playing guitar at church. Both taught me the same thing: the best leaders create space for others to shine."
Para 5 — keep exactly as written, no changes:
"I'm Brazilian, and I carry that with me. Jogo bonito isn't just a style of football. It's a philosophy. Beautiful, expressive, disciplined. That's how I want to build."
CTA: "Let's connect", primary pill style

OVERLAY 5 — CONTACT
H2: "Ready to play."
Body: "I'm currently at Citi and always open to conversations about technology, products, and building things that matter."
Left column contact links:

✉️ p.delana11993@gmail.com
💼 linkedin.com/in/pedrodelana
🐙 github.com/pedrode1ana
🌐 pedrodelana.com
📍 Tallahassee, FL

Right column form: Name, Email, Message textarea 120px, "Send it" button primary pill style.

BRAZILIAN FLAIR RULES
#FFD700 used only for: pin hover state, BSA card tag, AI skills bar fills.
#1565C0 used only for: ColorStack card tag, one or two skill tags.
Rule: if both colors were removed, the design still works perfectly. They are seasoning, not ingredients.

MOTION SPEC
Hero load: fade up from translateY(30px) to 0, opacity 0 to 1, 0.9s ease, staggered 0.1s delay per element.
Pin pulse: scale 1 to 1.6, opacity 0.35 to 0, 2s ease-out infinite, second ring offset 1s.
Pin hover: bg to #FFD700, scale 1 to 1.1, label slides up, 0.2s ease.
Pin click: scale to 0.9 then 1, overlay fades in, pitch to 30% opacity, 0.35s ease-out.
Card hover: translateY(-6px), shadow 0 20px 60px rgba(76,175,80,0.12), 0.3s.
Skill pill hover: translateY(-2px), border #4CAF50, 0.2s.
Button hover: scale 1.02, bg darkens, 0.2s.
Overlay open: fade in, translateY(10px) to 0, 0.35s ease-out.
Overlay close: fade out, 0.25s.

SPACING SYSTEM
Section padding: 100px vertical, 48px horizontal. Card padding: 24px. Grid gaps: 20px cards, 16px skills, 80px two-column layouts. Button padding: 14px 32px large, 8px 20px small.
BORDER RADIUS SYSTEM
Buttons: 100px. Large cards: 20px to 24px. Skill pills: 14px. Inputs: 12px. Icon boxes: 10px to 14px. Avatar: 50%.
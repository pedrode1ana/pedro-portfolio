This is great — now I have a full picture of you. Let me give you the complete updated Figma prompt before I write it though, one note on the Brazilian colors:
Yellow #FFD700 and blue #1565C0 as subtle accents alongside the green will actually make the palette feel very jogo bonito — think the Canarinho kit energy but refined. Not a flag on the page, just a warmth and flair that someone who knows, knows. I'll keep it tasteful.

🗒️ NOTE FOR LATER (saved here for you to come back to)

When you're ready to add a visual identity layer, consider a dedicated section with editorial-style black and white photography of Ronaldinho, Ronaldo, Nazário and Kaká — not as decoration but as a "those who came before" or "jogo bonito" philosophy section. The kind of section that makes someone stop scrolling and ask "who is this person." That's the moment your portfolio becomes a brand.


Now here's the full prompt:

FIGMA PROTOTYPE PROMPT v2 — Pedro De Lana Portfolio
Full rebuild with personalized content, formation pins, Brazilian flair

CONCEPT
A one-page portfolio that feels like a tactical board meets a Silicon Valley product deck. The hero is a dark football pitch. Five clickable player pins arranged in a 2-3-1-4-1 formation invite exploration. The design language is Apple-clean with jogo bonito flair — disciplined structure with expressive details. The portfolio answers one question without ever asking it: this is someone who will lead.

FONTS

Display / Headings: DM Serif Display — Regular 400, Italic 400
Body / UI: DM Sans — Light 300, Regular 400, Medium 500


COLOR TOKENS
-- Core Palette
--green-pitch:      #4CAF50   (primary accent, buttons, pins)
--green-light:      #66BB6A   (hover states)
--green-stripe:     #81C784   (dark section accents)
--green-dark:       #2E7D32   (button hover, deep accents)
--green-deep:       #1B5E20   (darkest green)
--white:            #FFFFFF
--off-white:        #F7FBF7
--gray-soft:        #E8F5E9
--text-dark:        #0A1A0B
--text-muted:       #4A6741

-- Brazilian Flair (used sparingly as accent only)
--brazil-yellow:    #FFD700   (pin glow, subtle highlights, hover moments)
--brazil-blue:      #1565C0   (occasional tag, decorative detail)

-- Dark surfaces
--hero-bg:          #1a2e1a
--hero-stripe-a:    #1a2e1a
--hero-stripe-b:    #1f351f
--overlay-bg:       rgba(10,26,11,0.96)
--contact-bg:       #0A1A0B

HERO — THE PITCH
Full viewport height. Dark pitch background:

Base: #1a2e1a
Repeating vertical stripes: #1a2e1a / #1f351f, 80px each, 100% opacity
Pitch markings: rgba(255,255,255,0.18), 2px stroke — full boundary rectangle, center circle, center dot, halfway line, both penalty boxes, goal boxes, penalty spots, penalty arcs, corner arcs (all same as previous spec)

Formation subheading — centered, just above the pitch boundary line:

Text: "Select your position"
Font: DM Serif Display italic, 16px
Color: rgba(255,255,255,0.45)
Letter-spacing: 0.5px
No background, no pill — just floating type

Hero intro text — centered, upper half of hero above the pitch:

Eyebrow pill: bg #4CAF50, text #FFFFFF, DM Sans 11px 500, uppercase, letter-spacing 1.5px, border-radius 100px, padding 6px 16px — text: "BUILDER · LEADER · COMMUNITY"
H1 line 1: "Pedro De Lana" — DM Serif Display 72px, #FFFFFF, letter-spacing -2px
H1 line 2: "builds things that matter." — DM Serif Display 72px italic, #4CAF50, letter-spacing -2px
Subheading: DM Sans 18px 300, rgba(255,255,255,0.6) — "CS student. Product builder. People leader. FSU → wherever the game takes me."
Two CTAs:

Primary: bg #4CAF50, text #FFFFFF, "See my work", padding 14px 32px, border-radius 100px
Secondary: transparent, border 1.5px rgba(129,199,132,0.4), text rgba(255,255,255,0.75), "My story"




FORMATION PINS — THE INTERACTIVE LAYER
Arrangement on pitch (top = attacking end, bottom = defensive end, read as who's viewing the pitch from above):
        [2 - TOP]
       [3 - MIDDLE]
        [1 - CENTER]
       [4 - BOTTOM]
        [1 - BASE]
Mapped to sections:

Row 1 — 2 pins (top): CONTACT (left) · WORK (right)
Row 2 — 3 pins (middle): SKILLS (left) · SKILLS (center) · SKILLS (right) — or spread as WORK · SKILLS · PROJECTS if you split work into two cards
Row 3 — 1 pin (center): HOME / INTRO — center circle, this pin sits exactly on the center spot
Row 4 — 4 pins: EXPERIENCE (left) · SKILLS (center-left) · LEADERSHIP (center-right) · COMMUNITY (right)
Row 5 — 1 pin (base): ABOUT

Simplify to 5 sections mapped across the formation for MVP:

Top 2: WORK (left) · CONTACT (right)
Middle 3: SKILLS (left) · — · EXPERIENCE (right)
Center 1: HOME
Bottom 4 compressed to: LEADERSHIP (left) · ABOUT (right)
Base 1: COMMUNITY / ColorStack

Pin Design — Jersey Number Hybrid with Pulse:
Each pin consists of:
Outer pulse ring:

Circle, diameter 48px
Border: 1.5px solid rgba(76,175,80,0.35)
No fill
CSS animation: scale 1→1.6, opacity 0.35→0, 2s ease-out infinite
Second pulse ring delayed 1s for layered ripple effect

Inner pin circle:

Diameter: 36px
Background: #4CAF50
Border: 2px solid rgba(255,255,255,0.25)
Border-radius: 50%
Box-shadow: 0 4px 16px rgba(76,175,80,0.4)
Center content: jersey number in DM Serif Display 16px #FFFFFF

On hover:

Inner circle bg transitions to #FFD700 (brazil yellow moment — subtle, surprising, delightful)
Border becomes rgba(255,215,0,0.4)
Box-shadow: 0 4px 24px rgba(255,215,0,0.35)
Label pill slides up from pin: bg #FFFFFF, text #0A1A0B, DM Sans 11px 500, uppercase, letter-spacing 1.5px, border-radius 100px, padding 5px 14px, shadow 0 4px 12px rgba(0,0,0,0.2)
Scale: 1→1.1, transition 0.2s ease

On click:

Pin scales down briefly (0.9) then back up — tactile feel
Overlay fades in, pitch fades to 30% opacity behind it


STATS BAR
Background: #4CAF50. Four stats:

3.5 GPA at FSU
3 Products built
1 Chapter co-founded
∞ Drive


OVERLAY 1 — WORK
H2: "What I've built."
Intro: "Products that started as problems worth solving."
Cards:

(Featured) NoleQuest — AI Internship Marketplace — tag: AWS · AI · PRODUCT
"Led product development of a serverless AI marketplace using Amazon Bedrock (Claude Sonnet), Textract, Lambda, and DynamoDB. Defined strategy using Amazon's Working Backwards methodology. 13+ prototype screens. Targeting 15% application-to-interview rate vs. 2–3% industry average."
Small Business Growth Platform — tag: PRODUCT DESIGN · AGILE
"Full product case study — user research, stakeholder analysis, MVP scoping, and simulated adoption tracking. Built in FSU's Innovation by Design course."
Medical Practice Management System — tag: FULL STACK · C#
"Cross-platform healthcare app in C# / .NET MAUI. Modular CRUD architecture designed for real-world clinical workflows."


OVERLAY 2 — SKILLS
H2: "My formation."
Skills (with Brazilian blue #1565C0 used on 1–2 tags for flair):

C++ / C# / Python — Advanced — 85%
HTML / CSS / JavaScript — Advanced — 82%
AWS (Bedrock, Lambda, DynamoDB) — Intermediate — 70%
Figma / Product Design — Intermediate — 75%
.NET MAUI — Intermediate — 68%
SQL / Data Analysis — Intermediate — 65%
Git / GitHub — Advanced — 80%
Jira / Agile Workflows — Intermediate — 70%


OVERLAY 3 — LEADERSHIP
H2: "How I lead."
Intro text (this is the most important overlay — set the tone):
DM Sans 16px 300, rgba(255,255,255,0.7), line-height 1.9:
"Leadership, to me, is structured freedom — like a formation that gives each player room to express themselves. I don't manage people. I create conditions where they can be great."
Three leadership cards (horizontal row, equal width, border rgba(76,175,80,0.15), border-radius 20px, padding 28px):
Card 1 — ColorStack at FSU
Tag: #1565C0 bg · #FFFFFF text · "CO-FOUNDER · VP"
Title: DM Serif Display 22px white — "Bridging the gap."
Body: "Co-founded FSU's ColorStack chapter to bring the national mission home — connecting underrepresented CS students to real careers in tech. Built the infrastructure from zero. Leading cross-functional operations, budgeting, and university partnerships."
Card 2 — Brazilian Student Association
Tag: #FFD700 bg · #0A1A0B text · "HEAD OF OUTREACH"
Title: "Building community."
Body: "Led outreach campaigns that grew membership by 40+. Managed 5+ concurrent initiatives using prioritization frameworks. Representing a community I'm proud to be part of."
Card 3 — The Pitch
Tag: #4CAF50 bg · #FFFFFF text · "U10 COACH · VOLUNTEER"
Title: "Guiding the next generation."
Body: "Volunteer coach for boys U10 soccer. At the end of the day, we're all children at heart — leadership is creating a structure that lets people be expressive and free within it."

OVERLAY 4 — ABOUT
H2: "Off the pitch."
Two column layout — left: visual card, right: text.
Visual card: #4CAF50 bg, same decorative circles spec as before.
Avatar: P initial.
Name: Pedro De Lana
Card sub: "Builder. Leader. Brazilian."
Floating badge: white bg, pulsing green dot — "FSU · Class of 2027"
About text (right column) — written in first person, warm, confident, not resume-speak:
Para 1:
"I'm a Computer Science student at FSU with minors in Business and Innovation — I've always lived at the intersection of how things work and why they matter."
Para 2:
"I build products. I've shipped an AI marketplace on AWS, designed full product case studies, and written working code across multiple languages and frameworks. But what drives me isn't the technology — it's the problem behind the technology."
Para 3:
"I co-founded ColorStack at FSU because I believe the tech industry is better when more voices are at the table. Leading that chapter is the most meaningful thing on this page."
Para 4:
"On weekends you'll find me on a grass pitch coaching U10 boys, or playing guitar at church. Both taught me the same thing: the best leaders create space for others to shine."
Para 5 (the Brazilian thread):
"I'm Brazilian — and I carry that with me. Jogo bonito isn't just a style of football. It's a philosophy. Beautiful, expressive, disciplined. That's how I want to build."
CTA button: "Let's connect" — primary style

OVERLAY 5 — CONTACT
H2: "Ready to play."
Body: "I'm currently interning at Citi and always open to conversations about technology, products, and building things that matter."
Contact links:

✉️ p.delana11993@gmail.com
💼 linkedin.com/in/pedrodelana
🐙 github.com/pedrode1ana
📍 Tallahassee, FL

Form fields: Name · Email · Message · "Send it →" button

BRAZILIAN FLAIR — USAGE RULES
Use --brazil-yellow (#FFD700) only for:

Pin hover state (the surprise moment)
One tag accent in the Leadership overlay (BSA card)
Subtle bottom border or detail on the about card

Use --brazil-blue (#1565C0) only for:

ColorStack card tag background
One or two skill tags
Never as a dominant color, always as a single accent note

The rule: if you removed both yellow and blue, the design still works perfectly. They are seasoning, not ingredients.

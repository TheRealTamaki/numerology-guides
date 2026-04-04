export interface ExpressionNumber {
  n: number;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  meaning: string[];
  personality: string[];
  strengths: { title: string; desc: string }[];
  challenges: { title: string; desc: string }[];
  love: string[];
  career: string[];
  faq: { q: string; a: string[] }[];
  related: { n: string; label: string; note: string }[];
}

export const expressionNumbers: ExpressionNumber[] = [
  {
    n: 1,
    title: "The Trailblazer",
    shortDesc: "Original, independent, driven to lead. Expression 1 is here to forge new paths - not follow them.",
    heroSubtitle: "Your destiny is to lead, originate, and carve your own path. No one else's map will do.",
    meaning: [
      "Expression number 1 means your life is asking you to be first at something. Not first in a competitive, ego-driven sense - first in the sense of going where you haven't been before and building something that didn't exist until you built it. Leadership, independence, and originality aren't just traits here. They're the curriculum.",
      "The expression number comes from your full birth name - every letter reduced to a number and added together. It's sometimes called the destiny number, because it describes the direction you're meant to move, the way you're meant to show up in the world. For expression 1, that direction is outward and upward. You're not built to wait for permission.",
      "The catch, as always, is the shadow. EN1's shadow is the kind of independence that becomes isolation, the kind of confidence that becomes closed-mindedness, the kind of drive that grinds past the people around it. The path isn't 'go it alone forever.' It's 'learn to lead without needing to control.'"
    ],
    personality: [
      "EN1 people have a quality that's hard to miss - a kind of directed energy, like they already know what they're doing and where they're going even when they don't. They tend to walk into rooms and assess them quickly. They have opinions and they share them. Committees make them restless. Meetings about meetings make them want to leave the building.",
      "What's underneath that confidence is usually a person who needs to feel like they're moving forward. Stagnation is genuinely uncomfortable for EN1. If they're in a role that doesn't give them ownership or room to initiate, the dissatisfaction surfaces fast. It's not entitlement - it's the number expressing itself through the only channel that feels right.",
      "The shadow side shows up when originality curdles into contrarianism, when leadership becomes a way to avoid vulnerability, when drive becomes an excuse not to stop and connect. EN1s who've done the work tend to have this quality of grounded authority - the kind that doesn't need to announce itself because it's already obvious."
    ],
    strengths: [
      { title: "Natural initiative", desc: "EN1 doesn't wait for someone else to start. They see what needs doing and they begin. This is the number's most consistent gift - the ability to generate momentum from scratch, in situations where other people are still deciding whether to try." },
      { title: "Clear sense of direction", desc: "Even in unfamiliar territory, EN1 tends to pick a direction and commit to it. They're decisive in a way that makes others feel settled. It's not that they never doubt - they do - but the doubt doesn't paralysize them the way it might paralyze someone working with a different energy." },
      { title: "Original thinking", desc: "EN1 doesn't naturally reproduce what already exists. Their instinct is to find a different angle, a newer approach, a fresher take on the problem. This makes them genuinely valuable in creative fields, entrepreneurial contexts, and any situation where the old playbook isn't working." },
      { title: "Self-reliance", desc: "When things fall apart, EN1 doesn't immediately reach for someone else to fix it. They figure it out. This self-sufficiency is real and it serves them well - though it can become a liability if it prevents them from asking for help when they actually need it." }
    ],
    challenges: [
      { title: "Collaboration as a blind spot", desc: "EN1's instinct is to do things themselves, their way. When this is appropriate, it produces excellent work quickly. When it isn't, it produces bottlenecks, resentment, and a team that feels overlooked. Learning that other people's input improves outcomes - not just slows them down - is EN1's most important relational lesson." },
      { title: "Stubbornness dressed as conviction", desc: "There's a thin line between standing firm in your principles and refusing to update your view when the evidence changes. EN1 crosses that line more often than it should. The conviction is real, but so is the tendency to stop listening once a decision has been made." },
      { title: "Isolation as default", desc: "EN1 is comfortable alone in a way that most numbers aren't, which is useful until it isn't. The drift toward independence can become a drift toward disconnection - from people, from collaboration, from the feedback that would have made the work better. Check in. Ask. Let people in." },
      { title: "Impatience with slower rhythms", desc: "Not everyone works at EN1's pace or makes decisions at EN1's speed, and the impatience that results can damage working relationships before they've had time to develop. The people EN1 dismisses as slow are often the ones doing the most careful thinking." }
    ],
    love: [
      "EN1 in a relationship tends to be direct, loyal, and a bit difficult to live with - in the ways that most worthwhile people are. They know what they want, they say so, and they expect their partner to do the same. Ambiguity and passive-aggressiveness frustrate them. A partner who communicates clearly is a partner EN1 can actually relax around.",
      "The challenge is the independence. EN1 values their autonomy more than most, which can look like emotional unavailability to a partner who needs more closeness. It's not that EN1 doesn't care - they do - but they're not built for constant togetherness. The relationship that works for EN1 is one that gives both people room to exist independently while still genuinely choosing each other.",
      "Over time, the growth edge for EN1 in love is learning to be wrong sometimes, to defer sometimes, to let someone else lead in the areas where they genuinely know better. That's a harder ask than it sounds for a number that was built to be first."
    ],
    career: [
      "EN1 is at their best professionally when they own something - a project, a business, a domain of expertise, a team. The title matters less than the ownership. What EN1 can't function well in long-term is a role where they're expected to execute someone else's vision without any input into what that vision is.",
      "Entrepreneurship is the obvious fit, and many EN1s end up there. But it's not the only one. Any senior individual contributor role, creative director position, founding team role, or domain leadership position gives EN1 the combination of autonomy and consequence they need to perform at their best.",
      "The career failure mode for EN1 is staying too long in a structure that's too small for them - a company where the ceiling is low, a role where the scope is narrow - out of security or habit. The number calls them outward. Staying small doesn't make the number go away; it just makes the frustration louder."
    ],
    faq: [
      {
        q: "What does expression number 1 mean in numerology?",
        a: ["Expression number 1 in numerology describes a destiny oriented toward leadership, originality, and independence. It says something about the direction your life is meant to move, derived from the full letters of your birth name. EN1 people are built to initiate, to go first, to create rather than inherit.", "It doesn't mean your life will be easy or that leadership will come without effort. It means that when you're operating at your best, those are the qualities you'll be expressing most consistently."]
      },
      {
        q: "How is the expression number different from the life path number?",
        a: ["The life path number comes from your birth date and describes the energy and themes you were born into - the terrain of your life. The expression number comes from your full birth name and describes the direction you're meant to move and the qualities you're here to develop and express.", "Think of it this way: the life path is the road. The expression number is the vehicle you're driving. Both matter. And when they align - when your life path energy and your expression number are working together - you tend to feel like your life makes sense."]
      },
      {
        q: "Is expression number 1 compatible with life path 1?",
        a: ["Having both a life path 1 and an expression number 1 doubles down on the number's energy - the independence, the initiative, the drive. For some people that feels completely right. For others it can feel like the number is amplifying both the gifts and the blind spots.", "The most important thing, regardless of overlap or contrast between your chart numbers, is whether you're actually working with your energy rather than against it."]
      },
      {
        q: "What careers suit expression number 1?",
        a: ["EN1 is suited to any role where they have genuine ownership - entrepreneurship, creative direction, founding team roles, domain leadership, senior independent contributor work. The common thread is autonomy and consequence: they need to be able to make decisions and to have those decisions matter.", "Roles where EN1 is just executing someone else's plan without input tend to produce frustration and underperformance, no matter how well-suited the subject matter is."]
      },
      {
        q: "What is the shadow side of expression number 1?",
        a: ["The shadow shows up as isolation, stubbornness, and a tendency to conflate independence with correctness. EN1's confidence is real, but it can tip into a kind of closed-mindedness where new information gets filtered through the lens of what they've already decided.", "The other shadow pattern is the inability to collaborate - running every project as a solo operation even when a team would produce better results. The growth work for EN1 is learning that asking for help and accepting input doesn't diminish the leadership. It improves the outcome."]
      },
      {
        q: "How do I calculate my expression number?",
        a: ["Assign each letter of your full birth name a number using the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9.", "Add all the numbers together and reduce to a single digit - unless you land on 11, 22, or 33, which are master numbers and aren't reduced further. Use the name exactly as it appears on your birth certificate, including any middle names."]
      }
    ],
    related: [
      { n: "2", label: "Expression 2", note: "The Diplomat - a very different energy from EN1's independence." },
      { n: "8", label: "Expression 8", note: "Also achievement-oriented, but through systems and authority rather than originality." },
      { n: "life-path-number-1", label: "Life Path 1", note: "The life path equivalent - shares the same core energy." }
    ]
  },
  {
    n: 2,
    title: "The Diplomat",
    shortDesc: "Cooperative, perceptive, built for partnership. Expression 2 is here to bridge, mediate, and bring people together.",
    heroSubtitle: "Your destiny is to connect - to build the kind of relationships and alliances that hold things together.",
    meaning: [
      "Expression number 2 describes a destiny built around connection, cooperation, and the quiet skill of making things work between people. If EN1 is here to lead alone, EN2 is here to build something with others - and to do it well enough that the 'with others' part is a strength, not a compromise.",
      "The expression number is calculated from every letter in your full birth name. It describes the direction your destiny is pulling you - the qualities you're here to develop and express over a lifetime. For EN2, those qualities center on sensitivity, diplomacy, and the ability to understand what other people need and facilitate it.",
      "What EN2 often struggles to accept is that these skills are real skills. In a culture that prizes loud leadership and individual achievement, the ability to facilitate, support, harmonise, and collaborate can feel less impressive than it actually is. EN2's gifts keep groups intact. That matters."
    ],
    personality: [
      "EN2 people read rooms. They notice the person who's been quiet for too long, the tension that nobody's naming, the thing that needs to be said to move the conversation forward. Most of the time this awareness operates below the level of conscious thought - they just feel it.",
      "The shadow side of this sensitivity is that EN2 can absorb too much. When they're around a lot of difficult energy - conflict, anxiety, resentment - it lands in their body in ways that are hard to discharge. They need quieter time, lower-stimulus environments, and people around them who don't generate more tension than EN2 can comfortably hold.",
      "The personality pattern that shows up most often with EN2 is a tendency to avoid direct conflict even when direct conflict would be more efficient. They'd rather find the indirect route, the diplomatic phrasing, the gentle approach that doesn't require anyone to get uncomfortable. Sometimes that's wisdom. Sometimes it just delays the inevitable."
    ],
    strengths: [
      { title: "Emotional attunement", desc: "EN2 picks up on emotional states before most people have registered them consciously. This makes them genuinely useful in group settings, negotiations, and any context where understanding what people actually feel - rather than what they say they feel - is part of the job." },
      { title: "Collaborative intelligence", desc: "EN2 isn't trying to dominate the outcome. They're trying to find the solution that everyone can live with. This produces a different kind of problem-solving than individual brilliance does - slower sometimes, but more durable, because the people involved feel heard." },
      { title: "Patience and follow-through", desc: "EN2 tends to stay with things. Where EN1 initiates and may lose interest once the novelty wears off, EN2 stays in the relationship, the project, the conversation. This persistence is quieter than ambition but it produces things that last." },
      { title: "Diplomacy under pressure", desc: "When things get heated, EN2's instinct is to de-escalate rather than match the intensity. They can hold a position without raising the temperature. In workplaces and relationships with a lot of friction, this quality is worth more than it's usually credited for." }
    ],
    challenges: [
      { title: "Subordinating their own needs", desc: "EN2's orientation toward others is so natural that their own needs can go unvoiced for a long time - until the unvoiced need becomes resentment. Learning to name what they want before it's urgent is the central relational work of this number." },
      { title: "Indecision from over-consideration", desc: "EN2 processes all the angles, all the feelings, all the possible ripple effects before deciding. At its best this produces good decisions. At its worst it produces paralysis, missed windows, and the uncomfortable feeling that by the time they've decided, the moment has passed." },
      { title: "Over-dependence on approval", desc: "EN2 is genuinely oriented toward harmony, which can tip into needing everyone to be happy with them. When it does, they start shaping their opinions and behavior around what they think others want to hear rather than what they actually think. This is a loss - for EN2 and for the people around them." },
      { title: "Conflict avoidance with real costs", desc: "Avoiding a hard conversation doesn't end the tension; it just relocates it. EN2 knows this intellectually but still defaults to the soft approach, the indirect route, the hope that things will resolve without anyone having to say the difficult thing. Sometimes it works. Often it just delays." }
    ],
    love: [
      "EN2 is one of the most devoted numbers in a relationship. When they're in, they're fully in - attentive, thoughtful, oriented toward their partner's wellbeing in a way that's genuinely felt. Partners often describe feeling truly seen by an EN2, which is one of the better things a person can offer.",
      "The difficulty is that EN2 can give so consistently that their own needs become invisible - to themselves as much as to their partner. A partner who doesn't look for what EN2 needs may simply never know, because EN2 won't make it obvious. The relationship that works best for EN2 is one where the partner actively tends to EN2's emotional world rather than waiting to be asked.",
      "EN2's growth edge in love is the ability to hold their own position when it conflicts with their partner's. To disagree without immediately softening the disagreement into something easier to absorb. Real intimacy requires two people with actual views - not one person accommodating the other."
    ],
    career: [
      "EN2 is at their best in roles where collaboration, communication, and relationship-building are core to the work rather than incidental to it. Counselling, mediation, HR, teaching, diplomacy, any form of partnership-based work, project coordination - these give EN2 the context where their specific intelligence actually matters.",
      "They also tend to be excellent in supporting roles at senior levels - the chief of staff who makes the CEO more effective, the creative director who turns a solo visionary's ideas into something a team can execute. The title is often less important than the level of contribution, and EN2's contribution is often large even when their profile is quiet.",
      "The career risk for EN2 is staying in a position that asks them to constantly suppress their own views and function as pure support without any voice in direction. That environment will eventually drain them completely. EN2 needs to feel that their perspective is part of the mix, not just their execution."
    ],
    faq: [
      {
        q: "What does expression number 2 mean in numerology?",
        a: ["Expression number 2 describes a destiny oriented toward partnership, diplomacy, and cooperation. The direction your life is asking you to move is toward others - toward collaboration, mediation, and the work of building relationships that hold.", "It's one of the most sensitive energies in the numerology chart, which is both the source of EN2's greatest gifts and the root of its most common difficulties."]
      },
      {
        q: "Is expression number 2 weak?",
        a: ["No - though the qualities associated with EN2 tend to be undervalued in cultures that prize loud, individual achievement. The ability to build genuine alliances, to read emotional dynamics, to bring people into agreement without anyone feeling steamrolled: these are difficult skills and not many people have them.", "EN2's power is relational and quiet rather than individual and visible. That doesn't make it less real."]
      },
      {
        q: "What is the best career for expression number 2?",
        a: ["EN2 does best in roles where relationships and communication are the actual work - counselling, mediation, HR, teaching, diplomacy, high-level support and coordination roles. They're also excellent in collaborative creative environments where the goal is a shared outcome rather than individual performance.", "The common thread is that EN2 needs to feel their emotional intelligence and collaborative skills are the point, not just a nice-to-have alongside harder skills."]
      },
      {
        q: "Who is expression number 2 compatible with?",
        a: ["EN2 tends to complement EN1 and EN8 well - their cooperative intelligence balances the more self-directed energy of those numbers. They resonate deeply with EN6 and EN9, who share their people-first orientation.", "In numerology, compatibility is more about how energies balance and challenge each other than about finding a 'match' - the most important thing is whether the pairing produces growth on both sides."]
      },
      {
        q: "What is the shadow side of expression number 2?",
        a: ["The shadow shows up as self-erasure - giving so consistently and adapting so readily to others' preferences that EN2's own identity becomes blurry. At its most extreme this produces a person who doesn't know what they actually want because they've been calibrating to what everyone else wants for so long.", "The other shadow pattern is indirect communication - saying things softly enough that the message doesn't land, avoiding the direct conversation, hoping things will resolve without the discomfort."]
      },
      {
        q: "How do I calculate expression number 2?",
        a: ["Use the Pythagorean chart to assign each letter of your full birth name a number: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all the letter values together and reduce to a single digit (or keep 11, 22, 33 as master numbers).", "Use the name exactly as it appears on your birth certificate, including middle names."]
      }
    ],
    related: [
      { n: "1", label: "Expression 1", note: "The Trailblazer - EN2's complement, built for individual initiative." },
      { n: "6", label: "Expression 6", note: "The Caregiver - shares EN2's people-first orientation." },
      { n: "life-path-number-2", label: "Life Path 2", note: "The life path equivalent - same energy, different source." }
    ]
  },
  {
    n: 3,
    title: "The Creative",
    shortDesc: "Expressive, imaginative, born to communicate. Expression 3 is here to put ideas into the world in ways that resonate.",
    heroSubtitle: "Your destiny is to express - through words, art, conversation, or whatever form fits your particular gifts.",
    meaning: [
      "Expression number 3 means your destiny runs through communication and creativity. Not necessarily art with a capital A - though that's common with this number. More broadly, EN3 is here to express: to take what they see, think, feel, and experience and turn it into something others can receive. Writing, speaking, teaching, performing, designing, coaching - the form varies. The impulse is the same.",
      "The expression number describes the direction your name is pulling you, the qualities you're here to develop over a lifetime. For EN3, those qualities are creativity, self-expression, social connection, and the ability to uplift others through genuine engagement. People often feel better after spending time with an EN3, and that's not an accident.",
      "The shadow here is scattered energy - too many ideas, too many projects, too little follow-through. EN3 generates easily. The harder work, the more important work, is developing the discipline to take an idea all the way rather than trading it in for the next one when the first one gets difficult."
    ],
    personality: [
      "EN3 people tend to be warm, quick, and socially easy. They tell good stories. They find the interesting angle in ordinary situations. They're comfortable in groups in a way that EN4 or EN7 typically aren't - conversation energises them rather than depleting them.",
      "The interior life of an EN3 is busier than it usually looks from the outside. Ideas arrive fast and often. The challenge is prioritisation - which ideas are worth pursuing, which projects are worth the sustained effort they'd require, which conversations are worth having versus which are just filling air. EN3 can spend years in a low-grade fog of potential that never quite manifests because they keep starting and not finishing.",
      "When EN3 has found their lane - the creative form or professional context where they can actually do the work they were built to do - the change is obvious. The scattered quality settles. The output becomes consistent. The potential becomes actual."
    ],
    strengths: [
      { title: "Natural communicator", desc: "EN3 can take a complicated idea and make it feel simple without losing what's interesting about it. This is a specific skill that most people don't have. Whether it's writing, speaking, explaining, or just the way they frame things in conversation, EN3 tends to make things clearer for the people around them." },
      { title: "Creative abundance", desc: "Ideas come easily. Where some numbers have to work hard to generate options, EN3 has more than they can use. The right environment and the right structure turns this abundance into consistent creative output. Without those conditions, it just becomes noise." },
      { title: "Social ease and genuine warmth", desc: "EN3 tends to make people feel comfortable quickly. They're curious about others, they listen with real interest, and they tend to find something genuinely engaging in whoever they're talking to. This quality builds trust fast and sustains relationships over time." },
      { title: "Emotional expressiveness", desc: "EN3 doesn't leave people guessing about what they feel. This directness - when it's managed well - is a real gift in relationships and in any kind of creative work where emotional authenticity matters." }
    ],
    challenges: [
      { title: "Finishing what they start", desc: "EN3 is better at beginning than completing. The initial creative burst is exciting; the sustained effort required to take something to completion is less so. The gap between EN3's output potential and their actual output often comes down to follow-through." },
      { title: "Depth vs. breadth", desc: "EN3's wide-ranging curiosity is a strength that can become a liability if it prevents them from developing real expertise in anything. Being interesting in many areas and genuinely excellent in one are different achievements, and EN3 often mistakes the first for the second." },
      { title: "The distraction of the social", desc: "EN3's social ease can pull them toward interaction when the work is what actually needs their attention. The conversation is more immediately rewarding than the project, and EN3 has to actively manage this preference if they want the project to actually get done." },
      { title: "Mood as master", desc: "EN3's creative output is heavily tied to their emotional state. When they're up, work flows. When they're down, the motivation disappears. Building structures and habits that produce output regardless of mood is one of EN3's most important professional developmental tasks." }
    ],
    love: [
      "EN3 in a relationship is playful, affectionate, and genuinely interested in their partner's world. They're fun to be with - curious, expressive, warm. The early stages of a relationship with EN3 are usually good because they engage fully and communicate openly.",
      "The longer-term challenge is the attention span. EN3 needs stimulation, novelty, and growth within a relationship to stay engaged. A partnership that becomes routine too quickly - where the same conversations happen, the same activities repeat, the same emotional territory keeps getting covered - gradually loses EN3's full presence even if they stay physically.",
      "The partner who works best with EN3 is someone who matches their intellectual energy, brings their own ideas and projects into the relationship, and doesn't need constant reassurance that EN3 is still interested. EN3's love is real but it expresses itself best in a relationship that stays alive rather than settling."
    ],
    career: [
      "EN3 is at their best when the job is communication - writing, speaking, teaching, coaching, designing, performing. Any role where their ability to make things engaging and accessible is the core requirement rather than a peripheral one.",
      "They also tend to do well in any role involving a lot of people contact - sales, client-facing positions, presenting, training. The social ease translates directly into professional effectiveness in those environments.",
      "The career mistake EN3 makes most often is taking a role that's good on paper but doesn't give them a creative outlet or enough human engagement. They can survive in quiet, routine-heavy roles for a while, but the cost in energy and fulfilment eventually becomes too high to ignore."
    ],
    faq: [
      {
        q: "What does expression number 3 mean in numerology?",
        a: ["Expression number 3 describes a destiny built around creative expression and communication. The numerology interpretation is that EN3 people are here to express themselves authentically and to uplift others through that expression - through whatever medium or form fits their particular gifts.", "It's a joyful number in the chart - oriented toward connection, creativity, and the pleasure of engaging with the world."]
      },
      {
        q: "Is expression number 3 lucky?",
        a: ["'Lucky' isn't really how numerology frames things. EN3 tends to generate good social and creative opportunities, partly because the warm, engaging energy of the number attracts people and collaboration. Whether that translates into what looks like luck depends on what EN3 does with the opportunities.", "The number's challenge is follow-through - so the 'luck' can slip through the fingers if EN3 keeps starting without finishing."]
      },
      {
        q: "What careers suit expression number 3?",
        a: ["Writing, teaching, speaking, performing, designing, coaching, sales, client relationship management, social media and content creation, journalism, entertainment - any field where communication and creative engagement are the actual work.", "EN3 tends to underperform in roles that are heavily procedural, solitary, or low on human contact. The number needs an outlet."]
      },
      {
        q: "What is the shadow side of expression number 3?",
        a: ["The shadow is scattered energy - the pattern of starting many things and completing few of them, of being interesting in many areas without becoming excellent in any, of spending the energy that should go into the work on social engagement instead.", "There's also a tendency toward superficiality - the charm and expressiveness of EN3 can become a way of keeping things light enough that nothing gets too real."]
      },
      {
        q: "Who is expression number 3 most compatible with?",
        a: ["EN3 tends to work well with numbers that complement their expressive energy with depth or structure - EN7 (depth of thinking), EN4 (structure and follow-through), EN8 (ambition and capability). They resonate naturally with EN1 and EN5, who share a certain forward-moving energy.", "As always, compatibility in numerology is more about how the energies work together than about finding a perfect match."]
      },
      {
        q: "How is expression number 3 calculated?",
        a: ["Assign every letter in your full birth name a number using the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all the values and reduce to a single digit, stopping at 11, 22, or 33 if you hit those.", "Include your full legal birth name - first, middle, and last - as it appears on your birth certificate."]
      }
    ],
    related: [
      { n: "1", label: "Expression 1", note: "The Trailblazer - shares EN3's forward energy and originality." },
      { n: "5", label: "Expression 5", note: "The Explorer - also expressive, but through experience rather than creativity." },
      { n: "life-path-number-3", label: "Life Path 3", note: "The life path equivalent - the same creative energy from a different source." }
    ]
  },
  {
    n: 4,
    title: "The Builder",
    shortDesc: "Practical, systematic, reliable. Expression 4 is here to construct things that last - literally and figuratively.",
    heroSubtitle: "Your destiny is to build something solid - a body of work, a structure, a life with actual foundations under it.",
    meaning: [
      "Expression number 4 means your destiny runs through order, structure, and the slow satisfying work of building things properly. This isn't glamorous energy. It doesn't trend. But the things EN4 builds tend to still be standing when everyone else's quick solutions have fallen apart.",
      "The expression number, calculated from the letters of your full birth name, describes the qualities you're here to develop and the direction your life is pulling you. For EN4, that direction is toward mastery through sustained effort, toward systems that work, toward the deep satisfaction of a job done right rather than done fast.",
      "The shadow of EN4 is rigidity - the structural instinct that becomes an inability to adapt, the reliability that becomes stubbornness, the high standards that become a refusal to accept good-enough when perfect isn't available. The growth edge is learning to distinguish between the things that require precision and the things that just need to get done."
    ],
    personality: [
      "EN4 people have a quality of solidity. They follow through. They do what they said they'd do, when they said they'd do it, at the standard they promised. In a world where that's genuinely rare, it makes them stand out - not loudly, but in a way that builds trust steadily over time.",
      "They tend to be skeptical of shortcuts, impatient with vague plans, and quietly frustrated by people who talk a good game but don't show up for the actual work. EN4's respect has to be earned through demonstrated competence and reliability. Charm and good intentions don't cut much ice with this number.",
      "The thing EN4 often doesn't see in themselves is how much their consistency matters to the people around them. The friend who always shows up, the colleague who can always be counted on, the partner who keeps their word - EN4 often underestimates how rare and valuable this is because it's just how they operate."
    ],
    strengths: [
      { title: "Dependability", desc: "When EN4 commits to something, it gets done. This isn't a small thing. The ability to be genuinely counted on - in relationships, professionally, in the long game - is EN4's most consistent and most valuable quality." },
      { title: "Attention to how things actually work", desc: "EN4 doesn't take systems at face value. They want to understand the underlying mechanics - how the thing works, where it's vulnerable, what would make it better. This makes them excellent at process improvement, troubleshooting, and any role where the details genuinely matter." },
      { title: "Long-term thinking", desc: "Where some numbers are optimising for what feels good now, EN4 is thinking about what will hold up. This longer time horizon produces better decisions in most contexts, and it's why EN4 tends to age better than numbers that spend more time on short-term gains." },
      { title: "High craft standards", desc: "EN4 doesn't like producing work they're not proud of. The standards they set for themselves (and, yes, for others) are genuinely high and genuinely earned. The output of an EN4 who cares about what they're doing tends to be excellent." }
    ],
    challenges: [
      { title: "Resistance to change", desc: "EN4's love of structure can become a resistance to new approaches, new tools, new ways of doing things that might actually be better. The question isn't whether the new thing is different - it's whether it's better. EN4 benefits from asking that question more often before defaulting to the familiar method." },
      { title: "Over-working as identity", desc: "EN4 can conflate their value as a person with their output - working hard enough that 'taking a break' starts to feel like a moral failing. This pattern is unsustainable and produces diminishing returns long before EN4 is willing to acknowledge it." },
      { title: "Difficulty with ambiguity", desc: "Not everything has a clear structure, a right answer, or a defined process. EN4's discomfort with ambiguity can make it hard to operate well in fluid environments, to sit with not knowing, or to take risks where the outcome genuinely can't be predicted." },
      { title: "Getting lost in the details", desc: "EN4's attention to detail is a strength that becomes a liability when the details start receiving more attention than the overall goal. Knowing when good enough is good enough - when the project needs to ship rather than be perfected - is a real skill that EN4 has to consciously develop." }
    ],
    love: [
      "EN4 in a relationship is steady, loyal, and genuinely reliable. They're not the most romantic number in an obvious sense - grand gestures and spontaneous declarations aren't really their language. Their language is showing up, consistently, over a long time. Partners who value stability and demonstrated commitment usually feel very secure with EN4.",
      "The difficulty is the emotional expressiveness gap. EN4 can be quite internally rich and deeply feeling while being relatively unexpressive on the surface. Partners who need more vocal affirmation or more emotional visibility can feel like they're working to get water from a stone - even when the stone has plenty of water inside it.",
      "EN4 in a relationship benefits from a partner who reads actions more than words, who doesn't require constant emotional performance, and who brings enough creativity and spontaneity to keep things from getting too settled. The partner who can appreciate EN4's depth of quiet commitment and also pull them toward occasional adventure is usually a good fit."
    ],
    career: [
      "EN4 is at their best in roles where quality, precision, and sustained effort are what matters. Engineering, architecture, accounting, project management, skilled trades, law, medicine, research - any profession where the work requires both technical competence and personal reliability.",
      "They also tend to be excellent in any role involving building or improving systems - process design, operational improvement, organisational structure. The ability to see how pieces fit together and identify where the structure is weak is a specific competence that EN4 brings without much effort.",
      "The career mistake EN4 makes most often is staying in a role that's become routine long past the point where they're still growing. The reliable, hardworking reputation can create a kind of inertia - everyone values EN4 where they are, so there's no pressure to move. But if the work has stopped challenging them, EN4 eventually becomes bored and brittle."
    ],
    faq: [
      {
        q: "What does expression number 4 mean in numerology?",
        a: ["Expression number 4 describes a destiny oriented toward building, structure, and mastery through sustained effort. It's the number of people who are here to create things that last - through diligence, precision, and a genuine commitment to doing the work properly.", "It's not a flashy energy, but it produces results that most flashier numbers can't match."]
      },
      {
        q: "Is expression number 4 rare?",
        a: ["No more or less rare than any other expression number - though the qualities it describes are genuinely uncommon. Real reliability, real follow-through, real craft - those things are rarer than the number of people who claim them.", "If your expression number is 4, the question is whether you're expressing those qualities consistently or whether they're potential that hasn't fully activated yet."]
      },
      {
        q: "What is the best career for expression number 4?",
        a: ["Any role requiring precision, reliability, and sustained effort: engineering, architecture, accounting, law, project management, skilled trades, systems design, research. EN4 is also excellent in any context involving building or improving how things work.", "Roles that are too vague, too fast-moving, or too dependent on charm and social skill tend to frustrate EN4."]
      },
      {
        q: "What is the shadow of expression number 4?",
        a: ["Rigidity is the main shadow - the structural instinct that becomes a refusal to adapt, the high standards that become perfectionism that blocks completion, the work ethic that becomes workaholism that erodes everything else.", "The growth work for EN4 is learning to distinguish between things that require their full precision and things that just need to get done well enough."]
      },
      {
        q: "How does expression number 4 relate to life path 4?",
        a: ["Both draw from the same core energy - structure, diligence, the long game. The life path number comes from your birth date and describes the terrain of your life; the expression number comes from your name and describes your destiny direction.", "Having both a life path 4 and an expression number 4 tends to produce someone who is deeply, consistently reliable - sometimes to the point where other people stop checking in because they've learned they can just assume EN4/LP4 will handle it."]
      },
      {
        q: "How is expression number 4 calculated?",
        a: ["Assign each letter of your full birth name a number using the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all values together and reduce to a single digit.", "Stop at 11, 22, or 33 if you land on those - they're master numbers. Use your full legal birth name including any middle names."]
      }
    ],
    related: [
      { n: "8", label: "Expression 8", note: "The Achiever - shares EN4's work ethic but oriented toward power and achievement rather than craft." },
      { n: "22", label: "Expression 22", note: "The master number evolved from 4 - the same structural energy at a larger scale." },
      { n: "life-path-number-4", label: "Life Path 4", note: "The life path equivalent - the builder's energy from a different source." }
    ]
  },
  {
    n: 5,
    title: "The Explorer",
    shortDesc: "Adaptable, curious, freedom-seeking. Expression 5 is here to experience, communicate change, and never stop moving.",
    heroSubtitle: "Your destiny is to explore - ideas, places, people, possibilities - and to share what you find along the way.",
    meaning: [
      "Expression number 5 means your destiny is built around change, freedom, and the kind of diverse experience that keeps a person's mind genuinely alive. EN5 isn't here to build one thing over a lifetime. They're here to move through many things - and to bring back something valuable from every place they've been.",
      "The expression number describes the direction your birth name's numerology is pulling you. For EN5, that's outward - toward new experiences, new people, new places, new ideas. This isn't restlessness for its own sake. It's a genuine orientation toward growth through variety, and the world has benefited from EN5's energy every time a person with this number has gone somewhere and brought back what they found.",
      "The shadow is the avoidance of commitment - the pattern of keeping everything optional, of treating every situation as temporary, of never quite landing long enough to build depth. The growth edge for EN5 is learning that depth and freedom aren't opposites. You can go deep into something and still be free."
    ],
    personality: [
      "EN5 people are interesting to talk to. They've been places, they've tried things, and they have opinions formed from actual experience rather than secondhand information. They tend to be genuinely curious about other people - partly because everyone's experience is different and EN5 collects difference.",
      "The energy of EN5 can feel a little electric to people around them - exciting, unpredictable, full of possibilities. The downside is that it can also feel unreliable. EN5 moves on when they're done, and sometimes they're done before the people around them have finished what they were building together.",
      "The internal experience of EN5 is often more complicated than it looks. Underneath the adventurous exterior is frequently a question about whether any of this movement is going anywhere. The people who've resolved that question for themselves - who've found the through-line in all their varied experience - tend to be the most compelling versions of this number."
    ],
    strengths: [
      { title: "Adaptability", desc: "EN5 handles change better than almost any other number. New environments, new rules, new teams, new requirements - EN5 adjusts without much friction. In a world that's moving faster than most people can track, this flexibility is a genuine competitive advantage." },
      { title: "Engaging communication", desc: "EN5 has a way of making things interesting. Their range of experience gives them material; their natural curiosity and expressiveness give them the delivery. They're often the person in the room who makes a conversation feel alive rather than merely informative." },
      { title: "Multi-domain knowledge", desc: "Having moved through many fields, roles, cultures, and experiences, EN5 tends to build connections across domains that more specialized people miss. This cross-domain thinking is valuable in creative work, innovation, and any context where the question is 'what does the solution look like from outside this industry?'" },
      { title: "Appetite for challenge", desc: "EN5 doesn't shy away from difficulty. Hard problems, steep learning curves, unfamiliar territories - these energise them rather than depressing them. The flat, predictable assignment is far harder for EN5 than the difficult one." }
    ],
    challenges: [
      { title: "Commitment avoidance", desc: "EN5's love of freedom can make commitment feel like a trap - professionally, relationally, even geographically. The cost is depth: the depth of expertise that comes from sustained focus, the depth of relationship that comes from staying through difficulty, the depth of satisfaction that comes from finishing something significant." },
      { title: "Impulsiveness", desc: "The impulse to move on when something stops being new or interesting drives decisions that are sometimes premature. The project that needed one more month. The relationship that needed one more conversation. EN5 benefits from building in a delay - a deliberate pause before the departure." },
      { title: "Scattered focus", desc: "EN5 can spread their attention across so many things simultaneously that nothing gets enough of it. The result is a lot of partially-done things and a nagging sense of unrealised potential. Focus is not EN5's natural state, but it's a skill they can build." },
      { title: "Restlessness as noise", desc: "Not all of EN5's impulses toward change are signals worth following. Some of them are just the background hum of a number that hasn't found its groove yet. Learning to distinguish between restlessness that's pointing somewhere useful and restlessness that's just discomfort in disguise is one of EN5's most important tasks." }
    ],
    love: [
      "EN5 in a relationship is exciting, engaged, and genuinely interested - until they aren't. The early stages of relationships are usually very good with EN5 because they bring real curiosity and energy. The longer stages require something different from them - depth, consistency, choosing the same person repeatedly when other options are available.",
      "The partner who works best with EN5 is someone who is genuinely interesting, who keeps growing and changing, who has their own full life and doesn't need EN5 to be their entire world. A partner who requires a lot of reassurance or who sees EN5's independence as threatening will have a hard time.",
      "EN5's growth edge in love is learning that choosing the same person, repeatedly and with full awareness, is its own kind of freedom - not a constraint. The relationships where EN5 has made that choice consciously tend to be the ones they value most."
    ],
    career: [
      "EN5 is at their best professionally in roles that involve variety, movement, and genuine challenge - sales, journalism, travel, consulting, entrepreneurship, roles with a lot of client or stakeholder variety, anything in a fast-moving industry where adaptability is valuable.",
      "They tend to excel in roles that involve persuasion or communication to diverse audiences. EN5's range of experience and their natural ability to connect with people across very different contexts makes them effective in any situation where the goal is to reach people who aren't already convinced.",
      "The career mistake EN5 makes most often is leaving roles and organizations right before they would have broken through to a level of mastery that required the sustained effort they weren't willing to give. The grass is usually greener on the other side - until they get there and discover it requires the same sustained work."
    ],
    faq: [
      {
        q: "What does expression number 5 mean in numerology?",
        a: ["Expression number 5 describes a destiny built around freedom, change, and the accumulation of diverse experience. EN5 is here to explore - to engage with the full range of what the world has to offer and to share what they learn in the process.", "The numerology interpretation is that this number carries a genuine calling toward adventure and communication of what's discovered through that adventure."]
      },
      {
        q: "Is expression number 5 good?",
        a: ["All expression numbers carry gifts and challenges in proportion. EN5's gifts are significant - adaptability, multi-domain intelligence, engaging communication, genuine resilience in the face of change.", "The challenges are equally real - the difficulty with sustained commitment, the risk of scattered focus, the tendency to move before something is finished. Whether it's 'good' for you depends on whether you're working with the energy or fighting it."]
      },
      {
        q: "What is the best relationship for expression number 5?",
        a: ["EN5 needs a partner who is genuinely interesting and keeps growing - someone who brings their own adventures and ideas to the relationship rather than looking to EN5 to be the entertainment. They need room to breathe, not ownership.", "The relationship that tends to last with EN5 is the one where both people are genuinely choosing each other rather than just finding each other convenient."]
      },
      {
        q: "What careers suit expression number 5?",
        a: ["Sales, journalism, travel-related fields, consulting, entrepreneurship, communications, marketing, roles in fast-moving industries - any context where variety, adaptability, and the ability to connect across different audiences are the actual value.", "Heavily routine, procedural roles tend to drain EN5 fast. They need the work to keep changing."]
      },
      {
        q: "What is the shadow of expression number 5?",
        a: ["The shadow is avoidance dressed as freedom - the pattern of leaving before things get hard, before depth develops, before the real payoff arrives. It can look like a life of adventure from the outside while feeling like a life of near-misses from the inside.", "The growth work is learning to stay - not forever, but long enough to actually finish something significant."]
      },
      {
        q: "How is expression number 5 calculated?",
        a: ["Assign each letter in your full birth name a number using the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all values and reduce to a single digit, keeping 11, 22, or 33 as master numbers.", "Use the name exactly as it appears on your birth certificate, with all middle names included."]
      }
    ],
    related: [
      { n: "1", label: "Expression 1", note: "The Trailblazer - shares EN5's forward momentum and originality." },
      { n: "3", label: "Expression 3", note: "The Creative - similarly expressive and people-oriented." },
      { n: "life-path-number-5", label: "Life Path 5", note: "The life path equivalent - the same freedom-seeking energy from a different source." }
    ]
  },
  {
    n: 6,
    title: "The Caregiver",
    shortDesc: "Responsible, nurturing, devoted. Expression 6 is here to serve and protect the people and communities they love.",
    heroSubtitle: "Your destiny is to care - genuinely, consistently, and in ways that build something lasting for the people around you.",
    meaning: [
      "Expression number 6 means your destiny runs through responsibility, care, and the genuine work of looking after others. This isn't weakness or limitation. It's a calling. EN6 people are here to build the kinds of bonds, families, communities, and support structures that hold life together - and they tend to do it well, because it's actually what they're meant to do.",
      "The expression number, derived from the letters of your full birth name, describes the direction your life is asking you to move. For EN6, that direction is toward people - toward the ones who need tending, the relationships that need nurturing, the situations where someone has to step up and take responsibility. EN6 tends to step up.",
      "The shadow of EN6 is the cost of giving without limits - the self-neglect that comes from always prioritising others, the resentment that builds when the care isn't reciprocated, the tendency to control in the name of helping. Genuine care means allowing the people you care for to struggle, make mistakes, and learn. EN6 finds that harder than it sounds."
    ],
    personality: [
      "EN6 people have a warmth to them that's real rather than performed. They remember details about the people in their lives - what you were worried about last month, how your project went, what you've been trying to figure out. This quality of sustained attention is something they offer naturally, not strategically.",
      "Domestically, EN6 tends toward the beautiful and the well-ordered. They care about how their spaces feel. A good meal, a comfortable home, things maintained and taken care of - these aren't superficial concerns for EN6. They're part of how love expresses itself.",
      "The difficulty is that EN6's sense of responsibility can extend so far that they become the person who holds everyone else's problems. This is exhausting, and it can produce a kind of quiet martyrdom - giving and giving and giving while gradually resenting that no one is giving back in quite the same way. The work is learning that their wellbeing is also their responsibility."
    ],
    strengths: [
      { title: "Deep reliability in relationships", desc: "EN6 shows up. For the people they care about, they show up - through difficulty, through inconvenience, through the long stretches where showing up doesn't feel rewarding. This reliability is rare and it's genuinely felt by the people on the receiving end." },
      { title: "Practical compassion", desc: "EN6 doesn't just feel empathy; they act on it. When someone they care about is struggling, EN6 figures out what would actually help and does that thing. The move from caring to doing is quick and natural with this number." },
      { title: "Aesthetic sense and homemaking instinct", desc: "EN6 tends to create environments where people feel comfortable. This is a skill that benefits everyone around them - partners, families, teams, clients. The ability to make a space feel like a place where people can be at ease is genuinely valuable and genuinely rare." },
      { title: "Commitment to justice and balance", desc: "EN6 has a strong internal sense of what's fair. When something is out of balance - when someone is being treated unfairly, when a relationship has become unequal - EN6 notices it and tends to act to restore the balance, even when that requires uncomfortable conversations." }
    ],
    challenges: [
      { title: "Martyrdom and self-neglect", desc: "EN6 can give so consistently and so thoroughly that their own needs become invisible - even to themselves. The pattern of putting everyone else first, always, eventually produces either depletion or resentment, and usually both. Their needs are also legitimate. Tending to them is not a failure of devotion." },
      { title: "Controlling in the name of helping", desc: "EN6's drive to help can tip into interference - managing how people handle their own problems, taking over tasks others could handle themselves, having strong opinions about choices that belong to someone else. The distinction between care and control is something EN6 has to actively maintain." },
      { title: "Difficulty receiving", desc: "EN6 is generally much more comfortable giving than accepting care, help, or service from others. Receiving can feel exposing, even uncomfortable. But the relationship stays unequal until EN6 can let people in - and that inequality eventually strains things." },
      { title: "Taking on others' problems as their own", desc: "EN6's deep empathy can blur the line between supporting someone and absorbing their problems. When this happens, EN6 ends up carrying emotional weight that isn't theirs - and that they often can't actually solve, which produces a specific kind of helpless frustration." }
    ],
    love: [
      "EN6 in a relationship is devoted, attentive, and genuinely oriented toward their partner's wellbeing. They remember what matters, they show up in practical ways, and they tend to create a home environment that feels safe and cared for. Partners often feel more looked after with EN6 than they have in any previous relationship.",
      "The challenge is the reciprocity gap. EN6 gives so readily and so thoroughly that if their partner doesn't actively reciprocate - doesn't notice when EN6 is tired, doesn't ask how EN6 is doing, doesn't offer care without being asked - EN6 will run on empty for a surprisingly long time before addressing it. And when the resentment surfaces, it often surfaces bigger than either person expected.",
      "The relationship that works best for EN6 is one where the care is genuinely mutual - where both people are paying attention, where asking for what you need is normal and okay, where EN6 doesn't have to choose between their own wellbeing and the relationship's wellbeing."
    ],
    career: [
      "EN6 is at their best professionally in roles involving service, healing, teaching, or community building - any context where the work benefits others directly and where the quality of care matters. Healthcare, education, social work, counselling, and nonprofit work all draw EN6's energy naturally.",
      "They also tend to be excellent in roles involving beauty and domestic quality - interior design, hospitality, event management, any profession where creating an environment where people feel well is the actual measure of success.",
      "The career frustration for EN6 tends to come when the institutional demands of a role conflict with the genuine care they want to provide. An EN6 nurse who has to rush through twelve patients in an hour, an EN6 teacher who has to standardise rather than individualise - these tensions are real and they wear on EN6 in specific ways."
    ],
    faq: [
      {
        q: "What does expression number 6 mean in numerology?",
        a: ["Expression number 6 describes a destiny oriented toward care, responsibility, and service to the people and communities around you. The numerology meaning is that EN6 is here to love in the broadest and most practical sense - to build the structures of care that allow others to flourish.", "It's one of the most genuinely giving energies in the chart."]
      },
      {
        q: "Is expression number 6 a good number?",
        a: ["It's a deeply giving number, which is both its greatest strength and the source of its most persistent challenges. EN6 produces some of the most genuinely caring people in the chart - people whose love makes real differences in other people's lives.", "The question is always whether EN6 is also caring for themselves - or running on empty in service of everyone else."]
      },
      {
        q: "What career suits expression number 6?",
        a: ["Healthcare, education, counselling, social work, nonprofit leadership, hospitality, interior design, event management - any career where the quality of care is the primary measure of success.", "EN6 tends to struggle in purely commercial environments where personal relationships are subordinate to transactions."]
      },
      {
        q: "What is the shadow of expression number 6?",
        a: ["Martyrdom and control are the main shadows. The martyr pattern - giving without limit and quietly building resentment - is very common with EN6. The control pattern - managing others' choices in the name of helping - is equally common.", "The growth work is learning that real love includes allowing people to be responsible for their own lives."]
      },
      {
        q: "How does expression 6 relate to life path 6?",
        a: ["They draw from the same core energy - care, responsibility, service. The life path 6 describes the terrain and themes of your life; the expression number 6 describes the destiny direction your name is pulling you toward.", "Having both tends to produce someone whose entire life is oriented toward caring for others - which is a gift when it's healthy and a burden when it tips into self-erasure."]
      },
      {
        q: "How is expression number 6 calculated?",
        a: ["Assign each letter of your full birth name a number using the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all values together and reduce to a single digit, keeping master numbers 11, 22, and 33 as-is.", "Use the full name from your birth certificate, including all middle names."]
      }
    ],
    related: [
      { n: "2", label: "Expression 2", note: "The Diplomat - shares EN6's people-first orientation." },
      { n: "9", label: "Expression 9", note: "The Humanitarian - EN6's care scaled to the universal." },
      { n: "life-path-number-6", label: "Life Path 6", note: "The life path equivalent - same nurturing energy from a different source." }
    ]
  },
  {
    n: 7,
    title: "The Analyst",
    shortDesc: "Perceptive, private, truth-seeking. Expression 7 is here to investigate, understand, and share what they find.",
    heroSubtitle: "Your destiny is to understand - to go past the surface, past the comfortable explanation, and find out what's actually true.",
    meaning: [
      "Expression number 7 means your destiny runs through investigation, analysis, and the pursuit of genuine understanding. EN7 is not satisfied with the obvious answer. They want to know what's actually happening underneath it - what the data really shows, what the pattern means, what the received wisdom is getting wrong.",
      "The expression number describes the direction your name's numerology pulls you. For EN7, that direction is inward and downward - into the depths of whatever subject or domain has captured their attention. This produces extraordinary specialists, researchers, philosophers, and analysts. It also produces people who can feel profoundly alone in their specialness.",
      "The shadow of EN7 is the isolation that comes from spending so much time in their own head. The pursuit of understanding is real, but if it becomes a substitute for human connection, EN7 ends up brilliant and lonely. The growth edge is finding the balance between the solitary work and the relationships that make the work meaningful."
    ],
    personality: [
      "EN7 people are observing almost constantly. They're taking in information, noticing patterns, filing things away for later analysis. In conversation they may say less than they're thinking - which can come across as reserve or aloofness, but is usually just a preference for quality over quantity.",
      "They tend to be skeptical of certainty, including their own. The rigorous mind that makes EN7 a good analyst also makes them reluctant to commit to conclusions that aren't fully supported. This is epistemically admirable. Socially it can feel like withholding.",
      "The internal experience of EN7 is usually richer and more complex than what they share. They have views, they have feelings, they have a rich inner world - but the world generally gets a curated version of it. The people EN7 trusts enough to show their full interior are rare and valued."
    ],
    strengths: [
      { title: "Depth of analytical thinking", desc: "EN7 goes deeper than most people are willing to go. Where others stop at the first plausible explanation, EN7 keeps asking questions. The result is often a level of understanding that makes their work or thinking significantly more accurate and useful than the general standard." },
      { title: "Pattern recognition", desc: "EN7 spots patterns - in data, in behavior, in systems, in events. This ability to see the structure beneath the surface is valuable in almost every domain and it's one of EN7's most consistent gifts." },
      { title: "Intellectual integrity", desc: "EN7 doesn't like getting things wrong, and they don't like pretending to know things they don't. This intellectual honesty is unusual and valuable in fields where the temptation to overstate certainty is strong." },
      { title: "Independence of thought", desc: "EN7 thinks for themselves. They don't adopt received wisdom just because it's received. They don't agree with the room just because disagreement would be uncomfortable. The conclusions they reach are actually theirs, which makes those conclusions more trustworthy than most." }
    ],
    challenges: [
      { title: "Emotional distance", desc: "EN7's analytical orientation can produce a kind of emotional distance - from other people's feelings, from their own emotional needs, from the messy relational reality that resists clean analysis. This distance is protective, but it also limits the depth of connection EN7 is able to experience." },
      { title: "Analysis paralysis", desc: "The drive to understand completely before acting can delay action past the point where it was still useful. Some decisions require imperfect information. EN7 knows this but still finds it hard to move without feeling like they've done due diligence." },
      { title: "Social isolation", desc: "EN7's preference for solitude and depth over breadth means they build fewer relationships - and sometimes too few. The intellectual richness of their inner life can make the company of others feel tiring, but the absence of genuine connection eventually takes a toll." },
      { title: "Arrogance about intelligence", desc: "EN7's genuine intellectual gifts can tip into a kind of arrogance - an impatience with less rigorous thinking, a dismissiveness toward people who haven't done the same analytical work. This closes off conversations and relationships that would have been worth having." }
    ],
    love: [
      "EN7 in a relationship is private, intensely loyal to the people they've chosen, and more sensitive than they usually appear. They don't give their trust easily, but once they do, they give it fully. The partner who has genuinely earned EN7's confidence tends to feel deeply valued in a way that's different from most relationships - because EN7 rarely opens that far.",
      "The difficulty is getting there. EN7's natural reserve means the early stages of a relationship can feel like they're being interrogated rather than courted - EN7 is assessing, figuring out whether this person is worth opening to, gathering data before committing. Potential partners who can't handle the slow build, who need immediate warmth and intimacy, tend to give up before EN7 has had a chance to actually arrive.",
      "The relationship that works best for EN7 is with someone who has genuine intellectual depth, who values space as much as closeness, and who is secure enough not to take EN7's reserve as rejection. Once EN7 has actually decided to be in a relationship, they tend to stay."
    ],
    career: [
      "EN7 is at their best in roles that reward depth over speed, analysis over instinct, and independent thinking over consensus. Research, academia, writing, data science, philosophy, psychology, investigative journalism, strategic consulting, law - any domain where the question is 'what is actually true here?'",
      "They also tend to do well in spiritual and contemplative fields - not because EN7 is necessarily religious, but because the orientation toward deeper meaning and understanding the nature of things maps naturally onto those contexts.",
      "The career frustration for EN7 is almost always the same: being in environments that reward quick confident answers over careful uncertain ones, that value social performance over analytical depth, or that move too fast to actually think. EN7 needs time and space to do their best work."
    ],
    faq: [
      {
        q: "What does expression number 7 mean in numerology?",
        a: ["Expression number 7 describes a destiny oriented toward investigation, understanding, and the pursuit of truth. EN7 is here to go deeper - past the surface explanation, past the conventional wisdom, past comfortable certainty - to find out what's actually going on.", "It's one of the most intellectually rigorous energies in the numerology chart."]
      },
      {
        q: "Why is expression number 7 considered spiritual?",
        a: ["The 7 is traditionally associated with both intellectual and spiritual depth - the two often go together in a particular type of mind. EN7's drive to understand doesn't stop at the material or empirical. It extends to questions about meaning, consciousness, and what lies beneath ordinary experience.", "Many EN7s are drawn to philosophical, spiritual, or scientific inquiry for exactly this reason."]
      },
      {
        q: "What is the shadow side of expression number 7?",
        a: ["Isolation and emotional distance are the main shadows. EN7's love of solitary deep work can become a way of avoiding the vulnerability that genuine relationships require. The intelligence can tip into arrogance. The reserve can tip into coldness.", "The growth work is learning that depth and connection are both available - that you don't have to choose between the inner life and the human world."]
      },
      {
        q: "What careers suit expression number 7?",
        a: ["Research, academia, data science, philosophy, psychology, investigative journalism, law, strategic consulting, writing - any role where depth, analytical rigour, and independent thinking are the actual requirements.", "EN7 tends to struggle in roles that prioritise speed and social performance over genuine understanding."]
      },
      {
        q: "Is expression number 7 lucky?",
        a: ["Seven is traditionally considered a lucky number in many cultures, but EN7 people would be the first to tell you that the evidence for that is thin. What EN7 does tend to experience is a specific kind of fortunate precision - right place, right time, right information - that comes from paying very close attention.", "Whether that's luck or the product of careful observation is probably a question EN7 has a view on."]
      },
      {
        q: "How is expression number 7 calculated?",
        a: ["Use the Pythagorean chart to assign a number to each letter in your full birth name: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all values and reduce to a single digit (or stop at 11, 22, 33).", "Include your full legal birth name exactly as it appears on your birth certificate."]
      }
    ],
    related: [
      { n: "4", label: "Expression 4", note: "The Builder - shares EN7's love of depth and precision, expressed through structure." },
      { n: "9", label: "Expression 9", note: "The Humanitarian - another number of deep understanding, but oriented outward." },
      { n: "life-path-number-7", label: "Life Path 7", note: "The life path equivalent - the seeker's energy from a different source." }
    ]
  },
  {
    n: 8,
    title: "The Achiever",
    shortDesc: "Ambitious, authoritative, built for power. Expression 8 is here to build organisations and generate real-world impact.",
    heroSubtitle: "Your destiny is to achieve at scale - to build, lead, and produce results that matter in the material world.",
    meaning: [
      "Expression number 8 means your destiny runs through achievement, authority, and the exercise of genuine power in the world. This is not the power of force or dominance - it's the power of organised capability, of systems that work, of building structures large enough to create the change you want to see.",
      "The expression number describes the destiny direction implied by your birth name. For EN8, that direction is toward consequence - toward outcomes large enough to matter, toward organisations capable of producing them, toward the kind of material mastery that gives you the leverage to actually change things.",
      "The shadow is the conflation of value with achievement - the pattern of measuring self-worth by output, wealth, or status, which produces a person who is successful by most external measures and hollow by their own. EN8's growth edge is learning that who they are is not equivalent to what they've built."
    ],
    personality: [
      "EN8 people carry an air of authority that they often haven't consciously cultivated - it's just present. They seem capable. They speak with confidence. They project a quality of knowing what they're doing and being willing to be accountable for the outcome. In most environments, people respond to this by handing EN8 more responsibility.",
      "They tend to think in terms of outcomes, leverage, and scale. Not 'what's the kind thing to do?' but 'what produces the result we need?' This efficiency is valuable. It can also produce a kind of instrumental thinking that misses the human dimension - where people become resources rather than people.",
      "The internal experience of EN8 can be more driven by anxiety than the exterior suggests. Behind the confidence is often a deeply motivated person whose fear of failure is one of the things that makes them so relentlessly competent. Understanding that is useful - both for EN8 and for the people around them."
    ],
    strengths: [
      { title: "Executive capability", desc: "EN8 can organise people, resources, and time toward an outcome with an efficiency that most people can't match. They see the structure of a problem clearly and they know how to sequence the work. This is the number that actually gets large things done." },
      { title: "Financial intelligence", desc: "EN8 tends to understand money in a practical, unsentimental way - how it flows, how to accumulate it, how to deploy it effectively. This isn't just about personal wealth; it's about the ability to resource a goal and make the numbers work." },
      { title: "Strategic thinking", desc: "EN8 thinks three moves ahead. They're assessing situations for their strategic implications, identifying leverage points, considering what the different players will do in response. This is genuinely valuable in any context involving competition, negotiation, or long-term planning." },
      { title: "Determination", desc: "When EN8 has decided to achieve something, they don't stop trying. The persistence in the face of difficulty is real - not stubbornness, but a genuine unwillingness to be defeated by the problem. They find another way." }
    ],
    challenges: [
      { title: "Treating people as resources", desc: "EN8's outcome-focus can produce a kind of instrumental view of people - useful for the goal or not, contributing at the required level or not, worth investing in or not. This produces efficient organisations and damaged relationships in equal measure." },
      { title: "Work as the only identity", desc: "EN8 can pour so much of themselves into their professional achievements that when those achievements are absent - through a setback, a failure, a career transition - they don't know who they are. The work becomes the self, which is a fragile foundation." },
      { title: "Difficulty with authority above them", desc: "EN8 tends to lead naturally, which means working under people who are less competent than they are is genuinely difficult. The frustration this produces can damage relationships with managers and organisations that might otherwise have been worth the investment." },
      { title: "Materialism as a measure of worth", desc: "The culture EN8 operates in often reinforces the idea that wealth and status are the right measures of a person's value. EN8 is susceptible to this framing in a way that can produce a very externally successful and internally impoverished life." }
    ],
    love: [
      "EN8 in a relationship tends to show up in practical, provider-oriented ways - not because they're emotionally unavailable but because their default language of care runs through action and resource rather than words and time. The dinner out, the problem solved, the trip booked - this is EN8 saying they care.",
      "The difficulty is that partners often need the time and attention as much as the practical expression, and EN8 frequently underestimates how much of their actual presence is missing from the relationship. The phone that's always half on work. The weekend that's half at the desk. Partners of EN8 often describe feeling like second priority, even when EN8 is completely sincere in their love.",
      "The relationship that works best for EN8 is with someone who has their own sense of purpose and ambition - who doesn't need EN8 to be their primary focus, but who also knows how to call EN8 out when the relationship is getting what's left over rather than what it deserves."
    ],
    career: [
      "EN8 is at their best in roles where they have genuine authority and the scope to build something at scale. Executive leadership, entrepreneurship, finance, investment, large-scale project management, law, real estate - any context where capability, determination, and financial intelligence produce real-world outcomes.",
      "They tend to reach leadership positions in most organisations they join, whether they sought those positions or not. The challenge is often that the organisations they join are too small for what EN8 is capable of, which produces a specific frustration of competence constrained by limited scope.",
      "The career advice for EN8 is usually the same: aim bigger than feels comfortable. The roles and organisations that look like a stretch from where EN8 is standing are often exactly the right size for where EN8's abilities can actually take them."
    ],
    faq: [
      {
        q: "What does expression number 8 mean in numerology?",
        a: ["Expression number 8 describes a destiny built around achievement, authority, and the exercise of power in the material world. EN8 is here to build - organisations, wealth, structures large enough to produce real-world change.", "It's one of the most ambitious energies in the numerology chart, carrying both significant potential and significant demand."]
      },
      {
        q: "Is expression number 8 lucky with money?",
        a: ["EN8 has a genuine facility with money and material resources - it's one of the number's consistent traits. But 'lucky' undersells what's actually happening. EN8 tends to understand how money works, to make decisions that produce financial results, and to persist through the setbacks that discourage less determined people.", "The relationship with money is a real skill, not a luck."]
      },
      {
        q: "What is the shadow of expression number 8?",
        a: ["The main shadow is conflating self-worth with achievement and material success. EN8 can build an extremely successful external life while running low internally - the work becomes the self, and when the work hits a wall, there's nothing behind it.", "The other shadow is the instrumental treatment of people - efficient but damaging."]
      },
      {
        q: "What careers suit expression number 8?",
        a: ["Executive leadership, entrepreneurship, finance, investment banking, real estate, law, large-scale project management - any role where genuine authority, financial intelligence, and strategic thinking produce material outcomes.", "EN8 tends to underperform in roles without genuine consequence and scope."]
      },
      {
        q: "Who is expression number 8 compatible with?",
        a: ["EN8 tends to work well with numbers who complement their ambition with qualities they lack - EN2 or EN6 for emotional depth and relationship, EN7 for intellectual rigor, EN4 for structural precision.", "In relationships, EN8 needs a partner who has their own sense of purpose and isn't waiting for EN8 to be their entire world."]
      },
      {
        q: "How is expression number 8 calculated?",
        a: ["Use the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Assign each letter in your full birth name a number, add them all, and reduce to a single digit.", "Stop at 11, 22, or 33 - those are master numbers. Use your full legal birth name as it appears on your birth certificate."]
      }
    ],
    related: [
      { n: "4", label: "Expression 4", note: "The Builder - shares EN8's work ethic, focused on craft rather than scale." },
      { n: "1", label: "Expression 1", note: "The Trailblazer - similar drive, operating more through originality than authority." },
      { n: "life-path-number-8", label: "Life Path 8", note: "The life path equivalent - the same achieving energy from a different source." }
    ]
  },
  {
    n: 9,
    title: "The Humanitarian",
    shortDesc: "Compassionate, idealistic, here to serve. Expression 9 is here to give back on the largest scale they can manage.",
    heroSubtitle: "Your destiny is to serve something larger than yourself - humanity, community, or a cause you believe in completely.",
    meaning: [
      "Expression number 9 means your destiny runs through service, compassion, and the desire to contribute to something larger than the personal. EN9 is the last of the single-digit expression numbers, and it carries a quality that the earlier numbers have been building toward - the desire not just to do well for yourself, but to do good for others.",
      "The expression number describes the destiny direction implied by your full birth name. For EN9, that direction is toward the world - toward the universal rather than the personal, toward the collective rather than the individual. This doesn't mean EN9 can't have a personal life or personal ambitions. It means their deepest satisfaction tends to come from work that has a broader impact.",
      "The shadow of EN9 is the bitterness that comes from giving generously to a world that receives without reciprocating - the disillusionment of the idealist who discovers that the world is harder and less grateful than the dream suggested. The growth edge is learning to give without needing it to be acknowledged, to serve without needing it to be recognised."
    ],
    personality: [
      "EN9 people tend to have a breadth to them. They're interested in the world in a comprehensive, unspecialised way - history, people, ideas, social patterns, the big questions. They often know something about everything and can talk to almost anyone about almost anything without being condescending.",
      "There's usually a strong moral dimension to EN9's personality - a clear sense of right and wrong, a sensitivity to injustice, and a drive to act when they see something that needs correcting. This is one of their most valuable qualities. It can also produce a self-righteousness that EN9 benefits from watching.",
      "The thing EN9 often struggles with is the personal. The people closest to them can feel like they're competing with EN9's broader commitments - the cause, the community, the work. EN9 loves big, which is beautiful. But the specific people in their immediate life sometimes need to feel like the big love applies to them too."
    ],
    strengths: [
      { title: "Universal compassion", desc: "EN9's compassion extends naturally to people outside their immediate circle - to strangers, to people in need, to communities different from their own. This isn't a performance; it's a genuine orientation toward human welfare that produces real acts of service." },
      { title: "Breadth of perspective", desc: "EN9 tends to hold a large view of things - across time, cultures, and disciplines. This breadth gives them a perspective that more specialised people lack and makes them genuinely useful in any context that requires understanding how things fit together." },
      { title: "Natural wisdom", desc: "EN9 carries something that's hard to fake - a quality of having thought seriously about how life works and what matters. This wisdom isn't always formally trained. It often comes from lived experience and genuine reflection on what that experience means." },
      { title: "Generosity", desc: "EN9 gives - time, attention, resources, energy. The generosity is real and it tends to be noticed. The people who've received EN9's generosity don't usually forget it." }
    ],
    challenges: [
      { title: "Difficulty with endings and release", desc: "The 9 is the number of completion, and EN9 often finds completion difficult - letting go of relationships, projects, phases, grievances. The holding on past the point of usefulness is one of this number's most consistent patterns." },
      { title: "Idealism that doesn't survive contact with reality", desc: "EN9's vision of how things could be is often beautiful. The world as it actually is tends to disappoint it. The disillusionment that results, if it's not processed carefully, can produce a cynicism that's the exact opposite of EN9's best self." },
      { title: "Martyrdom and resentment", desc: "EN9 can give too much, too consistently, without adequate reciprocity - and build resentment that they don't fully acknowledge until it surfaces sideways. The growth work is asking for what they need before the need becomes urgent." },
      { title: "Neglecting the personal", desc: "EN9's orientation toward the universal can leave the personal under-tended. The relationships closest to them - family, intimate partners, close friends - can feel like they're secondary to the bigger mission. They're not secondary. They just don't announce themselves the way the mission does." }
    ],
    love: [
      "EN9 in love is generous, broad-minded, and genuinely interested in their partner's full person - not just who they are in relation to EN9, but who they are in the world. This quality of spacious, non-possessive love is unusual and genuinely valuable.",
      "The difficulty is the same as in the wider personality - EN9's love can feel more universal than personal. Partners sometimes describe feeling like EN9 loves 'humanity' more than they love them specifically. That's not entirely unfair. EN9 benefits from making the love personal - from choosing, naming, demonstrating that this specific person is valued as an individual, not just as a representative of humanity.",
      "The relationship that works best for EN9 is with someone who shares their values and has their own sense of larger purpose - who understands why the mission matters and doesn't see it as competition for EN9's attention. A partner who also gives back to the world tends to make a better companion for EN9 than one who is primarily self-focused."
    ],
    career: [
      "EN9 is at their best in roles with a clear social or humanitarian purpose - nonprofit leadership, education, healthcare, advocacy, social enterprise, international development, any field where the goal is making things better for people rather than just generating profit.",
      "They also tend to be effective in any role involving teaching or guiding others - coaching, mentoring, counselling, facilitation. The combination of breadth and genuine compassion makes them good at helping people find their own path.",
      "The career frustration for EN9 tends to come in purely commercial environments where the mission is profit maximisation and nothing more. EN9 can work in those environments, but the disconnection from broader purpose eventually becomes draining. Finding a way to connect their work to something that matters beyond the bottom line is not optional for EN9 - it's a prerequisite for sustained engagement."
    ],
    faq: [
      {
        q: "What does expression number 9 mean in numerology?",
        a: ["Expression number 9 describes a destiny oriented toward service, compassion, and contribution to something larger than the personal. EN9 is here to give back - to humanity, to community, to the world in whatever form makes sense for their specific gifts.", "It's the most universally compassionate energy in the single-digit expression numbers."]
      },
      {
        q: "Is expression number 9 rare?",
        a: ["No more rare than other expression numbers - though the depth and breadth of character it describes are genuinely uncommon. People who carry EN9's qualities at full expression - the universal compassion, the wisdom, the genuine generosity without hidden ledger - are relatively few.", "Having EN9 as your expression number describes the direction your destiny is pulling you, not a guaranteed arrival point."]
      },
      {
        q: "What career suits expression number 9?",
        a: ["Nonprofit leadership, education, healthcare, advocacy, social enterprise, counselling, coaching, international development - any field where the measure of success is the positive impact on people's lives.", "EN9 tends to underperform long-term in purely profit-driven environments. The disconnection from purpose eventually drains them."]
      },
      {
        q: "What is the shadow side of expression number 9?",
        a: ["Martyrdom and disillusionment are the main shadows. EN9 can give generously for a long time without adequate reciprocity and build resentment that surfaces sideways. The idealism, untempered, produces a specific bitterness when reality doesn't cooperate.", "The growth work is learning to serve without needing recognition, and to release what's run its course."]
      },
      {
        q: "How does expression 9 relate to life path 9?",
        a: ["Both draw from the same humanitarian, service-oriented energy. The life path 9 describes the terrain and recurring themes of your life; the expression number 9 describes the destiny direction your name implies.", "Having both tends to produce someone whose entire chart is oriented toward service - which is profound when it's working and exhausting when the self-care is missing."]
      },
      {
        q: "How is expression number 9 calculated?",
        a: ["Assign each letter of your full birth name a number using the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Add all values and reduce to a single digit.", "Keep 11, 22, and 33 unreduced. Use the full legal birth name as it appears on the birth certificate."]
      }
    ],
    related: [
      { n: "6", label: "Expression 6", note: "The Caregiver - shares EN9's service orientation on a personal scale." },
      { n: "33", label: "Expression 33", note: "The master number evolved from 9's compassion - service at the highest level." },
      { n: "life-path-number-9", label: "Life Path 9", note: "The life path equivalent - the same humanitarian energy from a different source." }
    ]
  },
  {
    n: 11,
    title: "The Visionary",
    shortDesc: "Inspired, intuitive, highly sensitive. Expression 11 is a master number built to illuminate and inspire others through vision.",
    heroSubtitle: "Your destiny is to illuminate - to see what others haven't seen yet and find ways to bring it within reach.",
    meaning: [
      "Expression number 11 is a master number. It's not reduced to a 2, because the 11 carries something the 2 doesn't - a visionary quality, an intensified sensitivity, and a calling to operate on a larger stage than most lives allow for. If you have expression number 11, your destiny is asking something significant of you.",
      "Master number 11 in the expression position means your birth name's numerology is pulling you toward a life of inspiration and illumination. You're not here to follow an existing path quietly. You're here to see possibilities that others haven't noticed yet and to find ways of communicating them that actually move people.",
      "The shadow of EN11 is the anxiety that comes with carrying this level of sensitivity - the gap between the vision and the ability to act on it, the self-doubt that can collapse master number potential into its base energy. The growth work for EN11 is always about courage: the courage to trust what they see and act on it, even when no one else has seen it yet."
    ],
    personality: [
      "EN11 people have a quality that's hard to name but easy to feel. Something about their presence suggests depth - an awareness that seems to go a layer further than the conversation would strictly require. They pick things up quickly. They sense things about people and situations before the information has fully surfaced.",
      "The internal experience of EN11 is usually intense - a lot happening, a lot felt, a lot perceived that doesn't always find its way into words or action. The challenge is the gap between the richness of the interior and what actually gets expressed. EN11's output rarely matches the full depth of what they're working with inside.",
      "They tend to oscillate between periods of real creative and intellectual productivity and periods of collapse - where the anxiety takes over, the sensitivity becomes overwhelm, and nothing gets done. Finding structures that sustain the productive state and manage the collapse state is one of EN11's most important practical tasks."
    ],
    strengths: [
      { title: "Heightened intuition", desc: "EN11 perceives things through channels that most people don't have access to. This isn't mystical - it's a combination of extraordinary sensitivity to subtle cues and a mind that processes those cues quickly. The result is a kind of knowing that precedes explanation." },
      { title: "Capacity to inspire", desc: "EN11 at their best doesn't just have ideas - they transmit them in ways that change how people think. The combination of vision, emotional intelligence, and genuine communication ability makes them one of the most inspiring voices available, when they're operating from their full power." },
      { title: "Emotional intelligence", desc: "EN11 understands people. Not just what they're saying but what they're experiencing, what they need, what they're afraid of. This understanding, deployed with care, is one of the most valuable things EN11 has to offer." },
      { title: "Vision", desc: "EN11 sees possibilities that don't exist yet. This is the master number's most distinctive gift - the ability to hold a clear picture of something that hasn't happened and communicate it convincingly enough that others start to believe it too." }
    ],
    challenges: [
      { title: "Anxiety and nervous exhaustion", desc: "The sensitivity that gives EN11 their gifts also makes them vulnerable to absorbing too much - from the environment, from other people, from the weight of the vision that hasn't yet found its expression. Chronic anxiety and periods of genuine depletion are common for EN11 who haven't built adequate structure around their sensitivity." },
      { title: "The gap between vision and action", desc: "EN11 can see what's possible with unusual clarity. Acting on that vision is consistently harder. Analysis paralysis, the fear of not living up to the potential, the difficulty of translating internal richness into external output - these patterns keep EN11 suspended in potential for longer than is useful." },
      { title: "Collapsing into the 2", desc: "When the pressure of the 11 becomes too much, EN11 defaults to its base number - the 2 - and becomes cooperative rather than visionary, accommodating rather than leading, harmony-seeking rather than truth-telling. This is the shadow collapse that EN11 most needs to watch for." },
      { title: "Self-doubt in proportion to the gift", desc: "EN11's self-doubt tends to be calibrated to the size of what they're capable of - which means it can be quite large. The bigger the potential, the more room there is for the internal critic to point out how far short of it they're currently falling." }
    ],
    love: [
      "EN11 in love is intense, attentive, and genuinely perceptive about their partner's inner world in ways that most people never experience. To be truly seen by an EN11 who is fully present is one of the more remarkable relational experiences available.",
      "The challenge is that EN11's intensity can be a lot. The emotional depth, the sensitivity, the amount of perception happening - this can feel overwhelming to partners who aren't used to being known that well, or who prefer a lower-key relational temperature.",
      "EN11 needs a partner who can hold depth, who isn't frightened by intensity, and who brings enough groundedness to stabilise what EN11 can't always stabilise for themselves. The right partner gives EN11 permission to be fully themselves - which is the thing EN11 needs most and often waits a long time for."
    ],
    career: [
      "EN11 is at their best in roles where vision and inspiration are the actual requirement - spiritual leadership, coaching, counselling, teaching, writing, music, any creative field where emotional depth translates into resonance, consulting or advisory work where intuitive intelligence is valued.",
      "They also tend to do well in any role involving large-scale communication - speaking, writing, any platform where their ability to transmit ideas to many people at once can be fully expressed.",
      "The career frustration for EN11 tends to be the mismatch between their depth of perception and the shallowness of environments that reward confidence and speed over insight and precision. EN11 needs to be in environments that value what they're actually capable of."
    ],
    faq: [
      {
        q: "What does expression number 11 mean in numerology?",
        a: ["Expression number 11 is a master number, meaning it's not reduced to a 2. It describes a destiny built around vision, inspiration, and the illumination of possibilities that others haven't yet seen. EN11 carries a heightened sensitivity and a calling to operate on a larger scale than ordinary life tends to support.", "It's one of the most demanding and most gifted expression numbers in the chart."]
      },
      {
        q: "Is expression number 11 rare?",
        a: ["Master expression numbers are less common than single-digit ones, simply because of the arithmetic - fewer name combinations produce exactly 11 after reduction. But the more relevant rarity is of people who are actually living out EN11's full potential rather than defaulting to the more comfortable 2 energy.", "The number is rare enough. What's rarer is the person who's doing the work the number requires."]
      },
      {
        q: "What is the shadow of expression number 11?",
        a: ["The shadow is the gap between the vision and the action - the anxiety that freezes EN11 in potential instead of expression, the self-doubt that's calibrated to the size of the gift, the tendency to collapse into the 2's people-pleasing patterns when the demands of the 11 feel too heavy.", "The growth work is always the same: trust the vision, act on it, keep going."]
      },
      {
        q: "What careers suit expression number 11?",
        a: ["Spiritual leadership, coaching, counselling, teaching, creative writing, music, any field where depth and emotional intelligence are the value, consulting or advisory work where intuitive intelligence is respected.", "EN11 tends to underperform in environments that reward confident speed over careful depth."]
      },
      {
        q: "How does expression 11 differ from life path 11?",
        a: ["The life path 11 describes the terrain and recurring themes of your life - the road you're on. The expression number 11 describes the destiny direction implied by your name - the direction you're moving. Both involve master number energy, but from different sources and with different emphasis.", "Having both is unusual and tends to produce a life very fully defined by the 11's specific demands and gifts."]
      },
      {
        q: "How is expression number 11 calculated?",
        a: ["Use the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Assign each letter in your full birth name a number, add them all together, and reduce - stopping at 11 (don't reduce to 2).", "Master numbers 22 and 33 are also preserved. Use your full legal birth name as it appears on your birth certificate."]
      }
    ],
    related: [
      { n: "2", label: "Expression 2", note: "EN11's base number - the cooperative energy the 11 evolved from." },
      { n: "22", label: "Expression 22", note: "The next master number - EN11's vision meets EN22's structural power." },
      { n: "life-path-number-11", label: "Life Path 11", note: "The life path equivalent - the same intuitive master energy from a different source." }
    ]
  },
  {
    n: 22,
    title: "The Architect",
    shortDesc: "Visionary and precise. Expression 22 is numerology's master builder - here to construct things at a scale most people only dream about.",
    heroSubtitle: "Your destiny is to build something that outlasts you - an institution, a system, a body of work that will still be standing when you're gone.",
    meaning: [
      "Expression number 22 is the most powerful master number in the expression position. It takes the intuitive vision of the 11 and adds the structural capability of the 4 - the ability to actually build the thing, not just see it. If EN11 is the architect who draws the plans, EN22 is the architect who also manages the construction.",
      "Having expression number 22 means your birth name implies a destiny at scale. Not every EN22 builds something literal - but all of them are pulled toward creating structures that serve more than themselves, toward outcomes that exceed what any individual could produce alone, toward the kind of lasting impact that only comes from combining vision with practical mastery.",
      "The shadow is the crushing weight of what you're capable of. EN22 carries a higher-than-average risk of experiencing their own potential as a burden - the gap between what they could build and what they're currently producing is large enough to be genuinely intimidating. The growth work is learning to work with the potential rather than against it - one step at a time, one structure at a time."
    ],
    personality: [
      "EN22 people carry a quality of settled authority that isn't loud. They don't need to announce their capability - it's evident from how they work, how they think, how they approach problems. They tend to see the structure of things - how pieces fit together, where the load-bearing walls are, what's doing the real work and what's decoration.",
      "They're usually more methodical than their scope of ambition would suggest. The large vision doesn't make them cavalier about execution. If anything, the opposite - EN22 tends to be precise about how things are built precisely because they understand how much rides on getting it right.",
      "The internal pressure is real. EN22 lives with a persistent awareness of what they could be doing, and the gap between that and what they're currently doing tends to produce a specific kind of restlessness - not dissatisfaction exactly, but a sense of time not quite being used at the right scale."
    ],
    strengths: [
      { title: "Vision combined with execution", desc: "EN22's most distinctive gift is the ability to hold a large vision and a detailed execution plan simultaneously. Most people can do one or the other. EN22 can do both, which is why they're able to actually build the things they imagine." },
      { title: "Structural intelligence", desc: "EN22 understands how complex systems work - how the parts relate, where the vulnerabilities are, what needs to be in place before the next stage can begin. This understanding makes them extraordinarily valuable in any context involving large-scale creation or transformation." },
      { title: "Leadership through demonstrated competence", desc: "EN22 leads not through charisma or force but through the evident quality of their thinking and the evident reliability of their follow-through. People follow EN22 because EN22 clearly knows what they're doing and is clearly committed to getting it right." },
      { title: "Long-horizon thinking", desc: "EN22 is thinking about what this will look like in twenty years. This longer view produces better decisions at every stage of the work - avoiding short-term choices that undermine long-term stability, building for durability rather than impressiveness." }
    ],
    challenges: [
      { title: "The weight of potential", desc: "EN22 carries a persistent awareness of what they're capable of that can feel more like a burden than a gift. The gap between current performance and full potential is always visible to them, and managing that gap without it becoming either paralysis or compulsive overwork is one of EN22's most important practical tasks." },
      { title: "Perfectionism that delays", desc: "EN22's high standards can tip into perfectionism that prevents completion. The work is never quite right enough to ship, the foundation never quite solid enough to build on, the plan never quite complete enough to start executing. At some point, done matters more than perfect." },
      { title: "Isolation in the mission", desc: "EN22's intense focus on what they're building can crowd out the personal life. The relationships closest to them can receive what's left over after the work is done, which is often not enough. This imbalance tends to produce consequences that arrive late - after years of maintenance mode - and arrive hard." },
      { title: "Difficulty delegating", desc: "EN22's structural intelligence means they often genuinely do know the best way to do something. The problem is assuming that means only they can do it. Delegation - real delegation, not just assignment - requires EN22 to trust that imperfect execution by others produces better outcomes than perfect execution by EN22 alone at the cost of their own bandwidth." }
    ],
    love: [
      "EN22 in a relationship is devoted and practical - love expressed through what they provide, what they build, what they protect. Partners tend to feel very well taken care of by EN22 in material and practical terms. The difficulty is that the emotional and attentive dimension can fall behind the practical one, especially when the work is taking everything.",
      "The partner who works best with EN22 is someone who understands what EN22 is building and why it matters - who can share in the mission rather than competing with it for EN22's attention. Someone who has their own sense of purpose and doesn't need EN22 to be their entire world.",
      "EN22's growth edge in love is learning to show up fully - not just practically, but with presence. The relationship that matters to them deserves more than what's left over after the work is done."
    ],
    career: [
      "EN22 is built for roles that combine vision with scale - executive leadership of large organisations, entrepreneurship at significant scale, architecture and urban planning, large-scale engineering, institutional leadership, any context where the goal is to build something lasting and significant.",
      "They also tend to be excellent at organisational design - creating structures that work, that sustain themselves, that improve over time. This is a specific skill that most organisations badly need and that EN22 provides almost instinctively.",
      "The career frustration for EN22 is almost always scope - a role or organisation that's too small for what they're capable of. EN22 can function at smaller scales, but it produces a specific constrained frustration that compounds over time."
    ],
    faq: [
      {
        q: "What does expression number 22 mean in numerology?",
        a: ["Expression number 22 is the master builder - the most powerful expression number in numerology. It describes a destiny built around creating structures that serve others at scale, combining visionary thinking with the practical capability to actually build what you can see.", "It carries enormous potential and proportionally enormous demand."]
      },
      {
        q: "How rare is expression number 22?",
        a: ["Master expression numbers are less common than single-digit ones, and 22 is one of the rarer master numbers to land in the expression position. The question of whether you have EN22 is a calculation question - it's determined by the letters of your full birth name.", "The work the number asks for is rarer still."]
      },
      {
        q: "What is the shadow of expression number 22?",
        a: ["The weight of potential - the persistent gap between what EN22 is capable of and what they're currently producing - is the central shadow. It can produce perfectionism that delays, overwork that depletes, or isolation within the mission at the cost of the personal life.", "The growth work is learning to build patiently, one structure at a time."]
      },
      {
        q: "What careers suit expression number 22?",
        a: ["Executive leadership at scale, entrepreneurship, architecture, large-scale engineering, organisational design, institutional leadership, any context where the goal is building something lasting and significant.", "Roles that are too small, too procedural, or without genuine scope for large-scale impact tend to frustrate EN22 over time."]
      },
      {
        q: "How does expression 22 relate to life path 22?",
        a: ["Life path 22 describes the terrain and recurring themes of your life; expression number 22 describes the destiny direction your name implies. Both carry master builder energy.", "Having both tends to produce a life fully oriented around large-scale building - which is extraordinary when the energy is well-directed and overwhelming when it isn't."]
      },
      {
        q: "How is expression number 22 calculated?",
        a: ["Use the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Assign each letter in your full birth name a number, add them all, and reduce - stopping at 22 (don't reduce to 4).", "Also stop at 11 and 33. Use your full legal birth name from your birth certificate."]
      }
    ],
    related: [
      { n: "4", label: "Expression 4", note: "EN22's base number - the builder's energy that the 22 evolved from." },
      { n: "11", label: "Expression 11", note: "EN11's vision is what EN22 builds - complementary master number pair." },
      { n: "life-path-number-22", label: "Life Path 22", note: "The life path equivalent - the master builder's energy from a different source." }
    ]
  },
  {
    n: 33,
    title: "The Teacher",
    shortDesc: "Compassionate, wise, here to serve humanity. Expression 33 is the rarest master number - built to teach and heal at the highest level.",
    heroSubtitle: "Your destiny is to love unconditionally and teach by example - to demonstrate what it looks like when compassion meets wisdom.",
    meaning: [
      "Expression number 33 is the rarest master number in numerology. It's the expression of unconditional love in action - not as a feeling but as a way of living, a quality of service, a commitment to the growth and wellbeing of others that operates beyond ordinary limits. If you carry EN33, your birth name is pulling you toward something very specific: a life in service of others' growth.",
      "Master number 33 in the expression position means your destiny is to teach - in the broadest sense. Not necessarily in a classroom. Through how you live, how you love, how you handle difficulty, and how you guide the people who find their way to you. EN33 teaches less through instruction than through demonstration. Their way of being is itself the lesson.",
      "The shadow of EN33 is the cost of carrying this much compassion in a world that doesn't always value it - the depletion of giving without adequate self-care, the martyrdom pattern that builds resentment slowly beneath the surface, the difficulty receiving care in proportion to what they give. The growth work is learning that sustainable service requires a full vessel."
    ],
    personality: [
      "EN33 people have a quality of presence that's hard to describe precisely - a warmth and attentiveness that makes the person they're with feel genuinely seen. It's not a technique. It's what happens when someone with this much genuine compassion actually turns their attention toward you.",
      "They tend to attract people who are struggling, not because EN33 seeks that out but because struggling people can sense the quality of EN33's care and are drawn to it. This can be wonderful and it can be exhausting in roughly equal measure. EN33 benefits from discernment about who to offer their full depth to - not everyone is ready to receive it.",
      "The internal experience of EN33 is often heavier than it looks. They feel things deeply - their own experience and other people's. The suffering in the world lands with real weight. Without practices that support discharge and restoration, EN33 can carry an emotional load that eventually becomes too much to sustain."
    ],
    strengths: [
      { title: "Unconditional compassion", desc: "EN33's capacity for love and compassion extends further than most people's - past the easy cases, past the people who deserve it by common reckoning, to something closer to genuine regard for human wellbeing without conditions. This is rare and it's genuinely felt by the people who receive it." },
      { title: "Teaching through presence", desc: "EN33 doesn't primarily teach through what they say. They teach through how they are - the quality of attention they bring, the care they demonstrate, the way they hold difficulty without collapsing. People change in EN33's presence because of what they experience, not what they're told." },
      { title: "Deep wisdom about human nature", desc: "EN33 has usually seen a lot of what people go through and thought carefully about what it means. The wisdom they carry is lived rather than theoretical, and it tends to land with a precision that theoretical wisdom doesn't achieve." },
      { title: "Healing presence", desc: "People often describe feeling genuinely better - calmer, more themselves, less alone - after time with EN33. This quality of healing presence is not something that can be manufactured. It comes from genuine care and it is EN33's most valuable gift." }
    ],
    challenges: [
      { title: "Depletion from giving without replenishment", desc: "EN33's compassion is a genuine resource that requires maintenance. When they give without adequate replenishment - without rest, without receiving care themselves, without time that belongs only to them - the resource depletes. And unlike some things, compassion doesn't come back automatically. It needs to be consciously tended." },
      { title: "Martyrdom and hidden resentment", desc: "EN33 can build resentment slowly and quietly beneath consistent giving - the unacknowledged sacrifice, the care that's received without gratitude, the giving that never quite comes back around. By the time EN33 names this, it's usually been building for years." },
      { title: "Difficulty setting limits", desc: "EN33's orientation toward others' wellbeing can make it genuinely hard to say no - to requests for their time, their attention, their energy. The inability to set limits eventually produces depletion that compromises their ability to give at all. Limits are not a failure of compassion. They're a precondition for sustaining it." },
      { title: "Taking on others' suffering as their own", desc: "EN33's empathy can blur the line between feeling with someone and feeling as them. When EN33 absorbs others' suffering as their own, they end up carrying weight they can't actually put down - because it isn't theirs to resolve." }
    ],
    love: [
      "EN33 in love gives totally. The quality of care, attention, and genuine interest they bring to a relationship is unusual - partners often describe it as unlike anything they've experienced. To be loved by an EN33 who is fully present is to understand why people talk about unconditional love as something different from ordinary love.",
      "The difficulty is that EN33's depth of giving can become a kind of self-erasure - their needs going unvoiced, their own experience going unnoticed by a partner who has learned that EN33 will always manage. The relationship that works best for EN33 is one where the partner actively tends to EN33's wellbeing - not just receives their care, but asks, notices, gives back.",
      "EN33's growth edge in love is letting themselves be known - showing the full weight of what they carry, the parts that need tending, the moments of depletion. Genuine intimacy requires being seen on both sides."
    ],
    career: [
      "EN33 is at their best in roles where care, wisdom, and healing are the actual work - therapy, counselling, teaching, healthcare, social work, spiritual guidance, community leadership. Any context where the quality of human presence is the measure of success.",
      "They also tend to produce extraordinary creative work - writing, music, performance - in which the quality of their compassion and insight translates into art that touches people in ways they can't always explain.",
      "The career frustration for EN33 tends to come when institutional demands prevent genuine care - the hospital that requires processing patients rather than tending to them, the school that requires standardisation rather than individual attention. EN33 works best in environments that leave room for the full quality of what they have to offer."
    ],
    faq: [
      {
        q: "What does expression number 33 mean in numerology?",
        a: ["Expression number 33 is the master teacher - the rarest and most compassionate expression number in numerology. It describes a destiny oriented toward unconditional service, healing, and teaching others through the quality of how you live.", "It carries enormous gifts and proportional demands. Living up to EN33 is a lifetime's work."]
      },
      {
        q: "How rare is expression number 33?",
        a: ["Very. To arrive at an expression number of 33, the letters of your full birth name need to reduce to exactly 33 without further reduction. The arithmetic makes this uncommon, and the full expression of the number's potential in a person's life makes it rarer still.", "If you have EN33, it's worth taking seriously."]
      },
      {
        q: "What is the shadow of expression number 33?",
        a: ["Depletion and martyrdom are the main shadows - the pattern of giving without adequate self-care until the well runs dry, the resentment that builds slowly beneath consistent selfless service, the difficulty receiving in proportion to what you give.", "The growth work is learning that sustainable service requires a full vessel."]
      },
      {
        q: "What career suits expression number 33?",
        a: ["Therapy, counselling, teaching, healthcare, social work, spiritual guidance, community leadership, creative fields where compassion translates into resonant art - any role where the quality of care and wisdom is the actual measure of success.", "EN33 tends to struggle in environments where institutional demands prevent genuine human connection."]
      },
      {
        q: "How does expression 33 relate to life path 33?",
        a: ["Life path 33 describes the terrain and recurring themes of your life; expression number 33 describes the destiny direction your name implies. Both involve master teacher energy.", "Having both is exceptionally rare and tends to produce a life very fully defined by the demands and gifts of the 33."]
      },
      {
        q: "How is expression number 33 calculated?",
        a: ["Use the Pythagorean chart: A,J,S=1; B,K,T=2; C,L,U=3; D,M,V=4; E,N,W=5; F,O,X=6; G,P,Y=7; H,Q,Z=8; I,R=9. Assign each letter in your full birth name a number, add all values, and reduce - stopping at 11, 22, or 33.", "Use your full legal birth name as it appears on your birth certificate."]
      }
    ],
    related: [
      { n: "6", label: "Expression 6", note: "EN33's base number - the caregiver's energy evolved to master level." },
      { n: "22", label: "Expression 22", note: "The master builder - EN33 and EN22 together represent the full upper tier of the chart." },
      { n: "life-path-number-33", label: "Life Path 33", note: "The life path equivalent - the master teacher's energy from a different source." }
    ]
  }
];

export const expressionNumberMap = new Map(
  expressionNumbers.map(en => [en.n, en])
);

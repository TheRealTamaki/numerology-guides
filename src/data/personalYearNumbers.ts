export interface PersonalYearNumber {
  n: number;
  title: string;
  shortDesc: string;
  meaning: string[];
  themes: string;
  strengths: { title: string; desc: string }[];
  challenges: { title: string; desc: string }[];
  monthlyFocus: string;
  faq: { q: string; a: string[] }[];
}

export const personalYearNumbers: PersonalYearNumber[] = [
  {
    n: 1,
    title: "New Beginnings",
    shortDesc: "A year of fresh starts, new initiatives, and stepping into leadership. Personal Year 1 is about planting seeds and taking bold action.",
    meaning: [
      "Personal Year 1 is the year the universe says 'go.' It's a reset, a fresh cycle, a moment where the old energy has cleared out and new potential is standing in the doorway waiting for you to walk through it.",
      "This year isn't about refinement or consolidation. It's about beginning something that didn't exist before - a new project, a new direction, a new version of yourself. The energy is initiatory, individual, and oriented toward forward movement.",
      "What makes PY1 different from just any year of change is the quality of agency. You're not being pushed by external circumstances into something new. You're called to go first, to decide what comes next, to trust that you have enough information to move forward even without the complete picture."
    ],
    themes: "Initiative, independence, courage, leadership, fresh starts, original thinking, self-reliance, invention, new paths, solo efforts, confidence, being first",
    strengths: [
      { title: "Natural momentum", desc: "PY1 gives you energy to start things. Ideas that felt stuck suddenly move. Projects that seemed distant suddenly become possible. You're not fighting inertia - you're riding with it." },
      { title: "Clarity about direction", desc: "Even in ambiguous situations, PY1 energy helps you pick a path and commit to it. You don't have all the answers, but you know which way to walk. That's enough." },
      { title: "Self-trust", desc: "This year builds confidence in your own judgement. The more you listen to your own sense of what's right and move forward on it, the more you trust yourself. It becomes a positive feedback loop." },
      { title: "Breakthrough potential", desc: "Situations that were stuck for years can suddenly shift in PY1. The breakthrough comes because you're willing to try something different, to go around the obstacle instead of through it, to start over if necessary." }
    ],
    challenges: [
      { title: "Isolation as a side effect", desc: "PY1 energy is solo by nature. You're learning to trust yourself, which often means trusting yourself first and asking for input later - if at all. Relationships can feel distant because you're so focused on your own direction." },
      { title: "Impatience with process", desc: "You want to move and you want to move fast. When things require patience, careful planning, collaboration, or other people's buy-in, the friction can be real. The learning is that not everything moves at PY1 speed." },
      { title: "Over-confidence without data", desc: "You're supposed to be bold in PY1, but bold without any external feedback can turn into stubborn. Check yourself: Are you moving forward with conviction, or are you just refusing to consider other perspectives?" },
      { title: "Burnout from going solo", desc: "PY1 energy says 'do it yourself' but that doesn't mean everything is actually meant to be done alone. By mid-year, you might realize you've taken on too much because you wouldn't ask for help. Asking doesn't weaken the cycle - it sustains it." }
    ],
    monthlyFocus: "January-March focus on planning and initiating new projects. April-June brings momentum and momentum testing. July-September is consolidation of what's working. October-December is planting seeds for the next cycle.",
    faq: [
      {
        q: "What should I do in a Personal Year 1?",
        a: ["Start something. The energy is designed for new beginnings - a new career, business, creative project, relationship, location, or version of yourself. This isn't the year to stay small or wait.", "The 'what' matters less than the fact that it's genuinely new for you. And trust that starting isn't the same as finishing - you're building the foundation this year, not constructing the entire structure."]
      },
      {
        q: "Is Personal Year 1 a good time to change jobs?",
        a: ["Absolutely. Career changes, job transitions, professional fresh starts - all of these align well with PY1 energy. The energy supports taking initiative and moving into leadership or new responsibility.", "The caveat: make sure the move is something you're choosing, not something you're doing because the situation became unbearable. PY1 is about affirmative action, not escape."]
      },
      {
        q: "Can I start a business in a Personal Year 1?",
        a: ["Yes. PY1 is literally the numerology year for launching something new. Many entrepreneurs and business owners time their launches to fall in a Personal Year 1 cycle. The energy supports solo initiative and original thinking.", "That said, the actual business success depends on real planning and execution, not just the year number. Use the PY1 energy to move forward boldly, but ground it in actual market research and planning."]
      },
      {
        q: "What if I don't want to start anything new in my Personal Year 1?",
        a: ["The energy will still be there, and it tends to push things. You might find situations naturally shifting, relationships changing, or external circumstances creating the 'new' whether you chose it or not.", "If you're genuinely settled and don't want to initiate, at minimum you can work on a new internal version of yourself - new beliefs, new confidence, a new way of showing up. The 'new' doesn't have to be external."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, then reduce to a single digit (unless you get 11, 22, or 33, which aren't reduced further).", "Example: Born May 15, in 2026: 5 + 15 + 2026 = 2046 → 2+0+4+6 = 12 → 1+2 = 3. So that's a Personal Year 3 in 2026."]
      },
      {
        q: "Do I need to do something big to work with Personal Year 1 energy?",
        a: ["No. The size of the 'new' doesn't matter - what matters is that it's genuinely new for you and that you're genuinely initiating it. Starting a business, taking a class, learning an instrument, ending a relationship that wasn't working, moving, getting a new job - any of these counts.", "The energy responds to authentic commitment, not external magnitude."]
      }
    ]
  },
  {
    n: 2,
    title: "Patience & Partnership",
    shortDesc: "A year of building relationships, establishing partnerships, and learning to work with others. Personal Year 2 is about laying groundwork and deepening connections.",
    meaning: [
      "If Personal Year 1 was the year you planted the seed, Personal Year 2 is the year you stop kicking the dirt and let it grow. This is a quieter energy - less about pushing and more about tending, less about visibility and more about the behind-the-scenes work that makes things sustainable.",
      "PY2 brings partnership into focus. The relationships you cultivate this year - professional, personal, creative - have a staying power that makes sense. You're learning to work with others instead of solo. You're learning what gets built when you actually collaborate.",
      "The piece people often miss about PY2 is that it's not weak or passive. The energy is strong, but its strength comes from patience, emotional intelligence, and the ability to understand what other people need. That's harder work than individual achievement, not easier."
    ],
    themes: "Partnership, cooperation, patience, sensitivity, diplomacy, support, teamwork, intuition, harmony, relationship-building, careful planning, emotional attunement",
    strengths: [
      { title: "Genuine partnership opens up", desc: "The person or people you need show up. Collaborations that seemed impossible become possible. You find the right team, the right ally, the right person who complements your strengths. That's not luck - it's PY2 energy making room for it." },
      { title: "Emotional intelligence deepens", desc: "You're naturally more attuned this year to what people actually feel versus what they say. You read rooms more easily. You understand what's underneath the conversation. Use this. It's real information." },
      { title: "Solid foundations take shape", desc: "The work you do this year may not be flashy, but it's durable. You're not trying to impress anyone - you're trying to build something that lasts. That orientation produces different work, and better work." },
      { title: "Trust gets earned", desc: "By being consistent, showing up, and actually delivering on what you say you'll do, you build credibility. People know they can count on you. That foundation of trust becomes invaluable in future cycles." }
    ],
    challenges: [
      { title: "Invisibility as a test", desc: "The work you're doing this year may not feel visible or glamorous. You're supporting, facilitating, building the structure that others will stand on. It's real and necessary, but it doesn't get the applause. Learning to be okay with that is the work." },
      { title: "Boundary confusion", desc: "PY2 energy makes you willing to adapt and accommodate - which is useful until you've adapted away your own needs. Boundaries get blurry. Learning to say 'no' without guilt is crucial in this cycle." },
      { title: "Impatience with slowness", desc: "PY2 moves slower than PY1. Things take time. Relationships develop gradually. Plans unfold methodically. If you're someone who wants to move fast, this year can feel claustrophobic." },
      { title: "Over-accommodation of others", desc: "You become so attuned to what others want that you forget what you actually want. By year-end, you realize you've made major choices based on everyone else's preferences. That's a reset moment - you need your voice back." }
    ],
    monthlyFocus: "January-March establishes partnerships and softens the edges of the previous cycle. April-June is about deepening those connections and doing the relational groundwork. July-September is patience testing and boundary work. October-December brings the fruits of collaboration into focus.",
    faq: [
      {
        q: "Is Personal Year 2 a bad time for new projects?",
        a: ["Not bad, but not the energy for solo launches. PY2 is the year to build what started in PY1 with the help of others. Take the project from initiation to foundation, bring people into it, establish partnerships.", "If you're starting something brand new in PY2, make collaboration part of it from the beginning. The energy supports team efforts, not solo ventures."]
      },
      {
        q: "Should I start a business in a Personal Year 2?",
        a: ["If you're starting solo, it's less aligned. But if you're starting a partnership or bringing a team into something that began in PY1, this is actually excellent energy for that.", "PY2 is when founders bring in their first hires, when solo operations become teams, when the groundwork gets really solid."]
      },
      {
        q: "What about relationships in Personal Year 2?",
        a: ["This is the year deep connections deepen. If you're single, you're more likely to meet someone and actually stay in a relationship because you're willing to work with them instead of just evaluating them.", "If you're already partnered, this is the year to invest in the relationship, to do the work, to communicate more carefully. The relationship gets stronger if you tend it."]
      },
      {
        q: "How do I stay motivated in Personal Year 2?",
        a: ["Remember that you're not supposed to be the visible focus this year. The motivation comes from seeing the work come together, from people showing up, from relationships deeping. Those are PY2 wins.", "The energy works if you're genuinely interested in building something with others. If you just want the spotlight, you'll be frustrated this whole year."]
      },
      {
        q: "What if I have a Personal Year 2 and I'm naturally independent?",
        a: ["The year will still push you toward collaboration. Your independence is real, but this cycle is asking you to learn that some things are better done together than alone.", "It's not asking you to give up yourself - it's asking you to learn a different skill set. That's uncomfortable, but that's where the growth is."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, then reduce to a single digit (unless you get 11, 22, or 33).", "Example: Born March 7, in 2026: 3 + 7 + 2026 = 2036 → 2+0+3+6 = 11. So that's a Personal Year 11 (master number) in 2026."]
      }
    ]
  },
  {
    n: 3,
    title: "Creativity & Expression",
    shortDesc: "A year of creative output, joy, and shared expression. Personal Year 3 is about bringing your ideas into the world and enjoying the process.",
    meaning: [
      "Personal Year 3 is the year you get to have some fun. After the initiative of PY1 and the relationship-building of PY2, PY3 brings expansion, visibility, and the pleasure of seeing what you made actually circulate.",
      "This is the energy of creation and communication. You're meant to express something - write, speak, create, share, celebrate. The person or project or idea from PY1 that got foundation-work in PY2 is ready to be shown. This is the year it goes public.",
      "What makes PY3 different is the social element. You're not creating in isolation. You're creating in conversation with others, for others, to be seen. The validation isn't the point, but it's a side effect that comes naturally when you're operating at your best."
    ],
    themes: "Creative expression, communication, joy, playfulness, visibility, celebration, sharing, collaboration, social connection, inspiration, artistic work, enthusiasm",
    strengths: [
      { title: "Creative flow is accessible", desc: "Ideas move more easily. Writing happens. Creating happens. The natural friction you usually feel between wanting to make something and actually making it - that loosens up in PY3. You're more productive and it feels less forced." },
      { title: "Your voice becomes clearer", desc: "You know what you want to say and you say it. Clarity in communication, confidence in expression, willingness to be visible. People hear you in a way that builds momentum." },
      { title: "Social energy opens doors", desc: "Relationships expand. You meet people, make friends, find collaborators. The social ease that comes in PY3 creates opportunities you weren't actively seeking. Connections happen naturally." },
      { title: "Recognition and celebration", desc: "The work you do this year gets seen. Not because you're desperate for attention, but because you're putting good things out into the world and people respond. It's not about ego - it's about your contribution landing." }
    ],
    challenges: [
      { title: "Distraction and scattered focus", desc: "PY3 energy is social and playful, which is great until you've said yes to seventeen projects and deadlines are passing. The challenge is maintaining focus when everything feels interesting and accessible." },
      { title: "Over-commitment", desc: "You say yes because the energy is good and the ideas keep coming. By mid-year you're juggling too much. Learning to prioritize and say no to good-but-not-crucial things keeps the cycle sustainable." },
      { title: "Criticism lands harder", desc: "When you're visible, you get feedback - not all of it kind. Your work is more exposed, which means it's available to critique in a way PY1 and PY2 work isn't. Learning to receive feedback without taking it as personal rejection is part of the work." },
      { title: "Superficial output over depth", desc: "The ease of expression can produce quantity without depth. You're making things, but are they things that matter or things that just fill space? Staying honest about quality even when creating is easy is important." }
    ],
    monthlyFocus: "January-March is inspiration and ideation. April-June is production and bringing work forward. July-September is sharing and getting the work visible. October-December is celebration and harvest of what you've created.",
    faq: [
      {
        q: "Is Personal Year 3 good for launching creative work?",
        a: ["Yes, absolutely. PY3 is the numerology year for bringing work public - writing, art, music, any creative thing. The energy supports both the creative process and getting it seen.", "This is the year to finish that project, submit the work, show up with your art. The energy is with you."]
      },
      {
        q: "What if I'm not a traditionally creative person?",
        a: ["Creative expression comes in many forms. PY3 is about communicating, sharing, bringing ideas forward - that can be in sales pitches, teaching, problem-solving presentations, anything where you're sharing your thinking.", "The point is visibility and expression, not whether you're making fine art."]
      },
      {
        q: "Is Personal Year 3 a good time to start a business?",
        a: ["Better than PY1 if it's creative work and you're ready to make it visible. But PY3 is more about expression and promotion than about the hard fundamentals of business building.", "If you're launching a creative business - coaching, art, writing, design - this is excellent. If you're starting something that requires deep foundational work, PY1 or PY2 were better-aligned."]
      },
      {
        q: "What if I have too many projects in Personal Year 3?",
        a: ["That's normal and also a problem. PY3 energy makes everything seem possible, so you take on too much. Mid-year, audit your commitments. Which ones matter? Which ones are just eating time?", "Finishing three things well is better than sort-of doing ten things. Be ruthless about priority."]
      },
      {
        q: "How do I handle criticism in Personal Year 3?",
        a: ["Remember that you're visible now and visible things get feedback. Some of it will be useful. Some of it will be noise. The work is learning to distinguish between 'this feedback improves the work' and 'this feedback is just someone's preference'.", "Don't let critical feedback stop you from putting work out. But do take genuine input seriously."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year and reduce to a single digit (keep 11, 22, 33 as-is).", "Example: Born December 22, in 2026: 12 + 22 + 2026 = 2060 → 2+0+6+0 = 8. So that's a Personal Year 8 in 2026."]
      }
    ]
  },
  {
    n: 4,
    title: "Building & Discipline",
    shortDesc: "A year of structure, hard work, and laying real foundations. Personal Year 4 is about getting organized and building something solid that will last.",
    meaning: [
      "Personal Year 4 is where the rubber meets the road. The idea from PY1 is initiated. The partnerships from PY2 are solid. The creative work from PY3 is visible. Now comes the unglamorous work: systems, structure, discipline, and the thousands of small tasks that turn potential into reality.",
      "This is the year the energy says 'do the work.' Not the exciting work or the visible work - the foundational work. Get organized. Build the infrastructure. Establish routines. The number 4 is all about structure and earth energy - it's practical, methodical, sometimes tedious, and absolutely necessary.",
      "What makes PY4 valuable is that it's not optional. The things you build in this cycle have lasting weight. By year's end, if you've actually done the work, your life will feel more organized, more grounded, more secure. That's not as exciting as PY1 or PY3, but it matters more."
    ],
    themes: "Hard work, structure, discipline, organization, building foundations, practical thinking, patience, attention to detail, stability, systems, efficiency, responsibility",
    strengths: [
      { title: "Organization comes naturally", desc: "You want structure and you're willing to create it. Things that were chaotic become organized. Processes that were unclear get systematized. You have the energy to do the unglamorous work." },
      { title: "Reliability increases", desc: "You show up. You do what you said you'd do. You meet deadlines. That consistency builds trust and credibility. People start relying on you, which feels good even if it's not flashy." },
      { title: "Long-term foundations solidify", desc: "The work you do in PY4 is meant to last. Unlike PY3 which sparkles and fades, PY4 work builds something that stands. It's not the exciting year, but it's the year things get real." },
      { title: "Mastery through practice", desc: "Repetition doesn't bore you in PY4 - it deepens your skill. You're willing to do the work again and again until you get it right. Mastery comes from that willingness." }
    ],
    challenges: [
      { title: "Boredom and slow pace", desc: "If you need novelty and rapid change, PY4 will feel like punishment. This year moves deliberately. Nothing's rushing. If you're high-energy and quick, the slowness can feel suffocating." },
      { title: "Rigidity and over-control", desc: "You get systems in place and then you can't adapt when circumstances change. PY4 energy can make you overly rigid, unable to pivot, invested in the structure even when the structure isn't serving anymore." },
      { title: "Missing the big picture for details", desc: "So focused on getting things organized and systematic that you lose sight of why you're doing it in the first place. The details matter, but not more than the purpose." },
      { title: "Fatigue from constant effort", desc: "PY4 asks a lot. If you're not careful about rest and recovery, you'll be exhausted by the time you get to PY5. The work is necessary, but so is taking breaks." }
    ],
    monthlyFocus: "January-March is assessment and planning the structure. April-June is implementation and systems-building. July-September is refinement and troubleshooting. October-December is consolidation and evaluating what's working.",
    faq: [
      {
        q: "Is Personal Year 4 a bad time to start a business?",
        a: ["Not bad, but it's the wrong energy for launching something new. PY4 is for building the infrastructure of something that already exists. If you're starting from scratch, PY1 energy served you better.", "That said, if you're in PY4 and you're building the business properly - real planning, real systems, real discipline - that's excellent work for this year."]
      },
      {
        q: "What should I focus on in Personal Year 4?",
        a: ["The unsexy stuff: finances, organization, systems, routine, skill development, relationship repair, health habits, productivity infrastructure. Get your life organized.", "If you do this right, by the end of PY4 your foundation will be solid enough to support whatever comes in PY5."]
      },
      {
        q: "Can I still have fun in Personal Year 4?",
        a: ["Yes, but it's not the primary energy. The point isn't to suffer through the year. It's to understand that this cycle rewards hard work and structure. Fun comes from the satisfaction of work done well, not from parties and socializing.", "You can do both - maintain relationships and social connection. But they're not the focus."]
      },
      {
        q: "Is Personal Year 4 when I should get serious about health?",
        a: ["Yes. This is an excellent year to establish real health routines, get organized about fitness or nutrition, or address health issues you've been putting off. The structure and discipline the year wants to offer work perfectly for this.", "This is the year to actually build the habit, not just think about it."]
      },
      {
        q: "What if I hate planning and structure?",
        a: ["PY4 will push you toward it anyway. You'll likely experience frustration until you accept that this year wants you to get organized. The resistance creates the struggle, not the structure itself.", "At minimum, work with a coach, assistant, or structured system that makes the organization less painful for you. But the work needs to happen."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year and reduce to a single digit (except 11, 22, 33).", "Example: Born August 19, in 2026: 8 + 19 + 2026 = 2053 → 2+0+5+3 = 10 → 1+0 = 1. So that's a Personal Year 1 in 2026."]
      }
    ]
  },
  {
    n: 5,
    title: "Change & Freedom",
    shortDesc: "A year of movement, change, and embracing the unexpected. Personal Year 5 is about adaptation, freedom, and multiple directions happening at once.",
    meaning: [
      "Personal Year 5 is the free year. After the grind of PY4, the universe says 'you're done with that and now you get to move.' This is the energy of change, flux, adventure, and the slightly chaotic feeling of not knowing exactly where you're going - but being okay with that.",
      "PY5 brings movement - sometimes literal (travel, relocation, career shifts) and sometimes internal (changing beliefs, releasing old patterns, stepping into new versions of yourself). The common thread is that the static quality of PY4 is over. You're in motion.",
      "The piece that matters about PY5 is the freedom piece. You're less bound by obligation, less concerned with what people think, more willing to take risks. That freedom is real and it's meant to be used. But it can also become reckless if you're not grounded enough to know the difference between freedom and chaos."
    ],
    themes: "Change, movement, freedom, adventure, adaptability, multiplicity, exploration, release, transformation, travel, unexpected shifts, curiosity, versatility",
    strengths: [
      { title: "Adaptability is your superpower", desc: "Change that would rattle other people - you roll with it. Pivots that seem terrifying become interesting. You're flexible in a way that helps you navigate the unexpected with grace." },
      { title: "Freedom creates possibility", desc: "Constraints that were binding loosen up. You can leave situations that were static. Take opportunities that require movement. Try things that require risk. The freedom energy opens doors." },
      { title: "Excitement and expansion", desc: "Life is more vivid in PY5. Boredom lifts. New connections happen. You're more socially active, more engaged, more curious. That aliveness is real." },
      { title: "Old limitations fall away", desc: "Belief systems that were limiting you become visible and you're ready to release them. Relationships that were stagnant shift. The cleansing happens naturally in PY5 energy." }
    ],
    challenges: [
      { title: "Instability as a side effect", desc: "Freedom can become chaos if there's no grounding. You're moving so much that you lose footing. Multiple directions happen at once and nothing completes. By year-end you're scattered and exhausted." },
      { title: "Recklessness mistaken for freedom", desc: "There's a difference between taking smart risks and taking dumb ones. PY5 can blur that line. You're willing to risk things you shouldn't risk. That's not freedom - that's self-sabotage." },
      { title: "Relationship instability", desc: "You want freedom and movement. Partners, colleagues, and friends want consistency. Relationships get tested in PY5 because your needs and others' needs are suddenly pulling in different directions." },
      { title: "Scattered commitments", desc: "You say yes to everything because it seems interesting and everything seems possible. By September you're committed to seventeen things and you can't actually do them all. The freedom becomes a trap." }
    ],
    monthlyFocus: "January-March brings the first signs of shift and restlessness. April-June is active change and new directions. July-September is adjustment and finding your footing in the new. October-December is integration and deciding what to keep from all the movement.",
    faq: [
      {
        q: "Is Personal Year 5 a good time to make major life changes?",
        a: ["Yes. Career changes, relocations, relationship shifts, lifestyle pivots - PY5 supports all of this. The energy is literally asking you to change what needs to change.", "The caveat: make sure the change is something you're choosing for the right reasons, not just because you're bored or uncomfortable. Smart risk is good. Recklessness is not."]
      },
      {
        q: "Should I start a business in Personal Year 5?",
        a: ["Not as the primary focus. PY5 is better for pivoting within something that exists than for starting fresh. But if you're flexible, willing to change course, and okay with unpredictability, it can work.", "You need stability somewhere in your life to balance the PY5 change. Don't let everything shift at once."]
      },
      {
        q: "What about my relationships in Personal Year 5?",
        a: ["Relationships get tested when you want freedom and they want stability. The relationships that survive PY5 are the ones where both people are willing to grow and adapt.", "If you're single, you meet people easily. But committing to anything formal might feel constraining. That's the energy doing its thing."]
      },
      {
        q: "How do I stay grounded in Personal Year 5?",
        a: ["Have at least one thing that's stable and doesn't change during the year - a person, a practice, a place, a commitment. That grounds you while everything else is shifting.", "And track your commitments ruthlessly. Just because you can do something doesn't mean you should say yes to it."]
      },
      {
        q: "Is it okay to travel in Personal Year 5?",
        a: ["Absolutely. This is the year for it. Travel, exploration, new places - the energy supports it. Whether it's one big trip or multiple smaller ones, movement is aligned with the cycle.", "Even if you don't travel far, you're traveling internally - moving away from old patterns, old beliefs, old ways of being."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, reduce to a single digit (except 11, 22, 33).", "Example: Born November 3, in 2026: 11 + 3 + 2026 = 2040 → 2+0+4+0 = 6. So that's a Personal Year 6 in 2026."]
      }
    ]
  },
  {
    n: 6,
    title: "Home & Responsibility",
    shortDesc: "A year of family, home, and deepening responsibilities. Personal Year 6 is about tending to relationships and creating stability in your personal world.",
    meaning: [
      "Personal Year 6 brings the focus inward - to home, family, and the people closest to you. After the movement and freedom of PY5, PY6 says 'now tend what matters.' This is the year of responsibility, but not the kind that feels like burden. It's the responsibility of love and care.",
      "PY6 energy is about harmony, healing, and the work of making your immediate world feel good. Sometimes that's literal - home renovation, family issues that needed addressing, creating physical comfort. Sometimes it's relational - investing in partnerships, mending relationships, being present.",
      "What makes PY6 different from PY2 (also partnership-oriented) is the domestic focus. PY2 is about working with others. PY6 is about creating home - physical, emotional, relational. It's about belonging and making sure the people around you know they belong."
    ],
    themes: "Family, home, harmony, responsibility, care, healing, domestic life, relationships, love, service, balance, emotional support, nesting",
    strengths: [
      { title: "Home energy is strong", desc: "Whether you're nesting, renovating, or creating emotional safety, the energy is with you. Your space becomes more beautiful and more welcoming. The home you create in PY6 becomes a real sanctuary." },
      { title: "Relationships deepen with presence", desc: "You're genuinely interested in the people around you. You show up for them. You remember what matters to them. They feel seen and tended. That presence creates real connection." },
      { title: "Healing is possible", desc: "Old family wounds can begin to heal this year. Conversations that needed to happen become possible. Not everything resolves, but the possibility of understanding opens up in a way it didn't before." },
      { title: "Natural nurturing", desc: "You want to take care of people. This year that instinct is strong and it comes naturally. Whether parenting, mentoring, supporting a partner, or being there for a friend - the giving comes easily." }
    ],
    challenges: [
      { title: "Over-responsibility and martyrdom", desc: "You become so focused on everyone else's needs that your own disappear. You sacrifice, you give, you show up - until you're resentful about it. Learning to care for yourself at the same level you care for others is the work." },
      { title: "Family drama", desc: "If there's unresolved family stuff, PY6 brings it up. It's not punishment - it's healing opportunity. But it can feel like drama because everything surfaces at once." },
      { title: "Hovering and control", desc: "You get involved in other people's lives to 'help them' but really you're trying to control outcomes. That's not harmony - that's interference. Knowing where your responsibility ends and theirs begins is crucial." },
      { title: "Stagnation from over-commitment to home", desc: "You're so focused on domestic life and family that you neglect your own development, your own aspirations, your own growth. Home matters, but it's not the only thing that matters." }
    ],
    monthlyFocus: "January-March focuses on assessing what needs attention at home. April-June is active care and tending. July-September is deepening connections and healing. October-December is harvest and appreciation of what you've built.",
    faq: [
      {
        q: "Is Personal Year 6 a good time to buy a home or renovate?",
        a: ["Yes. This is the energy for it. Home improvement, buying, moving - all of this aligns with PY6. The energy supports creating a space that feels good and that reflects who you are.", "If you've been putting off home projects, this is the year to do them."]
      },
      {
        q: "What if I have difficult family relationships?",
        a: ["PY6 brings family stuff into focus. If there are unresolved issues, they'll surface this year - sometimes explicitly, sometimes through tension you can feel but can't quite name.", "This is actually an opportunity to address what's been unspoken. Therapy, family conversations, mediation - these align with the healing energy of PY6."]
      },
      {
        q: "Is Personal Year 6 good for starting a family or having children?",
        a: ["The energy is certainly aligned with family and domestic life. If you're considering parenthood, this is a year where that impulse feels strong and natural.", "That said, the decision to have children shouldn't be made based on the calendar year. Use PY6 energy to think deeply about what family means to you."]
      },
      {
        q: "What if I live alone and don't have family close by?",
        a: ["Home and family in PY6 don't have to be literal. It's about creating a sense of belonging, community, and care. That could be close friends, roommates, chosen family, or a deep commitment to making your space a home.", "The energy is about creating safety and warmth, not about being surrounded by blood relatives."]
      },
      {
        q: "Can I still work on my career in Personal Year 6?",
        a: ["Yes, but it's not the main focus. If your career and home life are competing for attention, something's going to give. This year, home and relationships get priority without destroying your career.", "It's balance, not either-or."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, reduce to a single digit (except 11, 22, 33).", "Example: Born February 14, in 2026: 2 + 14 + 2026 = 2042 → 2+0+4+2 = 8. So that's a Personal Year 8 in 2026."]
      }
    ]
  },
  {
    n: 7,
    title: "Reflection & Inner Work",
    shortDesc: "A year of introspection, rest, and spiritual development. Personal Year 7 is about stepping back to understand yourself more deeply.",
    meaning: [
      "Personal Year 7 is the year the universe asks you to slow down and look inward. After the busyness of PY6, PY7 says 'you can rest now.' This is the year of introspection, meditation, study, and the kind of thinking that only happens when you're not constantly doing.",
      "PY7 is a quieter energy. It asks you to examine what you've been building, what you've been assuming, what you actually believe versus what you've been told to believe. It's research, study, analysis, and the philosophical questions that don't have clear answers.",
      "What makes PY7 valuable is that it's not about external achievement. Nothing needs to be produced or proven. You're doing internal research, spiritual work, psychological work. By year-end you understand yourself better - and that understanding is what you take forward."
    ],
    themes: "Introspection, rest, spiritual work, study, research, analysis, privacy, solitude, wisdom, quiet knowing, meditation, reflection, faith, trust",
    strengths: [
      { title: "Self-understanding deepens", desc: "You're willing to look at yourself honestly. Where did this pattern come from? Why do I react this way? What do I actually believe? The answers come this year because you're asking the questions." },
      { title: "Spiritual connection strengthens", desc: "Whether through formal practice or just spending more time in nature or reflection, your sense of connection to something larger than yourself becomes clearer. This isn't religious necessarily - it's a deepening of faith." },
      { title: "Rest feels earned and necessary", desc: "You're not pushing through exhaustion in PY7. You're resting because you need to and the year supports it. That rest is regenerative, not lazy." },
      { title: "Clarity emerges from stillness", desc: "The answers to the questions you've been carrying come forward when you stop long enough to listen. Silence and solitude produce the insights you need." }
    ],
    challenges: [
      { title: "Isolation as a shadow", desc: "The need for quiet and introspection can curl into withdrawal. You pull away from people and it becomes harder to reconnect. Solitude is healthy; isolation is not. Watch for the difference." },
      { title: "Overthinking and analysis paralysis", desc: "You're examining everything so deeply that you can't move forward. The analysis becomes endless. At some point you have to stop examining and just live with what you know." },
      { title: "Spiritual bypass", desc: "Using introspection and spiritual practice as a way to avoid taking action or dealing with real-world problems. That's not wisdom - that's avoidance dressed up as enlightenment." },
      { title: "Doubt and uncertainty", desc: "The questioning that's healthy in PY7 can flip into doubt about everything. You start questioning decisions that were already made, beliefs that were solid, paths that were clear. That undoes the work of previous years." }
    ],
    monthlyFocus: "January-March is settling in and establishing internal focus. April-June is deep exploration and study. July-September is integration of what you're learning. October-December is wisdom harvest and beginning to emerge.",
    faq: [
      {
        q: "Is Personal Year 7 a good time to make major decisions?",
        a: ["Not for external decisions. PY7 is for internal clarity, not external action. Use this year to understand what you actually want, not to execute on it yet.", "The decision-making energy comes back in PY8 and PY9. In PY7, you're gathering information about yourself, not acting on it."]
      },
      {
        q: "Should I start a business or change jobs in Personal Year 7?",
        a: ["No. This is the wrong energy for launching or pivoting externally. If you're in a job you hate, you can use PY7 to understand what you actually want in the next role - but don't leave yet.", "Sit with the questions in PY7. Take action in PY8."]
      },
      {
        q: "Is Personal Year 7 good for therapy or spiritual work?",
        a: ["Absolutely. This is one of the best times to do deep inner work. Whether therapy, coaching, meditation practice, or any form of spiritual development, the energy supports looking inward.", "If you've been meaning to start therapy, this is the year."]
      },
      {
        q: "What if I hate being alone with my thoughts?",
        a: ["PY7 will push you toward it anyway, and that's the point. You have something to learn that only happens in quiet. The discomfort is the signal that this work matters.", "You don't have to sit in silence. Take walks, practice art, journal - anything that quiets the external noise enough for your voice to be heard."]
      },
      {
        q: "Can I still work and socialize in Personal Year 7?",
        a: ["Yes, but less than before and with more intention. You're reducing your outer commitments not because you're sad or sick, but because you need quieter time to think.", "The outer life continues, but it's secondary to the inner work."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, reduce to a single digit (except 11, 22, 33).", "Example: Born June 30, in 2026: 6 + 30 + 2026 = 2062 → 2+0+6+2 = 10 → 1+0 = 1. So that's a Personal Year 1 in 2026."]
      }
    ]
  },
  {
    n: 8,
    title: "Power & Achievement",
    shortDesc: "A year of power, authority, and significant achievement. Personal Year 8 is about reaching your goals and stepping into leadership.",
    meaning: [
      "Personal Year 8 is the year your work pays off. All the initiative from PY1, all the relationship-building from PY2, all the visibility from PY3, all the foundation from PY4, all the adaptation from PY5, all the care from PY6, all the wisdom from PY7 - this is the year it aligns into real achievement.",
      "PY8 is power energy. This is the year you're stepping into authority, claiming your position, making things happen. The authority isn't something you force - it's something that becomes visible when you're operating at your best. People recognize it and respond to it.",
      "What makes PY8 different from other achievement years is the focus on material and professional outcomes. Money, advancement, recognition, expansion - these show up more visibly in PY8. But they show up as a result of the real work, not as a replacement for it."
    ],
    themes: "Power, authority, achievement, advancement, prosperity, business success, leadership, strength, confidence, results, recognition, material gain, momentum",
    strengths: [
      { title: "Visible results and achievement", desc: "The effort produces outcomes. Promotions, business growth, recognition, financial improvement - these aren't guaranteed, but they're aligned with the energy. What you've been working toward becomes tangible." },
      { title: "Natural authority", desc: "You're not forcing power or demanding respect. It's visible because you actually know what you're doing. People listen. People follow. That authority is earned, not taken." },
      { title: "Momentum is strong", desc: "Everything you initiate tends to move forward. The universe is conspiring with you, not against you. That doesn't mean no obstacles - it means the obstacles are navigable and the effort produces results." },
      { title: "Abundance shows up", desc: "Whether financial, professional, or relational, there's a sense of having enough and more. Opportunities come. Resources materialize. It's not magic - it's the result of the work - but it feels like it." }
    ],
    challenges: [
      { title: "Ambition without ethics", desc: "The drive to achieve and the power energy can turn into ruthlessness. You're willing to sacrifice people or principles for the win. That's the shadow - power without integrity becomes abuse." },
      { title: "Workaholic energy", desc: "You're winning so much that you're working all the time. The achievement becomes the priority over everything else - rest, relationships, balance. You win the external game and lose the internal peace." },
      { title: "Arrogance as a side effect", desc: "You're succeeding and you start believing it's all you. You forget the help, the timing, the preparation. That arrogance usually comes before a fall." },
      { title: "Power attracts challenge", desc: "Success makes you visible and visible people get tested. People may come at you with envy or challenge. That's not punishment - it's just what happens when you're visible and winning." }
    ],
    monthlyFocus: "January-March is momentum-building and positioning. April-June is acceleration and visible results. July-September is peak energy and maximum achievement. October-December is consolidation and planning for the completion cycle.",
    faq: [
      {
        q: "Is Personal Year 8 a good time to start a business?",
        a: ["If you're starting from a place of real preparation and existing momentum, yes. But if you're starting from scratch in PY8, the energy is better for growing something that exists than for launching something new.", "The achievement energy of PY8 works best when it has something real to build on."]
      },
      {
        q: "What about money and finances in Personal Year 8?",
        a: ["This is typically the year when financial improvement is most likely. But it comes from increased results and efforts, not from passive income or luck. The energy supports business growth, career advancement, higher earnings.", "It's not a guarantee - but if you're working, you're more likely to see financial progress in PY8 than other years."]
      },
      {
        q: "Is Personal Year 8 good for negotiations and big asks?",
        a: ["Yes. Whether asking for a raise, negotiating a business deal, or advocating for yourself, the energy supports it. You're clearer about what you want and more confident in asking for it.", "This is the year to ask for what you've been putting off asking for."]
      },
      {
        q: "What about relationships in Personal Year 8?",
        a: ["If the relationship can hold your ambition and success, it deepens. If your partner feels threatened by your achievement or you neglect the relationship for work, it gets tested.", "Make sure success doesn't mean abandoning the people who matter."]
      },
      {
        q: "What if I don't achieve much in Personal Year 8?",
        a: ["The energy is there, but results come from alignment. If you're not taking aligned action, the energy doesn't produce results. Ask yourself: Are you actually doing the work? Are you in the right situation? Or are you waiting for magic?", "PY8 amplifies what you're putting in - it doesn't create something from nothing."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, reduce to a single digit (except 11, 22, 33).", "Example: Born January 25, in 2026: 1 + 25 + 2026 = 2052 → 2+0+5+2 = 9. So that's a Personal Year 9 in 2026."]
      }
    ]
  },
  {
    n: 9,
    title: "Completion & Release",
    shortDesc: "A year of endings, completion, and preparing for the next cycle. Personal Year 9 is about finishing what's unfinished and releasing what no longer serves.",
    meaning: [
      "Personal Year 9 is the final year of a 9-year cycle. Everything you started in the PY1 that began 8 years ago comes to completion now. Not every project, but the major themes, the significant chapter, the version of you that began then - it's ending.",
      "PY9 is about releasing what you've outgrown, completing what you've left unfinished, and clearing the ground for the new cycle that starts in PY1 (next year). It's not sad - it's natural. Seasons change. Chapters end. What matters is whether you're moving consciously into the ending or resisting it.",
      "What makes PY9 valuable is that it's not about force. The endings happen because they're ready to happen. Projects reach their natural conclusion. Relationships evolve or end. Beliefs fall away because you've integrated their lessons. You're not destroying anything - you're completing it."
    ],
    themes: "Completion, release, endings, wisdom integration, compassion, forgiveness, generosity, letting go, harvest, reflection on the cycle, closure, transcendence",
    strengths: [
      { title: "Natural closure", desc: "Things that were unfinished become finishable. Projects find their ending. Conversations that need to happen can finally happen. Closure is accessible in a way it wasn't before." },
      { title: "Wisdom from experience", desc: "You've lived through a full 9-year cycle. The lessons are integrated. You understand patterns you were blind to at the start. That wisdom is real and you can offer it to others." },
      { title: "Compassion deepens", desc: "You've seen a lot happen. You've made mistakes and survived them. You understand how people fail and persist. That lived experience produces real compassion." },
      { title: "Generosity becomes natural", desc: "What you don't need anymore, you can give. What you've learned, you can share. The holding-on energy from earlier in the cycle releases. You're lighter." }
    ],
    challenges: [
      { title: "Resisting necessary endings", desc: "You're holding on to something that's actually done. A relationship, a job, a way of being - you know it's finished but you can't let go. The grip tightens and it becomes painful." },
      { title: "Premature endings", desc: "You're ready for newness so badly that you end things too early. Relationships that could have evolved. Projects that could have paid off. You're so focused on the next cycle that you sabotage the current one." },
      { title: "Burnout from 9-year fatigue", desc: "By the end of the cycle, some people are exhausted. That's real. You've been moving through the numbers and your reserves are depleted. Pushing harder doesn't help - only rest helps." },
      { title: "Confusion and transition anxiety", desc: "You're between cycles. The old chapter is closing but the new one hasn't started. That in-between space can feel disorienting and empty. Learning to sit with that is part of the work." }
    ],
    monthlyFocus: "January-March is assessment of the full cycle and what needs completing. April-June is active completion and closure. July-September is release and integration. October-December is rest and preparation for the new cycle beginning in the new calendar year.",
    faq: [
      {
        q: "What if I'm not ready to end something in Personal Year 9?",
        a: ["The energy is still asking for completion, whether you're ready or not. You don't have to like it or be happy about it. But resisting usually makes it harder and messier.", "Sometimes the completion is forced on you because the other person is ready. Sometimes it comes because circumstances change. But the ending is in the air."]
      },
      {
        q: "Is Personal Year 9 a good time to make big changes?",
        a: ["Depends on what the change is. Ending something old and starting something new isn't ideal - PY9 is for completing the old and PY1 is for starting fresh. But sometimes the timing is what it is.", "If possible, complete first, rest, and then launch in PY1. That produces cleaner transitions."]
      },
      {
        q: "Should I start a business in Personal Year 9?",
        a: ["No. This is ending energy, not launching energy. If you're already running a business, you might be wrapping something up or preparing for a major pivot in the new cycle.", "Wait until PY1 to launch anything new."]
      },
      {
        q: "What about retirement or major life changes in PY9?",
        a: ["If you're ready to retire and complete a career chapter, PY9 is aligned with that. But the actual launch of the next thing waits until PY1.", "This is about finishing strong and consciously, not about jumping to what's next before this cycle is truly done."]
      },
      {
        q: "How do I work with Personal Year 9 consciously?",
        a: ["Make a list of what's unfinished: conversations, projects, relationships that need completion or clarity. Work through it methodically. Don't leave things frayed.", "Also let go of what you're carrying that doesn't actually belong to you - other people's expectations, beliefs you outgrew, patterns that never served you."]
      },
      {
        q: "How do I calculate my Personal Year number?",
        a: ["Add your birth month + birth day + the current calendar year, reduce to a single digit (except 11, 22, 33).", "Example: Born October 8, in 2026: 10 + 8 + 2026 = 2044 → 2+0+4+4 = 10 → 1+0 = 1. So that's a Personal Year 1 in 2026."]
      }
    ]
  }
];

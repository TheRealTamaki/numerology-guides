export interface BirthdayNumber {
  day: number;
  reducedTo: number | null; // null if no reduction needed (1-9, 11, 22)
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  meaning: string[];
  traits: string[];
  strengths: { title: string; desc: string }[];
  challenges: { title: string; desc: string }[];
  faq: { q: string; a: string[] }[];
}

// Birthday number data - one entry per birth day (1-31)
// Days 10+ reduce: 10→1, 11→11 (master), 12→3, 13→4, etc.
// 22 is kept as master

export const birthdayNumbers: BirthdayNumber[] = [
  {
    day: 1,
    reducedTo: null,
    title: "The Pioneer",
    shortDesc: "Born on the 1st, you carry a natural instinct for leadership and independent thought. You're at your best when you're going first.",
    heroSubtitle: "Your birthday energy is that of the original - someone built to lead, initiate, and forge their own direction.",
    meaning: [
      "Being born on the 1st gives you a birthday number of 1 - one of the clearest expressions of independent, pioneering energy in numerology. This isn't about formal leadership in the hierarchical sense. It's about the instinct to go first, to trust your own judgment, and to build something that didn't exist before you began.",
      "The birthday number is sometimes called the minor influence in a chart - smaller in scope than the life path, but consistent enough to show up in how you approach tasks, make decisions, and respond to challenges. For birthday 1, that consistent quality is initiative. You don't naturally wait for permission.",
      "The practical implication is that you tend to perform best in situations where you have genuine ownership and real autonomy - where your ideas and judgment are actually part of the picture, not just tolerated. Environments that are too structured or that require too much deference tend to create friction."
    ],
    traits: [
      "Direct, decisive, and self-reliant - birthday 1 people know what they think and aren't shy about it. The independence shows up in small things as much as large ones: how they organize their workspace, how they approach a problem, the routes they take home.",
      "The shadow is the stubbornness that can look like conviction. Birthday 1 has strong views and defends them well - sometimes past the point where updating would be wiser than holding the position.",
      "What's interesting about birthday 1 is the private vulnerability behind the confident exterior. The drive to be first and to be right often coexists with a deeper fear of being wrong or being seen as less capable than they appear. The outer confidence is real; so is what's underneath it."
    ],
    strengths: [
      { title: "Decisive under pressure", desc: "When a decision needs to be made, birthday 1 makes it. The ability to commit to a direction and move without excessive deliberation is a genuine strength in situations that require someone to go first." },
      { title: "Original approach", desc: "Birthday 1 instinctively looks for a fresh angle on problems rather than reproducing what already exists. This originality is consistent and valuable." }
    ],
    challenges: [
      { title: "Collaboration as resistance", desc: "The natural instinct to do things alone and their way can make genuine collaboration feel like interference rather than help. Learning to receive input as resource rather than criticism is the number's primary growth edge." },
      { title: "Impatience with slower processes", desc: "Birthday 1 moves at a specific pace and doesn't always account for the people or processes that need more time. The impatience can damage relationships that patience would have served." }
    ],
    faq: [
      {
        q: "What is birthday number 1 in numerology?",
        a: ["Birthday number 1 describes an instinct for independent leadership and original thinking - the quality of someone who goes first, trusts their own judgment, and builds things from scratch.", "It's one influence among several in your chart, but a consistent one that shows up in how you make decisions and respond to challenges throughout your life."]
      },
      {
        q: "How is the birthday number calculated?",
        a: ["Simply from your day of birth. If you were born on the 1st, your birthday number is 1. For double-digit birth days, add the two digits together and reduce to a single number - unless the result is 11 or 22, which are master numbers."]
      },
      {
        q: "Is the birthday number the same as the life path number?",
        a: ["No - the life path is your primary chart number, calculated from the full birth date (day + month + year). The birthday number uses only the day of birth. It's considered a secondary influence - more specific and more personal, but smaller in overall scope."]
      }
    ]
  },
  {
    day: 2,
    reducedTo: null,
    title: "The Peacemaker",
    shortDesc: "Born on the 2nd, you have a natural sensitivity to the needs of others and a gift for bringing people together. The relational quality runs deep.",
    heroSubtitle: "Your birthday energy is one of cooperation, attunement, and the quiet skill of making things work between people.",
    meaning: [
      "Birthday number 2 brings a naturally cooperative and relationally attuned energy. Where birthday 1 is oriented toward independence and going first, birthday 2 is oriented toward connection - toward the space between people, toward what makes things work together rather than what makes one person stand out.",
      "The birthday number is a secondary influence in the chart - it doesn't define the whole life, but it does show up consistently in characteristic ways. For birthday 2, that means a consistent sensitivity to emotional atmosphere, a gift for diplomacy, and a natural ease with the kind of quiet, facilitative work that holds groups together.",
      "What the birthday number says about day 2 people is that they tend to notice what others miss - the person who's been quiet too long, the tension that no one's naming, the thing that needs to be said. And they tend to do something about it, usually with more grace than the situation requires."
    ],
    traits: [
      "Attentive, diplomatic, and genuinely responsive - birthday 2 people read rooms and adjust accordingly. The sensitivity is real; it's not a social strategy. They feel the emotional temperature of situations and it affects them.",
      "The shadow is the conflict avoidance that can come with a deep desire for harmony. Birthday 2 can stay quiet when speaking up would be more honest, can defer to others past the point of genuine preference, can smooth things over when the underlying issue actually needs addressing.",
      "At their best, birthday 2 people have a quality of genuine care that's immediately perceptible. They make others feel seen, which is a consistently valuable gift in almost any context."
    ],
    strengths: [
      { title: "Natural diplomacy", desc: "Birthday 2 navigates interpersonal complexity with a natural ease that other numbers have to work at. The ability to find common ground and de-escalate is consistent and real." },
      { title: "Deeply trustworthy", desc: "People feel that birthday 2 will handle sensitive things with care. This trust is extended early and tends to be borne out in practice." }
    ],
    challenges: [
      { title: "Over-accommodation", desc: "The genuine desire for harmony can become a pattern of giving away more ground than the situation requires - agreeing to things that don't actually align, keeping quiet about things that need to be said." },
      { title: "Absorbing too much", desc: "Birthday 2's sensitivity means they take on the emotional weather of their environment more than most numbers. Recovery time matters." }
    ],
    faq: [
      {
        q: "What is birthday number 2?",
        a: ["Birthday number 2 describes a naturally cooperative, relationally attuned energy. People born on the 2nd tend to be sensitive to the needs of others, skilled at diplomacy, and oriented toward building things with people rather than alone."]
      },
      {
        q: "Is birthday 2 the same as life path 2?",
        a: ["No - the birthday number is a secondary influence, using only the day of birth. The life path is the primary number, using the full date. Both describe 2 energy, but the life path has more scope and weight in the overall chart."]
      },
      {
        q: "What does birthday number 2 mean for careers?",
        a: ["Birthday 2 is well suited to any role where the relational and facilitative skills are valued: counseling, teaching, mediation, human resources, healthcare, social work. The diplomatic quality and the ability to bring people together are genuine professional strengths."]
      }
    ]
  },
  {
    day: 3,
    reducedTo: null,
    title: "The Creative",
    shortDesc: "Born on the 3rd, you have a natural gift for expression - whether through words, art, humor, or the way you engage with people. The creative impulse is structural.",
    heroSubtitle: "Your birthday energy is expressive, joyful, and genuinely creative - the kind that doesn't need permission to come out.",
    meaning: [
      "Birthday number 3 brings a creative, expressive energy that shows up as a consistent quality in how you engage with the world. It's not just that you're creative in the narrow, artistic sense - it's that you approach almost everything with an instinct for originality, for finding the angle that makes something more interesting.",
      "This is a secondary influence in the chart, but a reliable one. People born on the 3rd tend to have an easier time with creative work, communication, and social situations than you might otherwise expect given other chart numbers. The 3 energy loosens things up, adds lightness, and brings a quality of aliveness to whatever it touches.",
      "The practical reality of birthday 3 is that the expression needs somewhere to go. When creative energy has a channel - a practice, a craft, a way of communicating that's genuinely yours - the number functions well. When it doesn't, the restlessness and the scattered quality that are the 3's shadow tend to surface."
    ],
    traits: [
      "Naturally expressive and socially at ease, birthday 3 people tend to communicate with a warmth and specificity that others find engaging. Humor comes readily. So does the quality of making other people feel noticed and interesting.",
      "The shadow is the tendency toward scattered energy - starting things and not finishing them, moving between interests before depth develops, living at the surface of experience when depth would serve better.",
      "What's genuinely distinctive about birthday 3 is the quality of joy they're capable of - real, specific delight in things, which is contagious and genuinely generous. It's one of the more consistent gifts in the chart."
    ],
    strengths: [
      { title: "Expressive communication", desc: "Birthday 3 communicates with warmth and specificity - making conversations feel like genuine exchanges rather than transactions. People remember this." },
      { title: "Creative problem-solving", desc: "The instinct for fresh angles and unexpected connections makes birthday 3 genuinely useful in situations where the conventional approach isn't working." }
    ],
    challenges: [
      { title: "Follow-through as a discipline", desc: "The generative quality of birthday 3 produces more beginnings than completions. Developing the discipline to stay with things past the point of initial enthusiasm is important." },
      { title: "Depth over breadth", desc: "The easy social quality can become a habit of surface contact. Birthday 3 benefits from deliberately cultivating the depth that the charm can sometimes replace." }
    ],
    faq: [
      {
        q: "What is birthday number 3?",
        a: ["Birthday number 3 describes a naturally creative, expressive energy. People born on the 3rd tend to communicate with warmth and originality, have an easier time with creative work, and bring a quality of joy and humor to their interactions."]
      },
      {
        q: "Does birthday 3 mean I'm artistic?",
        a: ["Creative, definitely - but not necessarily in the conventional artistic sense. Birthday 3's creativity shows up in how you think, how you communicate, and how you approach problems as much as in any specific creative medium.", "The impulse is toward originality, not toward any particular form."]
      },
      {
        q: "What is the shadow of birthday 3?",
        a: ["Scattered energy, difficulty with follow-through, and the tendency to stay at the surface of experience rather than going deep. The ease and charm that are the number's gift can sometimes substitute for the depth that would make things genuinely lasting."]
      }
    ]
  },
  {
    day: 4,
    reducedTo: null,
    title: "The Builder",
    shortDesc: "Born on the 4th, you carry a consistent energy of practicality, reliability, and the satisfaction of building things that actually hold. You're at your best when the work is real.",
    heroSubtitle: "Your birthday energy is grounded, methodical, and built for the long game - for work that lasts.",
    meaning: [
      "Birthday number 4 brings a practical, structured energy that shows up as a consistent quality in how you approach work and responsibility. People born on the 4th tend to have a natural affinity for systems, processes, and the satisfaction of doing things properly. Not perfectly - properly, which is a different standard.",
      "As a secondary influence, birthday 4 adds a layer of discipline and follow-through to whatever the primary numbers are reaching for. It's the quality that turns ambitious ideas into completed projects, that keeps commitments even when keeping them is inconvenient.",
      "The practical implication is that birthday 4 people often carry more responsibility than they consciously choose - because other people can feel that they'll actually follow through, and because the 4 energy itself tends toward taking ownership of whatever it's near."
    ],
    traits: [
      "Reliable, methodical, and quietly capable - birthday 4 people don't tend to announce their competence. It just shows up in the quality of what they do and the consistency of how they do it.",
      "The shadow is rigidity - the tendency to treat structure as an end rather than a means, and to judge people who approach things differently as simply doing it wrong. The discipline that's the number's gift can become a limitation when it prevents adaptation.",
      "What's worth knowing about birthday 4 is the private stubbornness. The practical, grounded exterior doesn't always broadcast the strength of the views underneath. Birthday 4 has real opinions and real preferences - they just don't always lead with them."
    ],
    strengths: [
      { title: "Exceptional follow-through", desc: "Birthday 4 finishes what it starts. In a world of unfinished things, this is genuinely distinctive and consistently valuable." },
      { title: "Practical intelligence", desc: "The ability to think through how things actually work - what the steps are, what could go wrong, what needs to be in place - is reliable and real." }
    ],
    challenges: [
      { title: "Resistance to change", desc: "Birthday 4's comfort with established structures can produce resistance to new approaches, even when those approaches would clearly work better. The discipline is real; so is the need to apply it flexibly." },
      { title: "Difficulty resting", desc: "The internal standard for follow-through doesn't turn off easily. Birthday 4 can struggle to actually rest - the planning mind runs on even when the body is still." }
    ],
    faq: [
      {
        q: "What is birthday number 4?",
        a: ["Birthday number 4 describes a practical, structured, reliable energy. People born on the 4th tend to be naturally organized, excellent at follow-through, and at their best when the work involves building something real and lasting."]
      },
      {
        q: "What careers suit birthday 4?",
        a: ["Any career where precision, reliability, and the ability to build sustainably matter: engineering, architecture, project management, accounting, skilled trades, medicine, law. Birthday 4 is well suited to work that requires sustained, careful effort."]
      },
      {
        q: "What is the shadow of birthday 4?",
        a: ["Rigidity - treating structure as an end rather than a means, and finding genuine adaptation difficult. Also the tendency to judge others for not meeting the same standards of precision and follow-through."]
      }
    ]
  },
  {
    day: 5,
    reducedTo: null,
    title: "The Explorer",
    shortDesc: "Born on the 5th, you carry a consistent energy of curiosity, adaptability, and the need for variety. You're at your best when the situation calls for thinking on your feet.",
    heroSubtitle: "Your birthday energy is versatile and alive - drawn to change, experience, and the sense of possibility.",
    meaning: [
      "Birthday number 5 brings a naturally versatile, freedom-oriented energy. People born on the 5th tend to be quick on their feet, comfortable with change, and drawn to variety in a way that isn't just preference - it's structural. When their environment doesn't provide enough novelty and movement, the restlessness surfaces.",
      "As a secondary influence, birthday 5 adds adaptability and curiosity to whatever the primary chart numbers are working with. It loosens things up, makes adjusting easier, and brings a quality of aliveness to experience that can be infectious.",
      "The practical pattern that shows up most consistently is the ease with which birthday 5 people handle unexpected change. What would derail someone with a more structure-dependent birthday energy is something birthday 5 navigates by instinct - finding the opportunity in the disruption, adjusting without drama, keeping moving."
    ],
    traits: [
      "Curious, adaptable, and genuinely interested in the new - birthday 5 people have a quality of attention that engages fully with whatever is immediately in front of them. The engagement is real, not performed.",
      "The shadow is the difficulty staying with things past the point of initial novelty - the tendency to move on from good situations before they've delivered what sustained investment would have produced.",
      "What's interesting about birthday 5 is that the restlessness isn't always about dissatisfaction. Sometimes the number simply needs to move. Understanding this - distinguishing between situations that are genuinely wrong and situations that just feel constraining - is important work."
    ],
    strengths: [
      { title: "Instinctive adaptability", desc: "Birthday 5 recalibrates to new situations faster than most. In environments of rapid change, this quality is genuinely valuable and hard to manufacture." },
      { title: "Wide engagement", desc: "The curiosity of birthday 5 applies across a broad range of people, subjects, and situations. This breadth creates connections and insights that more narrowly focused birthday numbers miss." }
    ],
    challenges: [
      { title: "Commitment over time", desc: "The love of novelty can translate into difficulty with the sustained investment that good things typically require. Birthday 5 needs to develop the capacity to stay - not everywhere, but in the places that deserve it." },
      { title: "Diffuse energy", desc: "The wide range of interests and the instinct toward movement can dilute effectiveness. Focus - self-imposed rather than externally enforced - is birthday 5's most important productivity tool." }
    ],
    faq: [
      {
        q: "What is birthday number 5?",
        a: ["Birthday number 5 describes a naturally versatile, curious, freedom-oriented energy. People born on the 5th are instinctively adaptable, drawn to variety, and at their best in situations that require quick thinking and the ability to adjust."]
      },
      {
        q: "Is birthday 5 commitment-phobic?",
        a: ["Not inherently - though the love of freedom can look that way. The real pattern is less about avoiding commitment and more about needing genuine freedom within commitments. Birthday 5 functions well with flexibility built in; it struggles in structures that don't leave room to move."]
      },
      {
        q: "What is the shadow of birthday 5?",
        a: ["Difficulty with sustained commitment, diffuse energy across too many interests, and the tendency to confuse genuine wrongness with the normal friction of staying with something."]
      }
    ]
  },
  {
    day: 6,
    reducedTo: null,
    title: "The Nurturer",
    shortDesc: "Born on the 6th, you have a natural orientation toward care, responsibility, and harmony. You feel the wellbeing of the people you love as something close to your own.",
    heroSubtitle: "Your birthday energy is warm and devoted - built for genuine care and the quiet work of keeping things good.",
    meaning: [
      "Birthday number 6 brings a naturally nurturing, responsible energy. People born on the 6th tend to have a deep instinct for care - for the wellbeing of the people they love, for the harmony of their environment, for the quality of the relationships they're in. This isn't a posture. It's the number expressing itself.",
      "As a secondary influence, birthday 6 adds warmth, aesthetic sensibility, and a strong sense of responsibility to whatever the primary chart numbers are doing. It tends to make people more attentive to others' needs, more invested in making things good for everyone involved, and more sensitive to disharmony.",
      "The practical pattern that shows up consistently is the tendency to take on responsibility for things that aren't technically theirs. Birthday 6 people often end up as the ones who hold things together - the ones others rely on, the ones who make sure things are okay - not because they've been asked, but because the 6 energy moves toward what needs caring for."
    ],
    traits: [
      "Warm, responsible, and genuinely invested in the wellbeing of others - birthday 6 people tend to create environments that feel cared for. The attention to detail that comes from caring is real and consistent.",
      "The shadow is over-giving - taking on so much for others that birthday 6's own needs become invisible. The pattern of giving without asking, contributing without requiring, and waiting for reciprocity that doesn't always come is something the number returns to repeatedly.",
      "At their best, birthday 6 people bring a quality of reliable love that's genuinely rare. The people in their lives tend to feel held - seen, cared for, and trusted - which is a profound contribution to the relationships around them."
    ],
    strengths: [
      { title: "Reliable care", desc: "Birthday 6 follows through on their commitments to the people they love. The care is consistent across time and circumstances - not dependent on feeling like it." },
      { title: "Creating harmony", desc: "The instinct to smooth rough dynamics, to find the approach that works for everyone, and to make shared spaces feel welcoming is a real and consistent gift." }
    ],
    challenges: [
      { title: "Martyrdom pattern", desc: "Giving more than is sustainable, feeling resentful about the imbalance, and then giving more anyway is a pattern birthday 6 needs to actively interrupt." },
      { title: "Difficulty with imperfection", desc: "The vision of how relationships and homes and communities should be is vivid in birthday 6 - and reality's consistent failure to match it can be a source of private disappointment." }
    ],
    faq: [
      {
        q: "What is birthday number 6?",
        a: ["Birthday number 6 describes a naturally warm, nurturing, responsible energy. People born on the 6th tend to feel the wellbeing of others as closely related to their own - they care deeply, they show up consistently, and they create environments that feel genuinely looked after."]
      },
      {
        q: "Is birthday 6 always the caregiver?",
        a: ["The instinct toward care is consistent, but birthday 6 is more than a caregiver. Behind the warmth there's usually real strength, aesthetic intelligence, and a capacity for leadership that the nurturing exterior doesn't always telegraph.", "The work for birthday 6 is including themselves in the care they so readily extend to others."]
      },
      {
        q: "What careers suit birthday 6?",
        a: ["Careers where care is the point: healthcare, teaching, social work, counseling, hospitality, community leadership. Also any creative field with an aesthetic orientation - interior design, architecture, food, the arts - where birthday 6's sense of harmony and beauty can be expressed."]
      }
    ]
  },
  {
    day: 7,
    reducedTo: null,
    title: "The Analyst",
    shortDesc: "Born on the 7th, you carry a deep need to understand - to get beneath the surface of things and find out what's actually true. The analytical instinct is structural.",
    heroSubtitle: "Your birthday energy is introspective and curious in the deepest sense - drawn to the questions that don't have easy answers.",
    meaning: [
      "Birthday number 7 brings a naturally analytical, introspective energy. People born on the 7th tend to think deeply about things, to be skeptical of surface explanations, and to have a persistent drive toward understanding that goes beyond the practical. The 7 energy is fundamentally about the search - for knowledge, for meaning, for the truth beneath the obvious.",
      "As a secondary influence, birthday 7 adds a layer of perceptiveness and depth to whatever the primary chart numbers are working with. It tends to make people more observant, more interested in the underlying patterns, and more likely to ask the second and third question past where others stop.",
      "The practical pattern is a consistent quality of analysis - of going further into things than the situation strictly requires, because the number finds incomplete understanding genuinely uncomfortable. This is both a genuine intellectual gift and, at the shadow level, a potential source of over-analysis."
    ],
    traits: [
      "Perceptive, systematic, and oriented toward depth - birthday 7 people tend to be the ones who notice what others miss and who aren't satisfied with the first adequate answer. The standards are real and apply to their own thinking as much as to the material they're analyzing.",
      "The shadow is isolation - the drift toward an inner world that becomes so primary that the outer world, with all its ordinary imprecision, starts to feel like an interruption. Birthday 7 needs to be careful about the gradual withdrawal that can accompany deep thinking.",
      "What's distinctive about birthday 7 is the quality of honest intellectual engagement - the willingness to follow an argument wherever it leads, to update when evidence conflicts with prior conclusions, and to say 'I don't know' when 'I don't know' is the accurate answer."
    ],
    strengths: [
      { title: "Depth of analysis", desc: "Birthday 7 goes further into problems than most. This doesn't just produce smarter conclusions - it produces conclusions that are actually right, because they've been tested against more alternatives." },
      { title: "Pattern recognition", desc: "The ability to see connections between apparently separate things is consistent and reliable in birthday 7 people. This is the kind of intelligence that generates genuinely new understanding." }
    ],
    challenges: [
      { title: "Analysis as avoidance", desc: "Thinking deeply about things can become a substitute for actually engaging with them - especially when the things in question are emotional or relational, where thinking doesn't resolve what feeling would." },
      { title: "Perfectionism about understanding", desc: "Birthday 7's discomfort with incomplete understanding can stall decisions and delay action. Not everything needs to be fully understood before it can be moved forward." }
    ],
    faq: [
      {
        q: "What is birthday number 7?",
        a: ["Birthday number 7 describes a naturally analytical, introspective energy. People born on the 7th are drawn to depth, skeptical of surface explanations, and consistently oriented toward understanding what's actually true beneath appearances."]
      },
      {
        q: "Is birthday 7 introverted?",
        a: ["The energy tends in that direction - the preference for depth over breadth, for genuine exchange over social surface, and for internal processing over immediate external engagement. But introversion and extraversion are temperament variables that sit alongside birthday number influence, not inside it."]
      },
      {
        q: "What is the shadow of birthday 7?",
        a: ["Isolation, analysis as avoidance, and the perfectionism about understanding that can prevent action. The inner world becomes so primary that the outer one starts to feel like an interruption - which narrows life significantly."]
      }
    ]
  },
  {
    day: 8,
    reducedTo: null,
    title: "The Executive",
    shortDesc: "Born on the 8th, you carry a consistent energy of ambition, authority, and material intelligence. You're built to operate at significant scale.",
    heroSubtitle: "Your birthday energy is powerful and achievement-oriented - built for the kind of work that actually moves things.",
    meaning: [
      "Birthday number 8 brings a naturally ambitious, authoritative energy. People born on the 8th tend to have a consistent instinct for power in the productive sense - for understanding how systems and resources and people can be organized to produce significant outcomes. The 8 energy is oriented toward real impact at real scale.",
      "As a secondary influence, birthday 8 adds executive capability, financial intelligence, and a quality of natural authority to whatever the primary chart numbers are doing. It tends to make people more comfortable with responsibility, more effective at large-scale coordination, and more oriented toward material and practical achievement.",
      "The practical pattern is a consistent pull toward significant work. Birthday 8 people tend to feel the gap between what's being done and what could be done - and the frustration of that gap tends to motivate rather than paralyze."
    ],
    traits: [
      "Ambitious, capable, and comfortable with authority - birthday 8 people tend to project a quality of power even when they're not trying to. They understand how things work at a systemic level, which makes them effective in situations that require both vision and execution.",
      "The shadow is the conflation of worth and achievement - the tendency to measure the self against the scoreboard in ways that make setbacks feel existential rather than informational. Birthday 8 needs to build a self-concept that doesn't live or die with the last result.",
      "What's interesting about birthday 8 is the resilience. The same drive that reaches for significant achievement is also what keeps birthday 8 in the game when the game is hard. They don't fold when things get difficult. They reassess and keep moving."
    ],
    strengths: [
      { title: "Natural executive ability", desc: "Birthday 8 understands how to organize resources, people, and systems toward significant goals. This isn't just competence - it's a form of strategic intelligence that operates naturally." },
      { title: "Resilience under pressure", desc: "Birthday 8 doesn't fold when things get hard. The setback is processed as information, not as verdict, and the forward movement resumes." }
    ],
    challenges: [
      { title: "Work-life integration", desc: "The ambition doesn't have a natural off switch, and birthday 8 can find themselves systematically sacrificing relationships, rest, and health in service of achievement goals that keep moving." },
      { title: "Power dynamics in personal relationships", desc: "The executive orientation that works well in professional contexts can create imbalance in personal relationships, where equality and mutuality are the right currencies rather than authority and effectiveness." }
    ],
    faq: [
      {
        q: "What is birthday number 8?",
        a: ["Birthday number 8 describes a naturally ambitious, authoritative energy. People born on the 8th are instinctively oriented toward significant achievement, comfortable with authority and responsibility, and effective at operating at scale."]
      },
      {
        q: "Is birthday 8 materialistic?",
        a: ["Material success matters to birthday 8 in a way that other numbers don't fully understand - it's not just status, it's the concrete evidence that the capacity is real. The shadow is when accumulation substitutes for meaning rather than expressing it."]
      },
      {
        q: "What is the shadow of birthday 8?",
        a: ["Conflating worth with achievement, overwork as a structural pattern, and the executive mindset bleeding into contexts - personal relationships, rest, creative work - that don't benefit from it."]
      }
    ]
  },
  {
    day: 9,
    reducedTo: null,
    title: "The Idealist",
    shortDesc: "Born on the 9th, you carry a consistently broad perspective and a genuine orientation toward contributing something meaningful. The universal view comes naturally.",
    heroSubtitle: "Your birthday energy is compassionate and broadly oriented - drawn toward the larger picture and genuine contribution.",
    meaning: [
      "Birthday number 9 brings a naturally compassionate, universally-oriented energy. People born on the 9th tend to think in larger frames than immediate circumstances - to be aware of the bigger context, to feel the weight of what's wrong in the world, and to have a genuine pull toward contributing something that matters beyond personal gain.",
      "As a secondary influence, birthday 9 adds breadth of perspective, genuine empathy, and a quality of wisdom that can arrive before the experience to justify it. It tends to make people more aware of others' suffering, more oriented toward service, and more troubled by meaninglessness in their own work.",
      "The practical pattern is a consistent dissatisfaction with work or life that feels purely personal - that doesn't contribute to something larger. Birthday 9 people tend to need a sense of purpose that extends beyond their own advancement."
    ],
    traits: [
      "Wise, compassionate, and consistently oriented toward the larger picture - birthday 9 people tend to have a quality of perspective that others notice and value. They've usually thought about the important questions and carry the results with them.",
      "The shadow is the weight of the idealism - the ongoing grief of seeing how far reality falls short of what's possible, and the depletion that can come from over-giving in service of a vision that the world doesn't seem to be moving toward fast enough.",
      "What's distinctive about birthday 9 is the quality of generosity - the genuine willingness to give time, attention, energy, and resources to things that matter without keeping close score. At their best, birthday 9 people make the world feel more spacious."
    ],
    strengths: [
      { title: "Broad perspective", desc: "Birthday 9 naturally thinks at the scale of systems and patterns rather than just immediate circumstances. This breadth is genuinely useful in complex situations." },
      { title: "Inspiring presence", desc: "The sense of having thought about things carefully and the genuine quality of caring about what matters makes birthday 9 people naturally inspiring to others." }
    ],
    challenges: [
      { title: "Idealism as a weight", desc: "The gap between what is and what could be sits with birthday 9 people in a way that can become genuinely depleting if they haven't found sustainable ways to engage with it." },
      { title: "Over-extension", desc: "The genuine care about meaningful contribution can lead to taking on more than is sustainable - spreading the effort across too many fronts and reducing effectiveness everywhere." }
    ],
    faq: [
      {
        q: "What is birthday number 9?",
        a: ["Birthday number 9 describes a naturally compassionate, broadly-oriented energy. People born on the 9th tend to think in larger frames, feel a pull toward meaningful contribution, and carry a quality of genuine wisdom about what matters."]
      },
      {
        q: "Is birthday 9 always altruistic?",
        a: ["The orientation is there, but real people are complex. Birthday 9 people have self-interest and ordinary human qualities alongside the broader perspective. What distinguishes the 9 is less virtue than the private sense that things should be better - and genuine motivation to contribute."]
      },
      {
        q: "What is the shadow of birthday 9?",
        a: ["The weight of idealism, over-extension, and the difficulty receiving care that's the consistent pattern of a number so oriented toward giving it. Birthday 9 needs to build a sustainable relationship with their own limits."]
      }
    ]
  },
  {
    day: 10,
    reducedTo: 1,
    title: "The Independent Leader",
    shortDesc: "Born on the 10th (reduces to 1), you combine the leadership energy of 1 with the broader awareness that comes from the 0's amplifying presence. The drive for independence is strong.",
    heroSubtitle: "Your birthday energy is directed and original - a leadership instinct with a wider field of awareness.",
    meaning: [
      "Birthday number 10 reduces to 1 (1+0=1), so it carries the core energy of the 1 - independence, leadership, and the instinct to go first. But the presence of the 0 adds a quality of amplification: the 1 energy tends to run at a slightly higher intensity in people born on the 10th, with more capacity for broad strategic vision alongside the personal drive.",
      "People born on the 10th carry a birthday energy of leadership that's simultaneously personal and expansive. They tend to think both in terms of their own direction and in terms of the larger picture - how the individual action fits into the broader context.",
      "The practical pattern is a consistent ability to initiate things and to see them as part of a larger whole - not just doing something, but doing something that fits into a direction. This quality of purposeful initiative is the 10's most distinctive contribution."
    ],
    traits: [
      "Purposeful, directive, and aware of context - birthday 10 people carry the 1's independent drive alongside a broader awareness that makes their leadership more strategic. They're not just going first; they're going in a direction.",
      "The shadow is similar to birthday 1: the stubbornness, the difficulty with collaboration, the tendency to treat independence as synonymous with correctness. The 0's amplification can intensify these patterns as well as the gifts.",
      "What's interesting about birthday 10 is the capacity for self-reinvention - the 0's presence adds a quality of completeness and new beginning that makes this birthday particularly well suited to significant transitions and fresh starts."
    ],
    strengths: [
      { title: "Strategic initiative", desc: "Birthday 10 doesn't just start things - they start things that fit into a larger direction. The combination of personal drive and contextual awareness produces purposeful action." },
      { title: "Adaptable leadership", desc: "The 0's amplifying quality makes birthday 10's leadership more flexible than pure 1 energy - able to recalibrate when circumstances change without losing the core direction." }
    ],
    challenges: [
      { title: "Intensity of the drive", desc: "The 0's amplification means birthday 10's drive for independence and direction can run at a higher intensity than birthday 1. The need to manage that intensity is real." },
      { title: "Same as birthday 1", desc: "The core challenges of collaboration, impatience, and stubbornness are the same as birthday 1, potentially amplified." }
    ],
    faq: [
      {
        q: "What is birthday number 10?",
        a: ["Birthday number 10 reduces to 1 and carries the same core leadership and independence energy. The presence of the 0 amplifies and expands the 1 energy - adding strategic breadth and a quality of purposeful new beginning.", "It's a powerful birthday number with a strong initiative and direction orientation."]
      },
      {
        q: "How is the 10 reduced to 1?",
        a: ["Simply by adding the digits: 1+0=1. In numerology, multi-digit numbers (except 11, 22, and 33) are always reduced to single digits by adding their parts."]
      },
      {
        q: "Is birthday 10 different from birthday 1?",
        a: ["Both carry 1 energy, but the 10 has the 0 alongside it, which amplifies and gives a slightly wider, more strategic quality to the independence and initiative. The core pattern is the same; the expression can be broader."]
      }
    ]
  },
  {
    day: 11,
    reducedTo: null,
    title: "The Intuitive",
    shortDesc: "Born on the 11th - a master number day - you carry an elevated version of the 2 energy, with a layer of intuition and spiritual sensitivity that sets this birthday apart.",
    heroSubtitle: "Your birthday energy is unusually perceptive and sensitive - built for a kind of understanding that goes beyond the surface.",
    meaning: [
      "Birthday number 11 is a master number. It isn't reduced to 2 - it stands as 11, carrying the cooperative, relational energy of the 2 at a higher frequency, with an additional dimension of intuitive perception and spiritual sensitivity. People born on the 11th tend to experience the world with more intensity and more depth than the single-digit 2 energy alone would produce.",
      "As a secondary influence, birthday 11 adds a layer of heightened perception, creative intuition, and sensitivity to the larger patterns in experience. It tends to make people more attuned to subtlety, more aware of what's going on beneath the surface, and more likely to access insight through feeling and intuition rather than strictly through reasoning.",
      "The practical pattern is a consistent quality of understanding that other people sometimes describe as uncanny. Birthday 11 people often know things before they have the evidence for knowing them - a quality that's genuinely valuable and occasionally difficult to navigate in a world that prefers explicit reasoning."
    ],
    traits: [
      "Perceptive, sensitive, and unusually attuned to what's going on beneath the surface - birthday 11 people tend to pick up on subtleties that other numbers miss. This perception is real and it operates before conscious thought.",
      "The shadow is the nervous tension that comes with the higher voltage. Birthday 11 people can be more easily overwhelmed by environmental complexity, more sensitive to conflict and disharmony, and more prone to anxiety than birthdays with lower-intensity energy.",
      "What's distinctive about birthday 11 is the capacity for genuine inspiration - the ability to access and communicate something true that helps other people see differently. When this capacity is working, it's extraordinary."
    ],
    strengths: [
      { title: "Intuitive intelligence", desc: "Birthday 11 accesses information through channels that analytical reasoning doesn't reach. This isn't mysticism - it's a real form of knowing that, when developed and trusted, produces genuinely accurate insights." },
      { title: "Depth of attunement", desc: "The sensitivity of birthday 11 makes them unusually good at reading people, situations, and the emotional undercurrents in environments. This attunement is a consistent professional and personal asset." }
    ],
    challenges: [
      { title: "Managing intensity", desc: "The higher-voltage energy of birthday 11 can be genuinely difficult to regulate. The sensitivity that enables the perception is the same quality that makes over-stimulation a recurring challenge." },
      { title: "Trusting the intuition", desc: "Birthday 11 people often have clear intuitions and then immediately doubt them - deferring to external evidence or other people's certainty rather than trusting what they actually know. Developing self-trust around the perception is important." }
    ],
    faq: [
      {
        q: "What is birthday number 11?",
        a: ["Birthday number 11 is a master number - it carries the cooperative, sensitive energy of the 2 at an elevated frequency, with an additional dimension of intuitive perception and spiritual attunement. People born on the 11th are unusually perceptive and tend to access insight through feeling and intuition."]
      },
      {
        q: "Why isn't 11 reduced to 2?",
        a: ["In numerology, 11, 22, and 33 are recognized as master numbers - they carry special significance and aren't reduced further. The 11 contains the 2 energy but operates at a higher level; reducing it would lose that additional dimension."]
      },
      {
        q: "What is the shadow of birthday 11?",
        a: ["Nervous tension, difficulty trusting the intuition, and the sensitivity that makes the perception possible also making over-stimulation a recurring challenge. The invitation is to hold the intensity rather than being held by it."]
      }
    ]
  },
  {
    day: 12,
    reducedTo: 3,
    title: "The Communicator",
    shortDesc: "Born on the 12th (reduces to 3), you carry a creative, expressive energy with the added dimension of the 1 and 2 energies working together - independence and relationship, directing the creative impulse.",
    heroSubtitle: "Your birthday energy is expressive and socially intelligent - creativity that knows how to land.",
    meaning: [
      "Birthday number 12 reduces to 3 (1+2=3), carrying the core expressive, creative energy of the 3 along with the distinctive qualities that come from the 1 and 2 components. The result is a creative energy that combines independent drive (1) with relational sensitivity (2) - producing expression that's both original and genuinely responsive to its audience.",
      "People born on the 12th tend to communicate with a particular quality of warmth and intelligence - they have things to say and they know how to say them in ways that land. The creative instinct is present, but it's shaped by a genuine awareness of other people.",
      "The practical pattern is a consistent social creativity - the ability to make connections between ideas and between people, to find the angle that makes something more interesting, and to communicate in ways that feel both fresh and genuinely accessible."
    ],
    traits: [
      "Creative, sociable, and attuned to audience - birthday 12 people have a quality of expressive intelligence that's both original and responsive. They read rooms while also bringing something genuinely new.",
      "The shadow can involve the 1 and 3 energies working against each other: the independence of the 1 resisting the collaboration that the creative work genuinely needs, or the expressive quality of the 3 being channeled into performance rather than genuine communication.",
      "What's distinctive about birthday 12 is the ability to make complexity accessible - to take something that's genuinely complex and find the way to express it that makes other people feel smart for understanding it."
    ],
    strengths: [
      { title: "Warm and original expression", desc: "Birthday 12 communicates with a combination of originality and genuine warmth that makes their expression genuinely distinctive." },
      { title: "Social creativity", desc: "The ability to make connections - between ideas, between people, between different ways of seeing things - is consistent and real." }
    ],
    challenges: [
      { title: "Scattered focus", desc: "The 3's generative tendency combined with the 1's restlessness can produce more starts than completions. Discipline about seeing things through is important." },
      { title: "Managing the two energies", desc: "The independence of the 1 and the relational quality of the 2 don't always cooperate smoothly. Learning to work with both rather than oscillating between them is the 12's particular work." }
    ],
    faq: [
      {
        q: "What is birthday number 12?",
        a: ["Birthday 12 reduces to 3 and carries the core creative, expressive energy of that number. The 1 and 2 components add a quality of independent drive and relational attunement that shapes the creative expression - producing communication that's both original and genuinely responsive to the people it's meant for."]
      },
      {
        q: "What careers suit birthday 12?",
        a: ["Any career where creative expression and social intelligence are both assets: writing, teaching, marketing, public relations, counseling, performing arts, client-facing creative roles. Birthday 12 is particularly effective where the work requires both originality and genuine connection with an audience."]
      },
      {
        q: "What is the shadow of birthday 12?",
        a: ["Scattered energy, difficulty sustaining projects past the initial creative phase, and the tension between independence and collaboration that the 1 and 2 components can generate."]
      }
    ]
  },
  {
    day: 13,
    reducedTo: 4,
    title: "The Disciplined Creator",
    shortDesc: "Born on the 13th (reduces to 4), you carry a practical, structured energy with a creative undertone. The 1 and 3 make the 4's discipline more expressive.",
    heroSubtitle: "Your birthday energy combines creativity with discipline - the ability to actually build what you can envision.",
    meaning: [
      "Birthday 13 reduces to 4 (1+3=4) and carries the 4's practical, structural energy - but the 1 and 3 components give this birthday a more creative and expressive character than the straight 4 energy often has. Birthday 13 people tend to combine artistic or creative instinct with the discipline and follow-through to actually develop it.",
      "The 4 energy is about building - about the satisfaction of doing things properly, the endurance to see projects through, the practical intelligence that turns ideas into reality. The 1 and 3 give the building a more original and expressive direction.",
      "The practical pattern is a consistent ability to make things real - to take creative or ambitious ideas and actually execute them, rather than leaving them in the visionary phase. Birthday 13 bridges imagination and delivery."
    ],
    traits: [
      "Disciplined, practical, and more creative than the surface suggests - birthday 13 people tend to have an instinct for craft: for the patient, sustained work that develops skill over time.",
      "The shadow can be the 4's rigidity combined with the 1's stubbornness - a double dose of resistance to input and change. Birthday 13 needs to actively maintain flexibility.",
      "What's interesting about birthday 13 is the specific combination of creative vision and practical follow-through that's genuinely rare. Many people have one or the other; birthday 13 tends to have both."
    ],
    strengths: [
      { title: "Creative follow-through", desc: "Birthday 13 has both the creative vision and the discipline to develop it. This combination produces genuinely excellent work when the direction is right." },
      { title: "Craft orientation", desc: "The patience to develop skills over time - to move through the awkward middle phase of learning into genuine mastery - is consistent with this birthday." }
    ],
    challenges: [
      { title: "Rigidity", desc: "The 4's structural quality combined with the 1's conviction can produce a particularly stubborn resistance to new approaches and outside input." },
      { title: "Over-structuring creativity", desc: "The 4 energy can sometimes constrain the creative expression rather than channel it productively. Birthday 13 needs to distinguish between structure that enables creativity and structure that blocks it." }
    ],
    faq: [
      {
        q: "What is birthday number 13?",
        a: ["Birthday 13 reduces to 4 and carries the structured, practical 4 energy - but with the creative and independent qualities of the 1 and 3 components shaping it. People born on the 13th tend to combine creative instinct with the discipline to actually develop it."]
      },
      {
        q: "Is 13 an unlucky birthday number?",
        a: ["No - that's a cultural superstition with no basis in numerology. Birthday 13 carries productive energy: the combination of creativity and discipline that makes it possible to actually build what you can envision."]
      },
      {
        q: "What is the shadow of birthday 13?",
        a: ["Rigidity and the over-structuring of creative energy. The double dose of stubbornness from the 1 and 4 components is the main pattern to watch."]
      }
    ]
  },
  {
    day: 14,
    reducedTo: 5,
    title: "The Free Spirit",
    shortDesc: "Born on the 14th (reduces to 5), you carry an adventurous, freedom-oriented energy with a grounding undertone. The 1 and 4 give the 5's freedom more direction.",
    heroSubtitle: "Your birthday energy is curious, free-moving, and more grounded than it appears - freedom with direction.",
    meaning: [
      "Birthday 14 reduces to 5 (1+4=5) and carries the 5's love of freedom and variety - but the 1 and 4 components give the freedom a more directed quality. Birthday 14 people tend to want freedom for a purpose: not just movement for its own sake, but the freedom to pursue what actually matters.",
      "The 5 energy is about adaptability, curiosity, and the vitality of genuine engagement with experience. The 1 adds independent drive; the 4 adds a degree of practical groundedness that keeps the exploration from becoming purely diffuse.",
      "The practical pattern is a consistent quality of purposeful exploration - moving through different experiences and environments with a quality of genuine learning rather than just sensation-seeking."
    ],
    traits: [
      "Curious, adaptable, and more purposeful than pure 5 energy - birthday 14 people explore with direction. They're not just seeing what's there; they're looking for something specific, even when they couldn't say exactly what.",
      "The shadow is the 5's commitment difficulty combined with the 1's stubbornness - the freedom is strongly defended, and the flexibility that the 4 tries to contribute can get overridden.",
      "What's interesting about birthday 14 is the specific tension between groundedness and movement that the 1, 4, and 5 create together - and the way resolving that tension tends to produce people who are both genuinely free and genuinely capable."
    ],
    strengths: [
      { title: "Purposeful freedom", desc: "Birthday 14 moves through the world with curiosity and energy, but toward something - the exploration is directed even when it looks spontaneous." },
      { title: "Practical adaptability", desc: "The 4's groundedness makes birthday 14's adaptability more useful than pure 5 energy - able to recalibrate without losing practical effectiveness." }
    ],
    challenges: [
      { title: "Commitment to structure", desc: "The 5's love of freedom and the 1's independence can make the reliable, structured follow-through that the 4 represents feel constraining. Finding the right level of structure is the birthday 14 balance challenge." },
      { title: "Over-independence", desc: "The combination of 1 and 5 energy can produce a particularly strong resistance to dependence on other people - which, taken too far, limits the kind of deep collaboration and partnership that the work often actually needs." }
    ],
    faq: [
      {
        q: "What is birthday number 14?",
        a: ["Birthday 14 reduces to 5 and carries the curious, freedom-oriented 5 energy - shaped by the 1's independence and the 4's practical grounding. People born on the 14th tend to be purposefully exploratory - moving through experiences with genuine curiosity and more direction than pure 5 energy usually brings."]
      },
      {
        q: "What careers suit birthday 14?",
        a: ["Careers with built-in variety, autonomy, and genuine challenge: journalism, consulting, entrepreneurship, research, travel-related work, sales. The combination of adaptability and purposefulness makes birthday 14 effective in roles that require both."]
      },
      {
        q: "What is the shadow of birthday 14?",
        a: ["The 5's commitment difficulty amplified by the 1's strong independence - making sustained commitment to structures and relationships harder than it needs to be."]
      }
    ]
  },
  {
    day: 15,
    reducedTo: 6,
    title: "The Devoted",
    shortDesc: "Born on the 15th (reduces to 6), you carry a warm, responsible energy with the 1's initiative and the 5's adaptability giving the care more reach.",
    heroSubtitle: "Your birthday energy is caring and capable - devotion combined with the drive to actually make things better.",
    meaning: [
      "Birthday 15 reduces to 6 (1+5=6) and carries the nurturing, responsible energy of the 6 - but the 1 and 5 components give it initiative and adaptability. Birthday 15 people don't just care; they act on the care. The nurturing is active rather than passive.",
      "The 6 energy is about love and responsibility - about the genuine investment in the wellbeing of others. The 1 adds the drive to do something about it; the 5 adds the flexibility to find the right approach for the specific situation.",
      "The practical pattern is a consistent quality of responsive care - showing up appropriately for what each situation needs rather than applying a fixed formula of help. Birthday 15 reads situations well and responds with genuine warmth and real effectiveness."
    ],
    traits: [
      "Warm, capable, and proactively caring - birthday 15 people combine genuine nurturing instinct with the initiative and adaptability to actually do something with it. They don't just want things to be better; they make them better.",
      "The shadow is the 6's over-giving tendencies amplified by the 1's difficulty asking for help - producing a pattern of giving without receiving that can eventually become genuinely depleting.",
      "What's distinctive about birthday 15 is the specific quality of active love - not the patient, steady holding of birthday 6, but something more engaged and proactive."
    ],
    strengths: [
      { title: "Active care", desc: "Birthday 15 combines the nurturing instinct of the 6 with the initiative to act on it - producing a pattern of proactive, responsive care that's both genuine and effective." },
      { title: "Adaptable warmth", desc: "The 5 component gives birthday 15's care a quality of responsiveness - able to find the right approach for the specific person and situation rather than applying one formula universally." }
    ],
    challenges: [
      { title: "Giving without receiving", desc: "The combination of 6 and 1 energies can produce particularly strong giving without asking - caring deeply while making the self-sufficiency too conspicuous to invite reciprocal care." },
      { title: "Restlessness in care", desc: "The 5's need for variety can create discomfort with the steady, long-term nature that some caring relationships require. Birthday 15 may need to work at maintaining consistent care over time." }
    ],
    faq: [
      {
        q: "What is birthday number 15?",
        a: ["Birthday 15 reduces to 6 and carries the nurturing, responsible 6 energy - activated by the 1's initiative and made more flexible by the 5's adaptability. People born on the 15th tend to be proactively caring - combining genuine warmth with the drive to actually improve situations."]
      },
      {
        q: "What is the shadow of birthday 15?",
        a: ["Over-giving without receiving, and occasionally the restlessness of the 5 making the steady long-term commitment that some care relationships require feel difficult."]
      },
      {
        q: "What careers suit birthday 15?",
        a: ["Healthcare, counseling, teaching, community leadership, social work, creative fields with a service orientation. Birthday 15 is particularly effective in roles where both warmth and initiative matter."]
      }
    ]
  },
  {
    day: 16,
    reducedTo: 7,
    title: "The Deep Analyst",
    shortDesc: "Born on the 16th (reduces to 7), you carry an introspective, analytical energy with an added quality of intensity - the 1 and 6 give the 7's search a more personal and responsible dimension.",
    heroSubtitle: "Your birthday energy is deeply perceptive - driven to understand both the world and your own place in it.",
    meaning: [
      "Birthday 16 reduces to 7 (1+6=7) and carries the analytical, introspective energy of the 7 - but with the 1's independent drive and the 6's sense of responsibility shaping it. Birthday 16 people tend to apply their considerable analytical depth to personal and relational questions as much as to abstract ones.",
      "The 7 energy is about understanding - about getting beneath the surface of things and finding out what's actually true. The 1 adds independent intellectual courage; the 6 adds a quality of personal investment in the search.",
      "Birthday 16 is sometimes associated in numerology with significant inner work - with a karmic or spiritual dimension that produces both greater depth of understanding and more challenging personal circumstances. Whether or not this resonates with you, the birthday does tend to indicate a person who has genuinely wrestled with difficult questions."
    ],
    traits: [
      "Deeply introspective, analytically capable, and personally invested in understanding - birthday 16 people are driven to know themselves as much as to know the world. The search turns inward as readily as it turns outward.",
      "The shadow is the intensity of the inner life combined with the 1's resistance to vulnerability - making the self-knowledge that the 7 reaches for difficult to share or act on in ways that involve other people.",
      "What's distinctive about birthday 16 is the quality of hard-won wisdom - the understanding that comes not just from thinking but from having genuinely been through something and having thought carefully about what it meant."
    ],
    strengths: [
      { title: "Hard-won understanding", desc: "Birthday 16's analysis doesn't stay at the theoretical level. It's tested against actual experience and refined by what that experience reveals." },
      { title: "Intellectual courage", desc: "The 1's independent thinking gives birthday 16's analysis a quality of genuine courage - willing to follow an argument to uncomfortable conclusions and to act on what they find." }
    ],
    challenges: [
      { title: "Intensity of the inner life", desc: "The combination of the 7's depth and the 16's additional dimension of personal investment can produce an inner life that's genuinely turbulent and difficult to manage." },
      { title: "Resistance to vulnerability", desc: "The 1's independence and the 7's privacy can make sharing the real inner world - even with people who matter - genuinely difficult. The wisdom accumulates but sometimes stays internal." }
    ],
    faq: [
      {
        q: "What is birthday number 16?",
        a: ["Birthday 16 reduces to 7 and carries the introspective, analytical 7 energy - shaped by the 1's independent drive and the 6's personal investment. People born on the 16th tend to apply genuine analytical depth to personal and relational questions, and often carry a quality of hard-won wisdom."]
      },
      {
        q: "Is 16 a karmic birthday number?",
        a: ["Some numerology traditions associate 16 with karmic significance - specifically with the 16/7 karmic debt, suggesting lessons around ego and spiritual alignment. Whether or not this framework resonates, the birthday 16 pattern does tend to involve significant inner work and genuine personal wrestling with difficult questions."]
      },
      {
        q: "What is the shadow of birthday 16?",
        a: ["Intensity of the inner life combined with resistance to vulnerability - the deep understanding accumulates but stays internal rather than connecting with other people in ways that would make it more useful."]
      }
    ]
  },
  {
    day: 17,
    reducedTo: 8,
    title: "The Strategic Achiever",
    shortDesc: "Born on the 17th (reduces to 8), you carry an ambitious, achievement-oriented energy with the independent drive of the 1 and the analytical depth of the 7 shaping it.",
    heroSubtitle: "Your birthday energy is intelligent and purposeful - ambition directed by careful thinking.",
    meaning: [
      "Birthday 17 reduces to 8 (1+7=8) and carries the ambitious, authoritative energy of the 8 - but with the 1's independent initiative and the 7's analytical depth giving it a more strategic and careful character. Birthday 17 people tend to pursue achievement with more thorough prior analysis than straight 8 energy often involves.",
      "The 8 energy is about power and achievement at scale. The 1 adds independence and original direction; the 7 adds the depth of analysis that makes the achievement genuinely strategic rather than just driven.",
      "Birthday 17 is a birthday that tends to produce achievement through intelligence as much as through force - people who get to significant outcomes because they've thought them through, not just because they pushed hard enough."
    ],
    traits: [
      "Ambitious, analytical, and independent - birthday 17 people combine the drive for significant achievement with the intellectual capacity to pursue it strategically. They tend to be both harder-working and smarter about where to apply the effort than pure 8 energy.",
      "The shadow is the combination of the 1's stubbornness, the 7's privacy, and the 8's tendency to conflate worth with achievement - producing a person who works in isolation, defends their strategy vigorously, and ties too much self-worth to outcomes.",
      "What's distinctive about birthday 17 is the quality of earned authority - the kind that comes from genuinely having done the thinking and the work, rather than just projecting power."
    ],
    strengths: [
      { title: "Strategic intelligence", desc: "Birthday 17 combines ambition with careful analysis - pursuing achievement through thought-out strategies rather than just force of will." },
      { title: "Independent capability", desc: "The 1's self-reliance combined with the 7's depth and the 8's executive capacity produces a person who can get significant things done on their own." }
    ],
    challenges: [
      { title: "Isolation as strategy", desc: "The 1's independence and the 7's privacy can lead birthday 17 to work alone even when collaboration would produce better results. The capability is real; the unwillingness to leverage others can limit the scale." },
      { title: "Worth and achievement", desc: "The 8's core shadow around conflating self-worth with results is present and important to work on." }
    ],
    faq: [
      {
        q: "What is birthday number 17?",
        a: ["Birthday 17 reduces to 8 and carries the ambitious, achievement-oriented 8 energy - shaped by the 1's independent drive and the 7's analytical depth. People born on the 17th tend to pursue significant goals through careful strategy as much as through raw effort."]
      },
      {
        q: "What careers suit birthday 17?",
        a: ["Any field where ambition and analytical intelligence both matter: finance, law, entrepreneurship, research-driven businesses, strategic consulting, technology leadership. Birthday 17 is particularly effective where the achievement requires genuine thinking, not just execution."]
      },
      {
        q: "What is the shadow of birthday 17?",
        a: ["Working in isolation when collaboration would serve better, the stubbornness that comes from the combination of 1 and 7 energy, and the 8's core pattern of conflating worth with outcomes."]
      }
    ]
  },
  {
    day: 18,
    reducedTo: 9,
    title: "The Compassionate Leader",
    shortDesc: "Born on the 18th (reduces to 9), you carry a broadly compassionate energy with the initiative of the 1 and the authority of the 8 giving it real reach.",
    heroSubtitle: "Your birthday energy combines wisdom and drive - the capacity to actually do something significant about what you care about.",
    meaning: [
      "Birthday 18 reduces to 9 (1+8=9) and carries the broad, compassionate energy of the 9 - but with the 1's initiative and the 8's executive capability giving it considerable practical reach. Birthday 18 people don't just see the larger picture; they have the drive and the capacity to actually act on it.",
      "The 9 energy is about universal compassion and meaningful contribution. The 1 adds independent initiative; the 8 adds the power and practical intelligence to pursue significant outcomes. Birthday 18 is a birthday that tends to produce genuine leadership in service of something larger than personal gain.",
      "The practical pattern is a consistent ability to combine vision with execution - to see what needs to change and to have the drive and capability to do something about it."
    ],
    traits: [
      "Visionary, capable, and oriented toward genuine contribution - birthday 18 people tend to have both the wisdom to identify what matters and the drive to pursue it effectively. The combination is rare.",
      "The shadow involves the interaction between the 1's independence, the 8's power orientation, and the 9's idealism. Any of these can work against the others: the independence can become isolation, the power can become its own end, the idealism can become paralysis when reality doesn't cooperate.",
      "At their best, birthday 18 people are among the most effective forces for genuinely significant positive change - combining clarity about what matters with the capability to do something about it."
    ],
    strengths: [
      { title: "Purposeful leadership", desc: "Birthday 18 combines the vision to see what needs to change with the initiative and capability to actually pursue it. This is the particular gift of this birthday at its best." },
      { title: "Resilient conviction", desc: "The 1's independence combined with the 8's resilience and the 9's sense of meaning produces a person who can maintain direction under significant pressure." }
    ],
    challenges: [
      { title: "Integration of energies", desc: "The 1, 8, and 9 don't always cooperate - independence can conflict with the collective orientation of the 9, power can conflict with the service orientation. Integrating them takes conscious work." },
      { title: "Over-extension", desc: "The combination of drive (1), capability (8), and broad compassion (9) can produce genuinely unsustainable commitments - taking on more than any single person can maintain." }
    ],
    faq: [
      {
        q: "What is birthday number 18?",
        a: ["Birthday 18 reduces to 9 and carries the broad, compassionate 9 energy - energized by the 1's initiative and given real reach by the 8's executive capability. People born on the 18th tend to combine genuine concern for what matters with the drive and capacity to actually do something about it."]
      },
      {
        q: "What is the shadow of birthday 18?",
        a: ["The difficulty of integrating three strong and sometimes conflicting energies (1, 8, 9), and the over-extension that comes from combining drive, capability, and broad compassion without adequate attention to limits."]
      },
      {
        q: "What careers suit birthday 18?",
        a: ["Leadership roles with genuine social impact: social enterprise, nonprofit leadership, medicine, public service, humanitarian work, large-scale creative projects. Birthday 18 is particularly effective where the work requires both vision and execution at significant scale."]
      }
    ]
  },
  {
    day: 19,
    reducedTo: 1,
    title: "The Independent",
    shortDesc: "Born on the 19th (reduces to 1), you carry a strongly independent, self-reliant energy. The 9's wisdom combines with the 1's leadership - this is leadership through example.",
    heroSubtitle: "Your birthday energy is powerfully independent - forged through experience and pointed toward what matters.",
    meaning: [
      "Birthday 19 reduces to 1 (1+9=10, 1+0=1) and carries the independent, leadership energy of the 1. But the path through 9 and then 10 gives this birthday's 1 energy a particular quality - the independence has been tested, the leadership is informed by a broader perspective, and the self-reliance is genuine rather than assumed.",
      "People born on the 19th tend to carry the 1's drive toward independence at a high intensity - there's a quality of strong individual will and genuine self-determination that's immediately perceptible. Birthday 19 is sometimes associated in numerology with the 19/1 karmic debt, suggesting lessons around appropriate use of power and avoiding the isolation that comes from relying only on yourself.",
      "The practical pattern is a consistent quality of self-made leadership - the kind that comes from having actually figured things out rather than inherited a position."
    ],
    traits: [
      "Strongly independent, self-reliant, and genuinely capable - birthday 19 people have a quality of self-made competence that others respect. They've usually earned their confidence rather than assumed it.",
      "The shadow is the isolation that can accompany very strong independence - the difficulty asking for help even when help would clearly serve the situation, and the tendency to treat self-reliance as the solution to problems that actually require collaboration.",
      "Birthday 19 often carries a quality of resilience that comes from having navigated significant challenges: the independence is real because it's been tested."
    ],
    strengths: [
      { title: "Earned self-reliance", desc: "Birthday 19's independence is genuine rather than performed - based on actual capability that has usually been developed through real challenges." },
      { title: "Leadership through example", desc: "The 9 component gives birthday 19's leadership a quality of wisdom and service orientation that pure 1 energy doesn't always have." }
    ],
    challenges: [
      { title: "Hyper-independence", desc: "The particularly strong 1 energy of birthday 19 can produce an over-reliance on self that makes genuine collaboration and asking for help genuinely difficult." },
      { title: "Lessons around power", desc: "The 19/1 karmic association in numerology points to lessons about using power in service rather than ego - a pattern worth being conscious of." }
    ],
    faq: [
      {
        q: "What is birthday number 19?",
        a: ["Birthday 19 reduces to 1 (via 10) and carries a particularly strong version of the 1's independent, self-directed energy. The path through the 9 gives this independence a quality of wisdom and earned capability. People born on the 19th tend to be genuinely self-reliant and to lead through example rather than position."]
      },
      {
        q: "What is the 19/1 karmic debt?",
        a: ["Some numerology traditions identify 19 as a karmic debt number associated with lessons around appropriate use of power and the dangers of hyper-independence. Whether or not this framework resonates, the birthday 19 pattern does tend to involve significant self-development work around balancing independence with genuine connection."]
      },
      {
        q: "What is the shadow of birthday 19?",
        a: ["Hyper-independence - the difficulty asking for help and accepting collaboration, taken to the point where it limits effectiveness and creates genuine isolation."]
      }
    ]
  },
  {
    day: 20,
    reducedTo: 2,
    title: "The Sensitive Peacemaker",
    shortDesc: "Born on the 20th (reduces to 2), you carry the relational, diplomatic energy of the 2 with the 0's amplifying quality - making the sensitivity and attunement particularly strong.",
    heroSubtitle: "Your birthday energy is deeply attuned and genuinely relational - sensitive to what's needed and genuinely motivated to provide it.",
    meaning: [
      "Birthday 20 reduces to 2 (2+0=2) and carries the cooperative, relational energy of the 2 - amplified by the 0, which intensifies and expands the qualities of the number it accompanies. Birthday 20 people tend to have the 2's diplomacy and sensitivity at a particularly strong level.",
      "The 2 energy is about connection, cooperation, and the quiet skill of making things work between people. The 0's presence amplifies this - making birthday 20's sensitivity and attunement genuinely exceptional, while also intensifying the challenges that come with it.",
      "The practical pattern is a consistent quality of extraordinary attunement - picking up on subtleties, reading emotional undercurrents, and responding with a degree of care and sensitivity that other people often find remarkable."
    ],
    traits: [
      "Profoundly sensitive, genuinely attentive, and deeply oriented toward harmony - birthday 20 people have the 2 energy at its most developed. The diplomacy is real, the attunement is real, and the need for genuine connection is real.",
      "The shadow is the 2's challenges amplified: the conflict avoidance can be more pronounced, the sensitivity can be harder to manage, and the loss of self in relationship can go deeper.",
      "What's distinctive about birthday 20 is the extraordinary quality of emotional intelligence - the ability to read and respond to what's going on for other people at a genuinely subtle level."
    ],
    strengths: [
      { title: "Exceptional attunement", desc: "Birthday 20 reads people and situations at a particularly fine-grained level. The emotional intelligence is genuine and consistent." },
      { title: "Deep relational capability", desc: "The capacity for genuine, sustained connection - for the kind of partnership that really knows and supports the other person - is strong in birthday 20." }
    ],
    challenges: [
      { title: "Amplified sensitivity", desc: "The 0's intensification means birthday 20's sensitivity requires more active management - more recovery time, more intentional protection of the inner environment." },
      { title: "Over-accommodation", desc: "The particularly strong 2 energy can produce particularly strong conflict avoidance and self-subordination. The work toward directness and appropriate self-assertion is important." }
    ],
    faq: [
      {
        q: "What is birthday number 20?",
        a: ["Birthday 20 reduces to 2 and carries the cooperative, attuned 2 energy - amplified by the 0's intensifying presence. People born on the 20th tend to have the 2's relational and diplomatic qualities at a particularly strong level."]
      },
      {
        q: "What is the shadow of birthday 20?",
        a: ["Amplified versions of the 2's core challenges: pronounced conflict avoidance, intense sensitivity that requires active management, and the tendency to lose self in relationships."]
      },
      {
        q: "What careers suit birthday 20?",
        a: ["Any career where the relational and facilitative qualities are central: counseling, mediation, teaching, social work, healthcare, community building. The exceptional emotional intelligence is a genuine professional asset."]
      }
    ]
  },
  {
    day: 21,
    reducedTo: 3,
    title: "The Expressive Leader",
    shortDesc: "Born on the 21st (reduces to 3), you carry a creative, expressive energy with the 2's relational intelligence and the 1's initiative giving it both depth and direction.",
    heroSubtitle: "Your birthday energy is expressive and relational - creativity that brings people in rather than just showing off.",
    meaning: [
      "Birthday 21 reduces to 3 (2+1=3) and carries the creative, expressive energy of the 3 - shaped by the 2's relational intelligence and the 1's independent drive. Birthday 21 people tend to communicate with warmth and originality simultaneously - the creativity lands because the relational awareness ensures it meets people where they are.",
      "The 3 energy is about expression, creativity, and the joy of communication. The 2 gives it relational depth; the 1 gives it direction and initiative. Birthday 21 produces a particularly effective communicator - someone who can both originate and connect.",
      "The practical pattern is a consistent quality of inclusive creativity - expression that draws people in rather than just demonstrating capability. Birthday 21 people tend to make other people feel part of the creative process."
    ],
    traits: [
      "Creative, socially intelligent, and genuinely inclusive - birthday 21 people combine original expression with the relational awareness to make it land. The combination is particularly effective in collaborative and communicative contexts.",
      "The shadow involves the interaction between the 2's desire for harmony and the 1's independence - the creative expression can become oriented too much toward what others want (2 shadow) or too much toward personal vision without relational awareness (1 shadow).",
      "What's distinctive about birthday 21 is the quality of generous creativity - expression that gives something rather than just announcing something."
    ],
    strengths: [
      { title: "Inclusive expression", desc: "Birthday 21 communicates in ways that bring people in rather than just displaying creative capability. The relational intelligence shapes the expression." },
      { title: "Initiative with warmth", desc: "The 1's drive to initiate is tempered by the 2's genuine interest in others - producing a leadership quality that's both directed and warm." }
    ],
    challenges: [
      { title: "Tension between 2 and 1", desc: "The relational accommodation of the 2 and the independence of the 1 can create ongoing tension about how much to prioritize others' preferences versus genuine creative vision." },
      { title: "Same as birthday 3", desc: "The core 3 challenges - scattered focus, difficulty with depth - are present, though the 2 and 1 components give them some additional texture." }
    ],
    faq: [
      {
        q: "What is birthday number 21?",
        a: ["Birthday 21 reduces to 3 and carries the creative, expressive 3 energy - shaped by the 2's relational awareness and the 1's initiative. People born on the 21st tend to be particularly effective communicators: creative, warm, and good at making their expression genuinely connect with people."]
      },
      {
        q: "What careers suit birthday 21?",
        a: ["Any career where creative expression and relational intelligence are both assets: teaching, writing, public relations, community leadership, creative direction, counseling, performing arts."]
      },
      {
        q: "What is the shadow of birthday 21?",
        a: ["The tension between relational accommodation (2) and independent creative vision (1), and the core 3 challenges of scattered focus and difficulty with sustained depth."]
      }
    ]
  },
  {
    day: 22,
    reducedTo: null,
    title: "The Master Builder",
    shortDesc: "Born on the 22nd - a master number day - you carry an elevated practical energy aimed at significant, lasting achievement. This is the birthday of those who build things that matter.",
    heroSubtitle: "Your birthday energy is the most architecturally powerful in numerology - built for work that changes conditions for many people.",
    meaning: [
      "Birthday number 22 is the Master Builder - a master number that doesn't reduce to 4. It carries the 4's practical, structural intelligence at a greatly elevated scale and with an explicitly universal dimension. People born on the 22nd tend to have a birthday energy oriented toward significant, lasting construction - not just personal achievement, but building things that improve conditions for many people over a long time.",
      "As a secondary influence, birthday 22 adds an extraordinary practical capability to the primary chart. It tends to make people more effective at large-scale organization, more able to translate vision into reality, and more oriented toward work that matters beyond personal advancement.",
      "The challenge of birthday 22 is living up to what the number is reaching for. The potential is genuinely large, and the gap between that potential and the current situation can be a source of either sustained motivation or quiet frustration, depending on how consciously the number is being worked with."
    ],
    traits: [
      "Powerfully capable, organizationally intelligent, and oriented toward significant work - birthday 22 people tend to carry a quality of practical vision that others immediately recognize as extraordinary. They see how to build things, and they can.",
      "The shadow is the paralysis of the scale - the vision is so large that the available starting points seem inadequate. Birthday 22 needs to build from where they actually are, with what's actually available.",
      "What's genuinely distinctive about birthday 22 is the combination of vision and practicality. Many people have big ideas; few can actually build them. Birthday 22 tends to have both."
    ],
    strengths: [
      { title: "Practical vision", desc: "Birthday 22 can see how ambitious ideas could actually be built - what the specific steps would be, what resources would be needed, how people could be organized. This is the master builder's distinctive gift." },
      { title: "Large-scale effectiveness", desc: "In contexts that require organizing significant effort toward significant goals, birthday 22 is genuinely exceptional." }
    ],
    challenges: [
      { title: "Scale of the vision versus available resources", desc: "Birthday 22 can feel the gap between what needs to be built and what's currently available to build it - and that gap can produce paralysis if it's not managed as part of the building process rather than as a prerequisite." },
      { title: "Perfectionism", desc: "The high standard birthday 22 holds for the work can delay starting or releasing things past the point of usefulness." }
    ],
    faq: [
      {
        q: "What is birthday number 22?",
        a: ["Birthday 22 is the Master Builder - a master number that carries the 4's practical energy at a greatly elevated scale and with a universal purpose. People born on the 22nd tend to have an extraordinary practical capability for building things that matter at significant scale."]
      },
      {
        q: "Why isn't 22 reduced to 4?",
        a: ["22 is a master number in numerology - recognized as carrying special significance that would be lost by reduction. It contains the 4 energy but operates at a higher level."]
      },
      {
        q: "What is the shadow of birthday 22?",
        a: ["The paralysis that can come from the scale of the vision - waiting for conditions to be right rather than building from what's actually here. Also perfectionism that keeps the work in perpetual preparation."]
      }
    ]
  },
  {
    day: 23,
    reducedTo: 5,
    title: "The Versatile Explorer",
    shortDesc: "Born on the 23rd (reduces to 5), you carry a vibrant, curious energy with the 2's relational awareness and the 3's creative expression giving the freedom-seeking a social and creative dimension.",
    heroSubtitle: "Your birthday energy is socially alive - curious, expressive, and genuinely engaging wherever you go.",
    meaning: [
      "Birthday 23 reduces to 5 (2+3=5) and carries the versatile, freedom-oriented 5 energy - shaped by the 2's relational attunement and the 3's expressive creativity. Birthday 23 people tend to be particularly socially alive: curious about people, expressive in their engagement, and genuinely good at making connections across different contexts.",
      "This is sometimes considered one of the more vibrant birthday energies in numerology - the combination of the 2, 3, and 5 creates a quality of engaged, curious, relational aliveness that's genuinely attractive.",
      "The practical pattern is a consistent quality of social energy - moving through different environments and different people with genuine interest and warmth, making connections that others wouldn't make."
    ],
    traits: [
      "Curious, expressive, and genuinely relational - birthday 23 people have a quality of social aliveness that's immediately engaging. They're interested in people and it shows.",
      "The shadow involves the 5's commitment difficulty combined with the 2's tendency to over-accommodate and the 3's scattered energy. All three can pull in different directions.",
      "What's distinctive about birthday 23 is the quality of genuine connection-making - the ability to bring different people and ideas together in ways that create real value."
    ],
    strengths: [
      { title: "Social intelligence", desc: "Birthday 23 combines the 2's relational attunement with the 3's expressiveness and the 5's curiosity - producing a particularly warm and engaging social intelligence." },
      { title: "Connection across contexts", desc: "The combination of adaptability (5), relational awareness (2), and creative thinking (3) makes birthday 23 effective at bridging different worlds and making unexpected connections." }
    ],
    challenges: [
      { title: "Consistency", desc: "The three energies (2, 3, 5) can pull in different directions - toward accommodation, toward expression, toward freedom - in ways that create inconsistency." },
      { title: "Depth versus breadth", desc: "The social aliveness can stay at the surface - making many connections without going deep enough for any of them to be genuinely nourishing." }
    ],
    faq: [
      {
        q: "What is birthday number 23?",
        a: ["Birthday 23 reduces to 5 and carries the curious, versatile 5 energy - made more socially alive by the 2's relational attunement and the 3's creative expressiveness. People born on the 23rd tend to be genuinely engaging and good at making connections across different contexts."]
      },
      {
        q: "What is the shadow of birthday 23?",
        a: ["The potential conflict between the 2's accommodating tendency, the 3's scattered creative energy, and the 5's desire for freedom - and the risk of staying at the engaging surface without going deep enough."]
      },
      {
        q: "What careers suit birthday 23?",
        a: ["Any role where social intelligence, creativity, and adaptability are all assets: sales, consulting, marketing, community building, creative direction, teaching, public relations."]
      }
    ]
  },
  {
    day: 24,
    reducedTo: 6,
    title: "The Devoted Builder",
    shortDesc: "Born on the 24th (reduces to 6), you carry a warm, responsible energy with the 2's cooperative nature and the 4's practical discipline giving the care structure and endurance.",
    heroSubtitle: "Your birthday energy is devoted and practical - care that builds something lasting.",
    meaning: [
      "Birthday 24 reduces to 6 (2+4=6) and carries the nurturing, responsible energy of the 6 - with the 2's cooperative nature and the 4's practical discipline giving the care real structure. Birthday 24 people don't just want things to be good for the people they love; they have both the relational attunement to know what's needed and the practical capability to provide it consistently.",
      "This is considered in numerology to be among the most genuinely family and community-oriented birthday energies - the combination of 2, 4, and 6 produces a consistent quality of devoted, sustained, practically intelligent care.",
      "The practical pattern is a consistent quality of reliable love - showing up, following through, doing the work that relationship and community require over time, not just in moments of inspiration."
    ],
    traits: [
      "Warm, reliable, practically caring, and deeply invested in the wellbeing of the people they love - birthday 24 people are among the most consistently devoted birthday energies in numerology.",
      "The shadow involves the 4's rigidity and the 6's over-giving combining in ways that can be particularly difficult to interrupt - the structure supports the giving pattern rather than containing it.",
      "What's distinctive about birthday 24 is the quality of durable, practical love - not the passionate early intensity, but the sustained, reliable presence over the long term."
    ],
    strengths: [
      { title: "Sustained devotion", desc: "Birthday 24 combines the 6's care with the 4's follow-through - producing a quality of sustained, reliable devotion that endures past the easy early phases." },
      { title: "Practical care", desc: "The 4 component gives birthday 24's caring a practical dimension - able to not just want things to be better but to actually make them better through sustained effort." }
    ],
    challenges: [
      { title: "Compounded over-giving", desc: "The combination of 2, 4, and 6 energies can produce a particularly stubborn pattern of giving more than is sustainable and finding it genuinely difficult to stop." },
      { title: "Rigidity in care", desc: "The 4 component can make birthday 24's care more prescriptive than responsive - caring in the way they think is right rather than in the way the person actually needs." }
    ],
    faq: [
      {
        q: "What is birthday number 24?",
        a: ["Birthday 24 reduces to 6 and carries the nurturing, responsible 6 energy - given structure and endurance by the 2's cooperative nature and the 4's practical discipline. People born on the 24th tend to be among the most consistently devoted and practically caring birthday energies."]
      },
      {
        q: "What is the shadow of birthday 24?",
        a: ["Compounded over-giving and the rigidity that comes from the 4 component shaping the 6's care into a fixed way of doing things rather than staying responsive to what's actually needed."]
      },
      {
        q: "What careers suit birthday 24?",
        a: ["Healthcare, social work, teaching, family services, community leadership, counseling. Also project management and any role where reliable, sustained contribution over time is the primary requirement."]
      }
    ]
  },
  {
    day: 25,
    reducedTo: 7,
    title: "The Perceptive Analyst",
    shortDesc: "Born on the 25th (reduces to 7), you carry an analytical, introspective energy with the 2's relational attunement and the 5's curiosity giving the depth a more engaged, responsive quality.",
    heroSubtitle: "Your birthday energy is curious and perceptive - analytical depth that engages with the world rather than retreating from it.",
    meaning: [
      "Birthday 25 reduces to 7 (2+5=7) and carries the analytical, introspective energy of the 7 - but with the 2's relational attunement and the 5's curiosity making the analysis more engaged and outward-facing than pure 7 energy often is. Birthday 25 people tend to be deeply perceptive without the strong introversion that sometimes accompanies the 7.",
      "The 7 energy is about understanding - about depth, analysis, and the search for what's actually true. The 2 makes the analysis more attuned to people and relationships; the 5 makes the curiosity broader and more externally directed.",
      "Birthday 25 tends to produce a quality of engaged depth - able to go as far into things as the 7 reaches for, while remaining more genuinely present with the people and environments around them."
    ],
    traits: [
      "Perceptive, analytically capable, and more socially engaged than pure 7 energy - birthday 25 people combine deep understanding with genuine interest in other people. The analysis serves the connection rather than replacing it.",
      "The shadow involves the 7's tendency toward isolation being reinforced by the 2's sensitivity and the 5's need for freedom - three energies that can all lead toward independence and withdrawal under pressure.",
      "What's distinctive about birthday 25 is the quality of engaged wisdom - the understanding is accessible to other people because it hasn't retreated entirely into the interior."
    ],
    strengths: [
      { title: "Engaged depth", desc: "Birthday 25 goes deep without losing genuine interest in other people. The analysis is connected to real human concerns rather than becoming abstract." },
      { title: "Perceptive about people", desc: "The 2 component gives birthday 25's analytical depth a particular attunement to what's going on for other people - combining understanding with genuine care." }
    ],
    challenges: [
      { title: "Multiple independent tendencies", desc: "The 7's introversion, the 2's sensitivity, and the 5's freedom-seeking can all reinforce each other's tendency toward withdrawal under pressure." },
      { title: "Analysis of relationships", desc: "The analytical quality of birthday 25 can sometimes turn on relationships themselves - over-analyzing rather than simply being present." }
    ],
    faq: [
      {
        q: "What is birthday number 25?",
        a: ["Birthday 25 reduces to 7 and carries the analytical, perceptive 7 energy - made more socially engaged by the 2's relational attunement and more broadly curious by the 5. People born on the 25th tend to combine genuine depth of understanding with real interest in other people."]
      },
      {
        q: "What is the shadow of birthday 25?",
        a: ["Multiple independent tendencies reinforcing each other under pressure - the introversion of the 7, the sensitivity of the 2, and the freedom-seeking of the 5 can all pull toward withdrawal."]
      },
      {
        q: "What careers suit birthday 25?",
        a: ["Research, psychology, writing, counseling, consulting, medicine, academia. Birthday 25 is particularly effective where deep understanding and genuine human attunement are both required."]
      }
    ]
  },
  {
    day: 26,
    reducedTo: 8,
    title: "The Responsible Achiever",
    shortDesc: "Born on the 26th (reduces to 8), you carry an ambitious, achievement-oriented energy with the 2's cooperative nature and the 6's responsibility giving the power a relational and ethical dimension.",
    heroSubtitle: "Your birthday energy is powerful and responsible - achievement that stays connected to the people and values it serves.",
    meaning: [
      "Birthday 26 reduces to 8 (2+6=8) and carries the ambitious, authoritative energy of the 8 - but with the 2's cooperative nature and the 6's strong sense of responsibility giving it a relational and ethical dimension. Birthday 26 people tend to pursue significant achievement while remaining genuinely accountable to the people they're achieving for and with.",
      "The 8 energy is about power and achievement at scale. The 2 keeps it cooperative and attuned to others; the 6 keeps it responsible and values-grounded. Birthday 26 produces achievement that tends to be both significant and genuinely earned.",
      "The practical pattern is a consistent ability to hold authority and relationship simultaneously - to be genuinely powerful without losing the relational attunement and ethical accountability that make the power worth holding."
    ],
    traits: [
      "Ambitious, responsible, and relational - birthday 26 people have the 8's executive capability without its tendency toward isolation and over-focus on outcomes. The achievement is embedded in genuine care about the people involved.",
      "The shadow involves the tension between the 8's ambition and the 6's tendency toward over-responsibility - potentially taking on both the achievement load and the relational-maintenance load in ways that aren't sustainable.",
      "What's distinctive about birthday 26 is the quality of ethically grounded authority - power that stays accountable to its purpose and the people it serves."
    ],
    strengths: [
      { title: "Ethically grounded achievement", desc: "Birthday 26 combines real ambition with genuine responsibility and relational attunement - producing a quality of achievement that stays connected to its purpose." },
      { title: "Collaborative authority", desc: "The 2 component keeps birthday 26's authority from becoming dominating - the executive capability works with people rather than over them." }
    ],
    challenges: [
      { title: "Compounded responsibility", desc: "The combination of the 8's ambition and the 6's over-giving tendency can produce someone who takes on both large goals and large relational responsibilities simultaneously - without adequate support for either." },
      { title: "Over-responsibility", desc: "Birthday 26 can feel responsible for outcomes that aren't actually theirs to carry - both the achievement and everyone else's wellbeing at the same time." }
    ],
    faq: [
      {
        q: "What is birthday number 26?",
        a: ["Birthday 26 reduces to 8 and carries the ambitious, authoritative 8 energy - given a relational and ethical dimension by the 2's cooperative quality and the 6's strong sense of responsibility. People born on the 26th tend to combine real executive capability with genuine accountability to the people they're working with and for."]
      },
      {
        q: "What is the shadow of birthday 26?",
        a: ["Taking on too much responsibility across too many fronts - both the achievement goals and the relational-maintenance load - without adequate support. Also the potential for the 6's over-giving to amplify the 8's already-demanding work orientation."]
      },
      {
        q: "What careers suit birthday 26?",
        a: ["Leadership roles with genuine relational and ethical dimensions: nonprofit leadership, social enterprise, healthcare leadership, community development, educational administration. Birthday 26 is effective where both achievement and genuine accountability to people are required."]
      }
    ]
  },
  {
    day: 27,
    reducedTo: 9,
    title: "The Wise Contributor",
    shortDesc: "Born on the 27th (reduces to 9), you carry a broadly compassionate energy with the 2's relational depth and the 7's analytical perceptiveness giving the wisdom real substance.",
    heroSubtitle: "Your birthday energy is deep and broadly caring - wisdom that's both analytically sound and genuinely feeling.",
    meaning: [
      "Birthday 27 reduces to 9 (2+7=9) and carries the broad, compassionate energy of the 9 - but with the 2's relational depth and the 7's analytical perceptiveness giving it genuine substance. Birthday 27 people tend to combine real care about what matters with the analytical depth to understand it and the relational attunement to respond to it well.",
      "This is sometimes considered one of the more complete wisdom energies in numerology - the combination of feeling (2 and 9) and thinking (7) creates a quality of understanding that is both emotionally resonant and intellectually credible.",
      "The practical pattern is a consistent quality of grounded compassion - care that's been tested against real experience and real thinking, not just sentiment."
    ],
    traits: [
      "Wise, compassionate, analytically capable, and genuinely oriented toward contribution - birthday 27 people tend to combine the depth of understanding with the broad orientation toward what matters that makes genuine wisdom possible.",
      "The shadow involves the weight of carrying all three energies simultaneously - the sensitivity of the 2, the intensity of the 7, and the idealism of the 9 can combine into a particularly heavy internal load.",
      "What's distinctive about birthday 27 is the quality of tested wisdom - understanding that has been worked through both analytically and experientially, and that shows it."
    ],
    strengths: [
      { title: "Grounded wisdom", desc: "Birthday 27 combines genuine caring with genuine analytical depth - producing wisdom that's both emotionally resonant and intellectually credible." },
      { title: "Complete understanding", desc: "The combination of relational attunement (2), analytical depth (7), and broad perspective (9) gives birthday 27 a quality of understanding that few other birthdays match." }
    ],
    challenges: [
      { title: "Weight of multiple depths", desc: "Carrying the sensitivity of 2, the intensity of 7, and the idealism of 9 simultaneously can be genuinely depleting without adequate practices for recovery and renewal." },
      { title: "Over-analysis of feeling", desc: "The 7 component can turn the 2's and 9's genuine feeling into analysis - intellectualizing what needs to be felt and expressed." }
    ],
    faq: [
      {
        q: "What is birthday number 27?",
        a: ["Birthday 27 reduces to 9 and carries the broad, compassionate 9 energy - given analytical depth by the 7 and relational attunement by the 2. People born on the 27th tend to have a quality of grounded wisdom that combines genuine feeling with genuine understanding."]
      },
      {
        q: "What is the shadow of birthday 27?",
        a: ["The weight of carrying three deep energies simultaneously, and the tendency for the 7's analytical quality to intellectualize what the 2 and 9 are feeling rather than allowing it to be expressed directly."]
      },
      {
        q: "What careers suit birthday 27?",
        a: ["Counseling, teaching, writing, research, medicine, philosophical or spiritual work, social justice. Birthday 27 is particularly effective where wisdom - both felt and reasoned - is what's actually needed."]
      }
    ]
  },
  {
    day: 28,
    reducedTo: 1,
    title: "The Balanced Leader",
    shortDesc: "Born on the 28th (reduces to 1), you carry leadership energy with the 2's relational awareness and the 8's executive capability giving the independence real reach.",
    heroSubtitle: "Your birthday energy is leadership at its most balanced - initiative, cooperation, and power working together.",
    meaning: [
      "Birthday 28 reduces to 1 (2+8=10, 1+0=1) and carries the independent leadership energy of the 1 - shaped by the 2's cooperative nature and the 8's executive capability. Birthday 28 people tend to be effective leaders who can both initiate and cooperate, who have real power and know how to work with others in exercising it.",
      "The combination of 1, 2, and 8 produces a particularly balanced leadership profile - not just the independent drive of the 1, but the relational intelligence to work effectively with people and the executive capability to make significant things happen.",
      "Birthday 28 is sometimes considered the most fully realized leadership birthday in numerology - the three energies complement each other in a way that produces leadership that is simultaneously strong, relational, and practically capable."
    ],
    traits: [
      "Capable, cooperative, and powerfully directed - birthday 28 people tend to lead well across different kinds of situations. The independence is real, but it's informed by genuine relational awareness and executive intelligence.",
      "The shadow involves the combination of 1's stubbornness, 2's accommodation, and 8's power-orientation in ways that can create internal conflict: when to push, when to accommodate, when to exercise authority.",
      "What's distinctive about birthday 28 is the quality of full-spectrum leadership - the ability to lead through different approaches depending on what the situation actually needs."
    ],
    strengths: [
      { title: "Full-spectrum leadership", desc: "Birthday 28 combines initiative (1), relational intelligence (2), and executive capability (8) - able to lead effectively across very different kinds of situations." },
      { title: "Balanced authority", desc: "The 2's cooperative quality prevents the 1 and 8 energies from becoming dominating - producing authority that works with people rather than over them." }
    ],
    challenges: [
      { title: "Integration of three strong energies", desc: "The 1, 2, and 8 don't always align naturally. Knowing when each is appropriate - independence versus cooperation versus authority - requires ongoing conscious navigation." },
      { title: "High self-expectation", desc: "The combination of strong energies can produce expectations of performance that are genuinely difficult to sustain consistently." }
    ],
    faq: [
      {
        q: "What is birthday number 28?",
        a: ["Birthday 28 reduces to 1 (via 10) and carries the independent leadership energy of the 1 - shaped by the 2's cooperative intelligence and the 8's executive capability. People born on the 28th tend to combine real leadership drive with genuine relational awareness and practical power."]
      },
      {
        q: "What is the shadow of birthday 28?",
        a: ["The difficulty of integrating three strong and sometimes conflicting energies, and the high self-expectation that comes from having such a capable birthday profile."]
      },
      {
        q: "What careers suit birthday 28?",
        a: ["Senior leadership roles where all three qualities matter: executive leadership, organizational management, political leadership, social enterprise. Birthday 28 is particularly effective where the leadership requires both strength and genuine relational capability."]
      }
    ]
  },
  {
    day: 29,
    reducedTo: 11,
    title: "The Intuitive Master",
    shortDesc: "Born on the 29th (reduces to 11), you carry a master number birthday with heightened intuition and the specific combination of the 2's sensitivity and the 9's broad wisdom.",
    heroSubtitle: "Your birthday energy is unusually perceptive and inspiring - sensitivity, wisdom, and intuition working at an elevated level.",
    meaning: [
      "Birthday 29 reduces to 11 (2+9=11) - a master number. This isn't reduced further to 2; the 11 stands, carrying the master number's elevated frequency and spiritual dimension. Birthday 29 people carry the 11's intuitive, inspirational energy alongside the specific qualities of the 2 (deep sensitivity and relational attunement) and the 9 (broad compassion and wisdom).",
      "This is a particularly rich master number birthday - the combination of the 2, 9, and 11 produces extraordinary sensitivity, genuine wisdom, and a quality of intuitive perception that can be genuinely inspiring when it's working.",
      "The challenge is the intensity. Birthday 29/11 carries a high-voltage energy that requires more active management than most birthdays. The sensitivity is greater, the internal life is richer, and the need for intentional recovery and self-care is more pronounced."
    ],
    traits: [
      "Deeply sensitive, broadly wise, and intuitively perceptive - birthday 29 people tend to carry a quality of understanding that goes beyond what the conventional analysis would produce. The perception is real and it operates at depth.",
      "The shadow involves the intensity of three deep energies (2, 9, 11) combining in ways that can be genuinely overwhelming - the sensitivity of the 2, the weight of the 9's idealism, and the high-voltage quality of the 11 can all amplify each other.",
      "At their best, birthday 29 people have a quality of inspired wisdom - understanding that comes from a genuinely deeper level and that helps other people see what they couldn't see before."
    ],
    strengths: [
      { title: "Inspired perception", desc: "Birthday 29/11 accesses understanding through channels that analytical reasoning alone doesn't reach - genuine intuition combined with deep compassion and broad wisdom." },
      { title: "Quality of inspiring others", desc: "When all three energies are working together, birthday 29 people have an extraordinary ability to help other people see more clearly and feel less alone with what they're going through." }
    ],
    challenges: [
      { title: "Managing intensity", desc: "The combination of 2, 9, and 11 energies produces a particularly high-intensity inner life that requires active management." },
      { title: "Weight of the calling", desc: "Birthday 29/11 people often have a strong sense of a larger purpose or calling - and the gap between that sense and the current circumstances can be a source of significant ongoing tension." }
    ],
    faq: [
      {
        q: "What is birthday number 29?",
        a: ["Birthday 29 reduces to 11, a master number. It carries the elevated, intuitive 11 energy alongside the specific qualities of the 2 (deep relational sensitivity) and 9 (broad compassion and wisdom). People born on the 29th tend to have exceptional perceptiveness and a genuine capacity for inspired understanding."]
      },
      {
        q: "Why does 29 reduce to 11 rather than 2?",
        a: ["2+9=11, and 11 is a master number that isn't reduced further. The 11 stands as a master number energy rather than being collapsed to 2."]
      },
      {
        q: "What is the shadow of birthday 29?",
        a: ["The intensity of carrying three deep energies simultaneously, and the weight of a calling that can feel perpetually unmet by current circumstances."]
      }
    ]
  },
  {
    day: 30,
    reducedTo: 3,
    title: "The Amplified Creator",
    shortDesc: "Born on the 30th (reduces to 3), you carry a creative, expressive energy that the 0's presence amplifies - the creative impulse runs at a higher intensity.",
    heroSubtitle: "Your birthday energy is powerfully expressive - creative output with range and depth.",
    meaning: [
      "Birthday 30 reduces to 3 (3+0=3) and carries the creative, expressive energy of the 3 - amplified by the 0, which intensifies and gives a broader scope to the qualities of the 3. Birthday 30 people tend to have the 3's creative expressiveness at a particularly high intensity, with a wider range and more sustained capacity than straight 3 energy often produces.",
      "The 3 energy is about creative expression - about joy, communication, and the natural urge to bring something from inside into the world. The 0's amplification gives this a wider scope: the creativity can operate across more forms, the expression carries more range, and the capacity for genuine creative impact is greater.",
      "Birthday 30 is often associated with significant creative gifts in numerology - the amplified 3 energy produces people who can create at a genuinely high level when the direction is right and the discipline to develop it is present."
    ],
    traits: [
      "Creatively gifted, expressively capable, and carrying the 3 energy at an amplified intensity - birthday 30 people tend to have a wider creative range and a stronger expressive impulse than straight 3 energy produces.",
      "The shadow is the 3's challenges amplified: the scattered energy can be more scattered, the difficulty with follow-through can be more pronounced, and the tendency toward surface contact can be stronger.",
      "What's distinctive about birthday 30 is the quality of genuine creative abundance - the sense that there's more to express than there are forms or time to express it in, which is both the gift and the ongoing management challenge."
    ],
    strengths: [
      { title: "Amplified creative range", desc: "Birthday 30's creativity operates across a wider range of forms and subjects than most 3 energy. The gift is broad and genuine." },
      { title: "Expressive capacity", desc: "The 0's amplification gives birthday 30 a sustained expressive energy that can produce genuinely significant creative work when the discipline to develop it is present." }
    ],
    challenges: [
      { title: "Amplified scatter", desc: "The 3's tendency toward scattered energy is amplified in birthday 30 - more starting, more switching, more difficulty sustaining any single creative direction through to its full development." },
      { title: "Managing abundance", desc: "Having more creative energy than any single form can fully contain is both the gift and the management challenge. Learning to choose and commit is essential." }
    ],
    faq: [
      {
        q: "What is birthday number 30?",
        a: ["Birthday 30 reduces to 3 and carries the creative, expressive 3 energy - amplified by the 0's intensifying presence. People born on the 30th tend to have the 3's creativity and expressiveness at a higher intensity, with wider range and greater creative capacity."]
      },
      {
        q: "What is the shadow of birthday 30?",
        a: ["The 3's core challenges amplified: scattered energy, difficulty with sustained focus and follow-through, and the management challenge of having more creative energy than any single direction can fully contain."]
      },
      {
        q: "What careers suit birthday 30?",
        a: ["Any creative field where the range and intensity of the creative gift can be expressed: writing, music, visual arts, performing arts, design, film. Birthday 30 is particularly effective in forms that can hold and express significant creative range."]
      }
    ]
  },
  {
    day: 31,
    reducedTo: 4,
    title: "The Creative Builder",
    shortDesc: "Born on the 31st (reduces to 4), you carry a practical, structured energy with the 3's creative expressiveness and the 1's independent drive giving it originality and direction.",
    heroSubtitle: "Your birthday energy combines discipline with creativity - building things that are both solid and genuinely original.",
    meaning: [
      "Birthday 31 reduces to 4 (3+1=4) and carries the practical, structured energy of the 4 - with the 3's creative expressiveness and the 1's independent drive giving it a more original and personally directed character. Birthday 31 people combine the discipline to build things properly with the creative instinct to make them genuinely distinctive.",
      "This combination produces a birthday energy oriented toward creative craft - the patient, sustained work of developing something genuinely excellent, guided by a clear personal vision and expressed with originality.",
      "The practical pattern is a consistent ability to build things that are both structurally sound and creatively distinctive - not just executing the formula, but finding the approach that's genuinely your own within the form."
    ],
    traits: [
      "Disciplined, creative, and independently directed - birthday 31 people have the 4's follow-through combined with the 3's originality and the 1's personal direction. They build things that are both reliable and genuinely theirs.",
      "The shadow involves the 4's rigidity combined with the 1's stubbornness and the 3's scatter - potentially producing someone who has strong ideas about how to do things creatively but can't easily integrate others' input or complete projects when the creative direction shifts.",
      "What's distinctive about birthday 31 is the quality of original craft - work that has both structural integrity and genuine creative distinctiveness."
    ],
    strengths: [
      { title: "Creative discipline", desc: "Birthday 31 has both the creative vision and the practical discipline to develop it - a combination that produces genuine craft when applied consistently." },
      { title: "Original execution", desc: "The combination of 3 and 1 keeps birthday 31's practical work from becoming formulaic. There's always a personal stamp on what they build." }
    ],
    challenges: [
      { title: "Stubbornness about the creative vision", desc: "The combination of 3's expressive attachment and 1's independence can make birthday 31 particularly resistant to feedback or alternative approaches to the creative work." },
      { title: "Same as birthday 4 with creative dimension", desc: "The core 4 challenges - rigidity, difficulty resting, resistance to change - are present, shaped by the 3 and 1 components toward the creative domain." }
    ],
    faq: [
      {
        q: "What is birthday number 31?",
        a: ["Birthday 31 reduces to 4 and carries the practical, structured 4 energy - made more original by the 3's creative expressiveness and more independently directed by the 1. People born on the 31st tend to build things that are both structurally sound and genuinely distinctive."]
      },
      {
        q: "What careers suit birthday 31?",
        a: ["Any career where creative craft and practical discipline are both required: architecture, design, writing, music, engineering with a design dimension, filmmaking, fine arts. Birthday 31 is particularly effective in work that rewards the patient development of genuine craft."]
      },
      {
        q: "What is the shadow of birthday 31?",
        a: ["Stubbornness about the creative approach, and the core 4 challenges of rigidity and difficulty resting - both shaped toward the creative domain by the 3 and 1 components."]
      }
    ]
  }
];

export const birthdayNumberMap = new Map(birthdayNumbers.map(b => [b.day, b]));

// Helper: get the numerological value for a birthday
export function getBirthdayValue(day: number): number {
  const entry = birthdayNumberMap.get(day);
  if (!entry) return day;
  if (entry.reducedTo === null) return entry.day; // Already single digit or master number
  return entry.reducedTo;
}

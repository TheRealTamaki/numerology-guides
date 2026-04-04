export interface SoulUrgeNumber {
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

export const soulUrgeNumbers: SoulUrgeNumber[] = [
  {
    n: 1,
    title: "The Independent",
    shortDesc: "At the core, soul urge 1 wants to lead, to stand out, and to do things their own way. The drive for independence isn't just a preference - it's a need.",
    heroSubtitle: "Your deepest motivation is to be first, to be original, and to carve something that belongs to you alone.",
    meaning: [
      "Soul urge 1 describes what you want most deeply - the motivations that sit beneath the surface, beneath the career choices, beneath the relationships. What this number says is: you need to lead. Not necessarily in a formal sense, not necessarily as a manager or a CEO - but in the sense of being the one who decides. The one who initiates. The one who doesn't wait for someone else to go first.",
      "The soul urge number is calculated from the vowels in your full birth name. Vowels carry the sound that moves freely - the breath, the resonance - and numerologically they represent what's going on inside, the private wants that drive behavior. For soul urge 1, that inner drive is independence and self-expression. What you want is to be authentically yourself, to make things that reflect your own vision, and to be recognized for what you, specifically, bring.",
      "The challenge with SU1 is the gap that can open up between what you want and what the situations of your life actually allow. When you're in environments that don't give you ownership, autonomy, or room to initiate, the inner frustration builds - and people often can't figure out why they're restless or dissatisfied when things look fine from the outside. This number helps you understand that."
    ],
    personality: [
      "People with soul urge 1 tend to have a private sense of being different - of seeing things in a way that other people don't quite see, of having a vision or a direction that feels clear internally even if it's hard to articulate externally. This isn't arrogance, most of the time. It's just the number doing what it does: orienting you toward your own judgment as the primary reference point.",
      "The interesting paradox is that SU1 people often care deeply about what others think of them - more than their confident exterior suggests. The desire for independence and the desire for recognition exist simultaneously. They want to forge their own path and they want people to notice they're doing it well. These aren't contradictory, but they do create some interesting internal tension.",
      "The shadow shows up as a kind of chronic impatience with situations that feel too slow, too restrictive, or too focused on other people's preferences at the expense of their own. SU1 people can become subtly resentful in roles or relationships where they're expected to consistently subordinate what they want."
    ],
    strengths: [
      { title: "Inner conviction", desc: "SU1 has a well-developed sense of what they want and why they want it. This inner clarity is genuinely useful - it means they waste less time on things that don't align with their real direction, and they tend to bring real commitment to the things that do." },
      { title: "Self-starting energy", desc: "The motivation to begin things comes from inside, not from external rewards or social pressure. SU1 doesn't need someone else to get them started. This self-generated energy is one of their most consistent assets." },
      { title: "Courageous self-expression", desc: "SU1 is willing to be the person in the room who says the thing no one else is saying, who takes the position that's unpopular, who makes the creative choice that's risky. The drive to express what's genuinely true for them outweighs the pull toward safety." },
      { title: "Original perspective", desc: "Because SU1 constantly filters experience through their own lens, they tend to generate genuinely original ideas. Their view isn't derivative. They haven't absorbed it from someone else and regurgitated it - they've worked it through themselves." }
    ],
    challenges: [
      { title: "Difficulty sharing the stage", desc: "SU1's deep need to be recognized as the originator can make genuine collaboration hard. Sharing credit doesn't come easily, and in group settings, the desire to have their contribution clearly seen can sometimes override what the group actually needs." },
      { title: "Impatience as a pattern", desc: "When things don't move at SU1's pace - when processes are slower, when other people need more time, when structures require waiting - the impatience can surface as irritability or withdrawal. The number needs to work on tolerating the speed of other people without reading it as obstruction." },
      { title: "Isolation as a default", desc: "The desire for independence, left unchecked, can become a habit of distance. SU1 can end up quite alone - not because they don't value connection, but because the pattern of operating independently has become so ingrained that asking for help or admitting need feels structurally foreign." },
      { title: "Over-reliance on self-judgment", desc: "SU1's confidence in their own perspective is usually warranted - and occasionally it isn't. When feedback or evidence conflicts with their internal conviction, SU1 can dismiss it too quickly. The work is learning to distinguish between grounded self-trust and refusal to update." }
    ],
    love: [
      "In relationships, soul urge 1 wants a partner who respects their independence - not as a therapeutic goal, but as a structural fact. They need space to be themselves, to pursue their own interests, to make decisions that belong to them. A partner who tries to merge completely, who needs constant togetherness, or who interprets autonomy as rejection will struggle with SU1.",
      "What SU1 brings to relationships is loyalty, directness, and a genuine quality of attention when they're fully present. They don't show up halfway. When they're in, they're in, and their partners tend to feel that - the sense of being chosen by someone who could perfectly well choose themselves instead.",
      "The growth edge is learning to ask for what they need rather than quietly building resentment when they don't get it, and learning to let a partner's needs matter in the calculation - not as a compromise of self, but as the natural cost of genuinely close relationships."
    ],
    career: [
      "Soul urge 1 is motivated by ownership, recognition, and the chance to do things their way. The career that works for SU1 long-term is one where they're not just executing someone else's vision - where their own ideas, judgment, and direction are part of the picture.",
      "Entrepreneurship is a natural fit. So are senior creative roles, leadership positions with real autonomy, and any profession where individual expertise is the primary currency - where what you specifically bring is the point, rather than your ability to fit into a larger system.",
      "The career trap for SU1 is staying in structures that feel safe but are gradually shrinking the sense of self. The security is real; the cost is also real. SU1 tends to do their best work when the stakes feel personal, when the outcome reflects their own choices, and when success means something beyond a paycheck."
    ],
    faq: [
      {
        q: "What does soul urge number 1 mean?",
        a: ["Soul urge number 1 describes your deepest inner motivation: the drive for independence, self-expression, and leadership. It's the number that says you want to be first - to initiate, to originate, to carve your own path rather than follow one that already exists.", "It doesn't prescribe a specific career or lifestyle. What it does is describe what needs to be present in your life for you to feel like yourself - and what tends to create friction when it's absent."]
      },
      {
        q: "How is the soul urge number different from the life path or expression number?",
        a: ["The life path number describes the terrain of your life - the energy and conditions you were born into. The expression number describes the direction your destiny is pulling you. The soul urge number describes what you want at a deep, private level - the inner motivations that drive your choices, sometimes without you fully realizing it.", "Think of it this way: your life path is the road, your expression number is how you're built to travel it, and your soul urge is what you're really hoping to find when you get there."]
      },
      {
        q: "How do I calculate my soul urge number?",
        a: ["The soul urge number is calculated from the vowels in your full birth name - the same name on your birth certificate, including middle names. Assign each vowel (A, E, I, O, U) its Pythagorean value: A=1, E=5, I=9, O=6, U=3. Add all the vowel values together and reduce to a single digit. If you land on 11, 22, or 33, stop - those are master numbers.", "It's sometimes called the heart's desire number, which captures the same idea: it's the private want, the inner driver."]
      },
      {
        q: "What relationships work best for soul urge 1?",
        a: ["SU1 needs a partner who understands and respects their need for independence - someone who doesn't read autonomy as distance, and who brings their own identity and interests to the relationship rather than expecting to merge fully.", "The relationships that work best are ones where both people are genuinely independent but genuinely choosing each other. SU1 thrives alongside people who have their own strong sense of self."]
      },
      {
        q: "What is the shadow side of soul urge 1?",
        a: ["The shadow is isolation - the pattern of operating independently until genuine connection becomes uncomfortable, and the habit of prioritizing self-reliance over asking for help even when help would clearly make things better.", "There's also the stubbornness: the way SU1's confidence in their own judgment can become a filter that blocks useful information or feedback. The work is learning to stay open without losing the self-trust that's genuinely useful."]
      },
      {
        q: "Is soul urge 1 compatible with life path 1?",
        a: ["Having both SU1 and LP1 doubles down on the number's energy - the independence, the leadership orientation, the drive to do things your way. For many people this feels completely right and coherent. The gift is that both numbers point in the same direction. The challenge is that the shadow patterns (isolation, stubbornness) may be more pronounced.", "Whether numbers align or contrast in your chart, what matters most is whether you're actively working with the energy rather than against it."]
      }
    ],
    related: [
      { n: "expression-1", label: "Expression 1", note: "The Trailblazer - the outer expression of the same independent energy." },
      { n: "life-path-number-1", label: "Life Path 1", note: "The life path equivalent of the same core number." },
      { n: "2", label: "Soul Urge 2", note: "Almost the inverse - the deepest need for connection and partnership." }
    ]
  },
  {
    n: 2,
    title: "The Connector",
    shortDesc: "Soul urge 2 wants peace, partnership, and to feel genuinely needed. At the deepest level, what matters is belonging - being part of something, not apart from it.",
    heroSubtitle: "Your deepest motivation is connection - building relationships that hold, and being the person who keeps things together.",
    meaning: [
      "Soul urge 2 describes a private, deep-seated need for harmony and partnership. While the outside world might see a composed, diplomatic person, what's going on inside is a constant orientation toward other people - toward how the room feels, whether the people they care about are okay, whether things between them are good. The 2 energy at the soul level is fundamentally relational.",
      "The soul urge is calculated from the vowels in your birth name - the sounds that move freely, representing the inner life. For SU2, that inner life is organized around connection: the desire for real intimacy, mutual understanding, and the kind of relationships where people genuinely know and accept each other. Not surface contact. Actual closeness.",
      "The challenge with SU2 is the tendency to lose track of what they need in the process of focusing so completely on what others need. The deep desire for harmony can slide into conflict avoidance, people-pleasing, and a quiet self-erasure that doesn't serve anyone well in the long run. The work for SU2 is staying connected to themselves while staying connected to others."
    ],
    personality: [
      "SU2 people have a quality that others often describe as calming. They're attuned to the emotional temperature of situations and they naturally try to regulate it - defusing tension before it escalates, finding the language that bridges rather than divides, noticing the person who needs to feel seen and making sure they do.",
      "This attunement is real and it's valuable. But it comes at a cost that SU2 doesn't always acknowledge: they absorb a lot. When they're around conflict, anxiety, or unresolved tension, it lands in their body and their mood in ways that can be hard to trace back to the source. SU2 often needs significantly more downtime and recovery than others expect from them.",
      "The shadow pattern to watch is indirect communication - the tendency to hint at what they need rather than say it plainly, to smooth things over rather than address the underlying problem, to prioritize not rocking the boat over actually resolving the issue. It usually comes from a good place: the genuine desire not to make things worse. But the avoidance compounds over time."
    ],
    strengths: [
      { title: "Natural mediator", desc: "SU2 has an instinctive ability to find common ground, to see both sides of a dispute, and to communicate in ways that de-escalate rather than inflame. In any environment with conflict or tension, this capacity is genuinely useful." },
      { title: "Deep empathy", desc: "SU2 feels what other people feel, often before those people have named it themselves. This isn't just emotional sensitivity - it's a form of intelligence that makes them unusually effective at understanding what's really going on in relationships and teams." },
      { title: "Collaborative instinct", desc: "Where SU1 defaults to going it alone, SU2 defaults to building something with others. They genuinely believe the outcome is better when more people are involved and cared for in the process - and they're often right." },
      { title: "Patience and steadiness", desc: "SU2 is willing to wait for the right moment, to let things develop at their own pace, and to hold space for processes that take time. This patience is real, and it's distinct from passivity - SU2 is observing and preparing even when they're not acting." }
    ],
    challenges: [
      { title: "Over-giving", desc: "The desire to be needed can tip into giving more than is sustainable - saying yes when the honest answer is no, taking on other people's burdens until there's no capacity left, and then feeling depleted and resentful without understanding why." },
      { title: "Conflict avoidance", desc: "SU2's deep discomfort with disharmony can lead them to avoid necessary confrontations, smooth over problems that need to be addressed, and hold their real feelings back until the accumulation becomes too much. The fear of damaging the relationship often ends up damaging it more than direct communication would have." },
      { title: "Identity blurring", desc: "In close relationships, SU2 can lose track of where they end and the other person begins. Their preferences, needs, and sense of self can gradually become organized around what the other person wants - a pattern that looks like devotion but functions more like self-abandonment." },
      { title: "Indecisiveness", desc: "When SU2 is uncertain how a decision will affect the people they care about, making that decision becomes genuinely difficult. The constant weighing of relational consequences can stall forward movement in ways that frustrate both SU2 and the people around them." }
    ],
    love: [
      "Relationships are where soul urge 2 is most at home - and most vulnerable. They want real closeness, genuine mutual understanding, and the sense that someone truly knows them. Not just likes them. Knows them. The longing for that depth of connection is the defining feature of this number.",
      "What SU2 brings to a relationship is extraordinary care and attentiveness. They notice their partner in ways that make people feel genuinely seen. They remember the small things. They show up when it matters. The challenge is that this investment can become unbalanced - SU2 pouring in more than they receive, and not naming it until they're running on empty.",
      "The growth edge for SU2 in love is learning to ask for what they need directly, to communicate displeasure before it becomes resentment, and to trust that the relationship can survive an honest conversation. The thing they most fear - conflict disrupting harmony - is usually less dangerous than the unspoken accumulation that avoidance creates."
    ],
    career: [
      "Soul urge 2 is motivated by meaningful collaboration and a sense that their work matters to people. They do their best work in environments where relationships are intact, where people cooperate rather than compete, and where they feel genuinely valued - not just for their output, but for who they are.",
      "The careers that suit SU2 tend to be people-centered: counseling, mediation, teaching, healthcare, human resources, community work, or any role that involves facilitating connections and supporting others. What they need is a sense that their contribution is felt, not just recorded.",
      "The career failure mode for SU2 is staying in a role or environment where they feel consistently undervalued or where the culture is one of conflict and competition. SU2 can perform in those environments for a while, but it costs them disproportionately. The number needs to be working somewhere that it doesn't have to fight itself to function."
    ],
    faq: [
      {
        q: "What does soul urge number 2 mean?",
        a: ["Soul urge number 2 describes a deep inner need for harmony, partnership, and genuine connection. At the heart of it, SU2 wants to belong - to have relationships that are real, to feel genuinely needed, and to be part of something larger than themselves.", "It shapes the choices people make without always being able to say why - the pull toward partnership, the discomfort with conflict, the attentiveness to how other people are feeling."]
      },
      {
        q: "How is soul urge 2 calculated?",
        a: ["The soul urge number is calculated from the vowels in your full birth name - first, middle, and last, exactly as they appear on your birth certificate. Assign each vowel its Pythagorean value: A=1, E=5, I=9, O=6, U=3. Add all the values together and reduce to a single digit (or stop at 11, 22, or 33)."]
      },
      {
        q: "Is soul urge number 2 passive?",
        a: ["No - though that's a common misconception. SU2's strengths tend to be relational rather than assertive, which gets misread as passivity. But the ability to read rooms, facilitate cooperation, and hold a group together through conflict is active work. It just doesn't look like what most people picture when they think of strength.", "The challenge for SU2 is less passivity and more conflict avoidance - which is a different thing. Addressing that pattern is part of working consciously with this energy."]
      },
      {
        q: "What careers suit soul urge 2?",
        a: ["Careers where relationships are central: counseling, mediation, teaching, healthcare, human resources, community organizing, diplomacy. SU2 needs to feel that their work connects to people in a meaningful way - roles where the output is purely transactional and impersonal tend not to satisfy."]
      },
      {
        q: "What is the shadow side of soul urge 2?",
        a: ["The core shadow for SU2 is over-giving and the identity loss that can come with it - giving so much to others that their own needs become invisible, and eventually becoming resentful without understanding why.", "The other shadow is conflict avoidance that delays necessary conversations until the damage is already done. Both patterns come from the same root: the deep desire for harmony, taken too far."]
      },
      {
        q: "How does soul urge 2 show up in relationships?",
        a: ["SU2 is a deeply devoted, attentive partner who genuinely wants the relationship to work. They notice their partner, they show up consistently, and they bring real care to the small moments that matter.", "The challenge is reciprocity and directness. SU2 needs to feel genuinely needed and valued, and when that isn't clear, they can withdraw into quiet hurt rather than saying what they need. Building the habit of direct communication is probably SU2's most important relational growth edge."]
      }
    ],
    related: [
      { n: "1", label: "Soul Urge 1", note: "Almost the inverse - the deepest need for independence rather than connection." },
      { n: "6", label: "Soul Urge 6", note: "Another deeply relational number - though the focus shifts toward nurturing and responsibility." },
      { n: "life-path-number-2", label: "Life Path 2", note: "The life path equivalent - shares the same cooperative, relational core." }
    ]
  },
  {
    n: 3,
    title: "The Expressive",
    shortDesc: "At the deepest level, soul urge 3 wants to create and be seen for it. The need to express - whether through words, art, humor, or performance - isn't decorative. It's structural.",
    heroSubtitle: "Your deepest motivation is to express - to bring something from inside you into the world and have it land.",
    meaning: [
      "Soul urge 3 describes a deep, private hunger for creative expression. It's not just that SU3 people enjoy creating - they need to. When the expression is blocked, when circumstances don't allow for it, or when they've been talked out of trusting it, something fundamental goes flat. The joy that's their most characteristic quality becomes harder to access.",
      "The soul urge number comes from the vowels in your birth name - the resonant sounds that carry the private inner life. For SU3, that inner life is organized around creative energy, the desire to be understood, and the need to feel like what they bring to the world is genuinely seen and appreciated. Recognition isn't vanity here. It's the confirmation that the expression landed.",
      "What's worth understanding about SU3 is that the expression can take almost any form. Words, music, visual art, performance, humor, the way they decorate a space or run a conversation - all of these are valid channels for the same energy. What matters is that the channel exists and is being used. SU3 without a creative outlet tends to feel vaguely but persistently wrong."
    ],
    personality: [
      "People with soul urge 3 tend to have a lightness about them - a quickness of mind, a sense of humor that arrives before the conscious thought, a way of finding the angle that makes something more interesting. This isn't performance, most of the time. It's the number doing what it does naturally.",
      "Underneath that lightness, there's usually a more sensitive inner world than SU3 typically shows. The creative urge comes with the creative vulnerability - the concern about whether the work is good, whether people understand it, whether the self that's being expressed is acceptable. Self-doubt runs through the number at a level that surprises people who only see the confident exterior.",
      "The shadow shows up as scattered energy - starting projects and not finishing them, moving through phases of enthusiasm followed by abandon, living at the surface of experience rather than going deep. The joy-seeking that characterizes SU3 can become a way of avoiding the sustained effort required to develop genuine craft or depth."
    ],
    strengths: [
      { title: "Creative flow", desc: "SU3 accesses creative states readily and naturally. Ideas arrive easily; connections form quickly; the associative mind that produces original work is one of their most consistent assets. The challenge is always direction and follow-through, not generation." },
      { title: "Warm communication", desc: "SU3 communicates in ways that feel natural and inviting - warm, specific, genuinely curious about other people. They make conversations feel like exchanges rather than transactions, and people tend to open up around them." },
      { title: "Infectious optimism", desc: "At their best, SU3 carries a quality of genuine delight in things that other people find contagious. This isn't toxic positivity - it's real pleasure in the interesting, the funny, the beautiful. It's one of their most generous contributions to the people around them." },
      { title: "Versatile expression", desc: "The SU3 creative impulse isn't locked into one form. They can often express the same idea through different media, find the right register for different audiences, and translate their inner experience into something that lands for people with very different orientations." }
    ],
    challenges: [
      { title: "Scattered focus", desc: "SU3's generative mind is also a restless one. The next idea tends to arrive before the current one is complete, which can leave a trail of unfinished projects and half-developed skills. Depth requires staying with something past the point where it stops being easy." },
      { title: "Fear of judgment", desc: "For all the apparent confidence, SU3 often has a very active internal critic. The desire to be seen and the fear of being judged exist simultaneously - which can lead to either under-sharing (keeping the real work private) or over-explaining (defending the work before it's even questioned)." },
      { title: "Using humor as armor", desc: "The SU3 gift for humor can become a way to keep emotional distance - keeping things light when depth would be more useful, deflecting with a joke when a direct answer would be more honest. This protects SU3 from vulnerability, but it also keeps people from getting close." },
      { title: "Inconsistency", desc: "SU3's energy isn't flat - it moves in peaks and valleys, and the people around them can find this unpredictable. The enthusiasm of a good phase can be followed by a withdrawal that feels inexplicable from the outside. Managing this rhythm - rather than just riding it - is part of working consciously with the number." }
    ],
    love: [
      "In relationships, soul urge 3 wants someone who appreciates their way of experiencing the world - who gets the humor, who responds to the creativity, who doesn't find the emotional ups and downs exhausting. What they don't want is a partner who tries to ground them into something more predictable, because predictable usually means smaller.",
      "What SU3 brings is liveliness, affection, genuine attentiveness, and a quality of making ordinary life feel more interesting. They notice things. They find meaning in small moments. They bring a quality of aliveness to relationships that's genuinely distinctive.",
      "The growth edge is staying present past the initial spark - doing the sustained, sometimes unexciting work of maintaining closeness when the novelty has faded. And learning to be vulnerable in ways that go beyond wit, because the people they love most deserve to see the inner world, not just the performance."
    ],
    career: [
      "Soul urge 3 is motivated by creative expression and the sense that their work reflects something genuine. They do well in careers that involve communicating, creating, teaching, or performing - anything where the inner world gets to come out and do something in the outer world.",
      "Writing, acting, teaching, marketing, design, music, therapy, public speaking - the list is long because the core requirement is broad: the work needs to feel like an expression, not just a function. SU3 in a purely procedural, output-focused role tends to go through the motions rather than actually engage.",
      "The career risk for SU3 is underestimating their own talent by comparing their work to people who've put in far more disciplined hours. The raw material is often genuinely strong. What it usually needs is sustained development, which requires tolerating the awkward middle period between inspiration and mastery."
    ],
    faq: [
      {
        q: "What does soul urge number 3 mean?",
        a: ["Soul urge number 3 describes a deep inner need for creative expression and recognition. At the core, SU3 wants to bring something from inside them into the world - whether through art, words, humor, music, or conversation - and have it be understood and appreciated.", "It's the number that says: the creative urge isn't a hobby. It's essential."]
      },
      {
        q: "How is soul urge 3 different from expression number 3?",
        a: ["The soul urge is about inner motivation - what you want at the deepest level. The expression number is about destiny - the direction you're here to move in. Both can be 3, and when they are, the creative orientation shows up in both private wants and external direction.", "Soul urge 3 means you privately need to express. Expression number 3 means you're built to express as your primary way of engaging with the world. Having both amplifies the energy significantly."]
      },
      {
        q: "Is soul urge 3 creative by default?",
        a: ["Yes - but creativity here doesn't mean art in the conventional sense. SU3's creativity is more about the impulse to add something original to whatever they encounter: a fresh angle, a surprising connection, a way of seeing that wasn't there before.", "The specific form it takes depends on the person, their other numbers, and how they've developed the gift. But the impulse itself tends to be consistent and present."]
      },
      {
        q: "What careers suit soul urge 3?",
        a: ["Any career where creative expression is central or adjacent: writing, performing, teaching, design, marketing, therapy, public speaking, content creation. The requirement is that the work feels like an extension of the person, not just a function they're performing.", "SU3 tends to struggle in highly procedural, repetitive roles where there's no room for originality or personal expression."]
      },
      {
        q: "What is the shadow side of soul urge 3?",
        a: ["Scattered energy, fear of judgment, and using humor or lightness to avoid depth and vulnerability. The same gifts that make SU3 engaging can become a way of staying safe - moving between interests before any of them develop far enough to require real risk.", "The invitation is to go deeper: to take the creative work seriously enough to put sustained effort into it, and to let the people they care about actually see the inner world."]
      },
      {
        q: "How does soul urge 3 show up in relationships?",
        a: ["SU3 is a warm, fun, imaginative partner who makes life feel more alive. They notice things, they create small moments, they bring humor and affection to everyday interactions.", "The challenge is depth over time - staying genuinely present and vulnerable past the early stages, and not retreating into lightness when things get difficult. The partner who can meet them there, who doesn't try to ground them but also doesn't just play along at the surface, tends to be the one who stays."]
      }
    ],
    related: [
      { n: "2", label: "Soul Urge 2", note: "More relational in orientation - less about self-expression, more about connection." },
      { n: "5", label: "Soul Urge 5", note: "Another freedom-oriented number - SU5's expression of freedom tends outward rather than creative." },
      { n: "life-path-number-3", label: "Life Path 3", note: "The life path equivalent of the same expressive energy." }
    ]
  },
  {
    n: 4,
    title: "The Stabilizer",
    shortDesc: "Soul urge 4 wants to build something solid and lasting. The inner drive is toward order, reliability, and the satisfaction of a thing done properly.",
    heroSubtitle: "Your deepest motivation is to create something lasting - to build foundations that actually hold.",
    meaning: [
      "Soul urge 4 describes a deep need for structure, stability, and the satisfaction of building things that last. SU4 people aren't just organized because it's useful - they're organized because the orderly, predictable, reliable version of life is the one that feels right at a fundamental level. Chaos isn't just inconvenient for SU4. It's genuinely uncomfortable in a way that other numbers don't fully register.",
      "The soul urge number is calculated from the vowels in your birth name. For SU4, those vowels reveal a private inner world that is more systematic, more planning-oriented, and more focused on concrete outcomes than the outer personality always shows. What SU4 wants, at the core, is to know that things are solid - that the work they're doing is building toward something real, that the relationships they're in are going to last, that the structure of their life is sound.",
      "The shadow is rigidity. The same drive toward structure that produces excellent work can produce an inability to adapt when circumstances change, a tendency to judge other people for not working the same way, and a kind of joylessness when the planning becomes an end in itself rather than a means to something worth building."
    ],
    personality: [
      "SU4 people tend to present as calm, methodical, and dependable - and usually are. There's a quality of solidity to them that others find reassuring. If SU4 says they'll do something, they do it. If they're responsible for something, it gets done. This reliability is real and it matters to them internally as much as externally.",
      "What's underneath the surface is a private world that is more anxious than it looks. SU4 spends significant internal energy managing uncertainty - thinking through scenarios, planning for contingencies, making sure the structure is sound before they trust it. The calm exterior is often the product of considerable internal labor.",
      "The relationship pattern that shows up most often with SU4 is an expectation that others will meet the same standards of reliability. When people are inconsistent, late, or cavalier about commitments, SU4 finds it genuinely hard not to read this as disrespect - which isn't always the right read, but it's the one the number reaches for first."
    ],
    strengths: [
      { title: "Follow-through", desc: "SU4 finishes what they start. The commitment to completing work, keeping promises, and delivering on expectations is one of the number's most consistent and valuable qualities." },
      { title: "Practical intelligence", desc: "SU4 naturally thinks in terms of how things actually work - what the specific steps are, what resources are required, what could go wrong, how to account for it. This is the kind of intelligence that turns good ideas into completed projects." },
      { title: "Trustworthiness", desc: "What you see with SU4 is what you get, and what you get is someone who will do what they said. In any context - professional, personal, creative - this quality is rarer than it should be, and SU4 brings it consistently." },
      { title: "Endurance", desc: "SU4 can sustain effort across long timelines in ways that numbers with more variable energy cannot. The slow build, the project that takes years, the relationship that requires patience - SU4 is built for this kind of long-game commitment." }
    ],
    challenges: [
      { title: "Rigidity when plans change", desc: "SU4's need for structure can become an inability to adapt when circumstances shift. The plan they developed carefully doesn't account for the new information, and changing it feels like failure rather than intelligence. Learning to treat adaptation as part of the plan is SU4's most important operational growth." },
      { title: "Narrow definition of 'the right way'", desc: "SU4 often has very clear ideas about the correct method, the proper process, the appropriate approach - and a tendency to judge anything that diverges from those standards. This can produce excellent work, but it can also make collaboration difficult and close off approaches that would have worked just as well." },
      { title: "Difficulty relaxing", desc: "The planning brain doesn't turn off easily for SU4. Rest feels like falling behind, play feels like irresponsibility, and downtime rarely delivers the recovery it should because the internal monitoring is still running. Learning to actually stop is both harder and more important for SU4 than for most numbers." },
      { title: "Under-valuing spontaneity", desc: "Life doesn't always arrive in a form that fits the plan, and some of the best things happen in the gaps between plans. SU4's orientation toward structure can prevent them from noticing or responding to those moments - from following the thread that appeared unexpectedly, from saying yes to the thing that wasn't on the schedule." }
    ],
    love: [
      "In relationships, soul urge 4 wants reliability, consistency, and a sense that the foundation is solid. They don't do well with partners who are dramatically inconsistent - who are intensely present one week and distant the next, who change their mind about what they want, who bring a quality of unpredictability that SU4 can't plan around.",
      "What SU4 brings to a relationship is extraordinary commitment and practical care. They show up. They remember. They do the unsexy work of maintaining the relationship over time - the logistics, the planning, the making-sure-things-work-out that keeps a partnership functional. This is genuine love even when it doesn't look romantic.",
      "The growth edge is softening the standards - learning that a partner who works differently isn't working wrongly, and that the most important things in a relationship can't be planned or controlled. SU4 who has done this work tends to be one of the most steadying, trustworthy partners a person can have."
    ],
    career: [
      "Soul urge 4 is motivated by the sense of building something solid. The career that works long-term is one where there's structure, clear expectations, the opportunity to develop genuine expertise, and the sense that the work is contributing to something real and lasting.",
      "Architecture, engineering, project management, accounting, law, medicine, skilled trades - any profession where the work requires sustained precision and delivers concrete, lasting results tends to suit SU4 well. What they need is for the work to matter in a tangible way.",
      "The career risk for SU4 is staying in structures out of habit or security long past the point where those structures are actually serving them. The four energy needs to feel like what it's building is worth building. When the answer to that has quietly become no, the dissatisfaction can take a long time to surface - and a longer time to act on."
    ],
    faq: [
      {
        q: "What does soul urge number 4 mean?",
        a: ["Soul urge number 4 describes a deep inner need for structure, stability, and the satisfaction of building things that last. At the core, SU4 wants to know that things are solid - that the work is real, the foundation is sound, and what they're building will still be standing in ten years.", "It's the number that says the desire for order isn't a quirk. It's a fundamental orientation."]
      },
      {
        q: "How is the soul urge number calculated?",
        a: ["From the vowels in your full birth name. Assign each vowel its Pythagorean value: A=1, E=5, I=9, O=6, U=3. Add all the vowel values together and reduce to a single digit - unless the total is 11, 22, or 33 (master numbers, not reduced further)."]
      },
      {
        q: "Is soul urge 4 boring?",
        a: ["No - though the number gets that reputation because its energy isn't flashy. The satisfaction SU4 gets from precision, from follow-through, from building something that works exactly as intended, is real and deep. That's not boredom. That's a different kind of joy.", "The interesting thing is that SU4 energy often quietly makes other people's wilder ideas actually happen. The world needs the people who can be counted on."]
      },
      {
        q: "What is the shadow side of soul urge 4?",
        a: ["Rigidity - the tendency to treat structure as an end rather than a means, and to judge others harshly when they don't meet the same standards of precision and reliability. Also the difficulty relaxing: the planning brain runs on a very quiet continuous loop, and genuinely turning it off is hard.", "The work is learning that adapting isn't failing, and that not everything worth having can be built to specification."]
      },
      {
        q: "What careers suit soul urge 4?",
        a: ["Careers with structure, clear expectations, and the opportunity for genuine expertise: engineering, architecture, project management, accounting, law, medicine, construction, skilled trades. SU4 needs to feel like the work is building toward something real and lasting."]
      },
      {
        q: "How does soul urge 4 show up in love?",
        a: ["SU4 is a deeply committed, practically loving partner who does the unsexy work that keeps a relationship functioning. They show up consistently, they follow through, they handle the logistics with care.", "The challenge is flexibility - learning that a partner who works differently isn't working wrongly, and that the most important things between two people can't be planned or structured into existence. SU4 who's genuinely learned this tends to be one of the most dependable, trustworthy partners there is."]
      }
    ],
    related: [
      { n: "8", label: "Soul Urge 8", note: "Also achievement-oriented - but SU8 builds through power and systems rather than careful structure." },
      { n: "life-path-number-4", label: "Life Path 4", note: "The life path equivalent - shares the same grounded, building energy." },
      { n: "7", label: "Soul Urge 7", note: "Also introverted and systematic - but SU7's drive is toward understanding rather than building." }
    ]
  },
  {
    n: 5,
    title: "The Seeker",
    shortDesc: "Soul urge 5 wants freedom, variety, and the experience of being fully alive. The need for movement - physical, intellectual, sensory - isn't restlessness. It's the number's essential energy.",
    heroSubtitle: "Your deepest motivation is freedom - to move, to explore, to experience life without artificial limits.",
    meaning: [
      "Soul urge 5 describes a deep, structural need for freedom and variety. It's not that SU5 people are incapable of commitment or consistency - they can be both. But if the life they're living doesn't leave room for exploration, for new experience, for movement in some direction, something important goes missing. The restlessness isn't a character flaw. It's the number telling them something.",
      "The soul urge is calculated from the vowels in the birth name - the private, resonant sounds that represent the inner life. For SU5, that inner life is oriented toward possibility. What is this? What's next? What haven't I tried yet? These aren't idle questions; they're the organizing impulse of the number's energy. SU5 navigates by curiosity.",
      "The challenge is the shadow form of freedom-seeking, which is avoidance. When commitment becomes too heavy, when depth requires sitting still, when the next experience is used to escape the current one rather than genuinely pursue the new - the freedom starts working against the very aliveness it's supposed to serve. SU5 needs real freedom, not just the feeling of not being trapped."
    ],
    personality: [
      "People with soul urge 5 have a quality of aliveness - a sensory presence, a quickness of observation, a tendency to be the first to notice something interesting in a room. They engage with experience directly and viscerally. They're curious about almost everything. Boredom is not so much uncomfortable as physiologically unpleasant.",
      "The social personality is usually warm, adaptable, and good at meeting people where they are. SU5 can talk to almost anyone and often does. They have a wide orbit of connections rather than a small number of deep ones - though the depth is available when the right conditions are present.",
      "The internal landscape is more anxious than the confident, adaptable exterior suggests. The constant movement is partly genuine aliveness and partly a way of staying ahead of whatever feels constrictive. SU5 can sometimes confuse the anxiety of staying with the wrongness of the situation. Not everything that feels constraining is actually wrong."
    ],
    strengths: [
      { title: "Adaptability", desc: "SU5 adjusts to new situations, new people, and unexpected changes faster than almost any other number. This isn't just resilience - it's a genuine capacity to re-orient quickly and find the useful angle in whatever has arrived." },
      { title: "Sensory intelligence", desc: "SU5 experiences the world richly - they notice what others miss, engage with physical and aesthetic qualities with genuine attention, and bring a quality of presence to experience that makes ordinary moments feel more alive." },
      { title: "Fearlessness", desc: "The default SU5 stance toward new experience is yes - try it, see what happens, you can always change direction. This courage around the unfamiliar opens doors that a more cautious orientation would keep closed." },
      { title: "Genuine curiosity", desc: "SU5's interest in people, places, and ideas isn't performed. They find things genuinely interesting, ask real questions, and follow lines of inquiry past the point where most people would have moved on. This makes them unusually good learners and unusually good company." }
    ],
    challenges: [
      { title: "Commitment avoidance", desc: "The love of freedom can become a fear of being stuck, and the fear of being stuck can prevent SU5 from committing to things that would actually reward commitment. Relationships, careers, creative projects - all of these eventually ask for sustained investment, and that's where the number's shadow tends to show up." },
      { title: "Overindulgence", desc: "SU5's sensory orientation means they can slide into excess - too much of anything that feels good in the moment without adequate attention to what it costs over time. The pleasure principle doesn't always account for the morning after." },
      { title: "Restlessness mistaken for wrongness", desc: "Not every feeling of restlessness means something needs to change. Sometimes SU5 moves on from good things - relationships, roles, places - because the feeling of constraint is uncomfortable, when the constraint was actually the shape of genuine investment." },
      { title: "Follow-through as struggle", desc: "Starting things is easy. SU5's challenge is the middle - the part of any project, relationship, or practice that's past the novelty and into the hard sustained work. Developing the discipline to stay through that phase is important and difficult." }
    ],
    love: [
      "In relationships, soul urge 5 needs genuine freedom - space to explore, room to breathe, and a partner who doesn't read their independence as indifference. What suffocates SU5 most reliably is a relationship that has gradually become a structure they're trapped in rather than a connection they're choosing.",
      "What they bring is aliveness, attentiveness, genuine curiosity about who their partner is and who they're becoming, and the quality of making life feel larger than it was before they were in it. SU5 partners are interesting. They notice things. They keep the relationship from getting stale.",
      "The growth edge is staying - not in a relationship that isn't working, but in the good relationship past the point where the initial freedom of novelty has given way to the ordinary intimacy of commitment. That intimacy, worked toward rather than fallen into, is what SU5 most needs and most resists."
    ],
    career: [
      "Soul urge 5 is motivated by freedom, variety, and the sense that they're not trapped. The career that works long-term is one with built-in movement - travel, different projects, diverse clients, changing challenges. What SU5 cannot sustain indefinitely is the same thing, the same way, in the same place.",
      "Sales, journalism, consulting, travel, entrepreneurship, performing arts, teaching - careers where the content changes, where movement is built in, or where SU5 operates with a high degree of autonomy tend to suit the number well.",
      "The career risk is leaving good situations prematurely because the initial freedom has been replaced by familiarity, which SU5 misreads as constraint. Some of the best career development happens in the period after the novelty fades, when the real learning begins. Not every itchy feeling of wanting to leave is the number correctly reading the situation."
    ],
    faq: [
      {
        q: "What does soul urge number 5 mean?",
        a: ["Soul urge number 5 describes a deep inner need for freedom, variety, and the experience of being fully alive. At the core, SU5 wants to move - physically, intellectually, experientially - and to have the space to follow curiosity wherever it leads.", "It's the number that says: the restlessness isn't a problem to be solved. It's information about what you need."]
      },
      {
        q: "Is soul urge 5 commitment-phobic?",
        a: ["Not inherently - but the love of freedom can look like commitment avoidance, and sometimes is. The distinction is between genuine freedom-seeking (SU5 navigating toward what actually feeds their aliveness) and avoidance (SU5 moving away from things before they require sustained depth).", "SU5 in a relationship or career that gives them genuine freedom doesn't need to leave. The problem is usually structures that have gradually become constraining, or the inability to distinguish between real constraint and the normal friction of commitment."]
      },
      {
        q: "What careers suit soul urge 5?",
        a: ["Careers with built-in variety and movement: sales, journalism, consulting, travel-related work, entrepreneurship, performing arts, teaching, creative direction. The requirement is that the content changes, the autonomy is real, and the role doesn't require doing the same thing the same way indefinitely."]
      },
      {
        q: "What is the shadow side of soul urge 5?",
        a: ["Avoidance masquerading as freedom - leaving good situations before they require the investment that would actually reward staying; overindulgence in sensory pleasure at the expense of long-term wellbeing; and mistaking the normal friction of commitment for a sign that the thing is wrong.", "The invitation is to develop the capacity to stay - not everywhere, not always, but in the things that genuinely deserve it."]
      },
      {
        q: "How does soul urge 5 show up in relationships?",
        a: ["SU5 is a vivid, curious, attentive partner who makes life feel more interesting. They notice things, they try things, they keep the relationship from stagnating.", "The challenge is the long middle - the part of any deep relationship where the novelty has faded and what remains is the ordinary, sometimes difficult work of genuinely knowing someone. That's where SU5 most needs to develop patience and the ability to stay."]
      },
      {
        q: "How is soul urge 5 calculated?",
        a: ["From the vowels in your full birth name: A=1, E=5, I=9, O=6, U=3. Add all vowel values together and reduce to a single digit. Master numbers 11, 22, and 33 are not reduced."]
      }
    ],
    related: [
      { n: "3", label: "Soul Urge 3", note: "Also freedom-oriented - but SU3's expression tends creative rather than experiential." },
      { n: "7", label: "Soul Urge 7", note: "Also driven by curiosity - but SU7's search turns inward rather than outward." },
      { n: "life-path-number-5", label: "Life Path 5", note: "The life path equivalent - same restless, seeking energy." }
    ]
  },
  {
    n: 6,
    title: "The Nurturer",
    shortDesc: "Soul urge 6 wants to care for the people they love and be genuinely needed. Home, family, and community aren't just preferences - they're the architecture of what feels meaningful.",
    heroSubtitle: "Your deepest motivation is love - building something warm and real, and being truly present for the people who matter.",
    meaning: [
      "Soul urge 6 describes a deep orientation toward love, responsibility, and care. SU6 people aren't just caring because it's the right thing to do - they're caring because it's the thing that makes life feel real and meaningful. Home, family, community, and the wellbeing of the people they love are the primary coordinates of their inner world.",
      "The soul urge is calculated from the vowels in the birth name. For SU6, those vowels reveal a private life organized around connection and responsibility - the ongoing awareness of how the people they care about are doing, what they might need, whether things are good between them. This attentiveness isn't anxious surveillance. It's the expression of genuine love.",
      "The shadow is over-responsibility - taking on so much for others that SU6's own needs become invisible, or using care-giving as a way of controlling outcomes, or making their own happiness contingent on whether the people they love are okay. The work for SU6 is learning to love well without losing themselves in it."
    ],
    personality: [
      "SU6 people tend to create warmth wherever they are. They notice when people are uncomfortable and do something about it. They make spaces feel welcoming, conversations feel safe, and situations feel more cared for than they did before SU6 arrived. This isn't performance. It comes from a genuine inner orientation toward making things better for other people.",
      "There's a deep streak of idealism in SU6 that sometimes creates problems: they have a clear picture of how things should be - families, relationships, communities - and real life's failure to match that picture can be a source of persistent low-level pain. The perfectionism isn't about external standards; it's about a vision of love and harmony that reality keeps falling short of.",
      "The pattern to watch is the conditional nature of SU6's own self-care. They take excellent care of everyone else and then notice, somewhat surprised, that there's nothing left for themselves. The lesson the number returns to repeatedly is that caring for themselves isn't a distraction from caring for others. It's a prerequisite."
    ],
    strengths: [
      { title: "Genuine devotion", desc: "When SU6 commits to a person, a family, or a community, it's real. The care isn't contingent on good behavior or reciprocity - it's structural. The people who are loved by SU6 know what it is to be genuinely, reliably cared for." },
      { title: "Creating beauty and harmony", desc: "SU6 has a natural sense for what makes a space feel welcoming, what makes a situation feel harmonious, what makes a difficult conversation feel safer. This isn't interior design in the narrow sense - it's an aesthetic and relational intelligence." },
      { title: "Sense of responsibility", desc: "SU6 follows through on what they've committed to caring for. The reliability isn't just behavioral - it comes from a deep sense that it matters, that the people and things they're responsible for deserve that consistency." },
      { title: "Healing presence", desc: "In situations of conflict, grief, or difficulty, SU6 tends to bring a quality of steadying care that helps people feel less alone with what they're carrying. This isn't a skill they've developed - it's who they are." }
    ],
    challenges: [
      { title: "Martyrdom", desc: "SU6 can give until there's nothing left, and then feel resentful that no one noticed and reciprocated. The pattern is real and common: self-sacrifice followed by silent resentment, followed by more self-sacrifice. The exit requires learning to ask for what they need before they've run dry." },
      { title: "Over-controlling", desc: "The desire for harmony and the deep investment in others' wellbeing can tip into a kind of management - telling people what to do, worrying on their behalf, offering unsolicited advice. This comes from genuine love, but it doesn't always land that way." },
      { title: "Difficulty accepting imperfection", desc: "SU6's idealism about relationships and family means that real life's inevitable messiness can feel like failure. The gap between the vision and the reality is a source of pain that the number needs to make peace with rather than trying to close through effort." },
      { title: "Neglecting self", desc: "Self-care tends to feel selfish to SU6 - like time taken from someone else's needs. The understanding that they can only give sustainably from a place of genuine fullness takes most SU6 people a long time to actually internalize, as opposed to just knowing it intellectually." }
    ],
    love: [
      "Love is the primary domain of soul urge 6. It's where the number expresses most fully, and it's where the work tends to be most concentrated. SU6 in a relationship brings depth of care, practical devotion, and a quality of attention that makes their partner feel genuinely known and genuinely loved.",
      "What SU6 needs in return is to be cared for as they care for others - to have their needs noticed, to be asked about their own experience, to be held as well as to hold. When that reciprocity is absent, the quiet resentment that builds is usually invisible from the outside until it becomes too large to ignore.",
      "The growth edge is taking up appropriate space in the relationship - bringing their own needs and preferences into the picture with the same attention they give to everyone else's, and trusting that a relationship can sustain a full person on both sides."
    ],
    career: [
      "Soul urge 6 is motivated by the sense that their work matters to people - that it contributes to wellbeing, builds something worth having, or makes lives better in some tangible way. The career that works for SU6 is one with a relational and values-driven core.",
      "Healthcare, teaching, social work, counseling, family law, community organizing, healthcare administration, early childhood education - careers where caring is the point, not a side effect, tend to suit SU6 well. The work needs to feel like service rather than production.",
      "The career risk for SU6 is staying in a role that makes demands on their care without giving enough back. The depletion is real, the boundary-setting is hard, and the sense of vocation can make it difficult to acknowledge when a situation has become genuinely unsustainable."
    ],
    faq: [
      {
        q: "What does soul urge number 6 mean?",
        a: ["Soul urge number 6 describes a deep inner need to care for others and to create harmony in the spaces and relationships they inhabit. At the core, SU6 wants to be genuinely needed and to build a life organized around love and responsibility.", "It's the number that says home, family, and community aren't just nice to have - they're what makes life feel real."]
      },
      {
        q: "Is soul urge 6 too selfless?",
        a: ["The potential is there. SU6's natural orientation toward caring for others can slide into self-erasure - giving consistently more than they receive, making their own happiness contingent on everyone else's, and losing track of their own needs in the process.", "The work for SU6 isn't to stop caring - it's to include themselves in what they care for."]
      },
      {
        q: "What careers suit soul urge 6?",
        a: ["Careers where caring is the point: healthcare, teaching, social work, counseling, community organizing, early childhood education, family services. The requirement is that the work feels like genuine service to people or communities, not just output toward an abstract goal."]
      },
      {
        q: "What is the shadow side of soul urge 6?",
        a: ["Martyrdom, over-control, and difficulty accepting imperfection. The love is real, but it can be expressed in ways that don't feel like love to the people receiving it - managing rather than trusting, giving without asking what's actually needed, holding relationships to an ideal they can never quite meet.", "The invitation is to love without trying to control outcomes, and to remember that they are also someone worth caring for."]
      },
      {
        q: "How is soul urge 6 different from life path 6?",
        a: ["Life path 6 describes the terrain - the themes and conditions of the life. Soul urge 6 describes the inner motivation - what SU6 most deeply wants. Having both intensifies the nurturing, responsibility-oriented energy significantly.", "The practical difference: life path 6 tends to bring those themes into your circumstances regardless of your choices. Soul urge 6 is more about what you privately want and seek, even when your life path hasn't overtly delivered it."]
      },
      {
        q: "How does soul urge 6 show up in relationships?",
        a: ["As deep, practical devotion. SU6 shows up, follows through, makes the relationship feel warm and cared for. Their partner tends to feel genuinely known.", "The challenge is reciprocity and directness - learning to ask for care rather than waiting to be noticed, and trusting that the relationship can hold both people's needs rather than just one person's."]
      }
    ],
    related: [
      { n: "2", label: "Soul Urge 2", note: "Also relationally driven - but SU2 centers partnership rather than nurturing responsibility." },
      { n: "9", label: "Soul Urge 9", note: "SU9 expands care outward to humanity at large - the universal version of SU6's personal love." },
      { n: "life-path-number-6", label: "Life Path 6", note: "The life path equivalent - same nurturing, responsibility-oriented energy." }
    ]
  },
  {
    n: 7,
    title: "The Thinker",
    shortDesc: "Soul urge 7 wants to understand - not just know, but genuinely understand. The inner life is organized around questions, and the most important ones are the deep ones.",
    heroSubtitle: "Your deepest motivation is understanding - to get beneath the surface of things and find out what's actually true.",
    meaning: [
      "Soul urge 7 describes a deep, private need to understand. Not just to accumulate information - to actually understand: why things are the way they are, what's beneath the surface of the obvious explanation, what the deeper pattern is. This is the number's primary orientation, and it shapes everything: what SU7 reads, what they think about, what conversations they find worth having, what they spend their time on when no one's asking.",
      "The soul urge is calculated from the vowels in the birth name. For SU7, those vowels reveal an inner world that is substantially more interior than the external personality suggests. SU7 people often appear reserved or quiet in social situations not because they lack things to say, but because most conversations aren't operating at the level they find genuinely interesting.",
      "The challenge with SU7 is the shadow form of the search for understanding, which is isolation. When the inner world becomes more real than the outer one, when solitude is preferred so consistently that connection is gradually lost, when the analysis becomes a way to not feel - the intelligence that's the number's gift starts working against the aliveness it's supposed to illuminate."
    ],
    personality: [
      "SU7 people have a quality of depth that's immediately perceptible even when it's not being expressed. There's a sense of someone thinking, observing, processing - a quality of interiority that other people find either fascinating or slightly unnerving, depending on how much depth they're comfortable with themselves.",
      "The social personality tends to be selective. SU7 isn't antisocial, exactly, but they find most social small talk unrewarding at a level that's hard to pretend through indefinitely. What they want from social interaction is the conversation that goes somewhere real - the exchange that leaves both people different than when it began.",
      "The inner world for SU7 is typically rich, complex, and somewhat turbulent. The constant analysis doesn't stop when they're alone; it often intensifies. SU7 can spend significant internal energy on questions that have no final answer, which is part of the pleasure and part of the exhaustion. Learning to rest - to turn the analytical mind off for stretches - is often a significant challenge."
    ],
    strengths: [
      { title: "Depth of analysis", desc: "SU7 can go further into a question than most people are willing to follow. This isn't just intelligence in the conventional sense - it's a particular kind of patience with complexity, a willingness to hold multiple interpretations and test them against each other rather than settling for the first adequate answer." },
      { title: "Pattern recognition", desc: "SU7 sees connections between things that seem unrelated. The ability to abstract from specific instances to the underlying principle is one of the number's most consistent cognitive gifts." },
      { title: "Intellectual honesty", desc: "SU7 cares more about getting it right than about being right. When their analysis leads to a conclusion that contradicts their prior beliefs, they update. This isn't universal, but it's the number's orientation at its best." },
      { title: "Self-sufficiency", desc: "SU7 is comfortable in their own company in a way that most numbers aren't. They don't need external stimulation to feel okay - the inner world provides its own texture and interest. This makes them resilient in circumstances where other people would feel isolated." }
    ],
    challenges: [
      { title: "Emotional distance", desc: "The analytical orientation can become a way of managing emotional experience rather than having it. SU7 understands their feelings more readily than they feel them, and the gap between knowing what's happening and actually being present with it can be significant." },
      { title: "Isolation", desc: "The preference for solitude, left unchecked, can gradually become a habit that's hard to break - where social connection feels more effortful than it's worth, and the inner world has become so primary that the outer one feels like an interruption." },
      { title: "Perfectionist standards", desc: "SU7 often applies the same exacting standard to their own understanding that they apply to ideas generally. When their knowledge or analysis feels incomplete, they hesitate to act or share - waiting for a certainty that may never arrive." },
      { title: "Difficulty with the irrational", desc: "Not everything worth having can be analyzed into clarity, and some of the most important things in life - love, grief, awe - resist the kind of systematic understanding that SU7 is built for. Learning to tolerate the irreducibly mysterious is important and hard." }
    ],
    love: [
      "In relationships, soul urge 7 needs depth, real understanding, and the sense that someone is genuinely trying to know who they are. Superficial connection isn't just unsatisfying for SU7 - it's exhausting in a way that makes withdrawal seem like the only sensible option.",
      "What they bring is genuine attention and a quality of knowing - the partner of an SU7 tends to feel understood in ways they haven't experienced before, because SU7 is actually trying to understand, not just be pleasant. This is a real and uncommon gift.",
      "The growth edge is reciprocity and vulnerability - letting someone else's understanding of them be part of the picture, and risking being known rather than just doing the knowing. The inner world that SU7 values so much becomes more, not less, when it's shared."
    ],
    career: [
      "Soul urge 7 is motivated by the opportunity to go deep - to understand something at a level that most people don't reach. The career that works is one where the questions are interesting, where depth is valued rather than penalized, and where SU7 can develop genuine expertise rather than just accumulating information.",
      "Research, philosophy, writing, psychology, medicine, technology, academia - any field where the work requires sustained intellectual engagement with complex questions tends to suit SU7 well. What they can't sustain is shallow work, or work that requires performing certainty they don't have.",
      "The career risk for SU7 is staying in the purely analytical domain indefinitely to avoid the messy human interactions that meaningful work eventually requires. At some point, the understanding needs to go somewhere - to be shared, applied, tested against reality, and connected to the lives of other people."
    ],
    faq: [
      {
        q: "What does soul urge number 7 mean?",
        a: ["Soul urge number 7 describes a deep inner need to understand - to go beneath the surface of things and find out what's actually true. At the core, SU7 wants depth: in their thinking, in their relationships, in their relationship with the world.", "It's the number that says the search for meaning isn't philosophical window-dressing. It's the thing that makes life feel worthwhile."]
      },
      {
        q: "Is soul urge 7 introverted?",
        a: ["Usually - though the specific form varies. SU7 is oriented toward their inner world more than most numbers, and social interaction that doesn't engage the inner world tends to be draining rather than energizing.", "The thing to understand is that the introversion is in service of the search - it's not disengagement from life, it's engagement with the deeper layers of it."]
      },
      {
        q: "What careers suit soul urge 7?",
        a: ["Research, writing, philosophy, psychology, medicine, technology, academia, and any field where sustained intellectual engagement with complex questions is the core of the work. SU7 needs questions that are genuinely worth asking and answers that are genuinely hard to reach."]
      },
      {
        q: "What is the shadow side of soul urge 7?",
        a: ["Isolation, emotional distance, and analysis as a substitute for experience. The inner world becomes so primary that the outer one starts to feel like an interruption - which narrows life significantly.", "The invitation is to bring the understanding into contact with other people and with actual lived experience, not just keep it in the interior."]
      },
      {
        q: "How does soul urge 7 show up in relationships?",
        a: ["As genuine depth of attention. SU7 partners actually try to understand - and the people who experience that tend to find it rare and remarkable.", "The challenge is reciprocity and emotional availability. SU7 needs to let themselves be known as well as doing the knowing, and to be present with emotion rather than analyzing it."]
      },
      {
        q: "How is soul urge 7 calculated?",
        a: ["From the vowels in your full birth name. Assign each vowel its Pythagorean value: A=1, E=5, I=9, O=6, U=3. Add all vowel values and reduce to a single digit. Stop at 11, 22, or 33."]
      }
    ],
    related: [
      { n: "4", label: "Soul Urge 4", note: "Also systematic and analytical - but SU4 builds rather than seeks understanding." },
      { n: "5", label: "Soul Urge 5", note: "Also curious - but SU5's curiosity turns outward and experiential rather than inward and analytical." },
      { n: "life-path-number-7", label: "Life Path 7", note: "The life path equivalent - same seeking, introspective orientation." }
    ]
  },
  {
    n: 8,
    title: "The Achiever",
    shortDesc: "Soul urge 8 wants to succeed at a meaningful scale - to build something significant, to command genuine authority, and to be recognized for their capacity to make things happen.",
    heroSubtitle: "Your deepest motivation is power in the best sense - the capacity to make significant things happen in the world.",
    meaning: [
      "Soul urge 8 describes a deep, private drive for achievement, authority, and material mastery. SU8 people aren't just ambitious - they feel the pull toward building something at a real scale, having their capability genuinely recognized, and earning the kind of authority that comes from actually being excellent at what they do. This isn't ego in the empty sense. It's the number asking for expression.",
      "The soul urge number comes from the vowels in the birth name, and for SU8, those vowels reveal an inner life organized around power - not power over others in the dominating sense, but power in the larger sense of capacity, influence, and the ability to effect meaningful change. SU8 at its best is the force that gets important things built.",
      "The shadow is the misuse of that drive - the pursuit of success that tramples rather than leads, the accumulation of achievement as a substitute for actual fulfillment, the conflation of net worth with self-worth. SU8 needs to understand the difference between what the number is reaching for - genuine capacity and real contribution - and what the shadow mistakenly substitutes for it."
    ],
    personality: [
      "SU8 people tend to project a quality of authority - a sense that they're used to being taken seriously, that their time matters, that they're assessing situations for leverage and opportunity. This can be compelling and it can be intimidating, sometimes simultaneously.",
      "The inner world is more complex than the confident exterior suggests. SU8 typically carries a private fear of failure - of not being adequate, of not achieving what the number is reaching for - that drives the ambition as much as genuine positive motivation. Learning to want success for the right reasons, rather than to quiet the fear, is one of SU8's most important inner tasks.",
      "The pattern that shows up most consistently is a tendency to evaluate people and situations in terms of their utility to what SU8 is building. Not maliciously - but the transactional quality can feel cool to people who want the relationship to be primary rather than instrumental. SU8 who has done the work learns to be fully present with people for their own sake."
    ],
    strengths: [
      { title: "Executive capacity", desc: "SU8 is naturally oriented toward action, decision, and execution at scale. They see what needs to happen, how to resource it, and how to organize other people to make it happen. This isn't just drive - it's a form of intelligence that's genuinely rare." },
      { title: "Financial intelligence", desc: "SU8 tends to understand how money works, how resources generate more resources, and how to build material security in a way that creates real options rather than just comfort. This is both a gift and, at the shadow level, a potential obsession." },
      { title: "Resilience", desc: "SU8 doesn't fold when things get difficult. The same drive that reaches for achievement is also what keeps them in the game when the game is hard. Setbacks are read as information rather than verdicts - and responded to accordingly." },
      { title: "Natural authority", desc: "When SU8 is operating at their best, there's a quality of earned authority that others respond to - not just confidence, but the kind of presence that comes from actually knowing what they're doing. Leadership that people want to follow." }
    ],
    challenges: [
      { title: "Conflating worth with achievement", desc: "SU8's deepest risk is organizing their entire sense of self-worth around their level of success - so that a setback isn't just a business problem, it's an existential one. Learning that who they are and what they've achieved are genuinely separate is important and difficult." },
      { title: "Overwork as default", desc: "The drive doesn't have an automatic off switch for SU8. What looks like ambition from the outside can feel like compulsion from the inside - the inability to stop building even when it would clearly serve them to rest. The work eventually extracts a cost that all the achievement doesn't offset." },
      { title: "Power dynamics in relationships", desc: "SU8's orientation toward authority and effectiveness can create imbalances in personal relationships - where the transactional, resource-management mindset bleeds into contexts that ask for pure presence. The person who's the most capable in every room has to consciously learn to not be the most capable person in the room sometimes." },
      { title: "Materialism as substitute", desc: "Accumulation can become a way of managing what the number is really reaching for - genuine significance, the sense that the effort was worth it, that the building matters. When the material success arrives without the underlying sense of meaning, the emptiness is real." }
    ],
    love: [
      "In relationships, soul urge 8 needs a partner who can hold their own - someone with their own strength, their own direction, their own sense of what they're building. SU8 isn't well served by a partner who shrinks, who needs rescuing, or who organizes their life around SU8's goals rather than pursuing their own.",
      "What they bring is a quality of ambition on behalf of the relationship - the same capacity they bring to everything else, applied to making the partnership work at a real level. SU8 partners tend to feel looked after in the material and practical sense, sometimes at the expense of the emotional one.",
      "The growth edge is learning to be fully present without the achievement orientation - to be in the relationship without making it a project, to receive care rather than just provide it, and to let their partner know them at the level beneath the accomplishments."
    ],
    career: [
      "Soul urge 8 is motivated by significant achievement and genuine impact. The career that works is one with real stakes - where the decisions matter, where the scale is meaningful, where success feels like it counts for something beyond personal advancement.",
      "Entrepreneurship, executive leadership, finance, law, medicine, real estate, politics, large-scale creative direction - careers where real authority is available and real impact is possible tend to suit SU8 well. What they can't sustain is work that feels trivially small relative to what they know they could be doing.",
      "The career risk is burning out before the significant work gets done - staying at 100% for so long that the engine fails before the vision is realized. SU8 needs to learn to manage their energy with the same intelligence they manage their resources."
    ],
    faq: [
      {
        q: "What does soul urge number 8 mean?",
        a: ["Soul urge number 8 describes a deep inner drive toward achievement, authority, and meaningful impact at scale. At the core, SU8 wants to build something significant - to have the capacity to make important things happen, and to be genuinely recognized for it.", "It's the number that says: the ambition isn't excess. It's the authentic direction of your energy."]
      },
      {
        q: "Is soul urge 8 materialistic?",
        a: ["Material success is a language SU8 speaks fluently, and it matters to them in ways that other numbers sometimes judge without understanding. The accumulation of resources isn't just status for SU8 - it's the practical evidence that the capacity is real.", "The shadow is when accumulation becomes a substitute for the meaning the number is really reaching for. Materialism as an end in itself tends to feel hollow even to SU8."]
      },
      {
        q: "What careers suit soul urge 8?",
        a: ["Careers where real authority is available and real impact is possible: entrepreneurship, executive leadership, finance, law, medicine, real estate. The requirement is that the stakes are meaningful - that what they're building actually matters at a scale that matches the drive."]
      },
      {
        q: "What is the shadow side of soul urge 8?",
        a: ["Conflating worth with achievement, overwork as compulsion, and power dynamics that don't belong in personal relationships. Also materialism as a substitute for the genuine significance the number is really reaching for.", "The work is distinguishing between what the number is genuinely asking for - meaningful capacity and contribution - and what the shadow substitutes in its place."]
      },
      {
        q: "How does soul urge 8 show up in relationships?",
        a: ["As a provider - materially, practically, and in terms of making things work. SU8 tends to show love by solving problems and creating security rather than through emotional expression.", "The growth edge is presence without achievement orientation - being in the relationship for its own sake, and letting the partner know the person beneath the accomplishments."]
      },
      {
        q: "How is soul urge 8 calculated?",
        a: ["From the vowels in your full birth name. A=1, E=5, I=9, O=6, U=3. Add all vowel values together and reduce to a single digit. Stop at 11, 22, or 33."]
      }
    ],
    related: [
      { n: "4", label: "Soul Urge 4", note: "Also focused on building - but SU4 builds through structure rather than authority." },
      { n: "1", label: "Soul Urge 1", note: "Also independently driven - but SU1 seeks originality where SU8 seeks impact and authority." },
      { n: "life-path-number-8", label: "Life Path 8", note: "The life path equivalent - same achievement-oriented, powerful energy." }
    ]
  },
  {
    n: 9,
    title: "The Idealist",
    shortDesc: "Soul urge 9 wants to contribute something that matters - to leave things better than they were found. The inner life is organized around the larger picture.",
    heroSubtitle: "Your deepest motivation is contribution - to be part of something larger than yourself, and to make things genuinely better.",
    meaning: [
      "Soul urge 9 describes a deep, private orientation toward the universal - toward the wellbeing of people in general, not just the ones directly around them. SU9 people feel a pull toward contributing something meaningful, toward leaving things better than they found them, toward doing work that matters beyond the immediate and personal. This isn't a moral posture they've adopted. It's how the number is oriented.",
      "The soul urge number comes from the vowels in the birth name. For SU9, those vowels reveal an inner world organized around compassion, idealism, and a kind of wisdom that tends to arrive early and run deep - a sense of the larger picture that can feel like both a gift and a burden. SU9 people often feel older than their circumstances, more aware of what matters and what doesn't, sometimes before they have the experience to explain why.",
      "The challenge for SU9 is the weight of the idealism - the private grief of seeing how far reality falls short of what's possible, and the risk that this gap becomes either a source of paralysis (it's too big, what can I do?) or a source of self-righteous detachment (most people don't understand). Neither serves what the number is reaching for."
    ],
    personality: [
      "SU9 people tend to have a quality of composed acceptance about them - not indifference, but a kind of equanimity that comes from having already thought through the difficult questions. They've usually made peace with impermanence, with the complexity of people, with the gap between ideal and real. This can be a gift to the people around them.",
      "Underneath the composure is a rich, sometimes turbulent inner world. SU9 feels things deeply - especially injustice, suffering, and the sense that things should be better than they are. The response isn't usually dramatic; it tends to go inward and become either motivation or private grief, depending on how much access to meaningful work the number currently has.",
      "The shadow pattern that shows up most often is over-giving without clear boundaries - the tendency to take on more than is sustainable because the need is always visible and always real. SU9 can lose themselves in service the same way SU6 can lose themselves in care, with the same eventual depletion."
    ],
    strengths: [
      { title: "Broad perspective", desc: "SU9 naturally thinks at a scale that most numbers don't reach - about systems rather than individuals, about long-term consequences rather than immediate outcomes, about the interconnectedness of things that seem separate. This perspective is genuinely valuable and often rare." },
      { title: "Compassionate intelligence", desc: "SU9 combines feeling for others with the capacity to think clearly about what would actually help them. The emotion doesn't distort the analysis - it informs it. This makes SU9 unusually effective in situations that require both empathy and clear thinking." },
      { title: "Wisdom under pressure", desc: "In difficult situations, SU9 tends to access a settled quality that other people find anchoring. They've usually already thought through the hard scenarios and they're not panicking. This steadiness is real and genuinely useful." },
      { title: "Generosity of spirit", desc: "SU9's compassion is broad - it extends beyond the immediate circle, beyond the familiar, toward people and situations that most numbers don't naturally feel drawn to. This generosity, at its best, is a real contribution to the world." }
    ],
    challenges: [
      { title: "Difficulty letting go", desc: "For a number that's supposedly about completion and release, SU9 can struggle enormously with letting go of old pain, old patterns, and old stories about who they are. The wisdom is there; the application is the challenge." },
      { title: "Idealism as escape", desc: "The focus on the larger picture can become a way of avoiding the immediate and personal - the specific relationship in front of them, the concrete task at hand, the actual person asking for attention. The universal can be easier to love than the particular." },
      { title: "Over-extension", desc: "Because SU9 sees need everywhere and feels genuinely moved by it, they can take on more than they can sustain - spread themselves thin across too many causes, people, and commitments until the effectiveness they were hoping to have has been diluted by the overload." },
      { title: "Suppressing their own needs", desc: "The orientation toward others can become a pattern of systematically discounting their own needs as less important. SU9 often needs explicit reminders that they are also someone whose wellbeing matters - and permission to act on that understanding." }
    ],
    love: [
      "In relationships, soul urge 9 brings a quality of love that is unusually spacious - accepting, non-possessive, genuinely interested in the other person's full development. They don't try to make their partner fit a particular shape. They tend to love people as they actually are, which is a rare and real gift.",
      "What SU9 needs in return is to be known at the depth they're operating from - a partner who can engage with the larger questions, who brings their own sense of meaning and purpose, who isn't asking SU9 to make themselves smaller to fit a more conventional relationship structure.",
      "The growth edge is staying present to the immediate and personal when the universal is calling - letting the specific relationship matter as much as the larger cause, and letting themselves be held as well as holding."
    ],
    career: [
      "Soul urge 9 is motivated by meaningful contribution at a real scale. The career that works is one where the work clearly matters - where what they're doing is making things better in some measurable way for people or communities or the world.",
      "Humanitarian work, medicine, law, teaching, writing, counseling, public policy, environmental work, art that aims to expand consciousness - careers where the purpose is large and the contribution is real tend to suit SU9 well. What they cannot sustain is work that feels meaningless or actively harmful.",
      "The career risk for SU9 is the depletion of chronic over-service - giving so much to the work that there's nothing left, and the meaning eventually gets buried under the exhaustion. SU9 needs to build a sustainable relationship with their own limits, in career as in everything else."
    ],
    faq: [
      {
        q: "What does soul urge number 9 mean?",
        a: ["Soul urge number 9 describes a deep inner orientation toward the universal - toward contributing something meaningful that leaves things better than they were. At the core, SU9 wants their life to matter in the larger sense, not just the personal one.", "It's the number that says: the pull toward service and meaning isn't idealism you've been taught. It's your actual inner architecture."]
      },
      {
        q: "Is soul urge 9 always altruistic?",
        a: ["The orientation is there - but real humans are complex, and SU9's idealism about humanity in the abstract can coexist with specific, ordinary human qualities like irritation, self-interest, and impatience.", "What distinguishes SU9 isn't perfection. It's the private sense that things should be better - and the genuine motivation to do something about it."]
      },
      {
        q: "What careers suit soul urge 9?",
        a: ["Careers where meaningful contribution is the core: humanitarian work, medicine, law, teaching, counseling, public policy, writing, environmental work, social enterprise. The requirement is that the purpose is real and the impact is tangible."]
      },
      {
        q: "What is the shadow side of soul urge 9?",
        a: ["Difficulty letting go, idealism as a way of avoiding the immediate, over-extension, and the chronic suppression of their own needs in the service of everything else.", "The work is learning to include themselves in the compassion they extend so readily to others - and to build a sustainable relationship with their own limits."]
      },
      {
        q: "How does soul urge 9 show up in relationships?",
        a: ["As spacious, accepting love - the kind that doesn't try to make a partner fit a particular mold. SU9 tends to love people as they actually are, which is genuinely unusual and deeply valuable.", "The challenge is presence - staying fully connected to the specific person in front of them when the larger world is also calling."]
      },
      {
        q: "How is soul urge 9 calculated?",
        a: ["From the vowels in your full birth name. A=1, E=5, I=9, O=6, U=3. Add all vowel values and reduce to a single digit. Stop at 11, 22, or 33."]
      }
    ],
    related: [
      { n: "6", label: "Soul Urge 6", note: "The personal version of the same love - SU6 focuses on the immediate circle, SU9 on the world." },
      { n: "life-path-number-9", label: "Life Path 9", note: "The life path equivalent - same universal, humanitarian orientation." },
      { n: "8", label: "Soul Urge 8", note: "Both want to make a real impact - SU8 through personal achievement, SU9 through service." }
    ]
  },
  {
    n: 11,
    title: "The Illuminator",
    shortDesc: "Soul urge 11 wants to inspire and illuminate - to bring something through from a deeper level of perception and share it with the world. The inner life is unusually intense.",
    heroSubtitle: "Your deepest motivation is inspiration - to access something true and translate it for others who need it.",
    meaning: [
      "Soul urge 11 is a master number - a higher-frequency version of the 2 energy, but with a layer of intuitive intensity and spiritual calling added. At the core, SU11 people want to inspire: to bring through something true, something that illuminates, something that helps other people see differently or feel less alone. This isn't an ambition they've developed. It's something they feel as a pull from inside.",
      "What makes SU11 different from SU2 isn't the relational quality - both are deeply oriented toward others. What's different is the channel through which that orientation operates. SU11 tends to access something beyond the ordinary - a quality of insight, creativity, or spiritual perception that, when it's flowing, feels like it's coming through them rather than from them. When it isn't flowing, the disconnection is felt acutely.",
      "The challenge with SU11 is the intensity of the inner life. This number carries a higher voltage than most, and the question is always whether SU11 can channel it effectively or whether it overloads the system - into anxiety, nervous sensitivity, or the kind of spiritual crisis that comes when the calling is real but the capacity to hold it is still developing."
    ],
    personality: [
      "SU11 people tend to be unusually perceptive - picking up on subtleties that other people miss, reading emotional undercurrents that haven't been spoken, having intuitions that turn out to be accurate in ways that are hard to explain. This perception is often experienced before it's understood.",
      "There's usually a quality of intensity about SU11 that's hard to describe precisely - a sense that more is going on internally than is being expressed externally, that there's a depth operating beneath whatever conversation they're having. Some people find this compelling. Others find it slightly overwhelming.",
      "The inner world is almost always turbulent. SU11 tends toward both highs that feel genuinely luminous and lows that feel genuinely dark. Managing this amplitude - learning to be with the intensity without being controlled by it - is one of the primary tasks of working consciously with this soul urge."
    ],
    strengths: [
      { title: "Intuitive intelligence", desc: "SU11 accesses information through channels that analytical intelligence doesn't reach. This isn't mysticism for its own sake - it's a real form of knowing that, when trusted and developed, produces genuinely accurate insights about people, situations, and directions." },
      { title: "Inspiring others", desc: "When SU11 is operating at their best, there's a quality of genuine illumination to what they bring - they help people see things they couldn't see before, feel things they'd been holding at a distance, access meaning that was there but unavailable. This is an extraordinary gift." },
      { title: "Sensitivity as intelligence", desc: "The sensitivity that makes SU11's inner life turbulent is the same quality that makes their perception so accurate. It's not a bug. It's a form of intelligence that produces real value when it's working." },
      { title: "Bridge-building", desc: "SU11 tends to be able to translate between different kinds of understanding - the intuitive and the rational, the spiritual and the practical, the individual experience and the universal pattern. This bridging capacity is genuinely valuable." }
    ],
    challenges: [
      { title: "Nervous tension", desc: "The high-frequency energy of SU11 tends to run through the nervous system with more intensity than most people's nervous systems are designed to handle without care. Anxiety, hypersensitivity, and the tendency to absorb too much from environments and people are all expressions of the same voltage." },
      { title: "Doubt of the inner knowing", desc: "SU11 often has clear intuitions and then immediately undermines them - distrusting the perception, deferring to what other people think, second-guessing the insight before it can be tested. Learning to trust what they actually know is often a years-long project." },
      { title: "Inconsistency", desc: "The amplitude of SU11's inner life can produce significant variation in output - brilliant and connected one phase, scattered and depleted the next. Managing this inconsistency without shame is part of working with the number." },
      { title: "Idealization", desc: "SU11 can hold an idealized vision of what the inspiration or the relationship or the work should be that makes the actual version feel perpetually inadequate. The perfect is a genuine enemy of the good here." }
    ],
    love: [
      "In relationships, soul urge 11 wants a rare thing: genuine meeting at depth. Not just compatibility, not just safety - real recognition. The sense that the other person sees and accepts the full extent of who they are, including the intensity and the sensitivity that can be hard to hold.",
      "What they bring is an extraordinary quality of attention - SU11 knows their partner in ways that the partner sometimes doesn't know themselves, because the perception operates at a level that bypasses what's consciously presented. This can be beautiful and occasionally disconcerting.",
      "The growth edge is grounding - learning to stay present and stable in the relationship rather than floating in the intensity, and trusting that the depth they're reaching for is available in the ordinary moments of an ongoing partnership, not just in the luminous early connection."
    ],
    career: [
      "Soul urge 11 is motivated by the opportunity to bring something through - to use work as a channel for the insight, creativity, or spiritual intelligence that is the number's primary asset. The career that works is one where depth is valued and where SU11's particular way of knowing can actually be used.",
      "Creative work, teaching, counseling, healing arts, spiritual direction, writing, psychology, music, film - any field where the point is to illuminate something true and share it with people who need it tends to suit SU11 well. What drains the number is work that requires them to suppress or ignore the perception that is their primary gift.",
      "The career risk for SU11 is the long period of preparation - the sense that they're not ready yet, that the work isn't good enough yet, that the insight hasn't fully clarified. SU11 often waits longer than necessary before trusting what they have."
    ],
    faq: [
      {
        q: "What does soul urge 11 mean?",
        a: ["Soul urge 11 is a master number that describes a deep inner need to inspire and illuminate - to bring something through from a deeper level of perception and share it with people who need it. At the core, SU11 wants their life to be a channel for something real and meaningful.", "The 11 carries the relational quality of the 2 energy beneath it, plus an additional layer of intuitive intensity and spiritual calling."]
      },
      {
        q: "Is soul urge 11 rare?",
        a: ["Master numbers are less common than single-digit soul urges - but SU11 in particular tends to feel rare in experience, because the combination of deep sensitivity and intuitive perception is genuinely distinctive.", "Whether it's 'rare' in a statistical sense depends on the name and calculation. What's more relevant is whether the description of the number matches the actual inner experience."]
      },
      {
        q: "What is the difference between soul urge 11 and soul urge 2?",
        a: ["SU2 describes a soul urge centered on partnership, harmony, and the quiet skill of connecting people. SU11 contains that energy - it includes the deep relational quality of the 2 - but adds an additional dimension: the intuitive, inspirational, spiritually-oriented calling that distinguishes master numbers.", "The experience of SU11 tends to be more intense, more volatile, and more specifically directed toward inspiration and illumination than SU2."]
      },
      {
        q: "What is the shadow of soul urge 11?",
        a: ["Nervous tension, self-doubt, inconsistency, and idealization. The same sensitivity that enables the perception can make the inner world genuinely difficult to live in. And the tendency to doubt the intuition before testing it can prevent SU11 from ever fully trusting what they actually know.", "The work is learning to hold the intensity rather than being held by it."]
      },
      {
        q: "What careers suit soul urge 11?",
        a: ["Work that allows the intuitive and inspirational capacity to be used: creative work, teaching, counseling, healing arts, writing, psychology, spiritual direction. The requirement is that the perception can be expressed and that depth is valued.", "Work that requires SU11 to suppress or ignore their way of knowing tends to produce a particular kind of quiet misery."]
      },
      {
        q: "How is soul urge 11 calculated?",
        a: ["The same way as single-digit soul urges: from the vowels in the full birth name. A=1, E=5, I=9, O=6, U=3. Add all vowel values together and reduce step by step - but if you reach 11 at any step, stop. Don't reduce it to 2. The 11 stands."]
      }
    ],
    related: [
      { n: "2", label: "Soul Urge 2", note: "The base energy beneath SU11 - relational and peace-oriented." },
      { n: "life-path-number-11", label: "Life Path 11", note: "The life path equivalent - same intuitive, inspirational master number energy." },
      { n: "22", label: "Soul Urge 22", note: "The other major master soul urge - where SU11 inspires, SU22 builds." }
    ]
  },
  {
    n: 22,
    title: "The Builder",
    shortDesc: "Soul urge 22 wants to build something that genuinely matters at scale - something that improves the world in a measurable, lasting way. The inner drive matches the ambition of the master number.",
    heroSubtitle: "Your deepest motivation is to build something lasting at a real scale - something the world can use.",
    meaning: [
      "Soul urge 22 is the Master Builder - a master number that carries the practical, building energy of the 4 at a much larger scale and with a more explicitly universal purpose. SU22 people feel a pull toward significant work: not just building something functional, but building something that changes conditions for a lot of people over a long time. The ambition at this level isn't personal vanity. It's the number expressing its actual orientation.",
      "The soul urge number comes from the vowels in the birth name. For SU22, those vowels reveal an inner life organized around vision and construction - a private sense that there is something significant to be built, and that they are someone who could build it, if they develop the capacity and find the right circumstances. This can be exhilarating and, for long stretches, quietly terrifying.",
      "The challenge with SU22 is the gap between the scale of the vision and the available resources at any given moment. Most of SU22's life involves working at the level of SU4 - practical, careful, methodical - while carrying the awareness of what's actually being aimed for. Learning to trust the incremental work as the path to the big vision, rather than becoming paralyzed by the distance between current and intended, is one of SU22's most important inner tasks."
    ],
    personality: [
      "SU22 people tend to have a quality of seriousness and presence - a sense that they're taking the measure of things, that they're thinking about what can actually be built from what's here. The vision isn't always articulated, but it's almost always present.",
      "The inner world is organized around potential and responsibility in a way that can be heavy to carry. SU22 tends to feel the weight of what they could be doing even when they're doing plenty. There's a quality of private restlessness that comes from always being aware of the gap between what exists and what could be built.",
      "The shadow pattern to watch is the paralysis of the gap - where the scale of the vision makes the available starting points feel inadequate, and SU22 waits for the right conditions rather than building with what's actually there. The master builder who never breaks ground on anything because the materials aren't adequate yet is a real risk."
    ],
    strengths: [
      { title: "Vision at scale", desc: "SU22 can see how things could be organized differently - how resources, people, systems, and ideas could be combined to produce something significantly better than what currently exists. This isn't daydreaming. It's a practical form of imagination that produces real blueprints." },
      { title: "Integration of ideal and practical", desc: "Where other numbers have either big vision or practical skill, SU22 has both - and more importantly, has the capacity to move between them, translating the ideal into specifications that actual people can build with actual resources in actual circumstances." },
      { title: "Sustained commitment", desc: "The projects SU22 is built for don't complete quickly. The ability to maintain vision and drive across long timelines - years, decades - is one of the number's most distinctive and necessary qualities." },
      { title: "Inspiring action", desc: "SU22 at their best can communicate a vision in a way that makes other people want to be part of building it. This isn't just charisma - it's the specific quality of making a large possibility feel achievable to people who otherwise wouldn't know where to start." }
    ],
    challenges: [
      { title: "Paralysis of scale", desc: "The gap between the vision and the current situation can feel so large that getting started seems impossible, or what's available to start with seems hopelessly inadequate. SU22 needs to learn to begin from where they actually are." },
      { title: "Perfectionism that prevents release", desc: "The standard SU22 holds for the work is high - because the scale of what they're building demands precision. But the same perfectionism can prevent things from being released at all, keeping SU22 in permanent preparation rather than actual construction." },
      { title: "Weight of responsibility", desc: "SU22 can feel the responsibility of the calling as a burden - carrying the sense of what needs to be built even in circumstances that don't yet allow them to build it. This weight needs to be set down sometimes, or it becomes depleting rather than motivating." },
      { title: "Difficulty operating at small scale", desc: "When SU22 is working on something that doesn't match the scale of their inner vision, there's a quality of frustration or underengagement that can be hard to conceal. Learning to value the small-scale work as genuine preparation rather than marking time is important." }
    ],
    love: [
      "In relationships, soul urge 22 brings a quality of profound commitment - when they decide a relationship is worth building, they build it with the same seriousness they bring to everything significant. The partner of an SU22 tends to feel genuinely held.",
      "What they need is a partner who can engage with the vision - who isn't intimidated by the scale of what SU22 is reaching for, who brings their own strength and direction, and who can be part of something larger rather than just the domestic center of SU22's life.",
      "The growth edge is being present in the relationship for its own sake, not as one more project in the portfolio of significant endeavors. The relationship deserves attention that isn't organized around what it can produce - just the attention of someone choosing to be fully here."
    ],
    career: [
      "Soul urge 22 is motivated by significant impact through building. The career that works is one where what they're creating actually matters at a real scale - where the work is building something that will outlast the immediate moment.",
      "Large-scale organizational leadership, social enterprise, architecture, engineering, medicine, public service, large creative projects, institutional building - careers where the scope is large and the impact is lasting tend to suit SU22 well.",
      "The career risk is the long buildup before the significant work is possible. Most SU22 people spend years in development - building skills, resources, relationships, understanding - before the larger vision becomes executable. Learning to value that preparation as essential rather than frustrating is one of the number's most important career lessons."
    ],
    faq: [
      {
        q: "What does soul urge 22 mean?",
        a: ["Soul urge 22 is the Master Builder - a master number that describes a deep inner drive to build something significant that improves conditions for a lot of people over a long time. At the core, SU22 wants their work to matter at a scale that matches the ambition of the number.", "It contains the practical building energy of the 4 beneath it, elevated to a universal purpose."]
      },
      {
        q: "Is soul urge 22 the same as expression number 22?",
        a: ["No - the soul urge is about inner motivation, and the expression number is about destiny direction. SU22 describes what you most deeply want. EN22 describes the direction your life is meant to move in.", "Having both amplifies the master builder energy significantly - both the private desire and the outer direction are aligned on the same large-scale purpose."]
      },
      {
        q: "What is the shadow of soul urge 22?",
        a: ["Paralysis - the gap between vision and current resources feels so large that starting seems impossible. Also perfectionism that keeps the work in perpetual preparation, and the weight of responsibility that becomes depleting rather than motivating.", "The work is learning to build from where you actually are, with what's actually here."]
      },
      {
        q: "What careers suit soul urge 22?",
        a: ["Careers where significant things are being built at real scale: large organizational leadership, social enterprise, architecture, engineering, medicine, public service, institutional building. The requirement is that the scope matches the drive."]
      },
      {
        q: "How does soul urge 22 show up in love?",
        a: ["As deep commitment and seriousness. When SU22 decides a relationship is worth building, they give it the same quality of sustained attention they give to everything significant.", "The challenge is presence for its own sake - letting the relationship be something they're in, not something they're building."]
      },
      {
        q: "How is soul urge 22 calculated?",
        a: ["From the vowels in the full birth name. A=1, E=5, I=9, O=6, U=3. Add all vowel values together and reduce step by step. If you reach 22 at any step, stop - don't reduce to 4. The master number stands."]
      }
    ],
    related: [
      { n: "4", label: "Soul Urge 4", note: "The base energy beneath SU22 - building through structure and precision." },
      { n: "life-path-number-22", label: "Life Path 22", note: "The life path equivalent - same master builder energy at the level of destiny." },
      { n: "11", label: "Soul Urge 11", note: "The other master soul urge - where SU11 inspires, SU22 builds." }
    ]
  },
  {
    n: 33,
    title: "The Compassionate",
    shortDesc: "Soul urge 33 wants to heal, teach, and serve at the deepest level - to be a genuine force for love and compassion in the world. The inner calling is both extraordinary and demanding.",
    heroSubtitle: "Your deepest motivation is unconditional love - to serve, to heal, and to be truly present for the people who need it.",
    meaning: [
      "Soul urge 33 is the Master Teacher - a master number that carries the nurturing, service-oriented energy of the 6 elevated to a universal and spiritually demanding level. SU33 people feel called to a form of service that goes beyond personal care: a compassion that extends toward people they don't know, toward suffering they can't directly address, toward the healing of the world in some larger sense. This isn't a fantasy they've cultivated. It's a genuine inner orientation.",
      "The soul urge number comes from the vowels in the birth name. For SU33, those vowels reveal an inner world organized around love as a practice - not the emotional experience of love, though that's present, but love as a commitment to showing up for others, to bringing presence and healing to situations that need it, to teaching what they know in service of other people's growth.",
      "The challenge for SU33 is the weight of the calling and the reality of being human. SU33 people often hold themselves to standards of compassion and service that no person can consistently meet - and the gap between the ideal and the actual produces a private suffering that other people rarely see. The work is learning to be fully human within the calling rather than trying to transcend the humanness."
    ],
    personality: [
      "SU33 people tend to project a quality of warmth and steady presence - a sense that they're genuinely seeing you, that they care about how you're doing, that the attention is real. This isn't a performance. It comes from an actual inner orientation toward other people's wellbeing.",
      "The inner world tends to be one of deep feeling and sometimes overwhelming empathy. SU33 absorbs others' pain in ways that are hard to distinguish from their own, and the line between compassion and over-identification can become blurred. Managing their own emotional boundaries while staying genuinely open is one of the number's primary challenges.",
      "There's a quality of old sadness in many SU33 people - not depression, exactly, but an awareness of suffering in the world that sits underneath even their genuine joy. They've felt the weight of what they're here for, and it doesn't lift easily."
    ],
    strengths: [
      { title: "Unconditional presence", desc: "SU33 can be with people in their most difficult moments without trying to fix them, minimize what they're going through, or redirect toward comfort. The quality of genuine presence - staying with what's actually true - is rare and genuinely healing." },
      { title: "Teaching through being", desc: "SU33 teaches less by what they say than by how they are. The quality of compassion, patience, and acceptance they embody is itself instructive to the people around them - it shows people what they might be capable of." },
      { title: "Depth of caring", desc: "When SU33 cares for someone, it's real - not conditional on the person meeting expectations, not withdrawn when the person is difficult, not organized around SU33's own needs. This quality of unconditional caring is extraordinary and genuinely transformative for people who receive it." },
      { title: "Resilience through service", desc: "SU33 people tend to discover that meaningful service - being genuinely useful to people in genuine need - is one of the primary sources of renewal in their own lives. The service replenishes what the service costs." }
    ],
    challenges: [
      { title: "Self-sacrifice past the point of sustainability", desc: "The same calling toward service that is SU33's gift can become a pattern of self-erasure - giving until there's nothing left, absorbing so much of others' pain that it becomes indistinguishable from their own, and never asking for the care they extend to everyone else." },
      { title: "Impossible standards", desc: "SU33 holds themselves to a standard of compassion and wisdom that no human being can consistently meet. The private self-judgment when they fall short - when they're irritable, or self-interested, or simply exhausted - can be genuinely punishing." },
      { title: "Difficulty receiving", desc: "The orientation toward giving is so strong in SU33 that receiving can feel structurally wrong - like a reversal of something fundamental. Learning to be cared for, to accept help, to let someone else hold them for a change, is often a significant and important challenge." },
      { title: "Martyrdom", desc: "The suffering of over-service, if it becomes a kind of identity - 'I gave everything and no one cared' - can curdle into resentment and martyrdom. The exit requires recognizing that giving without receiving isn't virtue; it's a pattern that needs addressing." }
    ],
    love: [
      "In relationships, soul urge 33 loves with an extraordinary depth and acceptance. Their partner tends to feel genuinely received - not evaluated, not managed, but truly accepted, including the parts that are difficult. This is an exceptional and uncommon gift.",
      "What SU33 needs in return is a partner who can hold them - who takes SU33's experience and wellbeing seriously, who asks how they are and means it, who makes space for SU33 to not be the one giving for a while. The person who is everyone else's support needs to be held too.",
      "The growth edge is receiving without guilt - letting love come in without immediately redirecting it outward, and trusting that taking up space in the relationship doesn't make them any less capable of serving others."
    ],
    career: [
      "Soul urge 33 is motivated by the opportunity to genuinely serve - to bring healing, teaching, or presence to people who need it. The career that works is one where the compassion and depth of understanding they carry can be used in service of real human need.",
      "Spiritual counseling, healing arts, teaching, medicine, social work, community leadership, nonprofit work, crisis support - careers where the human encounter is the point, and where what SU33 brings is genuinely needed, tend to suit the number well.",
      "The career risk is burnout from chronic over-service - the depletion that comes from giving more than is sustainable across a long career. SU33 needs to build structures and boundaries that allow them to serve without depleting - not because the need stops mattering, but because the capacity to meet it requires protection."
    ],
    faq: [
      {
        q: "What does soul urge 33 mean?",
        a: ["Soul urge 33 is the Master Teacher - a master number that describes a deep inner calling toward compassion, healing, and service at the highest level. At the core, SU33 wants to be a genuine force for love in the world - to bring healing and presence to people who need it.", "It carries the nurturing energy of the 6 beneath it, elevated to a universal spiritual calling."]
      },
      {
        q: "Is soul urge 33 exhausting?",
        a: ["The calling is demanding, yes. The combination of deep empathy, high standards, and genuine orientation toward service creates a lot of internal material to manage.", "But SU33 who has learned to build sustainable structures - including boundaries, renewal practices, and the ability to receive care - tends to find that meaningful service is also one of their primary sources of aliveness. The calling is heavy, but it's also what makes life feel real."]
      },
      {
        q: "What is the shadow of soul urge 33?",
        a: ["Impossible standards, self-sacrifice past sustainability, difficulty receiving, and the martyrdom that can develop when over-giving becomes an identity rather than a pattern to address.", "The work is including themselves in the compassion they so readily extend to everyone else."]
      },
      {
        q: "What careers suit soul urge 33?",
        a: ["Careers where genuine service is the point: spiritual counseling, healing arts, teaching, medicine, social work, community leadership, nonprofit work, crisis support. The requirement is that the human encounter is central and that what SU33 brings - presence, depth of caring, healing - is actually used."]
      },
      {
        q: "How does soul urge 33 show up in relationships?",
        a: ["As extraordinary acceptance and depth of caring. SU33 tends to love people as they actually are, including the difficult parts - which is both rare and genuinely transformative for the people who experience it.", "The challenge is reciprocity - learning to be held as well as to hold, and trusting that receiving care doesn't diminish the capacity to give it."]
      },
      {
        q: "How is soul urge 33 calculated?",
        a: ["From the vowels in the full birth name. A=1, E=5, I=9, O=6, U=3. Add all vowel values together and reduce step by step. If you reach 33, stop. Don't reduce to 6. The master number stands."]
      }
    ],
    related: [
      { n: "6", label: "Soul Urge 6", note: "The base energy beneath SU33 - personal nurturing and responsibility." },
      { n: "life-path-number-33", label: "Life Path 33", note: "The life path equivalent - same master teacher energy at the level of destiny." },
      { n: "22", label: "Soul Urge 22", note: "The Master Builder equivalent - SU22 builds, SU33 heals and teaches." }
    ]
  }
];

export const soulUrgeNumberMap = new Map(soulUrgeNumbers.map(su => [su.n, su]));

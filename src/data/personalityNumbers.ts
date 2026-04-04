export interface PersonalityNumber {
  n: number;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  meaning: string[];
  firstImpression: string[];
  strengths: { title: string; desc: string }[];
  challenges: { title: string; desc: string }[];
  style: string[];
  faq: { q: string; a: string[] }[];
  related: { n: string; label: string; note: string }[];
}

export const personalityNumbers: PersonalityNumber[] = [
  {
    n: 1,
    title: "The Pioneer",
    shortDesc: "Personality 1 comes across as confident, decisive, and independent. People pick up leadership energy before you've said anything of substance.",
    heroSubtitle: "People read you as someone who knows where they're going - even when you're still figuring it out.",
    meaning: [
      "Personality number 1 describes how you're perceived on first contact - the impression you make before people really know you. And for PN1, that impression is consistent: confident, directed, capable of taking charge. People read leadership energy in you almost immediately.",
      "The personality number is calculated from the consonants in your full birth name. Consonants are the harder, more defining sounds - and in numerology they represent the outer layer, the face you present to the world before people get to the softer interior. For PN1, that exterior radiates self-assurance and direction.",
      "What's worth knowing is the gap between the perception and the reality. People with PN1 often feel considerably less certain than they appear. The confident exterior is real enough - it's not a performance - but the inner world is usually more complex than the outside suggests. The gap can be useful (it inspires trust) and occasionally uncomfortable (when you're uncertain but everyone expects you to know what to do)."
    ],
    firstImpression: [
      "In rooms full of people, PN1 tends to be noticed. Not necessarily loudest - there's nothing showy about the impression - but there's a quality of presence and self-possession that registers. People assume you've been there before, that you know what you're doing, that you're not waiting for permission.",
      "The effect on others varies. Some people find PN1 energizing - the confidence is reassuring, the clarity is appealing, the sense of direction is something they want to get near. Others find it slightly intimidating before they know you well. The first impression runs ahead of the actual relationship.",
      "The thing about PN1 is that it can create expectations. Because you read as capable and self-directed, people often don't offer the support or input you'd actually appreciate. They assume you don't need it. Working consciously with this means letting people in past the exterior, showing the uncertainty when it's real, making yourself genuinely available to help as well as being seen as capable of giving it."
    ],
    strengths: [
      { title: "Immediate credibility", desc: "PN1 earns trust quickly. The first impression is one of capability and direction, which gives you an advantage in new situations - people extend you more latitude, take your input more seriously early on, and assume competence before you've demonstrated it." },
      { title: "Magnetism in leadership contexts", desc: "When the situation calls for direction and decisiveness, PN1 fills that role naturally. You don't have to work to seem like you're in charge - the perception arrives before the behavior does." },
      { title: "Clear personal style", desc: "PN1 tends to present with a distinctive, uncluttered personal style that reflects the number's orientation toward clarity and self-determination. People remember how you carry yourself." },
      { title: "Inspiring confidence in others", desc: "One of the quieter gifts of PN1 is that your confidence is contagious. People around you tend to feel steadier and more capable simply because your presence suggests that things are in hand." }
    ],
    challenges: [
      { title: "Appearing unapproachable", desc: "The strength and self-possession that read as confidence can also read as closed or intimidating to people who don't know you. You may have warm, collaborative instincts that get missed because the first impression runs ahead of them." },
      { title: "Expectations you didn't create", desc: "Because people read capability into you, they sometimes expect a level of certainty or leadership that isn't appropriate to the situation - or that you don't actually feel. Managing the gap between the perception and the reality requires conscious communication." },
      { title: "Difficulty showing vulnerability", desc: "When your default presentation is strength and direction, admitting uncertainty or asking for help can feel structurally out of character - even when it would clearly serve you. The perception makes it harder to be seen as genuinely needing anything." },
      { title: "Overshadowing others", desc: "In collaborative contexts, the PN1 presence can unintentionally dominate - not because of anything you do, but because the first-impression energy takes up space. Being conscious of making room for others is important." }
    ],
    style: [
      "PN1 typically presents with a clean, direct personal style - not fussy, not overly embellished, but considered. There's a quality of intentionality to how PN1 shows up: the clothes they choose, the way they enter a room, the manner in which they engage. It doesn't feel accidental.",
      "The communication style tends to be clear and direct. PN1 doesn't over-explain, doesn't hedge unnecessarily, and doesn't bury the point under preamble. This reads as confident even when the underlying feeling is more uncertain. People remember conversations with PN1 as purposeful.",
      "In professional contexts, PN1 often reads as someone who's already at a higher level than their current title - which can be an advantage and occasionally creates friction with the people whose levels they appear to be skipping."
    ],
    faq: [
      {
        q: "What does personality number 1 mean?",
        a: ["Personality number 1 describes the first impression you make - the outer layer others perceive before they know you well. PN1 reads as confident, self-directed, and capable of leadership. People assume you know what you're doing.", "It's not the full picture of who you are - just the exterior layer that registers in early encounters."]
      },
      {
        q: "How is the personality number calculated?",
        a: ["From the consonants in your full birth name - first, middle, and last, as it appears on your birth certificate. Assign each consonant its Pythagorean value (B,K,T=2; C,L,U=3; D,M,V=4; F,N,W=5; G,O,X=6; H,P,Y=7; Q,Z=8; R=9; S=1; J=1), add all values together, and reduce to a single digit."]
      },
      {
        q: "Does personality number 1 make me seem arrogant?",
        a: ["It can - though arrogance isn't the intention and usually isn't the reality. The confidence that registers in the first impression is real, and it tends to come across as self-assurance rather than arrogance to most people. The ones who read it as arrogance are often people who find strong presence uncomfortable.", "Warmth and openness communicate the inner reality more fully and help soften the first impression for people who might otherwise be intimidated."]
      },
      {
        q: "Is the personality number different from the soul urge number?",
        a: ["Yes - substantially. The personality number is the outer layer, the first impression, how others perceive you before they really know you. The soul urge number is the inner layer, the private motivation, what you want at the deepest level.", "They can be quite different - someone with PN1 (reads as confident and independent) might have a soul urge 2 (inner need for partnership and connection). The outer and inner don't always match."]
      },
      {
        q: "What is the shadow of personality number 1?",
        a: ["The shadow is appearing unapproachable - projecting so much self-sufficiency that people don't offer help or closeness, because the first impression suggests both aren't needed or wanted.", "There's also the gap-management challenge: when the expectation that's been set by the first impression runs ahead of what you actually feel in the moment, there's pressure to maintain a confidence that isn't genuine."]
      },
      {
        q: "How does personality number 1 show up professionally?",
        a: ["PN1 tends to read as more senior or capable than the current role sometimes warrants - people extend credibility quickly and assume leadership is natural. This is an asset in new professional contexts.", "The challenge is that PN1 can sometimes appear to skip the collaborative consultation that other team members would find respectful. Being explicit about seeking input - rather than presenting as already knowing - helps."]
      }
    ],
    related: [
      { n: "soul-urge-1", label: "Soul Urge 1", note: "The inner version of the same energy - the private need beneath the outer impression." },
      { n: "expression-1", label: "Expression 1", note: "The destiny number with the same directional energy." },
      { n: "2", label: "Personality 2", note: "Almost the inverse first impression - warm, receptive, approachable." }
    ]
  },
  {
    n: 2,
    title: "The Diplomat",
    shortDesc: "Personality 2 comes across as warm, approachable, and genuinely interested in other people. The first impression is gentle, receptive - someone safe to open up to.",
    heroSubtitle: "People read you as someone who will actually listen - and they tend to be right.",
    meaning: [
      "Personality number 2 describes how you land on people when they first encounter you. And for PN2, the landing is warm: approachable, attentive, interested in who they are rather than trying to impress them with who you are. People feel at ease with PN2 quickly, often before there's any particular reason to.",
      "The personality number comes from the consonants in your birth name - the harder, defining sounds that represent the outer layer, the face you present before the deeper reality is revealed. For PN2, that face is one of gentleness and genuine receptivity. People don't pick up threat from you. They pick up care.",
      "What's worth understanding is what this impression does and doesn't communicate about your inner life. PN2's warm exterior doesn't necessarily mean a soft interior - many PN2 people have quite strong views, clear preferences, and real resilience. The outer impression is the welcoming quality; the inner reality is typically more complex and more capable than people initially assume."
    ],
    firstImpression: [
      "PN2 creates an immediate sense of safety. People feel like they can be honest with you, that you won't judge them, that the conversation can go somewhere real. This is a genuinely valuable first-impression quality - it opens doors that other numbers have to work harder to open.",
      "The specific quality that registers first is attentiveness: PN2 seems genuinely interested in what the other person is saying, which is distinctive in a world where most people are waiting for their turn to talk. People notice this and remember it.",
      "One thing to be aware of: the warmth and approachability of PN2 can invite more disclosure than you're sometimes prepared for. People may share deeply personal things early in an interaction because the impression suggests it's safe to do so. Managing that dynamic - staying genuinely receptive while also setting appropriate pace - is something PN2 navigates regularly."
    ],
    strengths: [
      { title: "Disarming approachability", desc: "PN2's first impression removes the social defenses that most people carry into new encounters. People feel comfortable being themselves around PN2 faster than usual - which makes connection easier and more genuine from the start." },
      { title: "Trusted immediately", desc: "The receptive, non-threatening quality of PN2 means people extend trust early. They feel their confidence is safe with you, that you'll handle it with care. This is a real social advantage in almost any context." },
      { title: "Natural at listening", desc: "PN2 tends to listen rather than perform - to be genuinely interested rather than waiting for their turn. People feel heard in conversations with PN2, which is rarer than it should be and consistently memorable." },
      { title: "Harmonious presence", desc: "In group settings, PN2's presence tends to lower the temperature - reducing tension, smoothing friction, creating a quality of ease that other people appreciate and often don't notice until it's gone." }
    ],
    challenges: [
      { title: "Underestimated", desc: "The warm, gentle first impression can cause people to underestimate PN2's capability, strength, or intelligence. They read the softness and don't immediately look for what's underneath it. This requires PN2 to work harder to demonstrate competence in professional contexts." },
      { title: "Attracting over-reliance", desc: "Because PN2 seems so receptive and safe, people sometimes offload things that aren't actually PN2's to carry. The first impression invites disclosure and intimacy - and not all of that is reciprocal or appropriate." },
      { title: "Perceived as a pushover", desc: "Gentleness is sometimes misread as a lack of conviction, and PN2 may need to work to communicate their actual views and preferences more explicitly - because the first impression doesn't naturally convey strong positions." },
      { title: "Setting pace in relationships", desc: "When your first impression invites closeness, people sometimes move toward intimacy faster than PN2 is actually comfortable with. Learning to set the pace - gently but clearly - is important." }
    ],
    style: [
      "PN2 tends to present in ways that are inviting rather than imposing - softer colors, less aggressive styling, an overall quality of approachability in how they dress and carry themselves. The aesthetic tends toward the harmonious rather than the striking.",
      "Communication style is typically warm, careful, and considerate of the other person's experience. PN2 chooses words with attention to how they'll land - there's an awareness of the listener that most numbers don't naturally calibrate for.",
      "In professional contexts, PN2 may sometimes be too careful - communicating so gently that the actual point gets softened past clarity. Learning to deliver clear messages with warmth, rather than sacrificing one for the other, is a skill worth developing."
    ],
    faq: [
      {
        q: "What does personality number 2 mean?",
        a: ["Personality number 2 describes the impression you make on others before they know you well. PN2 reads as warm, approachable, and genuinely interested in people - someone who will listen, who won't judge, who creates an immediate sense of safety.", "It's the outer layer that registers in first encounters - not a complete picture of who you are."]
      },
      {
        q: "How is the personality number calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce the total to a single digit. The vowels are excluded from this calculation - those go into your soul urge number."]
      },
      {
        q: "Does personality 2 mean I'm weak?",
        a: ["No - though the gentleness of the impression can be misread that way. PN2's warmth and receptivity are forms of social intelligence, not lack of substance. Many PN2 people have quite strong convictions; they just don't lead with them in first impressions.", "The work for PN2 is often learning to show the strength more clearly, so the impression better matches the actual inner reality."]
      },
      {
        q: "What is the shadow of personality number 2?",
        a: ["Being underestimated, attracting over-reliance, and occasionally being perceived as lacking conviction. The warmth that's PN2's genuine gift can be read as a signal that you'll go along with things, which invites people to assume more compliance than is actually there.", "The counter is clearer communication of actual views - warmly delivered but clearly stated."]
      },
      {
        q: "How does personality 2 affect professional relationships?",
        a: ["PN2 builds trust quickly and creates the conditions for genuine collaboration. The approachability makes people more likely to bring things to you, to be honest with you, to work with you rather than around you.", "The challenge is that the impression can invite people to discount your capacity or bypass you for leadership roles. Communicating capability as clearly as you communicate warmth is important in professional contexts."]
      },
      {
        q: "Is personality 2 the same as life path 2?",
        a: ["No - personality 2 describes your outer impression, calculated from consonants in your name. Life path 2 describes the energy of your life's path, calculated from your birth date. Both deal with similar themes - cooperation, sensitivity, relationship - but from completely different angles.", "You could have a life path 2 and a very different personality number, or vice versa."]
      }
    ],
    related: [
      { n: "1", label: "Personality 1", note: "The opposite first impression - confident and directive where PN2 is warm and receptive." },
      { n: "6", label: "Personality 6", note: "Also warm and caring in first impression - though the focus is more nurturing than diplomatic." },
      { n: "soul-urge-2", label: "Soul Urge 2", note: "The inner version - the deep need for connection and harmony beneath the outer warmth." }
    ]
  },
  {
    n: 3,
    title: "The Charmer",
    shortDesc: "Personality 3 comes across as vivid, engaging, and fun. People are drawn in immediately - the first impression is bright, social, and a little hard to resist.",
    heroSubtitle: "People are drawn to your energy before you've done anything particular to earn it.",
    meaning: [
      "Personality number 3 describes a first impression that is immediately engaging. PN3 reads as vivid and interesting from the moment of entry - there's a quality of aliveness, humor, and creativity that registers before any particular conversation has happened. People want to know this person.",
      "The personality number comes from the consonants in the birth name. For PN3, those consonants produce an outer impression that is distinctly social and expressive - warm, enthusiastic, and genuinely interested in people. There's a magnetic quality that pulls others in.",
      "The interesting thing about PN3 is the gap between the impression and the interior. The bright, sociable exterior doesn't necessarily mean an uncomplicated inner life - most PN3 people have a more sensitive, self-doubting private world than the charming first impression suggests. The performance is real. So is what's behind it."
    ],
    firstImpression: [
      "PN3 tends to brighten rooms. It's a specific quality - a sense of energy and wit entering a space, making everything slightly more interesting than it was before. People notice this and they're attracted to it. The first impression is almost always positive.",
      "The social ease that PN3 projects is real, but it's also partly a mask. Most PN3 people are more anxious or self-conscious about their reception than the smooth exterior suggests. The ease is developed; underneath it is the same sensitivity that operates in most creative or expressive numbers.",
      "One dynamic to watch: the engaging first impression can set an expectation that PN3 will always be 'on' - consistently bright and entertaining. This is exhausting to maintain indefinitely. PN3 people sometimes find that people are surprised or slightly put out when the energy drops, because the first impression set a standard that can't be sustained 24 hours a day."
    ],
    strengths: [
      { title: "Natural social ease", desc: "PN3 enters new social situations without the hesitation or awkwardness that other numbers often feel. There's a quality of comfort in social contexts that makes interactions feel light and natural from the beginning." },
      { title: "Memorable presence", desc: "People remember PN3. The impression is distinct and vivid - the humor, the expressiveness, the aliveness. This makes PN3 naturally effective in situations where making a strong first impression matters." },
      { title: "Infectious optimism", desc: "The brightness of the PN3 first impression tends to lift the mood of whatever environment they enter. This is a genuine contribution - the quality of making people feel like things are more interesting and enjoyable than they were a moment before." },
      { title: "Creative energy that's immediately visible", desc: "PN3's creativity registers in the first impression - in the way they talk, the connections they make, the humor they bring. This makes their creative capacity visible early, which is an advantage in professional and social contexts." }
    ],
    challenges: [
      { title: "First impression doesn't carry depth", desc: "The bright, entertaining first impression can make PN3 seem lighter than they actually are. People may take time to realize there's substantial depth underneath the charm - or may never look for it if the social ease keeps the interaction at a surface level." },
      { title: "Expectation to always be 'on'", desc: "When your baseline impression is vivid and engaging, ordinary days feel like a disappointment. People sometimes expect the high-energy version consistently - which is a real drain when PN3 is having a quieter, more interior phase." },
      { title: "Not taken seriously", desc: "Charm and humor can undercut credibility in contexts that prize seriousness. PN3 may find that the social ease that serves them in informal contexts works against them in environments where the impression needs to convey gravity and substance." },
      { title: "Attraction without depth", desc: "The bright first impression attracts a lot of initial interest, but not all of it is looking for what PN3 actually has to offer at depth. Filtering the real connections from the superficial ones is something PN3 navigates regularly." }
    ],
    style: [
      "PN3 tends to express themselves visually and stylistically in ways that are distinctive and slightly unexpected - a color choice that wouldn't occur to most people, a combination that works in a way that's hard to explain. The personal style communicates creativity and individuality.",
      "Conversation style is warm, quick, and associative - moving between ideas fluidly, finding unexpected angles, bringing humor naturally rather than forcing it. People come away from conversations with PN3 feeling like they've been in the presence of someone genuinely interesting.",
      "In professional contexts, PN3 may need to balance the natural social ease with a deliberate demonstration of substance - showing that the charm is accompanied by capability, not substituting for it."
    ],
    faq: [
      {
        q: "What does personality number 3 mean?",
        a: ["Personality number 3 describes the vivid, engaging first impression you make on others. PN3 reads as charming, creative, and socially at ease - someone who brings a quality of brightness and interest to any room they enter.", "It's the outer layer that others perceive before they know the full depth of who you are."]
      },
      {
        q: "How is the personality number different from the expression number?",
        a: ["The personality number is the impression you make on others - the outer layer visible in early encounters. The expression number is the destiny direction - where you're headed and the qualities you're here to develop.", "Both can be 3, which would double down on the expressive, creative energy in both the outer impression and the inner direction."]
      },
      {
        q: "Does personality 3 mean I'm superficial?",
        a: ["No - though the bright, social first impression can create that perception. The charm and humor that register immediately are real, but they're not the whole story. Most PN3 people have a more complex, sensitive inner world than the exterior suggests.", "The challenge is often getting past the first impression to let people see the depth - which requires tolerating the discomfort of not being 'on' all the time."]
      },
      {
        q: "What is the shadow of personality 3?",
        a: ["The expectation to always be entertaining, not being taken seriously in contexts that prize substance over charm, and the gap between the vivid outer impression and the more anxious inner world.", "The work is learning to let both the brightness and the depth be visible - not choosing one at the expense of the other."]
      },
      {
        q: "What careers suit personality 3?",
        a: ["Any career where the first impression and social ease matter: sales, client-facing roles, performance, teaching, public relations, creative direction, consulting. PN3's ability to engage people quickly and make them feel at ease is genuinely valuable in contexts where those qualities matter."]
      },
      {
        q: "How is personality 3 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce the total to a single digit."]
      }
    ],
    related: [
      { n: "2", label: "Personality 2", note: "Also warm and engaging in first impression - but calmer and more diplomatic." },
      { n: "5", label: "Personality 5", note: "Also draws people in - but with an energy of freedom and magnetism rather than charm." },
      { n: "soul-urge-3", label: "Soul Urge 3", note: "The inner version of the same expressive energy." }
    ]
  },
  {
    n: 4,
    title: "The Reliable",
    shortDesc: "Personality 4 reads as grounded, serious, and solid. People sense immediately that you are someone who can be counted on - the impression is trustworthy before a word is spoken.",
    heroSubtitle: "People read stability and substance in you - the sense that what you say, you mean.",
    meaning: [
      "Personality number 4 describes a first impression of groundedness and reliability. PN4 reads as someone solid - organized, practical, serious in the best sense of the word. People pick up a quality of substance and dependability before much is said or done.",
      "The personality number comes from the consonants in the birth name. For PN4, those consonants produce an exterior that communicates stability. The impression isn't flashy and it isn't trying to be. It's the kind of impression that makes people think: this person will follow through.",
      "What's worth understanding about PN4 is that the serious, grounded exterior can sometimes mask a much richer and more flexible inner life than the first impression suggests. People may be surprised to find that the steady, organized-looking person also has a dry sense of humor, strong opinions, or creative instincts that aren't visible in the initial impression."
    ],
    firstImpression: [
      "PN4 tends to present with a quality of self-possession that reads as maturity. There's no scrambling for approval in the first impression, no performance for the audience. You seem like someone who has already figured out what they're about, which is immediately reassuring to people who haven't.",
      "The impression also tends to communicate competence without arrogance - the sense that you know how to do things, that you've thought about it, that if you're responsible for something it will be handled. This is a valuable quality in almost any context.",
      "One dynamic to be aware of: PN4's seriousness can register as a lack of warmth to people who are more expressively oriented. The reliability and substance are real - but they don't always come packaged with the kind of immediate social ease that some first impressions provide. Warmth and humor are there; they just sometimes need time to emerge."
    ],
    strengths: [
      { title: "Immediate credibility around competence", desc: "People assume PN4 knows what they're talking about and can be trusted with responsibility. This extends credibility faster than it would with a less grounded first impression - a real advantage in professional contexts." },
      { title: "Reassuring stability", desc: "In situations of uncertainty or change, PN4's presence is stabilizing. The first impression communicates that things are manageable, that someone knows what to do, that the situation is in capable hands." },
      { title: "Trust without effort", desc: "People tend to feel that PN4's word is good without needing much evidence. The impression of integrity arrives before any track record has been established." },
      { title: "Clarity of communication", desc: "PN4 tends to communicate in ways that are direct and specific - what they mean is usually what they say, without significant ambiguity. People appreciate this and find it easier to work with." }
    ],
    challenges: [
      { title: "Reading as rigid or unapproachable", desc: "The seriousness and groundedness that make PN4 trustworthy can also make them seem less approachable, less open to new ideas, or less warm than they actually are. People may hesitate to bring informal or creative ideas because the first impression suggests a preference for the structured." },
      { title: "Underestimated creativity", desc: "The grounded, practical exterior tends not to telegraph PN4's creative or imaginative capacities. These are often present, but they're invisible in the first impression - which can mean PN4 doesn't get the creative opportunities they'd actually thrive in." },
      { title: "Perceived as inflexible", desc: "Before people know you well, the solid exterior can read as fixed or rigid. Someone approaching PN4 with a novel or unconventional idea may pre-emptively assume resistance - which shapes the interaction before it's had a chance to develop." },
      { title: "Difficulty in highly social contexts", desc: "In environments where quick social ease and warm expressiveness are the primary currencies, PN4 may feel like they're starting behind - even when their actual substance is greater than what's being valued in the moment." }
    ],
    style: [
      "PN4 tends toward a personal style that is clean, functional, and considered without being flashy. The aesthetic communicates substance rather than style for its own sake - which is, itself, a kind of style. The choices tend to hold up over time rather than following fashion closely.",
      "Communication style is direct and specific. PN4 says what they mean, uses concrete language, and doesn't bury the point under hedging or decoration. This is reliable and efficient, and occasionally reads as blunt to people who prefer a more indirect approach.",
      "In professional contexts, PN4 tends to establish themselves as someone people rely on rather than someone who dazzles. The track record matters more than the first impression in the long run - which suits PN4 well, because they tend to deliver."
    ],
    faq: [
      {
        q: "What does personality number 4 mean?",
        a: ["Personality number 4 describes the impression of groundedness, reliability, and practical capability you project to others. PN4 reads as solid - someone who can be counted on, who means what they say, who will follow through.", "It's the outer layer visible in first encounters, not the complete picture of who you are."]
      },
      {
        q: "Is personality 4 boring?",
        a: ["The impression can read as less immediately exciting than some other numbers' first impressions - but boring misses the point. What PN4 projects is substance and reliability, which are genuinely valuable qualities that most people come to deeply appreciate in the people they actually depend on.", "The interior tends to be more interesting than the first impression suggests."]
      },
      {
        q: "What is the shadow of personality 4?",
        a: ["Reading as rigid or unapproachable before you've had a chance to show flexibility; creative capacities being invisible in the first impression; and difficulty in highly social contexts where warmth and ease are the primary currency.", "The work is often finding ways to let the warmth and flexibility show earlier - without abandoning the groundedness that's the real gift."]
      },
      {
        q: "How does personality 4 show up professionally?",
        a: ["PN4 builds professional trust through consistency and follow-through. The impression of competence arrives early and tends to be confirmed by the track record. People rely on PN4 for the important things.", "The challenge is being seen as a candidate for roles that require creative or flexible thinking - the first impression doesn't naturally signal those qualities."]
      },
      {
        q: "How is the personality number different from the life path number?",
        a: ["The personality number describes how others perceive you on first contact - calculated from the consonants in your birth name. The life path describes the energy and themes of your life - calculated from your birth date. They're describing different things from different sources."]
      },
      {
        q: "How is personality 4 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce the total to a single digit."]
      }
    ],
    related: [
      { n: "8", label: "Personality 8", note: "Also reads as capable and authoritative - but PN8 projects power and ambition rather than groundedness." },
      { n: "soul-urge-4", label: "Soul Urge 4", note: "The inner version - the deep need for structure and stability beneath the outer impression." },
      { n: "5", label: "Personality 5", note: "Almost the inverse first impression - free-spirited and magnetic where PN4 is grounded and serious." }
    ]
  },
  {
    n: 5,
    title: "The Magnetic",
    shortDesc: "Personality 5 draws people in - there's an energy of freedom and vitality that registers immediately. People pick up something interesting, unpredictable, and alive.",
    heroSubtitle: "People are intrigued by you before they quite know why - the energy is magnetic and hard to define.",
    meaning: [
      "Personality number 5 describes a first impression of magnetism and vitality. PN5 reads as interesting in a way that's hard to pin down - there's an energy of freedom, curiosity, and possibility that registers immediately. People are drawn toward it even before they can articulate what's attracting them.",
      "The personality number comes from the consonants in the birth name. For PN5, those consonants produce an outer impression that is distinctly alive - dynamic, adaptable, and somehow suggestive of wider horizons. People pick up a quality of being fully present and engaged with experience that makes PN5 genuinely interesting to be around.",
      "What's important to understand is that the magnetic first impression doesn't necessarily reflect a carefree or uncomplicated inner life. Many PN5 people carry significant internal complexity - anxiety about commitment, a restless search for something that eludes easy definition, or the ongoing challenge of directing the energy productively. The vitality that registers externally is real; so is the work it takes to channel it."
    ],
    firstImpression: [
      "PN5 generates a specific kind of attention in social situations - not necessarily dominating a room, but somehow becoming a focal point. There's a quality of aliveness and unpredictability that makes people curious. They want to see what happens next.",
      "The impression also tends to project a quality of freedom - of someone who isn't trapped by circumstances or convention, who moves through the world on their own terms. Whether this is fully accurate or not, it's consistently read and it's consistently appealing.",
      "One dynamic PN5 navigates: the magnetic first impression attracts a lot of interest, and not all of it is appropriate or wanted. The energy that draws people in doesn't always distinguish between the people worth getting close to and the ones who are simply interested in the vitality without having much to offer in return."
    ],
    strengths: [
      { title: "Draws people in naturally", desc: "PN5 doesn't have to work for attention - it arrives. The magnetic quality of the first impression means that new social and professional contacts are made easily and frequently. This is a real advantage in contexts where network and relationship-building matter." },
      { title: "Reads as open and exciting", desc: "The impression of freedom and possibility that PN5 projects makes people feel like good things could happen in their company. This quality of excitingness is genuine and makes PN5 particularly effective in contexts that call for energy, innovation, and forward movement." },
      { title: "Adaptable presence", desc: "PN5 reads as someone who can handle what comes - who isn't thrown by change or disruption, who brings a quality of flexibility and responsiveness that's reassuring in uncertain situations." },
      { title: "Universally approachable", desc: "The PN5 energy works across a very wide range of social contexts. People from very different backgrounds and orientations tend to find PN5 approachable and interesting - the magnetic quality translates broadly." }
    ],
    challenges: [
      { title: "Read as uncommitted", desc: "The freedom energy that makes PN5 interesting can also make them seem unreliable or unlikely to stay the course. People may be less inclined to invest in a long-term collaboration or relationship if the first impression suggests someone who might not be there next season." },
      { title: "Attracting the wrong kind of attention", desc: "The magnetic quality attracts both the people PN5 genuinely wants to be in contact with and those who are simply drawn to the energy without much real substance to offer. Discernment is required." },
      { title: "Difficulty projecting stability", desc: "In contexts that require a first impression of groundedness and reliability - some professional environments, certain relational dynamics - PN5's magnetic, free-spirited impression can work against them." },
      { title: "The impression outpaces the reality", desc: "When the first impression is particularly vivid and magnetic, people sometimes expect the ongoing relationship to match it - expecting consistent excitement from someone who has ordinary, less vivid days like everyone else." }
    ],
    style: [
      "PN5 tends to present with a personal style that has an element of the unexpected - a combination that works in a non-obvious way, an aesthetic that reflects genuine individual taste rather than convention. There's a quality of originality in how PN5 puts themselves together.",
      "The communication style is typically engaging and quick - moving between ideas with ease, finding the interesting angle, being genuinely present to whoever they're talking to. Conversations with PN5 tend to feel lively.",
      "In professional settings, PN5 sometimes needs to balance the natural magnetism with a deliberate demonstration of follow-through - showing that the energy is directed and productive, not just attractive and diffuse."
    ],
    faq: [
      {
        q: "What does personality number 5 mean?",
        a: ["Personality number 5 describes the magnetic, vital impression you make on others. PN5 reads as interesting, free-spirited, and alive - someone with a quality of energy that draws people in without obvious effort.", "It's the outer layer others perceive early in an encounter - not the full story of who you are."]
      },
      {
        q: "Is personality 5 flirtatious?",
        a: ["The magnetic, engaging quality of PN5 can read as flirtatious in some contexts - though this is often the perception rather than the intent. The energy of genuine interest and aliveness that PN5 projects is non-discriminating; it doesn't specifically direct itself toward romantic or flirtatious interaction.", "Being clear about intentions in contexts where the first impression might be misread is sometimes necessary."]
      },
      {
        q: "What is the shadow of personality 5?",
        a: ["Reading as uncommitted or unreliable; attracting attention without the quality to match it; and the gap between the vivid first impression and the ordinary days that follow.", "The work is demonstrating that the magnetism is accompanied by substance - that the energy is directed and the follow-through is real."]
      },
      {
        q: "How does personality 5 show up professionally?",
        a: ["PN5 is effective in roles where energy, adaptability, and the ability to draw people in matter: sales, consulting, creative roles, entrepreneurship, client-facing work. The magnetic first impression opens doors.", "The challenge is demonstrating reliability alongside the magnetism - showing that the energy is productive, not just attractive."]
      },
      {
        q: "How is personality 5 different from soul urge 5?",
        a: ["Personality 5 is how others perceive you - the outer impression of freedom and magnetism. Soul urge 5 is what you privately want - the inner need for variety, freedom, and experience.", "You can have one without the other. Someone might project PN5's magnetic exterior while privately craving stability and structure (which a different soul urge would describe)."]
      },
      {
        q: "How is personality 5 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce to a single digit."]
      }
    ],
    related: [
      { n: "3", label: "Personality 3", note: "Also engaging in first impression - PN3's draw is more expressive and charming, PN5's is more vital and unpredictable." },
      { n: "soul-urge-5", label: "Soul Urge 5", note: "The inner version - the private need for freedom and variety beneath the outer magnetism." },
      { n: "4", label: "Personality 4", note: "The contrasting impression - grounded and solid where PN5 is magnetic and free." }
    ]
  },
  {
    n: 6,
    title: "The Caregiver",
    shortDesc: "Personality 6 reads as warm, nurturing, and genuinely caring. People pick up immediately that this is someone who wants things to be good for everyone in the room.",
    heroSubtitle: "People feel immediately cared for around you - like someone is making sure everything is okay.",
    meaning: [
      "Personality number 6 describes a first impression of warmth and genuine care. PN6 reads as someone who notices how people are doing and actually cares about the answer - not as a social nicety, but as a real orientation toward the wellbeing of the people around them. The impression is immediately nurturing.",
      "The personality number comes from the consonants in the birth name. For PN6, those consonants produce an outer impression that is distinctly welcoming and responsible - the kind of person who makes a space feel more looked-after the moment they enter it. People feel both cared for and assessed, in the best sense: seen and supported.",
      "What's worth understanding about PN6 is that the nurturing exterior can become a pattern that limits the full range of who PN6 is and what they need. People who encounter PN6's warm first impression often quickly orient toward PN6 as the caregiver - and this can become self-reinforcing in ways that make it harder for PN6's own needs to be visible or addressed."
    ],
    firstImpression: [
      "PN6 creates a specific kind of ease in social situations - a sense that someone is looking out for everyone, that the dynamics will be handled with care, that there's a quality of warmth in the room that wasn't there before. People relax around PN6.",
      "The impression tends to project both care and competence - the sense that PN6 both wants things to be good and knows how to make them so. This combination is unusual and valuable.",
      "One dynamic PN6 often encounters: the nurturing first impression means people quickly orient toward PN6 as the one who handles things, manages dynamics, and makes sure everyone is okay. This can be appropriate and genuinely valuable - it can also become a role that PN6 didn't consciously sign up for and that can be hard to step out of."
    ],
    strengths: [
      { title: "Creates safety immediately", desc: "PN6's first impression generates a specific kind of social safety - people feel like they're in good hands, that the environment will be managed with care, that their wellbeing is noticed. This quality opens doors that other first impressions don't." },
      { title: "Trusted with sensitive things", desc: "People feel that PN6 will handle important, delicate things carefully. They'll share more, trust more, and bring the real issues - not just the surface ones - because the first impression communicates that it's safe to do so." },
      { title: "Naturally brings harmony", desc: "PN6 tends to smooth dynamics, lower tension, and create conditions for genuine cooperation. This happens organically from the first impression onward." },
      { title: "Perceived as responsible and capable", desc: "Alongside the warmth, PN6 projects a quality of genuine competence - the sense that if they're responsible for something, it will be done well and done with care." }
    ],
    challenges: [
      { title: "Expected to always be the caregiver", desc: "Once the nurturing first impression is established, it's hard to be seen as the one who needs care. PN6 can become so associated with giving that asking for support feels like a role reversal that confuses people." },
      { title: "Attracting people who need more than PN6 can give", desc: "The warm, caring first impression attracts people in need - which is both the gift and the challenge. Not everyone who's drawn to PN6's nurturing energy is equipped to offer much in return." },
      { title: "Perceived as lacking edge", desc: "The warmth can sometimes overshadow PN6's strength, intelligence, and capacity for challenge. People may underestimate the full range of what PN6 brings - missing the capability behind the care." },
      { title: "Overextension before the relationship has started", desc: "PN6 can find themselves invested in the wellbeing of people they've just met - worrying about how someone is doing, trying to help with things that aren't their responsibility. The care doesn't wait for the relationship to deepen." }
    ],
    style: [
      "PN6 tends to present with a warm, welcoming aesthetic - the choices that convey approachability and care rather than status or edge. The overall effect is of someone who wants you to feel comfortable, and it usually works.",
      "Communication style is attentive and responsive - PN6 adapts to what the other person needs in the conversation, listening carefully and adjusting accordingly. There's a quality of genuine attention that people find distinctive.",
      "In professional contexts, PN6 may need to bring the capability forward more explicitly - making sure the skill and intelligence are as visible as the warmth, so that the first impression captures the full picture."
    ],
    faq: [
      {
        q: "What does personality number 6 mean?",
        a: ["Personality number 6 describes a warm, nurturing first impression - the sense that here is someone who genuinely cares how you are and wants things to be good for everyone involved.", "It's the outer layer that registers before deeper knowledge develops."]
      },
      {
        q: "Is personality 6 always in caregiver mode?",
        a: ["The first impression tends toward nurturing, yes - but that's the outer layer, not the full picture. PN6 people have a full range of inner experience that doesn't reduce to caretaking.", "The challenge is that the impression sets an expectation that can become a role - one that PN6 may or may not want to occupy indefinitely."]
      },
      {
        q: "What is the shadow of personality 6?",
        a: ["Being expected to always be the caregiver, attracting people who need more than PN6 can sustainably give, and having the capability and intelligence behind the warmth go unnoticed.", "The work is making the full range visible - not just the warmth, but the strength behind it."]
      },
      {
        q: "How does personality 6 affect relationships?",
        a: ["PN6 creates warmth and trust quickly in relationships. People feel cared for, seen, and in good hands from an early stage.", "The challenge is reciprocity - making sure the relationship develops in both directions, not just toward PN6 as the one who gives."]
      },
      {
        q: "How is personality 6 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce to a single digit."]
      },
      {
        q: "What careers suit personality 6?",
        a: ["Any career where warmth, care, and the ability to make people feel safe are assets: healthcare, teaching, counseling, human resources, hospitality, social work, community leadership. The first impression opens doors in all of these contexts."]
      }
    ],
    related: [
      { n: "2", label: "Personality 2", note: "Also warm in first impression - PN2 is more diplomatic, PN6 is more nurturing." },
      { n: "soul-urge-6", label: "Soul Urge 6", note: "The inner version - the deep need for love and responsibility beneath the caring exterior." },
      { n: "9", label: "Personality 9", note: "Also warm and caring - PN9's warmth extends toward humanity broadly rather than the immediate circle." }
    ]
  },
  {
    n: 7,
    title: "The Mysterious",
    shortDesc: "Personality 7 reads as thoughtful, private, and slightly enigmatic. People pick up depth and intelligence before you've said much - and a quality of reserve that makes them curious.",
    heroSubtitle: "People sense depth in you before they have the evidence for it - and they find it intriguing.",
    meaning: [
      "Personality number 7 describes a first impression of depth and interiority. PN7 reads as someone who is observing carefully, who has things going on beneath the surface, who isn't immediately available in the way that more outwardly expressive numbers are. The first impression is one of thoughtful reserve.",
      "The personality number comes from the consonants in the birth name. For PN7, those consonants produce an exterior that communicates intelligence and selectivity - the sense that this person is taking the measure of the situation before engaging, that they have standards, that getting to know them requires some patience. People pick this up and it tends to make them more interested rather than less.",
      "The private quality of PN7's first impression isn't always a fully accurate representation of what's inside. Many PN7 people are genuinely sociable and warm with people they know well - it's the outer layer that's private, not the whole person. But the first impression shapes expectations, and those expectations can take time to update."
    ],
    firstImpression: [
      "PN7 creates a specific quality of attention when they walk into a room - not a loud or magnetic attention, but a quieter, more focused kind. People notice PN7 as someone worth paying attention to without quite knowing why. There's a quality of presence that implies more is going on than is visible.",
      "The reserve that registers in the first impression tends to make people curious rather than put off. The sense that PN7 doesn't give themselves away easily makes getting past the exterior feel like it matters.",
      "One dynamic to be aware of: PN7's reserved first impression can create an aura of judgment even when none is intended. People may feel like they're being assessed, which makes some of them perform rather than be authentic. Being explicit about interest and warmth - earlier than feels natural - can address this."
    ],
    strengths: [
      { title: "Immediately appears credible", desc: "The thoughtful reserve of PN7 reads as someone worth listening to. People give PN7's input more weight early on because the impression suggests careful consideration rather than off-the-cuff reaction." },
      { title: "Creates intrigue", desc: "The quality of not being immediately readable makes PN7 interesting in a way that more open first impressions sometimes aren't. There's something to find out, which generates sustained attention." },
      { title: "Inspires trust through selectivity", desc: "When PN7 does open up or share, people feel it means something - because the impression has established that PN7 isn't indiscriminate. The intimacy, when it arrives, feels earned." },
      { title: "Perceived as wise", desc: "Even before there's evidence for it, PN7 tends to be perceived as someone who has thought about things carefully. People bring real questions and complex problems to PN7 earlier than they might to a less reservedly presented number." }
    ],
    challenges: [
      { title: "Reading as cold or aloof", desc: "The thoughtful reserve that makes PN7 interesting can also read as unfriendly or superior. People who don't know you well may interpret the privacy as indifference - and not push through to find the warmth on the other side." },
      { title: "Creating performance anxiety in others", desc: "The impression of careful observation and high standards can make people self-conscious around PN7 - feeling that they're being evaluated. This can prevent the kind of authentic interaction PN7 actually wants." },
      { title: "Difficulty signaling availability", desc: "PN7's natural exterior doesn't easily broadcast 'I'm interested in getting to know you' - which means that people who might be good contacts or connections don't always approach. The number may need to explicitly signal interest." },
      { title: "Expectations of depth in all directions", desc: "When you project depth, people sometimes assume you want depth in every interaction - which isn't always the case. Navigating the gap between the impression and the ordinary desire for easy, light social interaction takes management." }
    ],
    style: [
      "PN7 tends toward a personal style that is considered and somewhat minimalist - quality over quantity, understated over flashy. The aesthetic communicates discernment: the choices are deliberate and they reflect an actual sensibility rather than fashion.",
      "Communication style is thoughtful and specific. PN7 doesn't speak carelessly or at high volume. When they contribute to a conversation, it tends to be substantive - which reinforces the impression of depth and makes people listen.",
      "In professional contexts, PN7 often underplays their social warmth and interpersonal capacity. Being explicit about interest and care - rather than letting the reserved first impression do all the work - helps establish fuller, more useful professional relationships."
    ],
    faq: [
      {
        q: "What does personality number 7 mean?",
        a: ["Personality number 7 describes the impression of depth, thoughtfulness, and private reserve that you make on others. PN7 reads as someone interesting and slightly enigmatic - there's clearly more going on beneath the surface, and people are curious to find it.", "It's the outer layer that registers in early encounters."]
      },
      {
        q: "Is personality 7 antisocial?",
        a: ["Not inherently - though the reserved first impression can be misread that way. PN7 is selective, not antisocial. The reserve communicates that engagement will be genuine rather than reflexive, which is different from not wanting to engage at all.", "PN7 people are typically quite warm and socially at ease with people they know - the reserve is in the outer layer, not the interior."]
      },
      {
        q: "What is the shadow of personality 7?",
        a: ["Reading as cold or aloof to people who don't push through the first impression; creating performance anxiety in others; and having difficulty signaling genuine interest and availability.", "The work is being explicit about warmth and interest earlier than feels natural - not losing the depth, but making it more accessible."]
      },
      {
        q: "What careers suit personality 7?",
        a: ["Careers where depth, thoughtfulness, and the impression of careful intelligence are assets: research, analysis, writing, counseling, medicine, law, consulting, academia. PN7 is particularly effective in contexts where the first impression of substance and discernment matters."]
      },
      {
        q: "How does personality 7 affect relationships?",
        a: ["PN7 creates relationships that feel like they mean something - because the reserve communicates that access isn't given indiscriminately. People who get past the exterior tend to feel the relationship is real.", "The challenge is that the reserve can slow things down - preventing connections from developing that would have been genuinely valuable if the first impression had been warmer."]
      },
      {
        q: "How is personality 7 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce to a single digit."]
      }
    ],
    related: [
      { n: "4", label: "Personality 4", note: "Also reads as serious and grounded - PN4's exterior projects reliability, PN7's projects depth." },
      { n: "soul-urge-7", label: "Soul Urge 7", note: "The inner version - the private drive for understanding and introspection." },
      { n: "5", label: "Personality 5", note: "Almost the inverse first impression - magnetic and open where PN7 is private and reserved." }
    ]
  },
  {
    n: 8,
    title: "The Authority",
    shortDesc: "Personality 8 reads as powerful, capable, and authoritative. The first impression communicates that this is someone who gets things done at a significant level.",
    heroSubtitle: "People read power and capability in you - the sense that significant things happen around you.",
    meaning: [
      "Personality number 8 describes a first impression of authority and capability at scale. PN8 reads as someone who operates at a significant level - not just competent, but the kind of competent that moves things. People pick up real power and take it seriously before much has been said.",
      "The personality number comes from the consonants in the birth name. For PN8, those consonants produce an outer impression that is distinctly authoritative - the kind of presence that makes rooms recalibrate slightly when you enter them. People notice PN8 as someone whose approval or involvement matters.",
      "What's important to understand about PN8 is that the powerful exterior can be intimidating in ways that PN8 doesn't intend and isn't aware of. People may be less inclined to challenge, push back, or be fully authentic around PN8 because the impression of authority makes those things feel risky. Working consciously with this means actively creating safety for people to engage genuinely."
    ],
    firstImpression: [
      "PN8 tends to establish presence immediately. It's not loud or dramatic, but it's unmistakable - there's a quality of authority and focus that makes the room recalibrate when PN8 enters. People orient toward PN8 as someone whose opinion matters.",
      "The impression also tends to project a quality of achievement - the sense that this person has already done significant things and will continue to do so. Whether or not that's fully accurate in the moment, it's consistently read.",
      "One important dynamic: the authoritative first impression can prevent people from being fully themselves around PN8. They may perform rather than engage authentically, tell PN8 what they want to hear rather than what's true, or hesitate to bring problems that they'd bring to a less imposing presence. Being explicit about wanting genuine engagement is important."
    ],
    strengths: [
      { title: "Immediate command", desc: "PN8 establishes authority without having to announce it. The impression arrives before the track record and creates conditions where PN8's input, direction, and judgment are taken seriously from the start." },
      { title: "Opens high-level doors", desc: "The powerful first impression means PN8 gets access to people and opportunities that other first impressions might not generate. Decision-makers take PN8 seriously early." },
      { title: "Conveys ambition productively", desc: "PN8's impression communicates that significant things are being reached for - which attracts people who want to be part of significant work. The impression organically draws capable, ambitious people into PN8's orbit." },
      { title: "Inspires confidence", desc: "When PN8 communicates belief in a direction or an outcome, people tend to believe it too - because the impression of capability makes the confidence seem credible. This is genuine leadership leverage." }
    ],
    challenges: [
      { title: "Intimidating without trying", desc: "The powerful first impression creates an environment where people are less likely to push back, raise concerns, or be fully themselves. PN8 may be surrounded by agreement that doesn't reflect genuine alignment." },
      { title: "Perceived as focused only on outcomes", desc: "The impression of authority and achievement can make PN8 seem more transactional than they actually are - as if relationships are means to ends rather than ends in themselves. This can slow down the development of genuine trust." },
      { title: "Difficulty in contexts that don't want authority", desc: "Some situations - intimate relationships, collaborative creative work, community building - actively resist the kind of authority PN8 naturally projects. The first impression can create friction in contexts that need equality and mutuality more than direction." },
      { title: "People manage upward rather than engage genuinely", desc: "When your first impression communicates significant power, people often behave differently around you than they do with everyone else - managing the relationship rather than having it. This limits genuine connection and honest information." }
    ],
    style: [
      "PN8 tends to present with a personal style that communicates success and substance - quality, polish, and a directness that reads as someone who knows their value and doesn't need to announce it. The aesthetic is authoritative without being ostentatious.",
      "Communication style is direct and decisive. PN8 doesn't waste time getting to the point, doesn't hedge excessively, and tends to communicate in ways that convey confidence in their own positions. People find this clear and effective - and occasionally less open to dialogue than the situation warrants.",
      "In professional contexts, PN8 tends to be highly effective at the senior level but may need to consciously calibrate down when the situation calls for less formal authority and more informal collaboration."
    ],
    faq: [
      {
        q: "What does personality number 8 mean?",
        a: ["Personality number 8 describes the impression of authority, power, and significant capability you project to others. PN8 reads as someone who operates at a real level - whose involvement and judgment matter, whose work moves things.", "It's the outer layer that registers in first encounters."]
      },
      {
        q: "Is personality 8 arrogant?",
        a: ["The powerful first impression can read as arrogant to people who are uncomfortable with authority - but most of the time the intention is confidence rather than superiority.", "The work for PN8 is ensuring the confidence is accompanied by genuine openness to input and challenge - which isn't always visible in the first impression and needs to be explicitly demonstrated."]
      },
      {
        q: "What is the shadow of personality 8?",
        a: ["Intimidating without intending to; being surrounded by agreement that doesn't reflect genuine alignment; and appearing more focused on outcomes than on the people involved in them.", "The work is creating explicit safety for authentic engagement, and demonstrating warmth and genuine interest in people for their own sake."]
      },
      {
        q: "How does personality 8 show up professionally?",
        a: ["PN8 is highly effective in senior leadership roles and contexts that require authority. The first impression establishes credibility, commands attention, and opens high-level doors.", "The challenge is informal collaboration and contexts that need equality - PN8 may need to actively step the authority back to allow genuine dialogue."]
      },
      {
        q: "How is personality 8 different from soul urge 8?",
        a: ["Personality 8 is the outer impression - how others perceive you. Soul urge 8 is the inner motivation - the deep drive for achievement and significant impact. Having both means the authoritative first impression is accompanied by a genuine inner drive for large-scale achievement.", "You could have PN8 with a very different soul urge - projecting power while privately wanting something quite different."]
      },
      {
        q: "How is personality 8 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce to a single digit."]
      }
    ],
    related: [
      { n: "1", label: "Personality 1", note: "Also reads as capable and directive - PN1's authority is more personal, PN8's is more institutional." },
      { n: "soul-urge-8", label: "Soul Urge 8", note: "The inner version - the private drive for achievement and authority." },
      { n: "4", label: "Personality 4", note: "Also reads as capable and trustworthy - but PN4's impression is grounded and practical, PN8's is powerful and ambitious." }
    ]
  },
  {
    n: 9,
    title: "The Wise",
    shortDesc: "Personality 9 reads as wise, compassionate, and somehow larger than the immediate situation. People pick up depth and a quality of having seen things - it creates an impression of genuine wisdom.",
    heroSubtitle: "People sense something rare in you - a quality of wisdom and compassion that feels almost old.",
    meaning: [
      "Personality number 9 describes a first impression of wisdom and broad compassion. PN9 reads as someone who operates from a larger frame of reference than the immediate situation - whose warmth extends naturally, whose perspective seems shaped by more experience or reflection than the moment accounts for. People pick up something rare and they recognize it as such.",
      "The personality number comes from the consonants in the birth name. For PN9, those consonants produce an outer impression that is distinctly compassionate and wise - the kind of presence that makes people feel like they've encountered someone who genuinely understands how human life works, who won't judge them, who has perspective on whatever they're going through.",
      "What's interesting about PN9 is that this impression can precede the inner development that would actually justify it. Young PN9 people sometimes find themselves in the position of being assumed wise before they've had time to become it. Managing that - neither living up to an impression by pretending, nor dismissing the expectation entirely - is a real part of working with this number."
    ],
    firstImpression: [
      "PN9 creates a specific quality of connection in first encounters - people feel both seen and enlarged by the conversation. There's a sense of being in the presence of someone whose frame of reference is broader than usual, who takes the larger view naturally.",
      "The impression tends to project a quality of philosophical ease - the sense that PN9 has made peace with difficult things, has thought about the important questions, and carries the results of that thinking in a way that's available to other people. This is deeply appealing.",
      "One dynamic PN9 navigates: people may approach them with their most serious questions, their deepest concerns, their sense that here is someone who could actually help them understand something important. This is both a privilege and, sometimes, a burden - and PN9 may not always have the answers people are looking for."
    ],
    strengths: [
      { title: "Immediate trust and openness from others", desc: "PN9's wisdom impression makes people feel safe being honest and going deep quickly. They bypass the social surface and bring what's real, because the impression suggests PN9 can handle it - and usually they're right." },
      { title: "Universally relatable", desc: "The compassion and broad perspective PN9 projects makes them relatable across very different backgrounds, ages, and orientations. The wisdom impression translates broadly." },
      { title: "Naturally advisory", desc: "People bring PN9 real problems and trust the answers. The impression of wisdom means the input is taken seriously, which amplifies PN9's ability to actually contribute." },
      { title: "Quality of expansive presence", desc: "PN9 makes people feel that the scope of what's possible or meaningful is larger than it seemed before the conversation. This quality of expanding someone's horizon is genuinely rare and genuinely valuable." }
    ],
    challenges: [
      { title: "Expected to be always wise", desc: "The impression of wisdom creates an expectation for consistent wisdom - even on days when PN9 is tired, uncertain, or simply wrong. Maintaining the impression versus being authentically limited is a real challenge." },
      { title: "Heavy disclosure early on", desc: "The safe, wise first impression attracts deep disclosure from people who haven't yet established whether the relationship can hold it. PN9 can find themselves knowing very private things about people they've just met." },
      { title: "Difficulty showing their own needs", desc: "When your impression is one of composed wisdom, asking for support or admitting difficulty feels like a structural role reversal. People may not think to offer PN9 the care that the wise impression suggests isn't needed." },
      { title: "Own experience is invisible", desc: "The focus on PN9's wisdom and broad perspective can mean that PN9's own inner experience - their struggles, their uncertainties, their specific human situation - becomes invisible. They're the one doing the holding, and nobody is holding them." }
    ],
    style: [
      "PN9 tends to present with a quality of considered ease - the aesthetic of someone who has their own clear relationship with beauty and meaning rather than following external conventions. The style communicates depth without effort.",
      "Communication style is warm, expansive, and oriented toward the genuine. PN9 asks real questions, offers real perspectives, and engages with the actual person rather than the surface interaction. Conversations with PN9 tend to go somewhere.",
      "In professional contexts, PN9 tends to be most effective in advisory, teaching, or leadership roles - any context where the quality of broad perspective and genuine wisdom is actually what's needed."
    ],
    faq: [
      {
        q: "What does personality number 9 mean?",
        a: ["Personality number 9 describes the impression of wisdom, compassion, and broad perspective you make on others. PN9 reads as someone who operates from a larger frame of reference - who takes the long view naturally and whose warmth extends genuinely.", "It's the outer layer that registers in early encounters."]
      },
      {
        q: "Is personality 9 always serious?",
        a: ["The first impression can read as weighty and thoughtful - but PN9 people typically have genuine warmth and humor that emerge as the interaction deepens. The wisdom impression is the first thing people notice; it's not the only thing.", "Learning to let the lighter, more playful dimensions emerge earlier than they naturally would helps PN9 avoid being typecast as the wise elder in every situation."]
      },
      {
        q: "What is the shadow of personality 9?",
        a: ["Being expected to always have wisdom available; carrying heavy disclosures from people you've just met; and having your own needs and inner experience become invisible because the impression suggests you don't have any.", "The work is being genuinely human within the wisdom impression - showing the uncertainty, the ordinary days, the things you're still figuring out."]
      },
      {
        q: "What careers suit personality 9?",
        a: ["Careers where broad perspective, wisdom, and genuine compassion matter: teaching, counseling, medicine, writing, advisory roles, community leadership, humanitarian work, spiritual direction. The first impression opens doors in all of these contexts in a way that's distinctive."]
      },
      {
        q: "How does personality 9 show up in relationships?",
        a: ["PN9 creates depth and genuine connection quickly. People feel seen and enlarged by the relationship.", "The challenge is reciprocity and visibility - making sure the relationship flows in both directions, and that PN9's own experience and needs become as visible as their capacity to hold others."]
      },
      {
        q: "How is personality 9 calculated?",
        a: ["From the consonants in your full birth name. Assign each consonant its Pythagorean value and reduce to a single digit."]
      }
    ],
    related: [
      { n: "6", label: "Personality 6", note: "Also warm and caring in first impression - PN6 is more nurturing, PN9 is more wise." },
      { n: "soul-urge-9", label: "Soul Urge 9", note: "The inner version - the private orientation toward universal compassion and meaning." },
      { n: "7", label: "Personality 7", note: "Also reads as deep - PN7's depth is more private and analytical, PN9's is warmer and more universally accessible." }
    ]
  }
];

export const personalityNumberMap = new Map(personalityNumbers.map(p => [p.n, p]));

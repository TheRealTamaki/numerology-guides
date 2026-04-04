// Life path traits for each of the 12 life path numbers
export const lifePathTraits: Record<string, {
  title: string;
  element: string;
  coreTraits: [string, string, string];
  lovestyle: string;
  challenge: string;
}> = {
  '1': {
    title: 'The Leader',
    element: 'Fire',
    coreTraits: ['Independent', 'Driven', 'Pioneering'],
    lovestyle: 'Shows love through action and protection, and wants a partner who respects their autonomy.',
    challenge: 'Can become controlling or emotionally unavailable when stressed.',
  },
  '2': {
    title: 'The Peacemaker',
    element: 'Water',
    coreTraits: ['Sensitive', 'Diplomatic', 'Supportive'],
    lovestyle: 'Loves through emotional attunement and small, consistent gestures of care.',
    challenge: 'Can lose themselves in a relationship, prioritizing the other person at their own expense.',
  },
  '3': {
    title: 'The Communicator',
    element: 'Fire',
    coreTraits: ['Creative', 'Expressive', 'Social'],
    lovestyle: 'Brings playfulness and spontaneity to relationships, and needs a partner who appreciates their energy.',
    challenge: 'Can scatter attention across too many interests and avoid emotional depth.',
  },
  '4': {
    title: 'The Builder',
    element: 'Earth',
    coreTraits: ['Practical', 'Disciplined', 'Reliable'],
    lovestyle: 'Shows love through reliability and building a stable life together.',
    challenge: 'Can become rigid or overly focused on structure at the expense of emotional connection.',
  },
  '5': {
    title: 'The Adventurer',
    element: 'Air',
    coreTraits: ['Free-spirited', 'Adaptable', 'Curious'],
    lovestyle: 'Needs excitement and variety, and loves through shared experiences and exploration.',
    challenge: 'Can resist commitment or become restless when things feel too predictable.',
  },
  '6': {
    title: 'The Nurturer',
    element: 'Earth',
    coreTraits: ['Caring', 'Responsible', 'Loyal'],
    lovestyle: 'Loves deeply and unconditionally. The natural caretaker of any relationship.',
    challenge: 'Can become overbearing or sacrifice too much, leading to resentment.',
  },
  '7': {
    title: 'The Seeker',
    element: 'Water',
    coreTraits: ['Analytical', 'Introspective', 'Spiritual'],
    lovestyle: 'Needs intellectual and spiritual connection before opening up emotionally.',
    challenge: 'Can withdraw into isolation and struggle to express feelings directly.',
  },
  '8': {
    title: 'The Powerhouse',
    element: 'Earth',
    coreTraits: ['Ambitious', 'Authoritative', 'Strategic'],
    lovestyle: 'Shows love through providing and protecting, and wants a partner who matches their intensity.',
    challenge: 'Can prioritize work and material success over emotional intimacy.',
  },
  '9': {
    title: 'The Humanitarian',
    element: 'Fire',
    coreTraits: ['Compassionate', 'Idealistic', 'Wise'],
    lovestyle: 'Loves broadly and deeply, bringing a sense of purpose and meaning to relationships.',
    challenge: 'Can be emotionally distant or spread too thin trying to save the world.',
  },
  '11': {
    title: 'The Intuitive Master',
    element: 'Light',
    coreTraits: ['Psychic', 'Inspiring', 'Sensitive'],
    lovestyle: 'Connects on a soul level, and needs a partner who can handle emotional intensity.',
    challenge: 'Can become anxious or overwhelmed by their own sensitivity.',
  },
  '22': {
    title: 'The Master Builder',
    element: 'Earth',
    coreTraits: ['Visionary', 'Powerful', 'Disciplined'],
    lovestyle: 'Wants a partner who shares their big-picture vision and supports their mission.',
    challenge: 'Can become so focused on building that they neglect the relationship itself.',
  },
  '33': {
    title: 'The Master Teacher',
    element: 'Light',
    coreTraits: ['Healing', 'Teaching', 'Selfless'],
    lovestyle: 'Loves through service and spiritual guidance. Deeply devoted once committed.',
    challenge: 'Can give everything to others and forget to receive love in return.',
  },
};

// Compatibility data: match level, verdict, and short description for every pair
export const compatibilityData: Record<string, Record<string, { match: string; verdict: string; description: string }>> = {
  '1': {
    '1': { match: "challenging", verdict: "Power struggles likely", description: "Two independent leaders in one space often creates friction over who sets direction." },
    '2': { match: "strong", verdict: "Natural balance", description: "2 provides emotional warmth that 1 needs, without competing for control." },
    '3': { match: "strong", verdict: "Great pairing", description: "3's creativity feeds 1's drive. Good blend of innovation and execution." },
    '4': { match: "good", verdict: "Practical match", description: "4 grounds 1's vision. Both are goal-oriented but with different paces." },
    '5': { match: "good", verdict: "Freedom-focused", description: "Both value independence. Can work if neither tries to lead the other." },
    '6': { match: "strong", verdict: "Complementary", description: "6 brings warmth and loyalty. 1 brings direction and protection." },
    '7': { match: "good", verdict: "Intellectually stimulating", description: "Both prefer space and independence. Good if neither expects constant togetherness." },
    '8': { match: "challenging", verdict: "Ambitious clash", description: "Two power-driven numbers often compete rather than collaborate." },
    '9': { match: "good", verdict: "Shared vision", description: "9's broader perspective softens 1's edges. 1's drive helps 9 take action." },
    '11': { match: "good", verdict: "Interesting mix", description: "1's directness and 11's intuition can complement if 11 feels heard." },
    '22': { match: "challenging", verdict: "Too much leadership", description: "Both want to be in charge. Power struggles are common." },
    '33': { match: "good", verdict: "Supportive", description: "33's teaching nature can help 1 develop emotional intelligence." },
  },
  '2': {
    '1': { match: "strong", verdict: "Natural balance", description: "2 provides emotional warmth that 1 needs, without competing for control." },
    '2': { match: "challenging", verdict: "Two empaths", description: "Lots of feeling, not much doing. Can become codependent." },
    '3': { match: "good", verdict: "Harmonious", description: "3's lightness brings joy to 2's depth. Both are creative." },
    '4': { match: "good", verdict: "Steady partnership", description: "4 appreciates 2's loyalty. 2 feels safe with 4's stability." },
    '5': { match: "good", verdict: "Growth potential", description: "2 grounds the flighty 5. 5 helps 2 build independence." },
    '6': { match: "strong", verdict: "Kindred spirits", description: "Both nurturers with similar values. Naturally compassionate together." },
    '7': { match: "good", verdict: "Quiet understanding", description: "Both introspective. Good for intellectual and emotional depth." },
    '8': { match: "challenging", verdict: "Imbalance risk", description: "2's softness can be overwhelmed by 8's intensity and ambition." },
    '9': { match: "strong", verdict: "Spiritual bond", description: "Both compassionate and idealistic. Natural emotional attunement." },
    '11': { match: "strong", verdict: "Intuitive connection", description: "2 and 11 both operate from deep intuition. Very natural pairing." },
    '22': { match: "good", verdict: "Complementary", description: "22's vision gets warmed by 2's heart. Both are builders." },
    '33': { match: "strong", verdict: "Beautiful union", description: "Both nurturing. 33's teaching energy resonates with 2's supportive nature." },
  },
  '3': {
    '1': { match: "strong", verdict: "Great pairing", description: "3's creativity feeds 1's drive. Good blend of innovation and execution." },
    '2': { match: "good", verdict: "Harmonious", description: "3's lightness brings joy to 2's depth. Both are creative." },
    '3': { match: "good", verdict: "Creative chaos", description: "Both expressive. Fun but can scatter. Needs grounding from other numbers." },
    '4': { match: "challenging", verdict: "Different speeds", description: "3's scattered energy frustrates 4's need for structure." },
    '5': { match: "strong", verdict: "Fun partnership", description: "Both love freedom and novelty. Never dull together." },
    '6': { match: "good", verdict: "Playful care", description: "3 brings lightness to 6's seriousness. 6 provides emotional safety." },
    '7': { match: "good", verdict: "Interesting contrast", description: "3's social energy and 7's introspection can complement." },
    '8': { match: "good", verdict: "Good balance", description: "8 respects 3's talent. 3 brings joy to 8's intensity." },
    '9': { match: "strong", verdict: "Inspiring together", description: "Both creative and idealistic. Natural creative collaboration." },
    '11': { match: "good", verdict: "Expressive intuition", description: "3's expression and 11's intuition blend well." },
    '22': { match: "good", verdict: "Visionary duo", description: "3's creativity supports 22's big vision." },
    '33': { match: "strong", verdict: "Natural teachers", description: "Both expressive. 33's wisdom and 3's communication are aligned." },
  },
  '4': {
    '1': { match: "good", verdict: "Practical match", description: "4 grounds 1's vision. Both are goal-oriented but with different paces." },
    '2': { match: "good", verdict: "Steady partnership", description: "4 appreciates 2's loyalty. 2 feels safe with 4's stability." },
    '3': { match: "challenging", verdict: "Different speeds", description: "3's scattered energy frustrates 4's need for structure." },
    '4': { match: "good", verdict: "Stable foundation", description: "Two practical builders. Can work if they respect each other's methods." },
    '5': { match: "challenging", verdict: "Restrictive to 5", description: "4's need for stability feels limiting to free-spirited 5." },
    '6': { match: "strong", verdict: "Domestic bliss", description: "Both value home and family. Naturally aligned in life goals." },
    '7': { match: "good", verdict: "Respectful", description: "Both introspective. 4 appreciates 7's depth." },
    '8': { match: "strong", verdict: "Power team", description: "4's discipline meets 8's vision. Both building something real." },
    '9': { match: "good", verdict: "Purposeful", description: "9's vision benefits from 4's practical structure." },
    '11': { match: "good", verdict: "Grounded intuition", description: "4 provides structure. 11 brings spiritual insight." },
    '22': { match: "strong", verdict: "Master builders", description: "4 and 22 both love structure. Natural collaborators." },
    '33': { match: "good", verdict: "Purposeful structure", description: "33's teaching and 4's discipline work well together." },
  },
  '5': {
    '1': { match: "good", verdict: "Freedom-focused", description: "Both value independence. Can work if neither tries to lead the other." },
    '2': { match: "good", verdict: "Growth potential", description: "2 grounds the flighty 5. 5 helps 2 build independence." },
    '3': { match: "strong", verdict: "Fun partnership", description: "Both love freedom and novelty. Never dull together." },
    '4': { match: "challenging", verdict: "Restrictive to 5", description: "4's need for stability feels limiting to free-spirited 5." },
    '5': { match: "challenging", verdict: "Too much freedom", description: "No anchor. Both restless. Can feel unstable." },
    '6': { match: "good", verdict: "Playful stability", description: "6's home-base helps 5 not drift. 5 brings excitement." },
    '7': { match: "good", verdict: "Independent spirits", description: "Both need space. Respect each other's autonomy." },
    '8': { match: "good", verdict: "Ambitious freedom", description: "5's adaptability helps 8's rigid plans. 8 grounds 5's restlessness." },
    '9': { match: "strong", verdict: "Expansive together", description: "Both see possibilities. 9's wisdom steadies 5's scattered energy." },
    '11': { match: "good", verdict: "Intuitive freedom", description: "Both unconventional. 11's intuition guides 5's wandering." },
    '22': { match: "good", verdict: "Dynamic partnership", description: "5's adaptability helps 22's grand visions stay flexible." },
    '33': { match: "good", verdict: "Inspired connection", description: "33's teaching helps 5 channel energy toward purpose." },
  },
  '6': {
    '1': { match: "strong", verdict: "Complementary", description: "6 brings warmth and loyalty. 1 brings direction and protection." },
    '2': { match: "strong", verdict: "Kindred spirits", description: "Both nurturers with similar values. Naturally compassionate together." },
    '3': { match: "good", verdict: "Playful care", description: "3 brings lightness to 6's seriousness. 6 provides emotional safety." },
    '4': { match: "strong", verdict: "Domestic bliss", description: "Both value home and family. Naturally aligned in life goals." },
    '5': { match: "good", verdict: "Playful stability", description: "6's home-base helps 5 not drift. 5 brings excitement." },
    '6': { match: "challenging", verdict: "Caretaker overload", description: "Both give too much. Risk of mutual depletion." },
    '7': { match: "good", verdict: "Deep care", description: "6's warmth melts 7's reserve. 7 appreciates the loyalty." },
    '8': { match: "good", verdict: "Power and heart", description: "8 respects 6's strength. 6 softens 8's edges." },
    '9': { match: "strong", verdict: "Perfect match", description: "Both compassionate and idealistic. Natural soul-level alignment." },
    '11': { match: "strong", verdict: "Intuitive care", description: "6 and 11 both feel deeply. Natural emotional harmony." },
    '22': { match: "good", verdict: "Vision with heart", description: "22's building supported by 6's nurturing." },
    '33': { match: "strong", verdict: "Teaching and healing", description: "33 and 6 both serve. Naturally aligned mission." },
  },
  '7': {
    '1': { match: "good", verdict: "Intellectually stimulating", description: "Both prefer space and independence. Good if neither expects constant togetherness." },
    '2': { match: "good", verdict: "Quiet understanding", description: "Both introspective. Good for intellectual and emotional depth." },
    '3': { match: "good", verdict: "Interesting contrast", description: "3's social energy and 7's introspection can complement." },
    '4': { match: "good", verdict: "Respectful", description: "Both introspective. 4 appreciates 7's depth." },
    '5': { match: "good", verdict: "Independent spirits", description: "Both need space. Respect each other's autonomy." },
    '6': { match: "good", verdict: "Deep care", description: "6's warmth melts 7's reserve. 7 appreciates the loyalty." },
    '7': { match: "challenging", verdict: "Too much isolation", description: "Both withdrawn. Can become lonely together." },
    '8': { match: "good", verdict: "Respect and mystery", description: "8 respects 7's intellect. 7 appreciates 8's confidence." },
    '9': { match: "good", verdict: "Philosophical bond", description: "Both seeking deeper truth. Intellectually aligned." },
    '11': { match: "strong", verdict: "Spiritual seekers", description: "7 and 11 both intuitive and introspective. Natural fit." },
    '22': { match: "good", verdict: "Wise builders", description: "7's wisdom supports 22's vision." },
    '33': { match: "good", verdict: "Spiritual teaching", description: "33's wisdom resonates with 7's seeking." },
  },
  '8': {
    '1': { match: "challenging", verdict: "Ambitious clash", description: "Two power-driven numbers often compete rather than collaborate." },
    '2': { match: "challenging", verdict: "Imbalance risk", description: "2's softness can be overwhelmed by 8's intensity and ambition." },
    '3': { match: "good", verdict: "Good balance", description: "8 respects 3's talent. 3 brings joy to 8's intensity." },
    '4': { match: "strong", verdict: "Power team", description: "4's discipline meets 8's vision. Both building something real." },
    '5': { match: "good", verdict: "Ambitious freedom", description: "5's adaptability helps 8's rigid plans. 8 grounds 5's restlessness." },
    '6': { match: "good", verdict: "Power and heart", description: "8 respects 6's strength. 6 softens 8's edges." },
    '7': { match: "good", verdict: "Respect and mystery", description: "8 respects 7's intellect. 7 appreciates 8's confidence." },
    '8': { match: "challenging", verdict: "Too much ambition", description: "Both intense. Power struggles common." },
    '9': { match: "good", verdict: "Vision and impact", description: "8's power and 9's vision create social impact." },
    '11': { match: "good", verdict: "Powerful intuition", description: "8's drive balanced by 11's insight." },
    '22': { match: "strong", verdict: "Visionary empire", description: "8 and 22 both ambitious builders. Rare powerful match." },
    '33': { match: "good", verdict: "Powerful teaching", description: "33's wisdom guides 8's ambition toward service." },
  },
  '9': {
    '1': { match: "good", verdict: "Shared vision", description: "9's broader perspective softens 1's edges. 1's drive helps 9 take action." },
    '2': { match: "strong", verdict: "Spiritual bond", description: "Both compassionate and idealistic. Natural emotional attunement." },
    '3': { match: "strong", verdict: "Inspiring together", description: "Both creative and idealistic. Natural creative collaboration." },
    '4': { match: "good", verdict: "Purposeful", description: "9's vision benefits from 4's practical structure." },
    '5': { match: "strong", verdict: "Expansive together", description: "Both see possibilities. 9's wisdom steadies 5's scattered energy." },
    '6': { match: "strong", verdict: "Perfect match", description: "Both compassionate and idealistic. Natural soul-level alignment." },
    '7': { match: "good", verdict: "Philosophical bond", description: "Both seeking deeper truth. Intellectually aligned." },
    '8': { match: "good", verdict: "Vision and impact", description: "8's power and 9's vision create social impact." },
    '9': { match: "challenging", verdict: "Too much giving", description: "Both service-oriented. Risk of mutual depletion or codependency." },
    '11': { match: "strong", verdict: "Spiritual partners", description: "9 and 11 both intuitive and idealistic. Natural alignment." },
    '22': { match: "strong", verdict: "Visionary change", description: "9's vision and 22's building power create real-world impact." },
    '33': { match: "strong", verdict: "Healing partnership", description: "9 and 33 both teachers and healers. Aligned mission." },
  },
  '11': {
    '1': { match: "good", verdict: "Interesting mix", description: "1's directness and 11's intuition can complement if 11 feels heard." },
    '2': { match: "strong", verdict: "Intuitive connection", description: "2 and 11 both operate from deep intuition. Very natural pairing." },
    '3': { match: "good", verdict: "Expressive intuition", description: "3's expression and 11's intuition blend well." },
    '4': { match: "good", verdict: "Grounded intuition", description: "4 provides structure. 11 brings spiritual insight." },
    '5': { match: "good", verdict: "Intuitive freedom", description: "Both unconventional. 11's intuition guides 5's wandering." },
    '6': { match: "strong", verdict: "Intuitive care", description: "6 and 11 both feel deeply. Natural emotional harmony." },
    '7': { match: "strong", verdict: "Spiritual seekers", description: "7 and 11 both intuitive and introspective. Natural fit." },
    '8': { match: "good", verdict: "Powerful intuition", description: "8's drive balanced by 11's insight." },
    '9': { match: "strong", verdict: "Spiritual partners", description: "9 and 11 both intuitive and idealistic. Natural alignment." },
    '11': { match: "challenging", verdict: "Two mystics", description: "Both intuitive. Can be dreamy and impractical together." },
    '22': { match: "good", verdict: "Visionary balance", description: "11's intuition guides 22's building ambition." },
    '33': { match: "strong", verdict: "Master alignment", description: "11 and 33 both master numbers. Rare spiritual connection." },
  },
  '22': {
    '1': { match: "challenging", verdict: "Too much leadership", description: "Both want to be in charge. Power struggles are common." },
    '2': { match: "good", verdict: "Complementary", description: "22's vision gets warmed by 2's heart. Both are builders." },
    '3': { match: "good", verdict: "Visionary duo", description: "3's creativity supports 22's big vision." },
    '4': { match: "strong", verdict: "Master builders", description: "4 and 22 both love structure. Natural collaborators." },
    '5': { match: "good", verdict: "Dynamic partnership", description: "5's adaptability helps 22's grand visions stay flexible." },
    '6': { match: "good", verdict: "Vision with heart", description: "22's building supported by 6's nurturing." },
    '7': { match: "good", verdict: "Wise builders", description: "7's wisdom supports 22's vision." },
    '8': { match: "strong", verdict: "Visionary empire", description: "8 and 22 both ambitious builders. Rare powerful match." },
    '9': { match: "strong", verdict: "Visionary change", description: "9's vision and 22's building power create real-world impact." },
    '11': { match: "good", verdict: "Visionary balance", description: "11's intuition guides 22's building ambition." },
    '22': { match: "challenging", verdict: "Two visionaries", description: "Both want to build empires. Power dynamics complex." },
    '33': { match: "good", verdict: "Master builders and teachers", description: "22 and 33 both masters. Complementary gifts." },
  },
  '33': {
    '1': { match: "good", verdict: "Supportive", description: "33's teaching nature can help 1 develop emotional intelligence." },
    '2': { match: "strong", verdict: "Beautiful union", description: "Both nurturing. 33's teaching energy resonates with 2's supportive nature." },
    '3': { match: "strong", verdict: "Natural teachers", description: "Both expressive. 33's wisdom and 3's communication are aligned." },
    '4': { match: "good", verdict: "Purposeful structure", description: "33's teaching and 4's discipline work well together." },
    '5': { match: "good", verdict: "Inspired connection", description: "33's teaching helps 5 channel energy toward purpose." },
    '6': { match: "strong", verdict: "Teaching and healing", description: "33 and 6 both serve. Naturally aligned mission." },
    '7': { match: "good", verdict: "Spiritual teaching", description: "33's wisdom resonates with 7's seeking." },
    '8': { match: "good", verdict: "Powerful teaching", description: "33's wisdom guides 8's ambition toward service." },
    '9': { match: "strong", verdict: "Healing partnership", description: "9 and 33 both teachers and healers. Aligned mission." },
    '11': { match: "strong", verdict: "Master alignment", description: "11 and 33 both master numbers. Rare spiritual connection." },
    '22': { match: "good", verdict: "Master builders and teachers", description: "22 and 33 both masters. Complementary gifts." },
    '33': { match: "challenging", verdict: "Two healers", description: "Both service-oriented teachers. Can overlap in purpose." },
  },
};

// All life path numbers in order
export const allNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '11', '22', '33'] as const;

// Numeric sort value for ordering
function numVal(n: string): number {
  return parseInt(n, 10);
}

// Generate all 78 unique pairs where X < Y numerically
export function getAllPairs(): { a: string; b: string; slug: string }[] {
  const pairs: { a: string; b: string; slug: string }[] = [];
  for (let i = 0; i < allNumbers.length; i++) {
    for (let j = i + 1; j < allNumbers.length; j++) {
      const a = allNumbers[i];
      const b = allNumbers[j];
      pairs.push({ a, b, slug: `${a}-and-${b}` });
    }
  }
  // Add same-number pairs (1-and-1, 2-and-2, etc.)
  for (const n of allNumbers) {
    pairs.push({ a: n, b: n, slug: `${n}-and-${n}` });
  }
  return pairs;
}

// Get compatibility info for any two numbers (order doesn't matter)
export function getCompatibility(a: string, b: string) {
  return compatibilityData[a]?.[b] || compatibilityData[b]?.[a];
}

// Star count from match level
export function matchToStars(match: string): number {
  if (match === 'strong') return 5;
  if (match === 'good') return 3;
  return 2; // challenging
}

// Extended pair details for each of the 78 unique pairs + 12 same-number pairs
export const pairDetails: Record<string, {
  overview: string;
  loveInsight: string;
  friendshipInsight: string;
  workInsight: string;
  tips: [string, string, string];
}> = {
  '1-and-2': {
    overview: `This is one of the most naturally balanced pairings in numerology. The 1 leads, the 2 supports, and neither feels diminished by their role. It works because the 2 doesn't want to lead. They want to create harmony. And the 1 doesn't want to manage emotions. They want to set direction.\n\nWhat makes this pair click is that you fill each other's gaps without trying. The 1 provides the confidence and forward motion that the 2 sometimes lacks. The 2 provides the emotional intelligence and patience that the 1 sometimes ignores.\n\nThe risk is imbalance. If the 1 dominates and the 2 just accommodates, the 2 will eventually feel invisible. And a 2 who feels invisible doesn't fight. They withdraw. The 1 might not even notice until it's too late.`,
    loveInsight: `In love, this pairing has a classic rhythm: the 1 pursues, the 2 receives and nurtures. It feels natural and comfortable. The 2 makes the 1 feel understood at a level they rarely experience elsewhere. The 1 makes the 2 feel protected and valued. Just make sure the 2's needs get airtime. They won't always ask.

Day-to-day, the 1 leads and the 2 tends. The 1 makes plans, takes action, drives growth. The 2 creates warmth, remembers what matters, holds the emotional texture of the relationship. It's a division of labor that works because you're actually good at your respective roles. But it can calcify into a pattern where the 2 forgets they have a voice.

The friction point is invisibility. The 2 gives so much emotional labor that they disappear. The 1 has to actively ask what the 2 needs and then actually listen to the answer, not just provide a practical solution. The 2 has to stop waiting to be asked and speak up about their own needs. Balance isn't 50-50 here; it's both people being seen.`,
    friendshipInsight: `A 1 and 2 friendship is often the 'advisor and decision-maker' dynamic. The 2 listens, reflects, and offers perspective. The 1 acts. It works because the 2 doesn't need credit and the 1 doesn't need emotional processing. Each gives what the other values most.

This friendship often takes shape around the 1's projects or goals. The 2 becomes the trusted sounding board—the person the 1 talks to before making big moves. The 1 becomes the force that pulls the 2 out of passivity and into the world. You balance each other without trying.

The tension comes when the 2 becomes too self-sacrificing. They start putting the 1's needs ahead of their own life, and the 1 doesn't always notice because they're not naturally attuned to these things. The 2 needs to set boundaries early, not years in. And the 1 needs to check in: "What do you need from this friendship?" Not everyone will say.`,
    workInsight: `Professionally, this is the executive and the right-hand partnership. The 1 drives strategy, the 2 manages relationships and keeps the team cohesive. It's effective as long as the 1 publicly acknowledges the 2's contributions. A 2 who feels taken for granted will quietly disengage.

The 2 excels at reading the room—understanding what's unsaid, what's broken, what needs attention. The 1 excels at setting direction and pushing through obstacles. Together, you can build an organization that's both effective and humane. The 2 keeps the 1 from becoming a tyrant. The 1 keeps the 2 from drowning in everyone else's feelings.

The professional risk is that the 2 burns out. They invest so much in team dynamics and supporting the 1's vision that they neglect their own work or skills. The 1 needs to actively create space for the 2 to develop independently. And the 2 needs to stop equating their value with their emotional availability.`,
    tips: [
      'The 1 should regularly check in. Ask the 2 what they need, because they rarely volunteer it',
      'The 2 should practice speaking up before resentment builds',
      'Celebrate the 2\'s contributions as loudly as the 1\'s achievements',
    ],
  },
  '1-and-3': {
    overview: `Life path 1 and 3 together is a high-energy, creative partnership. The 1 has the drive and direction. The 3 has the ideas and the ability to communicate them. Together, you move fast and make things happen.\n\nThe 3 keeps things light and fun, which is good for the 1, who can get too serious and single-minded. The 1 gives the 3 something the 3 often lacks: follow-through. A 3 with a good idea and a 1 to execute it? That's a powerful combination.\n\nThe tension comes when the 1 dismisses the 3's playfulness as unserious, or when the 3 feels the 1 is too rigid. Neither of you does well with criticism, so learning to give feedback without triggering defenses is the real skill here.`,
    loveInsight: `In romance, 1 and 3 have natural chemistry. The 3's warmth and humor attract the 1. The 1's confidence and decisiveness attract the 3. This couple tends to have a genuinely fun relationship: dates, adventures, laughter. The attraction is strong and easy.

Day-to-day, you're the couple that other people envy a little. You have fun together. The 1 appreciates that the 3 makes life less serious, less militant. The 3 loves that the 1 actually makes things happen instead of just talking about them. You complement each other naturally. But neither of you is particularly deep, and that matters over time.

The main vulnerability is avoidance. When things get difficult—money problems, health scares, family conflict—you both reach for the same toolbox: change the subject, make a joke, move to the next activity. You can coast on chemistry for years without ever really being vulnerable with each other. At some point, that catches up with you. You have to learn to sit with hard conversations.`,
    friendshipInsight: `As friends, you're the pair everyone wants to be around. The 1 brings ambition and edge. The 3 brings charm and creativity. You inspire each other naturally. The friendship thrives when you collaborate on projects: the 3 dreams it up, the 1 makes it real.

You're the friends who can start planning a road trip at noon and leave by evening. The 1 handles logistics; the 3 makes sure it doesn't feel like a military operation. You actually enjoy the same activities without having to negotiate constantly.

The friendship can get hollow if you're not careful. All surface, no substance. If you never talk about real things—fears, struggles, deeper values—the friendship stays fun but remains pretty shallow. Make sure you occasionally go deeper than logistics and entertainment. Real friendship has grit to it.`,
    workInsight: `In work, this is a strong creative partnership. The 3 generates ideas and handles communication: marketing, pitching, storytelling. The 1 handles strategy and execution. Respect each other's roles and this team punches way above its weight.

This pairing excels in any field that needs both vision and action, especially creative industries. The 3's ability to make people excited about things, combined with the 1's ability to make it happen, is potent. You rarely get bogged down in analysis paralysis.

The professional challenge is that the 3 can lose focus, and the 1 can move too fast without enough input. The 1 needs to check in with the 3 instead of just pushing forward. The 3 needs to deliver, not just ideate. You need clear deliverables and timelines, otherwise the 3 gets scattered and the 1 gets frustrated. Treat deadlines like decisions: non-negotiable.`,
    tips: [
      'The 1 should resist dismissing the 3\'s ideas as "not practical enough". They often have gold in them',
      'The 3 should finish what they start when working with a 1, or the 1 loses trust',
      'Build in fun together. This pair needs play to stay connected',
    ],
  },
  '1-and-4': {
    overview: `The 1 and 4 share something important: both are builders. The 1 builds through vision and initiative. The 4 builds through discipline and process. This is the architect and the engineer, and when they align on a goal, they're remarkably effective.\n\nThe tension is pace. The 1 wants to move now. The 4 wants to make sure the foundation is solid first. The 1 sees the 4 as slow. The 4 sees the 1 as reckless. Neither is wrong. They're just operating on different timelines.\n\nThis works when both of you respect what the other brings. The 1's boldness needs the 4's structure. The 4's reliability needs the 1's vision. Without each other, the 1 builds castles on sand and the 4 builds perfectly constructed things nobody asked for.`,
    loveInsight: `In love, this pairing is steady and goal-oriented. You're both practical about relationships. Neither of you is looking for drama. The 4 provides the stability the 1 secretly craves. The 1 provides the excitement the 4 needs but won't admit to. Keep the romance alive by breaking routine occasionally.

Day-to-day, you're a team. The 1 sets the direction; the 4 creates the structure. Bills get paid, plans get executed, and the relationship feels reliable. There's very little chaos, which is nice for both of you. The 4 appreciates that the 1 is decisive. The 1 appreciates that the 4 doesn't need constant emotional reassurance.

The friction point is predictability. After a while, the relationship can start to feel like a well-oiled machine with no spark. The 1 needs to actively introduce novelty—spontaneous trips, new experiences, romantic gestures that aren't on the calendar. The 4 needs to loosen up and allow for some improvisation. Neither of you defaults to this, which is why you have to plan it.`,
    friendshipInsight: `A 1 and 4 friendship often centers around shared projects or goals. You're the friends who build something together: a business, a trip, a renovation. The friendship deepens through doing. It's less about late-night heart-to-hearts and more about mutual respect built through action.

You trust each other's word. If the 1 says they'll show up, they show up. If the 4 says they'll handle something, it's handled. The friendship works because you're reliable with each other. You don't need constant communication or validation. You just show up and work.

The limitation is that the friendship stays somewhat surface. You rarely get truly vulnerable. The friendship is solid, but it doesn't have layers. If you want it to deepen, you'll have to make space for conversations that aren't about projects. The 4 might need to go first here—the 1 won't naturally initiate.`,
    workInsight: `This is one of the strongest work pairings. The 1 sets direction, the 4 builds the systems. Startups, construction, project management: any field that needs both vision and execution benefits from this combo. Just let the 4 handle the details without micromanaging.

The 1 and 4 together create organizations that actually run. The 1 sees where to go; the 4 builds the road. There's very little wasted motion. You're not flashy, but you deliver. Clients trust you. Employees respect you. Banks are willing to lend to you.

The professional challenge is that the 4 can slow the 1 down with too much planning, and the 1 can push the 4 forward before they're ready. You need to trust that the 4 is building something solid, even if it takes longer than the 1 would like. And the 4 needs to understand that sometimes moving fast is worth the risk of imperfect planning. The best version of this partnership delegates fully: the 1 handles the market, the 4 handles the operation.`,
    tips: [
      'The 1 should slow down enough to appreciate the 4\'s thoroughness. It prevents costly mistakes',
      'The 4 should trust the 1\'s instincts sometimes, even without full data',
      'Find a shared goal to work toward. This pair bonds through building',
    ],
  },
  '1-and-5': {
    overview: `Both the 1 and 5 value independence above almost everything. The 1 needs autonomy to lead. The 5 needs freedom to explore. This means you'll never feel smothered by each other, which is a huge plus for both of you.\n\nThe energy here is dynamic and restless. You're both action-oriented and hate sitting still. Together, life is an adventure. The problem? Nobody's steering. The 1 wants to lead, but the 5 doesn't want to be led. The 5 wants variety, but the 1 wants commitment to a direction.\n\nThis pair works when you're aligned on the big picture but loose on the details. Agree on where you're going, then give each other space to get there in your own way.`,
    loveInsight: `In romance, 1 and 5 create excitement. Both of you bring energy, spontaneity, and a willingness to try new things. The attraction is strong. But long-term commitment requires something neither of you defaults to: settling down. You'll need to actively choose stability without letting it feel like a cage.

Day-to-day, you're the couple that never gets boring. You take chances together, explore, change direction on a whim. The 1 appreciates that the 5 doesn't cling or demand constant reassurance. The 5 loves that the 1 is up for anything. But you can end up living a series of adventures instead of building a life together.

The main tension is commitment. The 1 wants decisive partnership; the 5 wants freedom. The 1 gets frustrated when the 5 seems reluctant to truly commit. The 5 feels suffocated by the 1's need for clarity and permanence. You have to find the middle ground: commitment that includes freedom, adventure that includes stability. That requires both of you to work against your nature.`,
    friendshipInsight: `As friends, you're the adventure duo. Trips, risks, new experiences: you push each other toward the edge in the best way. This friendship stays alive through shared experiences. If life gets too routine, you'll drift. Keep planning the next thing.

You don't need to talk every day or check in constantly. The friendship is sustained by action: the next trip, the next project, the next whatever. You both understand that friendship doesn't have to be constant to be real. You can go weeks without contact and pick right back up.

The risk is that the friendship becomes all surface momentum. You never actually sit down and talk about what's really going on in your lives. When one of you hits a real rough patch—not an exciting challenge, but actual hardship—the friendship doesn't have the emotional depth to hold it. You need to occasionally be still together, not just in motion.`,
    workInsight: `In work, the 1 provides direction and the 5 provides adaptability. This is strong in fast-moving fields: sales, startups, consulting. The 5 handles change effortlessly, which complements the 1's decisive leadership. Just make sure someone's tracking the details.

The 1 and 5 together create agile organizations. The 1 identifies where to pivot; the 5 actually pivots. You move faster than most competitors. You're comfortable in uncertainty. You attract talented people who like to move quick.

The professional challenge is follow-through. Both of you can be seduced by the next shiny thing. The 1 wants to chase new markets; the 5 wants to explore new methods. But building something real requires sustained effort on one thing long enough to actually finish it. You need to create accountability structures that make it harder for either of you to bail when something gets hard or boring. Maybe that's a third person, or clear quarterly reviews. But something.`,
    tips: [
      'Give each other genuine freedom. Jealousy or control will destroy this pairing fast',
      'Create shared rituals that don\'t feel restrictive, like a weekly adventure, not a rigid schedule',
      'Both of you: practice staying when things get uncomfortable instead of starting something new',
    ],
  },
  '1-and-6': {
    overview: `The 1 and the 6 are a surprisingly strong match. The 1 is the protector and provider. The 6 is the nurturer and healer. Together, you create a relationship that feels both safe and purposeful.\n\nThe 6 gives the 1 something they desperately need but rarely ask for: emotional warmth and unconditional support. The 1 gives the 6 something equally important: a sense of direction and protection. The 6 doesn't need to lead. They need to feel valued. And the 1 naturally provides that through action.\n\nThe risk is that the 6 over-gives and the 1 takes it for granted. The 1 is so focused on their goals that they can forget to water the relationship. And the 6 will keep giving long past the point of depletion before saying anything.`,
    loveInsight: `In love, this is a classic match. The 1 brings passion and ambition. The 6 brings devotion and warmth. You create a home that feels both exciting and safe. The key is reciprocity: the 1 needs to give back emotionally, not just materially. The 6 needs words and presence, not just achievements.

Day-to-day, the 1 is energized and expanding. The 6 is steady and present. The 1 comes home and there's always food, care, and a calm space. The 6 gets to feel like their devotion is appreciated and used wisely. The 1 doesn't have to manage the home; the 6 doesn't have to drive everything forward. It's a real partnership where each person thrives in their role.

The friction point is emotional expression. The 1 shows love through action and provision. The 6 needs to hear it, feel it, see it in small moments. The 1 can become task-focused and forget that the 6 needs emotional reassurance alongside the material security. The 6 can start to feel like a caretaker rather than a partner. You have to consciously create moments of pure connection—time where neither of you is problem-solving or providing, just being together.`,
    friendshipInsight: `A 1 and 6 friendship often has a family-like quality. The 6 looks out for the 1, checks in, remembers the details. The 1 stands up for the 6, pulls them out of their comfort zone, and pushes them to dream bigger. It's a loyal, lasting bond.

You're the friends who actually stay in touch. The 6 initiates. The 1 responds enthusiastically. When one of you is in crisis, the other shows up. When one of you succeeds, the other celebrates. The friendship feels like home because it's reliable and warm without being complicated.

The tension is that the 6 can become overly responsible for the friendship. They're always the one reaching out, always the one managing the emotional connection. The 1 assumes this is fine, not realizing the 6 is wearing out. The 1 needs to initiate sometimes. And the 6 needs to stop and say "I need you to meet me here too." The friendship survives when both people show up, not just one.`,
    workInsight: `At work, the 1 leads and the 6 creates team harmony. This is strong in any people-oriented business. The 6's interpersonal skills complement the 1's strategic mind. Together, you build something that's both effective and humane.

The 1 and 6 together create teams that are actually loyal. People want to work for this kind of organization because they feel valued. The 1 sets a compelling vision; the 6 makes sure people feel connected to it. You don't have the highest turnover; you have the highest retention.

The professional challenge is that the 6 can prioritize team harmony over tough decisions. The 1 wants to move fast and cut what isn't working. The 6 worries about the impact on people. You need to find the balance: the 1 needs to slow down enough to hear the human cost, and the 6 needs to accept that some difficult decisions are necessary. The best version of this partnership makes hard calls in humane ways.`,
    tips: [
      'The 1 should express appreciation regularly. The 6 needs to hear it, not just assume it',
      'The 6 should maintain their own identity and interests outside the relationship',
      'Make decisions together on things that affect the home. The 6 needs to feel like an equal partner',
    ],
  },
  '1-and-7': {
    overview: `The 1 and 7 both value independence, which gives this pairing a built-in respect for personal space. The 1 is out in the world making things happen. The 7 is inside their mind figuring things out. You don't crowd each other.\n\nWhat works here is the intellectual respect. The 1 admires the 7's depth of thought. The 7 admires the 1's ability to act on ideas. You stimulate each other in different ways: the 1 through action, the 7 through insight.\n\nThe challenge is emotional connection. Neither of you naturally leads with feelings. The 1 avoids vulnerability through action. The 7 avoids it through analysis. Someone needs to go first, and it's usually uncomfortable for both.`,
    loveInsight: `In romance, 1 and 7 create a relationship built on mutual respect and intellectual connection. It's not the most emotionally expressive pairing, but it can run deep. The key is making time for each other despite your independent natures. Date nights matter more here than in most pairings. You need intentional connection.

Day-to-day, you're two independent people living a shared life. The 1 pursues their goals; the 7 pursues their questions and insights. You don't need constant togetherness, which you both appreciate. When you do connect, there's substance to it. You talk about real things. But you can drift if you're not careful, becoming roommates rather than partners.

The main friction point is emotional expression. Neither of you is naturally demonstrative. The 1 shows love through action; the 7 shows love through presence and understanding. Neither of you is great at saying "I love you" or regular physical affection. You have to consciously create rituals of connection: a weekly meal together without devices, time to discuss deeper topics beyond logistics. Without these touchstones, the relationship becomes hollow.`,
    friendshipInsight: `As friends, you give each other exactly what you need: space and stimulation. The 7 is the friend the 1 goes to for wisdom. The 1 is the friend the 7 goes to for motivation. You don't talk every day, and that's fine. When you do, it matters.

This is the friendship where both people are actually themselves. Neither of you is performing or trying to impress. You respect each other's need for solitude. You both value depth over frequency. The 7 appreciates that the 1 doesn't need emotional processing; the 1 appreciates that the 7 doesn't need constant activity.

The risk is that the friendship becomes too infrequent. You both value independence so much that you forget to maintain the connection. Weeks turn into months. The friendship doesn't break, but it fades. You have to intentionally reach out. And when you do, you have to be present, not distracted. The friendship is only as strong as the last conversation you had.`,
    workInsight: `In work, the 1 executes and the 7 researches. The 7 provides the analysis and strategy. The 1 provides the action and decision-making. This works well in fields that require both thought and speed: tech, consulting, medicine.

The 1 and 7 together create intelligent organizations. The 7 does the deep work of understanding what's actually going on; the 1 makes clear decisions based on that understanding. You don't get caught in analysis paralysis or reckless action. You find the balance.

The professional challenge is that the 7 can take too long to research and the 1 can move before the 7 is ready. The 1 gets impatient waiting for analysis; the 7 gets frustrated when a decision is made without their full findings. You need to establish clear timelines and decision-making authority. Once the 1 decides, the 7 needs to commit, even if they wish they'd had more time. And the 1 needs to actually read the 7's research, not just ask for the conclusion.`,
    tips: [
      'Schedule intentional quality time. Neither of you will naturally prioritize it',
      'The 1 should respect the 7\'s need for solitude without taking it personally',
      'The 7 should share their inner world more. The 1 wants to understand, they just don\'t know how to ask',
    ],
  },
  '1-and-8': {
    overview: `Two powerhouses. The 1 and 8 are both driven, ambitious, and used to being in charge. This creates either an unstoppable alliance or an exhausting power struggle, sometimes both in the same week.\n\nThe core issue is authority. The 1 leads through initiative and personal vision. The 8 leads through strategy and material power. When you want the same thing, you're a force. When you disagree, neither backs down.\n\nThis pairing needs clear agreements about who handles what. Without that, every decision becomes a negotiation, and neither of you has the patience for that.`,
    loveInsight: `In love, the intensity is high. Both of you are passionate, direct, and unafraid of confrontation. The attraction is often magnetic. You see something of yourself in the other. But relationships need softness, and neither of you offers it naturally. Learning to be tender is the growth edge here.

Day-to-day, this relationship is power-dynamic heavy. Someone is always trying to win, to be right, to be in control. The sex is probably great. The intellectual sparring is stimulating. But tenderness, vulnerability, genuine openness—these don't come naturally to either of you. You can end up running a relationship like a business negotiation instead of a partnership.

The main tension is the need for dominance. You're both alpha. In romance, alpha-alpha relationships are electric but fragile. One of you has to learn to let the other lead sometimes, genuinely, without resentment. This requires a level of trust that doesn't come easy. You have to actively soften, choose vulnerability even when your instinct is to grip tighter. Without that, the relationship burns fast and hot.`,
    friendshipInsight: `As friends, 1 and 8 respect each other's ambition. You push each other to succeed. This works as long as you're not competing for the same thing. The friendship breaks down when one person feels the other is winning the wrong race.

You can be authentic with each other in ways you can't with people who are more emotionally sensitive. Neither of you needs codling. You can be direct, even harsh, and the other person doesn't crumble. You challenge each other's thinking. You don't let each other get away with excuses.

The friendship dies when it turns competitive. If you start eyeing the same prize—the same job, the same person, the same status—the friendship becomes collateral damage. You're both too ambitious to share a spotlight for long. The friendship survives when you're pursuing different mountains. Then you can genuinely celebrate each other's ascent.`,
    workInsight: `In business, this can be extraordinary or disastrous. If you're on the same team with different roles, the 1 as the visionary founder, the 8 as the CEO, you can build an empire. If you're competing for the same role, the organization suffers.

The best 1-and-8 business partnerships are clear about hierarchy and role. One person makes strategic decisions (usually the 1, the founder), the other makes operational decisions (usually the 8, the builder). You execute in parallel rather than negotiate constantly.

The professional challenge is that neither of you is comfortable taking second place. The business becomes a proxy for personal dominance. Meetings turn into power struggles. Your organization becomes toxic because everyone can feel the underlying tension. If you can't clarify who decides what and actually stick to that, separate. You're not cut out to be true partners.`,
    tips: [
      'Define roles early and clearly. Ambiguity is the enemy of this pairing',
      'Practice vulnerability with each other. Power without tenderness creates distance',
      'Celebrate each other\'s wins genuinely, without comparing them to your own',
    ],
  },
  '1-and-9': {
    overview: `The 1 and 9 are both strong personalities, but they express strength differently. The 1 is focused inward, on personal goals, achievement, self-direction. The 9 is focused outward, on ideals, compassion, the bigger picture.\n\nThis difference can be deeply complementary. The 9 softens the 1's edges and gives them a broader perspective. The 1 gives the 9 something they often lack: practical focus and the ability to actually execute on their ideals.\n\nThe tension comes from different motivations. The 1 asks "What do I want?" The 9 asks "What does the world need?" When these align, the partnership is powerful. When they don't, the 1 feels the 9 is impractical, and the 9 feels the 1 is selfish.`,
    loveInsight: `In love, 1 and 9 bring out each other's best. The 9's warmth and wisdom make the 1 feel seen. The 1's confidence and directness make the 9 feel grounded. This couple often finds purpose together, a shared mission or cause. Without one, the relationship can feel directionless.

Day-to-day, you're a meaningful team. The 1 brings energy and direction. The 9 brings perspective and heart. The 1 appreciates that the 9 is genuinely interested in their growth. The 9 loves that the 1 actually makes things real. Together, you tend to build something bigger than yourselves—a business with values, a family with purpose, a life with meaning.

The friction point is the 9's emotional distance. While they seem warm and all-loving, they can be strangely removed from the relationship itself. They love humanity but sometimes struggle with intimacy. The 1 can feel lonely in the relationship because the 9 is never quite there. You have to ask for exclusivity and presence, even though the 9 is naturally inclined to spread themselves thin.`,
    friendshipInsight: `As friends, the 9 is the one who reminds the 1 that there's a world beyond their goals. The 1 is the one who helps the 9 stop dreaming and start doing. It's a friendship built on mutual expansion. You genuinely make each other better.

The 9 brings wisdom and perspective to the 1's ambitions. They ask: "Yes, but is this actually aligned with who you want to be?" The 1 brings momentum to the 9's idealism. They ask: "That's beautiful, but what's the next action?" You need each other.

The friendship can falter when the 9 starts to feel like they're supporting the 1's dreams instead of living their own. The 9 can become the perpetual cheerleader instead of being cheered for. The 1 has to actively ask what the 9 wants and then actually get behind it. And the 9 has to claim their own ambitions instead of living vicariously through the 1's success.`,
    workInsight: `In work, the 1 drives execution and the 9 provides vision and ethics. This pair does well in social enterprises, nonprofits, or any mission-driven organization. The 1 keeps things moving. The 9 keeps things meaningful.

The 1 and 9 together create organizations with actual purpose. The 9 articulates what matters and why. The 1 builds the systems to make it happen. You attract people who want to work toward something bigger than profit. Your organization has moral clarity.

The professional challenge is that the 9 can slow things down with philosophical questioning, and the 1 can push forward without enough reflection. The 9 asks "Should we?" when the 1 is already asking "How?" You need to find the rhythm: enough contemplation to ensure alignment, enough action to actually move. The 9 needs deadlines; the 1 needs meaning.`,
    tips: [
      'Find a shared cause or purpose. This pair thrives when working toward something bigger than both of you',
      'The 1 should listen when the 9 talks about values. They\'re not being impractical, they\'re being principled',
      'The 9 should respect the 1\'s need for personal achievement. It doesn\'t mean they\'re self-centered',
    ],
  },
  '1-and-11': {
    overview: `The 1 and 11 share the energy of the number 1, since 11 is the master form of 2 (1+1). This creates an interesting tension: the 1 operates from raw willpower, while the 11 operates from intuition and spiritual awareness.\n\nThe 11 can see things the 1 misses: emotional undercurrents, unspoken needs, the bigger spiritual picture. The 1 can act on things the 11 overthinks. When the 11's intuition meets the 1's decisiveness, the combination is surprisingly effective.\n\nThe challenge is that the 11 needs to feel heard and validated, and the 1 doesn't always slow down enough to provide that. The 1's bluntness can wound the 11's sensitivity.`,
    loveInsight: `In romance, the 11 brings emotional depth and spiritual connection. The 1 brings passion and direction. The 11 often feels things about the relationship that the 1 hasn't noticed yet. If the 1 can learn to listen to the 11's insights without dismissing them, this becomes a deeply intuitive partnership.

Day-to-day, the 1 is the doer and the 11 is the feeler. The 1 makes decisions; the 11 senses whether they're right. The 1 can learn to trust the 11's intuition more than logic alone. The 11 can learn that not everything needs to be felt deeply—sometimes action is just action. Together, you can create something that's both grounded and soulful.

The main tension is the 11's anxiety. They pick up on subtle tensions that the 1 doesn't even notice. The 1 wants to move forward; the 11 wants to process. The 1 can become frustrated with what feels like unnecessary emotionality. The 11 can feel unsupported in their sensitivity. You have to learn to honor both: the 1 can slow down to listen, and the 11 can accept that not every feeling requires analysis.`,
    friendshipInsight: `As friends, the 11 is the intuitive advisor and the 1 is the action-taker. The 11 says "I have a feeling about this" and the 1 says "Let's go." This dynamic works when the 1 takes the 11's intuition seriously, which means not always needing data or logic to validate a feeling.

The 11 becomes the person the 1 trusts beyond reason. The 1 appreciates that the 11 doesn't need everything explained—they just know things. The 11 values that the 1 takes their insights seriously and actually acts on them. It's a friendship built on mutual trust that transcends logic.

The friendship suffers when the 1 dismisses the 11's intuition. If the 1 keeps pushing against the 11's gut feeling and it turns out the 11 was right, resentment builds. The 11 starts to feel gaslighted. The 1 needs to actively validate the 11's intuitive sense, even when they don't understand it. And the 11 needs to explain themselves when they can, so the 1 isn't left in the dark.`,
    workInsight: `At work, the 11's vision and the 1's execution create strong outcomes. The 11 senses what the market needs or where the team is struggling. The 1 turns those insights into action. This works in creative, wellness, and consulting fields especially well.

The 11 often has ideas that seem unconventional until the 1 builds them. The 1 then realizes the 11 saw something important that the data missed. Together, you create innovative solutions that actually work because they're rooted in real human understanding.

The professional challenge is that the 11 can be too intuitive to be practical. They sense the right direction but can't always articulate it. The 1 wants clarity and data. The 11 wants trust. You need to develop a system where the 11's intuition is taken seriously while still being validated with evidence. The 1 shouldn't demand proof before acting, but the 11 should learn to provide enough clarity for the 1 to lead confidently.`,
    tips: [
      'The 1 should slow down and genuinely listen when the 11 shares an insight. They\'re usually right',
      'The 11 should ground their intuitions in specifics so the 1 can act on them',
      'Make space for spiritual or emotional conversations. The 11 needs them to feel connected',
    ],
  },
  '1-and-22': {
    overview: `Two leadership energies with very different styles. The 1 leads through personal initiative: fast, instinctive, independent. The 22 leads through grand vision: methodical, powerful, building for the long term.\n\nThe clash comes because both of you want to set the direction. The 1 says "Let's go now." The 22 says "Let's build this right." Neither is wrong, but neither will easily defer to the other.\n\nWhen this pair works, it's because they've agreed on the vision and split the execution. But getting to that agreement can feel like negotiating a peace treaty.`,
    loveInsight: `In love, both the 1 and 22 are intense and purposeful. Romance here is less about flowers and more about building a life together. The risk is that both of you are so goal-oriented that you forget to just be together. Make time for connection that isn't about plans or achievements.

Day-to-day, you're a force. The 1 brings speed and initiative. The 22 brings structural thinking and long-term vision. Together, you're building something that lasts. But you can turn the relationship itself into a project. Sex becomes an item to schedule. Intimacy becomes something you optimize. You need to remember that not everything is productive.

The main friction point is relaxation. Neither of you knows how to stop. The 1 is always chasing the next goal. The 22 is always thinking about the long game. You can live entire years without actually enjoying what you've built. You have to consciously create space where you're not working toward something. That's harder than it sounds when you're both wired to build.`,
    friendshipInsight: `As friends, the 1 and 22 often have a relationship built on mutual ambition. You respect each other's drive. The friendship stays strong when you're building toward different things, supporting without competing.

You understand each other's need for impact. Neither of you wastes time on small talk. You get straight to what matters. The friendship is built on respect for each other's vision and reliability in supporting it. You show up for each other's big moments.

The friendship falters when you end up pursuing the same thing, or when one person's ambition stalls. The 22 especially needs to feel like the friendship is moving toward something meaningful. If the friendship becomes purely maintenance—coffee once a month just to catch up—it can feel hollow. You need the friendship to be building something together, whether that's a project, an idea, or just a shared vision of impact.`,
    workInsight: `In business, this pair can build something massive, if they don't destroy each other first. The 1 brings speed and initiative. The 22 brings structural thinking and long-term planning. Separate roles are essential.

The 1 and 22 together can scale rapidly because the 1 moves and the 22 ensures the foundation holds. The 1 wants to explore new markets; the 22 makes sure the existing ones are rock solid before you expand. You build organizations that are both innovative and stable.

The professional challenge is authority. Both of you believe you see the big picture. The 1 sees it in the immediate future; the 22 sees it across decades. Power struggles emerge around timing and scope. You need clear decision-making authority: maybe the 1 handles yearly strategy, the 22 handles five-year planning. If you're constantly negotiating, the business suffers. One of you has to ultimately decide, and you both have to accept it.`,
    tips: [
      'Agree on the vision first. The tactics will be easier once you\'re aligned on direction',
      'The 1 should respect the 22\'s slower, more methodical pace. It produces lasting results',
      'The 22 should let the 1 take point on quick decisions that don\'t affect the bigger picture',
    ],
  },
  '1-and-33': {
    overview: `The 1 and 33 might seem like an unlikely pair, the driven leader and the compassionate teacher. But there's a real complementary energy here. The 33 sees the 1's potential and naturally wants to help them grow. The 1 provides direction and protection that the 33 appreciates.\n\nThe 33 teaches through love and example. The 1 learns through action and challenge. When the 33's warmth meets the 1's fire, the 1 often develops emotional intelligence they didn't know they were missing.\n\nThe risk is that the 33 gives too much and the 1 takes too much, not out of malice, but because the 1 is used to being the center and the 33 is used to supporting from the edges.`,
    loveInsight: `In love, the 33 brings deep spiritual care and unconditional support. The 1 brings excitement, direction, and decisiveness. This relationship helps the 1 become more emotionally available. The 33 needs to remember that their own needs matter too, not just the 1's growth.

Day-to-day, the 33 creates safety and nurture. The 1 creates momentum and purpose. The 33 is often the one managing the emotional landscape of the relationship. They sense when the 1 needs support and when they need space. The 1 can lean on this and forget to reciprocate. The 33 gradually starts to feel depleted.

The friction point is one-directional care. The 33 is so focused on the 1's development that their own needs get invisible. The 1 is not naturally attuned to this and doesn't always notice they're taking more than they're giving. The 33 needs to be direct about their needs. And the 1 needs to remember that the 33 chose them too—they deserve to be prioritized, not just supported.`,
    friendshipInsight: `As friends, the 33 is often the one who helps the 1 see their blind spots, gently, without judgment. The 1 is the friend who pushes the 33 to take credit for their work and stop hiding behind others. It's a genuinely growth-oriented friendship.

The 33 becomes a safe place for the 1 to be vulnerable. The 1 learns that softness isn't weakness by watching the 33 be strong through compassion. The 33 learns that they have more power than they realize by watching the 1 move decisively. You bring out each other's fuller self.

The friendship can become codependent if the 33 makes the 1's growth their life's work. The 1 never has to reciprocate genuine care because the 33 is content with the role of helper. The 1 needs to actively show up for the 33's journey, not just benefit from the 33's presence. And the 33 needs to remember that supporting someone doesn't mean abandoning yourself.`,
    workInsight: `At work, the 33's mentoring ability and the 1's leadership create strong team dynamics. The 33 develops people. The 1 sets direction. Together, they create organizations where people actually want to work.

The 33 can see talent in people before it's obvious. They bring out the best in humans. The 1 creates a compelling vision and the systems to realize it. Together, you build organizations that scale without losing culture. People follow because both the direction and the care feel genuine.

The professional challenge is that the 33 can get lost in serving people and neglect business strategy. The 1 can become so focused on goals that they burn people out. You need balance: the 1 needs to slow down enough to care, and the 33 needs to remember that the business has to be profitable to keep helping anyone. The organization thrives when both things happen.`,
    tips: [
      'The 1 should recognize and thank the 33 for their emotional labor. It\'s real work',
      'The 33 should set boundaries on how much they give. The 1 can handle more than the 33 thinks',
      'Find a shared purpose that involves both leading and teaching',
    ],
  },
  '2-and-3': {
    overview: `The 2 and 3 together create a warm, creative, emotionally rich relationship. The 2 brings depth and empathy. The 3 brings lightness and expression. Together, you create a space that feels both safe and alive.\n\nThe 3 helps the 2 lighten up, to stop carrying the weight of everyone's feelings and just enjoy the moment. The 2 helps the 3 go deeper, to move past surface-level fun and connect on a real emotional level.\n\nThe challenge is communication styles. The 2 communicates through feeling and subtle signals. The 3 communicates through words and expression. The 2 might feel the 3 is too surface-level. The 3 might feel the 2 is too heavy. Meet in the middle.`,
    loveInsight: `In romance, the 3's lightness brings joy to the 2's deeper emotional nature. The 3 helps the 2 come out of their shell. The 2 gives the 3 something real to care about beyond surface charm. The attraction is easy and playful, but you have to work to create genuine intimacy.

Day-to-day, the 3 lifts the 2 out of heaviness. The 2 gives the 3 emotional anchor. The 3 makes the 2 laugh; the 2 makes the 3 feel loved. It's a genuinely fun relationship. But the 3 can skim the surface while the 2 is trying to go deeper. The 2 sometimes feels like the 3 is running away from real conversations.

The friction point is emotional depth. The 2 wants to process feelings; the 3 wants to keep things light. The 2 can feel abandoned when the 3 avoids difficult conversations. The 3 can feel suffocated by the 2's need to examine everything. You have to find a rhythm: the 2 learns that not every feeling needs to be analyzed, and the 3 learns that avoiding hard conversations has a cost.`,
    friendshipInsight: `As friends, you're fun together in a way that lights up the people around you. The 2 provides emotional safety; the 3 provides laughter and novelty. The friendship works because you genuinely enjoy each other's company. You're not friends out of obligation; you actually like hanging out.

This friendship thrives on shared activities and joy. You go out, you try new things, you make people smile. The 2 feels rejuvenated by the 3's light. The 3 feels grounded by the 2's presence. You balance each other naturally.

The friendship can become shallow if you never go deeper. If the 3 always deflects toward humor and the 2 always accepts it, the friendship never develops real layers. You need to occasionally be serious together. The 3 needs to let the 2 see their vulnerabilities. The 2 needs to trust that the 3 cares even when they're not being deeply emotional.`,
    workInsight: `At work, the 3 generates ideas and brings energy to communication and marketing. The 2 manages relationships and ensures the team feels connected. Together, you create positive work culture and compelling messaging. But someone needs to handle strategy and details.

The 3-2 team excels in customer-facing businesses: hospitality, marketing, event planning, customer service. The 2 remembers what clients care about; the 3 makes sure they're delighted. You create loyal customer bases because people feel genuinely welcomed.

The professional challenge is follow-through and accountability. The 3 can move to the next exciting thing, leaving the 2 to clean up. The 2 can become overly focused on keeping the 3 happy and neglect actual business needs. You need processes that keep both of you accountable. Someone needs to track results, not just relationships.`,
    tips: [
      'The 3 should check in emotionally sometimes, not just entertain. The 2 needs depth',
      'The 2 should enjoy the 3\'s lightness without reading too much into it',
      'Create together. This pair bonds through creative projects, cooking, music, or art',
    ],
  },
  '2-and-4': {
    overview: `The 2 and 4 create a steady, reliable partnership. The 2 brings emotional warmth and sensitivity. The 4 brings structure and dependability. Together, you build something that feels genuinely safe.\n\nThe 4 makes the 2 feel secure. There's no guessing with a 4, they show up consistently. The 2 makes the 4 feel appreciated. The 4 works hard and often feels taken for granted, but the 2 notices everything.\n\nThe risk is emotional flatness. The 4 can be rigid, and the 2 can be passive. Without intentional effort, this relationship becomes functional but not exciting. Make room for spontaneity.`,
    loveInsight: `In love, the 4's stability is deeply attractive to the sensitive 2. The 2's emotional attunement appeals to the 4's hidden need for emotional safety. You build a home together that feels secure and grounded. The relationship is steady. But you have to intentionally keep it alive, not let it become mere comfort.

Day-to-day, the 4 provides structure and the 2 provides warmth. The 4 knows what they're doing and the 2 trusts that. The 2 makes sure the home feels like a sanctuary. The 4 appreciates the 2's care. But the relationship can calcify into routine without novelty or romance.

The main tension is emotional expression. The 4 is not naturally expressive and the 2 needs reassurance. The 2 can start to feel like they're performing the emotional labor while the 4 simply exists. The 4 needs to actively show up emotionally, not just provide materially. The 2 needs to stop waiting to be reassured and speak up directly about their needs.`,
    friendshipInsight: `A 2 and 4 friendship is grounded and real. The 4 provides steady reliability. The 2 provides emotional understanding. The friendship works because both people show up consistently. You're not dramatic, just loyal.

This friendship often revolves around shared responsibilities or routines: weekly coffee, shared hobbies, collaborative projects. The 2 feels safe with the 4. The 4 feels genuinely cared for by the 2. It's a quiet, solid bond.

The friendship can become too comfortable and stop evolving. Both of you need growth. The 2 sometimes needs to push the 4 to try new things. The 4 sometimes needs to help the 2 think practically instead of just feel. If you never challenge each other, the friendship stays pleasant but doesn't deepen.`,
    workInsight: `At work, the 2 creates team cohesion and the 4 provides reliable execution. The 2 makes sure people feel valued; the 4 makes sure the work is done right. This is an effective partnership in stable, structured environments like operations, project management, or administration.

The 4-2 team creates organizations where people stay. The 2 retains talent through genuine care. The 4 retains talent through clear expectations and reliable systems. People trust both of you.

The professional challenge is that the 2 can become too focused on people-pleasing and the 4 can become too rigid. You need the 2 to set boundaries sometimes and the 4 to bend occasionally. You also need to remember that operations work best when the humans doing it feel valued, not just managed.`,
    tips: [
      'Plan surprising experiences occasionally. This pair can fall into comfortable routine too easily',
      'The 4 should express feelings verbally sometimes, not just through actions',
      'The 2 should appreciate the 4\'s reliability as a form of love. It is',
    ],
  },
  '2-and-5': {
    overview: `The 2 and 5 seem like opposites. The 2 wants closeness and emotional security. The 5 wants freedom and variety. But that's exactly what makes this pairing interesting. You each bring what the other needs to grow.\n\nThe 5 helps the 2 become more independent. The 2 helps the 5 become more emotionally present. The growth potential here is real, if you both lean into it instead of resisting.\n\nThe challenge is that the 2 can feel abandoned by the 5's need for space, and the 5 can feel smothered by the 2's need for closeness. Finding the right distance takes work.`,
    loveInsight: `In romance, the 2 grounds the restless 5. The 5 helps the 2 build independence. The attraction comes from opposite energies—the 2 offers stability, the 5 offers freedom. But the 2's need for commitment can feel suffocating to the 5. You have to find middle ground between security and exploration.

Day-to-day, the 2 creates a home base and the 5 goes out to explore. The 2 appreciates that the 5 doesn't need constant attention. The 5 appreciates having a safe place to return to. But the 5 can feel trapped when the 2 expects too much presence, and the 2 can feel abandoned when the 5 needs too much freedom.

The main tension is commitment. The 2 wants to be a priority; the 5 needs space. The 2 can start to feel like they're waiting for the 5 to grow up. The 5 can feel like the 2 is trying to limit them. You have to explicitly negotiate what commitment looks like. It doesn't mean constant togetherness; it means reliability about what matters.`,
    friendshipInsight: `As friends, the 2 provides emotional consistency and the 5 provides intellectual stimulation. The 2 is the friend who cares about your wellbeing; the 5 is the friend who keeps you thinking. You need each other in different ways.

This friendship works because neither of you demands constant contact. The 2 doesn't mind that the 5 goes off on explorations; the 5 doesn't mind that the 2 checks in periodically. You're genuinely happy to see each other when you connect.

The friendship can fray when the 2 starts to feel used—like the 5 only shows up when they need something. Or when the 5 feels the 2 is trying to limit their exploration. You need to explicitly value what each person brings. The 2 should ask the 5 about their discoveries. The 5 should check in with the 2 without being asked.`,
    workInsight: `At work, the 2 handles relationships and the 5 handles innovation. The 2 makes sure the team feels connected; the 5 brings fresh ideas. This partnership is strong in industries that need both stability and adaptation.

The 2 retains talent. The 5 keeps the work interesting. Together, you create organizations that don't lose good people to boredom. But you need clear roles: the 2 shouldn't try to contain the 5, and the 5 shouldn't dismiss the 2's concerns about stability.

The professional challenge is that the 5 can create chaos with too many experiments, and the 2 can become too risk-averse trying to maintain stability. You need frameworks that allow exploration without destabilizing the operation. Regular check-ins help: the 2 understands why the 5 is experimenting, the 5 understands what the 2 needs for stability.`,
    tips: [
      'Agree on how much independence is healthy. Talk about it before resentment builds',
      'The 5 should come back with intention, not just when convenient',
      'The 2 should develop their own interests and social circle outside the relationship',
    ],
  },
  '2-and-6': {
    overview: `This is a kindred spirit pairing. Both the 2 and the 6 are heart-centered, nurturing, and deeply committed to the people they love. You understand each other intuitively because you're wired the same way: to care.\n\nThe 6 provides a sense of home and responsibility. The 2 provides emotional attunement and harmony. Together, you create a relationship that other people look at and think, "That's what love looks like."\n\nThe risk? Both of you give too much. If neither of you advocates for your own needs, you'll both quietly deplete. Someone has to say "I need something for me", and the other has to not feel guilty when they hear it.`,
    loveInsight: `In romance, two nurturers create a relationship of deep mutual care. You understand each other's need to be of service. The love runs warm and genuine. But you can become codependent, each one sacrificing too much for the other. The relationship thrives when both people remember they're allowed to have needs.

Day-to-day, you're both highly attuned to each other's needs. Neither of you has to ask; you just know. You create a home that's warm, stable, and deeply loving. The relationship feels like a sanctuary. But you can both start to disappear into the relationship.

The main tension is over-responsibility. Both of you carry the other's emotional weight. When one person struggles, the other immediately tries to fix it. You can end up in a cycle where both of you are exhausted trying to make each other okay. You need to remember that sometimes you have to let the other person struggle—that's how growth happens.`,
    friendshipInsight: `As friends, two 6s are devoted, loyal, and deeply caring. You create a friendship that feels like family. You show up for each other consistently. This is the kind of friendship people write about.

You don't need grand gestures or frequent contact. You just need to know you can count on each other. When one of you is in crisis, the other doesn't hesitate. The friendship is built on genuine loyalty.

The limitation is that the friendship can become transactional—you're both so focused on caring that you never just have fun together. Add some lightness: do things just for enjoyment, not because someone needs help. The friendship deepens when both people are whole, not just when one is helping the other.`,
    workInsight: `At work, two 6s create strong team culture and customer loyalty. You're both focused on doing the right thing. You retain talent and build lasting client relationships. But the organization can lack direction or competitive edge if both of you are too focused on harmony.

The 6-6 team excels in service industries, nonprofits, healthcare, education. You create organizations where people feel valued. Your customers are loyal because they genuinely feel cared for.

The professional challenge is that you can both avoid necessary but difficult decisions because you're conflict-averse. Someone needs to make the hard call. You also need to remember that being kind doesn't mean saying yes to everything. Sometimes the most loving thing is to set a boundary.`,
    tips: [
      'Both of you: practice receiving as much as giving. It\'s not selfish, it\'s sustainable',
      'Avoid the trap of only talking about other people\'s problems. Discuss your own needs too',
      'Schedule regular time for just the two of you that isn\'t about caretaking anyone else',
    ],
  },
  '2-and-7': {
    overview: `The 2 and 7 are both introspective, but in different ways. The 2 is emotionally introspective, processing through feelings. The 7 is intellectually introspective, processing through thought and analysis. This creates a quiet, deep connection that builds slowly.\n\nNeither of you is loud or demanding. You both appreciate space and subtlety. The 2 understands the 7's need for solitude without taking it personally (most of the time). The 7 appreciates the 2's emotional sensitivity without finding it overwhelming.\n\nThe challenge is that both of you can retreat inward. The 2 withdraws when hurt. The 7 withdraws when overstimulated. If both of you withdraw at the same time, there's nobody reaching out.`,
    loveInsight: `In romance, the 2 and 7 create a relationship of quiet understanding. The 2 provides emotional safety; the 7 provides intellectual depth. You don't need constant reassurance or grand displays. You just need to understand each other. But you can become too internal, never really opening up.

Day-to-day, you're two introspective people building a life together. The 2 tends the emotional landscape; the 7 tends the intellectual one. You have deep conversations that most people never experience. But you can avoid vulnerability. Sometimes you're just talking at each other, not actually opening up.

The main tension is emotional expression. Neither of you is naturally demonstrative. The 2 needs to feel loved and the 7 needs to express it. The 2 might feel like the 7 is cold. The 7 might feel like the 2 needs too much reassurance. You have to learn to show love in ways that don't come naturally. The 7 needs to practice saying "I love you." The 2 needs to ask for what they need directly.`,
    friendshipInsight: `As friends, two 7s create a space for genuine contemplation. You talk about real things. You challenge each other's thinking. The friendship is built on intellectual and spiritual connection.

You give each other permission to be introspective without judgment. Neither of you needs constant activity or contact. You're comfortable in silence together. When you do talk, it matters.

The friendship can become too cerebral and lose heart. You're both so in your heads that you forget to actually connect emotionally. Make sure you occasionally do things just to be together, not to discuss. Sometimes action matters more than analysis.`,
    workInsight: `At work, the 2 and 7 create thoughtful organizations. The 2 focuses on team wellbeing; the 7 focuses on strategy and quality. This is strong in fields that require both human understanding and intellectual rigor: consulting, academia, research, strategic planning.

The 2-7 team produces thoughtful work that considers both the human impact and the intellectual requirements. You create organizations where people feel supported and challenged.

The professional challenge is speed. Both of you can over-think things. You need someone or something that pushes you to decide and move forward. You also need to remember that perfection is the enemy of progress. Sometimes good enough, executed quickly, outperforms perfect work executed slowly.`,
    tips: [
      'When one of you withdraws, the other should gently reach out. Don\'t both disappear at once',
      'The 7 should share their thoughts verbally sometimes, even when they\'d rather process alone',
      'The 2 should respect the 7\'s need for space without interpreting it as rejection',
    ],
  },
  '2-and-8': {
    overview: `The 2 and 8 are a study in contrasts. The 2 is soft, empathetic, and emotionally tuned. The 8 is powerful, ambitious, and materially focused. When these energies balance, it's complementary. When they don't, the 2 feels steamrolled.\n\nThe 8 can provide the security and strength the 2 craves. The 2 can provide the emotional awareness the 8 lacks. But the 8 needs to genuinely value what the 2 brings, not just enjoy the emotional labor while dismissing its importance.\n\nThis pairing struggles when the 8 dominates all decision-making and the 2 loses their voice. It thrives when the 8 recognizes that emotional intelligence is just as valuable as financial intelligence.`,
    loveInsight: `In romance, the 2 is drawn to the 8's power and the 8 is drawn to the 2's softness. But the relationship can become imbalanced. The 2's gentle nature can be overwhelmed by the 8's intensity and ambition. The 2 can lose themselves trying to keep up or support. You have to actively maintain the 2's sense of self.

Day-to-day, the 8 drives everything forward and the 2 maintains the emotional core. But the 2 can disappear in the rush. The 8 is so focused on achievement that they don't notice the 2 is getting worn out. The 2 is too conflict-averse to say anything until they're resentful.

The main tension is priority. The 2 wants to be important to the 8. The 8 wants the 2 to support their ambitions. These aren't the same thing. The 8 needs to actively put the relationship first sometimes, not just expect the 2 to always be there. The 2 needs to set boundaries about how much they'll sacrifice.`,
    friendshipInsight: `As friends, the 2 provides emotional stability and the 8 provides strength and direction. The 2 is the friend the 8 goes to when they're struggling. The 8 is the friend the 2 goes to when they need to be stronger.

This friendship works when both people see the value in what the other brings. The 2 shouldn't play small around the 8. The 8 shouldn't dismiss the 2's emotional insights.

The friendship can become unequal if the 2 is always supporting and the 8 is always taking. The 8 needs to check in with the 2 genuinely, not just when they need something. The 2 needs to speak up if they feel used.`,
    workInsight: `At work, the 8 drives results and the 2 manages relationships. If the 8 is the CEO and the 2 is in HR or culture, this works. But the 2 can become invisible. The 8 gets the credit for growth while the 2 does the work of retaining talent.

The 8-2 team creates organizations that grow while maintaining culture. But you need clear roles and clear credit-sharing.

The professional challenge is that the 2 can burn out supporting the 8's ambitions. The 8 doesn't always notice because they're focused on results. You need explicit conversations about workload and recognition. The 2 should raise concerns early, not wait until they're exhausted.`,
    tips: [
      'The 8 should actively seek and value the 2\'s opinion. Don\'t just decide and inform',
      'The 2 should practice stating their needs clearly, even when it feels confrontational',
      'Balance material goals with emotional check-ins. Money isn\'t the only measure of success',
    ],
  },
  '2-and-9': {
    overview: `The 2 and 9 share something beautiful: both are deeply compassionate and care about people. The 2 cares person-by-person. The 9 cares for humanity as a whole. Together, you create a relationship infused with meaning and empathy.\n\nThe 9 expands the 2's world, showing them causes worth caring about, perspectives worth considering, ideals worth pursuing. The 2 grounds the 9, reminding them that the person right in front of them matters as much as the abstract idea of service.\n\nThe challenge is emotional availability. The 9 can be so focused on the bigger picture that they're emotionally distant from the person closest to them. The 2 needs presence, not just principles.`,
    loveInsight: `In romance, the 2 and 9 are both deeply compassionate. You create a relationship built on genuine spiritual and emotional connection. You understand each other at a soul level. The danger is that both of you are so focused on universal love that you forget to prioritize each other.

Day-to-day, you're two people who care deeply about the world. You probably share values around service or spirituality. The relationship feels meaningful because it's grounded in something bigger than the two of you. But the 9 can feel scattered, loving everyone equally. The 2 can feel like they're not special.

The main tension is exclusivity. The 2 wants to be the 9's primary focus. The 9 loves broadly and struggles to narrow that down. The 2 can feel abandoned even when the 9 is technically present. You have to negotiate what intimacy means to you both. The 9 needs to consciously choose the 2. The 2 needs to understand that the 9's broad love isn't a rejection of the specific love.`,
    friendshipInsight: `As friends, two 2s and 9s create a deep, meaningful connection. You understand each other's need to care broadly. You support each other's growth. The friendship is built on genuine affection.

You're the friends who get each other's sensitivity without judgment. You can be vulnerable together. You inspire each other to be better humans.

The friendship can become ungrounded if you're both so focused on emotional or spiritual development that you lose practicality. Make sure you do normal friend things too: laugh, go out, just exist together without a deeper purpose.`,
    workInsight: `At work, the 2 and 9 together create organizations with heart. The 2 focuses on team wellbeing; the 9 focuses on impact and meaning. This partnership is strong in nonprofits, missions-driven businesses, or any field where impact matters more than profit.

The 2-9 team creates organizations where people feel both valued and purposeful. You attract talent that wants to make a difference. Your work is meaningful.

The professional challenge is that both of you can be so focused on the mission that you neglect the business side. You need someone who handles finances and strategy. You also need to remember that an organization can only help others if it's sustainable.`,
    tips: [
      'The 9 should make time for one-on-one connection. The 2 needs personal attention, not just shared ideals',
      'The 2 should support the 9\'s broader vision without feeling threatened by it',
      'Do meaningful things together: volunteer, create, contribute to something bigger than yourselves',
    ],
  },
  '2-and-11': {
    overview: `The 2 and 11 are deeply linked in numerology. 11 is the master expression of 2 energy. Both are intuitive, sensitive, and emotionally perceptive. Together, you create one of the most naturally attuned pairings possible.\n\nThe 2 provides steady emotional support. The 11 provides visionary insight. You communicate in a way that others might not understand: through feeling, through knowing, through the unspoken. It's almost telepathic at its best.\n\nThe challenge is that both of you absorb the other's emotions. If one of you is down, the other feels it immediately. This can create emotional spirals. You need to develop individual emotional resilience alongside the shared sensitivity.`,
    loveInsight: `In romance, the 2 and 11 are intuitively connected. The 11 senses the 2's needs before they're spoken. The 2 provides the 11 with emotional safety and grounding. This is a deeply attuned partnership. But the 11's sensitivity can be overwhelming. The 2 can become the stabilizer for an anxious 11.

Day-to-day, you're two deeply feeling people. The 11 picks up on subtle dynamics; the 2 responds with empathy. The relationship is emotionally rich. But it can also be emotionally intense. You can both be overwhelmed by feelings instead of moving through them.

The main tension is over-intensity. Both of you feel everything deeply. Minor conflicts become major emotional events. You have to learn to differentiate between actual problems and emotional reactivity. The 2 needs to help the 11 distinguish between intuition and anxiety. The 11 needs to remember that the 2 can't solve everything.`,
    friendshipInsight: `As friends, the 2 and 11 have a psychic-like understanding. You don't need to explain much. The 11 knows something's off and the 2 knows the 11 is picking up on something real. It's a rare kind of friendship.

You're the friends who just get each other. No judgment, no explanation needed. You can be completely authentic together.

The friendship can become too enmeshed. You need to maintain individual boundaries and interests. You also need to make sure you're not just processing emotions together endlessly. Sometimes you need to do things that have nothing to do with feelings.`,
    workInsight: `At work, the 11's vision and intuition combined with the 2's emotional intelligence creates strong leadership. The 11 senses where the organization needs to go; the 2 makes sure people feel supported through transitions. This is powerful in creative, wellness, or consulting work.

The 11-2 team creates organizations that are both visionary and humane. People follow because they trust the direction and feel cared for.

The professional challenge is that the 11 can become too abstract and the 2 can become too focused on keeping people happy. You need someone who grounds the vision in reality. You also need to make sure you're not avoiding difficult decisions because you're too sensitive to the impact.`,
    tips: [
      'Develop individual grounding practices, like meditation, exercise, or time alone, so you don\'t absorb each other\'s every mood',
      'Use your shared intuition as a strength, not a burden. Trust what you sense together',
      'Balance depth with lightness. Watch a comedy together sometimes instead of always having deep conversations',
    ],
  },
  '2-and-22': {
    overview: `The 2 and 22 share a root energy. 22 reduces to 4, but carries the 2's intuition at a higher octave. The 2 brings emotional warmth and support. The 22 brings vision and the power to build something lasting.\n\nThe 22's big dreams can feel overwhelming. The 2's gentle support helps keep the 22 grounded and emotionally connected. In return, the 22 gives the 2 a sense of purpose, being part of something larger than themselves.\n\nThe challenge is that the 22 can become so focused on their mission that the 2 feels like an afterthought. The 2 needs to feel valued as a person, not just useful as a support system.`,
    loveInsight: `In romance, the 2 and 22 create a partnership of vision and heart. The 22 brings big-picture thinking; the 2 brings emotional warmth. Together, you build something meaningful. But the 22 can become so focused on their vision that they forget the 2 is there. The 2 needs to be more than a support system.

Day-to-day, the 22 is building something grand and the 2 is providing the emotional infrastructure. The 22 appreciates the 2's steadiness. The 2 loves the 22's vision. But the 2 can disappear in service to the bigger project.

The main tension is priority. The 22's vision is often the primary focus. The 2 can start to feel like they're supporting someone else's dream instead of having a shared life. The 22 needs to actively create time for the relationship that isn't about the project. The 2 needs to develop independent purpose.`,
    friendshipInsight: `As friends, the 2 supports the 22's big-picture vision. The 2 is the friend the 22 trusts with their vulnerabilities. The friendship is built on the 2's genuine interest in the 22's growth. But the 2 can become overly invested in the 22's success.

The 22 appreciates having someone who gets their vision and actually supports it. The 2 feels purposeful being part of something bigger. It works when both people value the friendship for itself, not just for what it enables.

The friendship can become unequal if the 2 is always supporting and the 22 is always being supported. The 22 needs to actively ask what the 2 needs. And the 2 needs to speak up before resentment builds.`,
    workInsight: `At work, the 2 and 22 together can build something substantial. The 22 provides visionary leadership; the 2 provides cultural leadership. This is strong in any field where you need both innovation and stable team dynamics.

The 2-22 partnership creates organizations that scale thoughtfully. The 22 ensures the vision is ambitious. The 2 ensures the team stays intact during the scaling.

The professional challenge is that the 22 can sacrifice people for the vision. The 2 needs to push back when the growth is harming the team. And the 2 needs to remember that sometimes the vision requires tough decisions that will hurt people.`,
    tips: [
      'The 22 should regularly step back from the mission to connect personally with the 2',
      'The 2 should share in the 22\'s vision. Understanding it helps you feel included, not sidelined',
      'Build something together that matters to both of you: a home, a project, a family',
    ],
  },
  '2-and-33': {
    overview: `The 2 and 33 together create one of the most nurturing combinations in numerology. Both of you lead with the heart. The 2 supports through quiet empathy. The 33 teaches through compassion and service. Together, you create a relationship that heals everyone around it.\n\nThe 33's energy is the 2's energy amplified to a spiritual level. The 2 understands the 33 intuitively. You know what it feels like to always be giving, always sensing, always carrying others' emotions. There's a deep recognition in this pairing.\n\nThe challenge is depletion. If both of you are giving all the time, to each other, to family, to the world, who's filling your cups? This pair must learn the art of receiving.`,
    loveInsight: `In romance, the 2 and 33 are both deeply caring. This is an incredibly loving, supportive relationship. You understand each other's need to nurture. But you can both lose yourselves in service. The relationship thrives when both people remember their own needs matter too.

Day-to-day, you're two people devoted to each other and to something larger. The 33 brings spiritual care; the 2 brings emotional attunement. The relationship feels deeply meaningful. But you can both become so focused on growth and service that you forget to just enjoy each other.

The main tension is self-care. Neither of you prioritizes yourself. The 2 sacrifices for the 33; the 33 sacrifices for everyone. You can both end up depleted. You have to actively create space where you receive care, not just give it. One person needs to go first.`,
    friendshipInsight: `As friends, two nurturers create a beautiful, deeply supportive bond. You understand each other's heart. You celebrate each other's growth. The friendship is built on genuine mutual care.

You're the friends who show up without being asked. When one of you is struggling, the other knows. You create a space where both people feel genuinely loved.

The friendship can become too focused on healing and growth. Sometimes you just need to have fun together without it meaning something. Make sure you do things that are purely enjoyable, not just meaningful.`,
    workInsight: `At work, the 2 and 33 together create organizations that develop people. The 2 manages relationships; the 33 develops culture and vision. This is powerful in education, nonprofits, wellness, or any field where human development is the work.

The 2-33 partnership creates organizations where people feel genuinely supported in their growth. You retain talent because people feel valued as humans.

The professional challenge is that you can both be too lenient. Not everyone grows at the same pace or in the same direction. Sometimes you have to ask people to leave. You also need to remember that business needs drive culture, not the other way around.`,
    tips: [
      'Schedule regular self-care that\'s non-negotiable. Both of you tend to skip it',
      'Learn to say no to outside demands so you can protect your energy for each other',
      'Celebrate your own wins, not just how much you\'ve helped others',
    ],
  },
  '3-and-4': {
    overview: `The 3 and 4 operate at fundamentally different speeds. The 3 is spontaneous, creative, and easily distracted. The 4 is methodical, structured, and focused. This can feel like trying to dance to two different songs at the same time.\n\nBut here's what makes it work when it works: the 3 brings creativity and joy that the 4 secretly craves. The 4 brings the follow-through and stability that the 3 desperately needs. You complete each other's weaknesses, if you can get past the frustration of your differences.\n\nThe key is respect. The 4 needs to stop seeing the 3 as irresponsible. The 3 needs to stop seeing the 4 as boring. Neither is accurate.`,
    loveInsight: `In romance, the 3's spontaneity can frustrate the 4's need for structure. The 4 wants plans; the 3 wants to play it by ear. The attraction is there—the 3 finds the 4 solid, the 4 finds the 3 fun—but you operate at different speeds. You have to negotiate what stability and flexibility actually look like.

Day-to-day, the 4 provides structure and the 3 provides lightness. But these are constantly in tension. The 3 feels constrained by the 4's need for routine. The 4 feels destabilized by the 3's spontaneity. Neither of you is naturally inclined to compromise.

The main tension is rhythm. The 4 wants predictability; the 3 wants novelty. The 4 builds a life; the 3 plays with possibilities. You have to find middle ground. The 3 needs to create some reliable foundations. The 4 needs to allow some improvisation. Without that balance, the relationship becomes a constant negotiation.`,
    friendshipInsight: `As friends, the 3 brings fun and the 4 provides stability. The 3 gets the 4 to try new things. The 4 helps the 3 finish projects. But you're moving at different speeds, and that can be frustrating.

The friendship works when you're doing things together. When you're apart, the different rhythms become obvious. You might plan a trip together and the 3 wants flexibility while the 4 wants an itinerary.

The friendship needs explicit negotiation. Agree on what "doing something together" looks like. The 3 needs to respect the 4's preferences. The 4 needs to allow for spontaneity.`,
    workInsight: `At work, the 3 generates ideas and brings energy; the 4 builds systems and ensures execution. The 3 can get frustrated with the 4's pace. The 4 can get frustrated with the 3's lack of follow-through. But if you respect each other's roles, this can be effective.

The 3-4 team works in creative industries with strong operations: product development, publishing, any field that needs both innovation and reliability.

The professional challenge is process. The 4 wants defined processes; the 3 wants flexibility. You need to establish what's non-negotiable and what's flexible. Then stick to it. The 3 shouldn't bypass the 4's systems. The 4 shouldn't make process more important than results.`,
    tips: [
      'The 4 should loosen the schedule sometimes. The 3 needs room to breathe and create',
      'The 3 should respect the 4\'s need for plans and structure. It\'s how they feel safe',
      'Meet in the middle: structured freedom. Plan the framework, improvise within it',
    ],
  },
  '3-and-5': {
    overview: `The 3 and 5 together is pure energy. Both of you love freedom, variety, and new experiences. Life together is an adventure: spontaneous trips, creative projects, constant stimulation. You never bore each other.\n\nThe chemistry is immediate and electric. You both communicate easily and love meeting new people. Social situations are where this pair shines. There's a natural ease between you that others envy.\n\nThe challenge is grounding. Neither of you naturally commits to routines or follow-through. Without some structure, this pairing can become all motion and no progress, exciting but unstable.`,
    loveInsight: `In romance, the 3 and 5 are never dull. Both of you are curious, energetic, and open to new experiences. You inspire each other to try things. The attraction is natural and easy. But you can both be emotionally evasive. You need to build real intimacy, not just have fun.

Day-to-day, you're two people constantly exploring. You try new restaurants, take spontaneous trips, learn new things together. The relationship feels alive. But you can avoid vulnerability by always staying in motion. Real intimacy requires stillness.

The main tension is emotional depth. You're both great at adventure and terrible at vulnerability. The 5 especially can retreat into their head when emotions get real. The 3 can deflect with humor. You have to consciously create space for real connection. That means sometimes stopping the adventure and just being together.`,
    friendshipInsight: `As friends, the 3 and 5 are the adventure pair. Trips, learning, experiences: you push each other to be curious about life. The friendship is built on shared exploration. You genuinely enjoy each other.

You don't need constant contact or traditional friendship rituals. You just need to plan the next adventure. The friendship lives in action.

The friendship can become empty if you never actually connect emotionally. Make sure you occasionally talk about real things—fears, dreams, vulnerabilities. Not everything is an adventure.`,
    workInsight: `At work, the 3 and 5 together create innovative, fast-moving organizations. The 3 brings communication and energy; the 5 brings adaptability and fresh thinking. You move quickly. You embrace change. You're not stuck in old patterns.

The 3-5 team excels in startups, tech, creative fields, consulting. You're comfortable in uncertainty and change.

The professional challenge is stability. You can both pivot so much that nobody knows the strategy. You also need to finish things. Someone needs to be accountable for follow-through. And you need enough repetition to actually build solid foundations.`,
    tips: [
      'Create at least one non-negotiable routine together. It grounds an otherwise chaotic dynamic',
      'Practice staying with things when they get hard instead of pivoting to something new',
      'Channel your shared energy into a creative project with a real deadline',
    ],
  },
  '3-and-6': {
    overview: `The 3 and 6 create a warm, expressive relationship. The 3 brings creativity, humor, and social energy. The 6 brings warmth, loyalty, and emotional depth. Together, you create a space that's both fun and safe.\n\nThe 6 grounds the 3 without clipping their wings. The 3 lightens the 6's tendency toward over-responsibility. It's a gentle, caring dynamic where both people feel appreciated for who they are.\n\nThe tension comes when the 6 tries to take care of the 3 too much (treating them like a project) or when the 3's scattered attention makes the 6 feel neglected. Balance care with freedom.`,
    loveInsight: `3's lightness and humor are exactly what 6 needs — someone who can pull them out of caretaking mode and remind them that joy matters. 6 is drawn to 3's authenticity and creative energy, and offers the emotional stability 3 sometimes avoids. There's a real tenderness here, especially when 3 learns to give 6 the reassurance they crave.

The day-to-day feels playful and warm. 3 keeps things fun; 6 creates the safe emotional container. 3 appreciates that 6 actually listens and remembers the small things, while 6 loves that 3 never lets life feel heavy or suffocating. They laugh together easily, and 6 gets the affection they want without having to chase it.

The friction point: 6 can feel abandoned when 3 needs space to explore or socialize, and 3 can feel smothered by 6's need for constant reassurance. The fix is simple — 3 needs to show up consistently (not just when they feel like it), and 6 needs to trust that 3's social life doesn't diminish their love. Regular check-ins work wonders.`,
    friendshipInsight: `3 brings spontaneity and humor; 6 brings loyalty and genuine concern for 3's wellbeing. 3 keeps 6 from being too serious about everything, while 6 makes sure 3 isn't just skimming the surface of life. It's a friendship that feels easy but also grounded.

These two thrive in social settings where 3 can perform (not in a fake way, just their natural social ease) and 6 can be the person everyone trusts. They're great at group dynamics — 3 gets the party started, 6 makes sure nobody feels left out. They also enjoy quieter moments together, cooking or watching something, because 6 naturally creates that cozy atmosphere.

The trap is 6 trying to parent 3 or manage their chaos, which makes 3 feel judged. And 3 might dismiss 6's concerns as overdramatic, which makes 6 pull back. Keep it balanced: 3 listens when 6 expresses worry, and 6 respects 3's autonomy. This friendship survives decades if both remember they're peers, not caretaker and cared-for.`,
    workInsight: `3 is the communicator and face of projects; 6 is the organizer who ensures nothing falls through the cracks. 3 generates ideas and client relationships; 6 executes the details and manages the team dynamics. When they work together, clients feel inspired by 3's pitch and confident in 6's follow-through.

They excel in client-facing industries where relationship-building meets operational excellence — marketing agencies, event planning, HR departments, customer success roles. 3's creativity and 6's reliability make a trusted team that doesn't just look good, but delivers.

The tension: 3 can feel frustrated by 6's need for procedures and approval chains (3 wants to move fast), while 6 worries 3 is cutting corners or overselling without a plan. The solution is clear role definition — 3 owns the vision and relationships, 6 owns the execution timeline. Weekly syncs prevent 3 from surprising 6 with last-minute changes.`,
    tips: [
      'The 6 should let the 3 be independent sometimes. Not every risk needs managing',
      'The 3 should show the 6 consistent appreciation. They give a lot and don\'t always ask for thanks',
      'Find shared creative pursuits that also have heart: cooking for friends, decorating a home, making art',
    ],
  },
  '3-and-7': {
    overview: `The 3 and 7 are an unexpected combination. The 3 is outgoing, expressive, and social. The 7 is reserved, analytical, and private. On paper, it shouldn't work. In practice, it often creates a fascinating dynamic.\n\nThe 3 draws the 7 out of their shell. The 7 gives the 3 something to think about beyond the surface. You challenge each other's comfort zones in ways that promote genuine growth.\n\nThe risk is mutual frustration. The 3 may feel the 7 is cold or distant. The 7 may feel the 3 is superficial or too loud. Neither is true. You're just processing the world through very different filters.`,
    loveInsight: `7 is intrigued by 3's openness — the way 3 talks about feelings, dreams, and creative ideas without all the analysis that 7 gets stuck in. 3 is drawn to 7's depth and the feeling that 7 actually sees them, not just the surface charm. There's intellectual playfulness here, especially if they discover shared interests in spirituality, psychology, or philosophy.

Romantically, this is a relationship of interesting contrasts. 3 keeps 7 engaged with the world; 7 helps 3 slow down and feel their own depths. They have real conversations that go somewhere. 3 appreciates that 7 isn't impressed by superficial charm — they have to actually show up authentically. 7 loves that 3 doesn't need constant reassurance; there's freedom in that.

The friction: 3 can feel hurt by 7's withdrawal and silence, interpreting it as rejection when it's really just 7 needing space to think. 7 can feel like 3 is always "on," always performing, and wonder if anything is genuine. The path forward is for 3 to respect 7's need for solitude without taking it personally, and for 7 to communicate their internal process to 3 so 3 doesn't spiral. Honesty about needs prevents resentment.`,
    friendshipInsight: `3 brings social ease and humor; 7 brings wisdom and a willingness to discuss the deep questions. They can talk for hours about meaning, creativity, and how the world works. 3 gets to feel intellectually valued; 7 gets pulled out of their head by 3's energy.

These friendships thrive in settings that allow for both — creative projects with philosophical underpinnings, book clubs, discussion-based classes, travel. They're the friends who can spend a night at a concert or party and then spend the next day hiking in silence, both fully present. They respect different paces and don't demand constant contact.

The risk is 7 becoming dismissive of 3's lighter interests (viewing them as shallow) or 3 losing patience with 7's introspection and withdrawing. They stay close by celebrating what each brings — 3 shouldn't expect 7 to be a party person, and 7 shouldn't expect 3 to process everything analytically. Accepting the genuine differences is what keeps this friendship alive.`,
    workInsight: `3 is the communicator and connector; 7 is the strategic thinker and analyst. 3 can pitch ideas clearly and build relationships with stakeholders; 7 digs into the research, identifies patterns, and catches what's missing. Together, they create both vision and substance.

They excel in research-heavy creative fields — UX/product design, consulting, strategic marketing, publishing, content strategy. 3 understands the user's perspective; 7 understands the architecture and systems. Projects that require both innovation and rigorous thinking benefit from this pairing.

The challenge is pacing and decisiveness. 7 can slow down decision-making with endless analysis, while 3 wants to launch and iterate. 3 can feel frustrated by 7's endless questions; 7 can feel pushed into premature choices. The fix is clear decision deadlines set upfront. Agree that by Friday, 7 has time to dig, but the decision happens then. This prevents analysis paralysis without sacrificing rigor.`,
    tips: [
      'Respect each other\'s social needs. The 3 needs people, the 7 needs solitude, and both are valid',
      'The 3 should sometimes sit quietly with the 7 instead of filling every silence',
      'The 7 should share their inner world verbally. The 3 can\'t read your mind, even if they wish they could',
    ],
  },
  '3-and-8': {
    overview: `The 3 and 8 bring different strengths to the table. The 3 is creative, expressive, and charismatic. The 8 is powerful, strategic, and results-oriented. Together, you create a dynamic where talent meets ambition.\n\nThe 8 genuinely respects the 3's creative gifts. The 3 brings joy and lightness to the 8's intense world. There's a natural balance: the 3 creates, the 8 capitalizes. The 3 dreams, the 8 builds.\n\nThe tension comes from priority differences. The 8 measures success materially. The 3 measures it expressively. When the 8 pushes the 3 to be more "productive," the 3 feels constrained. When the 3 treats money casually, the 8 gets anxious.`,
    loveInsight: `8 is attracted to 3's confidence and expressiveness — 3 doesn't need 8 to prove their worth, which is refreshing. 3 loves that 8 is competent and has real ambition; there's no neediness or weakness that makes 3 uncomfortable. 8 appreciates that 3 can make them laugh, something 8 doesn't often give themselves permission to do.

Day-to-day, this is a surprisingly warm relationship. 8 shows love through providing and protecting; 3 shows love through attention and playfulness. 8 handles the bigger decisions (finances, major plans); 3 brings joy and spontaneity into 8's otherwise intense life. They respect each other's independence, which takes pressure off the relationship. 3 doesn't need 8 to be emotionally available all the time, and 8 doesn't need 3 to be serious.

The main friction: 8 can become so focused on work and success that 3 feels neglected or like a supporting character in 8's life rather than a partner. 3 might seek attention elsewhere (harmlessly, but still hurtful to 8). The path forward is for 8 to schedule relationship time as seriously as business meetings — not romantic dinners necessarily, but real presence. And 3 needs to understand that 8's silence isn't coldness; it's focus. They survive by being intentional about togetherness.`,
    friendshipInsight: `3 brings humor and social ease; 8 brings loyalty and the kind of friend who will move heaven and earth for you if you need it. 3 helps 8 relax; 8 helps 3 feel actually supported. This friendship has a protective quality to it — 3 isn't afraid around 8, and 8 doesn't feel judged.

They thrive in activity-based friendships — working on a project together, building something, or doing something that matters. 3 and 8 don't need to sit around talking about feelings; they'd rather be doing. Whether it's launching a business together, training for something physical, or creating something, they're energized by shared purpose.

The trap is 8 using 3 for entertainment or social access without reciprocating real support, or 3 treating 8's generosity as weakness. This friendship works because 3 genuinely respects 8's capability and 8 actually values 3's presence. Both need to remember it's a two-way street — 3 can't just take 8's resources or connections, and 8 can't just extract value. Real respect keeps it solid.`,
    workInsight: `3 is the visionary communicator and brand builder; 8 is the strategic executor and power player. 3 can sell and inspire; 8 can build systems and command the room. When they're aligned, they create something substantial with real market presence.

This pairing excels in entrepreneurship, sales leadership, marketing strategy, or any role combining big-picture vision with disciplined execution. 8's ambition and 3's communication skills are a revenue-generating combination.

The professional challenge is decision-making speed. 3 can pivot quickly based on feedback or new ideas; 8 wants to commit to a strategy and drive it hard. 3 can seem flaky; 8 can seem stubborn. They need a framework upfront — agreed decision points, defined roles, and clear metrics for success. If 3 is the creative strategist and 8 is the execution leader, things flow. If they're competing for authority, friction builds fast.`,
    tips: [
      'The 8 should never dismiss the 3\'s creative work as "not real work". It is',
      'The 3 should respect the 8\'s financial discipline. It creates the platform for your creativity',
      'Find shared goals that honor both creativity and material success',
    ],
  },
  '3-and-9': {
    overview: `The 3 and 9 together create a relationship filled with creativity, idealism, and inspiration. Both of you are expressive, imaginative, and care about making the world more beautiful. There's a natural resonance here.\n\nThe 3 brings individual creative expression. The 9 brings a broader vision of what that creativity can accomplish. Together, you create art with meaning, communication with purpose, expression with impact.\n\nThis is one of those pairings where the conversation never runs dry. You inspire each other naturally. The challenge is practicality. Both of you can live in the world of ideas and forget about bills, deadlines, and follow-through.`,
    loveInsight: `3 and 9 both see the potential in everything — new experiences, people, ideas. They're inspired together in a way that feels almost magical. 3 is drawn to 9's wisdom and depth; 9 is drawn to 3's lightness and ability to translate big visions into actual expression. They feel like creative partners as much as lovers.

Romantically, this relationship is expansive. They encourage each other's growth and don't hold each other back. 3 helps 9 stay engaged and playful; 9 helps 3 understand that their creativity matters beyond just entertainment. They travel together, create together, dream together. There's a real generosity in this pairing — both give freely and don't keep score.

The tension point: 9 can feel scattered by 3's need for novelty and constant stimulation, and 3 can feel weighed down by 9's bigger-picture concerns. 9 wants depth; 3 wants movement. Also, 9's idealism can be disappointing to 3 in real time. The antidote is finding shared values and projects. When they're working toward something that matters to both, the dynamic stabilizes. They need to check in on the vision regularly.`,
    friendshipInsight: `3 and 9 create friendships full of creative collaboration and shared vision. 3 brings the social energy and storytelling; 9 brings wisdom and the ability to see how individual actions connect to larger purpose. They inspire each other without envy.

These friendships thrive in creative, collaborative, or service-oriented contexts — artistic projects, volunteer work, community initiatives, or any pursuit where the bigger picture matters. They're the friends who start a passion project together and actually finish it. They're also excellent at bringing in others and creating inclusive spaces.

The risk is both getting so focused on the big vision that real friendship maintenance falls away, or 9's idealism clashing with 3's pragmatism about what's actually possible. They stay strong by celebrating small wins together and checking in about whether the relationship itself is getting the attention it deserves. Both can drift if there's no anchor.`,
    workInsight: `3 is the communicator and marketer of the vision; 9 is the visionary who sees the larger impact. 3 can articulate what 9 intuitively knows; 9 can show 3 that their work matters beyond the immediate client or project. Together, they create work with both reach and meaning.

They excel in nonprofits, social enterprises, creative industries with purpose, education, and any field combining impact with visibility. 3's networking and 9's strategic thinking create sustainable initiatives.

The professional challenge is that 9 can paralyze projects with endless idealism ("But what if we solved bigger problems?") while 3 wants to ship and iterate. 3 can feel like 9 is always adding scope. Set clear project boundaries and values alignment upfront. Agree: this project serves X purpose within Y constraints. Once defined, 3 executes and 9 oversees coherence with the larger vision. This prevents scope creep while honoring both strengths.`,
    tips: [
      'Ground your shared idealism in practical action. Beautiful ideas need execution',
      'Support each other\'s individual creative expression alongside your shared projects',
      'Don\'t let inspiration substitute for intimacy. Talk about your actual feelings, not just your visions',
    ],
  },
  '3-and-11': {
    overview: `The 3 and 11 share creative energy, but express it differently. The 3 communicates through art, words, and social expression. The 11 communicates through intuition, feeling, and spiritual insight. Together, you create something that's both expressive and deeply meaningful.\n\nThe 3 gives the 11's intuitions a voice. The 11 gives the 3's expression deeper meaning. It's a natural creative collaboration where the 3 translates what the 11 feels into something the world can understand.\n\nThe tension is sensitivity. Both of you can be easily hurt. The 3 hides pain behind humor. The 11 absorbs pain and amplifies it. Handle each other with care.`,
    loveInsight: `11 is magnetically drawn to 3's authenticity and ability to express what 11 intuitively knows but struggles to articulate. 3 loves that 11 truly sees them — not just the persona, but the real person underneath. There's a spiritual or intuitive dimension to their attraction that goes beyond typical chemistry.

Day-to-day, 3 helps 11 feel grounded and present. 11 tends to live in their head; 3's energy keeps them engaged with the world. 3 appreciates that 11 has real depth and isn't just going through the motions. 11 loves that 3 doesn't demand that 11 be "normal" — there's acceptance of the unconventional. Emotionally, 3 creates the safety 11 needs to be vulnerable without shame.

The friction point: 11's anxiety can feel like a lot to 3, who prefers lightness and positivity. And 3's scattered energy can overwhelm 11's sensitive nervous system. 11 needs space; 3 can take that as rejection. The solution is for 3 to understand that 11's withdrawal is not about them, and for 11 to communicate their capacity in the moment. Regular quiet time together (not forced, just peaceful) helps 11 feel safe while 3 learns patience.`,
    friendshipInsight: `3 brings social ease and expressive energy; 11 brings intuitive wisdom and the ability to sense what 3 actually needs (not what 3 says they need). 3 helps 11 connect with others; 11 helps 3 connect with themselves. It's a friendship with real depth beneath the lightness.

These friendships thrive in creative, spiritual, or emotionally intelligent communities. They're great at workshops, retreats, artistic collaborations, or any setting where authenticity is valued over small talk. They can also just hang out in comfortable silence.

The risk is 11 becoming too dependent on 3 for social processing, or 3 dismissing 11's intuitive insights as overthinking. They stay strong by honoring each other's different ways of perceiving — 3 through expression, 11 through intuition. Both need to check in regularly on whether the friendship is meeting both people's needs.`,
    workInsight: `3 is the communicator and public face; 11 is the strategic thinker with unconventional insights. 3 can present ideas; 11 can sense market shifts or organizational dynamics before they're obvious. Together, they're innovative and credible.

They excel in tech, strategy consulting, creative industries, and any field rewarding both innovation and communication. 11's foresight combined with 3's ability to articulate creates competitive advantage.

The professional challenge is 11's tendency to spiral into analysis or anxiety during high-pressure moments, which can frustrate 3's action-orientation. 3 might push 11 to decide before 11 feels ready. Create a decision framework that honors 11's need for thorough thinking while respecting 3's speed preferences. Clear roles help: 11 researches and strategizes, 3 executes and communicates. Regular check-ins prevent misalignment.`,
    tips: [
      'Be gentle with each other\'s feelings. Both of you are more sensitive than you show',
      'Create something together. This pair bonds through creative expression',
      'The 3 should take the 11\'s intuitions seriously; the 11 should appreciate the 3\'s ability to lighten the mood',
    ],
  },
  '3-and-22': {
    overview: `The 3 and 22 are a visionary duo. The 3 is the communicator: ideas, expression, creativity. The 22 is the builder: vision, structure, execution. When the 3's creative spark meets the 22's blueprint, big things happen.\n\nThe 3 helps the 22 communicate their vision to the world. The 22 gives the 3's creativity real-world application. It's a partnership where art meets architecture.\n\nThe challenge is that the 22's intensity can overwhelm the 3, and the 3's scattered energy can frustrate the 22. You operate at different frequencies. The 22 is relentless and the 3 is playful. Finding rhythm together takes patience.`,
    loveInsight: `3 is captivated by 22's grand vision and the way they're actually building something real. 22 is attracted to 3's expressiveness and the way 3 can bring their vision to life publicly. 3's social ease and creativity complement 22's sometimes-intense focus. There's a mutual respect here — 3 sees 22's capability; 22 sees 3's authenticity.

Romantically, 3 becomes part of 22's vision in the best way. 3 isn't overshadowed because they're generating creative expression while 22 builds infrastructure. 3 gives 22 permission to be lighter, to celebrate wins. 22 provides the steady foundation 3 didn't know they needed. When 22 comes home stressed, 3 can dissolve it. There's real partnership.

The tension: 22 can become so consumed by the long-term project that 3 feels like the relationship is always secondary to the "big thing 22 is building." 3 needs presence and attention now; 22 is always future-focused. 3 might feel neglected or used as emotional support without real reciprocity. The fix is for 22 to compartmentalize — certain times are relationship time, fully present. And 3 needs to understand that 22's focus is not rejection. Weekly rituals (date nights, morning coffee together) prevent drift.`,
    friendshipInsight: `3 brings creative energy and humor; 22 brings visionary thinking and the ability to actually execute at scale. 3 makes 22 more interesting socially; 22 makes 3 feel like their ideas matter in the world. They can collaborate on meaningful projects naturally.

These friendships thrive when there's a shared mission or project — starting a company, building a community initiative, creating something substantial together. They're not the "just hang out" friends; they need purpose and direction to feel connected.

The risk is the friendship becoming transactional or 3 feeling used for social/creative support without being valued personally. And 22 might dismiss 3's concerns as unimportant compared to the "bigger picture." They stay strong by regularly celebrating small moments together and ensuring 3 feels genuinely valued beyond their usefulness to 22's vision. Personal connection matters as much as shared purpose.`,
    workInsight: `3 is the creative communicator and market face; 22 is the visionary architect and strategic builder. 3 can explain and sell what 22 is creating; 22 provides the substantial infrastructure behind it. This is a powerhouse combination in business.

They excel as co-founders, in leadership teams, or in any role combining visionary thinking with effective communication. Their work has both reach and substance.

The professional challenge is pacing and flexibility. 22 commits to a long-term strategy and wants to execute it methodically; 3 can pivot quickly based on new information. 22 can view 3 as flaky or reactive; 3 can view 22 as rigid. Set clear decision-making boundaries: agreed pivot points, defined scope, and regular strategy reviews. This prevents 3 from destabilizing 22's long-term plans while allowing for necessary adaptation.`,
    tips: [
      'The 22 should appreciate the 3\'s creative process. It isn\'t wasted time, it\'s how ideas are born',
      'The 3 should take the 22\'s vision seriously and commit to supporting it with follow-through',
      'Celebrate small wins together. The 22 tends to push toward the next milestone without pausing',
    ],
  },
  '3-and-33': {
    overview: `The 3 and 33 are natural allies. The 3 is the communicator. The 33 is the teacher. Both express through words, emotion, and creative energy. The difference is scope: the 3 expresses for joy, the 33 expresses for healing.\n\nThis pairing creates a relationship where wisdom is shared naturally. The 33 teaches the 3 to use their gifts for deeper purposes. The 3 teaches the 33 that expression can be playful, not just purposeful.\n\nThe bond here is genuine and warm. Both of you value connection and communication. The challenge is that the 33 can become too serious about their mission, and the 3 can become too scattered to match the 33's depth.`,
    loveInsight: `3 and 33 are both natural communicators and teachers, so they feel understood in a unique way. 33 is drawn to 3's genuine warmth and expressiveness; 3 is drawn to 33's healing presence and wisdom. There's an easiness here — less performance, more real connection. Both want to share their gifts with the world, so they support each other's visibility naturally.

Day-to-day, this is a warm, communicative relationship. 3 keeps 33 light; 33 keeps 3 grounded in purpose. They talk openly, laugh easily, and actually listen to each other. 33's desire to serve and heal is partnered with 3's ability to make it engaging and accessible. They feel like a real team. Both are comfortable with some independence, so there's no neediness undermining the relationship.

The friction point: 33 can be so focused on serving others that they forget to receive care from 3, which makes 3 feel like their love doesn't matter. And 3's need for lightness and fun can feel frivolous to 33 when there's "real work" to do. The solution is for 33 to actually accept 3's love and care (not just the other way around), and for 3 to understand that 33's service is their love language. They need to find ways to do both — serve the world and nurture the relationship.`,
    friendshipInsight: `3 brings playfulness and social connectivity; 33 brings wisdom and genuine care for people's growth. Together, they create friendships that are both joyful and meaningful. They can have fun without it being empty; they can discuss serious things without it being heavy.

These friendships thrive in creative, educational, or service-oriented communities. They're the friends who volunteer together, run workshops, or build community projects. They're also great in social settings because together they make others feel genuinely welcomed and valued.

The risk is 33 becoming resentful about always being the healer or 3 feeling like their lighter concerns aren't taken seriously. They stay strong by both giving and receiving, by celebrating each other's different ways of contributing. 3 should recognize 33's importance, and 33 should honor 3's need for joy. Balanced reciprocity is key.`,
    workInsight: `3 is the communicator and connector; 33 is the mentor and healer. 3 can market and articulate what 33 intuitively knows about helping people; 33 provides the depth and wisdom behind it. Together, they create teaching, training, or content that's both accessible and transformative.

They excel in education, coaching, nonprofit work, therapy-adjacent fields, content creation with purpose, or any role combining communication with genuine care. Their work changes people.

The professional challenge is scope and boundaries. 33 can overextend themselves saying yes to everyone; 3 can stay surface-level without diving deep. 3 might push 33 to scale before 33 has the energy, while 33 might slow things down to ensure quality. Set clear role definitions: 3 owns outreach and visibility; 33 owns depth and transformation. Regular check-ins on workload and energy prevent burnout and ensure both are sustainable.`,
    tips: [
      'The 33 should let the 3 be playful without always attaching a deeper meaning to it',
      'The 3 should sometimes sit with the 33\'s deeper messages instead of deflecting with humor',
      'Collaborate on something that combines teaching with creativity: a course, a book, a workshop',
    ],
  },
  '4-and-5': {
    overview: `The 4 and 5 are one of the more challenging pairings in numerology. The 4 craves stability, routine, and predictability. The 5 craves freedom, variety, and change. What feels safe to the 4 feels suffocating to the 5. What feels exciting to the 5 feels reckless to the 4.\n\nBut when it works, it works because you need each other. The 5 desperately needs grounding, even if they'd never admit it. The 4 desperately needs loosening up, even if the idea terrifies them.\n\nThis pair requires extraordinary patience and genuine appreciation for what the other brings. Without that, the 4 becomes a prison warden and the 5 becomes a flight risk.`,
    loveInsight: `4 is initially attracted to 5's intelligence and independence; 5 is drawn to 4's stability and groundedness. For a moment, it seems complementary — the structured person and the free-spirited person balance each other. But this is one of the harder matches.

The problem emerges quickly: 4 wants commitment, plans, and a shared future. 5 wants space, flexibility, and the option to change course. 4 interprets 5's need for freedom as a lack of commitment; 5 feels suffocated by 4's expectations and timelines. 4 tries harder to anchor 5; 5 pulls further away. It becomes a painful cycle where both feel misunderstood.

The friction is fundamental, not fixable by communication alone. If this relationship survives, it requires both people to radically accept what the other needs — 4 accepting that 5 will always need more space than feels comfortable, and 5 accepting that 4 needs more commitment than feels natural. Therapy helps. So does defining what commitment actually means (spending certain nights together, financial planning for near-term goals, emotional availability at scheduled times). But both partners have to genuinely want to bridge a real gap in their nature.`,
    friendshipInsight: `4 is the reliable friend; 5 is the interesting, always-learning friend. 4 appreciates 5's curiosity; 5 appreciates 4's groundedness. For a while, the friendship feels balanced and interesting.

But the friendship works only if expectations are realistic. 4 can't expect 5 to be available on demand; 5 can't expect 4 to be spontaneous. They're best as friends with clear, low-demand connection — maybe you get together monthly for coffee, or you text about shared interests. Regular commitment feels hard to both of you for different reasons.

The risk is 4 feeling abandoned by 5's independence, and 5 feeling controlled by 4's need for consistency. They stay connected by being explicit about how often they can realistically connect and accepting that this friendship might not be a primary one for either of them. It can work as a "sometimes" friendship if both are okay with that reality.`,
    workInsight: `4 is the executor and systems builder; 5 is the innovator and researcher. In theory, 4 can take 5's ideas and build them into something real. But tension emerges.

5 gets frustrated with 4's insistence on methodical timelines; 4 gets frustrated with 5's endless exploration without closure. 5 wants to keep learning and adapting; 4 wants to lock in a plan and execute it. They work together in R&D or innovation teams only if roles are very clear and decision-making authority is defined. Otherwise, they undermine each other.

The professional challenge is decisiveness and scope. Set firm deadlines for research and exploration, then commit to the plan. 5 must understand that at some point, action happens without perfect knowledge. 4 must understand that some flexibility during execution prevents wasted effort. If they can't agree on these terms, they shouldn't partner on ongoing work.`,
    tips: [
      'The 4 should give the 5 breathing room. Micromanaging a 5 is the fastest way to lose them',
      'The 5 should respect the 4\'s need for plans and follow through on commitments',
      'Find activities that combine structure and novelty: travel with an itinerary, cooking new recipes from a list',
    ],
  },
  '4-and-6': {
    overview: `The 4 and 6 are one of the most naturally compatible pairings. Both value home, family, responsibility, and building something that lasts. The 4 builds the structure. The 6 fills it with love. It's domestic harmony at its best.\n\nThe 4 appreciates the 6's warmth and care. The 6 appreciates the 4's reliability and work ethic. Neither of you is looking for drama. You want a partnership that works, and this one does.\n\nThe risk is that you become so focused on duty and caretaking that you forget about passion. This is a pairing that needs to protect its romantic and playful side, because neither of you naturally prioritizes fun over function.`,
    loveInsight: `4 and 6 are naturally aligned in how they see love and partnership. Both value loyalty, family, and building something stable together. They're attracted to each other's commitment to doing the "real work" of love. There's no games or superficiality — just two people who show up and mean it.

Romantically, this is domestic bliss. They create a home together that feels safe and warm. Both are caring about the relationship's practical and emotional needs. 4 brings the structure; 6 brings the emotional attunement. They're both naturally monogamous, both want a future together, both are willing to compromise. The rhythm of their relationship feels natural — no fighting about fundamental values. They build a life together that actually works.

The risk is becoming so focused on the relationship and home that individual growth gets neglected, or the relationship becoming predictable and comfortable in a way that erodes attraction. Also, 4 can be emotionally reserved while 6 needs more warmth — if 4 doesn't soften, 6 can feel starved. The solution is both partners intentionally nurturing the relationship's spark — regular dates, time apart with friends, conversations that go beyond the logistics of daily life. And 4 needs to practice showing affection more openly.`,
    friendshipInsight: `4 and 6 friendships are warm, reliable, and deeply loyal. Both show up for each other consistently. They're the friends who remember your birthday, ask how you're really doing, and follow through on help when you need it.

These friendships thrive in life-stage contexts — raising families together, building community, working on shared projects that involve their homes or values. They're great at group friendships because both care about inclusion and making sure everyone feels supported.

The risk is the friendship becoming too comfortable and predictable, or 6 sacrificing their own needs to support 4. They stay vital by sometimes trying new things together and ensuring both people are giving and receiving equally. Check in on whether 6 feels like they're always the caretaker; 4 might not realize they're being emotionally taken from. Balance matters.`,
    workInsight: `4 is the systems and project manager; 6 is the team connector and morale keeper. 4 ensures quality and timeline adherence; 6 ensures the team feels supported and included. Together, they create both productivity and a positive work environment.

They excel in industries valuing both structure and human care — healthcare, education, HR, operations roles, or any team-based work. Their combination creates sustainable, humane work culture.

The professional challenge is sometimes both get so focused on maintaining harmony and loyalty that difficult decisions get delayed. 4 might become overly rigid to maintain control; 6 might avoid conflict to keep the peace. They need clear decision-making authority and permission for constructive disagreement. Regular feedback (not just annual reviews) helps both understand how they're actually doing together, not just assuming everything is fine.`,
    tips: [
      'Protect your fun time. It\'s easy for both of you to fill every moment with responsibilities',
      'Express affection verbally, not just through acts of service. Both of you default to doing over saying',
      'Support each other\'s individual growth alongside the shared household goals',
    ],
  },
  '4-and-7': {
    overview: `The 4 and 7 share a quiet, respectful energy. The 4 is grounded and practical. The 7 is thoughtful and analytical. Neither of you needs constant social stimulation. You're comfortable with silence, with solitude, and with working side by side without constant conversation.\n\nThe 4 respects the 7's intellectual depth. The 7 respects the 4's practical competence. There's a mutual admiration built on substance, not flash.\n\nThe challenge is emotional expression. Neither of you naturally talks about feelings. The relationship can become a well-functioning machine that lacks warmth. Someone needs to bridge the emotional gap.`,
    loveInsight: `4 and 7 are both introspective in their own ways — 4 through doing, 7 through thinking. They're attracted to each other's seriousness and reluctance to engage in shallow drama. 4 respects 7's intellect; 7 respects 4's dedication. There's a quiet understanding that feels solid from the beginning.

Day-to-day, this is a calm, respectful relationship. Both are fine with quietness and don't demand constant emotional processing. They give each other space. 4 creates the structure and stability; 7 creates the depth and meaning. They can talk for hours about ideas or sit in comfortable silence. There's a real spiritual or intellectual quality to the connection.

The friction point: 4 can feel frustrated by 7's apparent inaction — 7 is thinking while 4 is building, and it can feel imbalanced. 7 can feel like 4 is all action and no reflection, missing the deeper meaning in things. Also, 7's emotional unavailability can make 4 feel like the connection isn't real enough. The solution is for 4 to appreciate 7's thinking as a valid form of work, and for 7 to show up more visibly with affection, not just loyalty. Scheduling vulnerability — "let's really talk about us" conversations — helps 7 show up emotionally.`,
    friendshipInsight: `4 and 7 are the quiet friends who can discuss serious things without pretense. 4 brings the practical perspective; 7 brings the philosophical one. They're great at long, meaningful conversations and don't need small talk to feel connected.

These friendships thrive in intellectual or spiritual communities, or just one-on-one contexts where depth is possible. They're not the "hanging out in a group" friends; they prefer smaller, more intentional gatherings.

The risk is the friendship becoming too serious or intellectualized, lacking humor or lightness. Both might assume the other is fine without checking in. They stay strong by sometimes doing something just for fun (not everything needs to be meaningful), and by checking in emotionally, not just intellectually. Make space for vulnerability, not just ideas.`,
    workInsight: `4 is the executor and implementer; 7 is the strategist and researcher. 4 ensures projects are delivered on time and to standard; 7 ensures decisions are based on solid thinking. Together, they create work that's both executed well and grounded in real insight.

They excel in research-intensive fields, strategic planning, quality assurance roles, or any work combining thinking and doing. Law, architecture, consulting, engineering — places where rigor and substance matter.

The professional challenge is speed and decisiveness. 7 can slow down decision-making with endless analysis; 4 wants to lock in choices and move forward. Set clear deadlines for 7's thinking, then commit to action. 7 must understand that perfect information doesn't exist; 4 must understand that some pre-thinking prevents wasted effort. Regular sprint planning and retrospectives keep both on track.`,
    tips: [
      'Make a point of asking "How are you feeling?" not just "What are you working on?"',
      'The 4 should respect the 7\'s need for alone time and not fill it with tasks',
      'The 7 should share their inner world more openly. The 4 wants to know, they just won\'t pry',
    ],
  },
  '4-and-8': {
    overview: `The 4 and 8 are a power team. Both of you are builders. The 4 builds through discipline and process, the 8 builds through vision and strategic power. When you align on a goal, very little can stop you.\n\nThe 8 provides the ambition and direction. The 4 provides the systems and execution. It's the CEO and COO dynamic, and it works because both of you respect hard work and tangible results.\n\nThe challenge is that both of you can become workaholics. If the relationship becomes all about achievement and material goals, the emotional side withers. Remember that you're building a life, not just a resume.`,
    loveInsight: `4 and 8 recognize each other's power immediately. Both are strong, capable, and not afraid of responsibility. They're attracted to each other's competence and ambition. 4 is drawn to 8's drive; 8 is drawn to 4's steadiness. There's a feeling of "finally, someone I don't have to take care of."

Romantically, this is a power team. They're both willing to work at the relationship, both goal-oriented, both wanting to build something substantial together. 4 keeps 8 grounded; 8 brings 4 into bigger visions. They respect each other's autonomy and don't create codependency. They support each other's ambitions. The relationship feels like a partnership between equals, which both need.

The tension: Both can become so focused on external success (work, money, status) that the relationship's emotional side atrophies. Also, 4 can feel controlled by 8's authority, and 8 can feel restricted by 4's caution. Both like to be in charge, so power struggles can happen. The solution is explicit agreement on decision-making domains — 4 owns X, 8 owns Y, and they consult on the big picture. And both need to schedule relationship nurturing as seriously as work. Weekly check-ins help.`,
    friendshipInsight: `4 and 8 friendships are strong, mutually respectful, and grounded in shared values around ambition and reliability. Both follow through; both respect hustle and discipline. They can collaborate on meaningful projects naturally.

These friendships thrive in professional or entrepreneurial contexts. They might start a business together, build a community initiative, or collaborate on ambitious projects. They're also great at being friends who can discuss money, goals, and strategy without judgment.

The risk is the friendship becoming purely transactional or both getting so focused on external goals that they don't nurture the personal connection. Also, power dynamics can surface — one might dominate while the other resents it. They stay strong by regularly doing something together just for fun (not goal-oriented), and by explicitly checking in on whether both feel respected and valued as people, not just collaborators. Personal connection matters.`,
    workInsight: `4 is the reliable operator and quality keeper; 8 is the visionary leader and deal-maker. 4 ensures execution is solid; 8 ensures the vision is ambitious and market-winning. Together, they're a formidable team.

They excel in leadership positions, entrepreneurship, and any role combining vision with execution. They build real businesses and execute real strategy.

The professional challenge is flexibility and speed. 4 wants careful planning before action; 8 wants to move fast and course-correct. 4 can seem cautious; 8 can seem reckless. They need a decision-making framework agreed upfront: clear authority, defined decision criteria, and checkpoints rather than endless pre-planning. Both need to trust the other's judgment and push past their natural tendencies sometimes.`,
    tips: [
      'Make time for non-work activities. This pair can easily let the relationship become a business partnership',
      'Talk about dreams and feelings, not just goals and plans',
      'The 8 should value the 4\'s attention to detail. It prevents the costly mistakes that ambition can create',
    ],
  },
  '4-and-9': {
    overview: `The 4 and 9 come at life from different angles. The 4 is practical, detail-oriented, and focused on building tangible things. The 9 is idealistic, big-picture, and focused on meaning and service. Together, you bring vision and execution.\n\nThe 9 gives the 4 a larger purpose for their hard work. The 4 gives the 9 the practical structure to actually manifest their ideals. It's a complementary pairing when both of you appreciate what the other brings.\n\nThe tension comes from different value systems. The 4 measures success by what's been built. The 9 measures success by what's been given. Finding shared metrics matters.`,
    loveInsight: `4 is drawn to 9's wisdom and broad perspective; 9 is drawn to 4's stability and genuine commitment. 9 can sometimes feel unmoored by their own expansiveness, and 4 provides solid ground. 4 feels like they matter to 9 in a real way, not just as part of 9's larger mission.

Day-to-day, this is a warm relationship where 4 creates the structure and 9 brings the meaning. 4 handles practical matters; 9 helps 4 see the bigger significance in what they're building. 9's idealism is grounded by 4's pragmatism. They balance each other — 9 keeps 4 from becoming too narrow, 4 keeps 9 from becoming too scattered. There's genuine warmth and mutual respect.

The friction: 4 can feel like 9's causes or interests are always bigger than the relationship itself. 9 might feel like 4 is trying to shrink their vision to fit into a smaller life. Also, 9's emotional distance (even with good intentions) can make 4 feel unsupported. The solution is for 9 to explicitly show 4 that the relationship is a priority, not just part of the landscape. And 4 needs to understand that 9's concern for the larger world doesn't diminish their love. Scheduled one-on-one time helps both feel like the relationship matters.`,
    friendshipInsight: `4 brings grounding and practical support; 9 brings perspective and broader vision. They're great at projects with real-world impact because 4 ensures they're executable and 9 ensures they matter. They complement each other naturally.

These friendships thrive in meaningful contexts — volunteer work, community projects, creative endeavors with purpose. They're not typically "just hang out" friends, but they build something together and that creates real connection.

The risk is both getting so focused on the project or cause that the friendship itself doesn't get nurtured, or 4 feeling used to provide practical support while 9 gets to do the interesting visionary work. They stay strong by explicitly valuing each other's contributions, by sometimes just being together without a purpose, and by checking in on whether both feel genuinely appreciated. Both need to remember the friendship itself matters.`,
    workInsight: `4 is the operational executor; 9 is the visionary strategist. 4 ensures initiatives are well-managed and sustainable; 9 ensures they're aligned with larger purpose. Together, they create work that's both impactful and well-run.

They excel in nonprofits, social enterprises, or any field combining vision with operations. 4's project management skills combined with 9's strategic thinking create real, lasting impact.

The professional challenge is scope and completion. 9 can keep expanding the vision; 4 wants to complete one phase before moving to the next. 9 might feel constrained by 4's methodical approach; 4 might feel like nothing is ever "done" with 9. Set clear project phases and scope boundaries upfront. Agree on what "done" looks like, then move to the next phase. Regular strategy reviews ensure alignment without endless expansion.`,
    tips: [
      'Respect each other\'s contributions even when they look different from your own',
      'The 4 should engage with the 9\'s ideals. They\'re not impractical, they\'re the reason for the work',
      'The 9 should respect the 4\'s methods. Dreams without systems stay dreams',
    ],
  },
  '4-and-11': {
    overview: `The 4 and 11 bring together earth and light. The 4 is grounded, practical, and steady. The 11 is intuitive, spiritual, and visionary. Together, you create a balance between the material and the spiritual, something neither of you achieves as well alone.\n\nThe 4 gives the 11 a foundation. Without grounding energy, the 11 can float away into anxiety and spiritual overwhelm. The 4 says "We're here, we're safe, let's build." The 11 gives the 4 insight beyond the practical, helping them see why they're building, not just how.\n\nThe challenge is that the 4 can dismiss the 11's intuition as impractical, and the 11 can see the 4 as spiritually closed. Bridge that gap with curiosity, not judgment.`,
    loveInsight: `4 is attracted to 11's sensitivity and depth; 11 is drawn to 4's grounding presence. 11 often feels scattered or overwhelmed, and 4 provides solid foundation. 4 appreciates that 11 isn't superficial; 11 appreciates that 4 creates actual structure. There's a complementary quality here.

Romantically, 4 offers 11 the safety and consistency they need to feel secure enough to open up. 4 shows love through reliability; 11 shows love through intuitive understanding. 4 might struggle with 11's emotional intensity or need for processing, but 4's steadiness actually helps 11 feel less alone in their sensitivity. There's real tenderness when 4 shows up for 11's vulnerable moments.

The tension: 4 can feel frustrated by 11's overthinking or emotional spirals, viewing them as indulgence rather than real need. 11 can feel like 4 is too rigid or doesn't understand their inner world. Also, 4's emotional reserve can make 11 feel unseen emotionally. The solution is for 4 to understand that 11's sensitivity is real and not something to "fix," and for 11 to work with a therapist (not just rely on 4) to manage anxiety. 4 needs to practice soft presence — being with 11 without trying to solve. Regular rituals help.`,
    friendshipInsight: `4 brings stability and practical support; 11 brings intuitive wisdom and genuine care about 4's inner life. 4 feels protected by 11's ability to truly see them; 11 feels supported by 4's steady presence.

These friendships thrive in one-on-one contexts where real vulnerability is possible. They're great at deep conversations and don't need to perform for each other.

The risk is 11 becoming overly dependent on 4 for emotional support, or 4 withdrawing because 11's intensity feels like too much. They stay strong by both doing their own emotional processing (therapy, meditation, whatever works), ensuring the friendship is nourishing rather than draining for both. Check in regularly: "Is this friendship working for you?"`,
    workInsight: `4 is the steady executor; 11 is the intuitive strategist. 4 builds what works; 11 senses what the market or organization actually needs (not just what's obvious). Together, they're both innovative and grounded.

They excel in strategy, innovation, emerging fields, or roles requiring both intuition and execution. 11's foresight combined with 4's disciplined follow-through is valuable.

The professional challenge is 11's tendency to spiral during high stress, which can worry or frustrate 4. 4 might push 11 to "just decide" before 11 feels ready. Create clear decision frameworks and timeline boundaries. 11 owns strategic thinking; 4 owns execution. Regular check-ins prevent 11 from getting stuck in analysis. And 4 should acknowledge that 11's thoughtfulness is an asset, not a liability.`,
    tips: [
      'The 4 should stay open to the 11\'s intuitive insights. They\'re not random feelings, they\'re information',
      'The 11 should appreciate the 4\'s practical approach as a form of caring',
      'Create a shared space that honors both: a home that\'s both organized and spiritually nourishing',
    ],
  },
  '4-and-22': {
    overview: `The 4 and 22 are natural collaborators. The 22 is the master builder. It's literally the 4's energy amplified to its highest spiritual level. Both of you love structure, discipline, and creating things that last.\n\nThe 22 provides the grand vision. The 4 provides the day-to-day execution. Together, you don't just build. You build things that matter on a larger scale. This is one of the most productive partnerships in numerology.\n\nThe challenge is that the 22's intensity can overwhelm the 4, and the 4's methodical pace can frustrate the 22. The 22 thinks in decades. The 4 thinks in quarters. Finding a shared timeline helps.`,
    loveInsight: `4 and 22 are both builders, both visionary in their commitment to making something real and significant. They're magnetically attracted to each other's power and seriousness. They understand what it takes to create lasting value. 4 sees 22 as the ultimate expression of their own commitment to building; 22 sees 4 as someone capable of real partnership.

Day-to-day, this is a relationship with real momentum. Both are willing to sacrifice and work. They're building a shared vision — a business, a home, a legacy. They support each other's ambitions. There's respect and genuine partnership. Both understand that relationships require work, so neither checks out during difficult times. The relationship itself is built to last.

The tension: Both can become so consumed by the big project or vision that the relationship itself gets starved. 22 is always focused on long-term; 4 is methodical but can lose touch with why it matters emotionally. Also, both like being in control, so power struggles can surface. The solution is for both to explicitly schedule relationship time — not just "we're in the same house," but real presence and connection. And they need to regularly check in on whether the relationship is serving both people, not just the shared project. The relationship is the foundation; the project is what they build together.`,
    friendshipInsight: `4 and 22 friendships are built on shared respect for ambition and willingness to do real work. They're great collaborators who can build something meaningful together. There's a quality of "yes, we can do this" that energizes both.

These friendships thrive in entrepreneurial or ambitious contexts — starting a business, building a nonprofit, executing a shared vision. They're not typically casual friends, but they build real things together.

The risk is the friendship becoming purely transactional or getting lost in the project. Also, if one person has more success or ambition than the other, resentment can surface. They stay strong by regularly celebrating what they're building together, by doing something just for fun (not goal-oriented), and by checking in personally, not just project-wise. Both need to feel valued as people, not just collaborators.`,
    workInsight: `4 and 22 together are a master-building team. 4 is the methodical operator ensuring everything is solid; 22 is the visionary architect ensuring the vision is ambitious. 4 provides the foundation; 22 provides the scope. Together, they build substantial things.

They excel as co-founders, in leadership teams, or in roles combining ambitious vision with disciplined execution. Their work has both reach and solidity.

The professional challenge is 22's sometimes-unrealistic timelines combined with 4's insistence on careful preparation. 22 wants to move faster than feels safe to 4; 4 wants to plan longer than 22's energy allows. They need clear milestones and agreed decision-making authority. 4 owns the build quality; 22 owns the vision timeline. Regular strategy reviews ensure both are on track and neither is resentful.`,
    tips: [
      'The 22 should value the 4\'s attention to detail. Grand visions fail without solid foundations',
      'The 4 should stretch their imagination to match the 22\'s vision. Think bigger sometimes',
      'Celebrate milestones together. Both of you tend to keep building without stopping to appreciate what you\'ve accomplished',
    ],
  },
  '4-and-33': {
    overview: `The 4 and 33 create a purposeful, service-oriented partnership. The 4 brings structure and discipline. The 33 brings wisdom and compassion. Together, you build things that serve people, and you build them well.\n\nThe 33 gives the 4's work a deeper meaning. The 4 gives the 33's teaching and healing mission a practical framework. It's a combination that does real good in the world.\n\nThe tension is that the 33 can feel the 4 is too rigid, and the 4 can feel the 33 is too idealistic. As always, the solution is mutual respect for different strengths.`,
    loveInsight: `4 is drawn to 33's wisdom and healing presence; 33 is drawn to 4's stability and genuine reliability. 33 often gives everything away, and 4 provides solid ground to return to. 4 respects that 33 has real depth; 33 respects that 4 actually follows through. There's a natural complementarity.

Romantically, 4 creates the structure and safety that allows 33 to give freely without burning out. 33 teaches 4 that there's more to life than work and accomplishment. 4 shows 33 that commitment and reliability are also forms of love. They balance each other — 4 brings the practical love, 33 brings the spiritual love. There's genuine warmth and mutual respect.

The tension: 33 can become so focused on serving everyone else that 4 feels neglected or like their needs don't matter. 4 might feel like they're always supporting 33's mission rather than being part of a shared life. And 4's emotional reserve can make 33 feel like the love isn't reciprocal. The solution is for 33 to practice receiving love from 4 and accepting that rest/self-care is not selfish. 4 needs to soften and allow 33 to care for them too. The relationship survives by both giving and receiving equally.`,
    friendshipInsight: `4 brings grounding and practical loyalty; 33 brings wisdom and deep care. 4 feels protected by 33's genuine interest in their wellbeing; 33 feels supported by 4's steady, reliable presence.

These friendships thrive in one-on-one or small group contexts where real connection is possible. They're great at supporting each other through life challenges.

The risk is 33 becoming overly focused on 4's growth/healing while neglecting their own needs, or 4 withdrawing because 33's intensity feels like too much. They stay strong by both practicing self-care, by 4 showing care for 33 (not just receiving it), and by checking in regularly on whether both feel truly supported. Reciprocity matters.`,
    workInsight: `4 is the operational backbone; 33 is the mission keeper and cultural heart. 4 ensures the work is sustainable and well-run; 33 ensures it's aligned with real values and helping people. Together, they create organizations that are both effective and humane.

They excel in nonprofits, education, healthcare, coaching, or any field where purpose and operations must align. 4's systems combined with 33's values create sustainable impact.

The professional challenge is sometimes 33 overextends while 4 focuses on efficiency at the cost of compassion. 33 might feel like 4 is "just managing" rather than truly caring; 4 might feel like 33 is inefficient. Set clear roles: 4 owns sustainable systems, 33 owns impact and culture. Regular check-ins ensure both feel like the work is meaningful and well-run. Neither can be sacrificed.`,
    tips: [
      'The 4 should stay open to the 33\'s emotional approach. Not everything needs a spreadsheet',
      'The 33 should respect the 4\'s need for order. Structure enables service, it doesn\'t limit it',
      'Find a shared cause that uses both your gifts. Build something that helps people',
    ],
  },
  '5-and-6': {
    overview: `The 5 and 6 seem like they want different things. The 5 wants freedom and exploration. The 6 wants home and family. But this difference is exactly what makes the pairing work, when both of you flex.\n\nThe 6 gives the 5 a home base to return to. Without it, the 5 drifts. The 5 gives the 6 excitement and new experiences. Without it, the 6 stagnates. You each bring what the other is missing.\n\nThe challenge is the tug-of-war between stability and freedom. The 6 wants the 5 home more. The 5 wants the 6 to lighten up. Neither is wrong, but both need to compromise.`,
    loveInsight: `5 is attracted to 6's warmth and genuine care; 6 is drawn to 5's aliveness and refusal to be boring. 5 loves that 6 doesn't demand constant intensity or drama. 6 loves that 5 brings novelty and excitement. For a moment, it feels like 5 has finally found someone who cares without being clingy, and 6 has found someone who brings life to their home.

Day-to-day, 6 creates the safe home base that allows 5 to roam. 5 brings adventure and prevents 6 from being too sedentary or inward-focused. When it works, 5 comes home to someone who genuinely loves them, and 6 has someone who brings the world in. There's warmth and excitement coexisting.

The tension: 6 eventually needs more consistency and commitment than 5 can naturally give. 5 feels like 6's expectations are a cage. 6 interprets 5's distance as lack of care; 5 interprets 6's need as controlling. 6 starts to resent being the stable one; 5 resents being expected to be stable. The solution is honest conversation about what commitment actually looks like — not traditional marriage, but real presence and reliability about certain things. 5 needs to pick a few things to be consistent about; 6 needs to accept that 5's love looks different. It's possible but requires both compromising their natural style.`,
    friendshipInsight: `5 brings excitement and novelty; 6 brings loyalty and genuine care. 5 appreciates that 6 doesn't judge their wandering; 6 appreciates that 5 keeps them engaged with the world. The friendship has both adventure and grounding.

These friendships work when expectations are realistic — maybe they're "every few months" friends who do something interesting together. 6 shouldn't expect constant contact; 5 should expect 6 to remember them and care between visits.

The risk is 6 feeling abandoned by 5's independence, or 5 feeling guilty about not being the reliable friend 6 might prefer. They stay strong by being honest about friendship style differences and celebrating what they do have rather than resentfully comparing to different friendships. If 6 can accept that 5 loves them but distantly, and 5 remembers to actually reach out, the friendship can last.`,
    workInsight: `5 is the innovator and researcher; 6 is the team connector and relationship manager. 5 discovers new approaches; 6 ensures the team is supported. Together, they're interesting and humane.

They excel in client-facing roles combined with research, HR, or any field needing both innovation and people care. 5's ideas combined with 6's execution creates sustainable work.

The professional challenge is follow-through and commitment to decisions. 5 wants to keep exploring options; 6 wants to commit and move forward. Set decision deadlines and stick to them. 5 owns research and innovation within boundaries; 6 owns implementation and team dynamics. Regular syncs keep both aligned. Without structure, 5 keeps finding "one more thing" while 6 gets frustrated.`,
    tips: [
      'The 6 should give the 5 freedom without guilt. They come back more present when they\'ve had space',
      'The 5 should honor the 6\'s need for quality time, not just physical presence, but real attention',
      'Find adventures you can do together: travel, cooking, exploring new neighborhoods',
    ],
  },
  '5-and-7': {
    overview: `The 5 and 7 both need their space, which is a strong foundation. Neither of you is clingy. The 5 needs physical freedom to explore. The 7 needs mental freedom to think. You understand each other's independence intuitively.\n\nThe 5 brings external adventure. The 7 brings internal exploration. Together, you cover a wide range of experience: the outer world and the inner world. You have fascinating conversations because you're both curious, just in different directions.\n\nThe challenge is connection. Both of you can drift so far into your own worlds that you forget to meet in the middle. Schedule time to actually be together, not just coexist.`,
    loveInsight: `5 and 7 are both mentally stimulated by each other. Neither needs constant emotional processing or reassurance. They're attracted to each other's independence and willingness to think deeply. There's intellectual companionship here that feels refreshing to both.

Romantically, this relationship is interesting and low-drama. Both need space; neither creates neediness. They can talk for hours about ideas or sit quietly together without tension. Both are somewhat emotionally distant, so there's no one demanding the other be more vulnerable. The challenge is that without someone pushing toward deeper emotional connection, the relationship can stay intellectual and shallow.

The tension: Both can become so independent that there's no real interdependence or emotional intimacy. Both might struggle to express vulnerability or ask for support. The relationship can feel more like two interesting people who happen to live together than a genuine partnership. The solution is intentional practices around emotional connection — scheduled conversations about feelings, physical affection, and expressing appreciation. 5 and 7 need to consciously build what doesn't come naturally. It's possible but requires both committing to depth, not just intellectual connection.`,
    friendshipInsight: `5 and 7 friendships are low-maintenance and genuinely interesting. Both respect each other's need for space and autonomy. They can have deep conversations without expectation of constant contact.

These friendships thrive in intellectual or philosophical contexts — book clubs, spiritual pursuits, discussion-based learning. They're great at longer, deeper conversations and terrible at small talk.

The risk is the friendship staying purely intellectual without moving into real personal care or support. They stay strong by checking in during difficult times, by sometimes doing something just for fun (not intellectually stimulating), and by expressing that they genuinely value each other. Intellectual connection isn't enough; both need to feel cared for personally.`,
    workInsight: `5 is the researcher and systems thinker; 7 is the strategic analyst and deep thinker. Together, they create rigorous, nuanced work. Both bring intellectual rigor without ego.

They excel in research, strategy, analysis, academic or specialized fields. Their work is substantive and well-founded.

The professional challenge is execution and decision-making. Both can get lost in thinking without moving to action. Set clear decision deadlines and include other voices to push toward closure. 5 and 7 both need to understand that analysis has diminishing returns; at some point, you commit and act. Regular sprint-based structures help force decisions.`,
    tips: [
      'Make intentional plans to connect. Neither of you will default to togetherness',
      'Share your inner worlds with each other: the 5\'s experiences and the 7\'s thoughts',
      'Find a shared intellectual interest that gives you something to explore together',
    ],
  },
  '5-and-8': {
    overview: `The 5 and 8 bring different kinds of power. The 5 has the power of adaptability: they can pivot, adjust, and thrive in any environment. The 8 has the power of authority: they command, strategize, and build empires. Together, it's dynamic.\n\nThe 8 gives the 5 direction. Left alone, the 5 scatters in too many directions. The 8 helps them focus. The 5 gives the 8 flexibility. Left alone, the 8 becomes rigid. The 5 helps them adapt.\n\nThe tension is control. The 8 wants to lead. The 5 doesn't want to be led. This works only when the 8 leads the strategy and the 5 has freedom in execution.`,
    loveInsight: `5 is attracted to 8's power and competence; 8 is drawn to 5's aliveness and refusal to be boring. 5 loves that 8 doesn't need emotional constant reassurance. 8 loves that 5 brings adventure and keeps life interesting. There's mutual respect and excitement.

Day-to-day, 8 provides the structure and security that allows 5 to roam. 5 keeps 8's intensity from becoming suffocating. 8 shows love through protection and provision; 5 shows love through engagement and novelty. When it works, they balance each other — 8 has someone who won't try to control them, 5 has someone who actually provides stability. There's real excitement and some tenderness.

The tension: 5's need for freedom can feel threatening to 8's desire for control. 8 wants to own and manage; 5 wants to be free and explore. 8 can become possessive; 5 can seem irresponsible. 5 feels like 8 is trying to cage them; 8 feels like 5 is trying to escape. The solution is clear conversation about what fidelity and commitment mean. 5 needs to commit to certain things; 8 needs to accept that 5's freedom isn't rejection. It requires both people to mature beyond their base instinct — 5 learning to be reliable, 8 learning to trust. It's possible but not automatic.`,
    friendshipInsight: `5 brings aliveness and unconventionality; 8 brings loyalty and genuine backing. 5 appreciates that 8 doesn't judge their wandering; 8 appreciates that 5 keeps them engaged. The friendship has adventure with some substance.

These friendships work in activity-based or project-based contexts. They're great at doing something together — travel, work projects, building something. They're less great at just being together without purpose.

The risk is 8 feeling used by 5 without reciprocal commitment, or 5 feeling like 8 is trying to control them. They stay strong by being clear about expectations, by 5 showing up when it matters, and by both understanding their friendship style is different but legitimate. If both can accept this, the friendship is fun and interesting.`,
    workInsight: `5 is the innovator and adaptable problem-solver; 8 is the visionary leader and executor. 5's flexibility helps 8's plans adapt to new information; 8's ambition gives 5's exploration purpose. Together, they're innovative and driven.

They excel in entrepreneurship, fast-moving industries, or roles requiring both vision and adaptability. 5's innovation combined with 8's execution creates momentum.

The professional challenge is commitment to strategy. 5 wants to keep pivoting; 8 wants to commit to a plan and drive it hard. Set agreed decision points and pivot criteria upfront. Once decided, commit fully. 5 must understand that execution requires some stability; 8 must understand that real innovation sometimes requires flexibility. Regular strategy reviews help both feel heard.`,
    tips: [
      'The 8 should set the destination but let the 5 choose the route',
      'The 5 should show up consistently. The 8 needs reliability to trust',
      'Balance work goals with shared adventures. You both need stimulation, just different kinds',
    ],
  },
  '5-and-9': {
    overview: `The 5 and 9 share a love of possibility. The 5 sees possibilities in experiences: what's around the next corner, what's in the next country. The 9 sees possibilities in humanity: what we could become, how we could help. Together, your worldview is expansive.\n\nThe 9 gives the 5 meaning. The 5 gives the 9 movement. Without each other, the 5 wanders without purpose and the 9 dreams without acting. Together, you wander with meaning and dream with your feet on the ground.\n\nThis is a naturally warm, philosophically rich pairing. The challenge is settling down. Both of you prefer expansion to contraction, and building a stable home requires some contraction.`,
    loveInsight: `5 is attracted to 9's wisdom and broad perspective; 9 is drawn to 5's aliveness and refusal to be bound. Both are searchers, both are expansive. There's a sense of possibility and adventure together. 5 feels like 9 gets their need for growth; 9 feels like 5 brings energy to their ideals.

Romantically, this is an expansive relationship. Both are comfortable with some independence and big-picture thinking. 9 helps 5 understand that exploration can be purposeful, not just scattered. 5 helps 9 stay engaged and playful rather than overly idealistic. There's genuine partnership without one person controlling the other.

The tension: 9's idealism can feel heavy or judgmental to 5's more pragmatic nature. 5 can feel like 9's causes are more important than the relationship. Also, without someone anchoring things, the relationship can drift or feel uncertain. 9 can feel scattered; 5 can feel uncommitted. The solution is finding shared values that matter to both and building the relationship around those. Regular check-ins about whether the relationship is getting what it needs. Both need to consciously commit, not just drift together.`,
    friendshipInsight: `5 brings curiosity and freedom; 9 brings wisdom and broader perspective. Together, they explore ideas and possibilities. There's genuine expansion for both.

These friendships thrive in growth-oriented contexts — learning together, exploring spirituality, discussing ideas, working on meaningful projects. They're the friends who push each other to think bigger.

The risk is both getting scattered or the friendship drifting without intentional maintenance. They stay strong by regular connection (not just sporadic), by celebrating what they're learning together, and by checking in about the friendship itself. Both need to actively maintain; passive drifting apart happens easily.`,
    workInsight: `5 is the innovator and adaptable thinker; 9 is the visionary strategist. 5's flexibility helps navigate complexity; 9's wisdom ensures choices serve the larger purpose. Together, they're innovative and meaningful.

They excel in social enterprises, nonprofits, fields combining innovation with purpose. Their work has both creativity and impact.

The professional challenge is scope and completion. 9 can keep expanding vision; 5 can keep exploring options. Set clear project boundaries and scope upfront. Agree on what "done" looks like. 5 owns exploration within agreed constraints; 9 owns strategic vision. Regular check-ins ensure both feel like the work is moving forward and not endless.`,
    tips: [
      'Build a home base together. Even nomads need somewhere that feels like home',
      'The 5 should engage with the 9\'s causes, not just their own adventures',
      'The 9 should join the 5 in spontaneous fun. Not everything needs a deeper meaning',
    ],
  },
  '5-and-11': {
    overview: `The 5 and 11 are both unconventional. The 5 is physically free-spirited. The 11 is spiritually free-spirited. Neither of you fits neatly into boxes, and you appreciate that about each other.\n\nThe 11's intuition can guide the 5's wandering energy toward meaningful experiences. The 5's groundedness in the physical world helps the 11 stay connected to reality. It's a pairing that balances the spiritual and the sensory.\n\nThe challenge is that the 5 can be too restless for the 11's sensitivity, and the 11 can be too intense for the 5's lightness. Meeting in the middle requires patience from both sides.`,
    loveInsight: `5 is drawn to 11's intuitive depth and unconventionality; 11 is attracted to 5's freedom and lack of judgment. Neither needs the other to be "normal." There's a sense of mutual understanding that's rare. 5 feels like 11 truly sees them; 11 feels like 5 gives them space to be themselves.

Day-to-day, this is an unusual and interesting relationship. 11's intuition guides 5's wandering toward purpose; 5's freedom helps 11 not spiral too deeply inward. Both need space, so there's no suffocation. There's real warmth beneath the independence. 11 appreciates that 5 doesn't demand they explain their sensitivity; 5 appreciates that 11 doesn't judge their need to explore.

The tension: 11's anxiety and sensitivity can feel heavy to 5's lighter nature. 5 might seem irresponsible or uncommitted to anxious 11. Also, 11 might feel abandoned when 5 needs space, interpreting it as rejection. 5 might feel drained by 11's emotional intensity. The solution is for 5 to understand that 11's sensitivity is real and not something to "fix," and for 11 to do their own emotional processing (therapy, not just with 5). 5 needs to show up consistently, even if only once a week. Regular rituals help both feel secure.`,
    friendshipInsight: `5 brings freedom and interesting perspectives; 11 brings intuitive wisdom and genuine care. Together, they explore ideas and possibilities with mutual respect.

These friendships thrive in open, accepting communities. They're great at discussing unconventional ideas, spiritual exploration, or creative pursuits. They don't judge each other.

The risk is 11 becoming dependent on 5 for emotional processing, or 5 disappearing when 11 needs support. They stay strong by both doing their own emotional work, by 5 checking in regularly, and by 11 respecting 5's need for independence. Clear boundaries prevent resentment.`,
    workInsight: `5 is the adaptable innovator; 11 is the intuitive strategist. 5's flexibility helps explore possibilities; 11's foresight ensures strategic direction. Together, they're creative and wise.

They excel in emerging fields, innovation, strategy, or roles rewarding unconventional thinking. 11's intuition combined with 5's adaptability creates foresight.

The professional challenge is clarity and follow-through. 11 can spiral into analysis; 5 can keep exploring without committing. Set clear decision frameworks and deadlines. 11 owns strategic thinking; 5 owns implementation. Regular check-ins keep both aligned. Neither can be vague about what they're actually building.`,
    tips: [
      'The 5 should slow down enough to hear the 11\'s subtle guidance. It\'s usually worth listening to',
      'The 11 should join the 5 in spontaneous experiences. Not everything needs to be spiritually significant',
      'Find shared practices that ground you both: yoga, nature walks, cooking together',
    ],
  },
  '5-and-22': {
    overview: `The 5 and 22 create a dynamic partnership. The 22 has grand visions and detailed plans. The 5 brings adaptability and the ability to pivot when plans need adjusting. Together, you build big things that can actually respond to changing conditions.\n\nThe 22 gives the 5 a worthy mission. The 5 gives the 22 the flexibility to adjust the plan without losing the vision. It's the architect and the field manager: the one who designs and the one who adapts to conditions on the ground.\n\nThe tension is that the 22 can be rigid about their vision and the 5 can be too casual about commitment. Finding a middle ground between "the plan is sacred" and "plans are suggestions" is the work here.`,
    loveInsight: `5 is attracted to 22's vision and power; 22 is drawn to 5's aliveness and refusal to be confined. 22's big dreams excite 5; 5's adaptability helps 22's plans stay flexible. There's real excitement and mutual respect.

Romantically, this can work if both people mature emotionally. 5 brings flexibility to 22's sometimes-rigid plans; 22 provides the structure and long-term thinking 5 lacks. 5 keeps 22 from becoming too narrow in pursuit of goals; 22 helps 5 channel energy toward something real. There's momentum and purpose together.

The tension: 22's intense long-term focus can feel suffocating to 5. 5 wants to keep options open; 22 wants to commit to the vision and execute it. 5 can seem irresponsible or uncommitted; 22 can seem controlling. Also, 22 can become so consumed by the big project that relationship gets neglected, leaving 5 feeling unimportant. The solution is explicit conversation about what commitment looks like — 5 commits to the shared vision while maintaining some autonomy, 22 creates space for 5's need for exploration. Weekly relationship rituals help both feel prioritized. It's possible but requires both people stretching beyond their natural style.`,
    friendshipInsight: `5 brings unconventionality and freedom; 22 brings visionary thinking and power. 5 adds flexibility to 22's plans; 22 gives 5's ideas substance and purpose.

These friendships work in entrepreneurial or ambitious contexts. They're great at building something together. Both are okay with some intensity and big goals.

The risk is the friendship becoming purely transactional or 22 using 5 for creative input while 5 feels like their autonomy isn't respected. They stay strong by celebrating what they're building together, by sometimes doing something just for fun, and by both feeling genuinely valued. The friendship itself should matter, not just the shared project.`,
    workInsight: `5 is the adaptable innovator; 22 is the visionary architect. 5's flexibility helps navigate surprises; 22's vision keeps efforts focused on something grand. Together, they're innovative and ambitious.

They excel in entrepreneurship, emerging industries, or roles requiring both vision and adaptability. 5's innovation combined with 22's long-term thinking creates momentum.

The professional challenge is commitment and speed. 5 wants to keep exploring; 22 wants to commit to the plan and execute it methodically. Set clear decision deadlines and project scope. 5 owns exploration within boundaries; 22 owns strategic vision. Regular strategy reviews ensure both feel heard. Neither can paralyze the other — 5 commits to the plan, 22 allows some flexibility.`,
    tips: [
      'The 22 should trust the 5\'s ability to adapt. Flexibility isn\'t the same as lack of commitment',
      'The 5 should respect the 22\'s big-picture vision. The plan exists for a reason',
      'Celebrate adaptability as a strength, not a compromise',
    ],
  },
  '5-and-33': {
    overview: `The 5 and 33 create an inspired connection. The 33 has deep wisdom and a teaching nature. The 5 has restless energy and a need for experience. The 33 can help the 5 find meaning in their wandering. The 5 can help the 33 loosen up and enjoy life's variety.\n\nThe 33 sees the 5's potential and naturally wants to guide them toward purpose. The 5 brings fresh energy and perspective that keeps the 33 from becoming too serious or self-sacrificing.\n\nThe challenge is that the 33 can try to "teach" the 5 too much, and the 5 can resist the 33's attempts at guidance. The 5 needs to discover their own lessons. The 33 should offer, not impose.`,
    loveInsight: `5 is drawn to 33's wisdom and healing presence; 33 is attracted to 5's aliveness and refusal to be boring. 33 appreciates that 5 doesn't demand constant emotional processing. 5 appreciates that 33 isn't clingy or controlling. There's real lightness mixed with depth.

Day-to-day, 33 provides the understanding and care that allows 5 to roam without guilt. 5 brings adventure and playfulness to 33's sometimes-serious world. 33 helps 5 understand that exploration can be spiritual, not just scattered. 5 keeps 33 engaged with life's possibilities. There's genuine partnership without control.

The tension: 5's independence can feel like distance to 33, who needs to feel connected and valued. 33 can start to sacrifice their own needs to keep 5 interested, which isn't sustainable. 5 might feel guilty about their need for freedom. Also, 33's focus on service can make 5 feel like the relationship is secondary to 33's mission. The solution is honest conversation about what commitment means — 5 commits to certain things (regular connection, emotional presence at important times), 33 accepts that 5's love looks different. Regular rituals help both feel prioritized. 33 must not sacrifice themselves; 5 must show up consistently. It works if both stretch toward each other.`,
    friendshipInsight: `5 brings freedom and new perspectives; 33 brings wisdom and genuine care. 5 appreciates that 33 doesn't judge their wandering; 33 appreciates that 5 keeps them engaged. The friendship has both freedom and depth.

These friendships work in service-oriented or growth contexts. They're great at exploring ideas together, helping others, or discussing meaning. Both value authenticity.

The risk is 33 becoming overly focused on 5's growth/development while neglecting their own needs, or 5 disappearing when 33 actually needs support. They stay strong by both practicing self-care, by 5 checking in regularly, and by 33 asking for help when needed. Reciprocity matters more than just 33 giving.`,
    workInsight: `5 is the innovator and adaptable thinker; 33 is the teacher and mission keeper. 5's flexibility helps explore new approaches; 33's wisdom ensures choices serve real purpose and people. Together, they're creative and meaningful.

They excel in education, nonprofits, fields combining innovation with genuine care for people's wellbeing. Their work creates real change.

The professional challenge is follow-through and sustainability. 5 can keep exploring; 33 can overextend themselves. Set clear project scope and workload boundaries. 5 owns innovation and adaptation; 33 owns impact and culture. Regular check-ins ensure both feel the work is sustainable and meaningful. Neither can spiral — deadlines matter for 5, boundaries matter for 33.`,
    tips: [
      'The 33 should guide without controlling. The 5 learns best through experience, not instruction',
      'The 5 should be open to the 33\'s wisdom. They\'re not trying to cage you, they\'re trying to help',
      'Find shared experiences that are both fun and meaningful, like travel with a purpose',
    ],
  },
  '6-and-7': {
    overview: `The 6 and 7 are a meeting of heart and mind. The 6 leads with emotion, care, and loyalty. The 7 leads with thought, analysis, and introspection. Together, you create a relationship that's both warm and deep.\n\nThe 6's warmth helps the 7 open up emotionally. The 7's depth helps the 6 think things through instead of always reacting from the heart. You soften each other's edges in productive ways.\n\nThe challenge is that the 6 can feel the 7 is emotionally distant, and the 7 can feel the 6 is emotionally overwhelming. You process differently, and that's okay, as long as you don't judge each other's style.`,
    loveInsight: `6 is drawn to 7's depth and reluctance to engage in shallow connection; 7 is attracted to 6's warmth that breaks through their natural reserve. 6's emotional openness is exactly what 7 needs but rarely allows themselves. 7's thoughtfulness and respect for boundaries is what 6 craves. There's mutual admiration here.

Romantically, 6 melts 7's reserve gradually. 7 appreciates that 6 doesn't demand constant emotional expressiveness from them — 6 is content with loyalty and presence. 6 gets the deep, steady love they crave; 7 gets space and understanding. When 7 does open up, it feels profound to both. There's real tenderness beneath the quietness.

The tension: 6 can feel emotionally starved by 7's withdrawal and need for space, interpreting it as coldness or rejection. 7 can feel pressured by 6's need for reassurance and constant emotional connection. 6 wants to talk about feelings; 7 wants to process alone. Also, 7's spiritual or intellectual focus can make 6 feel like their emotional needs are trivial. The solution is for 7 to initiate emotional connection sometimes, not wait for 6 to always pursue. And 6 needs to understand that 7's silence doesn't mean they don't care. Scheduled vulnerability conversations help both feel heard. It's possible if both stretch toward connection.`,
    friendshipInsight: `6 brings warmth and genuine care; 7 brings depth and respect. Together, they have meaningful conversations without superficiality. 6 feels truly understood by 7; 7 feels genuinely cared for by 6.

These friendships thrive in intellectual or spiritual contexts. They're great at long conversations about meaning and purpose, or quiet companionship.

The risk is 6 pursuing emotional connection that 7 isn't naturally offering, or 7 becoming so withdrawn that 6 feels the relationship is one-sided. They stay strong by both making effort — 7 initiating connection sometimes, 6 respecting 7's need for solitude. Regular check-ins about whether both feel truly cared for matter.`,
    workInsight: `6 is the team connector and relationship manager; 7 is the strategic thinker and analyst. 6 ensures everyone feels supported; 7 ensures decisions are well-founded. Together, they're both humane and rigorous.

They excel in roles combining human care with strategic thinking — management, education, research that matters, HR leadership. Their work is both effective and considerate.

The professional challenge is 7's tendency to withdraw during conflict or stress, leaving 6 uncertain. 6 might pursue while 7 retreats, creating distance. Set clear communication norms: regular check-ins about how things are actually going, not just surface-level status. 7 needs to show up even when uncomfortable. 6 needs to give 7 space to process before expecting conversation. Both need to honor their different communication styles while maintaining connection.`,
    tips: [
      'The 7 should express care in ways the 6 can feel: words, small gestures, presence',
      'The 6 should give the 7 space to process without interpreting withdrawal as rejection',
      'Find activities that engage both heart and mind: travel, museums, cooking, deep conversations',
    ],
  },
  '6-and-8': {
    overview: `The 6 and 8 create a relationship where power meets heart. The 8 is ambitious, driven, and materially focused. The 6 is caring, loyal, and emotionally focused. Together, you build a life that's both successful and meaningful.\n\nThe 8 respects the 6's strength, not physical strength, but emotional resilience and moral authority. The 6 respects the 8's ability to provide and protect. There's a mutual admiration that runs deep.\n\nThe tension comes from priorities. The 8 can prioritize work over family. The 6 can prioritize family over everything else. Finding a balance where both feel honored is the ongoing negotiation.`,
    loveInsight: `8 is drawn to 6's quiet strength and genuine care—someone who actually sees them beyond the ambition. 6 admires 8's confidence and drive, feeling safe in the presence of someone so sure of themselves. There's real magnetism here: 8 protects, 6 softens.

In day-to-day life, this works because they're both action-oriented. 8 builds empires; 6 builds a home. 8 comes home exhausted from a brutal negotiation, and 6 is there with understanding and a real meal. 8 appreciates being tended to without needing to explain it. 6 loves feeling essential without being taken for granted.

The friction: 8 can prioritize work over the relationship, leaving 6 feeling abandoned. 6 can become resentful if they feel like a support system rather than a partner. The fix is explicit conversation about shared goals. 8 needs to schedule real time—not leftovers—for the relationship. 6 needs to claim their own ambitions, not subsume them into 8's empire.`,
    friendshipInsight: `6 brings loyalty and genuine interest; 8 brings direction and opportunity. 6 is the friend who remembers you've been stressed and checks in. 8 is the friend who opens doors. Together, they're both dependable in wildly different ways—one emotionally, one strategically.

This friendship thrives in real-world contexts: starting a business together, supporting each other through major life changes, or being the couple-friends that other couples actually trust. They're not surface-level—both value depth—so they bond over meaningful stuff, not just hanging out.

The danger is 6 starting to feel like 8's project rather than their friend. If 8 becomes too focused on their own goals, 6 can feel used. The antidote is 8 asking genuine questions and following up. 6 should also push back on plans—have your own thing going so it's reciprocal.`,
    workInsight: `8 leads the charge; 6 ensures the team stays healthy and connected. 8 is the visionary or manager, pushing metrics and growth. 6 is the person who notices morale, mentors junior staff, and makes sure decisions don't bulldoze people. They balance each other's blind spots naturally.

These two excel in industries where ambition meets service: nonprofits with big budgets, healthcare startups, family businesses scaling up, real estate development with community focus. Anywhere growth and humanity both matter.

The challenge: 8 can override 6's concerns about people, and 6 can slow 8 down with what feels like hesitation. They need a decision framework going in. 8 should listen when 6 flags burnout or retention problems—6 is usually right. 6 should understand that some discomfort drives growth. Meet in the middle with weekly check-ins about what's working.`,
    tips: [
      'The 8 should come home fully, not just physically, but emotionally present',
      'The 6 should support the 8\'s ambition without resentment. It\'s not a rival for your attention',
      'Build shared rituals that keep you connected: dinner together, weekend mornings, family time',
    ],
  },
  '6-and-9': {
    overview: `The 6 and 9 are one of the strongest matches in numerology. Both of you are compassionate, idealistic, and driven by a desire to serve. The 6 serves the people closest to them: family, friends, community. The 9 serves humanity at a larger scale. Together, your caring nature creates a relationship that feels spiritually aligned.\n\nThere's a natural soul-level recognition between 6 and 9. You share values so deeply that many things go unspoken. You just understand. The relationship feels meant to be, not because of fate, but because your energies are so naturally complementary.\n\nThe challenge is that both of you can give to the point of exhaustion. Make sure you're filling your own cups, not just pouring into the world.`,
    loveInsight: `Both feel the world's pain and want to fix it. That shared compassion is magnetic. 9 sees 6's devotion and feels recognized; 6 sees 9's wisdom and feels inspired. They're both drawn to meaning in love, not just chemistry. There's an almost spiritual ease between them—like they've known each other before.

Day-to-day, this is warm and supportive. Neither is demanding or ego-driven in the petty sense. 6 loves actively; 9 loves broadly but genuinely. They make space for each other's inner worlds without needing constant reassurance. Conflicts get resolved because both genuinely want the other to be okay. It feels like being on the same team.

The risk: Both can get lost in abstract ideals and forget about the actual relationship. 9 can become emotionally distant—caring about humanity while seeming unavailable to 6. 6 can overfunction, managing 9's life while 9 retreats into philosophy. The antidote is grounding: actual dates, physical affection, conversation about feelings, not just causes.`,
    friendshipInsight: `This is the friendship where you both believe in something bigger. 6 shows up with food and help; 9 brings perspective and hope. They make each other feel less alone in caring deeply about the world. There's no judgment here—just mutual understanding.

These friends thrive in contexts that matter: volunteering together, being each other's sounding boards during career shifts, raising kids with shared values. They're the ones who remember each other's struggles and check in when it matters.

The trap: They can become insular together, reinforcing each other's sense that the world's problems are theirs to solve. Both can spin out in shared anxiety about bigger issues. The fix is having friendships and interests outside this pairing. Also, 6 should call 9 out if 9's wisdom is becoming detachment. 9 should appreciate 6's action as equal to their reflection.`,
    workInsight: `9 sees the big picture; 6 executes with heart. 9 identifies the mission; 6 makes sure it's sustainable and that people are actually helped. Together, they create impact. 9 is bored by logistics; 6 is energized by them. It's a natural division of labor.

This pairing excels in social impact organizations, education, healthcare, nonprofits—anywhere purpose matters as much as profit. They're both uncomfortable in purely extractive environments.

The friction: 9 can seem idealistic to the point of impracticality, and 6 can get frustrated with big visions that have no operational plan. 9 might call 6 limited; 6 might call 9 spacey. The reality is they need each other. 9 should trust 6's execution questions instead of seeing them as cynicism. 6 should help 9 think bigger instead of just saying "it won't work."`,
    tips: [
      'Protect your energy together. Set boundaries with the outside world so you can recharge as a couple',
      'Celebrate each other\'s individual service, not just shared projects',
      'Remember that your relationship itself is a form of service. Take care of it',
    ],
  },
  '6-and-11': {
    overview: `The 6 and 11 both feel deeply. The 6 feels through emotional empathy. The 11 feels through spiritual intuition. Together, you create a relationship where almost nothing goes unspoken. You sense each other's moods, needs, and truths.\n\nThe 6 provides the emotional safety the 11 needs to be fully themselves. The 11 provides the spiritual depth the 6 craves but doesn't always know how to access. It's a warm, intuitive pairing that builds deep trust.\n\nThe challenge is emotional overwhelm. Both of you are absorbers. You take in the feelings around you. If external stress is high, you can spiral together. You need grounding practices, individually and together.`,
    loveInsight: `Both feel everything deeply and without apology. 6 recognizes 11's sensitivity as a gift, not a flaw; 11 feels seen and safe with 6's steady care. There's immediate emotional harmony. 11 doesn't have to manage their own feelings or explain their intuition—6 just gets it. 6 feels valued for being the rock.

Romantically, this is tenderness without being fragile. 6 shows love through reliability; 11 shows it through intuition and insight. 6 comes home to find 11 has sensed something was off and made space for it. 11 comes home to find 6 has handled the practical stuff so they can rest. It's a quiet dance where each person's strength exactly meets the other's need.

The risk: Both can be passive-aggressive instead of direct. 6 can martyr themselves ("I'll just handle everything"), and 11 can disappear into anxiety. Neither naturally pushes back hard. The fix is establishing explicit check-ins. 6 should ask for what they need instead of assuming 11 will feel it. 11 should work on communicating concerns out loud instead of withdrawing.`,
    friendshipInsight: `This friendship is built on real understanding. 6 is loyal and present; 11 is intuitive and deeply attuned. They can sit in silence and feel completely comfortable. They don't need to perform for each other—just be.

These friends thrive in contexts where depth matters: late-night conversations, supporting each other through grief or big life changes, being each other's first call in a crisis. They're not the flashy friendship group, but they're the ones that endure.

The danger is co-dependence or mutual withdrawal. If things get hard, both might retreat instead of talking. 6 might start managing 11's emotions, and 11 might become emotionally unavailable. The antidote is external friendships and professional support if needed. Also, sometimes one of you needs to be the brave one and say the hard thing out loud.`,
    workInsight: `6 brings steady execution and emotional intelligence; 11 brings insight and innovation. 6 is the one who sees how decisions affect people; 11 is the one who sees what should exist that doesn't yet. Neither dominates—they complement.

This pairing works in creative fields, wellness, coaching, therapy, organizational development—anywhere intuition and care matter. They're both uncomfortable with purely competitive or extractive work.

The challenge: 6 can feel like they're doing all the heavy lifting while 11 works from intuition and instinct. 11 can feel micromanaged by 6's need for process. The reality is 11's insights often save massive amounts of work—6 needs to recognize that. 6's systems make 11's ideas actually happen—11 needs to appreciate that. Regular feedback helps. 6 should ask 11 to explain their thinking. 11 should engage with 6's processes instead of dismissing them.`,
    tips: [
      'Develop individual grounding practices so you don\'t absorb each other\'s stress',
      'The 6 should support the 11\'s spiritual needs without trying to manage them',
      'The 11 should appreciate the 6\'s practical emotional care. It\'s how they show love',
    ],
  },
  '6-and-22': {
    overview: `The 6 and 22 create a partnership where vision is supported by heart. The 22 builds big things. The 6 makes sure those big things serve people. Together, you create something that's both impressive and humane.\n\nThe 22 provides direction, ambition, and structural thinking. The 6 provides care, warmth, and community building. In an organization or a family, this is the combination that creates cultures people thrive in.\n\nThe challenge is that the 22 can become so focused on the mission that they neglect the 6's emotional needs. The 6 can feel like they're always supporting the 22's vision without having their own. Balance matters.`,
    loveInsight: `6 is captivated by 22's vision and ambition; 22 is grounded by 6's authenticity and care. 22 is used to being alone at the top; 6 offers partnership without needing to be the visionary. 6 sees 22's big plans and doesn't feel threatened—they feel excited to be part of it. 22 feels supported without being managed.

In daily life, 6 handles the home and emotional landscape while 22 builds the future. 6 reminds 22 to eat, to rest, to remember why the vision matters beyond the achievement. 22 gives 6 purpose and scope—shows them their care can ripple outward. They're building something together, even if 22 is more visible.

The friction: 22 can become so focused on their empire that they neglect the relationship, leaving 6 feeling like a supporting character in someone else's story. 6 might enable this by being too accommodating. The fix is 6 setting boundaries early and often. 22 needs to schedule real time and mean it. 6 needs to be clear: your vision is amazing, but so am I, and I need to matter equally.`,
    friendshipInsight: `6 is the loyal friend who believes in 22's crazy big plans when others doubt. 22 is the friend who opens doors and makes the impossible seem possible. 6 keeps 22 human; 22 keeps 6 thinking bigger.

This friendship thrives in building contexts: starting something together, supporting a major life project, or being the friendship that actually lasts through dramatic success. They're not surface—both value loyalty and meaning.

The trap: 6 can become subsumed into 22's projects, their own dreams shelved indefinitely. 22 can take 6's loyalty for granted. The fix is 6 having their own ambitions that 22 actively supports. Neither should ask the other to give up growth for the friendship. If you're truly aligned, you both rise.`,
    workInsight: `22 architects the vision and scale; 6 ensures the people and culture can sustain it. 22 is the builder who wants to change the world; 6 is the guardian who makes sure it doesn't burn people out in the process. This is incredibly powerful in growing organizations.

They excel in scaling nonprofits, family businesses going national, real estate development with community impact, or startups with social mission. Anywhere vision and values both matter.

The challenge: 22 can view 6's concerns about culture or sustainability as obstacles. 6 can slow things down with what feels like caution. They need mutual respect going in. 22 should genuinely listen when 6 flags problems—6's radar for human cost is usually accurate. 6 should understand that some chaos is part of growth. Communicate regularly about what success actually looks like.`,
    tips: [
      'The 22 should regularly check in with the 6\'s emotional needs, not just the project\'s needs',
      'The 6 should maintain their own vision alongside supporting the 22\'s',
      'Build something together that serves both your need for impact (22) and connection (6)',
    ],
  },
  '6-and-33': {
    overview: `The 6 and 33 are kindred spirits in service. Both of you are wired to care for others: the 6 through direct emotional support, the 33 through teaching and spiritual guidance. Together, you create a healing force that touches everyone around you.\n\nThe 33 operates at a higher spiritual frequency than the 6, but the core energy is the same: love in action. You understand each other at a deep level. The 33 teaches. The 6 nurtures. Both are forms of the same gift.\n\nThe challenge is mutual depletion. Two givers who never receive will both eventually burn out. This pair must fiercely protect their own energy and learn to accept help.`,
    loveInsight: `Both are driven by service and wisdom, so there's immediate understanding about what matters. 33 is drawn to 6's devoted care; 6 is drawn to 33's healing presence. Neither keeps score or plays games—both naturally lead with their better selves. The relationship feels aligned at a soul level, like you're both committed to something bigger than just romance.

Day-to-day, this is warm and purposeful. 33 teaches; 6 nurtures. There's space for both to be the healer and the one being healed. 33 doesn't feel like they need to earn 6's devotion, and 6 doesn't feel like a student in someone else's classroom. It's partnership built on shared values, not power dynamics.

The risk: Both can give too much and receive too little. 33 can become so focused on their teaching mission that 6 feels abandoned. 6 can subsume their own needs to support 33's work. The fix is explicit reciprocity. 6 needs to ask for what they need and mean it. 33 needs to receive 6's care without deflecting or intellectualizing. Sometimes being healed is the teaching.`,
    friendshipInsight: `This is the friendship where you both believe you can make a real difference. 6 shows up with practical support; 33 brings wisdom and perspective. They make each other feel less alone in their calling. There's mutual respect here—not competition over who's more enlightened.

These friends thrive in contexts that require both wisdom and action: mentoring younger people, running nonprofits, raising kids together, being each other's anchor through spiritual growth. They're the ones who will tell you hard truths and still love you.

The trap: Both can become self-righteous or judgmental of people outside this pairing who don't share their values. They can also reinforce each other's martyr complexes—who's sacrificed more, who's given more. The antidote is staying connected to people who challenge them. Also, celebrate joy and play, not just meaning and service.`,
    workInsight: `33 provides wisdom, teaching, and healing; 6 ensures it's structured, sustained, and actually helps people. 33 has the vision for transformation; 6 has the patience to make it systematic. They're both rare people who want work to matter.

This pairing excels in education, healthcare, coaching, nonprofits, spiritual organizations—anywhere authentic transformation is the goal. They're uncomfortable in purely transactional environments.

The friction: 33 can be visionary without being practical, and 6 can be so focused on systems that they lose sight of the bigger purpose. 33 might think 6 is limiting; 6 might think 33 is impractical. The reality is they need each other. 33 should respect 6's operational excellence as part of the mission. 6 should help 33 scale their wisdom without diminishing it. Regular alignment conversations about mission help.`,
    tips: [
      'Schedule regular self-care that\'s non-negotiable. You both default to giving',
      'Learn to receive help, compliments, and support without deflecting',
      'Do something fun together that\'s just for you, not for anyone else\'s benefit',
    ],
  },
  '7-and-8': {
    overview: `The 7 and 8 create a relationship of mutual respect. The 7 respects the 8's confidence and material power. The 8 respects the 7's intellect and depth. There's an admiration here that doesn't require constant validation.\n\nThe 8 operates in the material world. The 7 operates in the intellectual and spiritual world. Together, you cover both dimensions. The 7 provides the wisdom. The 8 provides the execution.\n\nThe challenge is that these worlds can feel disconnected. The 7 might find the 8 too focused on money. The 8 might find the 7 too detached from reality. Bridging the gap requires intentional understanding.`,
    loveInsight: `8 is drawn to 7's depth and intellect—here's someone who thinks differently than most, who won't be dazzled or intimidated by 8's power. 7 is drawn to 8's confidence and clarity—someone who actually moves through the world while 7 is still analyzing it. There's real respect, almost like two different types of brilliance recognizing each other.

In the relationship, 8 leads outward; 7 explores inward. 8 appreciates coming home to someone who's genuinely interested in their own inner world—7 doesn't need constant reassurance or drama. 7 appreciates 8's decisiveness without judgment about 7's need for solitude. When it works, it's surprisingly comfortable.

The friction: 8 can feel frustrated by 7's hesitation and introspection. To 8, 7 seems passive or uncertain. 7 can feel bulldozed by 8's need to dominate and control. 7 also needs emotional connection 8 doesn't naturally offer. The fix is 8 respecting 7's need for reflection as valid thinking, not avoidance. 7 needs to assert what they want instead of just analyzing it. Both need to create space for emotional vulnerability, not just respect.`,
    friendshipInsight: `8 brings direction and opportunity; 7 brings insight and reflection. 8 will open doors; 7 will question whether you actually want to walk through them. Neither wastes time on surface friendship—both expect depth and integrity.

These friends thrive in contexts where strategy and meaning intersect: planning a big life change, starting a business with shared values, or being the friendship where you're both growing in real ways. You trust each other's judgment even when you disagree.

The danger: 8 can steamroll 7's concerns, and 7 can critique 8's choices without offering support. 8 might feel 7 doesn't have their back; 7 might feel pressured to act before they're ready. The fix is explicit communication about decision-making. 8 should ask 7's thinking before dismissing hesitation. 7 should say yes to some things without analyzing them forever. Respect each other's different paces.`,
    workInsight: `8 drives the business or project forward with ambition and strategy; 7 ensures decisions are grounded in reality and wisdom. 8 sees what's possible; 7 questions whether it's wise. This can be powerful if both are heard.

They excel in consulting, strategic planning, philosophy of business, specialized industries that require both ambition and deep thinking. 8 handles growth; 7 handles the thinking behind it.

The challenge: 8 can dismiss 7's concerns as over-analysis, and 7 can slow things down with endless questioning. 8 needs to respect that 7's input often saves major mistakes—that's not caution, that's wisdom. 7 needs to understand that some action creates clarity that thinking never will. Both benefit from 8 making final decisions while genuinely considering 7's input.`,
    tips: [
      'The 8 should be curious about the 7\'s inner world. Not everything of value has a price tag',
      'The 7 should appreciate the 8\'s material focus. Stability and resources enable freedom',
      'Find shared interests that bridge the material and intellectual: investments, technology, architecture',
    ],
  },
  '7-and-9': {
    overview: `The 7 and 9 share a philosophical bond. Both of you are seekers. The 7 seeks truth through analysis and introspection, the 9 seeks truth through compassion and service. Together, you create a relationship that's intellectually and ethically rich.\n\nThe 9 brings warmth that the 7 doesn't naturally generate. The 7 brings analytical depth that the 9 respects. You have the kind of conversations that go on for hours, about meaning, purpose, truth, and how the world works.\n\nThe challenge is that both of you can be emotionally distant in different ways. The 7 retreats into the mind. The 9 diffuses attention across too many people. Making time for intimate, one-on-one connection is essential.`,
    loveInsight: `Both are seeking something real, something meaningful. 9 is drawn to 7's intellectual honesty; 7 is drawn to 9's compassion and wisdom. There's philosophical harmony here—you're both asking the same big questions about meaning and impact. Romance feels like a natural extension of mutual understanding.

Day-to-day, this works because neither demands constant reassurance or drama. 7 loves 9's ability to hold complexity without needing to fix it. 9 loves 7's refusal to compromise their integrity. You're both thinkers who also care deeply. The relationship can be quiet and grounded, focused on growth and aligned values.

The friction: Both can become emotionally distant, especially if life gets overwhelming. 9 can seem to care about the world more than the relationship; 7 can retreat into analysis instead of connection. Neither naturally initiates affection or vulnerability. The relationship can feel respectful but lacking spark. The fix is creating intentional intimacy: date nights that pull you out of your heads, physical affection that you schedule if necessary, and sometimes just sitting with feelings instead of thinking about them.`,
    friendshipInsight: `This friendship is built on shared curiosity and values. 7 brings insight; 9 brings wisdom and broader perspective. You can talk about ideas, philosophy, the future, meaning without judgment. You trust each other's moral compass.

These friends thrive in contexts where ideas and values matter: discussing books and philosophy, supporting each other through career changes, exploring spiritual growth together. You're not the flashy friend group, but you're reliable and real.

The trap: Both can become insular—only valuing each other's perspectives while quietly dismissing others. You can reinforce each other's sense of being different or above the fray. Also, neither naturally reaches out for help, so the friendship can drift through busyness. The fix is intentional check-ins and expanding your friendship circle. Also, challenge each other occasionally instead of just nodding along.`,
    workInsight: `7 excels at analysis, strategy, and seeing what's underneath surface issues; 9 excels at big-picture vision and understanding impact across systems. Together, they create work that's both intellectually rigorous and purposeful.

This pairing thrives in nonprofits, social enterprises, policy work, research, or specialized consulting. Anywhere that requires thinking about broader implications and actual impact.

The challenge: Neither is naturally action-oriented, so projects can get lost in analysis. Both can be idealistic to the point of impracticality. You also might both hesitate to make hard decisions. The fix is one person taking ownership of deadlines and follow-through. 7 should respect 9's vision as valid even when it's harder to quantify. 9 should appreciate 7's rigor as serving the mission, not limiting it.`,
    tips: [
      'Make time for just the two of you. Both of you can get absorbed in your own worlds',
      'The 7 should engage with the 9\'s broader concerns, not just their own intellectual interests',
      'The 9 should respect the 7\'s need for solitude, and not fill every quiet moment with people',
    ],
  },
  '7-and-11': {
    overview: `The 7 and 11 are one of the most naturally aligned pairings in numerology. Both are seekers. Both are intuitive. Both live more in the inner world than the outer one. The connection between you is often felt before it's spoken.\n\nThe 7 seeks truth through thought and analysis. The 11 seeks truth through feeling and spiritual knowing. Together, you explore reality from every angle: rational and intuitive, scientific and mystical. The conversations between you are unlike anything either of you has with other people.\n\nThe challenge is grounding. Both of you can exist so deeply in the world of ideas and intuition that practical life falls apart. Bills, groceries, schedules: someone needs to handle the tangible stuff.`,
    loveInsight: `Both are deeply intuitive and introspective. 7 is drawn to 11's psychic sensitivity and soul-level understanding; 11 is drawn to 7's intellectual depth and spiritual seeking. This is recognition at the deepest level—like you're speaking to each other's essence. The connection feels almost fated, like you were meant to find each other.

Romantically, this works because both lead with inner awareness. 7 doesn't need to explain their need for solitude; 11 just understands. 11 doesn't need to justify their intuitive leaps; 7 respects that way of knowing. There's quiet comfort, mutual understanding, and space to be fully yourself. You're both healing for each other just by being present.

The risk: Both can become so interior that the relationship loses momentum or presence. You might retreat together into shared anxiety or overthinking. Neither pushes the other toward growth or joy. Affection can feel absent despite deep understanding. The fix is one partner occasionally being brave enough to initiate connection—suggest an adventure, ask for a vulnerable conversation, create something together that pulls you both outward.`,
    friendshipInsight: `This is soul-level friendship. 7 and 11 recognize each other as kindred spirits. You can sit in silence and feel completely understood. There's no performance, no masking—just real meeting.

These friendships thrive in contexts that allow depth and introspection: spiritual exploration together, being each other's anchor through major transitions, or simply having space to process your inner worlds without judgment. You're the friends who just get each other.

The danger: Co-dependence, where you reinforce each other's anxieties or withdrawal patterns. You can become so focused on inner work that external life falls apart. Neither might check in or offer practical support. The antidote is having other friendships and grounding practices. Also, sometimes you need to tell each other the hard truth out loud instead of just feeling it.`,
    workInsight: `7 brings analytical thinking and truth-seeking; 11 brings intuitive insight and the ability to see what others miss. Both can sense undercurrents and dynamics that others overlook. This is powerful in roles that require discernment and sensitivity.

They excel in coaching, spiritual work, psychology, research, education—anywhere intuitive understanding matters as much as analytical skill. Both are drawn to work that feels meaningful rather than purely transactional.

The challenge: Neither is naturally commanding or action-oriented. You might get stuck in planning or analyzing rather than executing. You also might be too sensitive to organizational dynamics and pull back when things get tense. The fix is one person taking responsibility for deadlines and follow-through. Both should develop their capacity to assert ideas confidently. Sometimes you need to be strategic, not just intuitive.`,
    tips: [
      'Handle the practical side of life intentionally. Schedule it, delegate it, or automate it',
      'The 7 should stay open to the 11\'s intuitive leaps. They often reach truths that logic can\'t',
      'The 11 should appreciate the 7\'s analytical approach. It validates and strengthens your intuitions',
    ],
  },
  '7-and-22': {
    overview: `The 7 and 22 bring wisdom and vision together. The 7 provides deep analysis and understanding. The 22 provides the ability to turn that wisdom into something real and lasting. Together, you build with both intelligence and intention.\n\nThe 22 values the 7's insights because they inform better building. The 7 values the 22's ability to manifest ideas into reality. It's a respectful pairing where both people feel their contributions genuinely matter.\n\nThe challenge is pace. The 22 operates with intensity and urgency. The 7 operates with patience and deliberation. The 22 needs to let the 7 think. The 7 needs to let the 22 build.`,
    loveInsight: `7 is drawn to 22's vision and power—here's someone building something real and meaningful. 22 is drawn to 7's intellectual depth and spiritual grounding. 7 respects the scope of what 22 is attempting; 22 respects 7's refusal to compromise integrity for achievement. There's genuine admiration here.

In daily life, 22 is focused outward on the vision; 7 is focused inward on truth. 7 can ground 22 when ambition gets too abstract. 22 can inspire 7 to contribute to something larger. When it works, 7 becomes the voice inside 22's head asking the right questions, and 22 helps 7 see that their wisdom actually matters in the world.

The friction: 22 can become so absorbed in building that 7 feels like a supporting player rather than a partner. 7 might withdraw into philosophy, and 22 might dismiss it as detachment from reality. 7 also needs more emotional presence than 22 naturally offers. The fix is 22 actively creating time for the relationship and asking 7 for their perspective before it's too late. 7 needs to engage with 22's vision instead of staying on the sidelines.`,
    friendshipInsight: `7 brings wisdom and critical thinking; 22 brings vision and the power to make things happen. 7 can challenge 22's big plans constructively; 22 can show 7 that thinking matters less than doing.

These friends thrive in building something together or supporting a meaningful project. You're not the social butterfly friend group—you're the friends working toward something that actually matters.

The trap: 7 can become 22's underapreciated conscience, and 22 can dismiss 7's concerns as lack of ambition. 7 might feel used; 22 might feel unsupported. The fix is 7 being more vocal about their own ambitions and 22 genuinely valuing 7's input as part of the vision, not external criticism.`,
    workInsight: `22 architects the vision and drives execution; 7 provides wisdom, analysis, and ensures decisions are grounded in truth. 22 knows where to go; 7 questions whether that's where you should go. This can be incredibly powerful if both are genuinely heard.

They excel in organizations with big vision and social impact, leadership roles where both strategy and wisdom matter, specialized industries requiring both ambition and depth.

The challenge: 22 can steam forward while 7 is still questioning fundamentals. 7 can slow things with endless analysis. The fix is clear decision-making authority with 22 genuinely consulting 7's perspective beforehand. 7 should understand some moves require courage, not just certainty. 22 should know that 7's hesitation often points to real problems worth addressing.`,
    tips: [
      'The 22 should value the 7\'s need for reflection. Rushing past wisdom is a mistake',
      'The 7 should support the 22\'s need for action. Perfect understanding isn\'t necessary before starting',
      'Find shared projects that require both deep thinking and tangible building',
    ],
  },
  '7-and-33': {
    overview: `The 7 and 33 connect through their shared interest in deeper truth. The 7 approaches truth through the mind: analysis, philosophy, research. The 33 approaches truth through the heart: teaching, healing, compassion. Together, you create wisdom that's both intellectually rigorous and spiritually warm.\n\nThe 33's teaching energy resonates with the 7's seeking nature. The 7 is the eternal student, and the 33 is the natural teacher. This creates a dynamic of mutual growth. The 7 learns from the 33's wisdom, and the 33 is sharpened by the 7's questioning.\n\nThe challenge is that the 7 can be skeptical of the 33's emotional approach, and the 33 can find the 7 too cerebral. Respecting different paths to truth is the key.`,
    loveInsight: `Both are seekers—7 of truth, 33 of healing and wisdom. There's spiritual harmony here. 33 is drawn to 7's refusal to accept easy answers; 7 is drawn to 33's genuine commitment to growth and service. You're both spiritual adults who don't confuse spirituality with escape.

Day-to-day, this is warm and grounded. 33's teaching presence feels like safety to 7; 7's intellectual honesty keeps 33 from becoming self-righteous. Both are naturally introspective, so you have space for inner work. The relationship supports both of you becoming more fully yourself.

The risk: Both can be so focused on internal growth that the relationship lacks spark or presence. 33's wisdom can feel like teaching rather than partnership. 7 can become a student rather than an equal. Neither naturally initiates joy or spontaneity. The fix is creating intentional experiences together that pull you out of your heads—adventure, play, physical connection. 33 needs to sometimes just be with 7 rather than helping them grow.`,
    friendshipInsight: `This is a friendship of mutual respect and genuine spiritual alignment. 7 brings intellectual inquiry; 33 brings wisdom and healing presence. You can explore deep questions together without judgment.

These friends thrive in contexts that allow growth and meaning: spiritual exploration, supporting each other through difficult transitions, or being the friendship that actually helps both people become better versions of themselves.

The danger: 33 can slip into a teaching dynamic, and 7 can become overly analytical about the friendship itself. Neither might create external structure to maintain connection. The antidote is intentionality—schedule time together, engage in shared activities, not just talking. Also, 33 should be a friend sometimes, not always a teacher.`,
    workInsight: `7 brings analysis, rigor, and truth-seeking; 33 brings wisdom, healing, and teaching. Together, they create work that's both intellectually credible and spiritually grounded. 7 keeps 33 honest; 33 keeps 7 connected to purpose.

They excel in education, coaching, spiritual organizations, nonprofits with social mission, or therapeutic roles. Anywhere authentic transformation and intellectual integrity both matter.

The challenge: 7 can be cynical about 33's idealism, and 33 can dismiss 7's questions as spiritual resistance. You also might both get so focused on the philosophical level that execution suffers. The fix is mutual respect for different strengths. 7 should support 33's vision while still asking good questions. 33 should appreciate 7's rigor as part of the service, not a limitation. Clear roles help.`,
    tips: [
      'Respect each other\'s path to truth. The mind and the heart aren\'t in competition',
      'The 7 should open to emotional learning, not just intellectual learning',
      'The 33 should appreciate the 7\'s questions. They sharpen your teaching, not weaken it',
    ],
  },
  '8-and-9': {
    overview: `The 8 and 9 bring together material power and humanitarian vision. The 8 knows how to acquire resources, build systems, and create wealth. The 9 knows how to direct those resources toward meaningful impact. Together, you're the philanthropist and the fundraiser.\n\nThe 9 gives the 8's ambition a moral compass. The 8 gives the 9's ideals practical muscle. When aligned, you create real-world change, not just dreaming about a better world, but actually building one.\n\nThe tension is values-based. The 8 can seem too focused on money to the 9. The 9 can seem too idealistic to the 8. Finding where profit and purpose overlap is the sweet spot.`,
    loveInsight: `8 is drawn to 9's wisdom and compassion—here's someone who actually cares about impact beyond personal power. 9 is drawn to 8's strength and vision—someone who can actually change the world, not just dream about it. There's real chemistry: 8's drive meets 9's idealism. Together, they feel like they could do something meaningful.

In daily life, 8 provides security and ambition; 9 provides wisdom and soul. 8 comes home having conquered something; 9 has been thinking about what really matters. 8 appreciates that 9 cares about impact. 9 appreciates that 8 creates the conditions for change. When aligned, this is powerful.

The friction: 8 can become so focused on winning that 9's moral concerns feel like obstacles. 9 can seem emotionally distant or uninvested in 8's goals. 9 might withdraw into idealism while 8 needs active support. 8 also needs more emotional presence than 9 naturally offers. The fix is regular check-ins about values alignment. 8 should genuinely listen when 9 flags ethical concerns. 9 should actively celebrate 8's accomplishments and show up as a partner, not just a sounding board.`,
    friendshipInsight: `8 brings power and opportunity; 9 brings wisdom and broader perspective. 8 can help 9 actually create impact; 9 can help 8 question whether the victory matters. They challenge each other in complementary ways.

These friends thrive in social impact contexts: starting a business together, working in nonprofits, building something with shared values. You're not casual—you both expect friendship to matter.

The trap: 8 can feel like they're doing all the work while 9 offers wisdom from the sidelines. 9 can feel judged by 8's ambition-focused approach. The fix is both actively participating in the friendship's shared goals. 8 should ask 9's perspective before dismissing it. 9 should get more hands-on in implementation, not just ideation.`,
    workInsight: `8 drives growth, strategy, and execution; 9 ensures it's aligned with impact and values. 8 is the visionary builder; 9 is the one questioning whether this vision actually serves. Together, they create work with both power and purpose.

This pairing excels in social enterprises, mission-driven companies, nonprofits scaling up, or any organization where both growth and values matter. You're both uncomfortable in purely extractive work.

The challenge: 8 can push for growth without considering collateral damage, and 9 can slow things with what feels like excessive caution. 8 might dismiss 9's concerns as idealistic; 9 might see 8's drive as amoral. The reality is you need each other. 8 should respect 9's integrity checks as part of the mission. 9 should understand that some calculated risk drives real impact. Regular alignment conversations help.`,
    tips: [
      'Find shared goals where success means both profit and impact. They\'re not mutually exclusive',
      'The 8 should respect the 9\'s values, not just their utility',
      'The 9 should respect the 8\'s practical approach. Resources enable change',
    ],
  },
  '8-and-11': {
    overview: `The 8 and 11 create an interesting polarity. The 8 is grounded in the material world: money, power, results. The 11 is attuned to the spiritual world: intuition, feeling, higher purpose. Together, you bridge the gap between the seen and the unseen.\n\nThe 11's intuition can guide the 8's decision-making in surprisingly effective ways. The 8's groundedness can help the 11 translate their insights into real-world impact. When the 8 listens to the 11's gut feelings, they often avoid mistakes that logic alone wouldn't catch.\n\nThe challenge is mutual understanding. The 8 may dismiss the 11's intuition as impractical. The 11 may see the 8 as spiritually unaware. Both assessments are incomplete.`,
    loveInsight: `8 is drawn to 11's intuitive depth and psychic sensitivity—here's someone who sees beyond the surface. 11 is drawn to 8's confidence and power—someone who actually trusts themselves. 8 feels less alone having someone who understands their inner intensity; 11 feels grounded by 8's certainty.

Day-to-day, 8 provides security and direction; 11 provides insight and emotional attunement. 8 comes home to someone who senses what they need. 11 comes home to someone who protects and provides. 8 appreciates that 11 doesn't need constant reassurance. 11 appreciates that 8's certainty creates safety for 11's sensitivity.

The friction: 8 can bulldoze 11's concerns or intuition, especially if it contradicts their plans. 11 can become anxious under 8's intensity and withdraw. 8 might feel 11 is emotionally unavailable or impractical; 11 might feel 8 is emotionally domineering. The fix is 8 genuinely asking for 11's intuitive input and considering it before deciding. 11 needs to voice concerns directly instead of withdrawing. Both should create space for 11's sensitivity without 8 pathologizing it.`,
    friendshipInsight: `8 brings power and opportunity; 11 brings intuition and insight. 8 opens doors; 11 senses which ones matter. They complement each other—one action-oriented, one introspective.

These friends thrive in contexts where both strategy and intuition matter: building something together, navigating major life changes, or being the friends who help each other make wise choices. You both value depth and loyalty.

The danger: 8 can dismiss 11's intuition as indecision, and 11 can feel unheard or judged. 8 might steamroll plans while 11 quietly resents it. The fix is 8 actively asking 11 for their sense of situations and trusting it. 11 should be more vocal about concerns instead of silently resenting. Mutual respect requires both speaking up.`,
    workInsight: `8 drives the business or strategy forward; 11 provides intuitive insight and senses dynamics others miss. 8 leads; 11 advises. This works well if 8 genuinely values 11's input.

They excel in leadership, consulting, strategic roles, or creative fields where intuition and strategy both matter. 8 is comfortable with authority; 11 is comfortable with complexity.

The challenge: 8 can dismiss 11's concerns as too abstract or emotional. 11 can feel unheard or undervalued. You also might struggle with different paces—8 wants to move, 11 wants to reflect. The fix is 8 checking in with 11 before big decisions. 11 should be willing to move forward even with incomplete certainty. 8 should recognize that 11's hesitation often points to real problems worth investigating.`,
    tips: [
      'The 8 should take the 11\'s intuitions seriously. They\'re a form of intelligence, not wishful thinking',
      'The 11 should present insights in ways the 8 can act on, with specifics, not just feelings',
      'Balance material goals with spiritual meaning. The best outcomes honor both',
    ],
  },
  '8-and-22': {
    overview: `The 8 and 22 together are one of the most powerful combinations in numerology. Both are builders. Both think big. Both have the discipline and drive to make massive things happen.\n\nThe 8 brings material authority and strategic thinking. The 22 brings visionary architecture and spiritual purpose. Together, you don't just build businesses, you build institutions, movements, legacies.\n\nThe challenge is that two intense builder energies can become all-consuming. If the relationship becomes nothing but work and ambition, the human connection suffers. Build your relationship with the same intention you build everything else.`,
    loveInsight: `Two rare masters of ambition and scale recognizing each other. 8 is drawn to 22's visionary power and mastery; 22 is drawn to 8's confidence and drive. This is recognition at the highest level—two people who actually get what it takes to build something significant. The connection feels fated, like you were meant to find someone who understands this level of ambition.

In daily life, you're building something together or separately in alignment. 8 and 22 both understand sacrifice, focus, and the long game. You respect each other's strength without needing to compete or manage each other's egos. There's deep partnership here.

The friction: Two masters can create power struggles. Both want to lead, both have large visions. You might compete for dominance or clash on strategy. Also, you can both become so focused on building that the relationship becomes secondary—you're partners in the empire, not partners in life. The fix is establishing clear domains of authority and genuinely supporting each other's vision. Schedule real time for the relationship separate from the shared project. Sometimes just be together, not building.`,
    friendshipInsight: `This is the rare friendship between two people with genuine master-level ambition. You can only truly understand each other if you're both trying to do something significant. This friendship is about conquering the world together.

These friends thrive in building contexts: starting major ventures together, supporting each other through significant challenges, or being the friendship that actually creates real impact. You're not casual—you both expect loyalty and real partnership.

The trap: Rivalry over whose vision is bigger or more important. You might compete instead of collaborate. You can also become so focused on your shared mission that external relationships suffer. The antidote is being explicitly clear about whether you're competing or partnering. Also, sometimes you need friendships that aren't about building empires.`,
    workInsight: `8 and 22 together build the rarest kind of success—empire with vision. Both are strategic, both think big, both can actually execute at scale. This is powerful if roles are clear.

This pairing excels in entrepreneurship, large-scale business, transformational organizations, or roles requiring both ambition and visionary thinking. You're both comfortable with high stakes and long timelines.

The challenge: Power struggles over strategy, vision, and direction. You might have different ideas about how to build, and both fight fiercely instead of compromising. You also might neglect people and culture in pursuit of the vision. The fix is explicit partnership agreements—who decides what, and you respect that. Regular strategy sessions help align. Also, hire strong people managers to handle what neither of you naturally excels at. Both should appreciate each other's strengths rather than competing.`,
    tips: [
      'Make time for connection that isn\'t about building something. Just be human together',
      'The 22 should value the 8\'s strategic mind as much as the 8 values the 22\'s vision',
      'Build your relationship with the same intentionality you bring to your projects',
    ],
  },
  '8-and-33': {
    overview: `The 8 and 33 bring together ambition and compassion. The 8 knows how to build and accumulate. The 33 knows how to teach and heal. Together, you direct power toward service.\n\nThe 33 helps the 8 see beyond material success to meaningful impact. The 8 helps the 33 turn their wisdom into something that reaches more people. It's the difference between a good teacher and a teacher with a platform.\n\nThe tension comes from different definitions of success. The 8 measures results. The 33 measures transformation. When you align these, results that transform, the partnership is extraordinary.`,
    loveInsight: `8 is drawn to 33's wisdom and healing presence—here's someone who cares about impact beyond personal power. 33 is drawn to 8's confidence and strength—someone who can actually create real-world change. There's respect here: 8 recognizes 33's rare depth, 33 recognizes 8's rare capacity to build.

Romantically, 8 provides security and vision; 33 provides wisdom and soul-centered guidance. 8 builds; 33 teaches about why it matters. 8 appreciates that 33 cares about the impact beyond ego. 33 appreciates that 8 can actually execute change. When aligned, this feels like partnership with real purpose.

The friction: 8 can become so focused on achievement that 33's moral wisdom feels like an obstacle. 33 can withdraw into teaching instead of being a true partner. 8 needs more emotional presence than 33 naturally offers. 33 can enable 8's workaholism by being too accommodating. The fix is regular check-ins about values alignment. 8 should genuinely listen when 33 raises ethical concerns. 33 should actively claim their own needs instead of sacrificing endlessly for 8's vision.`,
    friendshipInsight: `8 brings power and opportunity to create change; 33 brings wisdom about what change actually serves. 8 can help 33 impact the world; 33 can help 8 question whether the impact matters. They challenge each other toward better versions of themselves.

These friends thrive in social impact contexts: building mission-driven organizations together, supporting each other through leadership challenges, or being the friendship that actually creates healing in the world. You both expect friendship to matter deeply.

The trap: 8 can feel like they're doing all the work while 33 offers wisdom from the sidelines. 33 can feel like a consultee rather than a partner. The fix is both actively participating. 8 should ask 33's perspective before deciding. 33 should engage more directly in implementation, not just ideation.`,
    workInsight: `8 drives growth and vision; 33 ensures it's aligned with wisdom and service. 8 is the powerful builder; 33 is the conscious voice. Together, they create organizations with both power and purpose.

This pairing excels in nonprofits, mission-driven companies, leadership roles requiring both strategy and wisdom, or transformational work. You're both uncomfortable in purely extractive environments.

The challenge: 8 can push for growth without considering ripple effects, and 33 can slow things with excessive caution. 8 might dismiss 33's concerns as too idealistic; 33 might see 8's drive as unethical. You also might struggle with pace—8 wants speed, 33 wants sustainability. The fix is regular alignment conversations. 8 should respect 33's wisdom checks as part of the mission. 33 should understand that some speed is necessary for impact. Compromise on both.`,
    tips: [
      'The 8 should recognize that the 33\'s healing work has measurable value, even if it\'s hard to quantify',
      'The 33 should appreciate the 8\'s focus on sustainability. Purpose without resources doesn\'t last',
      'Find the overlap between material success and meaningful service. That\'s your sweet spot',
    ],
  },
  '9-and-11': {
    overview: `The 9 and 11 share a profound spiritual alignment. Both are idealistic, intuitive, and driven by something bigger than personal gain. The 9 expresses this through compassion and service. The 11 expresses this through intuitive vision and inspiration. Together, you feel like you're on a shared mission.\n\nThe 11 senses what the world needs. The 9 knows how to serve that need. The combination is naturally effective. The 11 intuits the direction and the 9 carries the compassion to act on it.\n\nThe challenge is grounding. Both of you can exist so deeply in the world of ideals and spiritual purpose that practical life falls apart. Someone needs to pay the bills and do the grocery shopping.`,
    loveInsight: `Both are rare souls who feel the world deeply. 9 is drawn to 11's intuitive wisdom and psychic sensitivity; 11 is drawn to 9's compassion and broader vision. There's spiritual harmony here—you're on the same wavelength about what matters. The connection feels fated, like two old souls recognizing each other.

In daily life, you're both nurturing and present. 9 loves broadly; 11 loves intuitively. You create space for each other's inner worlds without judgment. 11 doesn't need 9 to fix the world; 9 doesn't need 11 to be practical. There's permission here to be fully yourself.

The risk: Both can become emotionally interior, especially during stress. You might retreat together into shared anxiety or idealism instead of facing actual problems. Neither naturally pushes the other toward growth or joy. Affection can feel absent despite deep understanding. The fix is scheduling intentional connection—dates that pull you out of your heads, physical touch, conversations specifically about feelings. Sometimes one of you needs to be brave and initiate lightness.`,
    friendshipInsight: `This is soul-level friendship. 9 and 11 recognize each other as kindred spirits. You're both idealistic, intuitive, and deeply feeling. You understand each other without explanation.

These friends thrive in contexts that allow depth and shared purpose: spiritual exploration, supporting each other through major life changes, or being the friends who help each other navigate a complex world. You're not surface-level—you both expect real connection.

The danger: Co-dependence, where you reinforce each other's patterns of giving too much or withdrawing when overwhelmed. You can become so focused on inner work that external life suffers. Neither might offer practical help or check in with necessary consistency. The antidote is having other friendships and grounding practices. Also, sometimes you need to tell each other hard truths out loud instead of just feeling them intuitively.`,
    workInsight: `9 brings vision and compassion; 11 brings intuitive insight and the ability to sense what others miss. Together, they create work that's both purposeful and wise. Both are drawn to meaningful work and create space for authenticity.

They excel in coaching, spiritual work, nonprofits, education, psychology—anywhere intuitive understanding and genuine care matter. Both are uncomfortable in purely transactional environments.

The challenge: Neither is naturally action-oriented or commanding. You might get stuck in planning or discussion without moving forward. You can also be too sensitive to organizational dynamics and pull back when things get tense. You need external structure and clear deadlines. The fix is one person taking responsibility for execution and follow-through. Both should develop confidence in asserting ideas. Sometimes moving forward imperfectly is more important than having all the right answers.`,
    tips: [
      'Handle practical life intentionally. Automate, delegate, or schedule the mundane stuff',
      'Stay present with each other in daily life, not just during deep conversations',
      'Ground your shared idealism in specific, actionable projects. Vision without action creates frustration',
    ],
  },
  '9-and-22': {
    overview: `The 9 and 22 together create real-world impact. The 9 provides the humanitarian vision, the "why." The 22 provides the structural power to build it, the "how." Together, you don't just dream about changing the world; you actually do it.\n\nThe 9 keeps the 22 focused on what matters: people, purpose, ethics. The 22 keeps the 9 grounded in what's possible: structure, systems, execution. It's one of the most effective partnerships for large-scale positive change.\n\nThe tension is between the 9's idealistic flexibility and the 22's structural rigidity. The 9 wants to adapt the mission as needs evolve. The 22 wants to stick to the plan. Both instincts have value.`,
    loveInsight: `9 is drawn to 22's visionary power and genuine desire to create large-scale change; 22 is drawn to 9's wisdom and compassion about who that change actually serves. There's rare alignment here—you're both trying to build something significant, but 9 keeps 22 grounded in purpose and humanity.

Romantically, 22 provides vision and security; 9 provides wisdom and soul-centered direction. 22 is building; 9 is asking whether it serves. 22 appreciates that 9 cares about impact as much as ambition. 9 appreciates that 22 can actually execute the vision. When aligned, this feels like partnership with real purpose at scale.

The friction: 22 can become so absorbed in building that 9 feels secondary. 9 can seem to care about abstract ideals more than the actual relationship. 22 might dismiss 9's concerns as impractical; 9 might withdraw feeling unheard. The fix is regular check-ins about values alignment. 22 should genuinely ask 9's perspective about who this empire serves. 9 should be more direct about feeling neglected instead of just withdrawing.`,
    friendshipInsight: `9 brings wisdom and vision for positive change; 22 brings the power to actually build it. 9 can help 22 question whether the vision matters; 22 can help 9 actually create change. They challenge each other toward greater impact.

These friends thrive in building something significant together: social enterprises, nonprofits at scale, activism, or any context where vision and power combine. You're both committed to something larger than yourselves.

The trap: 9 can feel like their perspective is peripheral while 22 does the real work. 22 can feel unsupported in the actual building. The fix is both actively participating. 9 should engage more directly in implementation. 22 should ask 9's wisdom regularly and respect it. Both should celebrate shared progress.`,
    workInsight: `9 provides vision and wisdom about impact; 22 provides the strategic power to build at scale. 9 is the conscious voice; 22 is the capable builder. Together, they create organizations with both power and purpose.

This pairing excels in social enterprises, mission-driven organizations scaling up, nonprofits, or transformational work. You're both uncomfortable in purely extractive environments.

The challenge: 22 can push for growth without considering broader implications, and 9 can slow things with what feels like excessive questioning. 22 might dismiss 9's concerns as naive; 9 might see 22's speed as reckless. You also might struggle with pace. The fix is regular alignment conversations specifically about values and impact. 22 should respect 9's wisdom checks as strategic insight. 9 should understand that sometimes moving forward is necessary. Both need to compromise on speed and substance.`,
    tips: [
      'Balance mission with intimacy. Your relationship needs attention too, not just your projects',
      'The 9 should trust the 22\'s structural approach. It makes the mission sustainable',
      'The 22 should stay connected to the 9\'s values. Structure without purpose is just bureaucracy',
    ],
  },
  '9-and-33': {
    overview: `The 9 and 33 are both healers and teachers. Both of you are driven by service, compassion, and a desire to make people's lives better. The 9 serves through broad humanitarian action. The 33 serves through intimate teaching and healing. Together, your impact is both wide and deep.\n\nThere's a natural soul recognition between the 9 and 33. You share the same fundamental motivation: love in service. The 33 teaches what the 9 practices. The 9 practices what the 33 teaches. It's a feedback loop of purpose.\n\nThe challenge is depletion. Both of you give endlessly. If neither of you is filling your own cup, the partnership becomes two empty vessels trying to pour into each other.`,
    loveInsight: `Both are rare souls committed to healing and wisdom. 9 is drawn to 33's teaching presence and selflessness; 33 is drawn to 9's compassion and broader vision. There's spiritual alignment here—you're both trying to make the world better through service. The relationship feels like a calling you're answering together.

Day-to-day, you're both nurturing and present. 9 loves broadly; 33 loves through teaching and healing. You create space for each other's purpose. 33 doesn't need 9 to be practical; 9 doesn't need 33 to serve the world alone. There's partnership in purpose.

The risk: Both can give too much and receive too little. You might enable each other's self-sacrifice patterns. 33 can slip into teaching mode instead of being a true partner; 9 can become a student rather than an equal. Neither naturally pushes the other toward joy or personal fulfillment. The fix is explicit conversation about reciprocity. Both should claim their own needs as equal to serving others. 33 should sometimes just be with 9 without helping them grow. 9 should express needs directly instead of assuming 33 will intuitively know.`,
    friendshipInsight: `This is a friendship of aligned purpose and genuine care. 9 brings vision and broad compassion; 33 brings wisdom and healing presence. You understand each other's commitment to service without judgment.

These friends thrive in contexts that allow shared purpose: nonprofits, spiritual communities, mentoring relationships, or being the friends who actually help each other and others grow. You both expect friendship to have meaning.

The danger: Both can become so focused on serving others that the friendship itself gets neglected. Neither might reach out or check in consistently. You can also reinforce each other's martyr patterns—who's sacrificed more, who's given more. The antidote is scheduling intentional time together outside of shared service. Also, celebrate joy and play, not just meaning and growth. Sometimes rest is the service.`,
    workInsight: `9 provides vision and wisdom about broader impact; 33 provides healing presence and teaching. Together, they create work that genuinely transforms. 9 is the one asking who this serves; 33 is the one facilitating the actual healing or growth.

This pairing excels in nonprofits, education, coaching, spiritual organizations, healthcare—anywhere authentic transformation and service matter. You're both uncomfortable with extractive work.

The challenge: Neither is naturally commanding or action-oriented, so things can stall in planning. You might both become idealistic without execution. You also might struggle to enforce boundaries or have difficult conversations. The fix is one person taking responsibility for deadlines and forward momentum. Both should develop comfort with necessary authority. Also, hire people who excel at management and logistics—you both need that. Regular check-ins about actual progress help keep you grounded.`,
    tips: [
      'Prioritize self-care fiercely. You both give too much by default',
      'Create boundaries around your service work so your relationship gets energy too',
      'Celebrate the impact you\'ve already made instead of always focusing on what\'s next',
    ],
  },
  '11-and-22': {
    overview: `The 11 and 22 are both master numbers, which creates a relationship operating at a higher frequency than most. The 11 intuits. The 22 builds. Together, you see what needs to be created and then actually create it.\n\nThe 11 provides the spiritual vision. They sense what's needed, what's missing, what's coming. The 22 provides the structural power to manifest that vision into something tangible. It's the seer and the architect working in concert.\n\nThe challenge is intensity. Both master numbers carry heavy energy. The relationship can feel like a lot, emotionally, spiritually, practically. You need to actively create lightness and rest.`,
    loveInsight: `11 is drawn to 22's visionary power and mastery; 22 is drawn to 11's intuitive wisdom and soul-level insight. There's rare recognition here—you're both exceptional in different ways. 11 intuitively grasps what 22 is trying to build; 22 respects 11's wisdom without needing to dismiss it as impractical.

Romantically, 22 provides vision and security; 11 provides intuitive guidance and soul-centered wisdom. 22 is building; 11 is sensing what should be built. 22 appreciates that 11 understands the vision intuitively. 11 appreciates that 22 can actually execute. When aligned, this is balanced partnership.

The friction: 22 can become so absorbed in building that 11 feels secondary or misunderstood. 11 can withdraw into intuition and anxiety, leaving 22 feeling unsupported. 22 might push 11 toward action before 11 is ready; 11 might slow 22 down with concerns that feel abstract. The fix is 22 genuinely asking for 11's intuitive perspective and considering it before deciding. 11 needs to express concerns directly and help 22 understand the wisdom beneath them, not just the hesitation.`,
    friendshipInsight: `11 brings intuitive wisdom and insight; 22 brings vision and power to build. 11 can sense what 22 should build; 22 can execute 11's vision. They complement each other—one intuitive, one strategic.

These friends thrive in building contexts: creating something significant together, supporting each other through leadership challenges, or being the friendship that's trying to impact the world. You both expect loyalty and real partnership.

The trap: 22 can dismiss 11's intuitive concerns as impractical, and 11 can feel unheard or judged. 22 might steamroll plans while 11 quietly resents it. The fix is 22 actively asking for 11's sense of situations and genuinely considering it. 11 should be more vocal about concerns instead of silently withdrawing. Both should appreciate that the other sees something important.`,
    workInsight: `11 provides intuitive insight and wisdom; 22 provides visionary power and execution. 11 senses what matters; 22 builds it. This is powerful if 22 genuinely values 11's input.

They excel in leadership, strategic roles, mission-driven organizations, or creative fields where intuition and vision both matter. 11 is comfortable with complexity; 22 is comfortable with scale.

The challenge: 22 can dismiss 11's concerns as too abstract or emotional. 11 can feel unheard or undervalued. You also might struggle with different paces—22 wants to move, 11 wants to sense first. The fix is 22 checking in with 11 before big decisions. 11 should be willing to move forward even with incomplete certainty. 22 should recognize that 11's hesitation often points to real strategic problems worth investigating.`,
    tips: [
      'Build rest into your shared life intentionally. Both master numbers burn hot and need recovery',
      'The 11 should trust the 22\'s ability to manifest their visions. Let them build',
      'The 22 should trust the 11\'s intuitive guidance. Let them sense the direction',
    ],
  },
  '11-and-33': {
    overview: `The 11 and 33 are both master numbers, creating one of the rarest and most spiritually potent pairings. The 11 operates as the intuitive seer. The 33 operates as the compassionate teacher. Together, you create a relationship dedicated to spiritual growth and service.\n\nThe 11 sees the truth. The 33 knows how to share it. The 11 intuits what people need. The 33 knows how to give it. It's a partnership where spiritual gifts are amplified and directed toward genuine good.\n\nThe challenge is the weight of the spiritual mission. Both of you feel called to something larger than yourselves, and that calling can consume the personal relationship. Remember that your bond itself is sacred, not just your shared purpose.`,
    loveInsight: `Both rare master numbers meeting each other. 11 is drawn to 33's healing wisdom and selfless service; 33 is drawn to 11's intuitive depth and psychic sensitivity. There's spiritual alignment here—you're both exceptional souls committed to genuine growth and service. The connection feels fated.

Romantically, you're both intuitive and attentive. 33 teaches and heals; 11 intuits and deepens. You create space for each other's spiritual path. 33 doesn't need 11 to be practical; 11 doesn't need 33 to manage everything. There's partnership in purpose and presence.

The risk: Both can become so interior or service-focused that the actual relationship loses grounding. 33 can slip into teaching instead of being a true partner; 11 can become overly reliant on 33's wisdom. Neither naturally initiates joy or spontaneity. The fix is creating intentional experiences together that pull you out of your heads—adventure, play, physical connection. 33 should sometimes just be with 11 instead of helping them grow. 11 should claim their own wisdom as equal to 33's.`,
    friendshipInsight: `This is the rare friendship of two master souls. You recognize each other as exceptional. 11 brings intuitive insight; 33 brings wisdom and healing. You can support each other's spiritual work without judgment.

These friendships thrive in contexts that allow spiritual growth and service: spiritual communities, mentoring relationships, supporting each other through major transformations. You both expect friendship to have real meaning.

The danger: 33 can slip into a teaching dynamic, and 11 can become overly reliant. Neither might create external structure to maintain connection. You can also become insular—only valuing each other's perspectives. The antidote is intentionality and having other friendships. 33 should be a friend sometimes, not always a teacher. 11 should trust their own wisdom as equal.`,
    workInsight: `11 provides intuitive insight and wisdom; 33 provides healing presence and teaching power. Together, they create transformational work. 11 senses what's needed; 33 facilitates the healing or growth.

This pairing excels in coaching, spiritual work, psychology, education, healing organizations—anywhere genuine transformation matters. You're both uncomfortable with extractive work.

The challenge: Neither is naturally action-oriented or commanding. You might get stuck in planning without execution. You can also be too sensitive to organizational dynamics. The fix is one person taking responsibility for forward momentum and accountability. Both should develop confidence in asserting ideas. You also need people or systems who handle logistics and deadlines—that's not your zone. Regular check-ins about actual progress keep you grounded.`,
    tips: [
      'Protect your personal relationship from being consumed by your shared spiritual work',
      'Do ordinary, mundane things together. They\'re grounding for both of you',
      'Celebrate each other\'s individual gifts, not just your shared mission',
    ],
  },
  '22-and-33': {
    overview: `The 22 and 33 are both master numbers with complementary gifts. The 22 builds structures. The 33 fills them with meaning. Together, you create something that's both architecturally impressive and spiritually significant.\n\nThe 22 constructs the systems. The 33 ensures those systems serve human needs. It's the hospital designer and the head of patient care. The school builder and the master teacher. Together, you create institutions that genuinely improve people's lives.\n\nThe challenge is that both of you carry heavy energy. Master numbers demand a lot from their holders. Two master numbers together need to actively manage their energy and create space for rest.`,
    loveInsight: `Both are master numbers with rare gifts. 22 is drawn to 33's wisdom and healing power; 33 is drawn to 22's visionary mastery and ability to build at scale. There's recognition here—you're both exceptional in complementary ways. 22 builds empires; 33 ensures they serve. Together, you create something that actually matters.

Romantically, 22 provides vision and security; 33 provides wisdom and soul-centered direction. 22 is building; 33 is asking whether it serves humanity. 22 appreciates that 33 cares about impact beyond ego. 33 appreciates that 22 can actually execute the vision. When aligned, this is rare partnership.

The friction: 22 can become so absorbed in building that 33 feels secondary or like a voice of caution without real power. 33 can withdraw if 22 dismisses moral concerns. 22 might see 33's wisdom as slowing growth; 33 might see 22's speed as reckless. The fix is regular check-ins about values alignment. 22 should genuinely ask 33's perspective and consider it before deciding. 33 should be more direct about concerns instead of quietly resenting.`,
    friendshipInsight: `22 brings visionary power and building capacity; 33 brings wisdom and healing presence. 22 can help 33 impact the world; 33 can help 22 question whether the impact matters. They challenge each other toward greater good.

These friends thrive in building something significant together: social enterprises, mission-driven organizations, nonprofits at scale, or transformational ventures. You're both committed to something larger than personal gain.

The trap: 22 can dominate plans while 33 quietly resents not being heard. 33 can feel like a consultee rather than a true partner. The fix is both actively participating. 22 should genuinely ask 33's wisdom and respect it. 33 should engage more directly in building, not just advising. Both should celebrate shared vision and progress.`,
    workInsight: `22 drives growth and vision; 33 ensures it's aligned with wisdom and service. 22 is the visionary builder; 33 is the conscious voice. Together, they create organizations with rare power and purpose.

This pairing excels in large nonprofits, mission-driven scaling, social enterprises, or transformational organizations. You're both comfortable with complexity and committed to impact.

The challenge: 22 can push for growth without considering ripple effects. 33 can slow things with what feels like excessive caution. 22 might dismiss 33's concerns as idealistic; 33 might see 22's drive as amoral. You also might struggle with pace—22 wants speed, 33 wants sustainability. The fix is regular alignment conversations about values and impact. 22 should respect 33's wisdom checks as strategic foresight. 33 should understand that sometimes speed is necessary. Compromise on both.`,
    tips: [
      'Build rest and recovery into your shared life. Both of you operate at high intensity',
      'Let the 33 lead on people matters and the 22 lead on structural matters',
      'Celebrate what you\'ve built together  -  both of you tend to keep building without pausing to appreciate',
    ],
  },
  '1-and-1': {
    overview: `Two life path 1s in a relationship is like putting two CEOs in the same corner office. Both of you are wired to lead, to initiate, to be first. And that's exactly where the friction comes from, not a lack of respect, but a surplus of direction.\n\nThe good news? You genuinely understand each other's drive. When a 1 says "I need to do this my way," the other 1 actually gets it. There's a deep recognition there. But recognition doesn't prevent power struggles. If both of you need to be right, conversations become competitions.\n\nThis pairing works when you carve out separate territories. You lead here, I lead there. The moment you start competing for the same space, things get tense fast.`,
    loveInsight: `Romance between two 1s is intense and passionate. When it's good, it's electric. You're both confident, direct, and not afraid to go after what you want. The attraction is often immediate. But sustaining it requires something neither of you defaults to: compromise. If you can take turns being the one who yields, this relationship has real fire.

Neither of you is naturally wired to adapt. You both lead. On good days, that means you're a power couple: ambitious, aligned, unstoppable. On bad days, every decision becomes a standoff. You have to actively negotiate who decides what, and you have to mean it when you step back. That's harder than it sounds for two 1s.

The main friction point is control. When things go sideways, both of you instinctively want to take the wheel. Before you dig in, ask yourself: is this actually worth fighting over, or am I fighting because losing feels like failure? Sometimes yielding is the bravest move a 1 can make. The relationship survives when you both remember that.`,
    friendshipInsight: `As friends, two 1s can be an incredible force. You push each other to aim higher, take bigger risks, and stop playing small. The friendship works best when you're pursuing different goals, cheering each other on rather than running the same race. Competition between 1s kills friendships faster than almost anything.

This friendship thrives on mutual respect for each other's wins. You'll celebrate hard when your friend succeeds because you're not threatened by their victory. You need that—a friend who wants you to win without needing to win against you. When you find it, it's rock solid.

The danger is the zero-sum game. If you're both chasing the same promotion, the same partner, or the same spotlight, resentment creeps in. One of you starts to feel like the other person's success is your loss. Guard against that narrative. A true 1-and-1 friendship needs separate arenas.`,
    workInsight: `In business, 1 and 1 need clearly defined roles. Co-leadership without clear lanes creates chaos. But if one of you handles vision and the other handles execution, or you split responsibilities by domain, you can build something powerful. Just don't share a title.

The best 1-and-1 partnerships are founder-and-CEO situations where the roles don't overlap. One person sets the strategic direction, the other scales the operation. Or one handles the product, the other handles the market. The structure matters more than the skill.

The professional challenge is ego. Both of you believe your way is the right way. That's great for decisiveness, terrible for collaboration. You have to establish decision-making authority early and stick to it, even when you disagree with the call being made. The partnership breaks if you're constantly second-guessing each other.`,
    tips: [
      'Designate separate areas of responsibility so neither feels overridden',
      'Practice letting the other person win sometimes. It builds trust, not weakness',
      'Schedule time to appreciate each other instead of always planning the next move',
    ],
  },
  '2-and-2': {
    overview: `Two 2s together create a relationship drowning in empathy. You both feel everything: each other's moods, the tension in a room, the unspoken words between you. It's deeply intimate. It can also be deeply paralyzing.\n\nThe problem isn't a lack of love. It's a lack of action. Both of you are so focused on maintaining harmony that nobody makes decisions. You defer to each other endlessly. "What do you want?" "No, what do you want?" Until the pizza gets cold.\n\nThis pairing needs at least one of you to practice taking the lead sometimes. Not because leading is better than supporting, but because someone has to choose the restaurant.`,
    loveInsight: `In love, two 2s create a cocoon of emotional safety. You understand each other intuitively. The intimacy runs deep. But the relationship can become insular, a world of two that struggles to engage with the outside. Make sure you both maintain individual identities and friendships outside the relationship.

Day-to-day, you're attuned to each other in ways that feel almost psychic. You notice when something's off before it's spoken. You comfort without being asked. The relationship feels like a sanctuary. But that sanctuary can become a cage if you're both so focused on the relationship that you neglect your own growth and interests.

The main tension is enmeshment. The boundary between you gets blurry. You start to feel responsible for each other's emotional states. One person feels guilty for having a bad day because it affects the other. Conflicts become incredibly painful because you're both so sensitive. You have to actively maintain individual identities and friendships. Paradoxically, the relationship is stronger when you have separate lives.`,
    friendshipInsight: `As friends, two 2s are the ultimate support system. You listen, validate, comfort. The friendship is a sanctuary. But it can also become an echo chamber where neither of you pushes the other to grow. Challenge each other sometimes, gently, but honestly.

This friendship is about presence and understanding. You don't need grand gestures or frequent contact. You just need to know the other person gets it. When one of you is struggling, the other shows up. It's a deeply loyal bond.

The limitation is that the friendship can become stuck. You're both so good at making space for each other's pain that you never move past it. One or both of you gets comfortable in struggle. The friendship needs some challenge: gentle nudges toward growth, new experiences, different perspectives. Without that, the friendship becomes a comfortable stagnation.`,
    workInsight: `At work, two 2s create harmony but struggle with direction. You're great at team dynamics, mediation, and interpersonal work. But someone needs to set the agenda. If you're working together, designate decision-making roles clearly.

The 2-2 team is best positioned in customer-facing roles, HR, counseling, or any field where understanding people matters. You create welcoming environments. But you can struggle with hard decisions because you're both conflict-averse. You want everyone to feel good, which sometimes means avoiding necessary but painful changes.

The professional challenge is conflict avoidance. When something needs to be decided that will upset someone, you both hesitate. The work doesn't move forward. You need a third person or a process that enforces decision-making. You also need to remember that sometimes saying no to one person is the kindest thing you can do for the team.`,
    tips: [
      'Take turns being the decision-maker. Literally alternate who picks dinner, plans the weekend, etc.',
      'Don\'t mistake harmony for health. Sometimes you need honest disagreement to grow',
      'Pursue individual goals alongside shared ones to prevent codependency',
    ],
  },
  '3-and-3': {
    overview: `Two 3s together is a burst of creative energy. You're both expressive, social, charming, and full of ideas. The room lights up when you walk in together. There's laughter, storytelling, and a genuine joy of expression.\n\nThe problem? Nobody's driving. Both of you are great at starting things and terrible at finishing them. You generate ideas faster than you can execute them. Without grounding energy from somewhere else in your charts, things stay exciting but never quite land.\n\nThis pairing needs intentional structure. Not because structure is fun (it's not, for either of you) but because your creative gifts deserve follow-through.`,
    loveInsight: `In romance, two 3s create a relationship of lightness and fun. You make each other laugh. You're creative together. The relationship rarely feels heavy or boring. But neither of you is naturally grounded, and serious issues can slip under the radar. You have to consciously create depth.

Day-to-day, you're always doing something interesting. The relationship is playful and spontaneous. You rarely feel suffocated or bored. But when real issues emerge—money stress, health scares, family conflict—you can both deflect into humor. That works for a while, then it doesn't.

The main tension is avoidance. When things get difficult, you both reach for the same tool: change the subject, make it funny, move to the next activity. You have to build capacity to sit with hard conversations. Both of you need to practice vulnerability, which doesn't come naturally.`,
    friendshipInsight: `As friends, two 3s are the fun pair everyone wants to be around. You inspire each other creatively. You're always up for an adventure or a new experience. The friendship is light and joyful.

You get each other's need for novelty and movement. Neither of you judges the other for being scattered. You just keep going to the next thing.

The friendship can become hollow if you never go deeper. If you're always in motion, you never actually connect. Make sure you occasionally sit still together. Have real conversations, not just witty banter. Let the other person see you when you're not performing.`,
    workInsight: `At work, two 3s together create energy and momentum. You're great at marketing, sales, creative work, or anything that requires communication and enthusiasm. You bring life to projects. But structure and follow-through can suffer.

The 3-3 team excels at generating buzz, bringing people together, and making things feel exciting. You're not boring.

The professional challenge is that you can both leave things unfinished. The excitement fades and you're on to the next thing. You need someone in the group who handles completion. You also need accountability structures that make follow-through harder to avoid.`,
    tips: [
      'Commit to finishing one project before starting the next. Discipline makes your creativity matter',
      'Practice having real conversations about feelings, not just entertaining conversations about ideas',
      'Find a shared creative outlet: perform together, write together, build something tangible',
    ],
  },
  '4-and-4': {
    overview: `Two 4s create an incredibly stable foundation. Both of you value hard work, structure, and doing things right. Your home is organized. Your plans are detailed. Your commitments are solid.\n\nThe problem? It can feel like you're running a business together instead of living a life. Two 4s can become so focused on responsibility and routine that they forget to have fun. The stability is a strength, but rigidity is the shadow side of stability.\n\nThis pairing needs intentional spontaneity. That sounds like an oxymoron, and for two 4s, it kind of is. But scheduling fun is better than never having it.`,
    loveInsight: `Two 4s understand each other's need for stability, reliability, and a clear plan. There's no guessing games or drama — they both want straightforward, steady love. Attraction is based on mutual respect: they see each other as capable, dependable, and grounded. It feels safe from day one.

Romantically, this is a partnership built to last. Both are committed to the work that relationships require. They create structure together — shared finances, clear expectations, long-term plans. There's a quality of "we're building something real" that permeates everything. They follow through on promises. The danger is becoming too predictable or letting the relationship feel more like a business arrangement than a love affair.

The tension: Two 4s can become rigid together, resistant to spontaneity or fresh approaches. One might feel like the other's way is "wrong" instead of just "different." Both can struggle with showing vulnerability or admitting when they need help. The solution is intentional communication about process — discussing not just the what, but the why. And scheduling some intentional spontaneity (yes, that's a 4 thing). Sometimes you have to plan to be unplanned. Regular check-ins on whether the relationship feels alive matter.`,
    friendshipInsight: `4 and 4 friendships are reliable and stable. Both show up consistently; both follow through on commitments. There's no drama or flakiness — you know exactly where you stand. They're the friends you can count on in a crisis, and they appreciate that same reliability from each other.

These friendships thrive in structured settings — regular meetings, shared projects, group activities with clear expectations. They're great at building traditions together. They can also work on practical projects — home improvement, financial planning, or anything requiring sustained effort and attention to detail.

The risk is the friendship becoming purely functional or so comfortable that it stagnates. Both might assume everything is fine without checking in emotionally. They stay strong by sometimes stepping outside the routine, by telling each other what they actually need (not just showing up consistently), and by remembering that friendship is not just about reliability — it's also about joy. Make space for laughter and genuine connection, not just tasks.`,
    workInsight: `Two 4s in a working relationship is a well-oiled machine. Both are disciplined, detail-oriented, and committed to delivering quality. They respect each other's methods even if they're slightly different. The work gets done, on time, to standard.

They excel in project-based work, operations, construction or skilled trades, anything requiring precision and sustained effort. Banking, law, architecture, engineering — industries where reliability and structure are paramount.

The challenge is inflexibility. Two 4s can get stuck defending their approach or their timeline without being open to alternatives. One might feel controlled by the other's methods. Also, the relationship can feel joyless or overly serious. The fix is regular reflection on process — not just "did we deliver?" but "could there be a better way?" And intentionally celebrate wins and progress, not just push forward to the next deadline. Both need to remember why they do the work, not just that they do it well.`,
    tips: [
      'Schedule something unpredictable once a month: a new restaurant, a random road trip, anything unplanned',
      'Talk about feelings, not just tasks. Your relationship needs emotional connection, not just shared to-do lists',
      'Celebrate progress, not just completion. Enjoy the process, not just the outcome',
    ],
  },
  '5-and-5': {
    overview: `Two 5s together is pure adrenaline. Both of you crave freedom, change, adventure, and new experiences. Life is never boring. You travel together, try new things together, and keep each other constantly stimulated.\n\nThe problem? Nobody's building anything. Two 5s can spend years having amazing experiences without creating roots, savings, stability, or long-term plans. It feels free, until it feels aimless.\n\nThis pairing needs to agree on at least one anchor point. A home base. A shared project. Something that grounds the restless energy enough to build on, without killing the spirit of adventure.`,
    loveInsight: `Two 5s are initially exhilarating — both love exploration, spontaneity, and freedom. Neither demands the other be steady or committed in traditional ways. There's exciting energy and adventure. But without an anchor, the relationship can feel destabilizing.

Romantically, the thrill can be there, but commitment feels slippery. Neither wants to be pinned down; both are always looking for the next thing. There's no one creating safety or consistency. Arguments about plans or future happen frequently because no one wants to commit to anything. The relationship can feel like two ships passing, exciting but not grounded.

The friction is fundamental: two 5s lack the grounding energy needed for a sustainable relationship. If this pairing survives, both need to consciously build anchors — shared values that matter more than freedom, commitment rituals even if they feel limiting, and willingness to sometimes not pursue every interesting thing. It requires both people to mature beyond pure adventure-seeking into purposeful choice. Without intentional effort, this relationship drifts apart.`,
    friendshipInsight: `Two 5s are adventure buddies with genuine understanding of each other's need for independence. They can pick up where they left off after months apart without awkwardness. It's low-demand, high-freedom friendship.

These friendships thrive in activity-based contexts — travel, learning new things, exploring interests together. They're great at spontaneous adventures and don't create expectations of constant contact.

The risk is they stay somewhat surface-level or disappear during important times because no one is maintaining the connection. They stay strong by sometimes making plans and following through, by checking in when one is going through something difficult, and by remembering that friendship requires some intentionality. The freedom is great, but it can't replace genuine connection.`,
    workInsight: `Two 5s in a working relationship might struggle to complete projects. Both want to explore, research, and learn. Both resist structure and deadlines. The work might be interesting but scattered.

They work best in R&D, entrepreneurship where exploration is rewarded, or freelance work where they can set their own pace. But if they need to execute a defined project together, problems emerge.

The professional challenge is closure and commitment. Neither wants to say "this is the final decision" or "we're doing it this way." Set firm deadlines and project scope upfront, with clear authority over decisions. Both need to understand that exploration has boundaries in professional contexts. Weekly syncs help keep things on track. Without external structure, the work doesn't get done.`,
    tips: [
      'Create one shared commitment you both honor: a home, a savings goal, a weekly ritual',
      'Practice staying when it gets uncomfortable instead of seeking the next thrill',
      'Be each other\'s adventure partner AND stability partner. You need both',
    ],
  },
  '6-and-6': {
    overview: `Two 6s together is a relationship built entirely on care. You both give generously, love deeply, and put the other person first. The home you create is warm, beautiful, and filled with attention.\n\nThe problem? Both of you give so much that neither of you receives. You're both so focused on taking care of the other person that nobody says "I need something for me." The result is slow, quiet depletion on both sides, and eventually resentment.\n\nThis pair needs to learn to receive as actively as you give. It's not selfish. It's the only way this works long-term.`,
    loveInsight: `Two 6s together sounds like a dream on paper — double the warmth, double the devotion. And the initial pull is real. You recognise something of yourself in each other: the caregiving instinct, the love of home, the way you both notice when someone in the room needs something. That shared attunement creates immediate closeness.

Day-to-day, this relationship is deeply loving but can feel like running a charity where you're both the only volunteer. You both try to give more than you take. Both of you cook dinner and insist the other sit down. Both apologise when there's nothing to apologise for. It's exhausting in its own way. At some point, nobody's actually resting.

The core friction is resentment that builds quietly. When both partners are givers, neither practises receiving — and over time, an unspoken score develops. Who gave more? Who sacrificed more? The antidote is building a deliberate culture of receiving in your relationship. Take turns. Ask for things. Let yourself be cared for. A 6 who learns to receive is a far healthier partner.`,
    friendshipInsight: `Two 6s as friends are each other's unconditional support system. You show up. You remember. You bring soup when the other is sick without being asked. And you mean it — there's no obligation, just genuine care. This friendship feels safe in a way few others do.

This friendship thrives during life's harder seasons: job losses, breakups, family stress. You're both the people others call in a crisis, but you call each other. There's no judgement, no competition, just presence. You also enjoy building things together — meals, gatherings, community projects — because you share the same values around home and belonging.

The risk is mutual co-dependence dressed up as support. If you're always each other's first call, always solving each other's problems, neither of you develops your resilience. Check in occasionally: is this friendship empowering you or keeping you stuck? Great 6-6 friendships push each other forward as much as they comfort.`,
    workInsight: `Two 6s in a professional setting create an environment where people feel valued and heard. Both of you instinctively attend to the team's wellbeing — you notice when morale is low, when someone needs recognition, when communication has broken down. That's genuinely rare in most workplaces.

This pairing excels in roles that require relational skill: HR, social work, education, healthcare, community management, customer success. Anywhere that human dynamics are central to the work, two 6s become the backbone of a high-trust team.

The professional challenge is decision-making under pressure. Two 6s can hesitate when bold moves are required because both feel the weight of impact on people. Neither wants to be the one who hurt someone. The fix is agreeing in advance on when to act decisively versus when to consult. Set a decision framework before the hard moment arrives.`,
    tips: [
      'Practice asking for help, even from each other, instead of always being the giver',
      'Maintain individual interests, friendships, and identities outside the relationship',
      'Set boundaries with outside demands together. Protect your energy as a team',
    ],
  },
  '7-and-7': {
    overview: `Two 7s together create a relationship of extraordinary intellectual and spiritual depth. You both live inside your minds. You both value solitude. You both search for truth and meaning beyond the surface.\n\nThe connection here is rare. You understand each other's need for space, silence, and inner exploration in a way that other numbers often can't. There's no pressure to perform, to socialize, or to be someone you're not.\n\nThe challenge is isolation. Two withdrawn numbers can create a relationship that exists entirely in a bubble. No social life, no physical engagement with the world, no practical grounding. Someone needs to open a window.`,
    loveInsight: `Two 7s are drawn to each other's intellect and mystery. There's profound respect and genuine intrigue. You speak the same language—abstract, analytical, philosophical. The early romance can feel almost ethereal, like you've finally met someone who actually understands your inner world.

But here's the challenge: both tend to retreat into their own minds rather than toward each other. You can be wonderfully compatible as individuals while being emotionally isolated as a couple. Days pass where you're both home but in separate rooms, lost in thought. The relationship can feel companionable but distant. Affection doesn't come naturally—it feels like a second language you both speak reluctantly.

The friction is loneliness despite proximity. You need to actively create connection. Schedule dates that aren't just talking about ideas—create experiences that pull you out of your heads. Physical affection matters, even if it feels awkward. Both of you need to practice vulnerability, not just intellectual sharing. Otherwise, you'll drift into a relationship that looks fine on paper but feels cold.`,
    friendshipInsight: `This is a friendship of genuine intellectual companionship. You can talk about philosophy, meaning, spirituality for hours. You respect each other's thinking without needing to convince or change one another. There's peace in being understood.

These friendships thrive in contexts that allow depth: long conversations over coffee, book clubs, attending talks or retreats together, or just being each other's thinking partner through life questions. You're the friends who challenge each other intellectually in ways that feel like love.

The risk: Both can become so interior that the friendship drifts. You both have independent streaks and might not check in for months, only to pick up like no time passed. That works for some seasons, but neither of you actively nurtures it. Real friendship needs some tending. Also, 7s can be judgmental—you might silently dismiss each other's choices. The fix is occasional intentionality: plan something, follow up, and ask real questions.`,
    workInsight: `Two 7s can work well together if roles are clear and you don't compete. 7 excels in research, analysis, spiritual or philosophical work, technical fields. Two 7s on the same team can go deep into complex problems that others find overwhelming. You challenge each other to think more rigorously.

This pairing thrives in academic settings, research organizations, think tanks, specialized consulting, or any work that requires deep analytical or spiritual thinking. Neither wants to manage people or rush to conclusions.

The challenge: You can both overthink decisions, and neither naturally takes action. You might analyze a problem to death while deadlines pass. You also might retreat individually instead of collaborating. The fix is one person taking a coordinating role—someone who keeps both of you on track and on deadline. Also, create forcing functions for collaboration: scheduled check-ins, shared work spaces. You need external structure because both of you default to independence.`,
    tips: [
      'Force yourselves out of isolation regularly: dinner with friends, a class, a trip',
      'Practice expressing affection in physical and verbal ways, not just through shared silence',
      'Balance inner exploration with outer engagement. The world needs your insights, but you need to share them',
    ],
  },
  '8-and-8': {
    overview: `Two 8s is a powerhouse combination, and a potential powder keg. Both of you are ambitious, driven, and accustomed to authority. When your goals align, you're an unstoppable force. When they diverge, every conversation is a battle for control.\n\nThe good part: nobody understands your drive like another 8. You don't have to apologize for your ambition or explain why you work so hard. There's a deep mutual recognition.\n\nThe hard part: power needs to flow somewhere. Two people who both need to be in charge create a dynamic that's constantly negotiating dominance. This either becomes a highly effective partnership or a chronic power struggle.`,
    loveInsight: `Two 8s are magnetically attracted—here's someone who matches their power, ambition, and unwavering self-belief. The chemistry is intense. You respect each other's strength and don't need to manage each other's egos. Early romance feels like finally being with an equal.

But in daily life, power struggles emerge. Two 8s both want to lead, control, make the final call. You're both used to dominance, not compromise. Money, decisions, how the household runs—these become battles. You love each other, but you're both stubborn, and neither naturally backs down. Passion can flip to conflict quickly.

The friction: Neither is naturally soft or vulnerable. You can hurt each other while trying to maintain power. Without conscious effort, the relationship becomes adversarial instead of partnered. The fix is establishing explicit agreements about domains of authority—who decides what, and you respect that. Both need to practice vulnerability and admit when you're wrong. Schedule real, non-competitive time where you're just together, not competing.`,
    friendshipInsight: `Two 8s can be powerful allies or fierce competitors. If you're aligned, this friendship is about conquering the world together. You challenge each other, push each other higher, and both feel genuinely supported in ambition. If you're not aligned, it's all power plays.

These friendships thrive when you're working toward a shared goal: building a business together, creating something significant, or being the friend group that actually achieves things. You're not surface friends—you expect loyalty and real talk.

The danger: Rivalry. You might become competitive for status, recognition, or success. You can hurt each other with directness that you both dish out but secretly resent. The fix is being clear about whether you're competing or collaborating. If collaborating, establish that upfront. Also, celebrate each other's wins instead of seeing them as relative losses.`,
    workInsight: `Two 8s together can build empires or create total chaos. If roles are clear and aligned, you're an unstoppable force. If not, you're in constant competition. The key is genuine agreement about vision and authority.

This pairing works well in entrepreneurship, business partnerships, or roles with clear hierarchy where both 8s respect the chain of command. You're both comfortable with high stakes and ambitious goals.

The challenge: Power struggles over decision-making, strategy, and credit. You might have different visions and fight fiercely instead of compromising. You also might both neglect emotional intelligence and people-focused skills. The fix is explicit partnership agreements going in—who has final say on what. Respect each other's competence in your domains. Also, create space for feedback without it becoming a power play. Sometimes hire a mediator or coach to keep you aligned.`,
    tips: [
      'Divide authority clearly. Overlap is where conflict lives',
      'Practice being tender with each other. Power without softness is lonely',
      'Celebrate each other\'s wins without comparison. There\'s room for both of you at the top',
    ],
  },
  '9-and-9': {
    overview: `Two 9s together is a relationship of shared compassion. Both of you care deeply about the world, about people, about making things better. The idealism between you is powerful and genuine.\n\nThe problem is that both of you give so much outward that there's sometimes nothing left for each other. Two 9s can be so busy saving the world that they forget to water their own garden. The relationship becomes a base camp for separate missions rather than an intimate connection.\n\nThis pairing needs intentional inward focus. Give to each other with the same generosity you give to everyone else. Your relationship deserves the compassion you offer the world.`,
    loveInsight: `Two 9s are drawn to each other's compassion and idealism. You both believe the world can be better, and that belief is magnetic. There's deep recognition here—you see the world the same way, care about the same things, understand each other's values intuitively. Early romance feels like finally finding your soulmate.

But in daily life, you can become codependent or mutually withdrawn. Both are prone to giving too much and receiving too little. You might both become so focused on serving others or abstract ideals that the actual relationship shrinks. Neither naturally initiates affection or vulnerability. You love broadly, but connecting deeply with each other requires intentionality you might not create.

The friction: Mutual depletion or enabling each other's self-sacrifice patterns. You might both feel unmet while neither clearly asks for what they need. You can also enable each other's escapism—using shared ideals to avoid dealing with actual relationship problems. The fix is explicit conversation about reciprocity. Who are you actually serving in this relationship, and is it balanced? Schedule real time together separate from shared causes. Practice receiving love as much as giving it.`,
    friendshipInsight: `Two 9s together create a friendship built on shared vision for a better world. You can talk about ideas, meaning, impact for hours. You feel understood by someone else who actually cares about the things you care about.

These friendships thrive in activist contexts, nonprofits, spiritual communities, or anywhere shared values matter. You're the friends who genuinely want to make a difference and support each other in that vision.

The danger: You can become insular—only valuing each other while quietly dismissing people outside your shared vision. You can also both withdraw and let the friendship drift without checking in. Neither naturally reaches out for practical support or just for fun. The trap is the friendship becoming more about shared cause than actual connection. The antidote is intentionality—schedule time together, engage in activities outside the shared mission, and sometimes just be present with each other without an agenda.`,
    workInsight: `Two 9s together work best on mission-driven projects. Both are naturally aligned around impact and values. You can build something meaningful together without competing.

This pairing excels in nonprofits, social enterprises, advocacy organizations, or any work centered on contribution rather than personal gain. You're both uncomfortable with purely transactional work.

The challenge: Neither is naturally action-oriented, so projects can stall in planning or discussion. You might both become idealistic to the point of impracticality. You can also avoid hard decisions because both prefer consensus. The fix is one person taking ownership of deadlines and follow-through. Establish clear decision-making authority. Also, hire people who excel at execution—you both need that counterbalance. Both should appreciate the other's commitment even when approaches differ.`,
    tips: [
      'Direct your generosity inward. Give to each other as freely as you give to the world',
      'Create rituals that are just for the two of you. Not every moment needs to serve a larger purpose',
      'Balance idealism with practicality. Hire or partner with grounding energies for the details',
    ],
  },
  '11-and-11': {
    overview: `Two 11s is one of the most intensely psychic pairings possible. You both feel everything  -  every mood shift, every unspoken tension, every energetic fluctuation in the room. The connection is almost telepathic. You finish each other's sentences and sense each other's needs before they're expressed.\n\nThe beauty of this pairing is the depth of understanding. Nobody else gets what it's like to be an 11  -  except another 11. You don't have to explain your sensitivity or apologize for your intensity. There's a profound relief in that.\n\nThe challenge is that two mystics together can become completely untethered from practical reality. If both of you are floating in the intuitive realm, who's handling the bills, the schedule, the grocery list?`,
    loveInsight: `Two 11s recognize each other as kindred spirits at the soul level. There's immediate understanding—you speak the same intuitive language, sense each other's inner worlds without explanation. The connection feels fated, like you've found your spiritual match. Early romance is dreamy and deeply attuned.

But in daily life, both can become withdrawn or anxious, especially under stress. You might retreat together into shared sensitivity instead of facing real problems. Neither naturally initiates practical action or grounded connection. The relationship can feel ethereal and sweet but lacking substance or momentum. You understand each other so well that you might assume communication that never actually happens.

The friction: You can drift into codependent patterns—reinforcing each other's anxieties or escapism. Neither pushes the other toward growth or grounded action. Affection can feel absent despite deep understanding. The fix is explicit conversation about needs and expectations. Schedule grounding practices together—movement, time in nature, creating something with your hands. One of you needs to be brave sometimes and initiate directness about feelings instead of expecting the other to just know.`,
    friendshipInsight: `Two 11s are kindred spirits who feel completely understood. You can sit in silence and feel completely present. There's no performance, no judgment—just real meeting.

These friendships thrive in contexts that allow spiritual exploration and depth: meditation or yoga together, exploring spirituality, supporting each other through major transitions. You're the friends who just get each other without explanation.

The danger: Co-dependence and enabling each other's withdrawal patterns. You can both become so interior that external life falls apart. Neither might offer practical support or check in consistently. You might reinforce shared anxieties instead of helping each other move through them. The antidote is having other friendships and grounding practices. Also, sometimes you need to tell each other hard truths out loud instead of just intuiting them.`,
    workInsight: `Two 11s together excel at intuitive, insight-oriented work. Both can sense what others miss and navigate complex dynamics. But both lack command presence and action-orientation. You need external structure.

This pairing works in coaching, spiritual work, psychology, research, creative fields—anywhere intuition matters. But you need someone or something to push you toward actual execution.

The challenge: You can get stuck in analysis or intuitive spiraling instead of moving forward. Both can be too sensitive to organizational dynamics. You lack natural authority and might defer to others even when you have good ideas. The fix is one person taking responsibility for deadlines and accountability. Both should develop confidence in asserting ideas directly. You also need external structure—clear deadlines, accountability partners, or project managers who push you forward. Sometimes you need to act despite uncertainty.`,
    tips: [
      'Assign practical responsibilities clearly. Don\'t let both of you float while the real world falls apart',
      'Ground your shared sensitivity with physical practices: exercise, cooking, gardening',
      'Create a buffer between yourselves and the world\'s energy. You both absorb too much',
    ],
  },
  '22-and-22': {
    overview: `Two 22s is an extraordinary amount of building energy. Both of you are visionaries. Both think in terms of legacy, systems, and large-scale impact. When aligned, you can literally change the world.\n\nThe problem is that both of you want to be the architect. Two master builders with different blueprints creates a power struggle that's intense even by power-struggle standards. Who decides which empire to build?\n\nThis pairing works only when you either share the same vision or build separate things with mutual support. Competing visions between two 22s is the organizational equivalent of an earthquake.`,
    loveInsight: `Two 22s recognize each other as rare equals. Both have visionary power and mastery. The initial connection is magnetically powerful—here's someone who understands what it takes to build something significant. You respect each other's drive and ambition without needing to manage egos.

But in daily life, power dynamics get complex. Two 22s both want to lead, shape the vision, make final calls. You can become partners in empire-building, which is incredible if aligned. But if your visions diverge, you fight intensely. Neither naturally backs down. Money, strategy, legacy—these become battlegrounds. You can hurt each other while trying to maintain power.

The friction: Competition over whose vision dominates or whose legacy matters more. You might fight fiercely instead of compromising. Without conscious effort, the relationship becomes adversarial rather than truly partnered. The fix is establishing explicit agreements about domains of authority—who decides what, and you respect that boundary. Both need to practice vulnerability and admit when you're wrong. Schedule real time together separate from shared projects where you're just partners, not competitors.`,
    friendshipInsight: `Two 22s can be powerful allies building something significant together. If you're aligned, this friendship is rare—you understand each other's rare ambition and can support it genuinely. If not aligned, it's all competition.

These friendships thrive when working toward shared big vision: building organizations together, creating something transformational, being the friends who actually change things. You expect loyalty and real partnership.

The danger: Rivalry over whose vision is bigger or who's having more impact. You can hurt each other with competitiveness that runs deep. You might become adversaries instead of allies. The fix is being explicitly clear about collaboration versus competition going in. If collaborating, establish that upfront and honor it. Also, celebrate each other's wins genuinely instead of seeing them as relative losses.`,
    workInsight: `Two 22s can build empires or create chaos. If aligned and roles are clear, you're nearly unstoppable. If not, it's power struggles and competing visions. The key is genuine agreement about vision and authority.

This pairing works in entrepreneurship, large organizations, leadership roles with clear hierarchy, or transformational ventures. You're both comfortable with complexity and scale.

The challenge: Power struggles over strategy, direction, and legacy. You might have conflicting visions and fight fiercely instead of compromising. You can also both become so focused on building that you neglect people and culture. The fix is explicit partnership agreements going in—who has final say on what, and you mean it. Respect each other's competence in your domains. Hire strong people leaders—neither of you naturally excels at that. Regular alignment conversations prevent costly divergence.`,
    tips: [
      'Align on vision before you start building. Disagreements at the foundation level create cracks that never heal',
      'Divide authority clearly. Two architects need separate blueprints or a shared one with clear roles',
      'Practice being human together. You\'re not just builders, you\'re people who need rest, play, and tenderness',
    ],
  },
  '33-and-33': {
    overview: `Two 33s together is an extraordinarily rare pairing, and an extraordinarily compassionate one. Both of you are wired to teach, heal, and serve. The amount of love and wisdom flowing between you is remarkable.\n\nThe beauty of this pairing is total understanding. Nobody else knows what it's like to carry the 33 energy  -  the constant pull to serve, the depth of empathy, the weight of feeling responsible for everyone's growth. With another 33, you finally feel understood.\n\nThe challenge is that both of you give endlessly. If nobody in this relationship is receiving, both of you will burn out. The lesson for two 33s is the same one you try to teach everyone else: you have to take care of yourself first.`,
    loveInsight: `Two 33s are rare souls meeting each other. Both are committed to healing, teaching, and service. The connection feels spiritually aligned—you're both trying to make the world better. There's recognition and appreciation for the other's selflessness.

But in daily life, you can become focused on serving everyone except each other. Both naturally give and heal, but neither naturally receives or asks. The relationship can feel warm and purposeful but lacking presence or passion. You might be each other's support system while the actual partnership gets starved. You understand each other's calling, but that can substitute for real emotional connection.

The friction: You can enable each other's self-sacrifice patterns. Both might neglect the relationship while serving everyone else. Neither clearly asks for what they need or claims time as sacred. The relationship can feel like a shared mission rather than true partnership. The fix is explicit conversation about reciprocity. You both need to receive as much as give. Schedule real time together separate from shared service. Sometimes just be present with each other without helping or healing.`,
    friendshipInsight: `Two 33s together create a friendship of aligned service and shared wisdom. You understand each other's commitment to teaching and healing without judgment. There's deep respect for the other's calling.

These friendships thrive in shared service: nonprofits, spiritual communities, mentoring networks, or being the friends who help each other and others grow. You both expect friendship to have real meaning and impact.

The danger: You can become so focused on serving others that the friendship itself gets neglected. You can also reinforce each other's martyr patterns—who's sacrificed more, who's given more. Neither reaches out consistently or claims the friendship as important. The antidote is scheduling intentional time together. Celebrate joy and play, not just service and meaning. Sometimes rest and presence are the real teaching.`,
    workInsight: `Two 33s together excel at creating transformational work. Both are natural teachers and healers. You create space for authentic growth and genuine care. But you need external structure for execution and forward momentum.

This pairing works in nonprofits, education, coaching, spiritual organizations, healthcare—anywhere genuine transformation and service matter. You're both uncomfortable with extractive work.

The challenge: Neither is naturally action-oriented or commanding. You might get stuck in planning or become so focused on people and process that execution stalls. You also might lack clear authority structures. The fix is one person taking responsibility for deadlines and accountability. Both should develop confidence in asserting direction. You also need people who excel at logistics and operations—hire them and trust them. Regular check-ins about progress keep you grounded in reality.`,
    tips: [
      'Practice receiving love without immediately giving it back  -  sit with being cared for',
      'Set boundaries with the outside world together  -  your energy is precious and finite',
      'Do something playful and purposeless together  -  not everything needs to serve a higher cause',
    ],
  },
};

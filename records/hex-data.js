'use strict'

var tri_bin_arr = [
  '111','110','101','100','011','010','001','000'
]

var tri_names_arr = [
  ['sky','creative'],['lake','joyous'],['fire','clinging'],['thunder','arousing'],['wind','gentle'],['water','abyssmal'],['mountain','stillness'],['earth','receptive']
]

var inner_indices = [23,24,27,28,37,38,39,40,43,44,53,54]

var sovereign_indices = [24,19,11,34,43,1,44,33,12,20,23,2]

var hex_bin_arr = [
               "error",
               "000000",
               "111111",
               "100010",
               "010001",
               "111010",
               "010111",
               "010000",
               "000010",
               "111011",
               "110111",
               "111000",
               "000111",
               "101111",
               "111101",
               "001000",
               "000100",
               "100110",
               "011001",
               "110000",
               "000011",
               "100101",
               "101001",
               "000001",
               "100000",
               "100111",
               "111001",
               "100001",
               "011110",
               "010010",
               "101101",
               "001110",
               "011100",
               "001111",
               "111100",
               "000101",
               "101000",
               "101011",
               "110101",
               "001010",
               "010100",
               "110001",
               "100011",
               "111110",
               "011111",
               "000110",
               "011000",
               "010110",
               "011010",
               "101110",
               "011101",
               "100100",
               "001001",
               "001011",
               "110100",
               "101100",
               "001101",
               "011011",
               "110110",
               "010011",
               "110010",
               "110011",
               "001100",
               "101010",
               "010101",
               "error"
];

var hex_name_arr = [
                "error",
                "Field | The Receptive | 'Yin'",
                "Force | The Creative | 'Yang'",
                "Sprouting | Initial Difficulty | 'Birth'",
                "Enveloping | Youthful Folly | 'The Novice'",
                "Attending | Waiting | 'Waiting'",
                "Arguing | Conflict | 'Balance'",
                "Leading | The Army | 'The Gathering'",
                "Grouping | Holding Together | 'Merging'",
                "Small Accumulating | Small Taming | 'Reticence'",
                "Treading | Conduct | 'Humility'",
                "Pervading | Peace | 'Harmony'",
                "Obstruction | Standstill | 'Trust'",
                "Concordance | Fellowship | 'community'",
                "Great Possession | Great Possession | 'Prosperity'",
                "Humbling | Modesty | 'The Guileless'",
                "Providing-For | Enthusiasm | 'Music'",
                "Following | Following | 'Accord'",
                "Corrupting | Work on the Decayed | 'Repair'",
                "Nearing | Approach | 'Quickening'",
                "Viewing | Contemplation -'Reflection'",
                "Gnawing Bite | Biting Through | 'Perseverence'",
                "Adorning | Grace | 'Grace'",
                "Stripping | Spitting Apart | 'Dismantling'",
                "Returning | Return | 'Genesis'",
                "Without Embroiling | Innocence | 'The Child'",
                "Great Accumulating | Great Taming | 'Composure'",
                "Swallowing | Nourishment | 'Sustenance'",
                "Great Exceeding | Great Preponderance | 'Potential'",
                "Gorge | The Abyss | 'Danger'",
                "Radiance | The Clinging | 'Synergy'",
                "Conjoining | Influence | 'Allurement'",
                "Persevering | Duration | 'Continuity'",
                "Retiring | Retreat | 'Rest'",
                "Great Invigorating | Great Power | 'Leadership'",
                "Prospering | Progress | 'Progress'",
                "Brightness Hiding | Darkening | 'Submission'",
                "Dwelling People | The Family | 'The Whole'",
                "Polarising | Opposition | 'Opposites'",
                "Limping--Obstruction | 'The Web'",
                "Taking Apart | Deliverance | 'Release'",
                "Diminishing | Decrease | 'Austerity'",
                "Augmenting | Increase | 'Generosity'",
                "Parting | Breakthrough | 'Transformation'",
                "Coupling | Coming to Meet | 'Encounter'",
                "Clustering | Gathering Together | 'Weaving'",
                "Ascending | Pushing Upward | 'Tenacity'",
                "Confining | Oppression | 'Acceptance'",
                "Welling | The Well | 'The Well'",
                "Skinning | Revolution | 'Revolution'",
                "Holding | The Cauldron | 'Peace'",
                "Shake | Arousing | 'Initiation'",
                "Bound | The Keeping Still | 'Stillness'",
                "Infiltratiing | Development | 'Unfolding'",
                "Converting the Maiden | Marrying | 'Submission'",
                "Abounding | Abundance | 'The Peak'",
                "Sojourning | The Wanderer | 'The Wanderer'",
                "Ground | The Gentle | 'Alchemy'",
                "Open | The Joyous | 'Joy'",
                "Dispersing | Dispersion | 'Detachment'",
                "Articulating | Limitation | 'Boundaries'",
                "Center Confirming | Inner Truth | 'Empathy'",
                "Small Exceeding | Small Preponderance | 'Diligence'",
                "Already Fording | After Completion | 'Being'",
                "Not-Yet-Fording | Before Completion | 'Becoming'"

];

var purports_inner = [
    "error",

"In absoulute tranquility, look within--Find chaos in order, and darkness in light.Only within Ying can Yang conceive.Accept and allow perfection.",

"Only in complete darkness does Yang ignite to bring forth life.Beginnings are obscured by uncertainty and chaos.Life-creating beauty expressed from the heart brings light and order.",

"Integration brings integrityEmpathize with conflicting feelings.Feelings are neither good nor bad.Like children, they must be equally nurtured.",

"The journey through inner space begins.Listen to the master guide.Knowledge of the master and attunement to guidanceis accessible through stillness.",

"Stand still in the center of the pool.As the ripples smooth, the waters become a mirror,reflecting all that is heaven.",

"Let go of the ego.Released, it leads to the center.",

"Rediscover potential and gather strengthby welcoming to the inner circlethe most neglected vagrant and the alien.",

"Weave the dark and the light into the whole.Weave together emotion and intellectinto a state of atonement.",

"Turn inward to the purest, most elementary principles.The moment is pregnant.  Do not press for breakthrough.Find solace in anticipation and accept chaos to dispel confusion.",

"Be clear. Inspiration is at the full.A life moving in love toward enlightenment reflects as a mirror.Self-worth and growth provide the images.",

"Be detached from the world of time.Be totally in the moment.To be there for a moment is to be there forever.",

"Stagnation and breakthrough are two sides of the same hill.Traverse the one and surely reach the other.Or, stand still while internal resources develop.",

"Follow the clear voice at the center.The misleading chatter gives wayto harmonious alignment.",

"The secret ingredient is self-compassion.",

"Beauty and fulfillment harmonizewith the soul's hidden intent. Seek in innocence in the between.",

"Past and future are reflections of the universal rhythm.Dance to the music of the cosmos, the music of the heart.",

"Quiet repose allows inspiration.Plumb the core and drink from the deepest well.",

"Every beginning requires first an ending.Every ending is followed by a beginning.Go to the wellspring.",

"Power is only a vehicle.Give full rein to enthusiasm and dreams.",

"While change occurs, keep centered.While centered, move freely; ride the wind.",

"Take inventory.Accept self-examination without compromise.",

"Contemplate the beauty of the changes unfolding on the horizon.Enjoy the grace that is the dance. Enjoy the pattern of the design.",

"Change is inevitable.Plough under the old and nourish the new.Find strength in quietness and confidence.",

"There is a turning in the darkest nightwhen daylight begins its approach.There is a moment in the deepest winterwhen the face turns toward spring.The cycles of nature are the rhythms of life.",

"Satisfy the hunger.Make well the wounds.Honor the emotion.Nurture the vitality.Indulge in exuberance.Rest in the void.",

"Spiritual wealth is gathered by sharing.Respond to each subtle nuance.",

"Sow and cultivate productive, positive thought habits.Weed out the rest.",

"Self-control comes out of freed-up emotion.Give in.Find solace in the voidwhere there is both safety and magic.",

"Truth rewards clear vision and consistent intent.Take heart.Find courage.",

"When energy is high, work.When low, rest.Treasure the charred remains.Recycle to sustain the eternal flame.",

"Reciprocity rules and chemsitry reigns, from the infinite to the infinitesimal.",

"Move with the changeless.",

"'Healing' is the name of the cosmic magnetism.Great energy comes from repulsion as well as attraction.The waning moon is the most powerful.Bathe in its light.",

"Acknowledge the gains of empowerment.Know the meaning that affects the whole,the dark as well as the light.",

"Sharpen vision.Tame the wild.Befriend the frightened.Discover new alliesand break new groundduring this time of growth.",

"The fiery truth shines eternally in the heart.Hold it.",

"Purity of purpose is built upon self-respect and genuine affection for the self.",

"There can be no synchronicity without diversity, no integrity without variety.Retain all that is natural and celebrate the opposites.To the enlightened, opposites are experienced as one.",

"Retreat to the center; examine inhibitions and reactions.Acceptance, peace and confidence await discovery.",

"Do not linger in mire.Turn the page.Let go.Hold the hand from above.",

"When the barriers are down,the clutter cleared and the clamor silenced,there remains the divine essence, the sacred self.",

"Personal empowerment is enhanced through truth and loyalty to the self.The universe is agreeable.",

"Principle is compatible with personal growth.Apply it.Gently but resolutely shine the lightdown the channel to the inner core.",

"Draw no conclusions.Recognize human nature.Rest in this wisdom.",

"Look inward from all sides.Give the center devotion and commitment.",


"Liberate creativity.A meditative balance frees the imagination.The freeing of creativity is always a beginning.",

"Through sacrifice, the soul finds its own.Truth and strength are carved from silence.",

"The secret hides in insight, self-compassion, and self-nurturing.",

"New meaning will emerge on its own.Time now to recognize and honor the seasons of the soul.",


"Energy and inspiration issue from clarity and harmony.Know the beauty of the universe.Be one with it.",

"Turn within and face the roaring chasm.In the maelstrom, find destinyand in the demons, angels.",

"Be open, silent and receptive.Cleanse the soul with the music of the spheres.",

"Development is destined to unfold.The direction is toward growth.Rest in this knowledge.",

"It isn't time to strive toward a goal.It isn't the time to advance.It is time to be one with the dark.",

"Understand the natural flux between hight and low,between fullness and emptiness,and free the soul.",

"The butterfly's course is the weaving of a sublime tapestry.Graceful intuition acknowledges this moment as passing.",

"Severity requires gentleness.There is power in stillness, magic in mercy.",

"Strength and gentleness replenish each other.Commitment restores the heart.",

"Renew faith in the healing process.Value the infinite soul.Give up self-devaluation.Self-forgiveness is prerequisite.",

"Align with natural law.Survey the inner landscape.Scan the horizon, explore the caves, scale the peaks,walk in the woods, drink from the springs.Nature and human nature and not so far apart.",

"Replace self-doubt and self-judgment with understanding and empathy.Compassion for the self lights that which is concealed in the dark.",

"Favor is available only from within.",

"The waters of eternity quell the fires of emotion.Even the lonely ache in time becomes a hallowed shelter.",

"Master the ability to wait and thereby master all.",

"error"

];

var purports_outer = [
    "error",

"The open lines suggest the birth canal.Yin attracts, receives, and embodies energy transmitted from Yang.The mercy of Yang is conceived in Yin's awesome severity.Accept the perfect Yang.",

"Consciousness is conceived in love.Yang eruption quickens the Yin egg, ignites the Yin lamp.Mercifully erupt, mercifully transmit the light.",

"There is something new and exciting going on--a birthright and a destiny, too grand and far-reaching to keep a secret.Carefully seek out and nurture associations with sympathetic others.",

"Seek guidance.The knowledge comes through awareness.While seeking the wisdom of mastery, retain an endearing simplicity and the masterful innocence of youth.",

"Desire is caught in the realm of change.Do not be caught by desire.Observe without illusion, aware of talents and shortcomings.Be still in the eye of the storm.",

"Impeccability does not guarantee freedom from conflict.A pause could prevent disaster.Consider all viewpoints, then with grace and compassiontake the middle path.",

"With a noble vision, a strong collective force can be gathered.It will restore balance.",

"Take the opportunity for bonding.Be immersed in it.Only through joining at heart level with others can purpose be fulfilled.For more information, throw the coins again.",

"Now is the time for reticence.Wisdom does not strive to influence what cannot be controlled.Welcome the constraint as the world welcomes clouds that bring cleansing rain.",

"Honor meekness and mildness.Pay strict attention to manners.Discriminate between the wholesome and the unwholesome,but remember: all are equal.",

"Happiness, peace, good fortune, and success cannot be torn asunder.There is help all around.Heaven and Earth are in harmony.",

"The inner and outer worlds harmonize though they seem far apart.Take heart; have courage.Be steadfast.Rely upon existing resources.",

"Stay attuned to a certain underlying order regardless of others lack of attunement.A clear vision, shared, serves the needs of teh community.",

"Material wealth cannot be put inside.Spiritual wealth must accrue from within.Faithfulness to the middle path brings abundance.",

"The harmony of the universe resonates in the deepest levels of the psyche.Respond from the heart, with spontanaeity.Honor the fragility of evolution.",

"Resonance with the cosmic order brings well-being.Move with the music played by the Queen of time and space,the Triple Goddess--past, present, and future.",

"Enter with discernment into the principles of others, led by love and compassion.Being in accord with existing forces dissipates resistance and stress.Quiet repose allows inspiration and wise action.",

"Remove the decay.Act with compassion but without compromise.Choose the course by plumbing highest principles.",

"A time of rapid quickening ensues.Use the power as a vehicle, with humble attention to its effect on others.All bursts of power soon settle into a new routine.",

"Cultivate grace.In motion remain still.Reflect upon the paradox.",

"Uncompromising reform serves justice.With clarity and energetic intent,correct the errors, remove the defects,abolish abuse, malpractice, or immoral pursuits.",

"Contemplate the perfection in the momentwith clarity of mind, purity of heart, and tranquility of soul.Being is beauty and grace.",

"Let go and wait.Change is on the way.Be the eye of the storm.Or be the mountain resting upon the earth.Nourish the seeds of growth found within the stress.",

"In the deepest and darkest moment await the light.The cycles after a dormant time bring new growth.Breathe in the sweetness of anticipation.Cultivate the spirit.",

"There is a spontaneity that wilts at the first sign of attention.The presence of innocence cannot be cultivated.Attend the moment free of expectations, goals, judgments.",

"Enter fully into the mundane and the common during this favorable time.Human nature is hungry for the truth and open to growth.Contain and wisely dispense enthusiasm.",

"Be aware of food sources and the processes in its preparation.Cultivate the awareness of words expressed and their power to nurture or to destroy.",

"A solitary position defines essential being.Stand firmly."  + "<br/>" +
    "The ground beneath is solid.Potentiality electrifies the environment.",

"Danger brings awareness along with warning.Do not lose heart.Do not avoid confrontation.Act with integrity and courage.",

"Look to others who fuel the fire and sustain its light and warmth.Discipline, mutual support and teamworkexpand effectiveness, alleviate pressure, and diminish stress.",

"Mutual attraction is at work.Speak and act for those who cannot do for themselves,or for the cause which is powerless to do so for itself.The sun's rays must remain within a narrow constant.",

"Trust instinct.Carry on with purposeful endurance.In the changing themes of life there is an underlying pattern.Identify it to find meaning.",

"Enter fully into the detour and find essentials for the journey.If the quest were fulfilled from the beginning, what would be the purpose?Take time to rest and heal.",

"Empowerment brings with it recognition and responsibility,the power to nurture or destroy.Give clean, clear signals.Speak with conviction and compassion.",

"Let go of inferior impulses.Diversity produces complementarity.Recognize the importance of alliances that further progress.Significant tasks can be accomplished.",

"The light, though veiled, is not extenguished.Bow to circumstances that oppose deepest principle, yet do not abandon conviction.Understand the paradoxical nature of the position and find meaning between the polarities.",

"Act in consideration for the human family.Let purity of purpose flower.Remember the ancient greeting, 'I am Another Yourself.'Let it transform thought and word.",

"The world is spun between polar oppostites.Through compromise, individuals create symphonies.Retain individuality while appreciating differences.",

"The trouble comes from burdensome illusions.Recognize this and seek counsel.Set aside preconceptions, inhibitions, and expectations.Self-awareness builds character.",

"When the door opens from the outside, it is time to go.Do not call attention to oppressors.Maintain terms of friendship but, by all means, go through the door.",

"When ornamentation is removed and excess trimmed away,all the remains is the sacred essence of being.It is the holy of holies. Nothing else is essential.",

"Benevolent forces are present.Use the energy to benefit self and others.Give as called for by the most mundane need.",

"Throw off oppression resolutely, without violence.Be open, enlisting help if needed.Choose carefully the means and the method, remaining true to principle.",

"Dependence reaches balance through autonomy, independence through interdependence.Do not confront stronger forces.It is not time to establish a new partnership.",

"Bond together with others around the center.Look to this person, purpose, or principle, and give it full devotion and strength.",

"Take advantage of opportunity.Assertive actions are effective.Devotion increases personal power and self-esteem,but do not be intimidated by positions of power.",

"When sacrificed, the enduring essence of the self is not lost but furthered.Grow strong through adversity.In silence the truth becomes evident.",

"Bear in mind the sacredness of human nature.Treasure the sameness and uniqueness in othersby keeping in touch with the heartbeat within.Stimulate individuality.There is divinity in every breath.",

"Change overcomes so that meaning is obscured.Move with the changes; be one with them.Discard what is obsolete.New paradigms will emerge on their own.",

"Value the whim of fate.Balance between matter and spirit is the key to prosperity;between desire and desirelessness the key to contentment.",

"Shock penetrates defenses and illuminates denial.Know the fear, the terror, all the hidden feelings.In the knowledge lies great strength.",

"Practice stillness.The body mirrors the soul as the lake mirrors the mountain.",

"Don't push.Don't resist.Open to the process of letting go,as a flower opens to the light,surrendering to the unfoldment of its own beauty.",

"Play well the subordinate role.There is honor in submission but do not give away the vision.",

"Stop, look away from the path and drink-in the view.Having achieved the height, prepare for the decline.Appreciate the gift of a momentary vista.",

"The traveler weaves a wide web and remains without tangible roots.Search leads to discovery, and discovery to a new quest.Avoid being a moving target through propriety, grace, and reserve.",

"Be invisible; there is magic afoot.The movement of the spirit is sufficient.Willing submission brings a special kind of power.Establish a goal but bring to bear an unspoken trust in what is already known.",

"The wise join in harmony and understanding.Encouragement instills courage, promotes gentleness and camaraderie.Empathy with truthfulness releases health and contentment.",

"Go within and direct energy toward healing.Transcend that which has led to division and alienation.Choose spiritual oneness over egoistic identity.",

"Discover and explore new boundaries.Carve from unlimited potential a clearly defined course.Choose specific, realizable objectives.Be selective.",

"Understand the human condition.Apply intuition.Observe experience.Be confident and sincere, and enjoy.",

"Remember the beginning.Seek and find the taproot.Act cautiously, conservatively, and conscientiously.Timing is all, and favor arrives at its own behest.",

"A goodbye holds the miracle of a tear and a smile in the same moment.Take care on the decline, knowing that loss occurs only in form, only in time.Perfection rides the crest of every moment.",

"Chaos to order has not yet been achieved.Mind the moment of maturation.Attend closure and follow-through.",


    "error"
];


var moving_lines_inner =
              [ /*opens array!--with sub-arrays*/
      /*0*/   ["error0","error1","error2","error3","error4","error5","error6"],
      /*1*/   ["From the abyss comes the dream.","1. Obstructions blocking the light are cleared in the season of rest.",
                   "2. Rest in the achievement of harmony and peace.","3. Vitality flourishes veiled.",
                   "4. Allow the light to dispel confusion. Let go of egocentrism and succumb to receptivity. Feel free.",
                   "5. Remain open to the ever-changing currents of truth.","6. Embrace the fulfilling creative force."],
      /*2*/   ["Creation is the miracle of love.","1. A calm retreat allows vision.","2. Power is innate.",
                   "3. Shed illusions and hold to the truth. Eruption is imminent.","4. Retreat, for clarity.",
                   "5. Establish calm through creativity.","6. Surrender the internal dialogue to the calm darkness."],
      /*3*/   ["Cherish the child.","1. Cultivate a sense of worth while waiting for the bloom.",
                   "2. The solitary way is not a lonely one. Cherish the spirit.","3. Rest in the awareness of innocence.",
                   "4. Listen to divine guidance.","5. Pay attention to the internal dialogue.","6. The still center distills inspiration from chaos."],
      /*4*/   ["Self discovery.","1. The quest is 'Know Thyself.'","2. Self-knowledge leads to self-mastery.",
                   "3. The ideals held dearest are the highest truths about the self.","4. Allow patience free reign.",
                   "5. Find the answer within.","6. Within is the key to development."],
      /*5*/   ["The wedding of stillness and motion.","1. The still center radiates. Let it transform worry into confidence.",
                   "2. Neither trap troublesome thoughts nor reject them.  Allow them to pass.",
                   "3. Come back to the center.  Composure is strength.  The soul knows neither past nor future.",
                   "4. Time heals. Take a break. Cut loose thought and emotion.",
                   "5. Hold fast to the center. Focus on the breath. Circumspection brings perspective.",
                   "6. Curiosity is the key to freedom."],
      /*6*/   ["Find balance in the center.","1. Go into the storm and find the calm center.","2. Be open. Be still.",
                   "3. Within the difficulty lies the mastery.","4. Meditate.","5. Confront secret motives.",
                   "6. In the realm of self-mastery there is no slave."],
      /*7*/   ["Align priorities.","1. Bring discipline to passion.",
                   "2. To honor the self is to be free.","3. Retreat.","4. Wait.","5. Conceal the light and become luminous.",
                   "6. Distinguish the role from the identity."],
      /*8*/   ["Just let it in.","1. Acknowledge the truth.","2. Trust feelings and rely on established integrity.",
                   "3. Enjoy the company of the lighter side.","4. Remember the self.","5. Trust the natural draw of destiny.",
                   "6. Learn to commune."],
      /*9*/   ["Re-examine motives.","1. Be motivated by the higher self, not by desire.","2. Be content with the dreams.",
                   "3. Exercise wisdom and control.","4. Honor humility; it is power.","5. Honor strength.",
                   "6. The eternal is in the moment."],
      /*10*/  ["Re-examine motives.","1. Be motivated by the higher self, not by desire.","2. Be content with the dreams.",
                   "3. Exercise wisdom and control.","4. Honor humility; it is power.","5. Honor strength.","6. The eternal is in the moment."],
      /*11*/  ["Communion.","1. Humility brings harmony.","2. Be fair to the self.",
                   "3. Keep hope. Blessings are not always obvious.", "4. Appreciate the diversity.",
                   "5. Hear the neglected cry.","6. Be the flame."],
      /*12*/  ["Resonate with the whole.","1. Intuition is the instruction of the wise unconscious.",
                   "3. As the lotus pushes through the slime, the divine impulse brings purity.","4. Time for the intuited movement.",
                   "5. The answer is within the secret.","6. Spirit and body unite. Celebrate."],
      /*13*/  ["Commitment to harmony.","1. What is being hidden?","2. What is being denied?","3. Trust the silence.",
                   "4. Take the plunge.","5. Surrender.","6. Tune in the harmony."],
      /*14*/  ["Clarity out of chaos.","1. Remain blameless. Be a beginner.","2. Tap the dynamism of ingenuity.",
                   "3. Reward follows sacrifice.","4. Competition is with the self. Call it a truce.",
                   "5. Dignity and sincerity light the path to wisdom.", "6. Discernment leads to wisdom."],
      /*15*/  ["Go easy, with awe.","1. Find the peace between fear and hope. Explore resistance.",
                   "2. Inspiration and balance ensue. Unlock the cellar from whence issues the cry.","3. The answer resonates independent of achievement.",
                   "3. The answer resonates independent of achievement.",
                   "5. Opposites do not cancel each other.  Without guile but with initiative, eradicate disharmony.",
                   "6. Responsibility gives birth to self-realization, fate to destiny."],
      /*16*/  ["Feel the music.","1. Draw further inward.","2. Recognize the changing rhythm.","2. Recognize the changing rhythm.",
                   "4. Dwell at the fulcrum.","5. Movement relieves the stress.","6. Balance memory with the present."],
      /*17*/  ["Dream away conflict.","1. Integrate intuitive voices.","2. Love the unlikable.",
                   "3. Nothing is lost to congruence. Be consistent.","4. Self-determination is brought forth through in-depth, farsighted examination.",
                   "5. Excellence is its own reward.","6. Unselfishness dwells first in the heart."],
      /*18*/  ["Regeneration.","1. Be forgiven. Get off the hook.","2. Forgiveness clears the way.",
                   "3. It will not be missed. Let it go.","4. Clean out the wound.  Healing follows.",
                   "5. The child awaits. Teach.","6. Turn aside from all paths but the one heaven has made."],
      /*19*/  ["Freedom in the moment is forever.","1. Love is the heart's eternal flame.","2. ideals are born in innocence.",
                   "3. Ego check.","4. From the night comes the dawn.","5. The highest truth is furthest in.",
                   "6. Recognize the wisdom of experience."],
      /*20*/  ["Self-examination.","1. Wisdom is maturity.","2. Stay in the simplicity.  Be comfortable in the constrictions.",
                   "3. Objectify and honor experience.","4. Balance brings empowerment.",
                   "5. Gain perspective through self-examination.","6. Avoid theories, beliefs, answers.  Uncover hidden questions."],
      /*21*/  ["Radical Surrender.","1. Reflect. Be open to change.","2. Extend the vision.","3. Surrender. Peace is wisdom.",
                   "4. Rout destructive patterns. Admit love and light.","5. Relax, with reverence.","6. Truth knocks. Open the door."],
      /*22*/  ["The dreamer within.","1. The only way to grace is through decision.","2. Honor intuition.","3. Liberate thoughts and feelings. Free the will.",
                   "4. Take care lest genius crush innocence.","5. Openness and humility are friends.","6. The simple, easy way is best."],
      /*23*/  ["The heart inspires change.","1. Enjoy the bliss. Breathe deeply.","2. There is no judgment. Hold still, grounded in hope.",
                   "3. Trust and affirm.","4. Honor life's lessons.","5. Welcome the approaching changes.",
                   "6. Compassion and optimism nourish the spirit."],
      /*24*/  ["Evolution replaces revolution.","1. Let the light arrive in its own time.","2. Walk in truth. Choose wisely.",
                   "3. make way for the creative flow.","4. A change that brings solitude is an opportunity.",
                   "5. Follow the impulse to change.","6. Find peace at the center. The door revolves."],
      /*25*/  ["Dance in the void.","1. Be led by the innocent child.", "2. Anticipation is foreign to the moment. Stay centered.",
                   "3. Wisdom comes from the simple, originality from the innocent.","4. Trust intuition.",
                   "5. Acknowledge the denied feelings. They are strong allies.","6. Peace is within the void."],
      /*26*/  ["Abundant energy sparks the flame.","1. Questions do not always have to be answered. Be content.","2. Lie in wait.",
                   "3. Know that the path spirals to infinity.","4. Savor the wisdom from past mistakes.",
                   "5. Redirect the light.  Truth prevails.","6. Redirect the light.  Truth prevails."],
      /*27*/  ["Be satisfied.","1. Celebrate talents.","2. Assert independence.","3. Care for the self. Have a treat.",
                   "4. Turn nurturing talents inward.","5. Value the self.","6. Know the union of matter and spirit."],
      /*28*/  ["Balance is an act of magic.","1. Heed the silent caution.","2. Optimism enhances the darkness.",
                   "3. Healing occurs on its own.","4. Heed the inner master.","5. Build on the changeless truth.",
                   "6. Gifts from the soul are returned in miracles."],
      /*29*/  ["Transcend through virtue.","1. Tend the smallest need. Lower expectations.","2. Change requires courage.",
                   "3. Become the calm.","4. Self-control stems the tide.","5. Take a pause. Wisdom and courage reside in each other.",
                   "6. Go deeper within. There is respite."],
      /*30*/  ["Combustion through alignment.","1. Contemplate the light as an ever new creation.","2. Find balance between indulgence and inhibition.",
                   "3. Reflect upon remembered beauty and tranquility.","4. Regulate and pace the emotions.",
                   "5. Grief ushers in wisdom and needed change.","6. Build new habits with intention and strength."],
      /*31*/  ["Locate the lost.","1. Give change a chance.","2. There is no safer place than the void.",
                   "3. Let go and experience control.","4. Give in to the tried and true.",
                   "5. Resonate with the deep resolve.","6. Quit learning. Be still."],
      /*32*/  ["Embrace passion with discipline.","1. Let continuity take the initiative.","2. Avoid extremes.",
                   "3. Avoid inconsistency.","4. Re-evaluate. Some goals are unrealistic.","5. Find balance between matter and spirit.",
                   "6. Go for alignment, with truth and humor."],
      /*33*/  ["The weight of the shadow.","1. Savor the life found at dead center.","2. The most powerful presence is the ally within.",
                   "3. When one track dead-ends, chose another.","4. Get out of emotion into will. Use will power.",
                   "5. Submit to relaxation.  No need for internal dialogue.","6. The sound of distant music grows distinct. Listen!"],
      /*34*/  ["Clear the channels through harmony with the center.","1. peace is all power.","2. Just be still.","3. Counter power with peace.",
                   "4. Ignore power. Grow anyway.","5. Omit self-juddgment. Submit to the truth.","6. The center is always composed."],
      /*35*/  ["Understanding through acceptance.","1. With calm, approach the perfect center.","2. Celebrate transformation.",
                   "5. Forget the past.  Move in accord with the center.","6. Cross the threshold."],
      /*36*/  ["Self-contained transformation.","1. Wait on fate.","2. Bless and heal the wounded child.",
                   "3. Honor what is passed and say goodbye.","4. Regain hope.  Use clear thinking.",
                   "5. Hold the light in secret.","6. Harsh memories fade into obscurity."],
      /*37*/  ["Comfort and contentment through self-love.","1. Define internal boundaries and identify feelings.","2. Go easy within the center.",
                   "3. Keep the smallest child happy.","4. Wealth through simplicity.","5. Love and trust are acts of courage.",
                   "6. Intuition aligns impulses for consistent growth."],
      /*38*/  ["Embrace","1. Let in the lame child.","2. Let it rest.","3. Retreat to the sanctuary. If there is none, make one.",
                   "4. Find the lost.","5. Do not allow trust or mistrust to cloud intuition.","6. Love the enemies. They have been friends all along."],
      /*39*/  ["Strength through vulnerability.","1. Wait. Rest.","2. The severe mother secretly smiles.",
                   "3. Empathy for the self is a tool for learning.","4. Scan the vault of experience for counsel.",
                   "5. The spirit shines within. Let it warm.","6. Expose questions to the indestructable void, the higher power."],
      /*40*/  ["Cleansing lightning and rain.","1. Blameless means no blame.","2. Take the straight course, aware of the measure and the mean.",
                   "3. Rout fear. Welcome cheer.","4. Spring cleaning for thought habits.",
                   "5. Overcome. Let the past retreat.","6. In order to receive, give up."],
      /*41*/  ["The holy of holies.","1. Hear the internal dialogue, then be still.","2. Holiness is attention to the Whole I.",
                   "3. Whithdraw from internal conflict.","4. Seek audience with the inner master.",
                   "5. Receive the gift of peace.","6. Be empowered by self-knowledge."],
      /*42*/  ["Affirm self-worth.","1. Time for the quantum leap.","2. The door of opportunity opens outward.",
                   "3. charity must begin within. Have no regret.","4. Listen to extremes of internal dialogue. Find the path between.",
                   "5. Kindness comes from a heart open to the self.","6. The other side of the sage is the fool."],
      /*43*/  ["Opening to new light.","1. Thoughtfully reframe shortcomings.","2. Heighten vigilance.","3. Burrow under the skin of the dragon.",
                   "4. Surrender.","5. Visualize the desired outcome.","6. Let go the old. Turn to the new."],
      /*44*/  ["Reanissance.","1. Be the filament in the lightbulb, the wick in the candle.","2. Befriend imbalance.",
                   "3. Conflict is a diversion resulting in heightened insight.","4. Build a lasting edifice this time.",
                   "5. Do not force the bloom.","6. No investment is wated in the long run."],
      /*45*/  ["Growth through centering.","1. Touch the center.","2. Tread confidently into the new.","3. Self-alignment.",
                   "4. Appreciate self-worth and personal power.","5. Converse reasonably with doubts.",
                   "6. Go inward until meaning is found in disharmony."],
      /*46*/  ["Strenth of will.","1. Imagination joined with will bears fruit.","2. Treasure the insignificant.","3. Devotion melts glaciers.",
                   "4. Nurture the needs of the heart.","5. Treasure the moment.","6. Persist in the path proven by experience."],
      /*47*/  ["The resting point.","1. Affirm self-worth.","2. Pamper the positive. Negate the negative through acceptance.",
                   "3. Purify priorities. Foster appreciation.","4. A little self-oppression goes a long way.",
                   "5. Composure and sincerity make for a happy sacrifice.","6. Time for fresh, bright attitudes."],
      /*48*/  ["Infinite Worth.","1. Pioneer inward for self-knowledge.","2. Be inspired. True to intuition.",
                   "3. The window in the moment lights the whole.","4. Fold in and reflect.",
                   "5. Pure wisdom grows from pure thought.","6. The light within radiates blessing."],
      /*49*/  ["Listen inward. Nutrure the soul.","1. Maturity radiates from the center.","2. Dream with confidence.",
                   "3. At the bottom of the well lies the answer.","4. Hope born of regret transforms.","5. Wisdom trusts the guidance of intuition.",
                   "6. Embrace and cherish the faults."],
      /*50*/  ["The clear and open path.","1. Be the beginner.","2. Prosperity is within.",
                   "3. Practice understatement and gentleness.","4. For balance, reevaluate.",
                   "5. Guidance follows humility.","6. Turn up the light and accept the gift."],
      /*51*/  ["Initiation.","1. After the death comes the pregnant silence.","2. The husk is destroyed but never the seed.",
                   "3. Frighten the beast.","4. Let thoughts settle until they clear.","5. Tend the garden.",
                   "6. Time is for learning patience, not for doing."],
      /*52*/  ["The only time is the present.","1. Open.","2. Find the point of stillness.","3. Listen to the self that speaks in meditation.",
                   "4. Silence the ego. Explore self-mastery.","5. There is courage in silence.","6. Truth and composure further each other."],
      /*53*/  ["Life opens to the sun.","1. Listen carefully. Avoid self-criticism.","2. Remain centered in truth.",
                   "3. Self-acceptance knows no judgment.","4. Retreat. Time to meditate.","5. Merge with the shadow.",
                   "6. Turn from the old and face the new."],
      /*54*/  ["Start at the beginning.","1. Clear thinking is required.","2. Sincerity begets truth.",
                   "3. Find patience in error, wisdom in folly.","4. Wisdom and enthusiasm make good partners.",
                   "5. A firm foundation is built upon acceptance.","6. There is no substitute for love."],
      /*55*/  ["Completion is a new beginning.","1. Clear thinking is required.","2. Sincerity begets truth.",
                   "3. Find patience in error, wisdom in folly.","4. Wisdom and enthusiasm make good partners.",
                   "5. A firm foundation is built upon acceptance.","6. There is no substitute for love."],
      /*56*/  ["Departure is imminent.","1. A dignified spirit is pure water to a thirsting soul.","2. The intuitive innocent moves with confidence.",
                   "3. Emotion delays. Detachment centers.","4. Treasures of wisdom ease the mind.",
                   "5. New horizons await the caring.","6. Nurture the beauty of the unborn."],
      /*57*/  ["Perspective through surrender.","1. A strong center requires discipline.",
                   "2. There is light in the shadow. Find hidden motives and prejudices.","3. Circle upward in a spiral, not downward in a rut.",
                   "4. Gratitude and contentment rout obstacles.","5. Introspection reveals the truth.",
                   "6. Abandon indulgence."],
      /*58*/  ["Welcome the gentle heart.","1. Be self-assured in the truth.","2. Choose the higher path.","3. Dive into the dark center.",
                   "4. In peasure or pain uncover the presence of the other.","5. Let go outworn standards and enter the new.",
                   "6. Acknowledge the negative and accentuate the positive."],
      /*59*/  ["The mystery is penetrated by transcending the ego.","1. Lift up the fallen.","2. Tread softly, with mercy and unconditional acceptance.",
                   "3. Assess without judgment.","4. From the wealth of options draw with discernment.",
                   "5. Welcome the worst with generous indulgence.","6. An egoless nature appreciates being."],
      /*60*/  ["Creating through definition.","1. Acquiesce to the dormant season.","2. Without hesitation harvest the crop.",
                   "3. Severe pruning saves the fruit-bearing tree.","4. Freedom is actualized through self-limitation.",
                   "5. Sort issues. Guidance is clear when matters are prioritized.","6. Freedom is inherent in limitation."],
      /*61*/  ["Open to the knowledge within.","1. Love the whole uncondionally.","2. Appreciate worthy goals already achieved.",
                   "3. Strengthen the emotions through acceptance.","4. Release the child who is ready to grow up.",
                   "5. The unmined treasures are many. Be easy.","6. Faults provide unexpected guidance."],
      /*62*/  ["Rememberance.","1. What is already know is enough.","2. The new alway springs from the familiar.",
                   "3. Relax. Don't self-sabotage.","4. Meet the guardian fact to face.","5. Consult the higher self.",
                   "6. From the still center, falling and rising are the same."],
      /*63*/  ["Surrender knowledge and power. Yield to the calm.","1. Only seeds sown in love bear fragrant flowers.",
                   "2. Composure takes courage. Courage ensures composure.","3. Work now, rest later.","4. Sincerity and truth check decomposure.",
                   "5. Indentify the internal season.","6. Wipe the slate. Move along, with devotion and forgiveness."],
      /*64*/  ["Gain through letting go.","1. With gain comes sacrifice.","2. Rest in the natural rhythm.",
                   "3. Redirect intent.","4. Consider it achieved and it is.","5. Be the bridge between ambiguities.",
                   "6. Vision boosts confidence. Begin anew."]
              ]; /*closes array!*/


var moving_lines_outer = [ /*opens array!--with sub-arrays*/
      /*0*/   ["error0","error1","error2","error3","error4","error5","error6"],
      /*1*/   ["Pause and respond wisely.","1. Check for decay; winter approaches.  Dark and cold are the other sides of light and warmth.",
                   "2. Respond to the blessed forces of earth with balance and harmony.","3. The most excellent qualities are kept in modesty.",
                   "4. Wisdom avoids fame, and detachment is the key to liberation.","5. Modesty and reserve warm hearts.",
                   "6. Rise with the creative forces welling up within."],
      /*2*/   ["Conception.","1. Be the lightning hidden in the cloud.","2. Align with the powerful.",
                   "3. The creative power is strong. Strengthen values equally and shed illusions about time and reality.",
                   "4. There are two courses: outward, wielding influence, or inward, transmitting light. Choose wisely.",
                   "5. Creative energy finds its level.","6. Influence withheld allows circumstances to lead."],
      /*3*/   ["Ecstasy from labor.","1. Recognize the obstacle in the path.  Advance by helping others.","2. Master the solitary path.",
                   "3. Avoid plunging ahead without experience.","4. Seek aid. Choose it carefully but without delay.",
                   "5. Infinity is in the finite, eternity in the moment. Take care of details.","6. Embrace confusion. Divine inspiration comes out of chaos."],
      /*4*/   ["Beginning the quest.","1. Set rules. Follow them.","2. An understanding and compassionate nature brings responsibility to the beginner.",
                   "3. Destiny is formed through fantasy.","4. Inexperience is natural.  Curb anxiety.","5. Ask advice. Innocence accepted in rewarded.",
                   "6. The future is a blank slate waiting to be filled by the lessons from the past."],
      /*5*/   ["Minding the breath.","1. Stay completely in the present. Vague threats only disrupt the moment and diminish personal power.",
                   "2. Bond together.  Become a fog and allow gossip and rumor to pass through.","3. Relax; be composed. Respond only to what each moment brings.",
                   "5. Relax. Gain perspective.","6. There is a liberating new development. Welcome it."],
      /*6*/   ["Strike the middle path.","1. Withdraw from the conflict. In the end, all is well.","2. It is honorable to yield.",
                   "3. Produce superior work, even though there are difficulties.","4. Turn from the conflict. Submit to a higher power.",
                   "5. Resolve issues about motives.","6. Forego victory celebration in favor of stability and contentment."],
      /*7*/   ["Magnanimous acceptance.","1. Draw back in order to bring honesty and compassion to the forefront.",
                   "2. Accept the honor. It is symbolically received by all.","3. Quickly and with an open mind reasses personal strengths and weaknesses.",
                   "4. Withdraw. Later, success.","5. Follow, don't lead. Those who show themselves are not luminous.",
                   "6. One who is easily bought may bring disaster to a work which is otherwise blessed."],
      /*8*/   ["New Perspectives.","1. Let honesty lead into new alliances. Lasting bonds result.","2. Keep integrity.  Do not worry about approval.",
                   "3. Withdraw from the group but maintain friendly ties with the members.","4. Approach the one at the center while remaining true to inner principle.",
                   "5. Accept with grace those who agree and those who disagree.  Bonds must be formed in freedom and good will.",
                   "6. Time now for self-examination and forward movement."],
      /*9*/   ["Improvement from within.","1. Force is not the answer.  Truth lies within the heart.","2. Retreat and re-evaluate.",
                   "3. In conflict, dignity comes through inner development.",
                   "4. Sincere communication is necessary. Wisdom dawns when the truth is uncovered.",
                   "5. Foster sincere friendship.","6. Empowerment comes through passive luminosity."],
      /*10*/  ["Opinion better withheld.","1. Move toward simplicity.  Do not involve others.","2. Find contentment through modesty and moderation.",
                   "3. Exit a dangerous situation.","4. Caution and respect for danger are allies.",
                   "5. Proceed with the commitment. Have courage.","6. The success of the process predicts the success of the outcome."],
      /*11*/  ["Know the beloved.","1. Grace attracts those who share the same goals.","2. Be loyal. Be constant.","3. When overwhelmed, be at peace inwardly.",
                   "4. Mingle with all of humanity without care for winning or losing.","5. Create boundaries between the various spheres of activity.",
                   "6. Draw to the inner circle."],
      /*12*/  ["Reach beyond the horizon.","1. Go with coincidence.  It befriends, protects.","2. Cultivate the seeds of contentment.",
                   "3. Follow the highest, purest impulse regardless of a divisive situation.","4. It is time for bold action in keeping with principle.",
                   "5. Cultivate self-awareness.","6. Decadence is uprooted. Heaven and Earth rejoin. Rejoice."],
      /*13*/  ["Strength through commitment.","1. Work within the group.","2. Enlarge the circle. Include all.",
                   "3. Trust in others and in the process of the group.","4. Throw off defensiveness. Be reconciled with the group.",
                   "5. The group provides support in unfamiliar areas.","6. Even a fringe group offers substantial support."],
      /*14*/  ["Know the treasure.","1. While collecting possessions, remain true to principles.",
                   "2. Possession is immaterial. The choice is between attachment and freedom.","3. In the material world the path of joy is the path of sharing.",
                   "4. Don't imitate values; initiate them.","5. Good manners accompany good deeds.","6. Devotion, balance and integrity protect."],
      /*15*/  ["Equilibrium.","1. Overcome resistance with quietness and modesty.","2. Trust and trustworthiness go hand in hand.",
                   "3. In the midst of the difficult work is the answer.","4. Modest sincerity is not a slave to form.",
                   "5. Forego ego gratification.  Let unleashed power do the job.","6. Responsibility for self is the beginning of empowerment. Lead, with humility."],
      /*16*/  ["The path of least resistance.","1. Withhold influence. Practice self-awareness.","2. Pay attention. Take caution.",
                   "3. Do not wait for signals.  Be punctual.","4. Have faith.  There are many friends.",
                   "5. Fix the problem before it exacts a greater toll.","6. Take time to change what is needed."],
      /*17*/  ["Rest and relaxation.","1. Careful communication brings a cleansing change.","2. Choose the most worthwhile of close associations.",
                   "3. Sacrifice the inferior to gain the superior.","4. While seeking independence, be mindful of those who follow.",
                   "5. Insist upon excellence.","6. Be patient with limitations. Wise unselfish acts are rewarded."],
      /*18*/  ["Stability through maintenance.","1. Update principles, then carefully apply them.","2. Correct errors of others' making. Be considerate.",
                   "3. Repair despite others' concerns. The outcome justifies the action.","4. Examine the situation and determine what needs to be fixed.",
                   "5. Correct past mistakes.  Others will be supportive.","6. Avoid what is ruined. Avoid any conflict."],
      /*19*/  ["Eternal springtime.","1. The path is synchronized with the changing times. Share lovingly.",
                   "2. Success in the material world reaches balance through an understanding of its illusory nature.","3. Freedom itself can become a burden.  Beware overconfidence.",
                   "4. Continue.","5. Help lies in the middle path and grace is a two-way street.","6. Share the wealth of experience."],
      /*20*/  ["Realistic contemplation.","1. Mature vision comes from contemplation of the whole.","2. Mind personal affairs before offering the vision to others.",
                   "3. Mark the effect on circumstances and respond appropriately.","4. Do not shy away.  Come to understand the position in society.",
                   "5. Influence others through unspoken example.","6. Contemplation without ego gives wings."],
      /*21*/  ["Atonement.","1. Step back and reflect. Is the desired harvest being cultivated?","2. Denial courts disruption. Strong measures are in order.",
                   "3. Gain wisdom through pain and peace through powerlessness.","3. Gain wisdom through pain and peace through powerlessness.",
                   "5. Keep the path, alert to the dangers. Deal justice firmly , with fairness adn leniency.","6. Return to the truth.  But what is such an admonition to one who does not listen?"],
      /*22*/  ["Heaven grounded in Earth.","1. Alight from the vehicle lest it become a cage. Stand and go forth on foot.",
                   "2. Adhere spontaneously to social customs.","3. Sand that rests in the open palm runs out of the fist. Do not grasp.",
                   "4. In simplicity is found the self. In material gain, matter.","5. Act with humility and friendship. There is no disgrace.",
                   "6. Let grace shine from within, free of pretense and ornamentation."],
      /*23*/  ["Compassion brings levity to a grave situation.","1. Outwait the night. Rest in hidden integrity and strength.","2. Temper pride with compassion.",
                   "3. Compromise must come from a strong inner core.","4. Collapse can be planned and fruitful. The new rises from the ahses of the old.",
                   "5. Abundance comes with spiritual growth. Go forward without fear.","6. Develop new goals and envision new worlds."],
      /*24*/  ["New growth.","1. Exercise discipline. Trust Intuition.","2. Welcome the creative force stirring in the air.",
                   "3. Be sensitive to teh resounding truth.","4. Move with the renewing force. If others turn aside, never mind.",
                   "5. Self-awareness brings welcome change.","6. Prepare for change at the next opportunity."],
      /*25*/  ["Happiness is the moment.","1. Follow intuition and trust the integrity of will.","2. Advance if the moment--not the future--calls for it.",
                   "3. Look to innocence for an original way to alleviate the problem.","4. Retain the inner vision.  Instinct leads.",
                   "5. Let nature heal from the inside what cannot be remedied from without.","6. Do nothing. Hold still. Rest. There is peace within."],
      /*26*/  ["Expend energy wisely and carefully.","1. Be composed. Respect the power of the opposition.","2. Submit until the balance of power shifts.",
                   "3. Prepare cover while joining forces with like minds.","4. Take steps to avert a new threat.","5. Defuse danger without confrontation.",
                   "6. Remain centered, contented, in the midst of well-earned success."],
      /*27*/  ["Monitor appetites.","1. Be satisfied. Every need is filled.","2. Do not take from others what can be gathered alone.","3. Correct habits.",
                    "4. Nourish others with the gifts and continue to nourish the self.","5. Balance values and replenish the self.",
                    "6. Physical and spiritual sustenance are the same, to one who is in balance."],
      /*28*/  ["Emptiness precedes fulfillment.","1. Take every precaution in the beginning.","2. Move ahead with refreshing new developments.",
                    "3. Stop. Listen. Take advice.","4. Move ahead independently and with self-reliance.",
                    "5. Signs of life do not guarantee a return to the familiar. It may be something entirely new.","6. Attainment of the goal is worth the sacrifice."],
      /*29*/  ["Fencing with danger requires impeccability.","1. Stop and take an accounting. Plan to begin again.","2. Consistent attention to right action brings closure.",
                    "3. Stay put. Focus on the solution.","4. Maintain clarity and honesty until the solution appears.",
                    "5. Be quiet while the danger passes, then follow the flow away.","6. Develop patience. The loss of freedom is only a pause."],
      /*30*/  ["Honor interdependence.","1. Purity of motives brings clarity out of confusion.","2. Avoid extremes. Find balance.",
                    "3. In the twilight moment there is perfect wisdom and freedom.","4. Expend fuel prudently for a lasting flame.",
                    "5. Let the transforming fire burn. A change of heart brings wisdom.","6. Carefully direct the light and apply its flame only where necessary."],
      /*31*/  ["Experience the other.","1. Change begins within or there is no change.","2. The time for action ripens along with inner development. Wait.",
                    "3. Forget the future.  There is only the now.","4. What seems important is not. Go deeper for meaning.",
                    "5. Carry on with resolve. Leadership comes with the natural order.","6. Don't talk, do."],
      /*32*/  ["Move with principle.","1. Continuity at the center generates change outside.","2. Maintain ambition with balance.",
                    "3. Security in the world comes from balance within.","4. Be thankful.  When the problem is inside the solution is simpler.",
                    "5. If comitted, be committed. If not, don't pretend.","6. If consistency is difficult, just be composed."],
      /*33*/  ["Retreat repsectfully.","1. Do not go forward.  Do not go backward. Stay put.","2. Resolutely bolt, or pick up an ally and slip out the back.",
                    "3. Retreat  whiel fostering the support of the new force.","4. The inner self remains pure. Withdraw, will all dignity.",
                    "5. Maintain a spirit of cooperation with others and retreat together.","6. Bear no expectations and avoid disappointment. Fulfillment lies camouflaged in the dust underfoot."],
      /*34*/  ["Tried-and-true tradition.","1. Gather strength but do not act.","2. Use moderation. It is too early for enthusiasm.",
                    "3. Counter confidence with childlikeness and flexibility.","4. Balance power with spontaneity, guilelessness and understatement.",
                    "5. Force is superfluous. The truth needs no proving.","6. Give up. Give in. Take a break, with composure."],
      /*35*/  ["Improvement and refinement.","1. Approach the leadership.","2. The grieving process clears and empowers.",
                    "3. Active forces are attracted. Press forward.","4. Act openly or not at all. Secrets breed deception.","5. Graciously and humbly align with others.",
                    "6. vigorously block the obstacles within."],
      /*36*/  ["Letting be.","1. Do not act. Do not compromise.","2. Join with others to redeem the situation.",
                    "3. Let fate lead.  This too shall pass, is passing.","4. A good time to exit graciously.","5. Inaction averts retribution.",
                    "6. Tolerance and patience bring relief."],
      /*37*/  ["Honor the role.","1. Honesty that conforms to love is the best policy.","2. Apply love and compassion; avoid new responsibilities.",
                    "3. if the role is Yin, be severe. If Yang, be merciful.","4. Affirm the well-being of others.",
                    "5. Self-assured action with love gives clear signals.","6. Personal growth draws along others as well."],
      /*38*/  ["Be yourself.","1. Avoid regression to a polarized position.","2. For constructive compromise, privately engage the opposition.",
                    "3. Press through to peace.","4. Befriend another who is also isolated.","5. Someone wants to help. Trust.",
                    "6. It is a sincere overture of friendship. Open the heart."],
      /*39*/  ["Self-realization.","1. Hold back. Have patience. Reinforce support.","2. Proceed. Others count on it.",
                    "3. Do not proceed. Others depend on it.","4. Do not proceed alone. Confer with those like-minded.","5. Light furthers enlightenment; friendship begets friends.",
                    "6. Engage with the world where conflict and duplicity hold sway. That is where principles are tested."],
      /*40*/  ["The moment of liberation.","1. Lady Luck smiles. Be glad.","2. Spontaneity is not enough. Plan.",
                    "3. Adjust quickly. Center. Ground.","4. Leave behind inferior associations and trust the truth will follow.",
                    "5. Resolve escape. Deal carefully. Attend details.","6. Be alert for magic that leads both deeper and higher."],
      /*41*/  ["Wealth without excess.","1. Help others for their own reasons, then withdraw.","2. In order to help others, remian true to principle.",
                    "3. 'Three's a crowd.' One must withdraw. other affiliations will fillow.","4. Humbly accept help.",
                    "5. Accept with gratitude the extraordinary gifts that come by.","6. Mindfulness of the good of others equips for greater responsibility."],
      /*42*/  ["Consistent commitment.","1. It is time. Whatever it is, do it now.","2. Be thankful and loyal to those who help.",
                    "3. Selfless charity has its reward.","4. Form in between, find voice to mediate between high and low.",
                    "5. Give spontaneously without an eye to the receiver.","6. Match practice with principle."],
      /*43*/  ["Opening into the clear.", "1. Do not proceed. Rethink. Means are not equal to the end.",
                    "2. The means are equal to the end, nevertheless, stay on guard.", "3. Hold firmly to principle despite appearances.",
                    "4. Quit if possible. If not, close the book and throw the coins another day.", "Backward forces sprout like weeds. Humbly, patiently cultivate the crop.",
                    "6. For a new beginning there must first be an end."],
      /*44*/  ["Combustion.","1. Control the drive or be driven.","2. Keep excesses in check.",
                    "3. Maintain humor but do not give in.","4. The dance is ending. Choose carefully the next.",
                    "5. Let the heart contain passion, the passive contain the active.","6. What's done is done. Move on."],
      /*45*/  ["Join fully, serve fully.", "1. Seek out and serve the center.","2. Give in to the mysterious force. It is the universe in flux.",
                    "3. Approach the center with an open heart.","4. Sacrifice personal glory for the common goal.",
                    "5. Persuade those who secretly mistrust. Endure, persist and be confident.","6. It is not too late to share sadness with those who empathize."],
      /*46*/  ["Energetic persistence.","1. Initiative wins dividends from those who have power to bestow them.","2. A modest gift offered from the heart is treasured.",
                    "3. Confront the obstacles in the path.","4. Pay attention to spiritual needs.",
                    "5. Regardless of success, keep a normal pace and a natural balance.","6. Perseverence brings inspiration and clarity; blind impulse, loss."],
      /*47*/  ["Endurance.","1. Discouragement is a spell cast by false values.","2. Accept gain with gratitude and humility, and with mutual trust.",
                    "3. Carefully consider priorities. Discern between gift and obstacle.","4. Pure intention inhibits temptation.",
                    "5. The generous spirit incurs opposition.","6. The oppression is one the wane. Respond to the moment, not the past."],
      /*48*/  ["Perpetual bounty.","1. Self-knowledge comes first, then self-expression.","2. Withhold sympathy where there is danger of self-serving.",
                    "3. Offer help, but others must accept of their own volition.","4. Retreat and reevaluate. Tend to self.",
                    "5. There is help for every need.","6. Share the truth."],
      /*49*/  ["Mind the immediate","1. Ciltivate moderations. Do not try to keep abreast.","2. Plan with care and then act with confidence.",
                    "3. Skillfully blend openness with self-control. Beware confterfeit movements.  Rely on the trustworthy.","4. Further the revolution that goes beyond words.",
                    "5. Trust intuition and act spontaneously.","6. Effort negates the happy accident. The stars are undaunted by global change. So are the quiet and simple."],
      /*50*/  ["Cosmic harmony.","1. Hold to principle even if it means starting over.","2. Stand firm even if it means standing alone.",
                    "3. stay balanced; be positive. No need for change; the times will change.","4. Retreat; rethink. Do not confront.",
                    "5. Share the inner light only when asked, then do so with humility.","6. Share wisdom and love."],
      /*51*/  ["Fire of the pheonix.","1. After the terror, soar.","2. Lightning strikes but it cannot destroy the soul.",
                    "3. Act as called for by the tumult.","4. Clarity and resilience rise from flexibility.",
                    "5. Carry on, despite adversity.","6. Withdraw, though some will find fault."],
      /*52*/  ["Alignment in the now.","1. Follow impulse while honoring the vision.","2. Though others plunge on, be aware of the silence.",
                    "3. Relax. Do not force the quest.","4. Mastery is not a construct of the ego.",
                    "5. Calmly, accurately, express what is within.","6. Hold the stillness and gain the truth."],
      /*53*/  ["Let go wisely.","1. Early mistakes are teachers for later action.","2. Share insights with others.",
                    "3. Be prepared to defend without offending. Humor helps.","4. An embarrassing situation provides an opportunity.",
                    "5. A long journey is disorienting. Remain stable.  Friends will come around again.","6. Growth sends light to others who respond with love."],
      /*54*/  ["Wisely submit.","1. When favor passes by, resort to good humor.","2. Disappointment is a teacher. Learn well.","3. Think before compromising values.",
                    "4. Persevere. Patience and discretion pay.","5. Acceptance of a lesser role does not diminish the player.",
                    "6. It is not possible to measure up. Be satisfied. It is only a role."],
      /*55*/  ["Choose basic essentials.","1. Bond with the better half.","2. Overcome suspicion and envy with truthful sincerity.",
                    "3. Turn from incompetence to inward success.","4. Partnership overcomes weakness. Decide wisely and with enthusiasm.",
                    "5. Like attracts like. Strength of character attracts strong, principled people.","6. Abundance is the treasure within."],
      /*56*/  ["Keep moving.","1. Only those fully involved may scrutinize.","2. Tranquil strength attracts support.","3. Calm the emotions; breath peace into the body.",
                    "4. Freedom is not found in possessions. Make provisions for the spirit.","5. Establish a place in new territory, observing every courtesy.",
                    "6. Eschew drama and honor the insignificant. Destiny may turn upon a trife."],
      /*57*/  ["Attainment through willing submission.","1. A quiet demeanor need not displace strong conviction.","2. Seek counsel. Resolve conflict.",
                    "3. Act without hesitation. Too much reflection begets indecision.","4. Confront adversaries with modesty and confidence. Shun desire.",
                    "5. Plan carefully the coming changes. If initial plans fail, plan again.","6. Withdraw. Do not interact or react."],
      /*58*/  ["Growth through caring.","1. Let go of the desire and rule out disappointment.","2. Enjoy, but not at others' expense.",
                    "3. Go beneath the surface and surface in the void.","4. Choose creative enjoyment. Shun destructive pleasure.",
                    "5. Do not confuse pleasure with principle.","6. Worth of the self surpasses any other pleasurabe sensation."],
      /*59*/  ["Transcendence.","1. Be conscientiously involved without ego, in helping others.","2. Forego judgment for discernment. Know that all is illuson.",
                    "3. Strength is born of balance between selflessness and self-care.","4. Maintain high ideals and concern for others while backing away to renew perspective.",
                    "5. Share what is treasured. Inspiration and unity follow.","6. Leave the scene of danger. Selflessness doe snot require self-sacrifice."],
      /*60*/  ["Limitation through definition.","1. Until clarity comes, do not act.","2. Act now. Do not hesitate.","3. Trim away excess and simplify the course.",
                    "4. Simplify with emphasis on comfort.","5. It is time to set limits on others.","6. Self-control is enough control."],
      /*61*/  ["Combine intuition and expression.","1. Truth is within, to be applied outwardly.",
                    "2. Listen for the calls of kindred spirits, and answer whether they are nearby or not.","3. Rely on the self, not on external reality.",
                    "4. The price of growth is the loss of that which is outgrown.","5. Those who are universally empathetic magnetize others.","6. virtue speaks for itself."],
      /*62*/  ["Duty with dignity.","1. Follow tradition and avert danger.","2. Accept the honor and behave within the norm with all diligence.",
                    "3. Take immediate precautions against conceived ill.  Attend every detail.","4. Do not act. Do not react. Do not self-disclose, and do not hide.",
                    "5. Be optimistic but realistic. Get help.","6. Downfall is the first step in rising. Become self-aware."],
      /*63*/  ["Knowledge is redundant when it is time to be still.","1. Ripples return to the shore of origin. Hold to inner principle.",
                    "2. Be patient, modest and dignified. In time the gifts are called forth.","3. Achievement requires all. Otherwise there is no achievement.",
                    "4. Prepare wisely without excessive concern.","5. Simplicity and timing are paramount.","6. The past is an illusion. Act responsibly now."],
      /*64*/  ["Memorable closure.","1. Inaction is the best course.","2. Wait for the right time, but prepare. No act is divorced from its precedents.",
                    "3. It is time to act, but don't. Withdraw completely, and move on.","4. Act now. Complete the act. Everything depends on it.",
                    "5. Listen and watch. Make connection, with sound judgment.","6. Celebrate the essence, not the success."]
               ]; /*closes array*/

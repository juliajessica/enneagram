import React, { Fragment } from 'react';
import './Header.css';
import { FlipCard } from '../Components/FlipCard';
import TypeWhite from '../Components/TypeWhite';
import TypeColor from '../Components/TypeColor';

export const Types = () => {
  return (
    <Fragment>
      <TypeColor
      numberType={'Type 1'} 
      type={'THE REFORMER'} 
      description={'The Rational, Idealistic Type: Principled, Purposeful, Self-Controlled, and Perfectionistic'}
      fullDescription={'Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake. Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic. They typically have problems with resentment and impatience.'}
      number={'Three'}
      firstWingNumberType={'Nine-Wing'}
      firstWingType={'The Idealist'}
      secondWingNumberType={'Two-Wing'}
      secondWingType={'The Advocate'}
      flipCard1={<FlipCard frontText={'Wise, discerning, realistic, and noble. Can be morally heroic.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of being corrupt/evil, defective'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To be good, to have integrity, to be balanced'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'To be right, to strive higher and improve everything, to be consistent with their ideals, to justify themselves'} backText='Key Motivations'/>}
    />
    <TypeWhite
      numberType={'Type 2'} 
      type={'THE HELPER'} 
      description={'The Caring, Interpersonal Type: Demonstrative, Generous, People-Pleasing, and Possessive'}
      fullDescription={'Twos are empathetic, sincere, and warm-hearted. They are friendly, generous, and self-sacrificing, but can also be sentimental, flattering, and people-pleasing. They are well-meaning and driven to be close to others, but can slip into doing things for others in order to be needed. They typically have problems with possessiveness and with acknowledging their own needs.'}
      number={'Two'}
      firstWingNumberType={'One-Wing'}
      firstWingType={'The Servant'}
      secondWingNumberType={'Three-Wing'}
      secondWingType={'The Host/Hostess'}
      flipCard1={<FlipCard frontText={'Unselfish and altruistic, they have unconditional love for others'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of being unwanted, unworthy of being loved'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To feel loved'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to be loved, to express their feelings for others, to be needed and appreciated, to get others to respond to them, to vindicate their claims about themselves.'} backText='Key Motivations'/>}
    />
    <TypeColor
      numberType={'Type 3'} 
      type={'THE ACHIEVER'} 
      description={'The Success-Oriented, Pragmatic Type: Adaptive, Excelling, Driven, and Image-Conscious'}
      fullDescription={'Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned with their image and what others think of them. They typically have problems with workaholism and competitiveness.'}
      number={'Three'}
      firstWingNumberType={'Two-Wing'}
      firstWingType={'The Charmer'}
      secondWingNumberType={'Four-Wing'}
      secondWingType={'The Professional'}
      flipCard1={<FlipCard frontText={'Self-accepting, authentic, everything they seem to be—role models who inspire others.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of being worthless'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To feel valuable and worthwhile'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to be affirmed, to distinguish themselves from others, to have attention, to be admired, and to impress others.'} backText='Key Motivations'/>}
    />
    <TypeWhite
      numberType={'Type 4'} 
      type={'THE INDIVIDUALIST'} 
      description={'The Sensitive, Withdrawn Type: Expressive, Dramatic, Self-Absorbed, and Temperamental'}
      fullDescription={'Fours are self-aware, sensitive, and reserved. They are emotionally honest, creative, and personal, but can also be moody and self-conscious. Withholding themselves from others due to feeling vulnerable and defective, they can also feel disdainful and exempt from ordinary ways of living. They typically have problems with melancholy, self-indulgence, and self-pity.'}
      number={'Four'}
      firstWingNumberType={'Three-Wing'}
      firstWingType={'The Aristocrat'}
      secondWingNumberType={'Five-Wing'}
      secondWingType={'The Bohemian'}
      flipCard1={<FlipCard frontText={'Inspired and highly creative, they are able to renew themselves and transform their experiences.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'That they have no identity or personal significance'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To find themselves and their significance (to create anidentity)'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Express themselves and their individuality, to create and surround themselves with beauty, protect their self-image, take care of emotional needs before attending to anything else.'} backText='Key Motivations'/>}
    />
    <TypeColor
      numberType={'Type 5'} 
      type={'THE INVESTIGATOR'} 
      description={'The Intense, Cerebral Type: Perceptive, Innovative, Secretive, and Isolated'}
      fullDescription={'Fives are alert, insightful, and curious. They are able to concentrate and focus on developing complex ideas and skills. Independent, innovative, and inventive, they can also become preoccupied with their thoughts and imaginary constructs. They become detached, yet high-strung and intense. They typically have problems with eccentricity, nihilism, and isolation'}
      number={'Five'}
      firstWingNumberType={'Four-Wing'}
      firstWingType={'The Iconoclast'}
      secondWingNumberType={'Six-Wing'}
      secondWingType={'The Solver'}
      flipCard1={<FlipCard frontText={'Visionary pioneers, often ahead of their time, and able to see the world in an entirely new way.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Being useless, helpless, or incapable'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To be capable and competent'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to possess knowledge, to understand the environment, to have everything figured out as a way of defending the self from threats from the environment.'} backText='Key Motivations'/> }
    />
    <TypeWhite
      numberType={'Type 6'} 
      type={'THE LOYALIST'} 
      description={'The Committed, Security-Oriented Type: Engaging, Responsible, Anxious, and Suspicious'}
      fullDescription={'The committed, security-oriented type. Sixes are reliable, hard-working, responsible, and trustworthy. Excellent "troubleshooters," they foresee problems and foster cooperation, but can also become defensive, evasive, and anxious—running on stress while complaining about it. They can be cautious and indecisive, but also reactive, defiant and rebellious. They typically have problems with self-doubt and suspicion.'}
      number={'Six'}
      firstWingNumberType={'Five-Wing'}
      firstWingType={'The Defender'}
      secondWingNumberType={'Seven-Wing'}
      secondWingType={'The Buddy'}
      flipCard1={<FlipCard frontText={'Internally stable and self-reliant, courageously championing themselves and others.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of being without support and guidance'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To have security and support'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to have security, to feel supported by others, to have certitude and reassurance, to test the attitudes of others toward them, to fight against anxiety and insecurity.'} backText='Key Motivations'/> }
    />
    <TypeColor 
      numberType={'Type 7'} 
      type={'THE PEACEMAKER'} 
      description={'The Busy, Fun-Loving Type: Spontaneous, Versatile, Distractible, and Scattered'}
      fullDescription={'Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined. They constantly seek new and exciting experiences, but can become distracted and exhausted by staying on the go. They typically have problems with impatience and impulsiveness.'}
      number={'Seven'}
      firstWingNumberType={'Six-Wing'}
      firstWingType={'The Referee'}
      secondWingNumberType={'Eight-Wing'}
      secondWingType={'The Dreamer'}
      flipCard1={<FlipCard frontText={'They focus their talents on worthwhile goals, becoming appreciative, joyous, and satisfied.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of being deprived and in pain'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To be satisfied and content—to have their needs fulfilled'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to maintain their freedom and happiness, to avoid missing out on worthwhile experiences, to keep themselves excited and occupied, to avoid and discharge pain.'} backText='Key Motivations'/>}
      />
    <TypeWhite
      numberType={'Type 8'} 
      type={'THE ENTHUSIAST'} 
      description={'The Powerful, Dominating Type: Self-Confident, Decisive, Willful, and Confrontational'}
      fullDescription={'Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering. Eights feel they must control their environment, especially people, sometimes becoming confrontational and intimidating. Eights typically have problems with their tempers and with allowing themselves to be vulnerable.'}
      number={'Eight'}
      firstWingNumberType={'Seven-Wing'}
      firstWingType={'The Maverick'}
      secondWingNumberType={'Nine-Wing'}
      secondWingType={'The Bear'}
      flipCard1={<FlipCard frontText={'Self- mastering, they use their strength to improve others lives, becoming heroic, magnanimous, and inspiring.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of being harmed or controlled by others'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To protect themselves (to be in control of their own life and destiny)'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to be self-reliant, to prove their strength an resist weakness, to be important in their world, to dominate the environment, and to stay in control of their situation.'} backText='Key Motivations'/>}
    />
    <TypeColor 
      numberType={'Type 9'} 
      type={'THE PEACEMAKER'} 
      description={'The Easygoing, Self-Effacing Type: Receptive, Reassuring, Agreeable, and Complacent'}
      fullDescription={'Nines are accepting , trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace. They want everything to go smoothly and be without conflict, but they can also tend to be complacent, simplifying problems and minimizing anything upsetting. They typically have problems with inertia and stubbornness'}
      number={'Nine'}
      firstWingNumberType={'Eight-Wing'}
      firstWingType={'The Referee'}
      secondWingNumberType={'One-Wing'}
      secondWingType={'The Dreamer'}
      flipCard1={<FlipCard frontText={'Indomitable and all-embracing, they are able to bring people together and heal conflicts.'} backText='At their Best'/>}
      flipCard2={<FlipCard frontText={'Of loss and separation'} backText='Basic Fear'/>}
      flipCard3={<FlipCard frontText={'To have inner stability "peace of mind"'} backText='Basic Desire'/>}
      flipCard4={<FlipCard frontText={'Want to create harmony in their environment, to avoid conflicts and tension, to preserve things as they are, to resist whatever would upset or disturb them.'} backText='Key Motivations'/>}
      />
    </Fragment>
  );
}

export default Types;

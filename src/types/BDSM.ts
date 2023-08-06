import { MultipleProps } from './Props';
import { Information, convertInformation2Obj } from './Information';

export const bdsmArray: readonly Information[] = [
  {
    text: 'Dominant',
    description: 'Dominants like to be in charge. Some like to have their partner obey them without questioning, others like some resistance while taking it their way. Some are dominant only in the bedroom, others are dominant throughout their daily life as well. Unlike the top roles (giving pain/bondage/degradation), being dominant is more about who decides what happens (and takes the responsibility that comes with it) than about the contents of what happens.',
  },
  {
    text: 'Submissive',
    description: 'Submissives like to follow. Some like to give the control away to their partner(s), some like to have it forcibly taken from them. Some are submissive only in the bedroom, others are submissive throughout their daily life as well (usually with limitations). Unlike the bottom roles (receiving pain/bondage/degradation), being submissive is more about who decides what happens (and takes the responsibility that comes with it) than about the contents of what happens.',
  },
  {
    text: 'Sadist',
    description: 'Sadists enjoy inflicting (certain types of) pain on their partner(s), usually in a sexual context.',
  },
  {
    text: 'Masochist',
    description: 'Masochists enjoy receiving (certain types of) pain from their partner(s), usually in a sexual context. Masochism is independent of pain tolerance: it is purely about the ability to enjoy (or get aroused by) certain levels of pain.',
  },
  {
    text: 'Switch',
    description: 'Switches like to... well, switch. Always taking a dominant or top position is not for them, neither is always taking a submissive or bottom position. Some prefer to switch with the same partner or partners, others have a dominant play partner and a submissive play partner, but in either case they do not fit on one end point of the spectrum.',
  },
  {
    text: 'Master/Mistress',
    description: 'Masters/Mistresses receive complete control over the life of their slave(s), and all responsibilities that come with it. They go a step further than dominants in the sense that their power exchange is present 24/7 and in all aspects of their life (except for negotiated exceptions such as during their office jobs). Their primary focus is to create a stable and safe environment for their slave(s), to allow optimal servitude.',
  },
  {
    text: 'BratTamer',
    description: 'Brat tamers are, in essence, dominants who enjoy handling bratty submissives. They find disobedience a form of playfulness from the side of the submissive, rather than a form of rudeness. They will take no offence to it, but will still teach the sub a well deserved lesson (because, of course, that is why the bratty sub shows such behavior in the first place).',
  },
  {
    text: 'Brat',
    description: 'Brats are, in essence, naughty submissives. They find disobedience a form of playfulness rather than letting their dominant down, and require a compatible dominant who will not only teach them a lesson, but also accept that any number of lessons might still not necessarily change this behavior.',
  },
  {
    text: 'Daddy/Mommy',
    description: 'Daddies/Mommies take on a caretaker role in the relationship, being a guide as much a dominant. Daddies/Mommies dominate their little treasure submissives with an iron fist in a velvet glove: much cuddly and affectionate on the outside, while being as sturdy and hard on the inside as other dominants. Using subtle psychological mechanisms rather than brute power, they nurture their littles into obedience. Sexuality is not necessarily involved, and there is no link at all with pedophilia (which is simply not on the BDSM spectrum).',
  },
  {
    text: 'Little',
    description: 'Littles (girls/boys) are submissive spirits with a strong flavor childlike innocence. They long for a nurturing loving dominant who plays a guiding, almost parental role in their lives. While they require a softer approach to be dominated than most other submissives, their submission can be just as deep as that of other submissives or slaves. Sexuality is not necessarily involved, and there is no link at all with pedophilia (which is simply not on the BDSM spectrum).',
  },
  {
    text: 'Owner',
    description: "Owners own pets/properties and take responsibility over them, on a 24/7 basis. Sexuality is not necessarily involved; in some cases role play attributes are also provided (e.g. a cage for the pet). There is no link at all with sex with animals (which is simply not on the BDSM spectrum), and many pets don't even feel like they're playing an animal, it's more about the typical relationship between an owner and a pet.",
  },
  {
    text: 'Pet',
    description: "Pets are property of their owner in daily life. Sexuality is not necessarily involved; in some cases role play attributes are also provided (e.g. a cage for the pet). There is no link at all with sex with animals (which is simply not on the BDSM spectrum), and many pets don't even feel like they're playing an animal, it's more about the typical relationship between an owner and a pet.",
  },
  {
    text: 'Ageplayer',
    description: 'Ageplayers like to play with age as part of their kink. They typically take on a much younger or older age than they actually are, or prefer playing with a partner that does so. Attributes and behavior changes (such as pacifiers, coloring books, speaking in more childlike language, etc.) are commonly paired with this, to enrich the context and make it more appropriate for the played age. Sexuality is not necessarily involved, and there is no link at all with pedophilia (which is simply not on the BDSM spectrum).',
  },
  {
    text: 'Spanker',
    description: 'Someone who spanks.',
  },
  {
    text: 'Spankee',
    description: 'The receiver or victim of a spanking',
  },
  {
    text: 'Exhibitionist',
    description: 'Exhibitionists enjoy showing their naked body or a sexual activity to other people. Consensually, of course.',
  },
  {
    text: 'Voyeur',
    description: 'Voyeurs enjoy watching the nakedness or sexual activity of other people. Consensually, of course.',
  },
  {
    text: 'Ropebunny',
    description: 'Rope bunny likes to be tied up and restrained, using rope and/or other attributes (chains, cuffs, spreader bars, etc.). Whether for sexual enhancement, for art or just for fun, they enjoy being totally at the mercy of their partner(s).',
  },
  {
    text: 'Hunter',
    description: 'Primals are mainly focused on their natural instincts and they enjoy letting their inner animal out during sex. The key part for primals play is that the participants show their raw, emotional sexual feelings during play. All of the labels, roles, and protocols go out the window, and the prey can become a snarling, growing, clawing animal hell-bent on getting away from its predator (you).',
  },
  {
    text: 'Prey',
    description: 'Primals are mainly focused on their natural instincts and they enjoy letting their inner animal out during sex. The key part for primals play is that the participants show their raw, emotional sexual feelings during play. All of the labels, roles, and protocols go out the window, and the prey (you) can become a snarling, growing, clawing animal hell-bent on getting away from its predator.',
  },
  {
    text: 'Rigger',
    description: 'Riggers like to tie up and restrain their partner(s), using rope and/or other attributes (chains, cuffs, spreader bars, etc.). Whether for sexual enhancement, for art or just for fun, they enjoy having their partners completely at their mercy.',
  },
  {
    text: 'Vanilla',
    description: '',
  },
  {
    text: 'Other',
    description: '',
  },
] as const;

export type BDSM = typeof bdsmArray[number]['text'];

export const BDSM = convertInformation2Obj(bdsmArray);

export interface BDSMProperty extends MultipleProps<BDSM> { };
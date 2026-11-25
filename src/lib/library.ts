/**
 * The reading library, grouped by deity for the header menu.
 * Paths are canonical (no locale prefix). Titles come from i18n.
 */

export interface LibraryItem {
  href: string;
  titleKey: string;
}

export interface LibraryGroup {
  id: string;
  art: string;
  items: LibraryItem[];
}

export const LIBRARY: LibraryGroup[] = [
  {
    id: 'hanuman',
    art: '/art/hanuman.jpg',
    items: [
      { href: '/chalisa/hanuman', titleKey: 'chalisa.title.hanuman' },
      { href: '/paath/hanuman-aarti', titleKey: 'paath.title.hanuman-aarti' },
      { href: '/paath/bajrang-baan', titleKey: 'paath.title.bajrang-baan' },
      { href: '/paath/sankat-mochan-hanuman-ashtak', titleKey: 'paath.title.sankat-mochan-hanuman-ashtak' },
    ],
  },
  {
    id: 'shiva',
    art: '/art/shiva.jpg',
    items: [{ href: '/chalisa/shiv', titleKey: 'chalisa.title.shiv' }],
  },
  {
    id: 'durga',
    art: '/art/durga.jpg',
    items: [
      { href: '/chalisa/durga', titleKey: 'chalisa.title.durga' },
      { href: '/paath/durga-aarti', titleKey: 'paath.title.durga-aarti' },
      { href: '/paath/durga-kavach', titleKey: 'paath.title.durga-kavach' },
    ],
  },
  {
    id: 'ganesh',
    art: '/art/ganesh.jpg',
    items: [
      { href: '/chalisa/ganesh', titleKey: 'chalisa.title.ganesh' },
      { href: '/paath/ganesh-aarti', titleKey: 'paath.title.ganesh-aarti' },
    ],
  },
  {
    id: 'shani',
    art: '/art/shani.jpg',
    items: [{ href: '/chalisa/shani', titleKey: 'chalisa.title.shani' }],
  },
  {
    id: 'laxmi',
    art: '/art/laxmi.jpg',
    items: [{ href: '/chalisa/laxmi', titleKey: 'chalisa.title.laxmi' }],
  },
  {
    id: 'saraswati',
    art: '/art/saraswati.jpg',
    items: [{ href: '/chalisa/saraswati', titleKey: 'chalisa.title.saraswati' }],
  },
  {
    id: 'vishnu',
    art: '/art/vishnu.jpg',
    items: [
      { href: '/paath/om-jai-jagdish-hare', titleKey: 'paath.title.om-jai-jagdish-hare' },
      { href: '/paath/satyanarayan-aarti', titleKey: 'paath.title.satyanarayan-aarti' },
    ],
  },
];

const ART_BY_DEITY: Record<string, string> = {
  hanuman: '/art/hanuman.jpg',
  shiva: '/art/shiva.jpg',
  shiv: '/art/shiva.jpg',
  durga: '/art/durga.jpg',
  ganesha: '/art/ganesh.jpg',
  ganesh: '/art/ganesh.jpg',
  shani: '/art/shani.jpg',
  laxmi: '/art/laxmi.jpg',
  lakshmi: '/art/laxmi.jpg',
  saraswati: '/art/saraswati.jpg',
  vishnu: '/art/vishnu.jpg',
  satyanarayan: '/art/vishnu.jpg',
};

/** Original portrait for a content `deity` field. Falls back to Hanuman. */
export function artForDeity(deity: string): string {
  return ART_BY_DEITY[deity.trim().toLowerCase()] ?? '/art/hanuman.jpg';
}

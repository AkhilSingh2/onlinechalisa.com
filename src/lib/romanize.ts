/**
 * Devanagari → readable Roman, for the line under a paath verse.
 * This is a pronunciation aid (nischay, hanumaan), not a translation.
 * Long vowels are doubled (aa, ee, oo). A trailing inherent schwa is
 * dropped, and a short schwa between two sounded syllables is dropped,
 * which is how Hindi is actually said.
 */

const VOWELS: Record<string, string> = {
  अ: 'a', आ: 'aa', इ: 'i', ई: 'ee', उ: 'u', ऊ: 'oo',
  ऋ: 'ri', ॠ: 'ri', ऌ: 'li', ॡ: 'li',
  ऍ: 'e', ऎ: 'e', ए: 'e', ऐ: 'ai',
  ऑ: 'o', ऒ: 'o', ओ: 'o', औ: 'au',
};

const MATRAS: Record<string, string> = {
  'ा': 'aa', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo',
  'ृ': 'ri', 'ॄ': 'ri', 'ॢ': 'li', 'ॣ': 'li',
  'ॅ': 'e', 'ॆ': 'e', 'े': 'e', 'ै': 'ai',
  'ॉ': 'o', 'ॊ': 'o', 'ो': 'o', 'ौ': 'au',
};

const CONS: Record<string, string> = {
  क: 'k', ख: 'kh', ग: 'g', घ: 'gh', ङ: 'ng',
  च: 'ch', छ: 'chh', ज: 'j', झ: 'jh', ञ: 'ny',
  ट: 't', ठ: 'th', ड: 'd', ढ: 'dh', ण: 'n',
  त: 't', थ: 'th', द: 'd', ध: 'dh', न: 'n',
  प: 'p', फ: 'ph', ब: 'b', भ: 'bh', म: 'm',
  य: 'y', र: 'r', ल: 'l', व: 'v', ळ: 'l',
  श: 'sh', ष: 'sh', स: 's', ह: 'h',
  क़: 'q', ख़: 'kh', ग़: 'g', ज़: 'z', ड़: 'd', ढ़: 'dh', फ़: 'f',
};

const NUKTA: Record<string, string> = {
  क: 'q', ख: 'kh', ग: 'g', ज: 'z', ड: 'd', ढ: 'dh', फ: 'f',
};

const DIGITS: Record<string, string> = {
  '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
  '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
};

type Syl = { base: string; vowel: string; inherent: boolean; nasal: boolean };

function romanizeWord(word: string): string {
  const chars = [...word];
  const syls: Syl[] = [];

  const takeNasal = (idx: number): { nasal: boolean; idx: number } => {
    const n = chars[idx + 1];
    if (n === 'ं' || n === 'ँ') return { nasal: true, idx: idx + 1 };
    return { nasal: false, idx };
  };

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === 'ः' && syls.length) {
      syls[syls.length - 1].vowel += 'h';
      continue;
    }
    if (VOWELS[ch]) {
      const nasal = takeNasal(i);
      i = nasal.idx;
      syls.push({ base: '', vowel: VOWELS[ch], inherent: false, nasal: nasal.nasal });
      continue;
    }
    if (ch === 'ॐ') {
      syls.push({ base: '', vowel: 'om', inherent: false, nasal: false });
      continue;
    }
    if (!CONS[ch]) continue;

    let base = CONS[ch];
    if (chars[i + 1] === '़' && NUKTA[ch]) {
      base = NUKTA[ch];
      i++;
    }

    // ज्ञ is pronounced "gy", not "jny".
    if (ch === 'ज' && chars[i + 1] === '्' && chars[i + 2] === 'ञ') {
      i += 2;
      let vowel = 'a';
      let inherent = true;
      if (MATRAS[chars[i + 1]]) {
        vowel = MATRAS[chars[++i]];
        inherent = false;
      }
      const nasal = takeNasal(i);
      i = nasal.idx;
      syls.push({ base: 'gy', vowel, inherent, nasal: nasal.nasal });
      continue;
    }

    if (chars[i + 1] === '्') {
      syls.push({ base, vowel: '', inherent: false, nasal: false });
      i++;
      continue;
    }

    if (MATRAS[chars[i + 1]]) {
      const vowel = MATRAS[chars[++i]];
      const nasal = takeNasal(i);
      i = nasal.idx;
      syls.push({ base, vowel, inherent: false, nasal: nasal.nasal });
      continue;
    }

    const nasal = takeNasal(i);
    i = nasal.idx;
    syls.push({ base, vowel: 'a', inherent: true, nasal: nasal.nasal });
  }

  if (!syls.length) return word;

  const last = syls[syls.length - 1];
  // A nasal mark sits on the schwa (चं is "chan"), so that vowel stays.
  if (last.inherent && !last.nasal) last.vowel = '';
  for (let i = 1; i < syls.length - 1; i++) {
    const s = syls[i];
    if (!s.inherent || !s.vowel || s.nasal) continue;
    if (syls[i - 1].vowel && syls[i + 1].vowel) s.vowel = '';
  }

  return syls.map((s) => s.base + s.vowel + (s.nasal ? 'n' : '')).join('');
}

/** Romanize a Devanagari line. Latin, punctuation and spaces pass through. */
export function romanize(text: string): string {
  const prepared = text
    .replace(/[०-९]/g, (d) => DIGITS[d] ?? d)
    .replace(/॥/g, '. ')
    .replace(/।/g, '. ');
  return prepared
    .replace(/[\u0900-\u097F]+/g, (word) => romanizeWord(word))
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .trim();
}

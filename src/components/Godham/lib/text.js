const DEVANAGARI_RANGE = /[ऀ-ॿ]/;

// Used to pick the Devanagari-capable font for any text block that contains
// Hindi script, while leaving English/Hinglish text (e.g. "Daily Feed (Gau
// Aahar)") on the site's normal Latin display/body fonts.
export function devaClass(text) {
  return DEVANAGARI_RANGE.test(text || '') ? 'deva' : '';
}

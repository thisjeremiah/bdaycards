export const paperPatterns = {
  default: 'paper-2',
  fibers: 'light-paper-fibers',
  canvas: 'beige-paper',
  texture: 'cream-paper',
  board: 'white-paperboard',
  painterly: 'textured-paper',
  rice: 'rice-paper-2',
  natural: 'natural-paper',
}

export function paperStyle(key: keyof typeof paperPatterns) {
  return {
    backgroundImage: `url("https://www.transparenttextures.com/patterns/${paperPatterns[key]}.png")`,
  }
}

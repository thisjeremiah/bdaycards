const paperPatterns = {
  default: 'paper-2',
  fibers: 'light-paper-fibers',
  canvas: 'beige-paper',
  texture: 'cream-paper',
  board: 'white-paperboard',
  painterly: 'textured-paper',
  rice: 'rice-paper-2',
  natural: 'natural-paper',
}

const paperPattern = paperPatterns['natural']

export const paperStyle = {
  backgroundImage: `url("https://www.transparenttextures.com/patterns/${paperPattern}.png")`,
}

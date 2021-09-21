// 'starwars' | 'starwars1' | 'hamilton'

export function Stamp(props: { src: string; pattern?: boolean }) {
  return (
    <div className="relative">
      {props.pattern && (
        <div className="absolute left-[-20px] top-[4px]">
          <StampPattern />
        </div>
      )}
      <div
        className="p-[6px] w-[90px] h-[100px]"
        style={{
          backgroundImage: 'radial-gradient(transparent 50%, white 50%)',
          backgroundPosition: '-5px -5px',
          backgroundRepeat: 'repeat',
          backgroundSize: '10px 10px',
        }}
      >
        <div
          className="bg-gray-200 w-full h-full"
          style={{
            backgroundImage: `url(${props.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  )
}

function StampPattern() {
  return (
    <div>
      <PatternLine />
      <PatternLine />
      <PatternLine />
      <PatternLine />
      <PatternLine />
      <PatternLine />
      <PatternLine />
    </div>
  )
}

function PatternLine() {
  const scale = 0.33
  const color = 'rgba(0, 0, 0, 0.5)'

  const ellipseStyle = {
    position: 'absolute',
    background: `radial-gradient(ellipse, transparent,
      transparent ${7 * scale}px,
      ${color} ${7 * scale}px,
      ${color} ${10 * scale}px,
      transparent ${11 * scale}px
    )`,
    backgroundSize: `${36 * scale}px ${40 * scale}px`,
    width: 400 * scale,
    height: 20 * scale,
  } as const

  return (
    <>
      <div
        className="overflow-hidden relative"
        style={{
          width: 400 * scale,
          height: 40 * scale,
        }}
      >
        <div style={ellipseStyle} />
        <div
          style={{
            ...ellipseStyle,
            top: 20 * scale,
            left: 18 * scale,
            backgroundPosition: `0px -${20 * scale}px`,
          }}
        />
      </div>
    </>
  )
}

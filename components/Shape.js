import { createElement } from 'react';

const elements = {
  circle: Circle,
  square: Square,
  triangle: Triangle,
  pentagram: Pentagram,
  hexagon: Hexagon,
};

export default function Shape(props) {
  const { color, shape, size } = props;
  const fillColor = color === 'black' ? 'fill-black' : 'fill-white';
  const lineColor = color === 'black' ? 'stroke-white' : 'stroke-black';

  const element = createElement(elements[shape], {
    ...props,
    fillColor,
    lineColor,
  });

  return (
    <div className="h-24 w-24 flex items-center justify-center stroke-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={size === 'small' ? 'h-10' : 'h-24'}
        viewBox="0 0 24 24"
      >
        {element}
      </svg>
    </div>
  );
}
function Hexagon({ border, horizontalLine, verticalLine, fillColor, lineColor }) {
  return (
    <>
      {border && (
        <path
          className="stroke-black fill-white"
          d="M 20.593164,16.961266 12,21.922531 3.406836,16.961266 l 0,-9.9225316 L 12,2.0774689 20.593164,7.0387345 Z"
        />
      )}
      <path
        className={`stroke-black ${fillColor}`}
        d="M 18.861093,15.961254 12,19.922508 5.138907,15.961254 l 0,-7.9225079 L 12,4.0774922 18.861093,8.0387461 Z"
      />
      {verticalLine && <path className={lineColor} d="M 12,4.0774922 V 19.933677" />}
      {horizontalLine && <path className={lineColor} d="M 5.114127,12 H 18.885873" />}
    </>
  );
}

function Pentagram({ border, horizontalLine, verticalLine, fillColor, lineColor }) {
  return (
    <>
      {border && (
        <path
          className="stroke-black fill-white"
          d="m 12,2.7279813 9.820875,7.1352834 -3.751241,11.5451303 -12.1392685,0 -3.75124,-11.5451308 z"
        />
      )}
      <path
        className={`stroke-black ${fillColor}`}
        d="m 12,4.4940796 7.950232,5.7761814 -3.036719,9.346058 -9.8270266,0 -3.036718,-9.346058 z"
      />
      {horizontalLine && <path className={lineColor} d="M 4.5120147,12.060382 H 19.394929" />}
      {verticalLine && <path className={lineColor} d="M 12,4.2802012 V 20.056516" />}
    </>
  );
}

function Triangle({ border, horizontalLine, verticalLine, fillColor, lineColor }) {
  return (
    <>
      {border && <polygon points="2 22, 12 3, 22 22" className="fill-white stroke-black" />}
      <polygon
        points="2 22, 12 3, 22 22"
        className={`stroke-black ${fillColor}`}
        transform="scale(.7) translate(5.1,7)"
      />
      {horizontalLine && <line x1={7.7} y1={15} x2={16.2} y2={15} className={lineColor} />}
      {verticalLine && <line x1={12} y1={6.9} x2={12} y2={20.5} className={lineColor} />}
    </>
  );
}

function Square({ border, horizontalLine, verticalLine, fillColor, lineColor }) {
  return (
    <>
      {border && (
        <rect x={2.5} y={2.5} width={19} height={19} className="fill-white stroke-black" />
      )}
      <rect x={4.5} y={4.5} width={15} height={15} className={`stroke-black ${fillColor}`} />

      {horizontalLine && <line x1={4.5} y1={12} x2={19.5} y2={12} className={lineColor} />}
      {verticalLine && <line x1={12} y1={4.5} x2={12} y2={19.5} className={lineColor} />}
    </>
  );
}

function Circle({ border, horizontalLine, verticalLine, fillColor, lineColor }) {
  return (
    <>
      {border && <circle cx={12} cy={12} r={10} className="fill-white stroke-black" />}
      <circle cx={12} cy={12} r={8} className={`stroke-black ${fillColor}`} />
      {horizontalLine && <line x1={4} y1={12} x2={20} y2={12} className={lineColor} />}
      {verticalLine && <line x1={12} y1={4} x2={12} y2={20} className={lineColor} />}
    </>
  );
}

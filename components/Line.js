import MutationsIndicator from './MutationsIndicator';
import Shape from './Shape';

const reverse = {
  size: {
    small: 'large',
    large: 'small',
  },
  color: {
    black: 'white',
    white: 'black',
  },
  border: {
    true: false,
    false: true,
  },
  verticalLine: {
    true: false,
    false: true,
  },
  horizontalLine: {
    true: false,
    false: true,
  },
  shape: {
    circle: 'square',
    square: 'triangle',
    triangle: 'circle',
    pentagram: 'square',
    hexagon: 'square',
  },
};

export default function Line({ mutations, active, input, form }) {
  const inputItems = input.map(
    ({ border, shape, color, horizontalLine, verticalLine, size }, i) => (
      <Shape
        key={i}
        border={border}
        shape={shape}
        color={color}
        horizontalLine={horizontalLine}
        verticalLine={verticalLine}
        size={size}
      />
    )
  );
  const outputItems = input.map((item, itemIndex) => {
    const outputItem = { ...item };
    mutations.forEach((mutation, mutationIndex) => {
      if (mutation === 'switch') {
        return;
      }
      if (active[mutationIndex]) {
        outputItem[mutation] = reverse[mutation][item[mutation]];
      }
    });
    return (
      <Shape
        key={itemIndex}
        border={outputItem.border}
        shape={outputItem.shape}
        color={outputItem.color}
        horizontalLine={outputItem.horizontalLine}
        verticalLine={outputItem.verticalLine}
        size={outputItem.size}
      />
    );
  });

  if (active[mutations.indexOf('switch')]) {
    outputItems.reverse();
  }
  return (
    <>
      <div className="bg-gray-50 flex flex-nowrap">{inputItems}</div>
      <div className="flex justify-center items-center gap-4 px-8 bg-gray-50">
        <MutationsIndicator form={form} active={active} />
      </div>
      <div className="bg-gray-50 flex flex-nowrap">{outputItems}</div>
    </>
  );
}

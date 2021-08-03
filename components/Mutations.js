import Shape from './Shape';
// 'size', 'color', 'verticalLine', 'horizontalLine', 'shape'
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

export default function Mutations({ mutations, active, input }) {
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
  const switchIndex = mutations.indexOf('switch');
  console.log('switchindex', switchIndex, active[switchIndex]);

  if (switchIndex > -1 && active[switchIndex]) {
    outputItems.reverse();
  }
  return (
    <>
      <div className="bg-gray-50 flex flex-nowrap">{inputItems}</div>
      <div className="flex justify-center items-center gap-4 px-4 bg-gray-50">
        {active.map((isActive, i) => (
          <Mutation key={i} isActive={isActive} />
        ))}
      </div>
      <div className="bg-gray-50 flex flex-nowrap">{outputItems}</div>
    </>
  );
}

function Mutation({ isActive }) {
  return (
    <div className="w-11 h-11 border border-black flex justify-center items-center">
      {isActive && <div className="w-7 h-7 bg-black border" />}
    </div>
  );
}

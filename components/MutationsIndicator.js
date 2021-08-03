export default function MutationsIndicator({ form, active }) {
  if (form === 'dice') {
    return active.map((isActive, i) => isActive && <Die key={i} number={i + 1} />);
  }
  return active.map((isActive, i) => <Block key={i} isActive={isActive} />);
}
function Block({ isActive }) {
  return (
    <div className="w-11 h-11 border border-black flex justify-center items-center">
      {isActive && <div className="w-7 h-7 bg-black border" />}
    </div>
  );
}
function Die({ number }) {
  return (
    <div className="w-11 h-11 border border-black relative">
      {/* center */}
      {(number === 1 || number === 3 || number === 5) && (
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-black" />
      )}
      {/* top left */}
      {number > 1 && <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-black" />}
      {/* bottom right */}
      {(number === 2 || number === 3) && (
        <div className="absolute top-7 right-1 w-2 h-2 rounded-full bg-black" />
      )}
      {/* top right */}
      {(number === 4 || number === 5) && (
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-black" />
      )}
      {/* bottom right */}
      {(number === 4 || number === 5) && (
        <div className="absolute top-7 right-1 w-2 h-2 rounded-full bg-black" />
      )}
      {/* bottom left */}
      {(number === 4 || number === 5) && (
        <div className="absolute top-7 left-1 w-2 h-2 rounded-full bg-black" />
      )}
    </div>
  );
}

import Mutations from '../components/Mutations';

export default function Home() {
  const mutations = ['shape', 'border', 'horizontalLine', 'switch', 'color'];
  return (
    <div className="p-8 m-4 border-2 border-black bg-gray-50 flex justify-center">
      <div className="inline-grid grid-cols-3-auto-mincontent-auto gap-[1px] border border-black bg-black text-lg text-center">
        <div className="bg-gray-50">Basisfiguren</div>
        <div className="bg-gray-50" />
        <div className="bg-gray-50">Eindfiguren</div>

        <Mutations
          input={[
            {
              border: true,
              size: 'large',
              shape: 'circle',
              color: 'black',
              horizontalLine: true,
              verticalLine: false,
            },
            {
              border: false,
              size: 'large',
              shape: 'triangle',
              color: 'white',
              horizontalLine: true,
              verticalLine: false,
            },
          ]}
          mutations={mutations}
          active={[false, true, false, false, true]}
        />
        <Mutations
          input={[
            {
              border: false,
              size: 'large',
              shape: 'circle',
              color: 'white',
              horizontalLine: false,
              verticalLine: true,
            },
            {
              border: false,
              size: 'large',
              shape: 'hexagon',
              color: 'white',
              horizontalLine: true,
              verticalLine: false,
            },
          ]}
          mutations={mutations}
          active={[false, false, true, false, false]}
        />
        <Mutations
          input={[
            {
              border: false,
              size: 'small',
              shape: 'pentagram',
              color: 'white',
              horizontalLine: true,
              verticalLine: false,
            },
            {
              border: false,
              size: 'large',
              shape: 'pentagram',
              color: 'white',
              horizontalLine: true,
              verticalLine: false,
            },
          ]}
          mutations={mutations}
          active={[true, true, false, false, false]}
        />
        <Mutations
          input={[
            {
              border: false,
              size: 'large',
              shape: 'pentagram',
              color: 'white',
              horizontalLine: false,
              verticalLine: true,
            },
            {
              border: false,
              size: 'small',
              shape: 'square',
              color: 'black',
              horizontalLine: false,
              verticalLine: false,
            },
          ]}
          mutations={mutations}
          active={[false, false, false, false, true]}
        />
        {/* <Shape shape="circle" color="black" horizontalLine /> */}
        {/* <Shape shape="circle" color="black" border verticalLine />
        <Shape shape="circle" color="white" size="small" />
        <Shape shape="circle" color="white" border verticalLine horizontalLine />
        <Shape shape="square" color="white" border verticalLine horizontalLine />
        <Shape shape="triangle" color="black" border verticalLine horizontalLine /> */}
      </div>
    </div>
  );
}

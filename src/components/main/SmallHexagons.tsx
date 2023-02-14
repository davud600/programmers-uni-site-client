import Hexagon from '@/components/Hexagon';

const SmallHexagons = ({ wrapper }: { wrapper: any }) => {
  return (
    <div className="small-hexagons">
      <Hexagon
        initialRotation={12}
        z={-6}
        wrapper={wrapper}
        classes="hexagon-one w-16"
      />
      <Hexagon
        initialRotation={69}
        z={-12}
        wrapper={wrapper}
        classes="hexagon-two w-20"
      />
      <Hexagon
        initialRotation={100}
        z={-8}
        wrapper={wrapper}
        classes="hexagon-three w-20"
      />
      <Hexagon
        initialRotation={40}
        z={-12}
        wrapper={wrapper}
        classes="hexagon-four w-20"
      />
      <Hexagon
        initialRotation={22}
        z={-9}
        wrapper={wrapper}
        classes="hexagon-five w-20"
      />
      <Hexagon
        initialRotation={91}
        z={-4}
        wrapper={wrapper}
        classes="hexagon-six w-20"
      />
      <Hexagon
        initialRotation={11}
        z={-4}
        wrapper={wrapper}
        classes="hexagon-seven w-16"
      />
      <Hexagon
        initialRotation={4}
        z={-7}
        wrapper={wrapper}
        classes="hexagon-eight w-20"
      />
    </div>
  );
};

export default SmallHexagons;

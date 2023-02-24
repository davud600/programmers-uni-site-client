const SectionTitle = ({
  title,
  style = '',
}: {
  title: string;
  style?: string;
}) => {
  return (
    <h1
      className={`${style} py-2 px-3 text-2xl font-normal text-black md:text-4xl`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;

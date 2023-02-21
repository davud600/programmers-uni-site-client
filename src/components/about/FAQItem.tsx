import AnimateLeft from '@/components/animations/AnimateLeft';

type FAQItemProps = {
  question: string;
  answer: string;
  items?: string[] | null;
};

const FAQItem = ({ question, answer, items = null }: FAQItemProps) => {
  return (
    <article className="py-1">
      <h1 className="mt-4 -mb-2 text-lg font-bold text-gray-800 md:text-xl">
        • {question}
      </h1>
      <AnimateLeft offDistance={0.75} delayAmount={175}>
        <p className="text-base text-gray-800 md:text-lg">{answer}</p>
      </AnimateLeft>

      {items != null ? (
        items.map((item) => (
          <AnimateLeft key={item} offDistance={1} delayAmount={175}>
            <p className="text-base text-gray-800 md:text-lg">{item}</p>
          </AnimateLeft>
        ))
      ) : (
        <></>
      )}
    </article>
  );
};

export default FAQItem;

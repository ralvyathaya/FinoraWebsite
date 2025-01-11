import SectionSvg from "../assets/svg/SectionSvg";
import useInView from "../hooks/useInView";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  const ref = useInView();

  return (
    <div
      ref={ref}
      id={id}
      className={`
      relative 
      opacity-0 translate-y-[20px]
      motion-safe:transition-all motion-safe:duration-[400ms] motion-safe:ease-out
      motion-reduce:opacity-100 motion-reduce:translate-y-0
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      {/* Vertical separator */}
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;

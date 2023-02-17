import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface SectionProps
  extends HTMLChakraProps<"section">,
    ThemingProps,
    PropsWithChildren {}

const Section = forwardRef<SectionProps, "section">(
  ({ children, size, variant, ...rest }, ref) => {
    const styles = useStyleConfig("Section", { size, variant });

    return (
      <chakra.section ref={ref} __css={styles} {...rest}>
        {children}
      </chakra.section>
    );
  }
);

export default Section;

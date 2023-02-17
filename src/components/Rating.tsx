import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface RatingProps
  extends HTMLChakraProps<"div">,
    ThemingProps,
    PropsWithChildren {}

const Rating = forwardRef<RatingProps, "div">(
  ({ children, size, variant, ...rest }, ref) => {
    const styles = useStyleConfig("Rating", { size, variant });

    return (
      <chakra.div ref={ref} __css={styles} {...rest}>
        {children}
      </chakra.div>
    );
  }
);

export default Rating;

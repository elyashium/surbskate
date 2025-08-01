import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  return (
    <Bounded>

      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    
     
    </Bounded>
  );
};

export default ProductGrid;

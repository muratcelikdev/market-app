import { ItemProps } from 'state/slices/itemsSlice';

export interface BasketProps {
  totalAmount: number;
}

export interface BasketListItemProps {
  productName: string;
  price: number;
  slug: string;
  products: any[];
  increaseProduct: (product: ProductProps) => void;
  decreaseProduct: (slug: string) => void;
  className?: string;
}

export interface BasketListItemCounterProps {
  onIncrease: () => void;
  onDecrease: () => void;
  count: number;
}

export interface BasketTotalAmountProps {
  totalAmount: number;
  className?: string;
}

export interface BasketListProps {
  products: Array<ProductProps>;
  className?: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export interface CheckboxProps {
  value: any;
  onSelect: (value: any) => void;
}

export interface CheckboxGroupItemProps {
  value: any;
  text: string;
  info: number | string;
}

export interface CheckboxItemProps extends CheckboxGroupItemProps {
  onSelect: (value: any) => void;
}

export interface CheckboxGroupProps {
  options: Array<CheckboxGroupItemProps>;
  searchText: string;
  onSelect: (value: any) => void;
}

export interface CheckboxGroupSearchableProps {
  title: string;
  options: Array<CheckboxGroupItemProps>;
  onSelection: (values: any[]) => void;
}

export interface FilterAreaProps {
  items: Array<ItemProps>;
  tags: Array<string>;
  brands: Array<string>;
  setBrands: (value: string[]) => void;
  setTags: (value: string[]) => void;
}

export interface ModalProps {
  children?: JSX.Element | JSX.Element[];
  visible: boolean;
  submitButtonText: string;
  onClose: () => void;
}

export interface PageProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

export interface PaginationProps {
  pageCount: number;
  onPageChange: (pageIndex: number) => void;
}

export interface PaginationButtonProps {
  type: 'Prev' | 'Next';
  onClick: () => void;
  className?: string;
}

export interface ProductProps {
  price: number;
  productName: string;
  slug: string;
}

export interface ProductItemProps extends ProductProps {
  increaseProduct: (product: ProductProps) => void;
}

export interface RadioButtonProps {
  text: string;
  value: any;
}

export interface RadioButtonComponentProps {
  checked?: boolean;
  text: string;
  onSelect: () => void;
}

export interface RadioButtonGroupProps {
  options: Array<RadioButtonProps>;
  onChange: (value: any) => void;
}

export interface SearchboxProps {
  placeholderText: string;
  onSearch: (string) => void;
  className?: string;
}

export interface SubtitleProps {
  text: string;
  className?: string;
}

export interface TagProps {
  text: string;
  active?: boolean;
  onSelect: () => void;
}

export interface TagsProps {
  tags: Array<string>;
  className?: string;
  onSelect: (value: string | null) => void;
}

export interface TitleProps {
  text: string;
}

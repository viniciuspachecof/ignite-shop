import { IProduct } from '@/interface/IProduct.ts';
import { createContext, ReactNode, useState } from 'react';

interface CartContextType {
  products: IProduct[];
  onAdicionarProduct: (data: IProduct) => void;
  onRemoverProduct: (data: IProduct) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function onAdicionarProduct(data: IProduct) {
    const product = products.find((product) => product.id === data.id);

    if (!product) {
      setProducts((state) => [...state, data]);
    }
  }

  function onRemoverProduct(data: IProduct) {
    const listaProducts = products.filter((product) => product.id !== data.id);

    setProducts(listaProducts);
  }

  return (
    <CartContext.Provider value={{ products, onAdicionarProduct, onRemoverProduct }}>{children}</CartContext.Provider>
  );
}

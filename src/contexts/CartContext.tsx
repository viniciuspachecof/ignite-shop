import { IProduct } from '@/interface/IProduct.ts';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContextType {
  products: IProduct[];
  onAdicionarProduct: (data: IProduct) => void;
  onRemoverProduct: (data: IProduct) => void;
  onClearLocalStorage: () => void;
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

  function onClearLocalStorage() {
    localStorage.setItem('@ignite-shop:products-1.0.0', '[]');
  }

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem('@ignite-shop:products-1.0.0');

    if (storedStateAsJSON) {
      setProducts(JSON.parse(storedStateAsJSON));
    }
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(products);

    localStorage.setItem('@ignite-shop:products-1.0.0', stateJSON);
  }, [products]);

  return (
    <CartContext.Provider value={{ products, onAdicionarProduct, onRemoverProduct, onClearLocalStorage }}>
      {children}
    </CartContext.Provider>
  );
}

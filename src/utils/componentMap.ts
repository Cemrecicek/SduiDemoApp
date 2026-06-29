import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';


export const ComponentMap: Record<string, React.ComponentType<any>> = {
  'header_view': Header,
  'banner_view': Banner,
  'product_card_view': ProductCard,
};
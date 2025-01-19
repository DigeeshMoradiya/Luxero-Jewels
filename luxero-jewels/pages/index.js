import Bestselling from './bestselling';
import Category from './category';
import Collection from './collection';
import Followus from './followus';
import Footer from './footer';
import NewArrivals from './newarrivals';
import Occasion from './occasion';

export default function Header() {

  return (
    <>
      <Category />
      <Occasion />
      <Collection />
      <Bestselling />
      <NewArrivals />
      <Followus />
    </>
  );
}

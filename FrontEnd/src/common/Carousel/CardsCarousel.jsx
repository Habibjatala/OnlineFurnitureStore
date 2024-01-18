import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";

const CardsCarousel = () => {
  const [state, setState] = useState({
    children: [],
    activeItemIndex: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        children: createChildren(10),
      }));
    }, 100);
  }, []);

  const createChildren = (n) =>
    range(n).map((i) => (
      <div key={i} style={{ height: 200, background: "#333" }}>
        {i}
      </div>
    ));

  const changeActiveItem = (activeItemIndex) =>
    setState((prevState) => ({ ...prevState, activeItemIndex }));

  const { activeItemIndex, children } = state;

  return (
    <ItemsCarousel
      // Placeholder configurations
      enablePlaceholder
      numberOfPlaceholderItems={5}
      minimumPlaceholderTime={1000}
      placeholderItem={
        <div style={{ height: 200, background: "#900" }}>Placeholder</div>
      }
      // Carousel configurations
      numberOfCards={3}
      gutter={12}
      showSlither={true}
      firstAndLastGutter={true}
      freeScrolling={false}
      // Active item configurations
      requestToChangeActive={changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={"center"}
      chevronWidth={24}
      rightChevron={">"}
      leftChevron={"<"}
      outsideChevron={false}
    >
      {children}
    </ItemsCarousel>
  );
};

export default CardsCarousel;

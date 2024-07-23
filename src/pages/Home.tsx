import React from "react";
import DewiPopularSection from "../components/dewi-popular";
import DewiLainnya from "../components/dewi-lainnya";
import Hero from "../components/hero";
import Brands from "../components/brands";

interface Props {}

interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div id="main-content" />
        <Hero />
        <Brands />
        <DewiPopularSection />
        <DewiLainnya />
      </>
    );
  }
}

export default Home;

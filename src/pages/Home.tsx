import React from "react";
import Hero from "../components/hero";
import DewiPopularSection from "../components/dewi-popular";
import MerchandiseSection from "../components/merchandise";
import LiveShowSection from "../components/live-show";
import GalerySection from "../components/galery";

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
        <LiveShowSection/>
        <DewiPopularSection/>
        <GalerySection/>
        <MerchandiseSection/>
      </>
    );
  }
}

export default Home;

import React from "react";
import Hero from "../components/hero";
import DewiPopularSection from "../components/dewi-popular";
import DewiLainnya from "../components/dewi-lainnya";

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
        <DewiPopularSection/>
      </>
    );
  }
}

export default Home;

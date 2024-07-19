import React from "react";
import DewiPopularSection from "../components/dewi-popular";

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
        {/* <Hero /> */}
        <DewiPopularSection/>
      </>
    );
  }
}

export default Home;

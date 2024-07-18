import React from "react";
import { DesaWisataData } from "../utils/data";
import InfoDewi from "../components/info-dewi";

interface Props {}
interface State {
  desa: any;
  testimony: any;
  rating: number;
}

class DetailDewi extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      desa: DesaWisataData(),
      testimony: {
        name: "",
        imgUrl: "",
        like: 0,
        comment: "",
        rating: 5,
        date: new Date().toLocaleDateString(),
      },
      rating: 0,
    };
  }

  handleInputChange = (e: any) => {
    const { name, value } = e.target ? e.target : e;
    this.setState((prevState) => ({
      testimony: {
        ...prevState.testimony,
        [name]: value,
      },
    }));
  };

  handleRatingChange = (data: number) => {
    this.setState({rating: data})
  }

  render() {
    return (
      <>
        <InfoDewi desa={this.state.desa} control={{inputChange: this.handleInputChange, ratingChange: this.handleRatingChange}}/>
      </>
    );
  }
}

export default DetailDewi;

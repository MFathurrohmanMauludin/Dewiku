import React from "react";
import { DesaWisataData } from "../utils/data";
import InfoDewi from "../components/info-dewi";

interface Props {}
interface State {
  desa: any;
  testimony: any;
  statusNominal: boolean;
  statusEmail: boolean;
  statusFullName: boolean;
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
        email: "",
        comment: "",
        rating: 5,
        date: new Date().toLocaleDateString(),
      },
      statusNominal: false,
      statusEmail: false,
      statusFullName: false,
    };
  }

  // validasi rating
  validateRating = (data: number) => {
    this.setState({ testimony: { rating: data } });
  };

  // validasi nama lengkap
  validateFullName = (data: string) => {
    const limit = 36;
    data.length > 1
      ? this.setState({
          testimony: { name: data.slice(0, limit) },
          statusFullName: false,
        })
      : this.setState({
          testimony: { name: data.slice(0, limit) },
          statusFullName: true,
        });
  };

  // validasi comments
  validateComments = (data: string) => {
    const limit = 36;
    data.length > 1
      ? this.setState({
          testimony: { comment: data.slice(0, limit) },
          statusFullName: false,
        })
      : this.setState({
          testimony: { comment: data.slice(0, limit) },
          statusFullName: true,
        });
  };

  // validasi email
  validateMail = (data: string) => {
    const limit = 56;

    // Update state based on validation
    data.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
      ? this.setState({
          testimony: { email: data.slice(0, limit) },
          statusEmail: false,
        })
      : this.setState({
          testimony: { email: data.slice(0, limit) },
          statusEmail: true,
        });
  };

  render() {
    console.log(this.state.testimony);

    return (
      <>
        <InfoDewi
          desa={this.state.desa}
          photo={this.state.testimony.imgUrl}
          fullname={this.state.testimony.name}
          email={this.state.testimony.email}
          comment={this.state.testimony.comment}
          like={this.state.testimony.like}
          rating={this.state.testimony.rating}
          control={{
            validateRating: this.validateRating,
            validateFullName: this.validateFullName,
            validateMail: this.validateMail,
          }}
        />
      </>
    );
  }
}

export default DetailDewi;

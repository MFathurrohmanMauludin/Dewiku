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
        comment: "",
        rating: 5,
        date: new Date().toLocaleDateString(),
      },
      statusNominal: false,
      statusEmail: false,
      statusFullName: false,
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
    this.setState({ testimony: { rating: data } });
  };

  // validasi nama lengkap
  validateFullName = (data: any) => {
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

  // validasi nama lengkap
  validateComments = (data: any) => {
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
            inputChange: this.handleInputChange,
            ratingChange: this.handleRatingChange,
            validateFullName: this.validateFullName,
            validateMail: this.validateMail,
          }}
        />
      </>
    );
  }
}

export default DetailDewi;

import React from "react";
import { DesaWisataData } from "../utils/data";
import InfoDewi from "../components/info-dewi";

interface Props {}
interface State {
  desa: any;
  testimony: any;
  statusEmail: boolean;
  statusFullName: boolean;
  name: string;
  imgUrl: string;
  like: number;
  email: string;
  comment: string;
  rating: number;
  date: any;
}

class DetailDewi extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      desa: DesaWisataData(),
      testimony: [],
      name: "",
      imgUrl: "",
      like: 0,
      email: "",
      comment: "",
      rating: 0,
      date: new Date().toLocaleDateString(),
      statusEmail: false,
      statusFullName: false,
    };
  }

  // save data
  submitForm = () => {
    const newTestimony = {
      name: this.state.name,
      imgUrl: this.state.imgUrl,
      like: this.state.like,
      email: this.state.email,
      comment: this.state.comment,
      rating: this.state.rating,
      date: this.state.date,
    };
    this.setState((prevState) => ({
      testimony: [...prevState.testimony, newTestimony],
    }));
  };

  // validasi rating
  validateRating = (data: number) => {
    this.setState({ rating: data });
  };

  // validasi foto
  validatePhoto = (data: string) => {
    this.setState({ imgUrl: data });
  };

  // validasi nama lengkap
  validateFullName = (data: string) => {
    const limit = 36;
    data.length > 1
      ? this.setState({
          name: data.slice(0, limit),
          statusFullName: false,
        })
      : this.setState({
          name: data.slice(0, limit),
          statusFullName: true,
        });
  };

  // validasi comments
  validateComments = (data: string) => {
    const limit = 500;
    data.length > 1
      ? this.setState({
          comment: data.slice(0, limit),
          statusFullName: false,
        })
      : this.setState({
          comment: data.slice(0, limit),
          statusFullName: true,
        });
  };

  // validasi email
  validateMail = (data: string) => {
    const limit = 56;

    // Update state based on validation
    data.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
      ? this.setState({
          email: data.slice(0, limit),
          statusEmail: false,
        })
      : this.setState({
          email: data.slice(0, limit),
          statusEmail: true,
        });
  };

  render() {
    console.log(this.state.testimony);

    return (
      <>
        <InfoDewi
          desa={this.state.desa}
          photo={this.state.imgUrl}
          fullname={this.state.name}
          email={this.state.email}
          comment={this.state.comment}
          like={this.state.like}
          rating={this.state.rating}
          control={{
            validateRating: this.validateRating,
            validateFullName: this.validateFullName,
            validateMail: this.validateMail,
            validateComment: this.validateComments,
            validatePhoto: this.validatePhoto,
            submitForm: this.submitForm,
          }}
          status={{
            email: this.state.statusEmail,
            fullName: this.state.statusFullName,
          }}
        />
      </>
    );
  }
}

export default DetailDewi;

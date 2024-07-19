import React from "react";
import { DesaWisataData } from "../../utils/data";
import { SearchModal } from ".";

interface Props {}

interface State {
  desaWisata: any;
  search: string;
  filter: any;
}

class SearchComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      desaWisata: DesaWisataData(),
      search: "",
      filter: [],
    };
  }

  searchDesa = (search: string) => {
    const filterData = this.state.desaWisata.filter((desa: any) =>
      desa.name.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({ filter: search.length !== 0 ? filterData : []});
  };

  render() {
    return (
      <>
        <SearchModal searchData={this.state.filter} control={this.searchDesa} />
      </>
    );
  }
}

export default SearchComponent;

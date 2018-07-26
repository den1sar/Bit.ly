import { add } from 'Actions/links';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Content from './Content';

export interface InterfaceMain {
  links: object[];
  onAddLink: any;
}

class Main extends React.Component<InterfaceMain> {
  public render() {
    const { onAddLink } = this.props;

    return (
      <Content add={onAddLink} />
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddLink(link: object) {
    dispatch(add(link));
  },
});


export default connect(null, mapDispatchToProps)(Main);
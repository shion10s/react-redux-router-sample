import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions } from '../reducks/index';
import { SampleState } from '../reducks/reducers';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps;

class Sample extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.onChangeHandler} />
        <p>{this.props.text}</p>
      </div>
    );
  }  
}

const mapStateToProps = (state: SampleState) => {
  return {
    text:state.text
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(actions.changeText(e.currentTarget.value))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Sample);

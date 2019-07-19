import React from 'react'
import { withRouter,RouteComponentProps } from 'react-router'
import { SampleState } from '../reducks/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = StateProps & DispatchProps & RouteComponentProps;

class NavMenu extends React.Component<Props>{
    constructor(props: Props) {
        super(props);
    }
    render(){
        return(
            <div>
                <button onClick={()=>{
                    this.props.history.push("/page1")
                }}>page1</button>
                <button onClick={()=>{
                    this.props.history.push("/page2")
                }}>page2</button>
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
    // onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => {
    //   dispatch(actions.changeText(e.currentTarget.value))
    // }
  });


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMenu));
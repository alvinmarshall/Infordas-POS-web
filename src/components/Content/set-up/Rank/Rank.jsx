import React, { Component } from "react";
import { openModal } from "../../../modal/modalAction";
import { RANK_MODAL } from "./reducers/rankConstants";
import { connect } from "react-redux";
import RankTable from "./RankTable";
import { getRanksAction, resetRankMessageAction } from "./reducers/rankAction";
import SpinnerView from "../../../spinner/SpinnerView";

class Rank extends Component {
  state = {
    ranks: []
  };
  componentDidMount() {
    this.props.getRanksAction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.rank.ranks !== prevProps.rank.ranks) {
      this.setState({ ranks: this.props.rank.ranks });
    }

    if (this.props.rank && this.props.rank.message !== prevProps.rank.message) {
      if (this.props.rank.message) {
        alert(this.props.rank.message);
      }
      this.props.getRanksAction();
      this.props.resetRankMessageAction();
    }
  }

  render() {
    const { openModal } = this.props;
    const { ranks } = this.state;
    const { loading } = this.props.rank;
    let rankContent;
    if (loading) {
      rankContent = <SpinnerView />;
    } else {
      rankContent = <RankTable ranks={ranks} openModal={openModal} />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Rank Detail</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <div className="input-group-append">
                      <button
                        onClick={() => {
                          openModal(RANK_MODAL);
                        }}
                        className="btn btn-default"
                      >
                        <i className="fas fa-plus" /> Add Position
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* /.card-header */}
              {rankContent}
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
      </div>
    );
  }
}

const actions = {
  openModal,
  getRanksAction,
  resetRankMessageAction
};
const mapStateToProps = state => ({
  rank: state.rank
});
export default connect(mapStateToProps, actions)(Rank);

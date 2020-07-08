import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataFromSaga } from "../actions/index";

export class SagaPost extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getDataFromSaga();
    }
    render() {
        return (
            <ul>
              {this.props.articles.map(el => (
                <li key={el.id}>{el.title}</li>
              ))}
            </ul>
          );
    }
}
function mapStateToProps(state) {
    return {
      articles: state.sagaArticles.slice(0, 10)
    };
  }
export default connect(mapStateToProps, { getDataFromSaga })(SagaPost);
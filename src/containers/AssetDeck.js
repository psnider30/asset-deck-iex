import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetQuoteForm from './AssetQuoteForm';
import Navbar from '../components/Navbar'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/assetActions'
import { changeLayout } from '../actions/layoutActions'
import { fetchAssetData } from '../actions/assetDataActions'

// Symbol, Name, Asset Class, Region
class AssetDeck extends Component {

  componentDidMount() {
    // this.props.fetchAllSymbols()
  }

  handleLayoutChange = (layout) => {
    this.props.changeLayout(layout)
  }

  render() {
    const { fetchingData, assetData, assets } = this.props;

    return (
      <div>
        <Navbar changeLayout={this.handleLayoutChange.bind(this)} />
        <div className='asset-deck'>
          <AssetQuoteForm
            assets={assets}
            assetData={assetData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
    layout: state.layout,
    fetchingData: state.fetchingData,
    assetData: state.assetData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    assetActions: bindActionCreators(actions, dispatch),
    changeLayout: bindActionCreators(changeLayout, dispatch),
    // fetchAssetData: bindActionCreators(fetchAssetData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetDeck);

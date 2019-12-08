import React, { Component } from 'react';
import is from 'electron-is';
import { Tab, Tabs, Icon, Callout, Button, Card } from "@blueprintjs/core";
import './index.css';
import constants from '../../../constants';
import { displayStyle } from '../../../utils';
import PopOver from '../PopOver';
import Footer from '../Footer';

const DashboardPanel = () => (
  <div className="tab-pages">
      <p>
          balances of bitcoin, eth, erc20 tokens
      </p>
      <p>
        number of pending trades
      </p>
  </div>
);

const MarketPanel = () => (
  <div className="tab-pages">
    <Callout intent="primary" icon="chart" title="Markets keep you on top of prices.">
        <p><em>Not sure what rate to use?</em> You can view the latest prices of different trading pairs here. <a href=""><strong>Create an Order</strong></a> when you're ready.</p>
      </Callout>    
      <br/>

      <div class="bp3-card .modifier">
        We build products that make people better at their most important work.
      </div>
      <p>
          market data
      </p>
  </div>
);

const TradePanel = () => (
  <div className="tab-pages">
      <p>
          form to create new order,
          list of active orders with share button
      </p>
  </div>
);

const HistoryPanel = () => (
  <div className="tab-pages">
    <Callout intent="primary" icon="history" title="Recent shows you the latest activity.">
        <p>View a summary of your past orders and their status here.</p>
      </Callout>    
      <br/>

      <p>
          show history
      </p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tab1',
    };

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName.toLowerCase(),
    });
  }

  render() {
    const contentStyle = {
      borderTopLeftRadius: is.macOS() ? constants.macWinBorderRadius : 0,
      borderTopRightRadius: is.macOS() ? constants.macWinBorderRadius : 0,
      borderBottomLeftRadius: is.macOS() ? 0 : constants.nonMacWinBorderRadius,
      borderBottomRightRadius: is.macOS() ? 0 : constants.nonMacWinBorderRadius,
    };

    return (
      <div className="app">
        <div className="top-popover" style={displayStyle(is.macOS())}>
          <PopOver position="top" height={12} />
        </div>
        <div className="content" style={contentStyle}>
          <nav class="bp3-navbar bp3-dark">
            <div class="bp3-navbar-group bp3-align-left">
              <div class="bp3-navbar-heading"><img className="logo" src="logo.png" width='25px'/> C( )MIT</div>
            </div>
            <div class="bp3-navbar-group bp3-align-right">
              <Icon icon="help" />
              <span class="bp3-navbar-divider"></span>
              <Icon icon="notifications" style={{'margin-right': '10px'}} />
              <Icon icon="cog" />
            </div>
          </nav>


          <Tabs>
              <Tab id="dashboard" title={<span><Icon icon="panel-stats" /> Dashboard</span>} panel={<DashboardPanel />} />
              <Tab id="markets" title={<span><Icon icon="chart" /> Markets</span>} panel={<MarketPanel />} />
              <Tab id="trade" title={<span><Icon icon="exchange" /> Trade</span>} panel={<TradePanel />} />
              <Tab id="history" title={<span><Icon icon="history" /> Recent</span>} panel={<HistoryPanel />} />
          </Tabs>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
        <div className="bottom-popover" style={displayStyle(!is.macOS())}>
          <PopOver position="bottom" height={12} />
        </div>
      </div>
    );
  }
}

export default App;

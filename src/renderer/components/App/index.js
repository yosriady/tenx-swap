import React, { Component } from 'react';
import is from 'electron-is';
import { Tab, Tabs, Icon } from "@blueprintjs/core";
import './index.css';
import constants from '../../../constants';
import { displayStyle } from '../../../utils';
import PopOver from '../PopOver';
import Footer from '../Footer';

const DashboardPanel = () => (
  <div className="tab-pages">
      <p>
          Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
          stack, it's easy to try it out on a small feature in an existing project.
      </p>
  </div>
);

const TradePanel = () => (
  <div className="tab-pages">
      <p>
          HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
          views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
          environment is extraordinarily expressive, readable, and quick to develop.
      </p>
  </div>
);

const NotificationsPanel = () => (
  <div className="tab-pages">
      <p>
          asdfasd
          environment is extraordinarily expressive, readable, and quick to develop.
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
              <Icon icon="user" />
            </div>
          </nav>


          <Tabs>
              <Tab id="dashboard" title="Dashboard" panel={<DashboardPanel />} />
              <Tab id="trade" title="Trade" panel={<TradePanel />} />
              <Tab id="notifications" title="Notifications" panel={<NotificationsPanel />} />
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

import React, { Component } from 'react';
import is from 'electron-is';
import { Tab, Tabs, Icon, Callout, Button, Card, Select } from "@blueprintjs/core";
import './index.css';
import constants from '../../../constants';
import { displayStyle } from '../../../utils';
import PopOver from '../PopOver';
import Footer from '../Footer';

const DashboardPanel = () => (
  <div className="tab-pages">

    <table class="bp3-html-table bp3-html-table-striped" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Balance</th>
          <th>Price (USD)</th>
          <th>Orders</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>BTC</strong></td>
          <td>3.1893</td>
          <td>$7500.345</td>
          <td>241</td>
          <td>+2.7%</td>
        </tr>
        <tr>
          <td><strong>ETH</strong></td>
          <td>12.3249</td>
          <td>$178.234</td>
          <td>115</td>
          <td>+1.5%</td>
        </tr>
        <tr>
          <td><strong>PAY</strong></td>
          <td>25000.1238</td>
          <td>$0.14</td>
          <td>78</td>
          <td>+1.7%</td>
        </tr>
        <tr>
          <td><strong>USDC</strong></td>
          <td>0</td>
          <td>$1.04</td>
          <td>78</td>
          <td>-3.7%</td>
        </tr>        
        <tr>
          <td><strong>DAI</strong></td>
          <td>0</td>
          <td>$1.02</td>
          <td>38</td>
          <td>-0.7%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const MarketPanel = () => (
  <div className="tab-pages">
    <Callout intent="primary" icon="chart" title="Markets keep you on top of prices.">      
        <p><em>Not sure what rate to use?</em> You can view the latest prices of different trading pairs here. <a href=""><strong>Create an Order</strong></a> when you're ready.</p>
      </Callout>    
      <br/>

      <div class="market bp3-card .modifier">
        <h2>USDC / BTC</h2>
        <p class='fade-text'>$83398.89</p>

        <h5>Price</h5>
        <p>0.00000234 BTC</p>

        <h5>24HR Change</h5>
        <p>1.7%</p>

        <h5>24HR Volume</h5>
        <p>6654.2 BTC</p>
      </div>

      <div class="market bp3-card .modifier">
        <h2>DAI / BTC</h2>
        <p class='fade-text'>$84398.87</p>

        <h5>Price</h5>
        <p>0.00000134 BTC</p>

        <h5>24HR Change</h5>
        <p>3.7%</p>

        <h5>24HR Volume</h5>
        <p>6254.2 BTC</p>
      </div>

      <div class="market bp3-card .modifier">
        <h2>ETH / PAY</h2>
        <p class='fade-text'>$139.87</p>

        <h5>Price</h5>
        <p>0.00000434 PAY</p>

        <h5>24HR Change</h5>
        <p>97%</p>

        <h5>24HR Volume</h5>
        <p>56254.2 PAY</p>
      </div>         
  </div>
);

const Markets = [
  "ETH-BTC",
  "PAY-BTC",
  "DAI-BTC"
]

const TradePanel = () => (
  <div className="tab-pages">
    <Card>
      <div class="bp3-select bp3-fill bp3-large">
        <strong>Trading Pair</strong>
        <select>
          <option selected>PAY-BTC</option>
          <option value="1">ETH-BTC</option>
          <option value="2">DAI-BTC</option>
          <option value="3">ZRX-BTC</option>
        </select>

        Amount PAY

        Price BTC

        market price: ...

        Expires 

        1 days

        <Button intent="success" text="Create Order" style= {{ width: '100%' }}/>
      </div>
    </Card>


      <p>
          form to create new order,
          list of open orders with share button
      </p>
  </div>
);

const HistoryPanel = () => (
  <div className="tab-pages">
    <Callout intent="primary" icon="history" title="Recent shows you the latest activity.">
        <p>View your active and expired orders here.</p>
      </Callout>    

      <h4>Active Orders</h4>

      <div class="order bp3-card">
        <h4>0.1 BTC <Icon icon="exchange" /> 2300 PAY</h4>
        <em>Expires Mon 9 Dec 1:47PM</em>

        <Button icon="endorsed" intent="success" text="Redeem" style= {{ float: 'right' }}/>
        <Button text="Details" style= {{ float: 'right', 'margin-right': '5px' }}/>
      </div>      

      <h4>Expired Orders</h4>
      <div class="order bp3-card">
        <h4>0.1 ETH <Icon icon="exchange" /> 17 DAI</h4>
        <em>Expired Sun 7 Dec 2:23AM</em>

        <Button icon="undo" intent="success" text="Refund" style= {{ float: 'right' }}/>
        <Button text="Details" style= {{ float: 'right', 'margin-right': '5px' }}/>
      </div>    
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
              <Tab id="dashboard" title={<span><Icon icon="panel-stats" /> Wallet</span>} panel={<DashboardPanel />} />
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

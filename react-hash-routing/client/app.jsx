import React from 'react';
import Header from './components/header';
import Catalog from './pages/catalog';
import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     */
    window.addEventListener('hashchange', event => {
      // eslint-disable-next-line no-console
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Catalog />;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        <Header />
        { this.renderPage() }
      </>
    );
  }
}

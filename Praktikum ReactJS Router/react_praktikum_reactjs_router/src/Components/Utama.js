import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import Galeri from './Galeri';
import HariBesar from './HariBesar';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/haribesar" component={HariBesar} />
    </Switch>
)

export default Utama;
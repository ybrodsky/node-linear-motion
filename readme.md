### Node Linea Motion

Calculates velocity, distance and time. Review module

#### Instalation

`npm install --save node-linear-motion`

#### Usage

```javascript

const LinearMotion = require('node-linear-motion');

let time = LinearMotion.calculateTime(19, 10);
let velocity = LinearMotion.calculateVelocity(5, 19);
let distance = LinearMotion.calculateDistance(100, 2);

```

`calculateTime(velocity, distance)`

`calculateVelocity(time, distance)`

`calculateDistance(velocity, time)`

It's assumed the values are expressed in meters and seconds.
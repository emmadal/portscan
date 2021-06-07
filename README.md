# PortScan

PortScan is a small port scanner build in javascript

## How use it ?

it's very simple :

Install the package globally via `npm` or `yarn`

```js
npm i -g @emmadal/portscan 
```

or 

```js
yarn global add @emmadal/portscan
```

then run this command below:

```portscan host rangeport```

## Ports

**rangeport correspond to the number of port to scan**

in the computer we have 65535 ports, the number of port given in the parametre will be a array of range staring at 1 to the end

**for example**

rangeport  = 3000 => [1 - 3000]
rangeport  = 200 => [1 - 200]

## Contributing

the contribution are the welcome

- Fork this repository

- Modify and do your PR ()

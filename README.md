# Volta - jetbrains package manager proxy
Fix IntelliJ/PhpStorm's package manager integration under [Volta](https://volta.sh/).  

Inspired by https://github.com/nodenv/jetbrains-npm. thank you.

## Pre-requisites
This proxy assumes that Volta's Node is selected for "Node Interpreter" in the IDE settings.

![fig01](https://user-images.githubusercontent.com/16317535/160153074-7f0ba3fc-9d45-4df5-8018-04932227d684.png)

## Installation
```sh
mkdir -p ${VOLTA_HOME}/lib/node_modules
git clone https://github.com/nashiko/volta-jetbrains-pm-proxy.git ${VOLTA_HOME}/lib/node_modules
```

## Usage
Select package manager.

![2022-03-26_00h46_15](https://user-images.githubusercontent.com/16317535/160156184-c6b5c7b5-fdc1-4745-9be1-880e7cf6bd0d.png)

Just select for `npm` and ` pnpm`.  
However, I don't use `pnpm`, so I just did a simple operation test.  

For `yarn`, you have to enter the PATH, so please refer to the following.
```
/home/{username}/.volta/lib/node_modules/yarn
```

## Tested environment
- Volta 1.0.6
- WSL2 Ubuntu 20.04
- PhpStorm 2021.3.2

## License
MIT
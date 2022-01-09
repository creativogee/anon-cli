<h1 align="center"> Anon CLI </h1>
<p align="center">
  <b >Improve your productivity</b>
</p>

<br>

[![NPM Version](http://img.shields.io/npm/v/anon-cli.svg?style=flat)](https://www.npmjs.org/package/anon-cli)
[![Install Size](https://packagephobia.now.sh/badge?p=anon-cli)](https://packagephobia.now.sh/result?p=anon-cli)

## Description
This is a command line interface (CLI) tool inspired by the need to work faster and efficiently

<br>

## Features

- Simple to use
- Improve efficiency
- Never have to memorize commands

<br>

## Installation

```bash
$ npm install -g anon-cli
```
<br>

## Usage
You can run `anon --help` to see usage

```bash
$ anon use --stack [options]
```

Single option example:
```bash
$ anon use --stack sequelize
```
Multiple options example:
```bash
$ anon use --stack sequelize git
```
> Please Note: You need to run `source ~/.bashrc` to start using your unpacked aliases

Run `alias` to see list of aliases

<br> 

### Sample aliases: 
`xgit` = "rm -rf .git"

`gco` = "git checkout"

`seqm` = "sequelize db:migrate"

`sequ.` = "sequelize db:migrate:undo:all"

<br>

### Options
You can run `anon options` to see list of options.
- sequelize
- git

> Please Note: This list may change with every new update

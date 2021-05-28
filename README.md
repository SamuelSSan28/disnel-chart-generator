<div align="center">
  <img src="https://i.imgur.com/Yti1VpD.png" alt="DCG logo">
  
  <br/>

[![Author](https://img.shields.io/badge/author-samuelssan28-2196F3?style=flat-square)](https://github.com/samuelssan28)
[![Languages](https://img.shields.io/github/languages/count/samuelssan28/nlw-5-podcastr?color=EA6A47&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/samuelssan28/nlw-5-podcastr?color=EA6A47&style=flat-square)](https://github.com/samuelssan28/disnel-chart-generator/stargazers)

</div>

<h4 align="center">
  Disnel Chart Generator is a platform built to generate interactive line charts from json files.
</h4>

<br>


<h1 align="center">
 
![NCG preview](https://i.imgur.com/wJJZV0T.png)

</h1>


## Tecnologies
This project was developed using cutting edge front-end technologies.


- [ReactJS](https://reactjs.org/)
- [Javascript](https://js.org/)
- [Next.js](https://nextjs.org/)

## 💻 Getting started

### Requirements

- You need to install both [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) to run this project.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/samuelssan28/nlw-5-podcastr.git && cd podcastr
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Run the web server
$ yarn dev
```

The app will be available for access on your browser at `http://localhost:3000`

## 📝 Json File Format

```json
    {
        "2020":{
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "datasets": [
            {
                "label": "First Dataset",
                "data": [65, 59, 80, 81, 56, 55, 40],
                "borderColor": "#42A5F5"
            },
            {
                "label": "Second Dataset",
                "data": [28, 48, 40, 19, 86, 27, 90],
                "borderColor": "#FFA726"
            }]
        }
    }
```

---

Made with 💜 by Samuel Santos 

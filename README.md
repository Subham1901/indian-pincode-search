# About this package

This package will enable you identify the pincode using the city name and vice versa.

## Installation

Use the package to install into your project 😎

```bash
npm i indian-pincode-search
```

## Usage

```python
import { getNamesbyPincode, getPincodeByName } from "indian-pincode-search";

(async () => {
  console.log(await getNamesbyPincode(765022));
})();

#returns
 [
  {
    name: 'Chinasari',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Godiakhal',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Gunupur',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Jaltar',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Kharlingi',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Kulusingi',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Marathiguda',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Puttasingi',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Regada',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Sagada',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Taribili',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Tolana',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  }
]

(async () => {
  console.log(await getPincodeByName("gunupur"));
})();

# returns
[
  {
    pincode: '754216',
    district: 'Kendrapara',
    state: 'Odisha',
    country: 'India'
  },
  {
    pincode: '765022',
    district: 'Rayagada',
    state: 'Odisha',
    country: 'India'
  },
  {
    pincode: '535006',
    district: 'Vizianagaram',
    state: 'Andhra Pradesh',
    country: 'India'
  }
]
```

## 🔗 Connect

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://subham1901.github.io/subham-portfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/subham-prasad-panda-a4b2371b6)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SubhamPrasadP13)

# About this package

Details of Post Office by searching Postal PIN Code or Post Office Branch Name of India.

## Installation

Use the package to install into your project 😎

```bash
npm i indian-pincode-search
```

## Usage

```python
import { getNamesbyPincode, getPincodeByName } from "indian-pincode-search";

(async () => {
  console.log(await getNamesbyPincode(760008));
})();

#returns
[
  {
    name: 'Industrial Estates',
    district: 'Ganjam',
    state: 'Odisha',
    country: 'India'
  },
  {
    name: 'Lanjipalli',
    district: 'Ganjam',
    state: 'Odisha',
    country: 'India'
  }
]

#Error handling
(async () => {
  console.log(await getNamesbyPincode(760005558));
})();

#returns
No records found


(async () => {
  console.log(await getPincodeByName("lanjipalli"));
})();

# returns
[
  {
    pincode: '760008',
    district: 'Ganjam',
    state: 'Odisha',
    country: 'India'
  }
]

#Error handling
(async () => {
  console.log(await getPincodeByName("jsksjshsjnsnhj"));
})();

#returns
No records found

```

## 🔗 Connect

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/subham1901)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://subham1901.github.io/subham-portfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/subham-prasad-panda-a4b2371b6)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SubhamPrasadP13)

# Scan Feature

* Front-end: React-Native, Redux, expo
* Back-end: AWS-lambda, AWS-dynamoDB, AWS-APIGateway

### Prerequisites

* run 'npm install' to install all dependencies
* List of dependencies:
*  "axios": "^0.18.0",
*  "eslint-config-rallycoding": "^3.2.0",
*  "expo": "^29.0.0",
*  "lodash": "^4.17.10",
*  "react": "^16.3.1",
*  "react-native": "https://github.com/expo/react-native/archive/sdk-29.0.0.tar.gz",
*  "react-native-elements": "^0.19.1",
*  "react-native-typography": "^1.3.0",
*  "react-navigation": "^2.11.2",
*  "react-redux": "^5.0.7",
*  "recompose": "^0.28.2",
*  "redux": "^4.0.0",
*  "redux-thunk": "^2.3.0"

## Deployment

* This app is deploy on expo
* URL: https://exp.host/@nein0303/omginterview
```
  Expo has made some changes on IOS, so please use Android to test this app.
  1 Download Expo app
  2 Goto https://exp.host/@nein0303/omginterview
  3. Scan QR Code to open the app
  4. Test the app
```


## Demo Video
URL: https://youtu.be/F5xSS3q036Y
## RESTful URLs

* . List of upc:
    * GET https://l422o3r0o5.execute-api.us-east-1.amazonaws.com/prod/upcs
    * Response:
    ```
       {"upc":
         [
           {"upc":"6A14470A","product_name":"Lacroix Tangerine"},
           {"upc":"24463061163","product_name":"ABC Sparkling water"},
           {"upc":"6A14470D","product_name":"Luke's cheddar chips"}
         ]
       }
    ```
* . Retrieve single upc:
    * GET https://l422o3r0o5.execute-api.us-east-1.amazonaws.com/prod/upc?upc=:upc
    * Example:
    * GET https://l422o3r0o5.execute-api.us-east-1.amazonaws.com/prod/upc?upc=6A14470D
    * Response:
    ```
      {"upc":
        [
          {"upc":"6A14470D","product_name":"Luke's cheddar chips"}
        ]
      }
    ```
* . Create single upc:
    * POST https://l422o3r0o5.execute-api.us-east-1.amazonaws.com/prod/upc
    ```
    body : {
      "upc": "4033",
      "product": "Banana"
    }
    ```
    * Response:
    ```
      {
        "data": "successful create upc code"
      }
    ```

## Authors

* Toan Phan

# Portfolio for photographer

Photographer's portfolio is an example of what a photographer's portfolio could look like.I created it to better understand MERN stack.

## Installation

In client and server folder run 

```bash
npm install 
```
then in server run 

```bash
npm run dev 
```
and client 

```bash
npm run start 
```

## Necessary files

In client folder I created config.js file but u could use .env  file as well
```javascript
// claudinary config
const CLOUD_NAME = "your_cloud_name";
const API_KEY = your_cloudinary_api_key;
const UPLOAD_PRESET = "albums_background_upload_preset";
const IMAGE_UPLOAD_PRESET = "image_upload_preset";
const CLOUD_SECRET = "cloudinary_cloud_sercret";
// server
const SERVER_API = "your_server";
export {
  CLOUD_NAME,
  API_KEY,
  UPLOAD_PRESET,
  CLOUD_SECRET,
  SERVER_API,
  IMAGE_UPLOAD_PRESET,
};

```
In server at config folder add config.env file 


```json
NODE_ENV = development_state
PORT = server_port
CLIENT_URL= client_url

MONGO_URI= your_mongo_atlas_uri


MAIL_USER= your_email
MAIL_PASS= your_email_passowr


JWT_SECRET= jwt_sercert_password
JWT_EXPIRE= jwt_expire
JWT_COOKIE_EXPIRE= jwt_cookie_expire

//config for mailtrap
SMTP_HOST= your_host_from_mailtrap
SMTP_PORT=your_port_from_mailtrap
SMTP_EMAIL=your_email_from_mailtrap
SMTP_PASSWORD=your_password_from_mailtrap
FROM_EMAIL= email_you_choose_to_use
FROM_NAME= in_email_dispayed_name

```
## Website fetures

> Site is in build now i will add this when is finshed

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


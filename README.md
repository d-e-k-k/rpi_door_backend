# Rpi Door Backend
## **STILL IN DEVELOPMENT**

## Overview
This project is door alarm camera. For the project a reed switch, magnetic switch found in home alarm systems, is mounted on a door. When the door opens it opens the switch signaling a gpio pin on a Raspberry Pi. This signal triggers the Raspberry Pi to record, convert, and send this data to the backend. The backend handles the data and sends the video of to an aws S3 bucket and the corresponding timestamp and video url to a mongo db database hosted on mongo db atlas. A frontend will then access this data via routes on the backend. 

## Dependencies
- aws-sdk
- cors
- dotenv
- express
- mongoose
- multer
- uuid


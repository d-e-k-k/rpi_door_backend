# Rpi Door Backend
## **STILL IN DEVELOPMENT**

## Overview
This project is a door alarm camera system. For the project a reed switch, a magnetic switch found in home alarm systems, is mounted on a door. When the door opens it opens the switch signaling a gpio pin on a Raspberry Pi. This signal triggers the Raspberry Pi to video record. Once the recording is completed it is convert from H2642 format to mp4 and sent to the backend along with meta data. The backend handles the data and sends the video to an aws S3 bucket and the corresponding timestamp and video url to a mongo db database hosted on mongo db atlas. A frontend will then access this data in a user friendly interface. Users will be able to access recordings by date.

## Current Status
The core backend functionality and controller functionality have been built. Separating a reed switch will result in a video being stored in aws as well and corresponding data in a mongodb. 

## Dependencies
- aws-sdk
- cors
- dotenv
- express
- mongoose
- multer
- uuid


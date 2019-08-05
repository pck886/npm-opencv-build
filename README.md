[![Build Status](https://travis-ci.org/justadudewhohacks/npm-opencv-build.svg?branch=master)](http://travis-ci.org/justadudewhohacks/npm-opencv-build)
[![Build status](https://ci.appveyor.com/api/projects/status/uv8n2sruno95rxtq/branch/master?svg=true)](https://ci.appveyor.com/project/justadudewhohacks/npm-opencv-build/branch/master)

A simple script to auto build recent OpenCV + contrib version via npm. This script is used to auto build <a href="https://github.com/justadudewhohacks/opencv4nodejs"><b>opencv4nodejs</b></a>.

# Install
```
npm install opencv-build
```

## Requirements
- cmake

### Windows
- windows build tools or Visual Studio

``` bash
npm install --global windows-build-tools
```

## Custom flags
it's possible to specify custom flags to build process inserting on the `package.json` where the dependency is declared an object like:
```json
{
  ...
  "opencv4nodejs": {
    "flags": "-DOPENCV_GENERATE_PKGCONFIG=ON -DOPENCV_PC_FILE_NAME=opencv.pc"
  }
}
```
these flags will be used during building in the same way as described [here](https://github.com/justadudewhohacks/opencv4nodejs#auto-build-flags).

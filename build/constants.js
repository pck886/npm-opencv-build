"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dirs_1 = require("./dirs");
exports.OPENCV_CONTRIB_ARCHIVE = 'https://github.com/opencv/opencv_contrib/archive/3.4.6.tar.gz';
exports.opencvRepoUrl = 'https://github.com/opencv/opencv.git';
exports.opencvContribRepoUrl = 'https://github.com/opencv/opencv_contrib.git';
exports.opencvModules = [
    'core',
    'highgui',
    'imgcodecs',
    'imgproc',
    'features2d',
    'calib3d',
    'photo',
    'objdetect',
    'ml',
    'video',
    'videoio',
    'videostab',
    'dnn',
    'face',
    'text',
    'tracking',
    'xfeatures2d',
    'ximgproc'
];
exports.cmakeVsCompilers = {
    '10': 'Visual Studio 10 2010',
    '11': 'Visual Studio 11 2012',
    '12': 'Visual Studio 12 2013',
    '14': 'Visual Studio 14 2015',
    '15': 'Visual Studio 15 2017'
};
exports.cmakeArchs = {
    'x64': ' Win64',
    'ia32': '',
    'arm': ' ARM'
};
exports.defaultCmakeFlags = [
    '-DCMAKE_SYSTEM_PROCESSOR=arm64',
    '-DCMAKE_OSX_ARCHITECTURES=arm64',
    '-DWITH_OPENJPEG=OFF',
    '-DWITH_IPP=OFF',
    '-DBUILD_EXAMPLES=OFF',
    '-D CMAKE_BUILD_TYPE=RELEASE',
    '-D CMAKE_INSTALL_PREFIX=/usr/local',
    '-D PYTHON3_EXECUTABLE=/opt/homebrew/Caskroom/miniforge/base/envs/pos/bin/python3',
    '-D BUILD_opencv_python2=OFF',
    '-D BUILD_opencv_python3=ON',
    '-D OPENCV_ENABLE_NONFREE=ON',
  ];

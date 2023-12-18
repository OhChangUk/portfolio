# Portfolio
Oh-! ChangUk

## 🖥 프로젝트 소개
신입 프론트엔드 개발자 오창욱의 첫 포트폴리오 사이트입니다.

## ⏰ 개발 기간
- 2023.10.19 ~ 2023.11.07

## 🙍‍♂️ 개발 인원
- Front-end 1명 (오창욱)

## 🛠 기술 스택
<p float="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">

## ⚙ 주요 기능
- **filter**를 이용해 카테고리별로 선택할 수 있도록 기능을 추가하였습니다.
<p align="center" width="100%">
  <img src="https://github.com/OhChangUk/portfolio/assets/142365374/0e7c39d4-8542-429e-8dc0-67c645d03f85" width="100%">
<p align="center" width="100%">
  <img src="https://github.com/OhChangUk/portfolio/assets/142365374/68856827-3af4-4fc4-9e2d-26b47bba9837" width="40%">
  <img src="https://github.com/OhChangUk/portfolio/assets/142365374/81741f58-3dfc-48f1-8956-f122cf9b9883" width="40%">

## 😵 문제 발생!
- Swiper에 **pauseOnMouseEnter** 기능을 추가하여 마우스를 올렸을 경우 멈추긴 하지만 Swiper가 넘어가는 순간에 마우스를 올리면 멈추지 않는 버그가 발생하였습니다.

## 💡 문제 해결!
- Swiper에 클래스 이름을 주고 SwiperSlide에 onMouseOver를 이용해 마우스를 올렸을 경우 클래스의 autoplay가 멈추고, onMouseOut로 빠져 나왔을 때 autoplay를 시작하게 하였습니다.
<img src="https://github.com/OhChangUk/portfolio/assets/142365374/c6681d76-77fb-4d3b-9faf-1709f09adb61">

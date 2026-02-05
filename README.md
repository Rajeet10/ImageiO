# 🌟 ImageIO – Image Search & AI Prediction App

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-4.x+-ff6f00?logo=tensorflow&logoColor=white)](https://www.tensorflow.org/js)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x+-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Unsplash API](https://img.shields.io/badge/API-Unsplash-success)](https://unsplash.com/developers)

**A React web app that lets you search high-quality images using the Unsplash API and run AI predictions on them with TensorFlow.js.**

ImageiO combines real-time image discovery with browser-based machine learning inference — perfect for exploring visuals and applying AI analysis locally.

**Note**: This app is designed to run locally[](http://localhost:3000). No live hosted demo is available yet.

## ✨ Features

- **Real-time image search** powered by Unsplash API (fetch royalty-free photos instantly)
- Infinite scrolling grid for seamless browsing of search results
- Click any image → run **TensorFlow.js** prediction (image classification / analysis)
- Secure routing: TensorFlow prediction page accessible only after login
- Modern, responsive UI styled with **Tailwind CSS** (mobile, tablet, desktop support)
- Clean loading states, error handling, and user-friendly feedback
- Environment variables for API keys (`.env` file)
- Built with Create React App for easy setup and development

## 🛠️ Technologies

- **Frontend Framework**: React.js (18+)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **AI/ML Inference**: TensorFlow.js (runs in the browser)
- **API**: Unsplash API (for image search)
- **Build Tool**: Create React App
- **Deployment**: Local only (npm start) — easy to deploy on Netlify/Vercel later
- **License**: Apache 2.0

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajeet10/ImageiO.git
   cd ImageiO


2. Install dependencies
    ```
        npm install

        # or if you use yarn:
            
        # yarn install
    ```

3. Set up your Unsplash API key
    ```
    1. Go to https://unsplash.com/developers 
    2. create an app 
    3. get your Access Key
    4. Create a .env file in the root directory:text
    5. REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
    ````

4. Start the development server

    ```Bash 

        npm start

        # or

        yarn start

    ```
5. The app will open automatically at http://localhost:3000 (or visit it manually)

6. Search for images, browse results, log in (if required) to access the TensorFlow prediction feature

7. Build for production (optional)Bashnpm run buildThis creates an optimized build/ folder.

8. Search Results GridTensorFlow Prediction ViewMobile Responsive LayoutSearch ResultsPredictionMobile


## 🤝 Contributing

Contributions are welcome!
Ideas for improvement:

1. Add more TensorFlow.js models (e.g., MobileNet, Coco-SSD, custom-trained)
2. Implement dark mode toggle
3. Add image download / save to favorites
4. Improve login system (e.g., Firebase Auth or local storage)
5. Deploy a live demo (Netlify / Vercel)
6. Add more detailed prediction output (confidence scores, labels explanation)

    ```
        Standard workflow:

        1. Fork the repo
        2. Create your feature branch (git checkout -b feature/amazing-feature)
        3. Commit your changes (git commit -m 'Add amazing feature')
        4. Push to the branch (git push origin feature/amazing-feature)
        5. Open a Pull Request
    ```

## 📜 License

[Apache License 2.0](https://www.apache.org/licenses/)

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/). You are free to use, modify, and distribute it (even commercially), as long as the original copyright and disclaimer are included.


## 💬 Contact & Support

Feedback, questions, or collaboration opportunities are welcome.

⭐ If you find this repository useful, please consider giving it a star!

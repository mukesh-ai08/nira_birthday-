 body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #ffe4e9, #ffb6c1);
  color: #333;
  overflow-x: hidden;
  height: 100vh;
  text-align: center;
}

.hearts-container {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
}

.content { position: relative; z-index: 2; padding: 40px 20px; }

.title {
  font-size: 3.8rem;
  color: #ff69b4;
  text-shadow: 0 0 15px #ff69b4;
  margin: 20px 0;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.photo img {
  width: 80%; max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255,105,180,0.4);
  margin: 20px 0;
}

.message {
  background: white;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 30px auto;
  font-size: 1.4rem;
  line-height: 1.8;
  color: #c71585;
}

.dream {
  background: #fff0f5;
  padding: 20px;
  border-radius: 15px;
  margin: 30px auto;
  max-width: 600px;
}

.surprise {
  background: #ff69b4;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.3rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255,105,180,0.5);
  transition: all 0.3s;
}

.surprise:hover { transform: scale(1.1); background: #ff1493; }

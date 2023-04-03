/* eslint-disable react/prop-types */
import './styles/center.css';

export default function Center() {
  return (
    <div className="center">
      <div className="card">
        <div
          className="card-img"
          style={{ backgroundImage: 'url(./imgs/din-jarin.png)' }}
        />
        <p>Din Jarin</p>
      </div>
      <div className="card">
        <div
          className="card-img"
          style={{ backgroundImage: 'url(./imgs/baby-yoda.jpg)' }}
        />
        <p>Grogu</p>
      </div>
    </div>
  );
}

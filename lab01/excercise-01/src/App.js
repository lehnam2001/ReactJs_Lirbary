import imgUser from './assets/img/imgUser.jpg';
import './App.css';

function App() {
  return (
    <>
    <div className="header"><h1 className="title-header">Bài 01</h1></div>
    <div className="container">
      <div className="container-lab01">
        <div className="img-left-wrap">
          <img className="img-left" src={imgUser} alt="ảnh user" />
        </div>

        <div className="info-right-wrap">
          <h3>Họ và tên: Lê Hoài Nam</h3>
          <h3>Giới tính: nam</h3>
          <h3>Địa chỉ:Tổ 4, Thôn 4, Xã Mê Pu, Huyện Đức Linh - Bình Thuận</h3>
          <h3>Số điện thoại: 0363556909</h3>
          <h3>Email: lehnam2991@gmail.com</h3>
          <h3>Zalo: 0363556909</h3>
        </div>
      </div>

      <div className="header"><h1 className="title-header">Bài 02</h1></div>
      <div className="container-lab02">
        <h1 className="title-lab02">Hello, I am Lê Hoài Nam</h1>
        <h2 className="description-lab02">Now is 8:17:05 PM</h2>
      </div>

      <div className="header"><h1 className="title-header">Bài 03</h1></div>
      <table className="container-lab03">
        <tr>
          <th></th>
          <th>Thứ 2</th>
          <th>Thứ 3</th>
          <th>Thứ 4</th>
          <th>Thứ 5</th>
          <th>Thứ 6</th>
          <th>Thứ 7</th>
          <th>Chủ Nhật</th>
        </tr>
        <tr>
          <td>Sáng</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
          <td>Dậy 7h sáng đánh răng, rửa mặt, ăn sáng, 8h học bài, 10h giải trí, 10h30 học bài</td>
        </tr>
        <tr>
          <td>Chiều</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
          <td>12h ăn cơm, 12h45 ngủ trưa, 2h dậy học bài, 4h dọn nhà cửa, 5h tập thể dục trong nhà.</td>
        </tr>
        <tr>
          <td>Tối</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
          <td>6h ăn cơm, 7h giải trí, 8h học bài, 11h ngủ</td>
        </tr>
      </table>
    </div>
    </>
  );
}

export default App;

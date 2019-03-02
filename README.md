# redux-demo
Redux in React Native

## Vì sao phải dùng Redux?
- Việc quản lý từng thay đổi của ```state``` là rất khó đối với project react không dùng ```redux```. Nếu như ko có một luồng xử lý khoa học và rõ ràng thì việc quản lý dữ liệu với các dự án lớn là vô cùng phức tạp.

## 3 nguyên tắc của Redux:
- ```Single source of truth```: State của toàn bộ ứng dụng được lưu trong trong 1 store duy nhất là 1 Object mô hình tree.
- ```State is read-only```: Chỉ có 1 cách duy nhất để thay đổi state đó là tạo ra một action (là 1 object mô tả những gì xảy ra).
- ```Changes are made with pure functions```: Để chỉ rõ state tree được thay đổi bởi 1 action bạn phải viết pure reducers.

## Cách thức hoạt động
- **Actions**: là những chỉ thị gồm thuộc tính bắt buộc là ```type``` (**chỉ có nhiệm vụ đưa ra chỉ thị cho reducers chứ không thực hiện**). Actions bao gồm: 
    - *type*: tên chỉ thị.
    - *item*: phần tử thao tác (ví dụ: add new, ... sẽ khai báo tại đây).
- **Reducers**: là một hành động, nhận chỉ thị từ actions và hành động này trả về 1 state. Có 2 tham số:
    - *old state*: là những state trước đó.
    - *chỉ thị (action)* : dùng để thay thế state cũ và tính ra state mới.
- **State**: lưu trạng thái của ứng dụng
- **Store**: là 1 đối tượng quản lí reducer và state (vì state là private) không thể thay đổi được mà phải thông qua đối tượng quản lý nó chính là Store. Nó có 3 phương thức sau:
    - *getState()*: Giúp lấy ra state hiện tại
    - *dispatch(action)*: Thực hiện gọi 1 action
    - *subscrible(listener)*:Nó có vai trò cực quan trọng, luôn luôn lắng nghe xem có thay đổi gì ko rồi ngay lập tức cập nhật ra View

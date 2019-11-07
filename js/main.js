var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();

getEle("btnThem").addEventListener("click", function() {
  getEle("btnCapNhat").style.display = "none";
});

getEle("btnThemNV").addEventListener("click", function() {
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var isValid = true;

  /* MaNV */
  isValid &= validation.kiemTraRong(maNV, "tbMaNV", "(*) MaNV không được rỗng");

  /* HoTen */
  isValid &=
    validation.kiemTraRong(hoTen, "tbTen", "(*) Họ tên không được rỗng") &&
    validation.kiemTraChuoi(hoTen, "tbTen", "(*) Vui lòng nhập vào chuỗi!");

  /* Email */
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "(*) Email không được rỗng") &&
    validation.checkEmail(email, "tbEmail", "(*) Email không đúng định dạng");

  /* Password */
  isValid &=
    validation.kiemTraRong(
      password,
      "tbMatKhau",
      "(*) Password không được rỗng"
    ) &&
    validation.kiemTraDoDaiKyTu(
      password,
      "tbMatKhau",
      "(*) Ky tu 6 - 12",
      6,
      12
    );

  /* Chuc Vu */
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  if (isValid) {
    var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu);
    danhSachNhanVien.themNhanVien(nhanVien);
    taoBang();
  }
});

function taoBang() {
  //-------------- String Template
  /**
  var name2 = "cybersoft";
  var result2 = `Hello ${name2}` // => Hello cybersoft
    */

  var tbody = getEle("tableDanhSach");
  var content = "";
  danhSachNhanVien.mangNhanVien.map(function(item, index) {
    content += `
        <tr>
            <td>${item.maNV}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.date}</td>
            <td>${item.chucVu}</td>
            <td>
            <button class="btn btn-success" data-toggle="modal"
            data-target="#myModal" onclick="suaNhanVien('$(item.maNV))" > FiX </button>
            <button class="btn btn-danger" onclick="xoa(${item.maNV})" > Delete</button>
            </td>
           

        </tr>
      `;
  });
  tbody.innerHTML = content;
}
// Sua Nhan vien
function suaNhanVien(maNV){
  console.log (maNV);
getEle("btnThemNV").style.display = "none";
getEle("msnv").setAttribute("disabled", true);
getEle("btnCapNhat").style.display = "block";
getEle("email").value = nhanVien.email ;
getEle("password").value = nhanVien.password;
getEle("datepicker").value = nhanVien.chucVu;
var nhanVien = danhSachNhanVien.LayThongTinNguoiDUng(maNV);
Console.log(nhanVien);
//Cap nhat nhan vien
getEle("btnCapNhat").addEventListener("click", function(){
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var nhanVien = new NhanVien (maNV, hoTen, email, password, date, chucVu
    danhSachNhanVien.capNhatNhanVien(nhanVien));
    taoBang(mangTimKiem);
    setlocalStorage();
    

  var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu );
});


getEle("msnv").value = nhanVien.maNV;
getEle("name").value = nhanVien.hoTen;

   
}
// xoa nhan vien
function xoa (maNV){
  danhSachNhanVien,xoaNhanVien(maNV);
  taoBang();
  setlocalStorage();
}

function getEle(id) {
  return document.getElementById(id);
}


// tim kiem
getEle("searchName").addEventListener("keyup ", function(){
  var chuoiTimKiem = getEle("SearchName").value;
  console.log(chuoiTimKiem);
  var = danhSachNhanVien.timNhanVien(chuoiTimKiem);

  taoBang();
});

//Thay 3 dau bang ham indexof javascript

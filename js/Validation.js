function Validation() {
  this.kiemTraTrungMaNV = function(input, spanId, message, mangNhanVien)
  /*
  1 duyet mang 
  2 so sanh 
  3 neu nhu input trong MaNV trong mang ==> return false
  4.Nguoc Lai ==> return true
  */
//  var check = true;
//  mangNhanVien.map(function(item){
//   if (input === item.maNV){
//     getEle(spanId).style.display = "block";
//     getEle(spanId).innerHTML = message;
//     check = false;
//   }else{
//     getEle(spanId).style.display = "none";
//     getEle(spanId).innerHTML = "";
//     check = true;
    
//   }
//  });
 var check = mangNhanVien.some(function(item){
   return input === item.maNV 
 });
  if( check === true){
    getEle(spanId).style.display = message;
    getEle(spanId.innerHTML) = message;
    return false;
  }
  getEle(spanId).style.display = none;
  getEle(spanId.innerHTML) = "";
  };
  this.kiemTraRong = function(input, spanId, message) {
    if (input === "") {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = message;
      return false;
    }
    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiKyTu = function(input, spanId, message, min, max) {
    if (input.length >= min && input.length <= max) {
      // Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };

  this.kiemTraChucVu = function(id, spanId, message) {
    if (getEle(id).selectedIndex !== 0) {
      //Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };

  this.checkEmail = function(input, spanId, message) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(mailformat)) {
      //Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };

  //Xoa nhan vien
  function xoa (maNV){
      Console.console.log(maNV);
      
  }

  this.kiemTraChuoi = function(input, spanId, message) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
// luu mang xuong localStrorage
function setlocalStrorage(){
  localStrorage.setItem{
    "DanhSachNhanVien"
    JSON.stringify(danhSachNhanVien.mangNhanVien);

  };
}
    if (pattern.test(input)) {
      //Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };
}


/*luu xuong localStorage
khi luu xuong localStorage chuyen doi data thanh String

lay mang tu localStorage
khi lay localStorage len su dung chuyen thanh JSON

*/



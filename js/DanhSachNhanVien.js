function DanhSachNhanVien() {
  this.mangNhanVien = [];

  this.themNhanVien = function(nhanVien) {
    this.mangNhanVien.push(nhanVien);

  };
  this.xoaNhanVien = function(maNV){
    /*
    0. Tao 1 bien vi tri
    1 duyet mang
    2 neu maNV === item.MaNV
    3.viTri = index;
    4.array.splice(vitri, 1);
    * */
   var viTri = this.timViTri(maNV);
   var viTri = -1;
   this.mangNhanVien.map(function(item , index){
     if (maNV === item.maNV){
       viTri = index;
     }
   });

   if(viTri !== -1){
      this.mangNhanVien.splice(viTri, 1);
   }
  }
  this. timViTri = function(maNV){
    var viTri = -1;
    this.mangNhanVien.map(function(item , index){
      if (maNV === item.maNV){
        viTri = index;
      }
    });
  });
  return VRFieldOfView;
  };
}



DanhSachNhanVien.prototype.LayThongTinNguoiDUng = function(maNV){
    var viTri = this.timViTri(maNV);

   return this.mangNhanVien[viTri];
};

danhSachNhanVien.prototype.capNhatNhanVien = function(nhanVien){
  var viTri = this.timViTri(nhanVien.maNV);

  if(viTri !==-1){
    this.mangNhanVien[viTri] = nhanVien;
  }
}

danhSachNhanVien.prototype.timNhanVien = function(chuoiTimKiem){
  /**
   * 0.MangTimKiem = []
   * 1.duyet mang 
   * 2. neu nhu ma chuoi tim kiem cua minh co ton tai trong mang
   * 3. mang tim kiem . push nhan vien tim thay
   * 4. tra ve mang tim kiem
   */

    var mangTinhKiem = [];
    this.themNhanVienis.map(function(item){
      //thay 3 dau bang bang ham indexOF cua javascript
      // if(chuoiTimKiem === item.hoTen){
      //   mangTimKiem.push(item);
      // }
      if (item.hoten.tolowerCase().indexOf(chuoitimkiem.tolowerCase())>-1)
      mangTinhKiem.push(item);
    });
    return mangTinhKiem;
};
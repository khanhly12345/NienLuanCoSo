<template>
    <div class="wrap_header" style="margin-bottom: 15px;">
        <img src="../assets/logo.webp" width="100%" alt="">
        <div class="container">
            <div class="row" style="padding: 5px 0px 0px 0;">
                <div class="same col-2 logo_header">
                    <img src="../assets/vgt5.png" alt="" style="width: 50%;">
                </div>
                <div class="same col-4 search_header" style="display: inline;">
                    <div class="search" style="margin-top: 20px;">
                        <input type='text' placeholder="Tìm kiếm" />
                        <a href="#" style="color: green;"><i class="fas fa-search"></i></a>
                    </div>
                </div>
                <div class="same col-2 login_header">
                    <a href="" style="display: flex; color: rgb(130, 134, 158); text-decoration: none; margin-left: 100px;">
                        <div class="sub_user">
                            <i class="fa fa-phone"></i>
                        </div>  
                        <div class="user_signin" style="color: green; width: 150px;">HT. khách hàng <br>0911018650</div>
                    </a>
                </div>
                <div class="same col-2 login_header">
                    <a href="" style="display: flex; color: rgb(130, 134, 158); text-decoration: none; margin-left: 20px;">
                        <div class="sub_user">
                            <i class="fa fa-user"></i>
                        </div>  
                        <div class="user_signin" style="color: green; width: 100px; ">Đăng nhập <br> Đăng ký</div>
                    </a>
                </div>
                <div class="same col-2 cart_header">
                    <a href="" style="display: flex; color: rgb(130, 134, 158); text-decoration: none;">
                        <div class="sub_user">
                            <i class="fa fa-cart-plus"></i>
                        </div>  
                        <div class="user_signin" style="color: green;">Giỏ hàng của bạn<br><span>0 sản phẩm</span></div>
                    </a>
                </div>
            </div>
        </div>
        <!-- <hr style="margin-bottom: 0;"> -->
    </div>
 
</template>

<script>
</script>

<style scoped>
.row .same {
    display: flex;
    align-items: center;
    justify-content: center;
}
.search {
    border: 2px solid #e0e0e0;
    border-radius: 20px;
}

.search input{
    border: none;
    font-size: 14px;        
    padding: 10px;
    width: 93%;
    border-radius: 20px;
 }

input:focus {
    outline: none;
}

img {
    background: transparent;
}

.sub_user {
    font-size: 25px;
    padding: 5px 12px;
    border-radius: 50%;
    border: 1px solid black;
}

.user_signin {
    text-align: center;
    padding-left: 10px;
}
</style>
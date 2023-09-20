<template>
    <div>
        <Header />
        <div class="container">
            <div className="slide">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators" style="position: absolute, bottom: 40px">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/slide3.webp" class="d-block w-100"
                                style="height: 600px" />
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/slide2.webp" class="d-block w-100"
                                style="height: 600px" />
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/slide1.webp" class="d-block w-100"
                                style="height: 600px" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="container new_product">
            <div class="header_product">
                <h3 style="color: green;">Rau củ quả 24h new</h3>
                <span>Xem tất cả <i class="fas fa-chevron-right"></i></span>
            </div>
            <hr style="margin: 0;">
            <div class="row" style="margin-top: 10px;">
                <div class="col-4">
                    <div class="card">
                        <!-- <a href=""><img src="../assets/product.webp" alt="" width="100%"></a> -->
						<router-link :to="domanDetail + getData[0]._id"><img :src="doman + getData[0].img" alt="" width="100%"></router-link>
                        <h3 class="title" style="font-size: 18px;">{{ getData[0].name }}</h3>
                        <div class="price">{{ HandlePrice(getData[0].price) }}</div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <!-- <a href=""><img src="../assets/product.webp" alt="" width="100%"></a> -->
						<router-link :to="domanDetail + getData[1]._id"><img :src="doman + getData[1].img" alt="" width="100%"></router-link>
                        <h3 class="title" style="font-size: 18px;">{{ getData[1].name }}</h3>
                        <div class="price">{{ HandlePrice(getData[1].price) }}</div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="slide_down">
						<div  v-for="(value, index) in getData" :key="index">
							<div class="product_slide">
								<router-link :to="domanDetail + value._id"><img :src="doman + value.img" alt="" width="120px"></router-link>
								<div class="wrap_title_price" style="padding-left: 10px;">
									<h5 class="title">{{ value.name }}</h5>
									<div class="price">{{ HandlePrice(value.price) }}</div>
								</div>
							</div>
							<hr>
						</div>

                        <div class="product_slide">
                            <router-link to="/detail"><img src="../assets/product.webp" alt="" width="120px"></router-link>
                            <div class="wrap_title_price" style="padding-left: 10px;">
                                <h5 class="title">Cải muối dưa phơi 1 nắng 2kg</h5>
                                <div class="price">75.000₫</div>
                            </div>
                        </div>
                        <hr>
                        <div class="product_slide">
                            <router-link to="/detail"><img src="../assets/product.webp" alt="" width="120px"></router-link>
                            <div class="wrap_title_price" style="padding-left: 10px;">
                                <h5 class="title">Cải muối dưa phơi 1 nắng 2kg</h5>
                                <div class="price">75.000₫</div>
                            </div>
                        </div>
                        <hr>
                        <div class="product_slide">
                            <!-- <a href="" style="width: 120px; padding-top: 10px;"><img src="../assets/product.webp" alt="" width="100%"></a> -->
							<router-link to="/detail"><img src="../assets/product.webp" alt="" width="120px"></router-link>
                            <div class="wrap_title_price" style="padding-left: 10px;">
                                <h5 class="title">Cải muối dưa phơi 1 nắng 2kg</h5>
                                <div class="price">75.000₫</div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
        <div class="container new_product">
            <div class="wrap_product">
                <div class="header_product">
                    <h3 style="color: green;">Sản Phẩm Mới</h3>
                    <span>Xem tất cả <i class="fas fa-chevron-right"></i></span>
                </div>
                <hr style="margin: 0;">
                <div class="row" style="margin-top: 10px;">
                    <div class="col-3" v-for="(value, index) in getData" :key="index">
                        <div class="card" style="width: 18rem;">
                            <router-link :to="domanDetail + value._id"><img :src="doman + value.img" width="200px" height="200px" class="card-img-top" alt="..."></router-link>

                            <div class="card-body">
                                <span class="title">{{ value.name }}</span>
                                <div class="price">{{ HandlePrice(value.price) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3   ">
                        <div class="card" style="width: 18rem;">
                            <router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top" alt="..."></router-link>

                            <div class="card-body">
                                <h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
                                <div class="price">75.000₫</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3   ">
                        <div class="card" style="width: 18rem;">
                            <router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top" alt="..."></router-link>

                            <div class="card-body">
                                <h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
                                <div class="price">75.000₫</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3   ">
                        <div class="card" style="width: 18rem;">
							<router-link to="/detail"><img src="../assets/product2.webp" class="card-img-top" alt="..."></router-link>

                            <div class="card-body">
                                <h3 class="title">Cải muối dưa phơi 1 nắng 2kg</h3>
                                <div class="price">75.000₫</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center">
                    <a href="" class="btn btn-success"><span>Xem tất cả <i class="fas fa-chevron-right"></i></span></a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios';
// import HandlePrice from '../const/handlePrice'

export default {
	name: 'about',
	data() {
		return {
			getData: [],
			doman: 'http://localhost:3003/',
			domanDetail: '/detail/'
		}
	},
	components: {
		Header,
		Footer
	},
	methods: {
		HandlePrice(value) {
			const VND = new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND',
			});
			value = VND.format(value)
			return value
		}
	}
	,
	mounted() {
		axios.get('http://localhost:3003/api/products/show')
			.then(res => {
				this.getData = res.data
				console.log(this.getData)
			})
	}
}

</script>
<style>
.new_product {
    height: 100%;
    width: 100%;
    background: white;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
}

.header_product {
    display: flex;
    justify-content: space-between;
}

.card {
    border: none;
}

.title {
    padding-top: 10px;
    font-size: 14px;
    font-weight: 300;
}

.price {
    font-weight: 600;
    color: #f59421;
}

.product_slide {
    display: flex;
}

.slide_down {
    height: 400px;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: green;
}

.slide_down::-webkit-scrollbar  {
    width: 0.5rem;
    height: 1rem;
}

.slide_down::-webkit-scrollbar-thumb  {
    background-color: rgba(217,217,227,.8);
    border-radius: 9999px;
}

.card-body {
    margin-top: 20px;
    text-align: center;
}

.img:hover {
	transform: scale(1.05);
    transition: transform 0.5s ease 0s;
    cursor: pointer;
}
</style>

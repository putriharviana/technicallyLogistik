<template>
    <div class="bg" id="bg-responsive">
        <div class="container pt-5">
            <nav class="navbar navbar-expand-lg navbar-light containerCustom">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img
                            src="https://logisklik-static.s3.amazonaws.com/static/customers/assets/img/logo.png"
                            width="160"
                            height="36"
                        />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto has-fontsize-16 font-weight-bold">
                            <li class="nav-item active">
                                <a class="nav-link has-text-grey" href="#">Beranda <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link has-text-grey" href="#">Mitra</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link has-text-grey" href="#">Cek Harga</a>
                            </li>
                        </ul>
                        <form class="form-inline d-flex justify-content-lg-end">
                            <div class="d-flex">
                                <div class="flagIna mr-4">
                                    <img
                                        src="https://logisklik-static.s3.amazonaws.com/static/homepages/assets/img/320px-Flag_of_Indonesia_(physical_version).svg.svg"
                                    />
                                    <span class="has-fontsize-12"> INA </span>
                                </div>
                                <div class="flagEng">
                                    <img
                                        src="https://logisklik-static.s3.amazonaws.com/static/homepages/assets/img/download%20(1).svg"
                                    />
                                    <span class="has-fontsize-12"> ENG </span>
                                </div>
                            </div>
                            <div class="d-flex w-100 mt-2 justify-content-lg-end">
                                <button type="button" class="btn btn-warning text-white has-fontsize-14 borderRadiusLeft">Daftar</button>
                                <button type="button" class="btn btn-primary text-white has-fontsize-14 borderRadiusRight">Masuk</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container pb-5">
            <div class="row-6" id="sign-up-responsive">
                <div class="col-sm-12 col-md-6 col-lg-6" id="form-position">
                    <div class="formSignUp d-flex justify-content-center">
                        <div class="container mt-5 mb-1"> 
                            <span class="registerFont font-weight-bold d-flex justify-content-center"> Daftar </span>
                            <form v-on:submit.prevent="login">
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text iconInput" id="inputGroupPrepend">
                                                <b-icon-person-fill color="orange"/>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control iconInput" id="validationCustomUsername" placeholder="Nama Depan" aria-describedby="inputGroupPrepend" required>
                                        <div class="invalid-feedback"> Tolong tuliskan Nama Depan</div>
                                    </div>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text iconInput" id="inputGroupPrepend">
                                                <b-icon-person-fill color="orange"/>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control iconInput" id="validationCustomUsername" placeholder="Nama Belakang" aria-describedby="inputGroupPrepend" required>
                                        <div class="invalid-feedback"> Tolong tuliskan Nama Belakang</div>
                                    </div>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text iconInput" id="inputGroupPrepend">
                                                <b-icon-phone color="orange"/>
                                            </span>
                                        </div>
                                        <input type="text" class="form-control iconInput" id="validationCustomUsername" placeholder="0821XXXXX" aria-describedby="inputGroupPrepend" required>
                                        <div class="invalid-feedback"> Tolong tuliskan Nomor Telepon</div>
                                    </div>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text iconInput" id="inputGroupPrepend">
                                                <b-icon-envelope-fill color="orange"/>
                                            </span>
                                        </div>
                                        <input type="email" class="form-control iconInput" id="validationCustomUsername" placeholder="Bella@gmail.com" aria-describedby="inputGroupPrepend" required v-model="email">
                                        <div class="invalid-feedback"> Tolong tuliskan Alamat Email</div>
                                    </div>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text iconInput" id="inputGroupPrepend">
                                                <b-icon-lock-fill color="orange"/>
                                            </span>
                                        </div>
                                        <input type="password" class="form-control iconInput" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" required v-model="password">
                                        <div class="invalid-feedback"> Tolong tuliskan Password</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                        <label class="form-check-label has-fontsize-12" for="invalidCheck">
                                            Saya sudah membaca dan setuju dengan Syarat & Ketentuan serta Kebijakan Privasi Logisklik
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <button type="submit" class="btn btn-warning text-white has-fontsize-16 px-5 mt-3">Lanjutkan</button>
                                        <span class="has-fontsize-12 w-100 d-flex justify-content-center mt-2"> Atau </span>
                                        <button type="button" class="btn btn-primary text-white has-fontsize-12 px-0 py-0 d-flex noBorderRadius verticalCenter mt-2">
                                            <div class="bgIconWhite">
                                                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                                    width="20px" height="20px"
                                                />
                                            </div>
                                            <span class="ml-1 px-2"> Sign in With Google </span>
                                        </button>
                                        <span class="has-fontsize-12 w-100 d-flex justify-content-center mt-4 has-fontcolor-blue"> Sudah memiliki akun? 
                                            <p class="font-weight-bold ml-1"> Masuk </p> </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6" id="detail-responsive">
                <div class="row align-items-center" id="card-position">
                    <img src="https://logisklik-static.s3.amazonaws.com/static/customers/assets/img/Group%20143646.svg" class="col-lg-3 col-md-6 col-sm-12" id="pict-info"/>
                    <div class="col-lg-6 col-md-6 col-sm-12 has-fontcolor-blue">
                        <p class="has-fontsize-20 mb-0 font-weight-bold"> Proses Pemesanan Sederhana </p>
                        <p class="has-fontsize-12"> Pemesanan tanpa ribet di manapun dan kapan pun. </p>
                    </div>
                </div>
                <div class="row align-items-center" id="card-position">
                    <img src="https://logisklik-static.s3.amazonaws.com/static/homepages/assets/img/Group%20143948.svg" class="col-lg-3 col-md-6 col-sm-12" id="pict-info"/>
                    <div class="col-lg-6 col-md-6 col-sm-12 has-fontcolor-blue">
                        <p class="has-fontsize-20 mb-0 font-weight-bold"> Keamanan Terjamin </p>
                        <p class="has-fontsize-12"> Kirim barang Anda tanpa perlu khawatir </p>
                    </div>
                </div>
                <div class="row align-items-center" id="card-position">
                    <img src="https://logisklik-static.s3.amazonaws.com/static/customers/assets/img/Group%20143650.svg" class="col-lg-3 col-md-6 col-sm-12" id="pict-info"/>
                    <div class="col-lg-6 col-md-6 col-sm-12 has-fontcolor-blue">
                        <p class="has-fontsize-20 mb-0 font-weight-bold"> Harga Kompetitif </p>
                        <p class="has-fontsize-12"> Mengurangi biaya logistikmu </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import {  BIconPersonFill, BIconPhone, BIconEnvelopeFill, BIconLockFill } from 'bootstrap-icons-vue'
import axios from "axios";

export default {
    name: 'App',
    components: {
        BIconPersonFill, BIconPhone, BIconEnvelopeFill, BIconLockFill
    },
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
      login() {
        const auth = { email: this.email, password: this.password };
        const url = 'https://reqres.in/api/register';
        try {
          axios.post(url, auth).then((res) =>{
              console.log('berhasil')
          })
        } catch (err) {
          console.log('gagal')
        }
      }
    },
}
</script>

<style scoped>
.containerCustom{
    background-color: #fff !important;
    box-shadow: 0 2px 6px grey !important;
    border-radius: 20px !important;
    padding: 24px 80px !important;
}
.borderRadiusLeft{
    border-radius: 10px 0 0 10px !important;
}
.borderRadiusRight{
    border-radius: 0 10px 10px 0 !important;
}
.has-fontsize-30{
    font-size: 30px !important;
}
.has-fontsize-20{
    font-size: 20px !important;
}
.has-fontsize-15{
    font-size: 15px !important;
}
.has-fontsize-16{
    font-size: 16px !important;
}
.has-fontsize-12{
    font-size: 12px !important;
}
.bg{
    background-image: url('Background.png');
    width: 100%;
    height: 100%;
    /* position: absolute; */
    background-size: cover;
}
.formSignUp{
    border: 1px solid #ddd;
    padding: 0px 20px;
    background: #FFFFFF;
    opacity: 0.87;
    z-index: 9999;
    position: inherit;
    top: 100px;
}
.registerFont{
    color: #0D579A;
    font-size: 30px;
}
.iconInput{
    background-color: white;
    border-color: white white #BCE0FD white;
    border-radius: 0;
}
.bgIconWhite{
    background-color: white;
    padding: 5px;
    width: fit-content;
}
.noBorderRadius{
    border-radius: 0 !important;
}
.verticalCenter{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
.has-fontcolor-blue{
    color: #0D579A !important;
}
.bgYellow{
    align-items: center;
    justify-content: center;
    background-color: rgba(248, 190, 0, 0.8);
    position: absolute;
    padding: 180px 0;
    top: 261px;
    width: 100%;
}
#detail-responsive {
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    z-index: 1000000;
}
#sign-up-responsive {
    z-index: 100000;
    align-items: center;
    justify-content: center;
    background-color: rgba(248, 190, 0, 0.8);
    position: relative;
    padding: 30px 0;
    top: 230px;
}
@media (max-width: 768px) {
    #sign-up-responsive {
        height: 1100px;
        top: 190px;
    }
}
@media (min-width: 769px) {
    #sign-up-responsive {
        height: 318px;
    }
}
@media (min-width: 769px){
    #detail-responsive {
        top: -87px;
        left: 640px;
    }
}
@media (min-width: 1024px){
    #detail-responsive {
        right: -40px;
    }
}
@media (max-width: 768px){
    #detail-responsive {
        top: -400px;
    }
}
#pict-info {
    max-width: 120px;
    max-height: 120px;
}
@media (min-width: 768px){
    #bg-responsive {
        width: 100%;
        height: 140vh;
    }
}
@media (max-width: 767px){
    #bg-responsive {
        width: 100%;
        height: 280vh;
    }
}
@media (min-width: 769px){
    #form-position {
        top: -260px;
    }
}
@media (max-width: 768px){
    #form-position {
        top: -235px;
    }
}
@media (max-width: 768px){
    #card-position {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}
.has-color-yellow{
    color: #FFB600;
}
.has-text-grey{
    color: #707070 !important;
}
a:hover {
  color: #FFB000 !important;
}

</style>
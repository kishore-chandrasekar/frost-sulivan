<template>
    <div class="image">
        <h2 class="mb-5">BlogLancer.com</h2>
        <div class="w-100 d-flex justify-content-center align-items-center ">
            <div class="card w-25 cardItem">
                <div class="p-5">
                    <h4>Register</h4>
                    <div>
                        <div class="mb-3 input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text d-flex align-items-center">
                                    <i class="fa fa-user fa-lg" style="line-height: 1.5 !important;"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="fullname" v-model="fullname" placeholder="Fullname" @input="removeErrMsg"
                                required />
                        </div>
                        <div class="mb-3 input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text d-flex align-items-center">
                                    <i class="fa fa-envelope fa-large" style="line-height: 2 !important;"></i>
                                </span>
                            </div>
                            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email" @input="removeErrMsg"
                                required />
                        </div>
                        <div class="mb-3 input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text d-flex align-items-center">
                                    <i class="fa fa-user fa-lg" style="line-height: 1.5 !important;"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="username" v-model="username" placeholder="Username" @input="removeErrMsg"
                                required />
                        </div>
                        <div class="mb-3 input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text d-flex align-items-center">
                                    <i class="fa fa-lock fa-lg" style="line-height: 1.5 !important;"></i>
                                </span>
                            </div>
                            <input class="form-control" id="password" :type="showPassword ? 'text' : 'password'" @input="removeErrMsg"
                                v-model="password" placeholder="Password" required />
                            <div class="input-group-append">
                                <span class="input-group-text d-flex align-items-center">
                                    <i style="line-height: 1.5 !important;" class="fa"
                                        :class="showPassword ? 'fa-eye-slash fa-lg' : 'fa-eye fa-lg'"
                                        @click="togglePasswordVisibility"></i>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start" style="font-size: 13px;">
                            <a href="/">Existing user? Login!</a><br />
                        </div>
                        <div class="d-flex justify-content-start"><span v-if="errMsg" style="color: red;font-size: 13px;">{{
                            errMsg }}</span></div>
                        <button type="submit" class="btn btn-primary mt-2" @click.prevent="register">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cardItem {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s; 
  margin: 20px auto;
  text-align: center;
}

.cardItem:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.image {
  
  margin-top: -60px;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h2{
    font-weight: 800;
    color:ghostwhite;
}

</style>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            fullname: '',
            email: '',
            username: '',
            password: '',
            showPassword: false,
            errMsg:''
        };
    },
    methods: {
        async register() {
            try {
                if (this.username && this.password) {
                    let data = {
                        fullName: this.fullname,
                        email: this.email,
                        username: this.username,
                        password: this.password
                    }

                    let apiCall = await axios.post('/users/newUser', data)
                    // console.log(apiCall.data)
                    if(apiCall?.data == "User registered successfully"){
                        alert('New user created , Please login using the credentials')
                        this.$router.push('/');
                    }
                    
                } else {
                    this.errMsg = 'All fields are required'
                }
            } catch (error) {

                console.log(error?.response?.data)
                this.errMsg = error?.response?.data


            }

        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        removeErrMsg() {
            this.errMsg = ''
        }
    },
};
</script>
  
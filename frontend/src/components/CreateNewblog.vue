<template>
    <div>
        <div class="top-bar d-flex justify-content-between">
            <h4>Welcome back ,{{ user }}</h4>
            <div>
                <button class="btn btn-success me-3" @click="homePage">Go back</button>
                <button class="btn btn-secondary" @click="logout">Logout</button>
            </div>
        </div>
        <div class="cardItem p-4 w-50">
            <div>
                <label>Author</label><br />
                <input type="text" v-model="user" disabled class="w-100"/>
            </div>
            <div>
                <label>Content</label><br />
                <textarea rows="4" placeholder="Enter text" v-model="content" class="w-100"></textarea>
                
            </div>
            <div class="d-flex justify-content-start"><span v-if="errMsg" style="color: red;font-size: 13px;">{{
                            errMsg }}</span></div>
            <div class="d-flex justify-content-center" ><button class="btn btn-success" @click="postAblog">Post</button></div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            content:'',
            user: sessionStorage.getItem('user'),
            errMsg :''
        };
    },
    mounted() {
        if(!sessionStorage.getItem('token')&& !sessionStorage.getItem('user')){
            sessionStorage.clear()
            this.$router.push('/');
        }
    },
    methods: {
        async postAblog() {

          if(this.content && this.user){
            try {
            let data = {
                author:this.user,
                content:this.content
            }
            let apiCall = await axios.post('/blog/New',data)
            console.log(apiCall.data)
            if(apiCall.data =='Blog post created successfully'){
                alert("Blog posted successfully")
                this.$router.push('/Home');
            }else{
                alert('Something went wrong')
            }
          } catch (error) {
            console.log(error)
            alert('Something went wrong')
          }
          }else{
            this.errMsg = "Content is required"
          }
           
        },
        homePage() {
            this.$router.push('/Home');
        },
        logout(){
            sessionStorage.clear()
            this.$router.push('/');

        }
    },
};
</script>

<style scoped>
.top-bar {
    margin-top: -65px;
    background-color: #333;
    color: white;
    padding: 10px;
}

.cardItem {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    margin: 20px auto;

}
</style>
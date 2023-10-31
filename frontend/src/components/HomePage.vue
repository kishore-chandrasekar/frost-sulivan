<template>
    <div>
        <div class="top-bar d-flex justify-content-between">
            <h4>Welcome back , {{ user }}</h4>
            <div>
                <button class="btn btn-success me-3" @click="createBlog">Post a Blog</button>
                <button class="btn btn-secondary" @click="logout">Logout</button>
            </div>
        </div>

        <div class="tabs">
            <ul>
                <li :class="{ active: activeTab === 'all' }">
                    <button @click="activeTab = 'all'">All Blogs</button>
                </li>
                <li :class="{ active: activeTab === 'my' }">
                    <button @click="activeTab = 'my'">My Blogs</button>
                </li>
            </ul>
        </div>

        <div v-if="activeTab === 'all'" class="blog-list">
            <!-- <h2>All Blogs</h2> -->
            <div v-for="blog in allBlogs" :key="blog.id" class="card d-flex justify-content-start w-50 p-3 mt-4 blogCard">
                <div><span>Author :</span>{{ blog?.author }}</div>
                <div><span>Posted At :</span>{{ blog?.createdAt }}</div>
                <div><span>Content :</span>{{ blog?.content }}</div>
            </div>
        </div>

        <div v-if="activeTab === 'my'" class="blog-list">
            <!-- <h2>My Blogs</h2> -->
            <div v-for="blog in myBlogs" :key="blog.id" class="card d-flex justify-content-start w-50 p-3 mt-4 blogCard">
                <div><span>Author :</span>{{ blog?.author }}</div>
                <div><span>Posted At :</span>{{ blog?.createdAt }}</div>
                <div><span>Content :</span>{{ blog?.content }}</div>
            </div>
        </div>
        <div v-if="myBlogs.length <= 0 && activeTab === 'my'"
            class="card d-flex justify-content-start w-50 p-3 mt-4 blogCard">
            You haven't posted any blogs yet
        </div>

    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            activeTab: 'all', 
            allBlogs: [],
            myBlogs: [],
            user: sessionStorage.getItem('user')
        };
    },
    mounted() {
        if(!sessionStorage.getItem('token')&& !sessionStorage.getItem('user')){
            sessionStorage.clear()
            this.$router.push('/');
        }else{
            this.fetchAllBlogs();

        }
    },
    methods: {
        async fetchAllBlogs() {
            try {
                let apiCall = await axios.get('/blog/')
                // console.log(apiCall.data)
                this.myBlogs = apiCall?.data?.filter((e) => e.author == this.user)
                setTimeout(() => {
                    this.allBlogs = apiCall?.data
                }, 1000); 
            } catch (error) {
                console.log(error)
                alert('Something went wrong')
            }
        },
        createBlog() {
            this.$router.push('/newblog');
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

span {
    font-weight: 600;
    color: red;
}

.blogCard {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    margin: 20px auto;

}

.tabs {
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
}

.tabs ul {
    list-style: none;
    padding: 0;
    display: flex;
}

.tabs li {
    margin: 0 10px;
}

.tabs li button {
    padding: 5px 10px;
    border: 1px solid #333;
    background-color: #fff;
    cursor: pointer;
}

.tabs li.active button {
    background-color: #333;
    color: white;
}

.blog-list {
    margin: 20px 0;
}
</style>
  
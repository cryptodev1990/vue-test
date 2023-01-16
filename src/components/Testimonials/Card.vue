<template>
    <div class="testimonials-card">
        <img class="card-img-top" :src="img_source" alt="Card image cap">
        <div class="card-body p-2">
            <h5 class="card-title">{{title}}</h5>
            <h7 class="card-author">{{ author }}</h7>
            <p class="card-text">{{ content }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"CardComponent",
    props:{
        img: String,
        title: String,
        author: String,
        content: String
    },
    data(){
        return {
            img_source:this.img
        }
    }
}
</script>
<style>
.testimonials-card{
    margin-top: 20px;
    background: rgba(16, 12, 26, 0.8);
    backdrop-filter: blur(100px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 2px 16px 16px 16px;
}
.card-body{
    background-color: ;
}

.card-author{
    color: #6D7280;
}
</style>
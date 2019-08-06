<template>
    <div>123</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    created(){
        console.log(this.$store.state.text);
        this.airQuality();
    },
    methods:{
        airQuality(){
			var data = {}
			this.$api.airQuality(data).then((res)=>{
				console.log(JSON.stringify(res));
			});
		},

    }
}
</script>

<style scoped>

</style>

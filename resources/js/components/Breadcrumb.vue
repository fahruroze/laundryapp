<template>
        <ol class="breadcrumb float-sm-right">
            <li><router-link :to="{ name: 'home'}">Home</router-link> / </li><br>&nbsp;      
            <li class="active">{{ $route.meta.title }}</li>
        </ol>
</template>


<script>
export default {
    
}
</script>
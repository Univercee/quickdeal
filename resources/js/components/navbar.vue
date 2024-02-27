<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark align-items-start px-4">
        <ul class="navbar-nav d-flex flex-column justify-content-start gap-3">
            <li class="nav-item active">
                <router-link class="nav-link text-primary" :to="{name:'index'}">Главная</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-primary" :to="{name:'taskmanager'}">Диспетчер задач</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>
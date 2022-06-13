<template>
    <section class="nav">
        <div class="nav-logo">
            <img src="../assets/NotToxic_Logo.png" alt="logo" width="100">
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
                <li class="nav-list-item"><router-link to="/">About Me</router-link></li>
                <li class="nav-list-item"><router-link to="/software">Software I use</router-link></li>
                <li class="nav-list-item"><router-link to="/community-posts">Community Posts</router-link></li>
                <li class="nav-list-item"><router-link to="/contacts">Contacts</router-link></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nav {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        background: #1e272e;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20vw;
        .nav-logo {
            margin: 50px auto;
            img {
                border-radius: 50%;
            }
        }
        .nav-menu {
            color: #05c46b;
        }
    .nav-menu-list {
        list-style: none;
        padding: 0;
        .nav-list-item {
            background: #485460;
            padding: 10px 20px;
            text-align: center;
            margin: 10px auto;
            border-radius: 10px;
            &:hover {
                background: #808e9b;
                color: #0be881;
            }
            a {
                color: #05c46b;
                &:hover{
                    color: #0be881;
                }
            }
        }
    }
    }
</style>
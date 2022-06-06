<template>
    <section class="nav">
        <div class="nav-logo">
            <img src="../assets/NotToxic_Logo.png" alt="logo" width="60">
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
                <li class="nav-list-item"><router-link to="/">About Me</router-link></li>
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
        background: #1e272e;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .nav-logo {
            margin: 20px auto;
            img {
                border-radius: 50%;
            }
        }
        .nav-menu {
            width: 100%;
        }
        .nav-menu-list{
            list-style: none;
            padding: 0;
            display: flex;
            margin: 0;
            color: #05c46b;
            li {
                width: 50%;
                text-align: center;
                background: #485460;
                padding: 10px 0;
                border-radius: 10px;
                margin: 10px 10px;
            &:hover {
                    background: #808e9b;
                    color: #0be881;
                }
            }
            a {
                color: #05c46b;
                &:hover{
                    color: #0be881;
                }
            }
        }
    }

</style>
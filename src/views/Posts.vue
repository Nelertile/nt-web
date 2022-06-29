<template>
    <div class="about-card">
        <div class="card-title">
            <img src="../assets/NotToxic_Logo.png" 
            alt="logo" class="avatar" width="120"/>
            <div class="title-text-content">
                <p>Community Posts</p>
                <h2>Nelertile</h2>
            </div>
        </div>
        <div class="card-content">
            <ul>
                <li><router-link to="/posts/02"><h1>Music News!</h1></router-link></li>
                <li><router-link to="/posts/01"><h1>New Website!</h1></router-link></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .about-card {
        background: #1e272e;
        padding: 3rem;
        border-radius: 10px;
        color: #05c46b;
        .card-title {
            display: flex;
            align-items: center;
            background: #485460;
            border-radius: 10px;
            .avatar {
                border-radius: 50%;
                margin: 5px 20px 5px 5px;
            }
            .title-text-content {
                p {
                    margin-bottom: 0;
                }
                h2{
                    margin-top: 0;
                    font-family: 'Octarine', cursive;
                }
            }
        }
        .card-content {
            p {
                line-height: 1.5;
                margin: 30px auto;
            }
            ul {
                padding: 0;
            }
            li {
                list-style: none;
            }
            h2, a {
                color: #05c46b;
            }
        }
    }
</style>
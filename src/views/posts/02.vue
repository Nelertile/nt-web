<template>
    <div class="about-card">
        <div class="card-title">
            <img src="../../assets/NotToxic_Logo.png" 
            alt="logo" class="avatar" width="120"/>
            <div class="title-text-content">
                <p>Author</p>
                <h2>NotToxic</h2>
                <router-link to="/community-posts"><img src="../../assets/back-arrow.svg" width="20"></router-link>
            </div>
        </div>
        <div class="card-content">
            <p>Hi! It's me, NotToxic. I'm here to talk about some news.</p>
            <p>1. I have a new soundcloud.
                I decided to delete the old one and make a new one. This means that it will take a while for my music to be available.
            </p>
            
            <p>
               2. I'm getting a new stream overlay.
                Thanks to <a href="https://zetvue.carrd.co/">Zetvue</a> i'm getting a beautiful new stream overlay!
            </p>
            <p>Alright, that was all for this time, see you!</p>
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
            p, a{
                line-height: 1.5;
                margin: 30px auto;
                color: #05c46b;
            }
        }
    }
</style>
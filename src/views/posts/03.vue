<template>
    <div class="about-card">
        <div class="card-title">
            <img src="../../assets/NotToxic_Logo.png" 
            alt="logo" class="avatar" width="120"/>
            <div class="title-text-content">
                <p>Author</p>
                <h2>Nelertile</h2>
                <router-link to="/community-posts"><img src="../../assets/back-arrow.svg" width="20"></router-link>
            </div>
        </div>
        <div class="card-content">
            <p>Hi, I'm Nelertile. But you can call me Tile. I just rebranded from NotToxic.</p>
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
        }
    }
</style>
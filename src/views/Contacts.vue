<template>
    <div class="about-card">
        <div class="card-title">
            <img src="../assets/NotToxic_Logo.png" 
            alt="logo" class="avatar" width="120"/>
            <div class="title-text-content">
                <p>Contacts</p>
                <h2>NotToxic</h2>
            </div>
        </div>
        <div class="card-content">
            
                <a href="https://discord.gg/Mk598VYkEz">
                    <img src="../assets/discord.svg" width="60"/>
                </a>
                <a href="https://www.youtube.com/channel/UCJukw7GFBmagAWuRLnStvqA">
                    <img src="../assets/youtube.svg" width="60"/>
                </a>
                <a href="https://twitter.com/NotToxicDev">
                    <img src="../assets/twitter.svg" width="60"/>
                </a>
                <a href="https://github.com/NotToxicDev">
                    <img src="../assets/github-original.svg" width="60"/>
                </a>
                <a href="https://www.npmjs.com/~nottoxicdev">
                    <img src="../assets/npm-original-wordmark.svg" width="60"/>
                </a>
                <a href="https://open.spotify.com/artist/5UQVeMYia8lvZaXngOGcne?si=3UgIRvJJQFGmPVOgFfnMhA">
                    <img src="../assets/spotify.svg" width="60"/>
                </a>
                <a href="https://soundcloud.com/nottoxic">
                    <img src="../assets/soundcloud.svg" width="60"/>
                </a>
            
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
            display: flex;
            flex-direction: row;
            padding: 10px 0 0 0;
            justify-content: center;

            a{
                margin: 5px;
            }
        }
    }
</style>
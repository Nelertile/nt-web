<template>
    <div class="about-card">
        <div class="card-title">
            <img src="../assets/NotToxic_Logo.png" 
            alt="logo" class="avatar" width="120"/>
            <div class="title-text-content">
                <p>About Me</p>
                <h2>Nelertile</h2>
            </div>
        </div>
        <div class="card-content">
            <p>Hello, I'm a swedish Musician, Developer, 
                Pixel Artist and Content Creator who generally loves open-world games.
                For music, I generally enjoy Lo-Fi and J-Pop music, but also video game music. </p>
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
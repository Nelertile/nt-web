<template>
    <div class="about-card">
        <div class="card-title">
            <img src="../assets/NotToxic_Logo.png" 
            alt="logo" class="avatar" width="120"/>
            <div class="title-text-content">
                <p>About Me</p>
                <h2>NotToxic</h2>
            </div>
        </div>
        <div class="card-content">
            <p>Hello, I'm a swedish Musician, Developer, 
                Pixel Artist and Content Creator who generally loves open-world games.
                For music, I generally enjoy Lo-Fi and J-Pop music, but also video game music. </p>
            <h3>Software i use</h3>
            <table width="100%">
                <tr>
                    <th>Purpose</th>
                    <th>Software</th>
                </tr>
                <tr>
                    <td>Design</td>
                    <td>Photoshop, paint.net, Aseprite</td>
                </tr>
                <tr>
                    <td>Recording</td>
                    <td>OBS Studio</td>
                </tr>
                <tr>
                    <td>Video Editing</td>
                    <td>DaVinci Resolve 17</td>
                </tr>
                <tr>
                    <td>Music Production</td>
                    <td>Waveform 11 Free, Audacity</td>
                </tr>
                <tr>
                    <td>Developing</td>
                    <td>VSCode, Unity, google.com</td>
                </tr>
                <tr>
                    <td>Planning</td>
                    <td>Trello, Notion</td>
                </tr>
            </table>
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
        table {
            border-spacing: 0px;
            margin: 50px auto;
            tr th, tr td {
                border: 1px solid #485460;
                border-top: none;
                padding: 5px;
                text-align: center;

                &:first-of-type {
                    border-left: none;
                }

                &:nth-of-type(2) {
                    border-right: none;
                }
            }
        }
    }
</style>
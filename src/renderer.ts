import axios from "axios";
import * as module from "module";
import './index.css'

let firstLine: number, secondLine: number, firstButton: string, secondButton: string, intHelper = 1

function sleep(millis: any) {
    const date: any = new Date();
    let curDate: any = null;
    do {
        curDate = new Date();
    }
    while (curDate - date < millis);
}


Promise.all([axios.get('https://raw.githubusercontent.com/Devollox/Devollox/main/config.json')])
    .then(function (result) {
        let JSON = result[0].data, firstButton = JSON.buttonSecond.firstButton
        const a: any = document.getElementById('wrapper_user_info')

        setInterval(() => {
            a.innerHTML = `
                <div class="assets__5bee0">
                    <img title="Fuck off ${JSON.objectSmallText[Math.floor(Math.random() * JSON.objectSmallText.length)]}" style="object-fit: cover" width="60" height="60" alt="Fuck off Python" src="${JSON.large_image}" class="assetsLargeImageUserPopoutV2__01dc1 assetsLargeImage_b88a59 assetsLargeMaskUserPopoutV2_a90d5f">
                       <div class="wrapper_image">
                       <img title="${JSON.objectSmallText[Math.floor(Math.random() * JSON.objectSmallText.length)]}" style="object-fit: cover" width="20" height="20" alt="Java" src="${JSON.small_image}" class="small_image assetsSmallImageUserPopoutV2__32c70 assetsSmallImage__6b973" aria-label="Java">
                    </div>
                    <div class="wrapper_intro_title ">
                        <div class="wrapper_info">
                            <a class="textRow__4750e" style="display: block">Rich Presences</a>
                            <a class="textRow__4750e">${JSON.objectSmallText[Math.floor(Math.random() * JSON.objectSmallText.length)]}</a>
                        </div>
                        <div>
                            <div class="textRow__4750e">${JSON.objectDetails[Math.floor(Math.random() * JSON.objectDetails.length)]}/${JSON.objectState[Math.floor(Math.random() * JSON.objectState.length)]}</div>
                        </div>
                        <span class="textRow__4750e" style="display: block">Line: ${Math.floor(Math.random() * 40)}/${Math.floor(Math.random() * 20)} ${Math.floor(Math.random() * 20) + 13}.${Math.floor(Math.random() * 40) + 26}kb</a>
                    </div>
                    <div class="flex_f5fbb7 vertical__1e37a justifyStart__42744 alignStretch_e239ef wrap_e504b7 actionsUserPopoutV2__025d9 buttonsWrapper_aa7b69 vertical_d613c2" style="flex: 0 1 auto;">
                        <div  class="button__9491f button_afdfd9 lookFilled__19298 buttonColor__01bf8 buttonSize_ee7672 grow__4c8a4">
                            <div class="contents_fb6220">${firstButton}</div>
                        </div>
                        <div style="margin-left: 5px" class="button__9491f button_afdfd9 lookFilled__19298 buttonColor__01bf8 buttonSize_ee7672 grow__4c8a4">
                            <div class="contents_fb6220">${JSON.buttonSecond.firstButton}</div>
                        </div>
                    </div>
                </div>
               
            `

                if (firstButton === "My WebSite." || firstButton === JSON.buttonFirst.second.firstButton) {
                    firstButton = JSON.buttonFirst.first.firstButton
                    secondButton = JSON.buttonFirst.first.secondButton
                    return {firstButton, secondButton}
                } else {
                    firstButton = JSON.buttonFirst.second.firstButton
                    secondButton = JSON.buttonFirst.second.secondButton
                    return {firstButton, secondButton}
                }
        }, 3 * 1000)
    })


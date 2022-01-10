class Message extends HTMLElement {
    constructor(){
        super();
        this.inner = this.attachShadow({mode: "open"});
        this.inner.innerHTML = `
            <style>
                div{
                    width: 250px;

                    margin-top: 30px;
                    padding: 10px 20px;

                    z-index: 100;
                    border-radius: 32px;
                    box-sizing: border-box;
                    position: relative;

                    background-color: ${this.getAttribute('type') === 'error' ? '#F64B3C' : '#2D6A4F'};
                    background-image: url(./assets/images/icons/${this.getAttribute('type') === 'error' ? 'fail_bottom' : 'success_bottom'}.png);
                    background-position: left bottom;
                    background-size: 35px;
                    background-repeat: no-repeat;
                    color: white;
                    cursor: pointer;

                    transform: scale(0);
                    animation: 
                        appear forwards ease-in 0.2s,
                        disappear forwards cubic-bezier(1, 0.1, 1, 1) 4s;
                }
                .icon{
                    width: 20%;
                    
                    position: absolute;

                    top: -25px;
                }
                p{
                    font-size: 0.8rem;

                    margin: 0 20px 0 60px;
                }
                p span{
                    display: block;
                    font-size: 1.1rem;
                    font-weight: bold;
                }
                @keyframes disappear{
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                @keyframes appear {
                    0% {
                        transform: scale(0);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            </style>
            <div>
                <img class="icon" src="./assets/images/icons/${this.getAttribute('type') === 'error' ? 'fail' : 'success'}.png" />
                <p>
                    <span>${this.getAttribute('type') === 'error' ? 'Алдаа' : 'Амжилттай'}</span>
                    ${this.getAttribute('message') || '-'}
                </p>
            </div>
        `;
        setInterval(() => {
            this.parentElement.remove();
        }, 4000);
        this.parentElement.addEventListener("click", () => {
            this.remove();
        })
    }
}
customElements.define('message-single', Message);
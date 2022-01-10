module.exports = {
    errorString:
        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Санаа</title>
                    <style>
                        *{
                            padding: 0; margin: 0;
                        }
                        .error-page{
                            height: 100vh;
                            display: flex;
                        
                            justify-content: center;
                            align-items: center;
                        
                            font-size: 72px;
                        }
                        .error-text{
                            padding: 20px;
                        
                            text-align: center;
                        }
                        .error-page p {
                            display: inline-block;
                        }
                    </style>
                </head>
                <body>
                    <div class="error-page">
                        <div class="error-text">
                            <p>Алдаа гарлаа</p>
                            <p>:(</p>
                        </div>
                    </div>
                </body>
            </html>`
}

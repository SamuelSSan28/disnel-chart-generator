import Document,{Html,Head,Main,NextScript} from 'next/document'

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />    
                    <link rel="stylesheet" href="https://unpkg.com/primeicons@4.1.0/primeicons.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lexend:wght@400;500;600&display=swap" rel="stylesheet"/>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
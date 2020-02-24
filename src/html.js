import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}

                    {/*====== Favicon Icon ======*/}
                    <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
                    {/*====== Slick css ======*/}
                    <link rel="stylesheet" href="css/slick.css" />
                    {/*====== Animate css ======*/}
                    <link rel="stylesheet" href="css/animate.css" />
                    {/*====== Nice Select css ======*/}
                    <link rel="stylesheet" href="css/nice-select.css" />
                    {/*====== Nice Number css ======*/}
                    <link rel="stylesheet" href="css/jquery.nice-number.min.css" />
                    {/*====== Magnific Popup css ======*/}
                    <link rel="stylesheet" href="css/magnific-popup.css" />
                    {/*====== Bootstrap css ======*/}
                    <link rel="stylesheet" href="css/bootstrap.min.css" />
                    {/*====== Fontawesome css ======*/}
                    <link rel="stylesheet" href="css/font-awesome.min.css" />
                    {/*====== Default css ======*/}
                    <link rel="stylesheet" href="css/default.css" />
                    {/*====== Style css ======*/}
                    <link rel="stylesheet" href="css/style.css" />
                    {/*====== Responsive css ======*/}
                    <link rel="stylesheet" href="css/responsive.css" />
           


                
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}

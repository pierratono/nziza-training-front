const React = require("react")
exports.onRenderBody = ({
    setHeadComponents,
    setPreBodyComponents,
    setPostBodyComponents,
}) => {
    setHeadComponents([
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"
            key="1" type="text/javascript"/>
    ])
    setPreBodyComponents([
        <script src="https://code.jquery.com/jquery-3.4.1.js "
            key="2" type="text/javascript" />,
    ])
    setPostBodyComponents([
        <script src="https://code.jquery.com/jquery-3.4.1.slim.js"
            key="3" type="text/javascript" />,

        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
            key="4" type="text/javascript" />,
    ])
}
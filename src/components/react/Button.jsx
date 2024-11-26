/* eslint-disable react/prop-types */

const Button = ({click, children, vlaue}) => {

    console.log(click)

    // const onc = e => {
    //     e.stopPropagation();
    //     // click("Md Hasan Uddin");
    //      click(value);
    // }; // এই ফাংশান টা ১৩ নম্বর লাইনে এক লাইনে লিখা আছে
    
    return (
        <>
            <button onClick={ e => {e.stopPropagation(); click(vlaue)}}>{children}</button>
        </>
    );
};

export default Button;
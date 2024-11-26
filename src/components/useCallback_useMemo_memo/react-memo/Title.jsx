/* eslint-disable react/prop-types */

import { memo } from "react";

const Title = ({title}) => {

    console.log('Render Title Component');

    return  <h1 className="text-3xl mb-10">{ title }</h1>
};

export default memo(Title);
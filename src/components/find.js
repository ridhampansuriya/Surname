import React, {useState,useEffect} from "react";

import suranmaes from "../surnames"


const Find = () => {
    const [lastname, setLastname] = useState();
    const [searchTerm, setsearchTerm] = useState('')
    // const surname = suranmaes;
    console.log(suranmaes);
    const onChange = (e) => {
        console.log("onchange function called")

        let {value} = e.target;
        console.log("onchange function value called befaore",value);
        value = value.replace(/[0-9]/g,"");
        value = value.replace(/[&\/\\#\-,+()$`|~%.;=[\]!@^_'":*?<>{}]/g, '');
        console.log("onchange function called after value",value);
        // setLastname(value);
        setsearchTerm(value);
    };
    useEffect(()=>{
        // setsearchTerm(suranmaes);
    });
    return (
        <div>
            <input type="text"
                   style={{width: '100%'}}
                   className="inputbar"
                   placeholder="Search.."
                   onChange={onChange}
                   title="Type in a category"
                   value={searchTerm}
            />
            <div>
                {suranmaes.filter((item) => {
                    if (searchTerm === "") {
                        return item
                    } else if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                }).map((item, index) =>
                    <div >
                       <p>{item}</p>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Find;
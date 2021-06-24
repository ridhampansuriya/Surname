import React, {useState,useEffect} from "react";

import suranmaes from "../surnames"


const Find = () => {
    const [lastname, setLastname] = useState('');
    const [searchTerm, setsearchTerm] = useState('')
    let [AB,setAB]= useState([])
    let [CD,setCD]= useState('');

    const onChange = (e) => {
         let {value} = e.target;
        value = value.replace(/[0-9]/g,"");
        value = value.replace(/[&\/\\#\-,+()$`|~%.;=[\]!@^_'":*?<>{}]/g, '');
        setsearchTerm(value);
    };
    console.log("hiii..")

    const onChangeXY =(event)=>{

        let {value} = event.target;
        var var2 = value.slice(-1);
        console.log("var2 in up",var2)
         let var3 = CD;
        console.log("var3 in up",var3)
        // setCD(var3);
        switch (var2) {
               case  'x':
                   var2 = var2.replace(/[xX]/g, 'y');
                            var3= var3 + var2;
                            // setCD(var3);
                            break;
                    case  'y':
                        var2 = var2.replace(/[yY]/g, 'x');
                        var3= var3 + var2;
                        // setCD(var3);
                        break;
                    default:
                        console.log("defult case");
                        var3= var3 + var2;
                        console.log("var3",var3);
                        setCD(var3);
                        // console.log("CD",CD)
                        // return AB;
                        break;
                }
        setCD(var3);
        console.log("CD",CD)
        setLastname(var3);
        console.log("lastname",lastname)
    }
    useEffect(()=>{
        // setsearchTerm(suranmaes);
    });
    return (
        <div>
            <input type="text"
                   style={{width: 'auto'}}
                   className="inputbar"
                   placeholder="Search.."
                   onChange={onChange}
                   title="Type in a category"
                   value={searchTerm}
            />
            {/*<input type="text"*/}
            {/*       style={{width: 'auto'}}*/}
            {/*       className="inputbar"*/}
            {/*       id="input-2"*/}
            {/*       placeholder="Search.."*/}
            {/*       onChange={onChangeXY}*/}
            {/*       // onKeyDown={onChangeXY}*/}
            {/*       title="Type in a category"*/}
            {/*       value={lastname}*/}
            {/*/>*/}

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
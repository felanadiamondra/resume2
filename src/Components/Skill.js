import React, { useState, useEffect } from "react"; 


const Skill = () => {
 
    return(
        <div className="mx-20 ml-40 p-10">
            <h1 className="text-center mt-10 font-bold text-blue_picton">Skills</h1>
            <div class="grid grid-cols-4 mt-10 gap-4">
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <h3>Framework and library</h3>
                    <img/>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">Languages programming / Mobile</div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">Databases</div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">Software</div>
             </div>
        </div>
)
}

export default Skill;
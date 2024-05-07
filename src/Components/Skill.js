import React, { useState, useEffect } from "react";
import dataskill from "../data/skill.json";


const Skill = () => {
 
    return(
        <div className="mx-20 ml-40 p-10">
            <h1 className="text-center mt-10 font-bold text-blue_picton">Skills</h1>
            <div class="grid grid-cols-4 mt-10 gap-4">
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-pink-200 bg-opacity-40 rounded-t-xl">
                        <h3>Framework and library</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <div>
                            {
                            dataskill.framework.map((data, idx) => (
                                <p key={idx} className="self-start">{data}</p>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-pink-200 bg-opacity-40 rounded-t-xl">
                        Languages programming & Mobile
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <div>
                            {
                            dataskill.languages.map((data, idx) => (
                                <p key={idx} className="self-start">{data}</p>
                            ))
                            }
                        </div>
                        <div>
                            {
                            dataskill.mobile.map((data, idx) => (
                                <p key={idx} className="self-start">{data}</p>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-pink-200 bg-opacity-40 rounded-t-xl">
                        Databases
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <div>
                            {
                            dataskill.databases.map((data, idx) => (
                                <p key={idx} className="self-start">{data}</p>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div class="h-96 bg-white bg-opacity-10 rounded-xl">
                    <div className="h-14 p-5 text-center flex items-center justify-center bg-pink-200 bg-opacity-40 rounded-t-xl">
                        Tools
                    </div>
                    <div className="flex flex-col justify-center items-center h-72">
                        <div>
                            {
                            dataskill.tools.map((data, idx) => (
                                <p key={idx} className="self-start">{data}</p>
                            ))
                            }
                        </div>
                    </div>
                </div>
             </div>
        </div>
)
}

export default Skill;
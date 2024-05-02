const Certification = () =>{

    const cert_name = [
        'kaggle',
        'orange',
        'gdsc',
        'osc',
        'mooc'
    ]

    return(
        <div class="mx-20 ml-40 p-10">
            <h1 className="text-center mt-10 mb-10 font-bold text-blue_picton">My certificate</h1>

            <div class="grid grid-cols-4 gap-4">
                { cert_name.map((cert, index) => {
                    return(
                        <div key={index} class="h-44 bg-slate-400 transition delay-75 duration-300 ease-in-out hover:scale-125 hover:shadow-md">
                            <img class="w-auto h-full " alt="" src={require(`../images/${cert}.png`)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Certification;
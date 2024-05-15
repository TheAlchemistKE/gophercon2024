import Speakers from '../assets/speaker-panel.png'

const HomeRevamped = () => {
    return(
        <main className={''}>
            {/* Hero Section */}
            <div className={'h-[100vh] w-full bg-hero-background bg-center bg-cover'}>
                <nav className={"w-full flex items-center justify-end py-5"}>
                    <a href="" className={"px-2 hover:text-[#0055E9] hover:font-semibold hover:underline hover:decoration-[#0055E9]"}>Home</a>
                    <a href="" className={"px-2 hover:text-[#0055E9] hover:font-semibold hover:underline hover:decoration-[#0055E9]"}>About</a>
                    <a href="" className={"px-2 hover:text-[#0055E9] hover:font-semibold hover:underline hover:decoration-[#0055E9] "}>Contact</a>
                    <a href="" className={"px-4 hover:text-[#0055E9] hover:font-semibold hover:underline hover:decoration-[#0055E9] mr-5"}>GopherCon 2024</a>

                </nav>
                <div className={"h-[100vh] flex flex-col justify-center items-center pb-[150px]"}>
                    <h1 className={"text-[#0055E9] text-6xl font-bold mb-4"}>GopherCon Africa</h1>
                    <p className={"w-1/2 text-center mb-4"}>We are a group is for Go Enthusiasts. We aim to create a
                        community around the language and share experiences adopting the language.</p>
                    <a href='#' className={"bg-[#0055E9] text-white font-semibold px-6 py-4 rounded-full"}>Tickets
                        Coming Soon</a>
                </div>

            </div>

            {/* Speakers Section*/}
            <section className={'h-[80vh] bg-[#EDF6FF] flex flex-row justify-center items-center px-6 py-4'}>
                <div className={'w-full pl-10'}>
                    <img
                        src={Speakers}
                        alt={"go lang logo"}
                        className="w-[80%] md:w-[70%] lg:w-[90%]"
                    />

                </div>
                <div>
                    <h2 className={'font-bold text-3xl mb-4'}>Call For Speakers</h2>
                    <p className={'mb-6'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur, reprehenderit! Adipisci
                        aliquid aperiam architecto assumenda consequatur distinctio dolorum error expedita facere illo
                        nostrum nulla quam quis, reiciendis rem voluptate?</p>
                    <a href='#' className={"bg-[#0055E9] text-white font-semibold px-6 py-4 rounded-full"}>Tickets
                        Apply</a>
                </div>
            </section>

            {/* Tickets Section */}
            <section className={'w-full'}>
                <h2  className={'text-4xl text-center font-semibold py-4'}>Tickets</h2>
                <p className={'font-light text-center mb-3'}>Get your  early bird tickets today!</p>

                <div className={'w-full grid grid-cols-3 px-6 py-4'}>
                    <div className={'flex flex-col justify-center items-center px-6 py-4 shadow-lg border'}>
                        <h3>Student Ticket</h3>
                        <span className={'font-bold'}>1500 KSH</span>
                        <p>In a bid to encourage students we have a package specific for you. </p>
                        <a href='#' className={"bg-[#0055E9] text-white font-semibold px-6 py-4 rounded-full"}>
                            Buy</a>
                    </div>
                    <div className={'flex flex-col justify-center items-center px-6 py-4 shadow-lg border mx-4'}>
                        <h3>Regular Ticket</h3>
                        <span className={'font-bold'}>2000 KSH</span>
                        <p>This package is for our veteran gophers who want to join us for our 2 day thrilling Gophercon
                            event. </p>
                        <a href='#' className={"bg-[#0055E9] text-white font-semibold px-6 py-4 rounded-full"}>
                            Buy</a>
                    </div>
                    <div className={'flex flex-col justify-center items-center px-6 py-4 shadow-lg border'}>
                        <h3>Corporate Ticket</h3>
                        <span className={'font-bold'}>3500 KSH</span>
                        <p>This conference ticket is designated for Corporate Gophers and is available for purchase as a
                            single ticket or in groups of five. </p>
                        <a href='#' className={"bg-[#0055E9] text-white font-semibold px-6 py-4 rounded-full"}>
                            Buy</a>
                    </div>
                </div>

                <div className={'bg-[#FFF4E5] w-3/4 mx-auto'}>
                    <p className={'text-[#663C00] text-center'}>
                        *All student must present a student identification card at the conference during check-in
                        Our refund policy is up to 45 days prior to the event. Kindly note that transactions fees are not refundable
                    </p>
                </div>
            </section>


        </main>
    )

}

export default HomeRevamped